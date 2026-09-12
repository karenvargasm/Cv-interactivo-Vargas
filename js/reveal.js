(function () {
  const revealItems = document.querySelectorAll('.reveal_on_scroll');
  const skillFills = document.querySelectorAll('.skill_fill');

  if ('IntersectionObserver' in window === false) {
    revealItems.forEach(function (item) { item.classList.add('is_visible'); });
    skillFills.forEach(function (fill) { fill.classList.add('is_filled'); });
    return;
  }

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is_visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(function (item) { revealObserver.observe(item); });

  const skillObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is_filled');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  skillFills.forEach(function (fill) { skillObserver.observe(fill); });
})();
