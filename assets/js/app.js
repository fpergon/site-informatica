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

  /* ---------- Quizzes interactivos ---------- */
  document.querySelectorAll('.quiz').forEach(function (quiz) {
    var opciones = quiz.querySelectorAll('.quiz-opcion');
    var resultado = quiz.querySelector('.quiz-resultado');
    var scoreEl = quiz.querySelector('.quiz-score');
    var correcta = quiz.getAttribute('data-correcta');
    var total = parseInt(quiz.getAttribute('data-total') || '1', 10);
    var aciertos = 0;
    var respondido = false;

    opciones.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (respondido) return;
        respondido = true;

        var elegida = btn.getAttribute('data-valor');

        // Marcar correcta/incorrecta visualmente
        opciones.forEach(function (b) {
          b.disabled = true;
          if (b.getAttribute('data-valor') === correcta) {
            b.classList.add('correcta');
          }
        });

        if (elegida === correcta) {
          aciertos++;
          if (resultado) {
            resultado.textContent = '¡Correcto! Bien hecho.';
            resultado.className = 'quiz-resultado correcto';
          }
        } else {
          btn.classList.add('incorrecta');
          if (resultado) {
            resultado.textContent = 'Incorrecto. La respuesta correcta está marcada en verde.';
            resultado.className = 'quiz-resultado incorrecto';
          }
        }

        if (scoreEl) {
          scoreEl.textContent = aciertos + ' / ' + total + ' correctas';
        }
      });
    });
  });

  /* ---------- Año dinámico en footer (si se usa) ---------- */
  var y = document.getElementById('anio');
  if (y) y.textContent = new Date().getFullYear();
})();
