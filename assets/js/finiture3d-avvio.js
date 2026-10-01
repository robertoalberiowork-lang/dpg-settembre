/* DPG-WEB · avvio leggero del visualizzatore delle finiture (Rev. 05c).
   Finche' il visitatore non tocca il pezzo si vede un'immagine ferma (assets/pezzi/<pezzo>.webp, ~40 KB):
   scorrere la pagina non costa nulla. Al primo clic sul pezzo, su una finitura o su un colore si carica il 3D
   (assets/js/finiture3d.js), che riparte dal pezzo e dalla finitura scelti. */
(function () {
  'use strict';
  var BUNDLE = 'assets/js/finiture3d.js', caricato = false;
  function carica() {
    if (caricato) return; caricato = true;
    document.querySelectorAll('.f3d-scena').forEach(function (s) { s.classList.add('carica'); });
    var sc = document.createElement('script'); sc.src = BUNDLE; sc.async = true; document.head.appendChild(sc);
  }
  function testoFin(el, f, proc) {
    var b = el.querySelector('.f3d-f[data-f="' + f + '"]'), p = el.querySelector('.f3d-testo'); if (!b || !p) return;
    var saf = proc === 'SAF' && b.querySelector('.tx-saf');
    p.querySelector('.tagf').textContent = b.querySelector('.tg').textContent;
    p.querySelector('h3').textContent = b.querySelector('b').textContent;
    p.querySelector('p').textContent = (saf || b.querySelector('.tx')).textContent;
    el.querySelectorAll('.f3d-f').forEach(function (x) { var on = x === b; x.classList.toggle('attivo', on); x.setAttribute('aria-pressed', on); });
  }
  function pezzo(el, b) {
    el.querySelectorAll('.f3d-pz').forEach(function (x) { var on = x === b; x.classList.toggle('attivo', on); x.setAttribute('aria-pressed', on); });
    el.dataset.pezzo = b.dataset.pezzo;
    var img = el.querySelector('.f3d-poster'); if (img) img.src = 'assets/pezzi/' + b.dataset.pezzo + '.webp';
    el.querySelector('.f3d-nome').textContent = b.querySelector('b').textContent;
    el.querySelector('.f3d-proc').textContent = b.dataset.etichetta || '';
    var saf = b.dataset.proc === 'SAF';
    el.querySelectorAll('.f3d-f').forEach(function (f) { var no = (b.dataset.proc !== 'SLS' && f.dataset.f === 'F3') || (saf && f.dataset.f !== 'F0'); f.disabled = no; f.classList.toggle('esclusa', no); });
    el.querySelector('.f3d-saf').hidden = !saf;
    testoFin(el, 'F0', b.dataset.proc);
  }
  function campo(el, c) {
    el.querySelectorAll('.f3d-campo').forEach(function (x) { var on = x.dataset.campo === c; x.classList.toggle('attivo', on); x.setAttribute('aria-selected', on); });
    var primo = null;
    el.querySelectorAll('.f3d-pz').forEach(function (x) { var on = x.dataset.campo === c; x.hidden = !on; if (on && !primo) primo = x; });
    if (primo) pezzo(el, primo);
  }
  function prepara(el) {
    campo(el, el.dataset.campo);
    el.addEventListener('click', function (e) {
      if (el.__v) return;                       /* il 3D e' attivo: comanda lui */
      var c = e.target.closest('.f3d-campo'), p = e.target.closest('.f3d-pz'), f = e.target.closest('.f3d-f'), sw = e.target.closest('.f3d-sw');
      if (c) return campo(el, c.dataset.campo);
      if (p) return pezzo(el, p);
      if (f && !f.disabled) { el.dataset.avvioFin = f.dataset.f; testoFin(el, f.dataset.f, el.querySelector('.f3d-pz.attivo').dataset.proc); el.querySelector('.f3d-ral').hidden = f.dataset.f !== 'F2'; return carica(); }
      if (sw) { el.querySelectorAll('.f3d-sw').forEach(function (x) { x.setAttribute('aria-pressed', x === sw); }); return carica(); }
      if (e.target.closest('.f3d-scena')) return carica();
    });
    /* cambio lingua prima dell'avvio: il pannello rilegge i testi */
    document.addEventListener('click', function (e) { if (e.target.closest('.lang') && !el.__v) setTimeout(function () { var a = el.querySelector('.f3d-pz.attivo'); if (a) pezzo(el, a); }, 0); });
  }
  function via() { document.querySelectorAll('.f3d').forEach(prepara); }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', via) : via();
})();
