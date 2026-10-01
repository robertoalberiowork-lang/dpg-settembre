# Visualizzatore delle finiture (Rev. 05c)

- `pezzi.py` (CadQuery 2.8): i nove pezzi del visualizzatore, disegni Due Pi Greco. Nessuna geometria di clienti.
  `python3 pezzi.py [nome...]` scrive `out/<nome>.bin` (formato DPG1: posizioni quantizzate a 16 bit + indici) e lo STL di controllo.
  I `.bin` vanno in `assets/pezzi/`.
- `src_finiture3d.js`: sorgente del visualizzatore (three.js 0.186). Si impacchetta con
  `esbuild src_finiture3d.js --bundle --minify --format=iife --outfile=assets/js/finiture3d.js`.
- I campi e i pezzi per campo, i testi in tre lingue e il componente HTML stanno nel generatore dello scheletro (`f3d.py`).
- Regole: F3 solo su SLS; sul PP in SAF resta il grezzo (le finiture si concordano sul pezzo). Resa da modello 3D, dichiarata.

## Avvio leggero
- `assets/js/finiture3d-avvio.js` (3 KB) mostra l'immagine ferma `assets/pezzi/<pezzo>.webp` e gestisce la scelta di campo e pezzo.
  Il 3D (`finiture3d.js`) si scarica solo al primo clic sul pezzo, su una finitura o su un colore, e riparte dalla scelta fatta.
- Le immagini ferme si rigenerano con `node poster.js` (sito servito in locale su :8802), stessa inquadratura della prima vista 3D.
- Qualità adattiva: su dispositivi con 4 core o meno, 4 GB o meno, o touch, meno pixel e ombre a 1024; la rotazione automatica disegna a 30 fotogrammi.
