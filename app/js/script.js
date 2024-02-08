// header hamburger menu - Define variables

const main = document.getElementById("main");
const header = document.querySelector(".header");
const navList = document.querySelector(".navigation__list");

// sticky header - change bg color
window.addEventListener("scroll", function () {
  const y = window.scrollY;
  if (y > 0) {
    header.classList.add("sticky__header");
  } else {
    header.classList.remove("sticky__header");
  }
});
