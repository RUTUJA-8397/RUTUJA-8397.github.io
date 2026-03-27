(function () {
  function toggleNav() {
    document.documentElement.classList.toggle('nav-hidden');

    try {
      const hidden = document.documentElement.classList.contains('nav-hidden');
      localStorage.setItem('navHidden', hidden ? '1' : '0');
    } catch (e) {}
  }

  function restoreState() {
    try {
      if (localStorage.getItem('navHidden') === '1') {
        document.documentElement.classList.add('nav-hidden');
      }
    } catch (e) {}
  }

  function initToggle() {
    restoreState();

    const btn = document.getElementById('toggle-nav');

    if (btn) {
      btn.removeEventListener('click', toggleNav); // prevent duplicate
      btn.addEventListener('click', toggleNav);
    }
  }

  // Works with Material for MkDocs instant navigation
  document.addEventListener('DOMContentLoaded', initToggle);
  document.addEventListener('pjax:complete', initToggle);  // KEY FIX
})();
