const nav = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");
const navTrigger = document.querySelector(".nav-trigger");

navTrigger.addEventListener("click", () => {
  nav.classList.toggle("open");
  navTrigger.classList.toggle("nav-trigger-change");
});

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
    if (navTrigger.classList.contains("nav-trigger-change")) {
      navTrigger.classList.remove("nav-trigger-change");
    }
  });
});

const now = new Date();
const year = now.getUTCFullYear();

const displayYear = document.querySelector(".copyright span");
displayYear.textContent = year;
