/* =====================================================================
 * app.js — Interacciones ligeras (vanilla JS, sin dependencias).
 *  - Menú móvil (toggle)
 *  - Tabs internos de cursos (Proyectos / Criterios BOJA)
 *  - Resaltado de enlaces activos ya gestionado en nucleo.js
 * ===================================================================== */
(function () {
  'use strict';

  /* ---------- Menú móvil ---------- */
  var btn = document.getElementById('btn-menu');
  var menu = document.getElementById('menu-movil');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var abierto = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
  }

  /* ---------- Tabs internos (data-tab-group) ---------- */
  document.querySelectorAll('[data-tab-group]').forEach(function (group) {
    var btns = group.querySelectorAll('.tab-btn');
    var panels = group.querySelectorAll('.tab-panel');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var target = b.getAttribute('data-tab');
        btns.forEach(function (x) {
          x.setAttribute('aria-selected', x === b ? 'true' : 'false');
        });
        panels.forEach(function (p) {
          p.classList.toggle('hidden', p.getAttribute('data-panel') !== target);
        });
      });
    });
  });

  /* ---------- Año dinámico en footer (si se usa) ---------- */
  var y = document.getElementById('anio');
  if (y) y.textContent = new Date().getFullYear();
})();
