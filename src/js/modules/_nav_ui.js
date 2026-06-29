// Підсвічування активного пункту меню + «прилипання» хедера при скролі
export function navUi() {
  // --- Активне посилання ---
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu__nav .menu__link").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("menu__link--active");
    }
  });

  // --- Стан хедера при прокрутці ---
  const header = document.querySelector(".header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("header--scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
