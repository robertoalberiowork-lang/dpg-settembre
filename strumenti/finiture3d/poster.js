const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const pg=await b.newPage({viewport:{width:1500,height:1100},deviceScaleFactor:1});const err=[];pg.on('pageerror',e=>err.push(e.message));
await pg.goto('http://localhost:8802/tecnologie.html',{waitUntil:'networkidle'});
await pg.evaluate(()=>{document.querySelectorAll('.reveal').forEach(e=>e.classList.add('vista'));document.querySelector('.f3d').scrollIntoView({block:'center'})});
/* la scena del poster deve avere le proporzioni 3:2 dell'immagine */
await pg.addStyleTag({content:'.f3d-scena{min-height:0!important;height:auto!important;aspect-ratio:3/2;width:1200px!important} .f3d-corpo{grid-template-columns:1200px 300px!important} .f3d-info,.f3d-hint,.f3d-avvia,.f3d-poster{display:none!important} .f3d-scena::after{display:none}'});
await pg.click('.f3d-scena'); await pg.waitForFunction(()=>document.querySelector('.f3d').__v&&document.querySelector('.f3d').__v.mesh,{timeout:60000});
const campi={oem:['staffa','carter','dito'],vsp:['condotto','fanale'],phm:['stella','nido'],h2o:['ugello','diffusore']};
for(const [c,ks] of Object.entries(campi)) for(const k of ks){
  await pg.evaluate(([c,k])=>{const v=document.querySelector('.f3d').__v;v.campo(c);v.pezzo(k);},[c,k]);
  await pg.waitForFunction(k=>{const v=document.querySelector('.f3d').__v;return v.mesh&&v.el.dataset.pezzo===k&&!v.scena.classList.contains('carica')},k,{timeout:60000});
  await pg.evaluate(()=>{const v=document.querySelector('.f3d').__v;v.ct.autoRotate=false;v.cam.position.set(250,220,330);v.ct.update();v.sporco=true;});
  await pg.waitForTimeout(900);
  const el=await pg.$('.f3d-scena canvas'); await el.screenshot({path:`poster_${k}.png`}); console.log('ok',k);
}
console.log('errori',err);await b.close();})();
