// DPG-WEB · societa/sovam-invio · genera i PDF degli allegati per il cliente.
// Uso: node pdf.js  (dalla radice del sito servita in locale su :8813, oppure via file://).
// Scrive 01-pistes-sovam.pdf e 02-due-pi-greco-en-bref.pdf nella stessa cartella.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  const errs = [];
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push(String(e)));
  p.on('requestfailed', r => errs.push('REQ ' + r.url()));
  const base = process.env.BASE || ('file://' + path.resolve(__dirname) + '/');
  for (const f of ['01-pistes-sovam', '02-due-pi-greco-en-bref']) {
    await p.goto(base + f + '.html', { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    const titolo = await p.title();
    const testata = `<div style="width:100%;margin:0 15mm;font-family:Helvetica,Arial,sans-serif;font-size:7.5px;letter-spacing:.12em;text-transform:uppercase;color:#4A4A4D;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #0B0B0C;padding-bottom:4px"><span style="font-weight:700;color:#0B0B0C;letter-spacing:0;font-size:9px"><span style="display:inline-block;width:7px;height:7px;background:#E63329;margin-right:6px;vertical-align:0"></span>DUE PI GRECO</span><span>${titolo.replace(/ · Due Pi Greco$/, '')}</span></div>`;
    const piede = `<div style="width:100%;margin:0 15mm;font-family:Helvetica,Arial,sans-serif;font-size:7px;letter-spacing:.06em;color:#4A4A4D;display:flex;justify-content:space-between;border-top:1px solid #0B0B0C;padding-top:4px"><span><b style="color:#0B0B0C">Due Pi Greco S.r.l.</b> · Ponzano Veneto · Resana (TV) · Italie · info@duepigreco3d.it · +39 0423 715172 · duepigreco3d.it</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
    await p.pdf({ path: path.join(__dirname, f + '.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true,
      displayHeaderFooter: true, headerTemplate: testata, footerTemplate: piede });
    console.log('ok', f);
  }
  console.log('ERR', JSON.stringify(errs));
  await b.close();
})();
