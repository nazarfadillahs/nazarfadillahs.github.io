const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const menuToggleClose = document.querySelector(".menu-toggle-close");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

menuToggleClose.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", this.window.scrollY > 0);
});


