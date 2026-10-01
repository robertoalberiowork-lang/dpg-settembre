# Visualizzatore delle finiture (Rev. 05c)

- `pezzi.py` (CadQuery 2.8): i nove pezzi del visualizzatore, disegni Due Pi Greco. Nessuna geometria di clienti.
  `python3 pezzi.py [nome...]` scrive `out/<nome>.bin` (formato DPG1: posizioni quantizzate a 16 bit + indici) e lo STL di controllo.
  I `.bin` vanno in `assets/pezzi/`.
- `src_finiture3d.js`: sorgente del visualizzatore (three.js 0.186). Si impacchetta con
  `esbuild src_finiture3d.js --bundle --minify --format=iife --outfile=assets/js/finiture3d.js`.
- I campi e i pezzi per campo, i testi in tre lingue e il componente HTML stanno nel generatore dello scheletro (`f3d.py`).
- Regole: F3 solo su SLS; sul PP in SAF resta il grezzo (le finiture si concordano sul pezzo). Resa da modello 3D, dichiarata.
