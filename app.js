const stickyNav = function () {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function (e) {
    nav.classList.toggle("window__scroll", window.scrollY > 80);
  });
};

const openTab = function () {
  const plusIconArray = document.querySelectorAll(".faq__icon");
  plusIconArray.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      const tab = icon.closest(".faq");
      tab.classList.toggle("open");
      const iconChild = icon.querySelector("i");
      if (iconChild.className === "uil uil-plus") {
        iconChild.className = "uil uil-minus";
      } else {
        iconChild.className = "uil uil-plus";
      }
    });
  });
};

const initial = function () {
  stickyNav();
  openTab();
};

initial();
