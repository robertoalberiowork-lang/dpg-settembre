# Pezzi per il visualizzatore delle finiture: disegni nostri, uno per famiglia di applicazione.
import cadquery as cq, math, struct, json, sys, os
from cadquery import Workplane as W

def staffa():   # OEM: staffa porta-sensori a pettine
    base = W('XY').box(96, 52, 6).edges('|Z').fillet(8)
    base = base.faces('>Z').workplane().pushPoints([(-34,-14),(34,-14)]).slot2D(18,7,0).cutThruAll()
    base = base.faces('>Z').workplane().pushPoints([(-34,14),(34,14)]).hole(6.5)
    braccio = W('XY').box(96, 6, 58).translate((0, 23, 32)).edges('|Y').fillet(4)
    pettine = W('XY').box(96, 16, 10).translate((0, 18, 61))
    for i in range(9):
        pettine = pettine.cut(W('XY').box(4.2, 20, 8).translate((-40 + i*10, 16, 64)))
    rinforzi = [W('YZ').polyline([(0,0),(0,28),(-28,0)]).close().extrude(5).translate((x-2.5, 20, 3)) for x in (-38, 0, 38)]
    s = base.union(braccio).union(pettine)
    for r in rinforzi: s = s.union(r)
    return s.edges('>Z').fillet(1.0)

def carter():   # OEM: carter con griglia, torrette e clip
    c = W('XY').box(160, 110, 46).edges('|Z').fillet(14).faces('>Z').edges().fillet(8)
    c = c.faces('<Z').shell(-2.6)
    for i in range(7):
        c = c.cut(W('XY').box(4, 56, 20).translate((-36 + i*12, 8, 40)).edges('|Z').fillet(1.9))
    torrette = W('XY').pushPoints([(-64,-40),(64,-40),(-64,40),(64,40)]).circle(6).circle(2.4).extrude(40).translate((0,0,-23))
    c = c.union(torrette)
    for x in (-40, 40):
        c = c.union(W('XY').box(16, 3, 10).translate((x, -56.5, -16)).edges('|Y').fillet(1.2))
    c = c.faces('>Z').workplane().center(0,-36).rect(70, 12).cutBlind(-1.2)   # sede targhetta
    return c

def dito():     # OEM: dito di presa con presa a V e alleggerimenti
    d = W('XY').polyline([(0,0),(84,0),(84,38),(0,38)]).close().extrude(18).edges('|Z').fillet(3)
    d = d.cut(W('XY').polyline([(86,8),(68,19),(86,30)]).close().extrude(18))
    for x in (22, 46):
        d = d.cut(W('XY').rect(16, 22).extrude(12).edges('|Z').fillet(4).translate((x, 19, 6)))
    d = d.faces('<X').workplane().pushPoints([(-6, 9), (6, 9)]).hole(5.5, 22)
    return d
def stella():   # PHARMA: stella di formato a 12 tasche
    R, N, rp, T = 80, 12, 12.5, 14
    s = W('XY').circle(R).extrude(T)
    for i in range(N):
        a = 2*math.pi*i/N
        s = s.cut(W('XY').circle(rp).extrude(T).translate((R*math.cos(a), R*math.sin(a), 0)))
    s = s.cut(W('XY').pushPoints([(46*math.cos(2*math.pi*(i+.5)/6), 46*math.sin(2*math.pi*(i+.5)/6)) for i in range(6)]).circle(11).extrude(T))
    mozzo = W('XY').circle(24).extrude(T+10)
    s = s.union(mozzo).cut(W('XY').circle(10).extrude(T+10)).cut(W('XY').box(6, 6, T+10).translate((0, 11, (T+10)/2)))
    return s.edges('|Z').fillet(0.8).faces('>Z or <Z').edges().chamfer(0.6)

def nido():     # PHARMA: nido porta-siringhe a dieci sedi
    n = W('XY').box(150, 84, 22).edges('|Z').fillet(8).faces('>Z').edges().chamfer(1.2)
    pts = [(-56 + i*28, y) for i in range(5) for y in (-18, 18)]
    for (x,y) in pts:
        n = n.cut(W('XY').circle(4.75).extrude(30).translate((x,y,-15))).cut(W('XY').circle(7.5).extrude(6).translate((x,y,5.01)))
    for x in (-56,-28,0,28,56):
        n = n.cut(W('XY').box(5, 22, 6).translate((x, 0, 8.01)))
    for x in (-66, 66):
        n = n.cut(W('XY').circle(3).extrude(30).translate((x,0,-15)))
    return n
def condotto():  # MEZZI SPECIALI: condotto aria rettangolo -> tondo, con flangia
    fr = []
    for k in range(9):
        t = k/8; a = t*t*(3-2*t)
        w, h = 92*(1-a)+60*a, 54*(1-a)+60*a
        r = min(14*(1-a)+30*a, min(w,h)/2-0.05)
        fr.append((38*(1-math.cos(math.pi*t)), 150*t, w, h, r))
    def filo(x, z, w, h, r):
        f = cq.Sketch().rect(w, h).vertices().fillet(r)._faces.Faces()[0].outerWire()
        return f.translate(cq.Vector(x, 0, z))
    est = cq.Solid.makeLoft([filo(*p) for p in fr], True)
    inn = cq.Solid.makeLoft([filo(x, z, w-5.2, h-5.2, max(0.6, r-2.6)) for (x,z,w,h,r) in fr], True)
    c = W('XY').add(est).cut(W('XY').add(inn).translate((0,0,-0.5))).cut(W('XY').add(inn).translate((0,0,0.5)))
    fl = W('XY').add(cq.Solid.extrudeLinear(cq.Face.makeFromWires(filo(0,0,126,88,16)), cq.Vector(0,0,6))).translate((0,0,-6))
    for (x,y) in [(-50,-31),(50,-31),(50,31),(-50,31)]:
        fl = fl.cut(W('XY').circle(4.2).extrude(10).translate((x,y,-8)))
    fl = fl.cut(W('XY').add(cq.Solid.extrudeLinear(cq.Face.makeFromWires(filo(0,0,86.8,48.8,11.4)), cq.Vector(0,0,10))).translate((0,0,-8)))
    xe = fr[-1][0]
    cord = W('XY').workplane(offset=132).center(xe,0).circle(32).circle(29.5).extrude(4)
    return c.union(fl).union(cord)

