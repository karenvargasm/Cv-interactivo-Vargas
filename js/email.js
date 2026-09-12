(function () {
  var emailLink = document.getElementById('email_link');
  var toast = document.getElementById('email_toast');
  if (!emailLink || !toast) return;

  var address = emailLink.getAttribute('href').replace('mailto:', '').split('?')[0];

  emailLink.addEventListener('click', function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(function () {
        toast.textContent = 'Correo copiado: ' + address;
        toast.classList.add('is_visible');
        window.setTimeout(function () {
          toast.classList.remove('is_visible');
        }, 2600);
      });
    }
  });
})();