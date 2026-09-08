const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a, .nav-actions a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
