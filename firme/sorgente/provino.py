"""Compone il provino delle firme (GIF incorporate) e le singole firme HTML da installare.
Uso: python3 provino.py   (dalla cartella sorgente, dopo genera_gif.py)"""
import base64, os

QUI = os.path.dirname(os.path.abspath(__file__))
SU = os.path.dirname(QUI)
TPL = open(os.path.join(QUI, "firma-A.html"), encoding="utf-8").read()

VARIANTI = [
    ("sinterizzazione", "1 &middot; Sinterizzazione", "CONSIGLIATA", False,
     "La racla stende uno strato di polvere e copre il &pi;. Il laser ne ripassa il contorno e lo "
     "riempie a tratteggio, come in una macchina SLS vera; una seconda passata di racla scopre il pezzo "
     "finito. Racconta in tre secondi il mestiere di Due Pi Greco, senza una parola. Fondo bianco, "
     "si fonde con qualunque email; &egrave; anche la pi&ugrave; leggera."),
    ("rotazione", "2 &middot; Rotazione 3D", "PI&Ugrave; IMPATTO", False,
     "Il segno prende spessore e gira come un modello nel CAD: tre quarti a sinistra, poi a destra, "
     "poi torna in vista frontale. La scritta resta ferma. &Egrave; quella che si nota di pi&ugrave;, "
     "ed &egrave; anche la pi&ugrave; pesante."),
    ("incandescenza", "3 &middot; Incandescenza, su nero", None, True,
     "Il &pi; si spegne a sagoma; un piano laser lo ricostruisce dal basso e la materia appena fusa, "
     "bianca, si raffredda nel rosso del marchio. &Egrave; la grafica del sito (nero, carta, rosso). "
     "Costo: un blocco nero dentro l&rsquo;email."),
    ("strati", "4 &middot; Strati", None, False,
     "Tutto il marchio si costruisce a strati dal basso, sul piano di stampa, con le righe di strato "
     "che si leggono e poi si levigano. &Egrave; la stessa logica dell&rsquo;animazione del sito: "
     "firma e sito dicono la stessa cosa."),
    ("rotazione-nero", "2b &middot; Rotazione 3D, su nero", None, True,
     "La rotazione sul fondo del sito, con il quadro in carta."),
    ("strati-nero", "4b &middot; Strati, su nero", None, True,
     "Gli strati sul fondo del sito."),
]


def firma(src, scuro):
    fondo = "background-color:#0B0B0C;" if scuro else ""
    return TPL.replace("{{LOGO}}", src).replace("{{LOGO_FONDO}}", fondo)


def dati(nome):
    p = os.path.join(SU, nome)
    b = open(p, "rb").read()
    tipo = "gif" if nome.endswith(".gif") else "png"
    return f"data:image/{tipo};base64," + base64.b64encode(b).decode(), len(b)


def fotogrammi(nome):
    from PIL import Image
    im = Image.open(os.path.join(SU, nome))
    tot = 0
    for k in range(im.n_frames):
        im.seek(k)
        tot += im.info.get("duration", 0)
    return im.n_frames, tot / 1000


sezioni, righe = [], []
for chiave, titolo, targa, scuro, testo in VARIANTI:
    file = f"logo-{chiave}.gif"
    src, peso = dati(file)
    n, durata = fotogrammi(file)
    t = f'<span class="targa">{targa}</span>' if targa else ""
    sezioni.append(f'''<section class="var"><h2>{titolo}{t}</h2><p>{testo}</p>
<div class="foglio">{firma(src, scuro)}</div>
<div class="meta">firme/{file} &middot; {peso // 1024} KB &middot; {n} fotogrammi &middot; giro {durata:.1f} s</div></section>''')
    righe.append(f"<tr><td>{file}</td><td>{peso // 1024} KB</td><td>600 &times; 330</td><td>200 &times; 110 px (3&times;)</td></tr>")
    open(os.path.join(SU, f"firma-{chiave}.html"), "w", encoding="utf-8").write(
        "<!-- Firma da installare: sostituire src con l'indirizzo pubblico della GIF -->\n" + firma(file, scuro))

src, peso = dati("logo-statica.png")
sezioni.append(f'''<section class="var"><h2>Statica</h2><p>Il PNG del marchio, stessa risoluzione 3&times;, per chi non vuole animazioni.</p>
<div class="foglio">{firma(src, False)}</div><div class="meta">firme/logo-statica.png &middot; {peso // 1024} KB</div></section>''')
righe.append(f"<tr><td>logo-statica.png</td><td>{peso // 1024} KB</td><td>600 &times; 330</td><td>200 &times; 110 px (3&times;)</td></tr>")

