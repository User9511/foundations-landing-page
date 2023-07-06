const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const navWrapper = document.getElementById("navWrapper");
const navLinks = document.getElementById("nav-links");
const bars = document.querySelectorAll(".bar");

mobileMenuTrigger.addEventListener("click", function () {
  const expanded = mobileMenuTrigger.getAttribute("aria-expanded") === "true";
  mobileMenuTrigger.setAttribute("aria-expanded", !expanded);
  navWrapper.classList.toggle("active");
  navLinks.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
});
