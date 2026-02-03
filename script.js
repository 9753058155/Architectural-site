// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= ACTIVE NAV =================
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color = "#ccc";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#d6b36a";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.8s ease";

  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});


});


