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

const scriptURL = "https://script.google.com/macros/s/AKfycbzBfsatNeo393VAbaB_LoedgFjO1s-z_HQ9Mbx_5-8kpJRM3duFywTAHJMnW05tcBq3/exec";
const form = document.forms["contact"];
const btnKirim = document.querySelector(".button");
const btnLoading = document.querySelector(".button-loading");
const popUp = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol diklik
  //tampilkan tombol loading
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim setelah berhasil terkirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      popUp.classList.toggle("d-none");
      //reset
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

const btnContinue = document.querySelector(".button-continue");

btnContinue.addEventListener("click", function () {
  popUp.classList.toggle("d-none");
});
