export function parallaxInit(params) {
  var mainSceneAuto = document.getElementById("man-scene");
  // Сторінки без головного банера (services/pricing/...) не мають цього елемента
  if (!mainSceneAuto || typeof Parallax === "undefined") return;
  var parallax = new Parallax(mainSceneAuto, {
    hoverOnly: true,
    relativeInput: true,
  });
}
