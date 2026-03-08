/* ========================================
   Applied Cryptography and Privacy Group — Main JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.page-section');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  const brand = document.querySelector('.navbar-brand');

  function showSection(targetId) {
    sections.forEach(s => s.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('active');
    }

    navLinks.forEach(l => {
      if (l.getAttribute('data-section') === targetId) {
        l.classList.add('active');
      }
    });

    // Close mobile menu
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      showSection(sectionId);
      history.pushState(null, '', '#' + sectionId);
    });
  });

  // Brand click → Home
  brand.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
    history.pushState(null, '', '#home');
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Handle hash on load
  const hash = window.location.hash.replace('#', '') || 'home';
  showSection(hash);

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showSection(hash);
  });
});
