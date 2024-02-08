const header = document.querySelector(".header");
const hamburgerIcon = document.querySelector(".hamburger__menu");
// sticky header - change bg color
window.addEventListener("scroll", function () {
  const y = window.scrollY;
  if (y > 0) {
    header.classList.add("sticky__header");
  } else {
    header.classList.remove("sticky__header");
  }
});

// hamburger menu
hamburgerIcon.addEventListener("click", function () {
  document.body.classList.toggle("hamburger--active");
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    document.body.classList.toggle("hamburger--active");
  }
});
