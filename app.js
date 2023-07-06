// Get the button element
const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");

// Add a click event listener to the button
mobileMenuTrigger.addEventListener("click", function () {
  // Toggle the aria-expanded attribute value
  const isExpanded = mobileMenuTrigger.getAttribute("aria-expanded") === "true";
  mobileMenuTrigger.setAttribute("aria-expanded", !isExpanded);

  // Toggle the active class on the navWrapper and nav-links elements
  const navWrapper = document.getElementById("navWrapper");
  const navLinks = document.getElementById("nav-links");
  const bars = document.querySelector(".bar");
  navWrapper.classList.toggle("active");
  navLinks.classList.toggle("active");
  bars.classList.toggle("active");
});