html = f'''<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Provino firme Rev. 03</title>
<style>
:root{{--nero:#0B0B0C;--rosso:#E63329;--carta:#FAF9F7;--panna:#F1EFEB;--riga:#D9D6D1;--grigio:#8C8C90;--giallo:#C9A227}}
body{{margin:0;background:var(--panna);color:#1B1B1E}}
.testa{{background:var(--nero);color:var(--carta);border-bottom:2px solid var(--rosso);padding:14px 26px;font:bold 14px Arial,sans-serif;letter-spacing:.02em}}
.wrap{{max-width:1000px;margin:0 auto;padding:26px 16px 60px}}
h1{{font:bold 24px Arial,sans-serif;margin:0 0 8px}}
p{{font-family:Georgia,serif;font-size:14.5px;line-height:1.5;max-width:72ch}}
.var{{margin:0 0 38px}} .var h2{{font:bold 17px Arial,sans-serif;margin:0 0 6px;color:var(--nero)}}
.var p{{margin:0 0 12px;max-width:70ch}}
.targa{{font:10px Consolas,Menlo,monospace;letter-spacing:1.5px;color:var(--carta);background:#E63329;padding:3px 8px;margin-left:10px;vertical-align:2px}}
.foglio{{background:#fff;border:1px solid var(--riga);padding:22px;display:inline-block;max-width:100%;overflow-x:auto;box-sizing:border-box}}
.meta{{font:11px Consolas,Menlo,monospace;color:var(--grigio);margin-top:6px}}
ul.cambi{{font-family:Georgia,serif;font-size:14.5px;line-height:1.5;max-width:72ch;padding-left:20px}}
table.spec{{border-collapse:collapse;font:13px Arial,sans-serif;margin:10px 0 24px}}
table.spec td,table.spec th{{border:1px solid var(--riga);padding:6px 10px;text-align:left}}
table.spec th{{background:#fff;font-size:11px;letter-spacing:1px;color:#4A4A4D}}
.nota{{background:#FBF7EA;border-left:3px solid var(--giallo);padding:10px 14px;font:13.5px/1.5 Georgia,serif;max-width:78ch}}
</style></head><body>
<div class="testa">Provino firme &middot; Roberto Alberio &middot; Due Pi Greco &middot; Rev. 03 &middot; 28/09/2026</div>
<div class="wrap">
<h1>Quattro animazioni nuove, due varianti su nero</h1>
<p>Rifatte da zero rispetto alla Rev. 02. Stessa impaginazione della firma, marchio sempre dal vettoriale ufficiale, colori del marchio esatti: nero #0B0B0C, rosso #ED1B24, carta. Cambia il resto:</p>
<ul class="cambi">
<li><b>Tre volte la risoluzione a video</b> (600&times;330 per 200&times;110): nitide anche sugli schermi retina e sui telefoni.</li>
<li><b>Movimento fluido</b>: 25 fotogrammi al secondo (20 per la rotazione), curve di accelerazione morbide, niente scatti.</li>
<li><b>Raccontano il mestiere</b>: polvere, laser, strati, pezzo solido. Chi riceve la mail capisce che cosa fate prima di leggere la firma.</li>
<li><b>Primo fotogramma = marchio finito</b>, fermo cinque secondi: Outlook classico, che non anima, mostra il logo intero.</li>
</ul>
{"".join(sezioni)}
<h2 style="font:bold 19px Arial,sans-serif;margin:30px 0 6px">Pesi e misure</h2>
<table class="spec"><tr><th>IMMAGINE</th><th>PESO</th><th>PIXEL</th><th>A VIDEO</th></tr>{"".join(righe)}</table>
<div class="nota"><b>Prima di installare.</b> Le GIF vanno pubblicate a un indirizzo stabile (per esempio duepigreco3d.it/firme/) e richiamate da l&igrave;: Gmail e Outlook web scartano le immagini incorporate nella firma. I file <i>firme/firma-*.html</i> hanno gi&agrave; l&rsquo;impaginazione pronta, basta sostituire l&rsquo;indirizzo dell&rsquo;immagine. Restano aperti i punti della Rev. 02: indirizzo della sede, riga tecnica da far confermare, rosso marchio #ED1B24 contro il #E63329 del sito.</div>
</div></body></html>'''
open(os.path.join(SU, "Provino-firme-Rev03.html"), "w", encoding="utf-8").write(html)
print("ok", len(html) // 1024, "KB")
