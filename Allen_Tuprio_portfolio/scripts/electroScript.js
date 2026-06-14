// ElectroPort JavaScript for interactivity

// hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// -------------------------------------------------------
// Active Nav Link Highlight on Scroll
// -------------------------------------------------------
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    // Section is "active" when its top is within 200px of viewport top
    if (rect.top <= 200 && rect.bottom > 0) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href').substring(1); // remove '#'
    if (href === current) {
      item.classList.add('active');
    }
  });
});