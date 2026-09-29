/* DPG-WEB · comune a tutte le pagine (Rev. 05, scheletro):
   la lingua scelta resta quando si cambia pagina; il menu Settori si apre al clic e con la tastiera. */
function DPG_L(){try{const l=localStorage.getItem('dpg_lingua');return ['it','de','en'].includes(l)?l:'it';}catch(e){return 'it';}}
document.addEventListener('click',e=>{
  const b=e.target.closest('.lang');
  if(b){try{localStorage.setItem('dpg_lingua',b.dataset.lang);}catch(_){}}
  const v=e.target.closest('.menu-apri');
  document.querySelectorAll('.menu-voce.aperta').forEach(m=>{if(!v||m!==v.parentElement){m.classList.remove('aperta');m.querySelector('.menu-apri').setAttribute('aria-expanded','false');}});
  if(v){const m=v.parentElement,on=!m.classList.contains('aperta');m.classList.toggle('aperta',on);v.setAttribute('aria-expanded',on);}
},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.menu-voce.aperta').forEach(m=>{m.classList.remove('aperta');m.querySelector('.menu-apri').setAttribute('aria-expanded','false');m.querySelector('.menu-apri').focus();});});
