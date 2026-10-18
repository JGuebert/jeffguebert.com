// Apply stored theme before first paint to prevent flash.
// Loaded synchronously in <head>; keep it tiny.
(function () {
  var t = localStorage.getItem('theme');
  if (t === 'light' || t === 'dark') {
    document.documentElement.setAttribute('data-theme', t);
  }
}());
