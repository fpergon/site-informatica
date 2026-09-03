/* =====================================================================
 * nucleo.js — Shell modular del sitio (header + nav + footer)
 * Se inyecta en cada página para mantener un diseño único y mantenible
 * sin dependencias de servidor. Compatible con embeds en Google Sites.
 * ===================================================================== */
(function () {
  'use strict';

  var paginaActiva = document.body.getAttribute('data-pagina') || 'inicio';

  // Modo embed: si la URL lleva ?embed se omiten la cabecera y el pie
  // para no duplicar la navegación cuando ya la aporta Google Sites.
  var modoEmbed = new URLSearchParams(window.location.search).has('embed');

  // Calcula la ruta base según dónde se aloje el archivo.
  // Soporta: raíz, cursos/*.html y cursos/*/*.html (ud1, ud2, etc.)
  var path = window.location.pathname || '';
  var enSubdirectorioCursos = /\/cursos\/[^/]+\//.test(path);
  var enCursos = path.indexOf('/cursos/') !== -1;
  var base, home;
  if (enSubdirectorioCursos) {
    base = '../';
    home = '../../index.html';
  } else if (enCursos) {
    base = '';
    home = '../index.html';
  } else {
    base = 'cursos/';
    home = 'index.html';
  }

  var enlaces = [
    { id: 'inicio',  texto: 'Inicio',        href: home },
    { id: '1cyr',    texto: '1º CyR',       href: base + '1cyr.html' },
    { id: '2cyr',    texto: '2º CyR',       href: base + '2cyr.html' },
    { id: '3cyr',    texto: '3º CyR',       href: base + '3cyr.html' },
    { id: 'tic',     texto: 'TIC I',         href: base + 'tic.html' },
    { id: 'licencia', texto: 'Licencia',    href: 'https://creativecommons.org/licenses/by-nc/4.0/' }
  ];

  function navItem(e) {
    var active = (e.id === paginaActiva);
    var clase = 'px-3 py-2 rounded-md text-sm font-medium transition ' +
      (active ? 'bg-brand-600 text-white' : 'text-slate-200 hover:bg-brand-700/60 hover:text-white');
    var target = e.href.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '';
    return '<a href="' + e.href + '"' + target + ' class="' + clase + '">' + e.texto + '</a>';
  }

  var navDesktop = enlaces.map(navItem).join('');
  var navMobile  = enlaces.map(navItem).join('');

  var header = ''
    + '<header class="sticky top-0 z-50 w-full bg-ink-900/95 backdrop-blur text-white shadow">'
    +   '<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">'
    +     '<a href="' + home + '" class="flex items-center gap-3">'
    +       '<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 font-black">P</span>'
    +       '<span class="leading-tight"><span class="block text-sm font-bold">IES Pintor Pedro Gómez</span>'
      +       '<span class="block text-xs text-brand-200">Computación y Robótica · TIC</span></span>'
    +     '</a>'
    +     '<nav class="hidden items-center gap-1 md:flex">' + navDesktop + '</nav>'
    +     '<button id="btn-menu" aria-label="Abrir menú" aria-expanded="false" class="rounded-md p-2 text-white hover:bg-white/10 md:hidden">'
    +       '<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>'
    +     '</button>'
    +   '</div>'
    +   '<nav id="menu-movil" class="hidden flex-col gap-1 px-4 pb-4 md:hidden">' + navMobile + '</nav>'
    + '</header>';

  var footer = ''
    + '<footer class="mt-12 border-t border-slate-200 bg-white">'
    +   '<div class="mx-auto max-w-6xl px-4 py-8">'
    +     '<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">'
    +       '<p class="text-sm text-slate-600">© IES Pintor Pedro Gómez · Departamento de Computación y Robótica.<br>Contenidos bajo <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener" class="font-semibold text-accent-600 underline">CC BY-NC 4.0</a>.</p>'
    +       '<div class="flex items-center gap-3 text-sm text-slate-500">'
    +         '<span class="rounded bg-brand-50 px-2 py-1 font-medium text-brand-700">Software libre</span>'
    +         '<span class="rounded bg-accent-50 px-2 py-1 font-medium text-accent-700">Hardware libre</span>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
    + '</footer>';

  if (modoEmbed) return; // Sin cabecera ni pie dentro del embed

  document.getElementById('shell-header').innerHTML = header;
  // El footer se inserta al final del body (después del contenido).
  document.body.insertAdjacentHTML('beforeend', footer);
})();
