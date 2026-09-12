(function () {
  const root = document.documentElement;
  const toggleButton = document.getElementById('theme_toggle');
  if (!toggleButton) return;

  const toggleLabel = toggleButton.querySelector('.toggle_label');
  const STORAGE_KEY = 'cv_theme_preference';

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      toggleLabel.textContent = 'Modo claro';
      toggleButton.setAttribute('aria-pressed', 'true');
    } else {
      root.removeAttribute('data-theme');
      toggleLabel.textContent = 'Modo oscuro';
      toggleButton.setAttribute('aria-pressed', 'false');
    }
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  applyTheme(initialTheme);

  toggleButton.addEventListener('click', function () {
    const isLight = root.getAttribute('data-theme') === 'light';
    const nextTheme = isLight ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });
})();
