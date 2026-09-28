"""Monta le GIF di firma dai fotogrammi PNG.
Uso: python3 genera_gif.py <cartella-fotogrammi> <cartella-uscita>
Primo fotogramma = marchio finito, fermo PAUSA ms (Outlook classico mostra solo quello);
poi l'animazione (25 fps, 20 per la rotazione); l'ultimo fotogramma coincide col primo, cosi il giro e continuo."""
import sys, glob, os, shutil, subprocess
from PIL import Image
import numpy as np

src, out = sys.argv[1], sys.argv[2]
PAUSA = int(os.environ.get("PAUSA", 5000))  # ms di marchio fermo; il provino online usa una pausa breve
FISSI = [[255, 255, 255], [11, 11, 12], [237, 27, 36], [250, 249, 247]]
os.makedirs(out, exist_ok=True)


def indicizza(img, tav):
    """Colore piu vicino in tavolozza, esatto (la conversione di Pillow lavora a 6 bit per canale
    e scambia il bianco 255 con un 252: in firma si vedrebbe un riquadro grigio)."""
    pal = np.array(tav.getpalette()[:768], dtype=np.int32).reshape(-1, 3)
    a = np.asarray(img, dtype=np.int32)
    chiavi = (a[..., 0] << 16) | (a[..., 1] << 8) | a[..., 2]
    uniche, inv = np.unique(chiavi, return_inverse=True)
    rgb = np.stack([(uniche >> 16) & 255, (uniche >> 8) & 255, uniche & 255], 1)
    idx = ((rgb[:, None, :] - pal[None, :, :]) ** 2).sum(2).argmin(1).astype(np.uint8)
    p = Image.fromarray(idx[inv].reshape(chiavi.shape), "P")
    p.putpalette(tav.getpalette())
    return p

for nome in sorted(os.listdir(src)):
    fs = sorted(glob.glob(f"{src}/{nome}/*.png"))
    fr = [Image.open(f).convert("RGB") for f in fs]
    if len(fr) == 1:
        fr[0].save(f"{out}/logo-{nome}.png", optimize=True)
        continue
    # una sola tavolozza per tutta la GIF, costruita sui fotogrammi di movimento
    campione = Image.new("RGB", (fr[0].width, fr[0].height * len(fr[::6])))
    for i, f in enumerate(fr[::6]):
        campione.paste(f, (0, i * f.height))
    base = campione.quantize(colors=248, method=Image.Quantize.MEDIANCUT).getpalette()[:248 * 3]
    # colori del marchio esatti: il fondo deve essere bianco puro (o nero marchio), non un grigio medio
    tav = Image.new("P", (1, 1))
    tav.putpalette(sum(FISSI, []) + base + [0, 0, 0] * (256 - len(FISSI) - 248))
    q = [indicizza(f, tav) for f in fr[:-1]]
    passo = round(1000 / int(open(f"{src}/{nome}/fps.txt").read()))
    dur = [PAUSA] + [passo] * (len(q) - 1)
    dest = f"{out}/logo-{nome}.gif"
    q[0].save(dest, save_all=True, append_images=q[1:], duration=dur, loop=0, optimize=True, disposal=1)
    if shutil.which("gifsicle"):  # ottimizzazione fotogramma su fotogramma, perdita non visibile
        subprocess.run(["gifsicle", "-b", "-O3", "--lossy=30", dest], check=True)
    print(f"{dest}: {len(q)} fotogrammi, {os.path.getsize(dest)//1024} KB, {sum(dur)/1000:.1f} s")
