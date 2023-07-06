const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const navWrapper = document.getElementById("navWrapper");
const navLinks = document.getElementById("nav-links");
const bar = document.querySelector(".bar");

mobileMenuTrigger.addEventListener("click", function () {
  navWrapper.classList.toggle("active");
  navLinks.classList.toggle("active");
  bar.classList.toggle("active");
});

// Need to change mobilemenu aria-expanded to true when the menu is expanded
