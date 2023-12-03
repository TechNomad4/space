const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const menu = document.querySelector(".nav div:first-of-type");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  document.body.classList.toggle("fixed");
  menu.classList.toggle("show");
});
