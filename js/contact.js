(function () {
  const form = document.getElementById('contact_form');
  if (!form) return;

  const statusMessage = document.getElementById('form_status');

  const fieldRules = {
    input_name: {
      errorId: 'error_name',
      validate: function (value) {
        if (value.trim().length === 0) return 'El nombre es obligatorio.';
        if (value.trim().length < 3) return 'Escribe al menos 3 caracteres.';
        return '';
      }
    },
    input_email: {
      errorId: 'error_email',
      validate: function (value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim().length === 0) return 'El correo es obligatorio.';
        if (!emailPattern.test(value.trim())) return 'Ingresa un correo valido, por ejemplo nombre@dominio.com.';
        return '';
      }
    },
    input_subject: {
      errorId: 'error_subject',
      validate: function (value) {
        if (value.trim().length === 0) return 'El asunto es obligatorio.';
        if (value.trim().length < 3) return 'El asunto es demasiado corto.';
        return '';
      }
    },
    input_message: {
      errorId: 'error_message',
      validate: function (value) {
        if (value.trim().length === 0) return 'El mensaje es obligatorio.';
        if (value.trim().length < 10) return 'Agrega un poco mas de informacion, minimo 10 caracteres.';
        return '';
      }
    }
  };

  function validateField(inputEl) {
    const rule = fieldRules[inputEl.id];
    if (!rule) return true;

    const errorEl = document.getElementById(rule.errorId);
    const errorMessage = rule.validate(inputEl.value);

    inputEl.closest('.form_field').classList.toggle('has_error', Boolean(errorMessage));
    errorEl.textContent = errorMessage;
    inputEl.setAttribute('aria-invalid', errorMessage ? 'true' : 'false');

    return errorMessage === '';
  }

  Object.keys(fieldRules).forEach(function (id) {
    const inputEl = document.getElementById(id);
    inputEl.addEventListener('blur', function () { validateField(inputEl); });
    inputEl.addEventListener('input', function () {
      if (inputEl.closest('.form_field').classList.contains('has_error')) {
        validateField(inputEl);
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let formIsValid = true;
    Object.keys(fieldRules).forEach(function (id) {
      const inputEl = document.getElementById(id);
      const fieldIsValid = validateField(inputEl);
      if (!fieldIsValid) formIsValid = false;
    });

    if (!formIsValid) {
      statusMessage.textContent = 'Revisa los campos marcados antes de enviar.';
      statusMessage.className = 'form_status is_error';
      return;
    }

    statusMessage.textContent = 'Mensaje enviado correctamente. Te respondere pronto.';
    statusMessage.className = 'form_status is_success';
    form.reset();
  });
})();
