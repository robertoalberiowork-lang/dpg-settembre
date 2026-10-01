/* DPG-WEB · visualizzatore delle finiture (Rev. 05c)
   Un pezzo vero per campo di applicazione, da ruotare col mouse, con la scala F0-F3 e il colore a specifica su F2.
   Il testo sta nella pagina (data-i); qui solo la scena. WebGL parte quando la sezione entra nello schermo.
   Pezzi: disegni Due Pi Greco (nessuna geometria di clienti), in assets/pezzi/*.bin (formato DPG1, posizioni quantizzate). */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';

/* orientamento di appoggio di ciascun pezzo (gradi, dopo il passaggio Z-su CAD -> Y-su scena) e quanto e' grande a schermo */
const POSA = {
  staffa:   { r: [0, 25, 0] },
  carter:   { r: [0, -25, 0] },
  dito:     { r: [0, -35, 0] },
  stella:   { r: [0, 0, 0] },
  nido:     { r: [0, -20, 0] },
  condotto: { r: [0, 40, 0] },
  fanale:   { r: [0, 60, 0] },
  ugello:   { r: [0, 0, 0] },
  diffusore:{ r: [0, 0, 0] },
};
const RAL = { 9005: 0x101012, 3020: 0xbb1e10, 7040: 0x9ba0a4, 9003: 0xecede8, 5010: 0x004f7c };
const GREZZO = { SLS: 0xe2ddd3, SAF: 0x5f6266 };

async function caricaPezzo(url) {
  const buf = await (await fetch(url)).arrayBuffer();
  const dv = new DataView(buf);
  if (String.fromCharCode(...new Uint8Array(buf, 0, 4)) !== 'DPG1') throw new Error('formato');
  const nv = dv.getUint32(4, true), nt = dv.getUint32(8, true);
  const mn = [0, 1, 2].map(i => dv.getFloat32(12 + i * 4, true)), mx = [0, 1, 2].map(i => dv.getFloat32(24 + i * 4, true));
  const grande = dv.getUint8(36) === 1;
  const q = new Uint16Array(buf, 40, nv * 3), pos = new Float32Array(nv * 3);
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) pos[i * 3 + k] = mn[k] + q[i * 3 + k] / 65535 * (mx[k] - mn[k]);
  const o = 40 + nv * 6, idx = grande ? new Uint32Array(buf.slice(o, o + nt * 12)) : new Uint16Array(buf.slice(o, o + nt * 6));
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.rotateX(-Math.PI / 2);                       // CAD Z-su -> scena Y-su
  g = toCreasedNormals(g, THREE.MathUtils.degToRad(30));
  uvScatola(g); return g;
}
/* UV a proiezione per faccia dominante: la grana della polvere ha bisogno di coordinate, gli STL non ne hanno */
function uvScatola(g) {
  const p = g.attributes.position, n = g.attributes.normal, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v; if (ax >= ay && ax >= az) { u = p.getZ(i); v = p.getY(i); } else if (ay >= az) { u = p.getX(i); v = p.getZ(i); } else { u = p.getX(i); v = p.getY(i); }
    uv[i * 2] = u; uv[i * 2 + 1] = v;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}
function grana(size, cells, amp, seed) {
  const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d');
  const img = x.createImageData(size, size); let s = seed; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < size * size; i++) { const v = 128 + (rnd() - .5) * 255 * amp; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
  x.putImageData(img, 0, 0);
  for (let i = 0; i < cells; i++) { const v = Math.floor(128 + (rnd() - .5) * 200 * amp); x.fillStyle = `rgb(${v},${v},${v})`; x.beginPath(); x.arc(rnd() * size, rnd() * size, 0.6 + rnd() * 2.2, 0, 7); x.fill(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.NoColorSpace; t.anisotropy = 8; return t;
}
function ambiente(renderer) {
  const s = new THREE.Scene(); s.background = new THREE.Color(0x050506);
  const box = (w, h, col, k, p, r) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(k), side: THREE.DoubleSide })); m.position.set(...p); if (r) m.rotation.set(...r); s.add(m); };
  box(6, 3, 0xffffff, 3.2, [-3, 4.5, 2], [Math.PI / 2.4, 0, .3]); box(.35, 7, 0xe63329, 5, [5, 1.5, -3], [0, -Math.PI / 3, 0]);
  box(.25, 6, 0xe63329, 3, [-5.5, 1.2, -2], [0, Math.PI / 3, 0]); box(10, .3, 0xffffff, .8, [0, .2, 6]); box(9, 2.2, 0xffffff, 3.4, [0, 5.5, -4.5], [Math.PI / 3, 0, 0]);
  const pm = new THREE.PMREMGenerator(renderer); return pm.fromScene(s, .02).texture;
}

