// Preloader
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 600); // minimum time the splash stays visible, even on fast connections
});

// Hover links
const root = document.documentElement;
const primaryColor =
  getComputedStyle(root).getPropertyValue('--accent');

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.1)";
    link.style.color = primaryColor;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
    link.style.color = "";
  });
});


// Active link highlighting on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

let isScrolling = false;

function updateActiveLink() {
  const headerOffset = document.querySelector('header').offsetHeight + 20;
  let current = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= headerOffset && rect.bottom > headerOffset) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    link.classList.toggle('active', href === current);
  });

  isScrolling = false;
}

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    requestAnimationFrame(updateActiveLink);
    isScrolling = true;
  }
});
updateActiveLink();
// 
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', location.pathname);
    }
  });
});

// hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('open');
});


// Shimmerin
const shimmer = document.getElementById('shimmer');
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth * 100).toFixed(1) + '%';
      const y = (e.clientY / window.innerHeight * 100).toFixed(1) + '%';
      shimmer.style.setProperty('--mx', x);
      shimmer.style.setProperty('--my', y);
    });

// Reveal scroll
const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));


