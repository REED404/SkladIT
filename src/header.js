document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      header.style.animation = "top 0.3s forwards"
    }
    else {
      header.style.animation = "untop 0.3s forwards"
    }
  });
});