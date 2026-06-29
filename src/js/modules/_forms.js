// Клієнтська валідація форм + дружній фідбек (тост / зміна блоку)
export function forms() {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.querySelectorAll("form").forEach((form) => {
    form.setAttribute("novalidate", ""); // валідуємо самі, без браузерних підказок

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let firstInvalid = null;
      form.querySelectorAll("input, textarea").forEach((el) => {
        if (el.type === "hidden" || el.type === "submit") return;
        clearError(el);
        const val = (el.value || "").trim();
        let err = "";

        if (el.type === "checkbox") {
          if (el.required && !el.checked) err = "Please confirm to continue.";
        } else if (el.required && !val) {
          err = "This field is required.";
        } else if ((el.type === "email" || el.name === "email") && val && !emailRe.test(val)) {
          err = "Please enter a valid email address.";
        } else if (el.type === "password" && el.minLength > 0 && val && val.length < el.minLength) {
          err = "Use at least " + el.minLength + " characters.";
        }

        if (err) {
          showError(el, err);
          if (!firstInvalid) firstInvalid = el;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const msg = form.dataset.success || "Thank you! We've received your submission.";
      if (form.dataset.successMode === "toast") {
        toast(msg);
        form.reset();
      } else {
        const panel = document.createElement("div");
        panel.className = "form-success";
        panel.setAttribute("role", "status");
        panel.innerHTML =
          '<span class="form-success__icon" aria-hidden="true">✓</span>' +
          '<p class="form-success__text">' + msg + "</p>";
        form.innerHTML = "";
        form.appendChild(panel);
      }
    });

    form.querySelectorAll("input, textarea").forEach((el) => {
      const clear = () => clearError(el);
      el.addEventListener("input", clear);
      el.addEventListener("change", clear);
    });
  });

  // --- помилка ЗАВЖДИ під відповідним полем ---
  function showError(el, msg) {
    el.classList.add("is-invalid");
    el.setAttribute("aria-invalid", "true");
    const field = el.closest(".field");
    if (field) {
      let m = field.querySelector(".field__error");
      if (!m) {
        m = makeMsg("field__error");
        field.appendChild(m);
      }
      m.textContent = msg;
    } else {
      // інпут без .field (напр. розсилка) — повідомлення під самим інпутом/блоком
      const block = el.closest(".subscripe__block") || el.closest("form");
      let m = block.nextElementSibling;
      if (!m || !m.classList || !m.classList.contains("form__error")) {
        m = makeMsg("form__error");
        block.parentNode.insertBefore(m, block.nextSibling);
      }
      m.textContent = msg;
    }
  }

  function clearError(el) {
    el.classList.remove("is-invalid");
    el.removeAttribute("aria-invalid");
    const field = el.closest(".field");
    if (field) {
      const m = field.querySelector(".field__error");
      if (m) m.remove();
    } else {
      const block = el.closest(".subscripe__block") || el.closest("form");
      const m = block && block.nextElementSibling;
      if (m && m.classList && m.classList.contains("form__error")) m.remove();
    }
  }

  function makeMsg(cls) {
    const p = document.createElement("p");
    p.className = cls;
    return p;
  }

  // --- гарний тост ---
  function toast(msg) {
    let host = document.querySelector(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      document.body.appendChild(host);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.innerHTML =
      '<span class="toast__icon" aria-hidden="true">✓</span><span class="toast__text">' + msg + "</span>";
    host.appendChild(t);
    requestAnimationFrame(() => t.classList.add("toast--show"));
    setTimeout(() => {
      t.classList.remove("toast--show");
      setTimeout(() => t.remove(), 400);
    }, 4200);
  }
}
