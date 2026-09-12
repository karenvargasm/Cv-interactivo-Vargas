(function () {
  var triggers = document.querySelectorAll('.stat_trigger');
  if (!triggers.length) return;

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      var popover = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (popover) popover.classList.toggle('is_open', !isExpanded);
    });
  });
})();