def fanale():   # MEZZI SPECIALI: supporto fanale con anello e asola di regolazione
    piastra = W('XY').box(70, 46, 6).edges('|Z').fillet(10)
    piastra = piastra.faces('>Z').workplane().pushPoints([(-20,0),(20,0)]).slot2D(16, 8.5, 90).cutThruAll()
    braccio = W('YZ').polyline([(-23,0),(23,0),(14,70),(-14,70)]).close().extrude(6).translate((-3,0,3))
    anello = W('YZ').workplane(offset=-3).center(0, 92).circle(40).circle(33).extrude(12)
    s = piastra.union(braccio).union(anello)
    s = s.union(W('YZ').workplane(offset=-3).center(0,92).pushPoints([(37*math.cos(a),37*math.sin(a)) for a in (math.radians(30), math.radians(150), math.radians(270))]).circle(5.5).circle(2.2).extrude(12))
    return s

def ugello():   # ACQUE: ugello di controlavaggio a fessure
    base = W('XY').polygon(6, 36).extrude(10).edges('|Z').fillet(1.5)
    gambo = W('XY').circle(11).extrude(22).translate((0,0,-22))
    for i in range(10): gambo = gambo.cut(W('XY').circle(12).circle(10.6).extrude(1).translate((0,0,-20+i*2)))  # filetto stilizzato
    testa = W('XY').workplane(offset=10).circle(21).extrude(34).faces('>Z').edges().fillet(14)
    testa = testa.faces('<Z').shell(-2.2)
    for k in range(18):
        a = 360*k/18
        testa = testa.cut(W('XY').box(1.6, 50, 24).edges('|Y').fillet(0.7).translate((0, 0, 26)).rotate((0,0,0),(0,0,1), a))
    foro = W('XY').circle(6).extrude(60).translate((0,0,-30))
    return base.union(testa).union(gambo).cut(foro)

def diffusore():  # ACQUE: diffusore a disco con razze e fori calibrati
    d = W('XY').circle(64).extrude(5).faces('>Z').edges().fillet(1.5)
    d = d.faces('>Z').workplane().pushPoints([(r*math.cos(2*math.pi*i/n+o), r*math.sin(2*math.pi*i/n+o)) for r,n,o in ((26,12,0),(40,18,.1),(54,24,0)) for i in range(n)]).hole(3.2)
    razze = W('XY')
    for i in range(6):
        razze = razze.union(W('XY').box(60, 4, 8).translate((32, 0, 9)).rotate((0,0,0),(0,0,1), 60*i))
    mozzo = W('XY').circle(16).extrude(28).faces('>Z').workplane().hole(14, 28)
    bordo = W('XY').circle(64).circle(60).extrude(12)
    return d.union(razze).union(mozzo).union(bordo).cut(W('XY').circle(7).extrude(60).translate((0,0,-10)))

PEZZI = dict(staffa=staffa, carter=carter, dito=dito, stella=stella, nido=nido, condotto=condotto, fanale=fanale, ugello=ugello, diffusore=diffusore)

def esporta(nome, wp, out):
    shape = wp.val() if hasattr(wp, 'val') else wp
    if hasattr(wp, 'vals') and len(wp.vals()) > 1: shape = cq.Compound.makeCompound(wp.vals())
    vs, ts = shape.tessellate(0.06, 0.18)
    P = [(v.x, v.y, v.z) for v in vs]
    mn = [min(p[i] for p in P) for i in range(3)]; mx = [max(p[i] for p in P) for i in range(3)]
    sc = [(mx[i]-mn[i]) or 1 for i in range(3)]
    q = bytearray()
    for p in P: q += struct.pack('<3H', *[round((p[i]-mn[i])/sc[i]*65535) for i in range(3)])
    big = len(P) > 65535
    idx = b''.join(struct.pack('<3I' if big else '<3H', *t) for t in ts)
    head = struct.pack('<4sII6f', b'DPG1', len(P), len(ts), *mn, *mx) + (b'\x01' if big else b'\x00') + b'\x00'*3
    open(out, 'wb').write(head + bytes(q) + idx)
    return dict(v=len(P), t=len(ts), kb=round((len(head)+len(q)+len(idx))/1024), dim=[round(mx[i]-mn[i],1) for i in range(3)])

if __name__ == '__main__':
    os.makedirs('out', exist_ok=True)
    scelti = sys.argv[1:] or list(PEZZI)
    for n in scelti:
        try:
            wp = PEZZI[n](); r = esporta(n, wp, f'out/{n}.bin')
            cq.exporters.export(wp, f'out/{n}.stl', tolerance=0.06, angularTolerance=0.18)
            print(n, r, flush=True)
        except Exception as e:
            import traceback; print(n, 'ERRORE', repr(e)[:300], flush=True)
