// Rende i fotogrammi PNG di ogni animazione con Chromium (Playwright).
// Uso: NODE_PATH=$(npm root -g) node fotogrammi.js <cartella-uscita>
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

const out = process.argv[2] || 'fotogrammi';
const NOMI = ['sinterizzazione', 'rotazione', 'rotazione-nero', 'incandescenza', 'strati', 'strati-nero', 'statica'];

(async () => {
  const exe = fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined;
  const browser = await chromium.launch(exe ? { executablePath: exe } : {}).catch(() => chromium.launch());
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'anima.html'));
  const dati = JSON.parse(fs.readFileSync(path.join(__dirname, 'marchio.json'), 'utf8'));
  await page.evaluate(d => window.init(d), dati);
  for (const nome of NOMI) {
    const dir = path.join(out, nome);
    fs.mkdirSync(dir, { recursive: true });
    const durata = await page.evaluate(n => window.durata(n), nome);
    const fps = await page.evaluate(n => window.fps(n), nome);
    fs.writeFileSync(path.join(dir, 'fps.txt'), String(fps));
    const n = Math.round(durata * fps);
    for (let i = 0; i <= n; i++) {
      const url = await page.evaluate(([nm, t]) => window.render(nm, t), [nome, i / fps]);
      fs.writeFileSync(path.join(dir, String(i).padStart(3, '0') + '.png'), Buffer.from(url.split(',')[1], 'base64'));
    }
    console.log(nome, n + 1, 'fotogrammi');
  }
  await browser.close();
})();
