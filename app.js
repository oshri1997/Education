const stickyNav = function () {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function (e) {
    nav.classList.toggle("window__scroll", window.scrollY > 80);
  });
};
stickyNav();
