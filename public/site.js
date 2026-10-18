// Theme toggle, footer year, and résumé email link.

document.getElementById('year').textContent = new Date().getFullYear();

var toggle = document.getElementById('theme-toggle');

function effectiveTheme() {
  var stored = document.documentElement.getAttribute('data-theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

toggle.setAttribute(
  'aria-label',
  effectiveTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
);

toggle.addEventListener('click', function () {
  applyTheme(effectiveTheme() === 'dark' ? 'light' : 'dark');
});

// Assemble email link at runtime so the address is never in the HTML source
(function () {
  var slot = document.getElementById('resume-email-slot');
  if (!slot) return;
  var addr = ['jeff', 'jeffguebert' + '.com'].join('@');
  var a = document.createElement('a');
  a.href = 'mailto:' + addr;
  a.className = 'contact-link';
  a.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"' +
    ' fill="none" stroke="currentColor" stroke-width="2"' +
    ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
    '<polyline points="22,6 12,13 2,6"/></svg>' + addr;
  slot.parentNode.replaceChild(a, slot);
}());
