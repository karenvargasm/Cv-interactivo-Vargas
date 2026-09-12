(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav_link');

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('is_active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const mobileToggle = document.getElementById('mobile_nav_toggle');
  const sideNav = document.getElementById('side_nav');

  if (mobileToggle && sideNav) {
    mobileToggle.addEventListener('click', function () {
      sideNav.classList.toggle('is_open');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        sideNav.classList.remove('is_open');
      });
    });
  }

  const yearEl = document.getElementById('current_year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
