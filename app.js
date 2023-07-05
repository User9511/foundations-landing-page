const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const navWrapper = document.getElementById("navWrapper");
const navLinks = document.getElementById("nav-links");

mobileMenuTrigger.addEventListener("click", function () {
  navWrapper.classList.toggle("active");
  navLinks.classList.toggle("active");
});