class Visore {
  constructor(el) {
    this.el = el; this.base = el.dataset.base || 'assets/pezzi/';
    this.fin = 'F0'; this.ral = '9005'; this.cache = new Map(); this.pronto = false;
    this.scena = el.querySelector('.f3d-scena'); this.canvas = this.scena.querySelector('canvas');
    this.uiPezzi = [...el.querySelectorAll('.f3d-pz')]; this.uiFin = [...el.querySelectorAll('.f3d-f')];
    this.uiCampi = [...el.querySelectorAll('.f3d-campo')]; this.uiRal = [...el.querySelectorAll('.f3d-sw')];
    this.uiCampi.forEach(b => b.onclick = () => this.campo(b.dataset.campo));
    this.uiPezzi.forEach(b => b.onclick = () => this.pezzo(b.dataset.pezzo));
    this.uiFin.forEach(b => b.onclick = () => { if (!b.disabled) this.finitura(b.dataset.f); });
    this.uiRal.forEach(b => b.onclick = () => { this.ral = b.dataset.ral; this.uiRal.forEach(x => x.setAttribute('aria-pressed', x === b)); this.finitura('F2', true); });
    /* cambio lingua: i testi della pagina cambiano, il pannello li rilegge */
    document.addEventListener('click', e => { if (e.target.closest('.lang')) setTimeout(() => this.testoFin(), 0); });
    const primo = el.dataset.campo || (this.uiCampi[0] && this.uiCampi[0].dataset.campo);
    this.campo(primo, true);
    new IntersectionObserver(es => es.forEach(e => { this.visibile = e.isIntersecting; if (e.isIntersecting) { this.avvia(); this.ciclo(); } }), { rootMargin: '200px' }).observe(this.scena);
  }
  campo(c, primo) {
    this.uiCampi.forEach(b => { const on = b.dataset.campo === c; b.classList.toggle('attivo', on); b.setAttribute('aria-selected', on); });
    let sel = null;
    this.uiPezzi.forEach(b => { const on = b.dataset.campo === c; b.hidden = !on; if (on && !sel) sel = b.dataset.pezzo; });
    this.pezzo(sel, primo);
  }
  pezzo(k, primo) {
    this.k = k; const b = this.uiPezzi.find(x => x.dataset.pezzo === k); this.proc = b.dataset.proc || 'SLS';
    this.uiPezzi.forEach(x => { const on = x === b; x.classList.toggle('attivo', on); x.setAttribute('aria-pressed', on); });
    this.el.querySelector('.f3d-nome').textContent = b.querySelector('b').textContent;
    this.el.querySelector('.f3d-proc').textContent = b.dataset.etichetta || this.proc;
    /* F3 solo SLS; su PP SAF la finitura si concorda sul pezzo: resta il grezzo */
    this.uiFin.forEach(f => { const no = (this.proc !== 'SLS' && f.dataset.f === 'F3') || (this.proc === 'SAF' && f.dataset.f !== 'F0'); f.disabled = no; f.classList.toggle('esclusa', no); });
    if (this.uiFin.find(f => f.dataset.f === this.fin)?.disabled) this.fin = 'F0';
    this.el.querySelector('.f3d-saf').hidden = this.proc !== 'SAF';
    this.testoFin();
    if (this.pronto) this.mostra(); else if (!primo) this.avvia();
  }
  finitura(f, forza) {
    if (f === this.fin && !forza) return; this.fin = f; this.testoFin();
    if (this.pronto && this.mesh) this.passaggio();
  }
  testoFin() {
    this.uiFin.forEach(b => { const on = b.dataset.f === this.fin; b.classList.toggle('attivo', on); b.setAttribute('aria-pressed', on); });
    const b = this.uiFin.find(x => x.dataset.f === this.fin);
    const p = this.el.querySelector('.f3d-testo');
    p.querySelector('.tagf').textContent = b.querySelector('.tg').textContent; p.querySelector('h3').textContent = b.querySelector('b').textContent; p.querySelector('p').textContent = (this.proc === 'SAF' && b.querySelector('.tx-saf')) ? b.querySelector('.tx-saf').textContent : b.querySelector('.tx').textContent;
    const pz = this.uiPezzi.find(x => x.dataset.pezzo === this.k); if (pz) this.el.querySelector('.f3d-nome').textContent = pz.querySelector('b').textContent;
    this.el.querySelector('.f3d-ral').hidden = this.fin !== 'F2';
  }
  materiale() {
    const s = this.dim / 160, M = this.MAT;
    if (this.fin === 'F0') { M.F0.color.setHex(GREZZO[this.proc] || GREZZO.SLS); M.F0.bumpScale = 2.4 * s; return M.F0; }
    if (this.fin === 'F1') { M.F1.bumpScale = .9 * s; return M.F1; }
    if (this.fin === 'F2') { M.F2.color.setHex(RAL[this.ral]); return M.F2; }
    return M.F3;
  }
  avvia() {
    if (this.pronto || this.avviando) return; this.avviando = true;
    try {
      RectAreaLightUniformsLib.init();
      const r = this.r = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false });
      r.setPixelRatio(Math.min(devicePixelRatio, 1.75)); r.toneMapping = THREE.AgXToneMapping; r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap; r.localClippingEnabled = true;
      const sc = this.sc = new THREE.Scene(); sc.background = new THREE.Color(0x0b0b0c); sc.environment = ambiente(r); sc.environmentIntensity = .9;
      const gG = grana(1024, 90000, 1, 7), gF = grana(1024, 60000, .55, 11); gG.repeat.set(1 / 9, 1 / 9); gF.repeat.set(1 / 7, 1 / 7);
      this.MAT = {
        F0: new THREE.MeshPhysicalMaterial({ color: GREZZO.SLS, roughness: 1, bumpMap: gG, bumpScale: 2.4 }),
        F1: new THREE.MeshPhysicalMaterial({ color: 0xd9d7d2, roughness: .8, bumpMap: gF, bumpScale: .9 }),
        F2: new THREE.MeshPhysicalMaterial({ color: RAL[9005], roughness: .3, clearcoat: 1, clearcoatRoughness: .05, envMapIntensity: 1.6 }),
        F3: new THREE.MeshPhysicalMaterial({ color: 0xe6e5e1, roughness: .42, clearcoat: .28, clearcoatRoughness: .18 }),
      };
      /* pavimento: griglia che sfuma, anello goniometrico rosso, come nelle tavole */
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.ShadowMaterial({ opacity: .45 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; sc.add(fl);
      const gr = new THREE.GridHelper(1600, 80, 0x4a4a4f, 0x2a2a2e); gr.position.y = .05; gr.material.transparent = true; gr.material.opacity = .6; gr.material.depthWrite = false;
      gr.material.onBeforeCompile = sh => { sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vW;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvW=(modelMatrix*vec4(position,1.0)).xyz;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vW;').replace('gl_FragColor = vec4( outgoingLight, diffuseColor.a );', 'float f=1.0-smoothstep(90.0,380.0,length(vW.xz));gl_FragColor=vec4(outgoingLight,diffuseColor.a*f);'); };
      sc.add(gr);
      const ring = new THREE.Mesh(new THREE.RingGeometry(112, 113.2, 256), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xe63329).multiplyScalar(1.4), toneMapped: false, transparent: true, opacity: .55, depthWrite: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = .06; sc.add(ring);
      for (let i = 0; i < 72; i++) { const a = i / 72 * Math.PI * 2, l = i % 6 ? 3 : 7; const t = new THREE.Mesh(new THREE.PlaneGeometry(.6, l), new THREE.MeshBasicMaterial({ color: i % 6 ? 0x5a5a5f : 0xb0b0b4, toneMapped: false, depthWrite: false }));
        t.rotation.x = -Math.PI / 2; t.rotation.z = -a; t.position.set(Math.sin(a) * (116 + l / 2), .07, Math.cos(a) * (116 + l / 2)); sc.add(t); }
      const key = new THREE.DirectionalLight(0xffffff, 1.5); key.position.set(-160, 260, 140); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.radius = 5; key.shadow.bias = -.0004; key.shadow.normalBias = .3;
      Object.assign(key.shadow.camera, { left: -160, right: 160, top: 160, bottom: -160, near: 10, far: 900 }); sc.add(key);
      const sb = new THREE.RectAreaLight(0xffffff, 2, 260, 160); sb.position.set(-120, 220, 160); sb.lookAt(0, 0, 0); sc.add(sb);
      const rR = new THREE.RectAreaLight(0xe63329, 30, 18, 220); rR.position.set(210, 70, -170); rR.lookAt(0, 8, 0); sc.add(rR);
      const rL = new THREE.RectAreaLight(0xe63329, 16, 14, 200); rL.position.set(-230, 60, -130); rL.lookAt(0, 8, 0); sc.add(rL);
      sc.add(new THREE.HemisphereLight(0x9aa0aa, 0x0b0b0c, .18));
      const cam = this.cam = new THREE.PerspectiveCamera(24, 1, 10, 5000); cam.position.set(250, 220, 330);
      const ct = this.ct = new OrbitControls(cam, this.canvas); ct.enableDamping = true; ct.dampingFactor = .08; ct.enablePan = false;
      ct.minDistance = 260; ct.maxDistance = 760; ct.maxPolarAngle = Math.PI * .47; ct.autoRotate = true; ct.autoRotateSpeed = .8;
      ct.addEventListener('start', () => { ct.autoRotate = false; clearTimeout(this.tAuto); this.scena.classList.add('toccato'); });
      ct.addEventListener('end', () => { this.tAuto = setTimeout(() => ct.autoRotate = true, 6000); });
      new ResizeObserver(() => this.dimensiona()).observe(this.scena); this.dimensiona();
      this.pronto = true; this.mostra();
    } catch (e) { this.scena.classList.add('senza-3d'); console.warn('3D non disponibile', e); }
  }
  dimensiona() { const w = this.scena.clientWidth, h = this.scena.clientHeight; if (!w || !h) return; this.r.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); this.sporco = true; }
  async mostra() {
    const k = this.k; this.scena.classList.add('carica');
    let g = this.cache.get(k);
    if (!g) { try { g = await caricaPezzo(this.base + k + '.bin'); this.cache.set(k, g); } catch (e) { console.warn(e); this.scena.classList.remove('carica'); return; } }
    if (k !== this.k) return;
    if (this.grp) this.sc.remove(this.grp);
    const grp = this.grp = new THREE.Group(), me = this.mesh = new THREE.Mesh(g, this.MAT.F0); me.castShadow = me.receiveShadow = true;
    const r = (POSA[k] || { r: [0, 0, 0] }).r; me.rotation.set(...r.map(THREE.MathUtils.degToRad));
    grp.add(me); me.updateMatrixWorld();
    /* in scala: la sfera che contiene il pezzo ha sempre lo stesso raggio, appoggiato al piano */
    const bs = new THREE.Box3().setFromObject(me).getBoundingSphere(new THREE.Sphere()), s = 92 / bs.radius;
    grp.scale.setScalar(s); grp.updateMatrixWorld();
    const bb = new THREE.Box3().setFromObject(grp), c = bb.getCenter(new THREE.Vector3());
    grp.position.set(-c.x, -bb.min.y + .4, -c.z);
    this.dim = 160 / s; this.alto = bb.max.y - bb.min.y; me.material = this.materiale();
    this.sc.add(grp);
    this.ct.target.set(0, this.alto * .42, 0); this.ct.update();
    this.scena.classList.remove('carica'); this.sporco = true; this.ciclo();
  }
  /* cambio di finitura: il pezzo nuovo sale dal piano come una passata, il vecchio resta sopra il taglio */
  passaggio() {
    const nuovo = this.materiale(), vecchio = this.mesh.material;
    if (nuovo === vecchio) { this.sporco = true; this.ciclo(); return; }
    const h = this.alto, piano = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0), sopra = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const nM = nuovo.clone(), vM = vecchio.clone(); nM.clippingPlanes = [piano]; vM.clippingPlanes = [sopra];
    const ombra = this.mesh.clone(); ombra.material = vM; this.mesh.material = nM; this.grp.add(ombra);
    const t0 = performance.now(), dur = 650;
    const passo = () => {
      const t = Math.min(1, (performance.now() - t0) / dur), e = t * t * (3 - 2 * t), y = -2 + e * (h + 4);
      piano.constant = y; sopra.constant = -y; this.sporco = true;
      if (t < 1) requestAnimationFrame(passo); else { this.grp.remove(ombra); this.mesh.material = nuovo; nM.dispose(); vM.dispose(); }
    };
    passo(); this.ciclo();
  }
  ciclo() {
    if (this.girando || !this.pronto) return; this.girando = true;
    const giro = () => {
      if (!this.visibile) { this.girando = false; return; }
      const mosso = this.ct.update();
      if (mosso || this.sporco || this.ct.autoRotate) { this.r.render(this.sc, this.cam); this.sporco = false; }
      requestAnimationFrame(giro);
    };
    giro();
  }
}
const parti = () => document.querySelectorAll('.f3d').forEach(el => { if (!el.__v) el.__v = new Visore(el); });
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', parti) : parti();
