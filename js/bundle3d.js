(()=>{var Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,sh=1,Mf=2;var js=1,Ua=2,kr=3,Mn=0,Oe=1,en=2,$n=0,Ji=1,oh=2,ah=3,ch=4,Sf=5;var Mi=100,bf=101,Tf=102,wf=103,Ef=104,Af=200,Cf=201,Rf=202,Pf=203,ra=204,sa=205,If=206,Df=207,Lf=208,Nf=209,Uf=210,Ff=211,Of=212,Bf=213,zf=214,oa=0,aa=1,ca=2,Ki=3,la=4,ha=5,ua=6,fa=7,Fa=0,Vf=1,kf=2,Ln=0,lh=1,hh=2,uh=3,Qs=4,fh=5,dh=6,ph=7;var mh=300,Pi=301,tr=302,Oa=303,Ba=304,to=306,Ir=1e3,Wn=1001,da=1002,Ge=1003,Gf=1004;var eo=1005;var We=1006,za=1007;var Ii=1008;var nn=1009,gh=1010,_h=1011,Gr=1012,Va=1013,Nn=1014,bn=1015,Jn=1016,ka=1017,Ga=1018,Hr=1020,xh=35902,yh=35899,vh=1021,Mh=1022,Tn=1023,Xn=1026,Di=1027,Ha=1028,Wa=1029,Li=1030,Xa=1031;var qa=1033,no=33776,io=33777,ro=33778,so=33779,Ya=35840,Za=35841,$a=35842,Ja=35843,Ka=36196,ja=37492,Qa=37496,tc=37488,ec=37489,oo=37490,nc=37491,ic=37808,rc=37809,sc=37810,oc=37811,ac=37812,cc=37813,lc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,_c=36492,xc=36494,yc=36495,vc=36283,Mc=36284,ao=36285,Sc=36286;var Es=2300,pa=2301,ia=2302,$l=2303,Jl=2400,Kl=2401,jl=2402;var Hf=3200;var co=0,Wf=1,ai="",je="srgb",As="srgb-linear",Cs="linear",ae="srgb";var Yi=7680;var Ql=519,Xf=512,qf=513,Yf=514,bc=515,Zf=516,$f=517,Tc=518,Jf=519,th=35044;var Sh="300 es",In=2e3,Dr=2001;function vm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=Rs("canvas");return i.style.display="block",i}var $u={},Lr=null;function bh(...i){let t="THREE."+i.shift();Lr?Lr("log",t,...i):console.log(t,...i)}function jf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=jf(i);let t="THREE."+i.shift();if(Lr)Lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=jf(i);let t="THREE."+i.shift();if(Lr)Lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $i(...i){let t=i.join(" ");t in $u||($u[t]=!0,Bt(...i))}function Qf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var td={[oa]:aa,[ca]:ua,[la]:fa,[Ki]:ha,[aa]:oa,[ua]:ca,[fa]:la,[ha]:Ki},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=1234567,Ts=Math.PI/180,Nr=180/Math.PI;function Wr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Th(i,t){return(i%t+t)%t}function Sm(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function bm(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function Tm(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function wm(i,t=1){return t-Math.abs(Th(i,t*2)-t)}function Em(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Am(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rm(i,t){return i+Math.random()*(t-i)}function Pm(i){return i*(.5-Math.random())}function Im(i){i!==void 0&&(Ju=i);let t=Ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dm(i){return i*Ts}function Lm(i){return i*Nr}function Nm(i){return(i&i-1)===0&&i!==0}function Um(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Om(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),h=o(e/2),u=s((t+n)/2),d=o((t+n)/2),m=s((t-n)/2),f=o((t-n)/2),g=s((n-t)/2),M=o((n-t)/2);switch(r){case"XYX":i.set(a*d,h*m,h*f,a*u);break;case"YZY":i.set(h*f,a*d,h*m,a*u);break;case"ZXZ":i.set(h*m,h*f,a*d,a*u);break;case"XZX":i.set(a*d,h*M,h*g,a*u);break;case"YXY":i.set(h*g,a*d,h*M,a*u);break;case"ZYZ":i.set(h*M,h*g,a*d,a*u);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wh={DEG2RAD:Ts,RAD2DEG:Nr,generateUUID:Wr,clamp:Yt,euclideanModulo:Th,mapLinear:Sm,inverseLerp:bm,lerp:ws,damp:Tm,pingpong:wm,smoothstep:Em,smootherstep:Am,randInt:Cm,randFloat:Rm,randFloatSpread:Pm,seededRandom:Im,degToRad:Dm,radToDeg:Lm,isPowerOfTwo:Nm,ceilPowerOfTwo:Um,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:Om,normalize:Ke,denormalize:Rr},Et=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let h=n[r+0],u=n[r+1],d=n[r+2],m=n[r+3],f=s[o+0],g=s[o+1],M=s[o+2],T=s[o+3];if(m!==T||h!==f||u!==g||d!==M){let y=h*f+u*g+d*M+m*T;y<0&&(f=-f,g=-g,M=-M,T=-T,y=-y);let _=1-a;if(y<.9995){let w=Math.acos(y),p=Math.sin(w);_=Math.sin(_*w)/p,a=Math.sin(a*w)/p,h=h*_+f*a,u=u*_+g*a,d=d*_+M*a,m=m*_+T*a}else{h=h*_+f*a,u=u*_+g*a,d=d*_+M*a,m=m*_+T*a;let w=1/Math.sqrt(h*h+u*u+d*d+m*m);h*=w,u*=w,d*=w,m*=w}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],h=n[r+1],u=n[r+2],d=n[r+3],m=s[o],f=s[o+1],g=s[o+2],M=s[o+3];return t[e]=a*M+d*m+h*g-u*f,t[e+1]=h*M+d*f+u*m-a*g,t[e+2]=u*M+d*g+a*f-h*m,t[e+3]=d*M-a*m-h*f-u*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,u=a(n/2),d=a(r/2),m=a(s/2),f=h(n/2),g=h(r/2),M=h(s/2);switch(o){case"XYZ":this._x=f*d*m+u*g*M,this._y=u*g*m-f*d*M,this._z=u*d*M+f*g*m,this._w=u*d*m-f*g*M;break;case"YXZ":this._x=f*d*m+u*g*M,this._y=u*g*m-f*d*M,this._z=u*d*M-f*g*m,this._w=u*d*m+f*g*M;break;case"ZXY":this._x=f*d*m-u*g*M,this._y=u*g*m+f*d*M,this._z=u*d*M+f*g*m,this._w=u*d*m-f*g*M;break;case"ZYX":this._x=f*d*m-u*g*M,this._y=u*g*m+f*d*M,this._z=u*d*M-f*g*m,this._w=u*d*m+f*g*M;break;case"YZX":this._x=f*d*m+u*g*M,this._y=u*g*m+f*d*M,this._z=u*d*M-f*g*m,this._w=u*d*m-f*g*M;break;case"XZY":this._x=f*d*m-u*g*M,this._y=u*g*m-f*d*M,this._z=u*d*M+f*g*m,this._w=u*d*m+f*g*M;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],u=e[2],d=e[6],m=e[10],f=n+a+m;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-h)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(n>a&&n>m){let g=2*Math.sqrt(1+n-a-m);this._w=(d-h)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>m){let g=2*Math.sqrt(1+a-n-m);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(h+d)/g}else{let g=2*Math.sqrt(1+m-n-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(h+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+o*a+r*u-s*h,this._y=r*d+o*h+s*a-n*u,this._z=s*d+o*u+n*h-r*a,this._w=o*d-n*a-r*h-s*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let h=1-e;if(a<.9995){let u=Math.acos(a),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,u=2*(o*r-a*n),d=2*(a*e-s*r),m=2*(s*n-o*e);return this.x=e+h*u+o*m-a*d,this.y=n+h*d+a*u-s*m,this.z=r+h*m+s*d-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return El.copy(this).projectOnVector(t),this.sub(El)}reflect(t){return this.sub(El.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},El=new L,Ku=new hn,Ht=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,r,s,o,a,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,u)}set(t,e,n,r,s,o,a,h,u){let d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=h,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],h=n[6],u=n[1],d=n[4],m=n[7],f=n[2],g=n[5],M=n[8],T=r[0],y=r[3],_=r[6],w=r[1],p=r[4],l=r[7],v=r[2],c=r[5],P=r[8];return s[0]=o*T+a*w+h*v,s[3]=o*y+a*p+h*c,s[6]=o*_+a*l+h*P,s[1]=u*T+d*w+m*v,s[4]=u*y+d*p+m*c,s[7]=u*_+d*l+m*P,s[2]=f*T+g*w+M*v,s[5]=f*y+g*p+M*c,s[8]=f*_+g*l+M*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],d=t[8];return e*o*d-e*a*u-n*s*d+n*a*h+r*s*u-r*o*h}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],d=t[8],m=d*o-a*u,f=a*h-d*s,g=u*s-o*h,M=e*m+n*f+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/M;return t[0]=m*T,t[1]=(r*u-d*n)*T,t[2]=(a*n-r*o)*T,t[3]=f*T,t[4]=(d*e-r*h)*T,t[5]=(r*s-a*e)*T,t[6]=g*T,t[7]=(n*h-u*e)*T,t[8]=(o*e-n*s)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*o+u*a)+o+t,-r*u,r*h,-r*(-u*o+h*a)+a+e,0,0,1),this}scale(t,e){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(t,e)),this}rotate(t){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ht,ju=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}var te=Bm();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pr===void 0&&(pr=Rs("canvas")),pr.width=t.width,pr.height=t.height;let r=pr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=pr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zm=0,Ur=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cl(r[o].image)):s.push(Cl(r[o]))}else s=Cl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var Vm=0,Rl=new L,Qe=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,r=Wn,s=We,o=Ii,a=Tn,h=nn,u=i.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Wr(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ir:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ir:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=mh;Qe.DEFAULT_ANISOTROPY=1;var re=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,h=t.elements,u=h[0],d=h[4],m=h[8],f=h[1],g=h[5],M=h[9],T=h[2],y=h[6],_=h[10];if(Math.abs(d-f)<.01&&Math.abs(m-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(d+f)<.1&&Math.abs(m+T)<.1&&Math.abs(M+y)<.1&&Math.abs(u+g+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(u+1)/2,l=(g+1)/2,v=(_+1)/2,c=(d+f)/4,P=(m+T)/4,x=(M+y)/4;return p>l&&p>v?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=c/n,s=P/n):l>v?l<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(l),n=c/r,s=x/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=P/s,r=x/s),this.set(n,r,s,e),this}let w=Math.sqrt((y-M)*(y-M)+(m-T)*(m-T)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(m-T)/w,this.z=(f-d)/w,this.w=Math.acos((u+g+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Qe(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ur(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ps=class extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,r,s,o,a,h,u,d,m,f,g,M,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,u,d,m,f,g,M,T,y)}set(t,e,n,r,s,o,a,h,u,d,m,f,g,M,T,y){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=h,_[2]=u,_[6]=d,_[10]=m,_[14]=f,_[3]=g,_[7]=M,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/mr.setFromMatrixColumn(t,0).length(),s=1/mr.setFromMatrixColumn(t,1).length(),o=1/mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),u=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){let f=o*d,g=o*m,M=a*d,T=a*m;e[0]=h*d,e[4]=-h*m,e[8]=u,e[1]=g+M*u,e[5]=f-T*u,e[9]=-a*h,e[2]=T-f*u,e[6]=M+g*u,e[10]=o*h}else if(t.order==="YXZ"){let f=h*d,g=h*m,M=u*d,T=u*m;e[0]=f+T*a,e[4]=M*a-g,e[8]=o*u,e[1]=o*m,e[5]=o*d,e[9]=-a,e[2]=g*a-M,e[6]=T+f*a,e[10]=o*h}else if(t.order==="ZXY"){let f=h*d,g=h*m,M=u*d,T=u*m;e[0]=f-T*a,e[4]=-o*m,e[8]=M+g*a,e[1]=g+M*a,e[5]=o*d,e[9]=T-f*a,e[2]=-o*u,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let f=o*d,g=o*m,M=a*d,T=a*m;e[0]=h*d,e[4]=M*u-g,e[8]=f*u+T,e[1]=h*m,e[5]=T*u+f,e[9]=g*u-M,e[2]=-u,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let f=o*h,g=o*u,M=a*h,T=a*u;e[0]=h*d,e[4]=T-f*m,e[8]=M*m+g,e[1]=m,e[5]=o*d,e[9]=-a*d,e[2]=-u*d,e[6]=g*m+M,e[10]=f-T*m}else if(t.order==="XZY"){let f=o*h,g=o*u,M=a*h,T=a*u;e[0]=h*d,e[4]=-m,e[8]=u*d,e[1]=f*m+T,e[5]=o*d,e[9]=g*m-M,e[2]=M*m-g,e[6]=a*d,e[10]=T*m+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Gm)}lookAt(t,e,n){let r=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),mi.crossVectors(n,cn),mi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),mi.crossVectors(n,cn)),mi.normalize(),Uo.crossVectors(cn,mi),r[0]=mi.x,r[4]=Uo.x,r[8]=cn.x,r[1]=mi.y,r[5]=Uo.y,r[9]=cn.y,r[2]=mi.z,r[6]=Uo.z,r[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],h=n[8],u=n[12],d=n[1],m=n[5],f=n[9],g=n[13],M=n[2],T=n[6],y=n[10],_=n[14],w=n[3],p=n[7],l=n[11],v=n[15],c=r[0],P=r[4],x=r[8],S=r[12],b=r[1],A=r[5],E=r[9],R=r[13],U=r[2],N=r[6],F=r[10],B=r[14],G=r[3],X=r[7],it=r[11],j=r[15];return s[0]=o*c+a*b+h*U+u*G,s[4]=o*P+a*A+h*N+u*X,s[8]=o*x+a*E+h*F+u*it,s[12]=o*S+a*R+h*B+u*j,s[1]=d*c+m*b+f*U+g*G,s[5]=d*P+m*A+f*N+g*X,s[9]=d*x+m*E+f*F+g*it,s[13]=d*S+m*R+f*B+g*j,s[2]=M*c+T*b+y*U+_*G,s[6]=M*P+T*A+y*N+_*X,s[10]=M*x+T*E+y*F+_*it,s[14]=M*S+T*R+y*B+_*j,s[3]=w*c+p*b+l*U+v*G,s[7]=w*P+p*A+l*N+v*X,s[11]=w*x+p*E+l*F+v*it,s[15]=w*S+p*R+l*B+v*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],u=t[13],d=t[2],m=t[6],f=t[10],g=t[14],M=t[3],T=t[7],y=t[11],_=t[15],w=h*g-u*f,p=a*g-u*m,l=a*f-h*m,v=o*g-u*d,c=o*f-h*d,P=o*m-a*d;return e*(T*w-y*p+_*l)-n*(M*w-y*v+_*c)+r*(M*p-T*v+_*P)-s*(M*l-T*c+y*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],h=t[2],u=t[6],d=t[10];return e*(o*d-a*u)-n*(s*d-a*h)+r*(s*u-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],u=t[7],d=t[8],m=t[9],f=t[10],g=t[11],M=t[12],T=t[13],y=t[14],_=t[15],w=e*a-n*o,p=e*h-r*o,l=e*u-s*o,v=n*h-r*a,c=n*u-s*a,P=r*u-s*h,x=d*T-m*M,S=d*y-f*M,b=d*_-g*M,A=m*y-f*T,E=m*_-g*T,R=f*_-g*y,U=w*R-p*E+l*A+v*b-c*S+P*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return t[0]=(a*R-h*E+u*A)*N,t[1]=(r*E-n*R-s*A)*N,t[2]=(T*P-y*c+_*v)*N,t[3]=(f*c-m*P-g*v)*N,t[4]=(h*b-o*R-u*S)*N,t[5]=(e*R-r*b+s*S)*N,t[6]=(y*l-M*P-_*p)*N,t[7]=(d*P-f*l+g*p)*N,t[8]=(o*E-a*b+u*x)*N,t[9]=(n*b-e*E-s*x)*N,t[10]=(M*c-T*l+_*w)*N,t[11]=(m*l-d*c-g*w)*N,t[12]=(a*S-o*A-h*x)*N,t[13]=(e*A-n*S+r*x)*N,t[14]=(T*p-M*v-y*w)*N,t[15]=(d*v-m*p+f*w)*N,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,h=t.z,u=s*o,d=s*a;return this.set(u*o+n,u*a-r*h,u*h+r*a,0,u*a+r*h,d*a+n,d*h-r*o,0,u*h-r*a,d*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,u=s+s,d=o+o,m=a+a,f=s*u,g=s*d,M=s*m,T=o*d,y=o*m,_=a*m,w=h*u,p=h*d,l=h*m,v=n.x,c=n.y,P=n.z;return r[0]=(1-(T+_))*v,r[1]=(g+l)*v,r[2]=(M-p)*v,r[3]=0,r[4]=(g-l)*c,r[5]=(1-(f+_))*c,r[6]=(y+w)*c,r[7]=0,r[8]=(M+p)*P,r[9]=(y-w)*P,r[10]=(1-(f+T))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=mr.set(r[0],r[1],r[2]).length(),a=mr.set(r[4],r[5],r[6]).length(),h=mr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Cn.copy(this);let u=1/o,d=1/a,m=1/h;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=m,Cn.elements[9]*=m,Cn.elements[10]*=m,e.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=h,this}makePerspective(t,e,n,r,s,o,a=In,h=!1){let u=this.elements,d=2*s/(e-t),m=2*s/(n-r),f=(e+t)/(e-t),g=(n+r)/(n-r),M,T;if(h)M=s/(o-s),T=o*s/(o-s);else if(a===In)M=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(a===Dr)M=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=m,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,h=!1){let u=this.elements,d=2/(e-t),m=2/(n-r),f=-(e+t)/(e-t),g=-(n+r)/(n-r),M,T;if(h)M=1/(o-s),T=o/(o-s);else if(a===In)M=-2/(o-s),T=-(o+s)/(o-s);else if(a===Dr)M=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=m,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=M,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mr=new L,Cn=new kt,km=new L(0,0,0),Gm=new L(1,1,1),mi=new L,Uo=new L,cn=new L,tf=new kt,ef=new hn,qn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],u=r[5],d=r[9],m=r[2],f=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ef.setFromEuler(this),this.setFromQuaternion(ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hm=0,nf=new L,gr=new hn,ti=new kt,Fo=new L,xs=new L,Wm=new L,Xm=new hn,rf=new L(1,0,0),sf=new L(0,1,0),of=new L(0,0,1),af={type:"added"},qm={type:"removed"},_r={type:"childadded",child:null},Pl={type:"childremoved",child:null},Xe=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new qn,n=new hn,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Ht}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(rf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(of,t)}translateOnAxis(t,e){return nf.copy(t).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(xs,Fo,this.up):ti.lookAt(Fo,xs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(ti),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(af),_r.child=t,this.dispatchEvent(_r),_r.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qm),Pl.child=t,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(af),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){let m=h[u];s(t.shapes,m)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,u=this.material.length;h<u;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),u=o(t.textures),d=o(t.images),m=o(t.shapes),f=o(t.skeletons),g=o(t.animations),M=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),M.length>0&&(n.nodes=M)}return n.object=r,n;function o(a){let h=[];for(let u in a){let d=a[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Xe.DEFAULT_UP=new L(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zi=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ym={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let T of t.hand.values()){let y=e.getJointPose(T,n),_=this._getHandJoint(u,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}let d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],f=d.position.distanceTo(m.position),g=.02,M=.005;u.inputState.pinching&&f>g+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=g-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=Th(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Il(o,s,t+1/3),this.g=Il(o,s,t),this.b=Il(o,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=je){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return te.workingToColorSpace(Ze.copy(this),t),Math.round(Yt(Ze.r*255,0,255))*65536+Math.round(Yt(Ze.g*255,0,255))*256+Math.round(Yt(Ze.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,r=Ze.g,s=Ze.b,o=Math.max(n,r,s),a=Math.min(n,r,s),h,u,d=(a+o)/2;if(a===o)h=0,u=0;else{let m=o-a;switch(u=d<=.5?m/(o+a):m/(2-o-a),o){case n:h=(r-s)/m+(r<s?6:0);break;case r:h=(s-n)/m+2;break;case s:h=(n-r)/m+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=je){te.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,r=Ze.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Oo);let n=ws(gi.h,Oo.h,e),r=ws(gi.s,Oo.s,e),s=ws(gi.l,Oo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Zt;Zt.NAMES=ed;var ji=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new L,ei=new L,Dl=new L,ni=new L,xr=new L,yr=new L,cf=new L,Ll=new L,Nl=new L,Ul=new L,Fl=new re,Ol=new re,Bl=new re,ge=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ei.subVectors(n,e),Dl.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ei),h=Rn.dot(Dl),u=ei.dot(ei),d=ei.dot(Dl),m=o*u-a*a;if(m===0)return s.set(0,0,0),null;let f=1/m,g=(u*h-a*d)*f,M=(o*d-a*h)*f;return s.set(1-g-M,M,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,r,s,o,a,h){return this.getBarycoord(t,e,n,r,ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,ni.x),h.addScaledVector(o,ni.y),h.addScaledVector(a,ni.z),h)}static getInterpolatedAttribute(t,e,n,r,s,o){return Fl.setScalar(0),Ol.setScalar(0),Bl.setScalar(0),Fl.fromBufferAttribute(t,e),Ol.fromBufferAttribute(t,n),Bl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Fl,s.x),o.addScaledVector(Ol,s.y),o.addScaledVector(Bl,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ei.subVectors(t,e),Rn.cross(ei).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;xr.subVectors(r,n),yr.subVectors(s,n),Ll.subVectors(t,n);let h=xr.dot(Ll),u=yr.dot(Ll);if(h<=0&&u<=0)return e.copy(n);Nl.subVectors(t,r);let d=xr.dot(Nl),m=yr.dot(Nl);if(d>=0&&m<=d)return e.copy(r);let f=h*m-d*u;if(f<=0&&h>=0&&d<=0)return o=h/(h-d),e.copy(n).addScaledVector(xr,o);Ul.subVectors(t,s);let g=xr.dot(Ul),M=yr.dot(Ul);if(M>=0&&g<=M)return e.copy(s);let T=g*u-h*M;if(T<=0&&u>=0&&M<=0)return a=u/(u-M),e.copy(n).addScaledVector(yr,a);let y=d*M-g*m;if(y<=0&&m-d>=0&&g-M>=0)return cf.subVectors(s,r),a=(m-d)/(m-d+(g-M)),e.copy(r).addScaledVector(cf,a);let _=1/(y+T+f);return o=T*_,a=f*_,e.copy(n).addScaledVector(xr,o).addScaledVector(yr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Se=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),zo.subVectors(this.max,ys),vr.subVectors(t.a,ys),Mr.subVectors(t.b,ys),Sr.subVectors(t.c,ys),_i.subVectors(Mr,vr),xi.subVectors(Sr,Mr),Hi.subVectors(vr,Sr);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Hi.z,Hi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Hi.z,0,-Hi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Hi.y,Hi.x,0];return!zl(e,vr,Mr,Sr,zo)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,vr,Mr,Sr,zo))?!1:(Vo.crossVectors(_i,xi),e=[Vo.x,Vo.y,Vo.z],zl(e,vr,Mr,Sr,zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,Bo=new Se,vr=new L,Mr=new L,Sr=new L,_i=new L,xi=new L,Hi=new L,ys=new L,zo=new L,Vo=new L,Wi=new L;function zl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wi.fromArray(i,s);let a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),h=t.dot(Wi),u=e.dot(Wi),d=n.dot(Wi);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>a)return!1}return!0}var Ne=new L,ko=new Et,Zm=0,Pe=class extends Dn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ko.fromBufferAttribute(this,e),ko.applyMatrix3(t),this.setXY(e,ko.x,ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ds=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ls=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},$m=new Se,vs=new L,Vl=new L,Si=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$m.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Vl)),this.expandByPoint(vs.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jm=0,vn=new kt,kl=new Xe,br=new L,ln=new Se,Ms=new Se,ke=new L,fn=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vm(t)?Ls:Ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return kl.lookAt(t),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Se);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(ln.min,Ms.min),ln.expandByPoint(ke),ke.addVectors(ln.max,Ms.max),ln.expandByPoint(ke)):(ln.expandByPoint(Ms.min),ln.expandByPoint(Ms.max))}ln.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ke.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ke));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],h=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)ke.fromBufferAttribute(a,u),h&&(br.fromBufferAttribute(t,u),ke.add(br)),r=Math.max(r,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],h=[];for(let x=0;x<n.count;x++)a[x]=new L,h[x]=new L;let u=new L,d=new L,m=new L,f=new Et,g=new Et,M=new Et,T=new L,y=new L;function _(x,S,b){u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,S),m.fromBufferAttribute(n,b),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),M.fromBufferAttribute(s,b),d.sub(u),m.sub(u),g.sub(f),M.sub(f);let A=1/(g.x*M.y-M.x*g.y);isFinite(A)&&(T.copy(d).multiplyScalar(M.y).addScaledVector(m,-g.y).multiplyScalar(A),y.copy(m).multiplyScalar(g.x).addScaledVector(d,-M.x).multiplyScalar(A),a[x].add(T),a[S].add(T),a[b].add(T),h[x].add(y),h[S].add(y),h[b].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let x=0,S=w.length;x<S;++x){let b=w[x],A=b.start,E=b.count;for(let R=A,U=A+E;R<U;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let p=new L,l=new L,v=new L,c=new L;function P(x){v.fromBufferAttribute(r,x),c.copy(v);let S=a[x];p.copy(S),p.sub(v.multiplyScalar(v.dot(S))).normalize(),l.crossVectors(c,S);let A=l.dot(h[x])<0?-1:1;o.setXYZW(x,p.x,p.y,p.z,A)}for(let x=0,S=w.length;x<S;++x){let b=w[x],A=b.start,E=b.count;for(let R=A,U=A+E;R<U;R+=3)P(t.getX(R+0)),P(t.getX(R+1)),P(t.getX(R+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,h=new L,u=new L,d=new L,m=new L;if(t)for(let f=0,g=t.count;f<g;f+=3){let M=t.getX(f+0),T=t.getX(f+1),y=t.getX(f+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,T),o.fromBufferAttribute(e,y),d.subVectors(o,s),m.subVectors(r,s),d.cross(m),a.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),a.add(d),h.add(d),u.add(d),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let f=0,g=e.count;f<g;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,s),m.subVectors(r,s),d.cross(m),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,h){let u=a.array,d=a.itemSize,m=a.normalized,f=new u.constructor(h.length*d),g=0,M=0;for(let T=0,y=h.length;T<y;T++){a.isInterleavedBufferAttribute?g=h[T]*a.data.stride+a.offset:g=h[T]*d;for(let _=0;_<d;_++)f[M++]=u[g++]}return new Pe(f,d,m)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let h=r[a],u=t(h,n);e.setAttribute(a,u)}let s=this.morphAttributes;for(let a in s){let h=[],u=s[a];for(let d=0,m=u.length;d<m;d++){let f=u[d],g=t(f,n);h.push(g)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let r={},s=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],d=[];for(let m=0,f=u.length;m<f;m++){let g=u[m];d.push(g.toJSON(t.data))}d.length>0&&(r[h]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let u in r){let d=r[u];this.setAttribute(u,d.clone(e))}let s=t.morphAttributes;for(let u in s){let d=[],m=s[u];for(let f=0,g=m.length;f<g;f++)d.push(m[f].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,d=o.length;u<d;u++){let m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Km=0,Yn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ji,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=sa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let h=s[a];delete h.metadata,o.push(h)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ri=new L,Gl=new L,Go=new L,yi=new L,Hl=new L,Ho=new L,Wl=new L,Sn=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Gl.copy(t).add(e).multiplyScalar(.5),Go.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Gl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Go),a=yi.dot(this.direction),h=-yi.dot(Go),u=yi.lengthSq(),d=Math.abs(1-o*o),m,f,g,M;if(d>0)if(m=o*h-a,f=o*a-h,M=s*d,m>=0)if(f>=-M)if(f<=M){let T=1/d;m*=T,f*=T,g=m*(m+o*f+2*a)+f*(o*m+f+2*h)+u}else f=s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*h)+u;else f=-s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*h)+u;else f<=-M?(m=Math.max(0,-(-o*s+a)),f=m>0?-s:Math.min(Math.max(-s,-h),s),g=-m*m+f*(f+2*h)+u):f<=M?(m=0,f=Math.min(Math.max(-s,-h),s),g=f*(f+2*h)+u):(m=Math.max(0,-(o*s+a)),f=m>0?s:Math.min(Math.max(-s,-h),s),g=-m*m+f*(f+2*h)+u);else f=o>0?-s:s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Gl).addScaledVector(Go,f),g}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,h,u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),d>=0?(s=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(s=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(t.min.z-f.z)*m,h=(t.max.z-f.z)*m):(a=(t.max.z-f.z)*m,h=(t.min.z-f.z)*m),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,r,s){Hl.subVectors(e,t),Ho.subVectors(n,t),Wl.crossVectors(Hl,Ho);let o=this.direction.dot(Wl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let h=a*this.direction.dot(Ho.crossVectors(yi,Ho));if(h<0)return null;let u=a*this.direction.dot(Hl.cross(yi));if(u<0||h+u>o)return null;let d=-a*yi.dot(Wl);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ns=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lf=new kt,Xi=new Sn,Wo=new Si,hf=new L,Xo=new L,qo=new L,Yo=new L,Xl=new L,Zo=new L,uf=new L,$o=new L,_e=class extends Xe{constructor(t=new fn,e=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let h=0,u=s.length;h<u;h++){let d=a[h],m=s[h];d!==0&&(Xl.fromBufferAttribute(m,t),o?Zo.addScaledVector(Xl,d):Zo.addScaledVector(Xl.sub(e),d))}e.add(Zo)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Xi.copy(t.ray).recast(t.near),!(Wo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Wo,hf)===null||Xi.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(lf.copy(s).invert(),Xi.copy(t.ray).applyMatrix4(lf),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,T=f.length;M<T;M++){let y=f[M],_=o[y.materialIndex],w=Math.max(y.start,g.start),p=Math.min(a.count,Math.min(y.start+y.count,g.start+g.count));for(let l=w,v=p;l<v;l+=3){let c=a.getX(l),P=a.getX(l+1),x=a.getX(l+2);r=Jo(this,_,t,n,u,d,m,c,P,x),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{let M=Math.max(0,g.start),T=Math.min(a.count,g.start+g.count);for(let y=M,_=T;y<_;y+=3){let w=a.getX(y),p=a.getX(y+1),l=a.getX(y+2);r=Jo(this,o,t,n,u,d,m,w,p,l),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let M=0,T=f.length;M<T;M++){let y=f[M],_=o[y.materialIndex],w=Math.max(y.start,g.start),p=Math.min(h.count,Math.min(y.start+y.count,g.start+g.count));for(let l=w,v=p;l<v;l+=3){let c=l,P=l+1,x=l+2;r=Jo(this,_,t,n,u,d,m,c,P,x),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{let M=Math.max(0,g.start),T=Math.min(h.count,g.start+g.count);for(let y=M,_=T;y<_;y+=3){let w=y,p=y+1,l=y+2;r=Jo(this,o,t,n,u,d,m,w,p,l),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}};function jm(i,t,e,n,r,s,o,a){let h;if(t.side===Oe?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,t.side===Mn,a),h===null)return null;$o.copy(a),$o.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo($o);return u<e.near||u>e.far?null:{distance:u,point:$o.clone(),object:i}}function Jo(i,t,e,n,r,s,o,a,h,u){i.getVertexPosition(a,Xo),i.getVertexPosition(h,qo),i.getVertexPosition(u,Yo);let d=jm(i,t,e,n,Xo,qo,Yo,uf);if(d){let m=new L;ge.getBarycoord(uf,Xo,qo,Yo,m),r&&(d.uv=ge.getInterpolatedAttribute(r,a,h,u,m,new Et)),s&&(d.uv1=ge.getInterpolatedAttribute(s,a,h,u,m,new Et)),o&&(d.normal=ge.getInterpolatedAttribute(o,a,h,u,m,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:h,c:u,normal:new L,materialIndex:0};ge.getNormal(Xo,qo,Yo,f.normal),d.face=f,d.barycoord=m}return d}var Us=class extends Qe{constructor(t=null,e=1,n=1,r,s,o,a,h,u=Ge,d=Ge,m,f){super(null,o,a,h,u,d,r,s,m,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=class extends Pe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Tr=new kt,ff=new kt,Ko=[],df=new Se,Qm=new kt,Ss=new _e,bs=new Si,Os=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Qm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Se),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Tr),df.copy(t.boundingBox).applyMatrix4(Tr),this.boundingBox.union(df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Tr),bs.copy(t.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Tr),ff.multiplyMatrices(n,Tr),Ss.matrixWorld=ff,Ss.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){let h=Ko[o];h.instanceId=s,h.object=this,e.push(h)}Ko.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(r*this.count),r,this.count,Ha,bn));let s=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,h=r*t;return s[h]=a,s.set(n,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ql=new L,tg=new L,eg=new Ht,Ue=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ql.subVectors(n,e).cross(tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(ql),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||eg.getNormalMatrix(t),r=this.coplanarPoint(ql).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new Si,ng=new Et(.5,.5),jo=new L,Or=class{constructor(t=new Ue,e=new Ue,n=new Ue,r=new Ue,s=new Ue,o=new Ue){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],h=s[2],u=s[3],d=s[4],m=s[5],f=s[6],g=s[7],M=s[8],T=s[9],y=s[10],_=s[11],w=s[12],p=s[13],l=s[14],v=s[15];if(r[0].setComponents(u-o,g-d,_-M,v-w).normalize(),r[1].setComponents(u+o,g+d,_+M,v+w).normalize(),r[2].setComponents(u+a,g+m,_+T,v+p).normalize(),r[3].setComponents(u-a,g-m,_-T,v-p).normalize(),n)r[4].setComponents(h,f,y,l).normalize(),r[5].setComponents(u-h,g-f,_-y,v-l).normalize();else if(r[4].setComponents(u-h,g-f,_-y,v-l).normalize(),e===In)r[5].setComponents(u+h,g+f,_+y,v+l).normalize();else if(e===Dr)r[5].setComponents(h,f,y,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=ng.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(jo.x=r.normal.x>0?t.max.x:t.min.x,jo.y=r.normal.y>0?t.max.y:t.min.y,jo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bs=class extends Qe{constructor(t=[],e=Pi,n,r,s,o,a,h,u,d){super(t,e,n,r,s,o,a,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zs=class extends Qe{constructor(t,e,n,r,s,o,a,h,u){super(t,e,n,r,s,o,a,h,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends Qe{constructor(t,e,n=Nn,r,s,o,a=Ge,h=Ge,u,d=Xn,m=1){if(d!==Xn&&d!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:m};super(f,r,s,o,a,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xa=class extends oi{constructor(t,e=Nn,n=Pi,r,s,o=Ge,a=Ge,h,u=Xn){let d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,n,r,s,o,a,h,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vs=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zn=class i extends fn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let h=[],u=[],d=[],m=[],f=0,g=0;M("z","y","x",-1,-1,n,e,t,o,s,0),M("z","y","x",1,-1,n,e,-t,o,s,1),M("x","z","y",1,1,t,n,e,r,o,2),M("x","z","y",1,-1,t,n,-e,r,o,3),M("x","y","z",1,-1,t,e,n,r,s,4),M("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(m,2));function M(T,y,_,w,p,l,v,c,P,x,S){let b=l/P,A=v/x,E=l/2,R=v/2,U=c/2,N=P+1,F=x+1,B=0,G=0,X=new L;for(let it=0;it<F;it++){let j=it*A-R;for(let nt=0;nt<N;nt++){let _t=nt*b-E;X[T]=_t*w,X[y]=j*p,X[_]=U,u.push(X.x,X.y,X.z),X[T]=0,X[y]=0,X[_]=c>0?1:-1,d.push(X.x,X.y,X.z),m.push(nt/P),m.push(1-it/x),B+=1}}for(let it=0;it<x;it++)for(let j=0;j<P;j++){let nt=f+j+N*it,_t=f+j+N*(it+1),Mt=f+(j+1)+N*(it+1),ut=f+(j+1)+N*it;h.push(nt,_t,ut),h.push(_t,Mt,ut),G+=6}a.addGroup(g,G,S),g+=G,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ks=class i extends fn{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],h=[],u=new L,d=new Et;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let m=0,f=3;m<=e;m++,f+=3){let g=n+m/e*r;u.x=t*Math.cos(g),u.y=t*Math.sin(g),o.push(u.x,u.y,u.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,h.push(d.x,d.y)}for(let m=1;m<=e;m++)s.push(m,m+1,0);this.setIndex(s),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bi=class i extends fn{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};let u=this;r=Math.floor(r),s=Math.floor(s);let d=[],m=[],f=[],g=[],M=0,T=[],y=n/2,_=0;w(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(d),this.setAttribute("position",new Ie(m,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(g,2));function w(){let l=new L,v=new L,c=0,P=(e-t)/n;for(let x=0;x<=s;x++){let S=[],b=x/s,A=b*(e-t)+t;for(let E=0;E<=r;E++){let R=E/r,U=R*h+a,N=Math.sin(U),F=Math.cos(U);v.x=A*N,v.y=-b*n+y,v.z=A*F,m.push(v.x,v.y,v.z),l.set(N,P,F).normalize(),f.push(l.x,l.y,l.z),g.push(R,1-b),S.push(M++)}T.push(S)}for(let x=0;x<r;x++)for(let S=0;S<s;S++){let b=T[S][x],A=T[S+1][x],E=T[S+1][x+1],R=T[S][x+1];(t>0||S!==0)&&(d.push(b,A,R),c+=3),(e>0||S!==s-1)&&(d.push(A,E,R),c+=3)}u.addGroup(_,c,0),_+=c}function p(l){let v=M,c=new Et,P=new L,x=0,S=l===!0?t:e,b=l===!0?1:-1;for(let E=1;E<=r;E++)m.push(0,y*b,0),f.push(0,b,0),g.push(.5,.5),M++;let A=M;for(let E=0;E<=r;E++){let U=E/r*h+a,N=Math.cos(U),F=Math.sin(U);P.x=S*F,P.y=y*b,P.z=S*N,m.push(P.x,P.y,P.z),f.push(0,b,0),c.x=N*.5+.5,c.y=F*.5*b+.5,g.push(c.x,c.y),M++}for(let E=0;E<r;E++){let R=v+E,U=A+E;l===!0?d.push(U,U+1,R):d.push(U+1,U,R),x+=3}u.addGroup(_,x,l===!0?1:2),_+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gs=class i extends fn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),h=Math.floor(r),u=a+1,d=h+1,m=t/a,f=e/h,g=[],M=[],T=[],y=[];for(let _=0;_<d;_++){let w=_*f-o;for(let p=0;p<u;p++){let l=p*m-s;M.push(l,-w,0),T.push(0,0,1),y.push(p/a),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let w=0;w<a;w++){let p=w+u*_,l=w+u*(_+1),v=w+1+u*(_+1),c=w+1+u*_;g.push(p,l,c),g.push(l,v,c)}this.setIndex(g),this.setAttribute("position",new Ie(M,3)),this.setAttribute("normal",new Ie(T,3)),this.setAttribute("uv",new Ie(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hs=class i extends fn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+a,Math.PI),u=0,d=[],m=new L,f=new L,g=[],M=[],T=[],y=[];for(let _=0;_<=n;_++){let w=[],p=_/n,l=o+p*a,v=t*Math.cos(l),c=Math.sqrt(t*t-v*v),P=0;_===0&&o===0?P=.5/e:_===n&&h===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){let S=x/e,b=r+S*s;m.x=-c*Math.cos(b),m.y=v,m.z=c*Math.sin(b),M.push(m.x,m.y,m.z),f.copy(m).normalize(),T.push(f.x,f.y,f.z),y.push(S+P,1-p),w.push(u++)}d.push(w)}for(let _=0;_<n;_++)for(let w=0;w<e;w++){let p=d[_][w+1],l=d[_][w],v=d[_+1][w],c=d[_+1][w+1];(_!==0||o>0)&&g.push(p,l,c),(_!==n-1||h<Math.PI)&&g.push(l,v,c)}this.setIndex(g),this.setAttribute("position",new Ie(M,3)),this.setAttribute("normal",new Ie(T,3)),this.setAttribute("uv",new Ie(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ws=class extends Yn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Zt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(pf(r))r.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(pf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=er(i[e]);for(let r in n)t[r]=n[r]}return t}function pf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ig(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var nd={clone:er,merge:$e},rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=ig(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(r.value);break;case"v3":this.uniforms[n].value=new L().fromArray(r.value);break;case"v4":this.uniforms[n].value=new re().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(r.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ya=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qi=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ti=class extends Qi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Xs=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},va=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var wi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends wi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],h=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:s=t,a=2*e-n;break;case jl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Kl:o=t,h=2*n-e;break;case jl:o=1,h=n+r[1]-r[0];break;default:o=t-1,h=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(h-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,d=this._offsetPrev,m=this._offsetNext,f=this._weightPrev,g=this._weightNext,M=(n-e)/(r-e),T=M*M,y=T*M,_=-f*y+2*f*T-f*M,w=(1+f)*y+(-1.5-2*f)*T+(-.5+f)*M+1,p=(-1-g)*y+(1.5+g)*T+.5*M,l=g*y-g*T;for(let v=0;v!==a;++v)s[v]=_*o[d+v]+w*o[u+v]+p*o[h+v]+l*o[m+v];return s}},ba=class extends wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,d=(n-e)/(r-e),m=1-d;for(let f=0;f!==a;++f)s[f]=o[u+f]*m+o[h+f]*d;return s}},Ta=class extends wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},wa=class extends wi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,u=h-a,d=this.inTangents,m=this.outTangents;if(!d||!m){let M=(n-e)/(r-e),T=1-M;for(let y=0;y!==a;++y)s[y]=o[u+y]*T+o[h+y]*M;return s}let f=a*2,g=t-1;for(let M=0;M!==a;++M){let T=o[u+M],y=o[h+M],_=g*f+M*2,w=m[_],p=m[_+1],l=t*f+M*2,v=d[l],c=d[l+1],P=(n-e)/(r-e),x,S,b,A,E;for(let R=0;R<8;R++){x=P*P,S=x*P,b=1-P,A=b*b,E=A*b;let N=E*e+3*A*P*w+3*b*x*v+S*r-n;if(Math.abs(N)<1e-10)break;let F=3*A*(w-e)+6*b*P*(v-w)+3*x*(r-v);if(Math.abs(F)<1e-10)break;P=P-N/F,P=Math.max(0,Math.min(1,P))}s[M]=E*T+3*A*P*p+3*b*x*c+S*y}return s}},pn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(e,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case pa:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break;case $l:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return ia;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){Vt("KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){Vt("KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(r!==void 0&&Mm(r))for(let a=0,h=r.length;a!==h;++a){let u=r[a];if(isNaN(u)){Vt("KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ia,s=t.length-1,o=1;for(let a=1;a<s;++a){let h=!1,u=t[a],d=t[a+1];if(u!==d&&(a!==1||u!==t[0]))if(r)h=!0;else{let m=a*n,f=m-n,g=m+n;for(let M=0;M!==n;++M){let T=e[m+M];if(T!==e[f+M]||T!==e[g+M]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let m=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[m+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,h=o*n,u=0;u!==n;++u)e[h+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=pa;var Ei=class extends pn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Es;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends pn{constructor(t,e,n,r){super(t,e,n,r)}};Ea.prototype.ValueTypeName="color";var Aa=class extends pn{constructor(t,e,n,r){super(t,e,n,r)}};Aa.prototype.ValueTypeName="number";var Ca=class extends wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-e)/(r-e),u=t*a;for(let d=u+a;u!==d;u+=4)hn.slerpFlat(s,0,o,u-a,o,u,h);return s}},qs=class extends pn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}};qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends pn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Es;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends pn{constructor(t,e,n,r){super(t,e,n,r)}};Ra.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,m){return u.push(d,m),this},this.removeHandler=function(d){let m=u.indexOf(d);return m!==-1&&u.splice(m,2),this},this.getHandler=function(d){for(let m=0,f=u.length;m<f;m+=2){let g=u[m],M=u[m+1];if(g.global&&(g.lastIndex=0),g.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new Pa,Ia=class{constructor(t){this.manager=t!==void 0?t:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Yl=new kt,mf=new L,gf=new L,Da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(mf),gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gf),e.updateMatrixWorld(),Yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Dr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ta=new L,ea=new hn,Hn=new L,Ys=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ta,ea,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new L,_f=new Et,xf=new Et,He=class extends Ys{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,_f,xf),e.subVectors(xf,_f)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*n/u,r*=o.width/h,n*=o.height/u}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eh=class extends Da{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends Br{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},zr=class extends Ys{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,h=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends Da{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Js=class extends Br{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var wr=-90,Er=1,La=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new He(wr,Er,t,e);r.layers=this.layers,this.add(r);let s=new He(wr,Er,t,e);s.layers=this.layers,this.add(s);let o=new He(wr,Er,t,e);o.layers=this.layers,this.add(o);let a=new He(wr,Er,t,e);a.layers=this.layers,this.add(a);let h=new He(wr,Er,t,e);h.layers=this.layers,this.add(h);let u=new He(wr,Er,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,h]=e;for(let u of e)this.remove(u);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,h,u,d]=this.children,m=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,r),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,r),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,f,g),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},Na=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ah="\\[\\]\\.:\\/",og=new RegExp("["+Ah+"]","g"),Ch="[^"+Ah+"]",ag="[^"+Ah.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",Ch),lg=/(WCOD+)?/.source.replace("WCOD",ag),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),fg=new RegExp("^"+cg+lg+hg+ug+"$"),dg=["material","materials","bones","map"],ih=class{constructor(t,e,n){let r=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){let e=fg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);dg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let h=n(a.children);if(h)return h}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[r];if(o===void 0){let u=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=ih;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SM=new Float32Array(1);var Vr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};var yf=new L,na=new L,Ar=new L,Cr=new L,Zl=new L,pg=new L,mg=new L,he=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){yf.subVectors(t,this.start),na.subVectors(this.end,this.start);let n=na.dot(na);if(n===0)return 0;let s=na.dot(yf)/n;return e&&(s=Yt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=pg,n=mg){let r=10000000000000001e-32,s,o,a=this.start,h=t.start,u=this.end,d=t.end;Ar.subVectors(u,a),Cr.subVectors(d,h),Zl.subVectors(a,h);let m=Ar.dot(Ar),f=Cr.dot(Cr),g=Cr.dot(Zl);if(m<=r&&f<=r)return e.copy(a),n.copy(h),e.sub(n),e.dot(e);if(m<=r)s=0,o=g/f,o=Yt(o,0,1);else{let M=Ar.dot(Zl);if(f<=r)o=0,s=Yt(-M/m,0,1);else{let T=Ar.dot(Cr),y=m*f-T*T;y!==0?s=Yt((T*g-M*f)/y,0,1):s=0,o=(T*s+g)/f,o<0?(o=0,s=Yt(-M/m,0,1)):o>1&&(o=1,s=Yt((T-M)/m,0,1))}}return e.copy(a).addScaledVector(Ar,s),n.copy(h).addScaledVector(Cr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ks=class extends Dn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Bt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Rh(i,t,e,n){let r=gg(n);switch(e){case vh:return i*t;case Ha:return i*t/r.components*r.byteLength;case Wa:return i*t/r.components*r.byteLength;case Li:return i*t*2/r.components*r.byteLength;case Xa:return i*t*2/r.components*r.byteLength;case Mh:return i*t*3/r.components*r.byteLength;case Tn:return i*t*4/r.components*r.byteLength;case qa:return i*t*4/r.components*r.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case ja:case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case oo:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _c:case xc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(i){switch(i){case nn:case gh:return{byteLength:1,components:1};case Gr:case _h:case Jn:return{byteLength:2,components:1};case ka:case Ga:return{byteLength:2,components:4};case Nn:case Va:case bn:return{byteLength:4,components:1};case xh:case yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Ed(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function _g(i){let t=new WeakMap;function e(a,h){let u=a.array,d=a.usage,m=u.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,d),a.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,h,u){let d=h.array,m=h.updateRanges;if(i.bindBuffer(u,a),m.length===0)i.bufferSubData(u,0,d);else{m.sort((g,M)=>g.start-M.start);let f=0;for(let g=1;g<m.length;g++){let M=m[f],T=m[g];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++f,m[f]=T)}m.length=f+1;for(let g=0,M=m.length;g<M;g++){let T=m[g];i.bufferSubData(u,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=t.get(a);if(u===void 0)t.set(a,e(a,h));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,h),u.version=a.version}}return{get:r,remove:s,update:o}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:xg,alphahash_pars_fragment:yg,alphamap_fragment:vg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:bg,aomap_fragment:Tg,aomap_pars_fragment:wg,batching_pars_vertex:Eg,batching_vertex:Ag,begin_vertex:Cg,beginnormal_vertex:Rg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Vg,common:kg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:Zg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:r0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:c0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:x0,lights_fragment_end:y0,lightprobes_pars_fragment:v0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:T0,map_fragment:w0,map_pars_fragment:E0,map_particle_fragment:A0,map_particle_pars_fragment:C0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:P0,morphinstance_vertex:I0,morphcolor_vertex:D0,morphnormal_vertex:L0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:z0,normal_vertex:V0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:$0,dithering_fragment:J0,dithering_pars_fragment:K0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:e_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:r_,skinning_pars_vertex:s_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:c_,specularmap_pars_fragment:l_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:f_,transmission_pars_fragment:d_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:x_,background_frag:y_,backgroundCube_vert:v_,backgroundCube_frag:M_,cube_vert:S_,cube_frag:b_,depth_vert:T_,depth_frag:w_,distance_vert:E_,distance_frag:A_,equirect_vert:C_,equirect_frag:R_,linedashed_vert:P_,linedashed_frag:I_,meshbasic_vert:D_,meshbasic_frag:L_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:B_,meshnormal_frag:z_,meshphong_vert:V_,meshphong_frag:k_,meshphysical_vert:G_,meshphysical_frag:H_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:Z_,shadow_frag:$_,sprite_vert:J_,sprite_frag:K_},gt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},jn={basic:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:$e([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:$e([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:$e([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:$e([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:$e([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:$e([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:$e([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:$e([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:$e([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:$e([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:$e([gt.lights,gt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};jn.physical={uniforms:$e([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var wc={r:0,b:0,g:0},j_=new kt,Ad=new Ht;Ad.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t,e,n,r,s){let o=new Zt(0),a=r===!0?0:1,h,u,d=null,m=0,f=null;function g(w){let p=w.isScene===!0?w.background:null;if(p&&p.isTexture){let l=w.backgroundBlurriness>0;p=t.get(p,l)}return p}function M(w){let p=!1,l=g(w);l===null?y(o,a):l&&l.isColor&&(y(l,1),p=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||p)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(w,p){let l=g(p);l&&(l.isCubeTexture||l.mapping===to)?(u===void 0&&(u=new _e(new Zn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:er(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,c,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=l,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(p.backgroundRotation)).transpose(),l.isCubeTexture&&l.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ad),u.material.toneMapped=te.getTransfer(l.colorSpace)!==ae,(d!==l||m!==l.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=l,m=l.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):l&&l.isTexture&&(h===void 0&&(h=new _e(new Gs(2,2),new dn({name:"BackgroundMaterial",uniforms:er(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=l,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(l.colorSpace)!==ae,l.matrixAutoUpdate===!0&&l.updateMatrix(),h.material.uniforms.uvTransform.value.copy(l.matrix),(d!==l||m!==l.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=l,m=l.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function y(w,p){w.getRGB(wc,Eh(i)),e.buffers.color.setClear(wc.r,wc.g,wc.b,p,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,p=1){o.set(w),a=p,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,y(o,a)},render:M,addToRenderList:T,dispose:_}}function tx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(A,E,R,U,N){let F=!1,B=m(A,U,R,E);s!==B&&(s=B,u(s.object)),F=g(A,U,R,N),F&&M(A,U,R,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,l(A,E,R,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function m(A,E,R,U){let N=U.wireframe===!0,F=n[E.id];F===void 0&&(F={},n[E.id]=F);let B=A.isInstancedMesh===!0?A.id:0,G=F[B];G===void 0&&(G={},F[B]=G);let X=G[R.id];X===void 0&&(X={},G[R.id]=X);let it=X[N];return it===void 0&&(it=f(h()),X[N]=it),it}function f(A){let E=[],R=[],U=[];for(let N=0;N<e;N++)E[N]=0,R[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:R,attributeDivisors:U,object:A,attributes:{},index:null}}function g(A,E,R,U){let N=s.attributes,F=E.attributes,B=0,G=R.getAttributes();for(let X in G)if(G[X].location>=0){let j=N[X],nt=F[X];if(nt===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),j===void 0||j.attribute!==nt||nt&&j.data!==nt.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function M(A,E,R,U){let N={},F=E.attributes,B=0,G=R.getAttributes();for(let X in G)if(G[X].location>=0){let j=F[X];j===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));let nt={};nt.attribute=j,j&&j.data&&(nt.data=j.data),N[X]=nt,B++}s.attributes=N,s.attributesNum=B,s.index=U}function T(){let A=s.newAttributes;for(let E=0,R=A.length;E<R;E++)A[E]=0}function y(A){_(A,0)}function _(A,E){let R=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;R[A]=1,U[A]===0&&(i.enableVertexAttribArray(A),U[A]=1),N[A]!==E&&(i.vertexAttribDivisor(A,E),N[A]=E)}function w(){let A=s.newAttributes,E=s.enabledAttributes;for(let R=0,U=E.length;R<U;R++)E[R]!==A[R]&&(i.disableVertexAttribArray(R),E[R]=0)}function p(A,E,R,U,N,F,B){B===!0?i.vertexAttribIPointer(A,E,R,N,F):i.vertexAttribPointer(A,E,R,U,N,F)}function l(A,E,R,U){T();let N=U.attributes,F=R.getAttributes(),B=E.defaultAttributeValues;for(let G in F){let X=F[G];if(X.location>=0){let it=N[G];if(it===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),it!==void 0){let j=it.normalized,nt=it.itemSize,_t=t.get(it);if(_t===void 0)continue;let Mt=_t.buffer,ut=_t.type,Z=_t.bytesPerElement,et=ut===i.INT||ut===i.UNSIGNED_INT||it.gpuType===Va;if(it.isInterleavedBufferAttribute){let K=it.data,st=K.stride,lt=it.offset;if(K.isInstancedInterleavedBuffer){for(let at=0;at<X.locationSize;at++)_(X.location+at,K.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let at=0;at<X.locationSize;at++)y(X.location+at);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let at=0;at<X.locationSize;at++)p(X.location+at,nt/X.locationSize,ut,j,st*Z,(lt+nt/X.locationSize*at)*Z,et)}else{if(it.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)_(X.location+K,it.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let K=0;K<X.locationSize;K++)y(X.location+K);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let K=0;K<X.locationSize;K++)p(X.location+K,nt/X.locationSize,ut,j,nt*Z,nt/X.locationSize*K*Z,et)}}else if(B!==void 0){let j=B[G];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}w()}function v(){S();for(let A in n){let E=n[A];for(let R in E){let U=E[R];for(let N in U){let F=U[N];for(let B in F)d(F[B].object),delete F[B];delete U[N]}}delete n[A]}}function c(A){if(n[A.id]===void 0)return;let E=n[A.id];for(let R in E){let U=E[R];for(let N in U){let F=U[N];for(let B in F)d(F[B].object),delete F[B];delete U[N]}}delete n[A.id]}function P(A){for(let E in n){let R=n[E];for(let U in R){let N=R[U];if(N[A.id]===void 0)continue;let F=N[A.id];for(let B in F)d(F[B].object),delete F[B];delete N[A.id]}}}function x(A){for(let E in n){let R=n[E],U=A.isInstancedMesh===!0?A.id:0,N=R[U];if(N!==void 0){for(let F in N){let B=N[F];for(let G in B)d(B[G].object),delete B[G];delete N[F]}delete R[U],Object.keys(R).length===0&&delete n[E]}}}function S(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:b,dispose:v,releaseStatesOfGeometry:c,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function ex(i,t,e){let n;function r(h){n=h}function s(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function a(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!x)}function h(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=h(u);d!==u&&(Bt("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let m=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),l=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),c=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:w,maxVaryings:p,maxFragmentUniforms:l,maxSamples:v,samples:c}}function ix(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ue,a=new Ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){let g=m.length!==0||f||n!==0||r;return r=f,n=m.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){e=d(m,f,0)},this.setState=function(m,f,g){let M=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,_=i.get(m);if(!r||M===null||M.length===0||s&&!y)s?d(null):u();else{let w=s?0:n,p=w*4,l=_.clippingState||null;h.value=l,l=d(M,f,p,g);for(let v=0;v!==p;++v)l[v]=e[v];_.clippingState=l,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,f,g,M){let T=m!==null?m.length:0,y=null;if(T!==0){if(y=h.value,M!==!0||y===null){let _=g+T*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(y===null||y.length<_)&&(y=new Float32Array(_));for(let p=0,l=g;p!==T;++p,l+=4)o.copy(m[p]).applyMatrix4(w,a),o.normal.toArray(y,l),y[l+3]=o.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}var Ni=4,rd=[.125,.215,.35,.446,.526,.582],nr=20,rx=256,lo=new zr,sd=new Zt,Ph=null,Ih=0,Dh=0,Lh=!1,sx=new L,Yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=sx}=s;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Ih,Dh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Jn,format:Tn,colorSpace:As,depthBuffer:!1},r=od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ox(s)),this._blurMaterial=cx(s,t,e),this._ggxMaterial=ax(s,t,e)}return r}_compileMaterial(t){let e=new _e(new fn,t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,r,s){let h=new He(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,g=m.toneMapping;m.getClearColor(sd),m.toneMapping=Ln,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Zn,new Ns({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,y=T.material,_=!1,w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,_=!0):(y.color.copy(sd),_=!0);for(let p=0;p<6;p++){let l=p%3;l===0?(h.up.set(0,u[p],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+d[p],s.y,s.z)):l===1?(h.up.set(0,0,u[p]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+d[p],s.z)):(h.up.set(0,u[p],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+d[p]));let v=this._cubeSize;Xr(r,l*v,p>2?v:0,v,v),m.setRenderTarget(r),_&&m.render(T,h),m.render(t,h)}m.toneMapping=g,m.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Pi||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let h=this._cubeSize;Xr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,lo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let h=o.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(u*u-d*d),f=0+u*1.25,g=m*f,{_lodMax:M}=this,T=this._sizeLods[n],y=3*T*(n>M-Ni?n-M+Ni:0),_=4*(this._cubeSize-T);h.envMap.value=t.texture,h.roughness.value=g,h.mipInt.value=M-e,Xr(s,y,_,3*T,2*T),r.setRenderTarget(s),r.render(a,lo),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=M-n,Xr(t,y,_,3*T,2*T),r.setRenderTarget(t),r.render(a,lo)}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Vt("blur direction must be either latitudinal or longitudinal!");let d=3,m=this._lodMeshes[r];m.material=u;let f=u.uniforms,g=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*nr-1),T=s/M,y=isFinite(s)?1+Math.floor(d*T):nr;y>nr&&Bt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${nr}`);let _=[],w=0;for(let P=0;P<nr;++P){let x=P/T,S=Math.exp(-x*x/2);_.push(S),P===0?w+=S:P<y&&(w+=2*S)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;f.envMap.value=t.texture,f.samples.value=y,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:p}=this;f.dTheta.value=M,f.mipInt.value=p-n;let l=this._sizeLods[r],v=3*l*(r>p-Ni?r-p+Ni:0),c=4*(this._cubeSize-l);Xr(e,v,c,3*l,2*l),h.setRenderTarget(e),h.render(m,lo)}};function ox(i){let t=[],e=[],n=[],r=i,s=i-Ni+1+rd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let h=1/a;o>i-Ni?h=rd[o-i+Ni-1]:o===0&&(h=0),e.push(h);let u=1/(a-2),d=-u,m=1+u,f=[d,d,m,d,m,m,d,d,m,m,d,m],g=6,M=6,T=3,y=2,_=1,w=new Float32Array(T*M*g),p=new Float32Array(y*M*g),l=new Float32Array(_*M*g);for(let c=0;c<g;c++){let P=c%3*2/3-1,x=c>2?0:-1,S=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];w.set(S,T*M*c),p.set(f,y*M*c);let b=[c,c,c,c,c,c];l.set(b,_*M*c)}let v=new fn;v.setAttribute("position",new Pe(w,T)),v.setAttribute("uv",new Pe(p,y)),v.setAttribute("faceIndex",new Pe(l,_)),n.push(new _e(v,null)),r>Ni&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function od(i,t,e){let n=new un(i,t,e);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ax(i,t,e){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function cx(i,t,e){let n=new Float32Array(nr),r=new L(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ad(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function cd(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ac=class extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Bs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zn(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:$n});s.uniforms.tEquirect.value=e;let o=new _e(r,s),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=We),new La(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function lx(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,g=!1){return f==null?null:g?o(f):s(f)}function s(f){if(f&&f.isTexture){let g=f.mapping;if(g===Oa||g===Ba)if(t.has(f)){let M=t.get(f).texture;return a(M,f.mapping)}else{let M=f.image;if(M&&M.height>0){let T=new Ac(M.height);return T.fromEquirectangularTexture(i,f),t.set(f,T),f.addEventListener("dispose",u),a(T.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let g=f.mapping,M=g===Oa||g===Ba,T=g===Pi||g===tr;if(M||T){let y=e.get(f),_=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Yr(i)),y=M?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{let w=f.image;return M&&w&&w.height>0||T&&w&&h(w)?(n===null&&(n=new Yr(i)),y=M?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",d),y.texture):null}}}return f}function a(f,g){return g===Oa?f.mapping=Pi:g===Ba&&(f.mapping=tr),f}function h(f){let g=0,M=6;for(let T=0;T<M;T++)f[T]!==void 0&&g++;return g===M}function u(f){let g=f.target;g.removeEventListener("dispose",u);let M=t.get(g);M!==void 0&&(t.delete(g),M.dispose())}function d(f){let g=f.target;g.removeEventListener("dispose",d);let M=e.get(g);M!==void 0&&(e.delete(g),M.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function hx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&$i("WebGLRenderer: "+n+" extension not supported."),r}}}function ux(i,t,e,n){let r={},s=new WeakMap;function o(m){let f=m.target;f.index!==null&&t.remove(f.index);for(let M in f.attributes)t.remove(f.attributes[M]);f.removeEventListener("dispose",o),delete r[f.id];let g=s.get(f);g&&(t.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(m,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function h(m){let f=m.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER)}function u(m){let f=[],g=m.index,M=m.attributes.position,T=0;if(M===void 0)return;if(g!==null){let w=g.array;T=g.version;for(let p=0,l=w.length;p<l;p+=3){let v=w[p+0],c=w[p+1],P=w[p+2];f.push(v,c,c,P,P,v)}}else{let w=M.array;T=M.version;for(let p=0,l=w.length/3-1;p<l;p+=3){let v=p+0,c=p+1,P=p+2;f.push(v,c,c,P,P,v)}}let y=new(M.count>=65535?Ls:Ds)(f,1);y.version=T;let _=s.get(m);_&&t.remove(_),s.set(m,y)}function d(m){let f=s.get(m);if(f){let g=m.index;g!==null&&f.version<g.version&&u(m)}else u(m);return s.get(m)}return{get:a,update:h,getWireframeAttribute:d}}function fx(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function h(m,f){i.drawElements(n,f,s,m*o),e.update(f,n,1)}function u(m,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,m*o,g),e.update(f,n,g))}function d(m,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,m,0,g);let T=0;for(let y=0;y<g;y++)T+=f[y];e.update(T,n,1)}this.setMode=r,this.setIndex=a,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function dx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function px(i,t,e){let n=new WeakMap,r=new re;function s(o,a,h){let u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,f=n.get(a);if(f===void 0||f.count!==m){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],p=0;g===!0&&(p=1),M===!0&&(p=2),T===!0&&(p=3);let l=a.attributes.position.count*p,v=1;l>t.maxTextureSize&&(v=Math.ceil(l/t.maxTextureSize),l=t.maxTextureSize);let c=new Float32Array(l*v*4*m),P=new Ps(c,l,v,m);P.type=bn,P.needsUpdate=!0;let x=p*4;for(let b=0;b<m;b++){let A=y[b],E=_[b],R=w[b],U=l*v*4*b;for(let N=0;N<A.count;N++){let F=N*x;g===!0&&(r.fromBufferAttribute(A,N),c[U+F+0]=r.x,c[U+F+1]=r.y,c[U+F+2]=r.z,c[U+F+3]=0),M===!0&&(r.fromBufferAttribute(E,N),c[U+F+4]=r.x,c[U+F+5]=r.y,c[U+F+6]=r.z,c[U+F+7]=0),T===!0&&(r.fromBufferAttribute(R,N),c[U+F+8]=r.x,c[U+F+9]=r.y,c[U+F+10]=r.z,c[U+F+11]=R.itemSize===4?r.w:1)}}f={count:m,texture:P,size:new Et(l,v)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let T=0;T<u.length;T++)g+=u[T];let M=a.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function mx(i,t,e,n,r){let s=new WeakMap;function o(u){let d=r.render.frame,m=u.geometry,f=t.get(u,m);if(s.get(f)!==d&&(t.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),s.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){let g=u.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return f}function a(){s=new WeakMap}function h(u){let d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var gx={[lh]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[Qs]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function _x(i,t,e,n,r,s){let o=new un(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new oi(t,e):void 0}),a=new un(t,e,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),h=new fn;h.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let u=new ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new _e(h,u),m=new zr(-1,1,1,-1,0,1),f=null,g=null,M=!1,T,y=null,_=[],w=!1;this.setSize=function(p,l){o.setSize(p,l),a.setSize(p,l);for(let v=0;v<_.length;v++){let c=_[v];c.setSize&&c.setSize(p,l)}},this.setEffects=function(p){_=p,w=_.length>0&&_[0].isRenderPass===!0;let l=o.width,v=o.height;for(let c=0;c<_.length;c++){let P=_[c];P.setSize&&P.setSize(l,v)}},this.begin=function(p,l){if(M||p.toneMapping===Ln&&_.length===0)return!1;if(y=l,l!==null){let v=l.width,c=l.height;(o.width!==v||o.height!==c)&&this.setSize(v,c)}return w===!1&&p.setRenderTarget(o),T=p.toneMapping,p.toneMapping=Ln,!0},this.hasRenderPass=function(){return w},this.end=function(p,l){p.toneMapping=T,M=!0;let v=o,c=a;for(let P=0;P<_.length;P++){let x=_[P];if(x.enabled!==!1&&(x.render(p,c,v,l),x.needsSwap!==!1)){let S=v;v=c,c=S}}if(f!==p.outputColorSpace||g!==p.toneMapping){f=p.outputColorSpace,g=p.toneMapping,u.defines={},te.getTransfer(f)===ae&&(u.defines.SRGB_TRANSFER="");let P=gx[g];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,p.setRenderTarget(y),p.render(d,m),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),h.dispose(),u.dispose()}}var Cd=new Qe,Fh=new oi(1,1),Rd=new Ps,Pd=new _a,Id=new Bs,ld=[],hd=[],ud=new Float32Array(16),fd=new Float32Array(9),dd=new Float32Array(4);function Zr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=ld[r];if(s===void 0&&(s=new Float32Array(r),ld[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ic(i,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),ze(e,n)}}function bx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),ze(e,n)}}function Tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),ze(e,n)}}function wx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Lx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=e.isReversedDepthBuffer()?Tc:bc,s=Fh):s=Cd,e.setTexture2D(t||s,r)}function Nx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pd,r)}function Ux(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Id,r)}function Fx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Rd,r)}function Ox(i){switch(i){case 5126:return xx;case 35664:return yx;case 35665:return vx;case 35666:return Mx;case 35674:return Sx;case 35675:return bx;case 35676:return Tx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Ax;case 35669:case 35673:return Cx;case 5125:return Rx;case 36294:return Px;case 36295:return Ix;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Fx}}function Bx(i,t){i.uniform1fv(this.addr,t)}function zx(i,t){let e=Zr(t,this.size,2);i.uniform2fv(this.addr,e)}function Vx(i,t){let e=Zr(t,this.size,3);i.uniform3fv(this.addr,e)}function kx(i,t){let e=Zr(t,this.size,4);i.uniform4fv(this.addr,e)}function Gx(i,t){let e=Zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hx(i,t){let e=Zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wx(i,t){let e=Zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xx(i,t){i.uniform1iv(this.addr,t)}function qx(i,t){i.uniform2iv(this.addr,t)}function Yx(i,t){i.uniform3iv(this.addr,t)}function Zx(i,t){i.uniform4iv(this.addr,t)}function $x(i,t){i.uniform1uiv(this.addr,t)}function Jx(i,t){i.uniform2uiv(this.addr,t)}function Kx(i,t){i.uniform3uiv(this.addr,t)}function jx(i,t){i.uniform4uiv(this.addr,t)}function Qx(i,t,e){let n=this.cache,r=t.length,s=Ic(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Fh:o=Cd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function ty(i,t,e){let n=this.cache,r=t.length,s=Ic(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pd,s[o])}function ey(i,t,e){let n=this.cache,r=t.length,s=Ic(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Id,s[o])}function ny(i,t,e){let n=this.cache,r=t.length,s=Ic(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Rd,s[o])}function iy(i){switch(i){case 5126:return Bx;case 35664:return zx;case 35665:return Vx;case 35666:return kx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return Zx;case 5125:return $x;case 36294:return Jx;case 36295:return Kx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}var Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ox(e.type)}},Bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iy(e.type)}},zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function pd(i,t){i.seq.push(t),i.map[t.id]=t}function ry(i,t,e){let n=i.name,r=n.length;for(Nh.lastIndex=0;;){let s=Nh.exec(n),o=Nh.lastIndex,a=s[1],h=s[2]==="]",u=s[3];if(h&&(a=a|0),u===void 0||u==="["&&o+2===r){pd(e,u===void 0?new Oh(a,i,t):new Bh(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new zh(a),pd(e,m)),e=m}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);ry(a,h,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function md(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var sy=37297,oy=0;function ay(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var gd=new Ht;function cy(i){te._getMatrix(gd,te.workingColorSpace,i);let t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _d(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ay(i.getShaderSource(t),a)}else return s}function ly(i,t){let e=cy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hy={[lh]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[Qs]:"ACESFilmic",[dh]:"AgX",[ph]:"Neutral",[fh]:"Custom"};function uy(i,t){let e=hy[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ec=new L;function fy(){te.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),t=Ec.y.toFixed(4),e=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function py(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function my(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function uo(i){return i!==""}function xd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(i){return i.replace(gy,xy)}var _y=new Map;function xy(i,t){let e=Kt[t];if(e===void 0){let n=_y.get(t);if(n!==void 0)e=Kt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vh(e)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(i){return i.replace(yy,vy)}function vy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Md(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var My={[js]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Sy(i){return My[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var by={[Pi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function Ty(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":by[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wy={[tr]:"ENVMAP_MODE_REFRACTION"};function Ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ay={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[Vf]:"ENVMAP_BLENDING_MIX",[kf]:"ENVMAP_BLENDING_ADD"};function Cy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ay[i.combine]||"ENVMAP_BLENDING_NONE"}function Ry(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Py(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,h=Sy(e),u=Ty(e),d=Ey(e),m=Cy(e),f=Ry(e),g=dy(e),M=py(s),T=r.createProgram(),y,_,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(uo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(uo).join(`
`),_.length>0&&(_+=`
`)):(y=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),_=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,ly("linearToOutputTexel",e.outputColorSpace),fy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uo).join(`
`)),o=Vh(o),o=xd(o,e),o=yd(o,e),a=Vh(a),a=xd(a,e),a=yd(a,e),o=vd(o),a=vd(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",e.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let p=w+y+o,l=w+_+a,v=md(r,r.VERTEX_SHADER,p),c=md(r,r.FRAGMENT_SHADER,l);r.attachShader(T,v),r.attachShader(T,c),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function P(A){if(i.debug.checkShaderErrors){let E=r.getProgramInfoLog(T)||"",R=r.getShaderInfoLog(v)||"",U=r.getShaderInfoLog(c)||"",N=E.trim(),F=R.trim(),B=U.trim(),G=!0,X=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,v,c);else{let it=_d(r,v,"vertex"),j=_d(r,c,"fragment");Vt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+it+`
`+j)}else N!==""?Bt("WebGLProgram: Program Info Log:",N):(F===""||B==="")&&(X=!1);X&&(A.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:y},fragmentShader:{log:B,prefix:_}})}r.deleteShader(v),r.deleteShader(c),x=new qr(r,T),S=my(r,T)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(T,sy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=oy++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=v,this.fragmentShader=c,this}var Iy=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gh(t),e.set(t,n)),n}},Gh=class{constructor(t){this.id=Iy++,this.code=t,this.usedTimes=0}};function Dy(i){return i===Li||i===oo||i===ao}function Ly(i,t,e,n,r,s){let o=new Is,a=new kh,h=new Set,u=[],d=new Map,m=n.logarithmicDepthBuffer,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return h.add(x),x===0?"uv":`uv${x}`}function T(x,S,b,A,E,R){let U=A.fog,N=E.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||F,B),X=G&&G.mapping===to?G.image.height:null,it=g[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=j!==void 0?j.length:0,_t=0;N.morphAttributes.position!==void 0&&(_t=1),N.morphAttributes.normal!==void 0&&(_t=2),N.morphAttributes.color!==void 0&&(_t=3);let Mt,ut,Z,et;if(it){let Ct=jn[it];Mt=Ct.vertexShader,ut=Ct.fragmentShader}else{Mt=x.vertexShader,ut=x.fragmentShader;let Ct=a.getVertexShaderStage(x),Te=a.getFragmentShaderStage(x);a.update(x,Ct,Te),Z=Ct.id,et=Te.id}let K=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),lt=E.isInstancedMesh===!0,at=E.isBatchedMesh===!0,Qt=!!x.map,bt=!!x.matcap,Pt=!!G,At=!!x.aoMap,wt=!!x.lightMap,Ot=!!x.bumpMap&&x.wireframe===!1,de=!!x.normalMap,Wt=!!x.displacementMap,Xt=!!x.emissiveMap,Gt=!!x.metalnessMap,qt=!!x.roughnessMap,O=x.anisotropy>0,Le=x.clearcoat>0,Ut=x.dispersion>0,D=x.iridescence>0,C=x.sheen>0,z=x.transmission>0,H=O&&!!x.anisotropyMap,$=Le&&!!x.clearcoatMap,ot=Le&&!!x.clearcoatNormalMap,ct=Le&&!!x.clearcoatRoughnessMap,J=D&&!!x.iridescenceMap,tt=D&&!!x.iridescenceThicknessMap,ft=C&&!!x.sheenColorMap,Dt=C&&!!x.sheenRoughnessMap,mt=!!x.specularMap,dt=!!x.specularColorMap,Ft=!!x.specularIntensityMap,zt=z&&!!x.transmissionMap,$t=z&&!!x.thicknessMap,V=!!x.gradientMap,ht=!!x.alphaMap,Q=x.alphaTest>0,pt=!!x.alphaHash,vt=!!x.extensions,rt=Ln;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(rt=i.toneMapping);let It={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:ut,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:at,batchingColor:at&&E._colorsTexture!==null,instancing:lt,instancingColor:lt&&E.instanceColor!==null,instancingMorph:lt&&E.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Qt,matcap:bt,envMap:Pt,envMapMode:Pt&&G.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:wt,bumpMap:Ot,normalMap:de,displacementMap:Wt,emissiveMap:Xt,normalMapObjectSpace:de&&x.normalMapType===Wf,normalMapTangentSpace:de&&x.normalMapType===co,packedNormalMap:de&&x.normalMapType===co&&Dy(x.normalMap.format),metalnessMap:Gt,roughnessMap:qt,anisotropy:O,anisotropyMap:H,clearcoat:Le,clearcoatMap:$,clearcoatNormalMap:ot,clearcoatRoughnessMap:ct,dispersion:Ut,iridescence:D,iridescenceMap:J,iridescenceThicknessMap:tt,sheen:C,sheenColorMap:ft,sheenRoughnessMap:Dt,specularMap:mt,specularColorMap:dt,specularIntensityMap:Ft,transmission:z,transmissionMap:zt,thicknessMap:$t,gradientMap:V,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:Q,alphaHash:pt,combine:x.combine,mapUv:Qt&&M(x.map.channel),aoMapUv:At&&M(x.aoMap.channel),lightMapUv:wt&&M(x.lightMap.channel),bumpMapUv:Ot&&M(x.bumpMap.channel),normalMapUv:de&&M(x.normalMap.channel),displacementMapUv:Wt&&M(x.displacementMap.channel),emissiveMapUv:Xt&&M(x.emissiveMap.channel),metalnessMapUv:Gt&&M(x.metalnessMap.channel),roughnessMapUv:qt&&M(x.roughnessMap.channel),anisotropyMapUv:H&&M(x.anisotropyMap.channel),clearcoatMapUv:$&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&M(x.sheenRoughnessMap.channel),specularMapUv:mt&&M(x.specularMap.channel),specularColorMapUv:dt&&M(x.specularColorMap.channel),specularIntensityMapUv:Ft&&M(x.specularIntensityMap.channel),transmissionMapUv:zt&&M(x.transmissionMap.channel),thicknessMapUv:$t&&M(x.thicknessMap.channel),alphaMapUv:ht&&M(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(de||O),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!N.attributes.uv&&(Qt||ht),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:st,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:_t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Qt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:Xt&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Oe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&x.extensions.multiDraw===!0||at)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function y(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let b in x.defines)S.push(b),S.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(_(S,x),w(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function w(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function p(x){let S=g[x.type],b;if(S){let A=jn[S];b=nd.clone(A.uniforms)}else b=x.uniforms;return b}function l(x,S){let b=d.get(S);return b!==void 0?++b.usedTimes:(b=new Py(i,S,x,r),u.push(b),d.set(S,b)),b}function v(x){if(--x.usedTimes===0){let S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),d.delete(x.cacheKey),x.destroy()}}function c(x){a.remove(x)}function P(){a.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:p,acquireProgram:l,releaseProgram:v,releaseShaderCache:c,programs:u,dispose:P}}function Ny(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,h){i.get(o)[a]=h}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Uy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,M,T,y,_){let w=i[t];return w===void 0?(w={id:f.id,object:f,geometry:g,material:M,materialVariant:o(f),groupOrder:T,renderOrder:f.renderOrder,z:y,group:_},i[t]=w):(w.id=f.id,w.object=f,w.geometry=g,w.material=M,w.materialVariant=o(f),w.groupOrder=T,w.renderOrder=f.renderOrder,w.z=y,w.group=_),t++,w}function h(f,g,M,T,y,_){let w=a(f,g,M,T,y,_);M.transmission>0?n.push(w):M.transparent===!0?r.push(w):e.push(w)}function u(f,g,M,T,y,_){let w=a(f,g,M,T,y,_);M.transmission>0?n.unshift(w):M.transparent===!0?r.unshift(w):e.unshift(w)}function d(f,g,M){e.length>1&&e.sort(f||Uy),n.length>1&&n.sort(g||Sd),r.length>1&&r.sort(g||Sd),M&&(e.reverse(),n.reverse(),r.reverse())}function m(){for(let f=t,g=i.length;f<g;f++){let M=i[f];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:h,unshift:u,finish:m,sort:d}}function Fy(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new bd,i.set(n,[o])):r>=s.length?(o=new bd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Zt};break;case"SpotLight":e={position:new L,direction:new L,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function By(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zy=0;function Vy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ky(i){let t=new Oy,e=By(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new L);let r=new L,s=new kt,o=new kt;function a(u){let d=0,m=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,M=0,T=0,y=0,_=0,w=0,p=0,l=0,v=0,c=0,P=0;u.sort(Vy);for(let S=0,b=u.length;S<b;S++){let A=u[S],E=A.color,R=A.intensity,U=A.distance,N=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Li?N=A.shadow.map.texture:N=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=E.r*R,m+=E.g*R,f+=E.b*R;else if(A.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(A.sh.coefficients[F],R);P++}else if(A.isDirectionalLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,G=e.get(A);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=A.shadow.matrix,w++}n.directional[g]=F,g++}else if(A.isSpotLight){let F=t.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(E).multiplyScalar(R),F.distance=U,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,n.spot[T]=F;let B=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,B.updateMatrices(A),A.castShadow&&c++),n.spotLightMatrix[T]=B.matrix,A.castShadow){let G=e.get(A);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.spotShadow[T]=G,n.spotShadowMap[T]=N,l++}T++}else if(A.isRectAreaLight){let F=t.get(A);F.color.copy(E).multiplyScalar(R),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=F,y++}else if(A.isPointLight){let F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let B=A.shadow,G=e.get(A);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,n.pointShadow[M]=G,n.pointShadowMap[M]=N,n.pointShadowMatrix[M]=A.shadow.matrix,p++}n.point[M]=F,M++}else if(A.isHemisphereLight){let F=t.get(A);F.skyColor.copy(A.color).multiplyScalar(R),F.groundColor.copy(A.groundColor).multiplyScalar(R),n.hemi[_]=F,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=f;let x=n.hash;(x.directionalLength!==g||x.pointLength!==M||x.spotLength!==T||x.rectAreaLength!==y||x.hemiLength!==_||x.numDirectionalShadows!==w||x.numPointShadows!==p||x.numSpotShadows!==l||x.numSpotMaps!==v||x.numLightProbes!==P)&&(n.directional.length=g,n.spot.length=T,n.rectArea.length=y,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=l,n.spotShadowMap.length=l,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=l+v-c,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=c,n.numLightProbes=P,x.directionalLength=g,x.pointLength=M,x.spotLength=T,x.rectAreaLength=y,x.hemiLength=_,x.numDirectionalShadows=w,x.numPointShadows=p,x.numSpotShadows=l,x.numSpotMaps=v,x.numLightProbes=P,n.version=zy++)}function h(u,d){let m=0,f=0,g=0,M=0,T=0,y=d.matrixWorldInverse;for(let _=0,w=u.length;_<w;_++){let p=u[_];if(p.isDirectionalLight){let l=n.directional[m];l.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(y),m++}else if(p.isSpotLight){let l=n.spot[g];l.position.setFromMatrixPosition(p.matrixWorld),l.position.applyMatrix4(y),l.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(y),g++}else if(p.isRectAreaLight){let l=n.rectArea[M];l.position.setFromMatrixPosition(p.matrixWorld),l.position.applyMatrix4(y),o.identity(),s.copy(p.matrixWorld),s.premultiply(y),o.extractRotation(s),l.halfWidth.set(p.width*.5,0,0),l.halfHeight.set(0,p.height*.5,0),l.halfWidth.applyMatrix4(o),l.halfHeight.applyMatrix4(o),M++}else if(p.isPointLight){let l=n.point[f];l.position.setFromMatrixPosition(p.matrixWorld),l.position.applyMatrix4(y),f++}else if(p.isHemisphereLight){let l=n.hemi[T];l.direction.setFromMatrixPosition(p.matrixWorld),l.direction.transformDirection(y),T++}}}return{setup:a,setupView:h,state:n}}function Td(i){let t=new ky(i),e=[],n=[],r=[];function s(f){m.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function h(f){r.push(f)}function u(){t.setup(e)}function d(f){t.setupView(e,f)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:h}}function Gy(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Td(i),t.set(r,[a])):s>=o.length?(a=new Td(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],qy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],wd=new kt,ho=new L,Uh=new L;function Yy(i,t,e){let n=new Or,r=new Et,s=new Et,o=new re,a=new va,h=new Ma,u={},d=e.maxTextureSize,m={[Mn]:Oe,[Oe]:Mn,[en]:en},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Hy,fragmentShader:Wy}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let M=new fn;M.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new _e(M,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let _=this.type;this.render=function(c,P,x){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||c.length===0)return;this.type===Ua&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);let S=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),E=i.state;E.setBlending($n),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let R=_!==this.type;R&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(N=>N.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,N=c.length;U<N;U++){let F=c[U],B=F.shadow;if(B===void 0){Bt("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let G=B.getFrameExtents();r.multiply(G),s.copy(B.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,B.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,B.mapSize.y=s.y));let X=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||R===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===kr){if(F.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new un(r.x,r.y,{format:Li,type:Jn,minFilter:We,magFilter:We,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new oi(r.x,r.y,bn),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Xn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge}else F.isPointLight?(B.map=new Ac(r.x),B.map.depthTexture=new xa(r.x,Nn)):(B.map=new un(r.x,r.y),B.map.depthTexture=new oi(r.x,r.y,Nn)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Xn,this.type===js?(B.map.depthTexture.compareFunction=X?Tc:bc,B.map.depthTexture.minFilter=We,B.map.depthTexture.magFilter=We):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge);B.camera.updateProjectionMatrix()}let it=B.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<it;j++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,j),i.clear();else{j===0&&(i.setRenderTarget(B.map),i.clear());let nt=B.getViewport(j);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),E.viewport(o)}if(F.isPointLight){let nt=B.camera,_t=B.matrix,Mt=F.distance||nt.far;Mt!==nt.far&&(nt.far=Mt,nt.updateProjectionMatrix()),ho.setFromMatrixPosition(F.matrixWorld),nt.position.copy(ho),Uh.copy(nt.position),Uh.add(Xy[j]),nt.up.copy(qy[j]),nt.lookAt(Uh),nt.updateMatrixWorld(),_t.makeTranslation(-ho.x,-ho.y,-ho.z),wd.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(wd,nt.coordinateSystem,nt.reversedDepth)}else B.updateMatrices(F);n=B.getFrustum(),l(P,x,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===kr&&w(B,x),B.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(S,b,A)};function w(c,P){let x=t.update(T);f.defines.VSM_SAMPLES!==c.blurSamples&&(f.defines.VSM_SAMPLES=c.blurSamples,g.defines.VSM_SAMPLES=c.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),c.mapPass===null&&(c.mapPass=new un(r.x,r.y,{format:Li,type:Jn})),f.uniforms.shadow_pass.value=c.map.depthTexture,f.uniforms.resolution.value=c.mapSize,f.uniforms.radius.value=c.radius,i.setRenderTarget(c.mapPass),i.clear(),i.renderBufferDirect(P,null,x,f,T,null),g.uniforms.shadow_pass.value=c.mapPass.texture,g.uniforms.resolution.value=c.mapSize,g.uniforms.radius.value=c.radius,i.setRenderTarget(c.map),i.clear(),i.renderBufferDirect(P,null,x,g,T,null)}function p(c,P,x,S){let b=null,A=x.isPointLight===!0?c.customDistanceMaterial:c.customDepthMaterial;if(A!==void 0)b=A;else if(b=x.isPointLight===!0?h:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let E=b.uuid,R=P.uuid,U=u[E];U===void 0&&(U={},u[E]=U);let N=U[R];N===void 0&&(N=b.clone(),U[R]=N,P.addEventListener("dispose",v)),b=N}if(b.visible=P.visible,b.wireframe=P.wireframe,S===kr?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:m[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let E=i.properties.get(b);E.light=x}return b}function l(c,P,x,S,b){if(c.visible===!1)return;if(c.layers.test(P.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&b===kr)&&(!c.frustumCulled||n.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,c.matrixWorld);let R=t.update(c),U=c.material;if(Array.isArray(U)){let N=R.groups;for(let F=0,B=N.length;F<B;F++){let G=N[F],X=U[G.materialIndex];if(X&&X.visible){let it=p(c,X,S,b);c.onBeforeShadow(i,c,P,x,R,it,G),i.renderBufferDirect(x,null,R,it,c,G),c.onAfterShadow(i,c,P,x,R,it,G)}}}else if(U.visible){let N=p(c,U,S,b);c.onBeforeShadow(i,c,P,x,R,N,null),i.renderBufferDirect(x,null,R,N,c,null),c.onAfterShadow(i,c,P,x,R,N,null)}}let E=c.children;for(let R=0,U=E.length;R<U;R++)l(E[R],P,x,S,b)}function v(c){c.target.removeEventListener("dispose",v);for(let x in u){let S=u[x],b=c.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function Zy(i,t){function e(){let V=!1,ht=new re,Q=null,pt=new re(0,0,0,0);return{setMask:function(vt){Q!==vt&&!V&&(i.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){V=vt},setClear:function(vt,rt,It,Ct,Te){Te===!0&&(vt*=Ct,rt*=Ct,It*=Ct),ht.set(vt,rt,It,Ct),pt.equals(ht)===!1&&(i.clearColor(vt,rt,It,Ct),pt.copy(ht))},reset:function(){V=!1,Q=null,pt.set(-1,0,0,0)}}}function n(){let V=!1,ht=!1,Q=null,pt=null,vt=null;return{setReversed:function(rt){if(ht!==rt){let It=t.get("EXT_clip_control");rt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=rt;let Ct=vt;vt=null,this.setClear(Ct)}},getReversed:function(){return ht},setTest:function(rt){rt?K(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(rt){Q!==rt&&!V&&(i.depthMask(rt),Q=rt)},setFunc:function(rt){if(ht&&(rt=td[rt]),pt!==rt){switch(rt){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=rt}},setLocked:function(rt){V=rt},setClear:function(rt){vt!==rt&&(vt=rt,ht&&(rt=1-rt),i.clearDepth(rt))},reset:function(){V=!1,Q=null,pt=null,vt=null,ht=!1}}}function r(){let V=!1,ht=null,Q=null,pt=null,vt=null,rt=null,It=null,Ct=null,Te=null;return{setTest:function(ve){V||(ve?K(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(ve){ht!==ve&&!V&&(i.stencilMask(ve),ht=ve)},setFunc:function(ve,Vn,kn){(Q!==ve||pt!==Vn||vt!==kn)&&(i.stencilFunc(ve,Vn,kn),Q=ve,pt=Vn,vt=kn)},setOp:function(ve,Vn,kn){(rt!==ve||It!==Vn||Ct!==kn)&&(i.stencilOp(ve,Vn,kn),rt=ve,It=Vn,Ct=kn)},setLocked:function(ve){V=ve},setClear:function(ve){Te!==ve&&(i.clearStencil(ve),Te=ve)},reset:function(){V=!1,ht=null,Q=null,pt=null,vt=null,rt=null,It=null,Ct=null,Te=null}}}let s=new e,o=new n,a=new r,h=new WeakMap,u=new WeakMap,d={},m={},f={},g=new WeakMap,M=[],T=null,y=!1,_=null,w=null,p=null,l=null,v=null,c=null,P=null,x=new Zt(0,0,0),S=0,b=!1,A=null,E=null,R=null,U=null,N=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,G=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=G>=2);let it=null,j={},nt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Mt=new re().fromArray(nt),ut=new re().fromArray(_t);function Z(V,ht,Q,pt){let vt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(V,rt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<Q;It++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ht+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return rt}let et={};et[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Ki),Ot(!1),de(sh),K(i.CULL_FACE),At($n);function K(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function st(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function lt(V,ht){return f[V]!==ht?(i.bindFramebuffer(V,ht),f[V]=ht,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function at(V,ht){let Q=M,pt=!1;if(V){Q=g.get(ht),Q===void 0&&(Q=[],g.set(ht,Q));let vt=V.textures;if(Q.length!==vt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,It=vt.length;rt<It;rt++)Q[rt]=i.COLOR_ATTACHMENT0+rt;Q.length=vt.length,pt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,pt=!0);pt&&i.drawBuffers(Q)}function Qt(V){return T!==V?(i.useProgram(V),T=V,!0):!1}let bt={[Mi]:i.FUNC_ADD,[bf]:i.FUNC_SUBTRACT,[Tf]:i.FUNC_REVERSE_SUBTRACT};bt[wf]=i.MIN,bt[Ef]=i.MAX;let Pt={[Af]:i.ZERO,[Cf]:i.ONE,[Rf]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[If]:i.DST_ALPHA,[Pf]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[Nf]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Ff]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function At(V,ht,Q,pt,vt,rt,It,Ct,Te,ve){if(V===$n){y===!0&&(st(i.BLEND),y=!1);return}if(y===!1&&(K(i.BLEND),y=!0),V!==Sf){if(V!==_||ve!==b){if((w!==Mi||v!==Mi)&&(i.blendEquation(i.FUNC_ADD),w=Mi,v=Mi),ve)switch(V){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ah:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",V);break}p=null,l=null,c=null,P=null,x.set(0,0,0),S=0,_=V,b=ve}return}vt=vt||ht,rt=rt||Q,It=It||pt,(ht!==w||vt!==v)&&(i.blendEquationSeparate(bt[ht],bt[vt]),w=ht,v=vt),(Q!==p||pt!==l||rt!==c||It!==P)&&(i.blendFuncSeparate(Pt[Q],Pt[pt],Pt[rt],Pt[It]),p=Q,l=pt,c=rt,P=It),(Ct.equals(x)===!1||Te!==S)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Te),x.copy(Ct),S=Te),_=V,b=!1}function wt(V,ht){V.side===en?st(i.CULL_FACE):K(i.CULL_FACE);let Q=V.side===Oe;ht&&(Q=!Q),Ot(Q),V.blending===Ji&&V.transparent===!1?At($n):At(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);let pt=V.stencilWrite;a.setTest(pt),pt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Xt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(V){A!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),A=V)}function de(V){V!==vf?(K(i.CULL_FACE),V!==E&&(V===sh?i.cullFace(i.BACK):V===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),E=V}function Wt(V){V!==R&&(B&&i.lineWidth(V),R=V)}function Xt(V,ht,Q){V?(K(i.POLYGON_OFFSET_FILL),(U!==ht||N!==Q)&&(U=ht,N=Q,o.getReversed()&&(ht=-ht),i.polygonOffset(ht,Q))):st(i.POLYGON_OFFSET_FILL)}function Gt(V){V?K(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function qt(V){V===void 0&&(V=i.TEXTURE0+F-1),it!==V&&(i.activeTexture(V),it=V)}function O(V,ht,Q){Q===void 0&&(it===null?Q=i.TEXTURE0+F-1:Q=it);let pt=j[Q];pt===void 0&&(pt={type:void 0,texture:void 0},j[Q]=pt),(pt.type!==V||pt.texture!==ht)&&(it!==Q&&(i.activeTexture(Q),it=Q),i.bindTexture(V,ht||et[V]),pt.type=V,pt.texture=ht)}function Le(){let V=j[it];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ut(){try{i.compressedTexImage2D(...arguments)}catch(V){Vt("WebGLState:",V)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(V){Vt("WebGLState:",V)}}function C(){try{i.texSubImage2D(...arguments)}catch(V){Vt("WebGLState:",V)}}function z(){try{i.texSubImage3D(...arguments)}catch(V){Vt("WebGLState:",V)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Vt("WebGLState:",V)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Vt("WebGLState:",V)}}function ot(){try{i.texStorage2D(...arguments)}catch(V){Vt("WebGLState:",V)}}function ct(){try{i.texStorage3D(...arguments)}catch(V){Vt("WebGLState:",V)}}function J(){try{i.texImage2D(...arguments)}catch(V){Vt("WebGLState:",V)}}function tt(){try{i.texImage3D(...arguments)}catch(V){Vt("WebGLState:",V)}}function ft(V){return m[V]!==void 0?m[V]:i.getParameter(V)}function Dt(V,ht){m[V]!==ht&&(i.pixelStorei(V,ht),m[V]=ht)}function mt(V){Mt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Mt.copy(V))}function dt(V){ut.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function Ft(V,ht){let Q=u.get(ht);Q===void 0&&(Q=new WeakMap,u.set(ht,Q));let pt=Q.get(V);pt===void 0&&(pt=i.getUniformBlockIndex(ht,V.name),Q.set(V,pt))}function zt(V,ht){let pt=u.get(ht).get(V);h.get(ht)!==pt&&(i.uniformBlockBinding(ht,pt,V.__bindingPointIndex),h.set(ht,pt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},it=null,j={},f={},g=new WeakMap,M=[],T=null,y=!1,_=null,w=null,p=null,l=null,v=null,c=null,P=null,x=new Zt(0,0,0),S=0,b=!1,A=null,E=null,R=null,U=null,N=null,Mt.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:st,bindFramebuffer:lt,drawBuffers:at,useProgram:Qt,setBlending:At,setMaterial:wt,setFlipSided:Ot,setCullFace:de,setLineWidth:Wt,setPolygonOffset:Xt,setScissorTest:Gt,activeTexture:qt,bindTexture:O,unbindTexture:Le,compressedTexImage2D:Ut,compressedTexImage3D:D,texImage2D:J,texImage3D:tt,pixelStorei:Dt,getParameter:ft,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:ot,texStorage3D:ct,texSubImage2D:C,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:mt,viewport:dt,reset:$t}}function $y(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Et,d=new WeakMap,m=new Set,f,g=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,C){return M?new OffscreenCanvas(D,C):Rs("canvas")}function y(D,C,z){let H=1,$=Ut(D);if(($.width>z||$.height>z)&&(H=z/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ot=Math.floor(H*$.width),ct=Math.floor(H*$.height);f===void 0&&(f=T(ot,ct));let J=C?T(ot,ct):f;return J.width=ot,J.height=ct,J.getContext("2d").drawImage(D,0,0,ot,ct),Bt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ot+"x"+ct+")."),J}else return"data"in D&&Bt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),D;return D}function _(D){return D.generateMipmaps}function w(D){i.generateMipmap(D)}function p(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function l(D,C,z,H,$,ot=!1){if(D!==null){if(i[D]!==void 0)return i[D];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ct;H&&(ct=t.get("EXT_texture_norm16"),ct||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=C;if(C===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ct&&(J=ct.R16_EXT),z===i.SHORT&&ct&&(J=ct.R16_SNORM_EXT)),C===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),C===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ct&&(J=ct.RG16_EXT),z===i.SHORT&&ct&&(J=ct.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),C===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),C===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),C===i.RGB&&(z===i.UNSIGNED_SHORT&&ct&&(J=ct.RGB16_EXT),z===i.SHORT&&ct&&(J=ct.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),C===i.RGBA){let tt=ot?Cs:te.getTransfer($);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=tt===ae?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ct&&(J=ct.RGBA16_EXT),z===i.SHORT&&ct&&(J=ct.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(D,C){let z;return D?C===null||C===Nn||C===Hr?z=i.DEPTH24_STENCIL8:C===bn?z=i.DEPTH32F_STENCIL8:C===Gr&&(z=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Nn||C===Hr?z=i.DEPTH_COMPONENT24:C===bn?z=i.DEPTH_COMPONENT32F:C===Gr&&(z=i.DEPTH_COMPONENT16),z}function c(D,C){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ge&&D.minFilter!==We?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function P(D){let C=D.target;C.removeEventListener("dispose",P),S(C),C.isVideoTexture&&d.delete(C),C.isHTMLTexture&&m.delete(C)}function x(D){let C=D.target;C.removeEventListener("dispose",x),A(C)}function S(D){let C=n.get(D);if(C.__webglInit===void 0)return;let z=D.source,H=g.get(z);if(H){let $=H[C.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(D),Object.keys(H).length===0&&g.delete(z)}n.remove(D)}function b(D){let C=n.get(D);i.deleteTexture(C.__webglTexture);let z=D.source,H=g.get(z);delete H[C.__cacheKey],o.memory.textures--}function A(D){let C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(C.__webglFramebuffer[H]))for(let $=0;$<C.__webglFramebuffer[H].length;$++)i.deleteFramebuffer(C.__webglFramebuffer[H][$]);else i.deleteFramebuffer(C.__webglFramebuffer[H]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[H])}else{if(Array.isArray(C.__webglFramebuffer))for(let H=0;H<C.__webglFramebuffer.length;H++)i.deleteFramebuffer(C.__webglFramebuffer[H]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let H=0;H<C.__webglColorRenderbuffer.length;H++)C.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[H]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let z=D.textures;for(let H=0,$=z.length;H<$;H++){let ot=n.get(z[H]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(z[H])}n.remove(D)}let E=0;function R(){E=0}function U(){return E}function N(D){E=D}function F(){let D=E;return D>=r.maxTextures&&Bt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),E+=1,D}function B(D){let C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function G(D,C){let z=n.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){let H=D.image;if(H===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,D,C);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+C)}function X(D,C){let z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){st(z,D,C);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+C)}function it(D,C){let z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){st(z,D,C);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+C)}function j(D,C){let z=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){lt(z,D,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+C)}let nt={[Ir]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},_t={[Ge]:i.NEAREST,[Gf]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},Mt={[Xf]:i.NEVER,[Jf]:i.ALWAYS,[qf]:i.LESS,[bc]:i.LEQUAL,[Yf]:i.EQUAL,[Tc]:i.GEQUAL,[Zf]:i.GREATER,[$f]:i.NOTEQUAL};function ut(D,C){if(C.type===bn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===We||C.magFilter===za||C.magFilter===eo||C.magFilter===Ii||C.minFilter===We||C.minFilter===za||C.minFilter===eo||C.minFilter===Ii)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,nt[C.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,nt[C.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,nt[C.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,_t[C.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,_t[C.minFilter]),C.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ge||C.minFilter!==eo&&C.minFilter!==Ii||C.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Z(D,C){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",P));let H=C.source,$=g.get(H);$===void 0&&($={},g.set(H,$));let ot=B(C);if(ot!==D.__cacheKey){$[ot]===void 0&&($[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[ot].usedTimes++;let ct=$[D.__cacheKey];ct!==void 0&&($[D.__cacheKey].usedTimes--,ct.usedTimes===0&&b(C)),D.__cacheKey=ot,D.__webglTexture=$[ot].texture}return z}function et(D,C,z){return Math.floor(Math.floor(D/z)/C)}function K(D,C,z,H){let ot=D.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,z,H,C.data);else{ot.sort((Dt,mt)=>Dt.start-mt.start);let ct=0;for(let Dt=1;Dt<ot.length;Dt++){let mt=ot[ct],dt=ot[Dt],Ft=mt.start+mt.count,zt=et(dt.start,C.width,4),$t=et(mt.start,C.width,4);dt.start<=Ft+1&&zt===$t&&et(dt.start+dt.count-1,C.width,4)===zt?mt.count=Math.max(mt.count,dt.start+dt.count-mt.start):(++ct,ot[ct]=dt)}ot.length=ct+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let Dt=0,mt=ot.length;Dt<mt;Dt++){let dt=ot[Dt],Ft=Math.floor(dt.start/4),zt=Math.ceil(dt.count/4),$t=Ft%C.width,V=Math.floor(Ft/C.width),ht=zt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,$t,V,ht,Q,z,H,C.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function st(D,C,z){let H=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(H=i.TEXTURE_3D);let $=Z(D,C),ot=C.source;e.bindTexture(H,D.__webglTexture,i.TEXTURE0+z);let ct=n.get(ot);if(ot.version!==ct.__version||$===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let Q=te.getPrimaries(te.workingColorSpace),pt=C.colorSpace===ai?null:te.getPrimaries(C.colorSpace),vt=C.colorSpace===ai||Q===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let tt=y(C.image,!1,r.maxTextureSize);tt=Le(C,tt);let ft=s.convert(C.format,C.colorSpace),Dt=s.convert(C.type),mt=l(C.internalFormat,ft,Dt,C.normalized,C.colorSpace,C.isVideoTexture);ut(H,C);let dt,Ft=C.mipmaps,zt=C.isVideoTexture!==!0,$t=ct.__version===void 0||$===!0,V=ot.dataReady,ht=c(C,tt);if(C.isDepthTexture)mt=v(C.format===Di,C.type),$t&&(zt?e.texStorage2D(i.TEXTURE_2D,1,mt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,mt,tt.width,tt.height,0,ft,Dt,null));else if(C.isDataTexture)if(Ft.length>0){zt&&$t&&e.texStorage2D(i.TEXTURE_2D,ht,mt,Ft[0].width,Ft[0].height);for(let Q=0,pt=Ft.length;Q<pt;Q++)dt=Ft[Q],zt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,ft,Dt,dt.data):e.texImage2D(i.TEXTURE_2D,Q,mt,dt.width,dt.height,0,ft,Dt,dt.data);C.generateMipmaps=!1}else zt?($t&&e.texStorage2D(i.TEXTURE_2D,ht,mt,tt.width,tt.height),V&&K(C,tt,ft,Dt)):e.texImage2D(i.TEXTURE_2D,0,mt,tt.width,tt.height,0,ft,Dt,tt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,mt,Ft[0].width,Ft[0].height,tt.depth);for(let Q=0,pt=Ft.length;Q<pt;Q++)if(dt=Ft[Q],C.format!==Tn)if(ft!==null)if(zt){if(V)if(C.layerUpdates.size>0){let vt=Rh(dt.width,dt.height,C.format,C.type);for(let rt of C.layerUpdates){let It=dt.data.subarray(rt*vt/dt.data.BYTES_PER_ELEMENT,(rt+1)*vt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,rt,dt.width,dt.height,1,ft,It)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,tt.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,mt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,tt.depth,ft,Dt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,mt,dt.width,dt.height,tt.depth,0,ft,Dt,dt.data)}else{zt&&$t&&e.texStorage2D(i.TEXTURE_2D,ht,mt,Ft[0].width,Ft[0].height);for(let Q=0,pt=Ft.length;Q<pt;Q++)dt=Ft[Q],C.format!==Tn?ft!==null?zt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,mt,dt.width,dt.height,0,dt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,ft,Dt,dt.data):e.texImage2D(i.TEXTURE_2D,Q,mt,dt.width,dt.height,0,ft,Dt,dt.data)}else if(C.isDataArrayTexture)if(zt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,mt,tt.width,tt.height,tt.depth),V)if(C.layerUpdates.size>0){let Q=Rh(tt.width,tt.height,C.format,C.type);for(let pt of C.layerUpdates){let vt=tt.data.subarray(pt*Q/tt.data.BYTES_PER_ELEMENT,(pt+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,tt.width,tt.height,1,ft,Dt,vt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,Dt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,tt.width,tt.height,tt.depth,0,ft,Dt,tt.data);else if(C.isData3DTexture)zt?($t&&e.texStorage3D(i.TEXTURE_3D,ht,mt,tt.width,tt.height,tt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,Dt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,mt,tt.width,tt.height,tt.depth,0,ft,Dt,tt.data);else if(C.isFramebufferTexture){if($t)if(zt)e.texStorage2D(i.TEXTURE_2D,ht,mt,tt.width,tt.height);else{let Q=tt.width,pt=tt.height;for(let vt=0;vt<ht;vt++)e.texImage2D(i.TEXTURE_2D,vt,mt,Q,pt,0,ft,Dt,null),Q>>=1,pt>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),m.add(C),Q.onpaint=pt=>{let vt=pt.changedElements;for(let rt of m)vt.includes(rt.image)&&(rt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let vt=i.RGBA,rt=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,rt,It,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(zt&&$t){let Q=Ut(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ht,mt,Q.width,Q.height)}for(let Q=0,pt=Ft.length;Q<pt;Q++)dt=Ft[Q],zt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ft,Dt,dt):e.texImage2D(i.TEXTURE_2D,Q,mt,ft,Dt,dt);C.generateMipmaps=!1}else if(zt){if($t){let Q=Ut(tt);e.texStorage2D(i.TEXTURE_2D,ht,mt,Q.width,Q.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Dt,tt)}else e.texImage2D(i.TEXTURE_2D,0,mt,ft,Dt,tt);_(C)&&w(H),ct.__version=ot.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function lt(D,C,z){if(C.image.length!==6)return;let H=Z(D,C),$=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+z);let ot=n.get($);if($.version!==ot.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let ct=te.getPrimaries(te.workingColorSpace),J=C.colorSpace===ai?null:te.getPrimaries(C.colorSpace),tt=C.colorSpace===ai||ct===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ft=C.isCompressedTexture||C.image[0].isCompressedTexture,Dt=C.image[0]&&C.image[0].isDataTexture,mt=[];for(let rt=0;rt<6;rt++)!ft&&!Dt?mt[rt]=y(C.image[rt],!0,r.maxCubemapSize):mt[rt]=Dt?C.image[rt].image:C.image[rt],mt[rt]=Le(C,mt[rt]);let dt=mt[0],Ft=s.convert(C.format,C.colorSpace),zt=s.convert(C.type),$t=l(C.internalFormat,Ft,zt,C.normalized,C.colorSpace),V=C.isVideoTexture!==!0,ht=ot.__version===void 0||H===!0,Q=$.dataReady,pt=c(C,dt);ut(i.TEXTURE_CUBE_MAP,C);let vt;if(ft){V&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,dt.width,dt.height);for(let rt=0;rt<6;rt++){vt=mt[rt].mipmaps;for(let It=0;It<vt.length;It++){let Ct=vt[It];C.format!==Tn?Ft!==null?V?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It,0,0,Ct.width,Ct.height,Ft,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It,$t,Ct.width,Ct.height,0,Ct.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It,0,0,Ct.width,Ct.height,Ft,zt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It,$t,Ct.width,Ct.height,0,Ft,zt,Ct.data)}}}else{if(vt=C.mipmaps,V&&ht){vt.length>0&&pt++;let rt=Ut(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Dt){V?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,mt[rt].width,mt[rt].height,Ft,zt,mt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,mt[rt].width,mt[rt].height,0,Ft,zt,mt[rt].data);for(let It=0;It<vt.length;It++){let Te=vt[It].image[rt].image;V?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It+1,0,0,Te.width,Te.height,Ft,zt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It+1,$t,Te.width,Te.height,0,Ft,zt,Te.data)}}else{V?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,zt,mt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,Ft,zt,mt[rt]);for(let It=0;It<vt.length;It++){let Ct=vt[It];V?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It+1,0,0,Ft,zt,Ct.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,It+1,$t,Ft,zt,Ct.image[rt])}}}_(C)&&w(i.TEXTURE_CUBE_MAP),ot.__version=$.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function at(D,C,z,H,$,ot){let ct=s.convert(z.format,z.colorSpace),J=s.convert(z.type),tt=l(z.internalFormat,ct,J,z.normalized,z.colorSpace),ft=n.get(C),Dt=n.get(z);if(Dt.__renderTarget=C,!ft.__hasExternalTextures){let mt=Math.max(1,C.width>>ot),dt=Math.max(1,C.height>>ot);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,ot,tt,mt,dt,C.depth,0,ct,J,null):e.texImage2D($,ot,tt,mt,dt,0,ct,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,$,Dt.__webglTexture,0,Gt(C)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,$,Dt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(D,C,z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),C.depthBuffer){let H=C.depthTexture,$=H&&H.isDepthTexture?H.type:null,ot=v(C.stencilBuffer,$),ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(C),ot,C.width,C.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(C),ot,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ot,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,D)}else{let H=C.textures;for(let $=0;$<H.length;$++){let ot=H[$],ct=s.convert(ot.format,ot.colorSpace),J=s.convert(ot.type),tt=l(ot.internalFormat,ct,J,ot.normalized,ot.colorSpace);qt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(C),tt,C.width,C.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(C),tt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,tt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(D,C,z){let H=C.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(C.depthTexture);if($.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,C.depthTexture.addEventListener("dispose",P)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ut(i.TEXTURE_CUBE_MAP,C.depthTexture);let ft=s.convert(C.depthTexture.format),Dt=s.convert(C.depthTexture.type),mt;C.depthTexture.format===Xn?mt=i.DEPTH_COMPONENT24:C.depthTexture.format===Di&&(mt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,C.width,C.height,0,ft,Dt,null)}}else G(C.depthTexture,0);let ot=$.__webglTexture,ct=Gt(C),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,tt=C.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===Xn)qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,ot,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,ot,0);else if(C.depthTexture.format===Di)qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,ot,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(D){let C=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){let H=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),H){let $=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),C.__depthDisposeCallback=$}C.__boundDepthTexture=H}if(D.depthTexture&&!C.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)bt(C.__webglFramebuffer[H],D,H);else{let H=D.texture.mipmaps;H&&H.length>0?bt(C.__webglFramebuffer[0],D,0):bt(C.__webglFramebuffer,D,0)}else if(z){C.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[H]),C.__webglDepthbuffer[H]===void 0)C.__webglDepthbuffer[H]=i.createRenderbuffer(),Qt(C.__webglDepthbuffer[H],D,!1);else{let $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ot)}}else{let H=D.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Qt(C.__webglDepthbuffer,D,!1);else{let $=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(D,C,z){let H=n.get(D);C!==void 0&&at(H.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Pt(D)}function wt(D){let C=D.texture,z=n.get(D),H=n.get(C);D.addEventListener("dispose",x);let $=D.textures,ot=D.isWebGLCubeRenderTarget===!0,ct=$.length>1;if(ct||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=C.version,o.memory.textures++),ot){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let tt=0;tt<C.mipmaps.length;tt++)z.__webglFramebuffer[J][tt]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<C.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ct)for(let J=0,tt=$.length;J<tt;J++){let ft=n.get($[J]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&qt(D)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let tt=$[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let ft=s.convert(tt.format,tt.colorSpace),Dt=s.convert(tt.type),mt=l(tt.internalFormat,ft,Dt,tt.normalized,tt.colorSpace,D.isXRRenderTarget===!0),dt=Gt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Qt(z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ut(i.TEXTURE_CUBE_MAP,C);for(let J=0;J<6;J++)if(C.mipmaps&&C.mipmaps.length>0)for(let tt=0;tt<C.mipmaps.length;tt++)at(z.__webglFramebuffer[J][tt],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else at(z.__webglFramebuffer[J],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);_(C)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let J=0,tt=$.length;J<tt;J++){let ft=$[J],Dt=n.get(ft),mt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Dt.__webglTexture),ut(mt,ft),at(z.__webglFramebuffer,D,ft,i.COLOR_ATTACHMENT0+J,mt,0),_(ft)&&w(mt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(J=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,H.__webglTexture),ut(J,C),C.mipmaps&&C.mipmaps.length>0)for(let tt=0;tt<C.mipmaps.length;tt++)at(z.__webglFramebuffer[tt],D,C,i.COLOR_ATTACHMENT0,J,tt);else at(z.__webglFramebuffer,D,C,i.COLOR_ATTACHMENT0,J,0);_(C)&&w(J),e.unbindTexture()}D.depthBuffer&&Pt(D)}function Ot(D){let C=D.textures;for(let z=0,H=C.length;z<H;z++){let $=C[z];if(_($)){let ot=p(D),ct=n.get($).__webglTexture;e.bindTexture(ot,ct),w(ot),e.unbindTexture()}}}let de=[],Wt=[];function Xt(D){if(D.samples>0){if(qt(D)===!1){let C=D.textures,z=D.width,H=D.height,$=i.COLOR_BUFFER_BIT,ot=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(D),J=C.length>1;if(J)for(let ft=0;ft<C.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let tt=D.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ft=0;ft<C.length;ft++){if(D.resolveDepthBuffer&&(D.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);let Dt=n.get(C[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,$,i.NEAREST),h===!0&&(de.length=0,Wt.length=0,de.push(i.COLOR_ATTACHMENT0+ft),D.depthBuffer&&D.resolveDepthBuffer===!1&&(de.push(ot),Wt.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ft=0;ft<C.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);let Dt=n.get(C[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){let C=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Gt(D){return Math.min(r.maxSamples,D.samples)}function qt(D){let C=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function O(D){let C=o.render.frame;d.get(D)!==C&&(d.set(D,C),D.update())}function Le(D,C){let z=D.colorSpace,H=D.format,$=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==As&&z!==ai&&(te.getTransfer(z)===ae?(H!==Tn||$!==nn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",z)),C}function Ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.getTextureUnits=U,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Jy(i,t){function e(n,r=ai){let s,o=te.getTransfer(r);if(n===nn)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return i.BYTE;if(n===_h)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===Tn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Ha)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===no||n===io||n===ro||n===so)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===$a||n===Ja)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===ja||n===Qa||n===tc||n===ec||n===oo||n===nc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ka||n===ja)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return s.COMPRESSED_R11_EAC;if(n===ec)return s.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return s.COMPRESSED_RG11_EAC;if(n===nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===rc||n===sc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ic)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===xc||n===yc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===_c)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===Mc||n===ao||n===Sc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===vc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:Ky,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Dn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",h=1,u=null,d=null,m=null,f=null,g=null,M=null,T=typeof XRWebGLBinding<"u",y=new Hh,_={},w=e.getContextAttributes(),p=null,l=null,v=[],c=[],P=new Et,x=null,S=new He;S.viewport=new re;let b=new He;b.viewport=new re;let A=[S,b],E=new Na,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=v[Z];return et===void 0&&(et=new Fr,v[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=v[Z];return et===void 0&&(et=new Fr,v[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=v[Z];return et===void 0&&(et=new Fr,v[Z]=et),et.getHandSpace()};function N(Z){let et=c.indexOf(Z.inputSource);if(et===-1)return;let K=v[et];K!==void 0&&(K.update(Z.inputSource,Z.frame,u||o),K.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<v.length;Z++){let et=c[Z];et!==null&&(c[Z]=null,v[Z].disconnect(et))}R=null,U=null,y.reset();for(let Z in _)delete _[Z];t.setRenderTarget(p),g=null,f=null,m=null,r=null,l=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,st=null,lt=null;w.depth&&(lt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=w.stencil?Di:Xn,st=w.stencil?Hr:Nn);let at={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(at),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),l=new un(f.textureWidth,f.textureHeight,{format:Tn,type:nn,depthTexture:new oi(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let K={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),l=new un(g.framebufferWidth,g.framebufferHeight,{format:Tn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}l.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(Z){for(let et=0;et<Z.removed.length;et++){let K=Z.removed[et],st=c.indexOf(K);st>=0&&(c[st]=null,v[st].disconnect(K))}for(let et=0;et<Z.added.length;et++){let K=Z.added[et],st=c.indexOf(K);if(st===-1){for(let at=0;at<v.length;at++)if(at>=c.length){c.push(K),st=at;break}else if(c[at]===null){c[at]=K,st=at;break}if(st===-1)break}let lt=v[st];lt&&lt.connect(K)}}let G=new L,X=new L;function it(Z,et,K){G.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(K.matrixWorld);let st=G.distanceTo(X),lt=et.projectionMatrix.elements,at=K.projectionMatrix.elements,Qt=lt[14]/(lt[10]-1),bt=lt[14]/(lt[10]+1),Pt=(lt[9]+1)/lt[5],At=(lt[9]-1)/lt[5],wt=(lt[8]-1)/lt[0],Ot=(at[8]+1)/at[0],de=Qt*wt,Wt=Qt*Ot,Xt=st/(-wt+Ot),Gt=Xt*-wt;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Gt),Z.translateZ(Xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),lt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let qt=Qt+Xt,O=bt+Xt,Le=de-Gt,Ut=Wt+(st-Gt),D=Pt*bt/O*qt,C=At*bt/O*qt;Z.projectionMatrix.makePerspective(Le,Ut,D,C,qt,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function j(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let et=Z.near,K=Z.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(K=y.depthFar)),E.near=b.near=S.near=et,E.far=b.far=S.far=K,(R!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,U=E.far),E.layers.mask=Z.layers.mask|6,S.layers.mask=E.layers.mask&-5,b.layers.mask=E.layers.mask&-3;let st=Z.parent,lt=E.cameras;j(E,st);for(let at=0;at<lt.length;at++)j(lt[at],st);lt.length===2?it(E,S,b):E.projectionMatrix.copy(S.projectionMatrix),nt(Z,E,st)};function nt(Z,et,K){K===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(K.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return h},this.setFoveation=function(Z){h=Z,f!==null&&(f.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)},this.getCameraTexture=function(Z){return _[Z]};let _t=null;function Mt(Z,et){if(d=et.getViewerPose(u||o),M=et,d!==null){let K=d.views;g!==null&&(t.setRenderTargetFramebuffer(l,g.framebuffer),t.setRenderTarget(l));let st=!1;K.length!==E.cameras.length&&(E.cameras.length=0,st=!0);for(let bt=0;bt<K.length;bt++){let Pt=K[bt],At=null;if(g!==null)At=g.getViewport(Pt);else{let Ot=m.getViewSubImage(f,Pt);At=Ot.viewport,bt===0&&(t.setRenderTargetTextures(l,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(l))}let wt=A[bt];wt===void 0&&(wt=new He,wt.layers.enable(bt),wt.viewport=new re,A[bt]=wt),wt.matrix.fromArray(Pt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Pt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(At.x,At.y,At.width,At.height),bt===0&&(E.matrix.copy(wt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),st===!0&&E.cameras.push(wt)}let lt=r.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let bt=m.getDepthInformation(K[0]);bt&&bt.isValid&&bt.texture&&y.init(bt,r.renderState)}if(lt&&lt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let bt=0;bt<K.length;bt++){let Pt=K[bt].camera;if(Pt){let At=_[Pt];At||(At=new Vs,_[Pt]=At);let wt=m.getCameraImage(Pt);At.sourceTexture=wt}}}}for(let K=0;K<v.length;K++){let st=c[K],lt=v[K];st!==null&&lt!==void 0&&lt.update(st,et,u||o)}_t&&_t(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),M=null}let ut=new Ed;ut.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){_t=Z},this.dispose=function(){}}},Qy=new kt,Dd=new Ht;Dd.set(-1,0,0,0,1,0,0,0,1);function tv(i,t){function e(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,Eh(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,w,p,l){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(y,_):_.isMeshLambertMaterial?(s(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(y,_),m(y,_)):_.isMeshPhongMaterial?(s(y,_),d(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(y,_),f(y,_),_.isMeshPhysicalMaterial&&g(y,_,l)):_.isMeshMatcapMaterial?(s(y,_),M(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),T(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(o(y,_),_.isLineDashedMaterial&&a(y,_)):_.isPointsMaterial?h(y,_,w,p):_.isSpriteMaterial?u(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,e(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Oe&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,e(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Oe&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,e(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,e(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let w=t.get(_),p=w.envMap,l=w.envMapRotation;p&&(y.envMap.value=p,y.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(l)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Dd),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,y.aoMapTransform))}function o(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform))}function a(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,w,p){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*w,y.scale.value=p*.5,_.map&&(y.map.value=_.map,e(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function m(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function f(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,w){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Oe&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){let w=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ev(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(l,v){let c=v.program;n.uniformBlockBinding(l,c)}function u(l,v){let c=r[l.id];c===void 0&&(y(l),c=d(l),r[l.id]=c,l.addEventListener("dispose",w));let P=v.program;n.updateUBOMapping(l,P);let x=t.render.frame;s[l.id]!==x&&(f(l),s[l.id]=x)}function d(l){let v=m();l.__bindingPointIndex=v;let c=i.createBuffer(),P=l.__size,x=l.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,c),c}function m(){for(let l=0;l<a;l++)if(o.indexOf(l)===-1)return o.push(l),l;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(l){let v=r[l.id],c=l.uniforms,P=l.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,S=c.length;x<S;x++){let b=c[x];if(Array.isArray(b))for(let A=0,E=b.length;A<E;A++)g(b[A],x,A,P);else g(b,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(l,v,c,P){if(T(l,v,c,P)===!0){let x=l.__offset,S=l.value;if(Array.isArray(S)){let b=0;for(let A=0;A<S.length;A++){let E=S[A],R=_(E);M(E,l.__data,b),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(b+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(S,l.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,l.__data)}}function M(l,v,c){typeof l=="number"||typeof l=="boolean"?v[0]=l:l.isMatrix3?(v[0]=l.elements[0],v[1]=l.elements[1],v[2]=l.elements[2],v[3]=0,v[4]=l.elements[3],v[5]=l.elements[4],v[6]=l.elements[5],v[7]=0,v[8]=l.elements[6],v[9]=l.elements[7],v[10]=l.elements[8],v[11]=0):ArrayBuffer.isView(l)?v.set(new l.constructor(l.buffer,l.byteOffset,v.length)):l.toArray(v,c)}function T(l,v,c,P){let x=l.value,S=v+"_"+c;if(P[S]===void 0)return typeof x=="number"||typeof x=="boolean"?P[S]=x:ArrayBuffer.isView(x)?P[S]=x.slice():P[S]=x.clone(),!0;{let b=P[S];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return P[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function y(l){let v=l.uniforms,c=0,P=16;for(let S=0,b=v.length;S<b;S++){let A=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,R=A.length;E<R;E++){let U=A[E],N=Array.isArray(U.value)?U.value:[U.value];for(let F=0,B=N.length;F<B;F++){let G=N[F],X=_(G),it=c%P,j=it%X.boundary,nt=it+j;c+=j,nt!==0&&P-nt<X.storage&&(c+=P-nt),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=c,c+=X.storage}}}let x=c%P;return x>0&&(c+=P-x),l.__size=c,l.__cache={},this}function _(l){let v={boundary:0,storage:0};return typeof l=="number"||typeof l=="boolean"?(v.boundary=4,v.storage=4):l.isVector2?(v.boundary=8,v.storage=8):l.isVector3||l.isColor?(v.boundary=16,v.storage=12):l.isVector4?(v.boundary=16,v.storage=16):l.isMatrix3?(v.boundary=48,v.storage=48):l.isMatrix4?(v.boundary=64,v.storage=64):l.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(l)?(v.boundary=16,v.storage=l.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",l),v}function w(l){let v=l.target;v.removeEventListener("dispose",w);let c=o.indexOf(v.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let l in r)i.deleteBuffer(r[l]);o=[],r={},s={}}return{bind:h,update:u,dispose:p}}var nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function iv(){return Kn===null&&(Kn=new Us(nv,16,16,Li,Jn),Kn.name="DFG_LUT",Kn.minFilter=We,Kn.magFilter=We,Kn.wrapS=Wn,Kn.wrapT=Wn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var Cc=class{constructor(t={}){let{canvas:e=Kf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:g=nn}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=o;let T=g,y=new Set([qa,Xa,Wa]),_=new Set([nn,Nn,Gr,Hr,ka,Ga]),w=new Uint32Array(4),p=new Int32Array(4),l=new L,v=null,c=null,P=[],x=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,A=!1,E=null,R=null,U=null,N=null;this._outputColorSpace=je;let F=0,B=0,G=null,X=-1,it=null,j=new re,nt=new re,_t=null,Mt=new Zt(0),ut=0,Z=e.width,et=e.height,K=1,st=null,lt=null,at=new re(0,0,Z,et),Qt=new re(0,0,Z,et),bt=!1,Pt=new Or,At=!1,wt=!1,Ot=new kt,de=new L,Wt=new re,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function qt(){return G===null?K:1}let O=n;function Le(I,k){return e.getContext(I,k)}try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),O===null){let k="webgl2";if(O=Le(k,I),O===null)throw Le(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(I){throw Vt("WebGLRenderer: "+I.message),I}let Ut,D,C,z,H,$,ot,ct,J,tt,ft,Dt,mt,dt,Ft,zt,$t,V,ht,Q,pt,vt,rt;function It(){Ut=new hx(O),Ut.init(),pt=new Jy(O,Ut),D=new nx(O,Ut,t,pt),C=new Zy(O,Ut),D.reversedDepthBuffer&&f&&C.buffers.depth.setReversed(!0),R=O.createFramebuffer(),U=O.createFramebuffer(),N=O.createFramebuffer(),z=new dx(O),H=new Ny,$=new $y(O,Ut,C,H,D,pt,z),ot=new lx(b),ct=new _g(O),vt=new tx(O,ct),J=new ux(O,ct,z,vt),tt=new mx(O,J,ct,vt,z),V=new px(O,D,$),Ft=new ix(H),ft=new Ly(b,ot,Ut,D,vt,Ft),Dt=new tv(b,H),mt=new Fy,dt=new Gy(Ut),$t=new Q_(b,ot,C,tt,M,h),zt=new Yy(b,tt,D),rt=new ev(O,z,D,C),ht=new ex(O,Ut,z),Q=new fx(O,Ut,z),z.programs=ft.programs,b.capabilities=D,b.extensions=Ut,b.properties=H,b.renderLists=mt,b.shadowMap=zt,b.state=C,b.info=z}It(),T!==nn&&(S=new _x(T,e.width,e.height,a,r,s));let Ct=new Wh(b,O);this.xr=Ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let I=Ut.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ut.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(I){I!==void 0&&(K=I,this.setSize(Z,et,!1))},this.getSize=function(I){return I.set(Z,et)},this.setSize=function(I,k,Y=!0){if(Ct.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=I,et=k,e.width=Math.floor(I*K),e.height=Math.floor(k*K),Y===!0&&(e.style.width=I+"px",e.style.height=k+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,I,k)},this.getDrawingBufferSize=function(I){return I.set(Z*K,et*K).floor()},this.setDrawingBufferSize=function(I,k,Y){Z=I,et=k,K=Y,e.width=Math.floor(I*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,I,k)},this.setEffects=function(I){if(T===nn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let k=0;k<I.length;k++)if(I[k].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(j)},this.getViewport=function(I){return I.copy(at)},this.setViewport=function(I,k,Y,W){I.isVector4?at.set(I.x,I.y,I.z,I.w):at.set(I,k,Y,W),C.viewport(j.copy(at).multiplyScalar(K).round())},this.getScissor=function(I){return I.copy(Qt)},this.setScissor=function(I,k,Y,W){I.isVector4?Qt.set(I.x,I.y,I.z,I.w):Qt.set(I,k,Y,W),C.scissor(nt.copy(Qt).multiplyScalar(K).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(I){C.setScissorTest(bt=I)},this.setOpaqueSort=function(I){st=I},this.setTransparentSort=function(I){lt=I},this.getClearColor=function(I){return I.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(I=!0,k=!0,Y=!0){let W=0;if(I){let q=!1;if(G!==null){let yt=G.texture.format;q=y.has(yt)}if(q){let yt=G.texture.type,Tt=_.has(yt),xt=$t.getClearColor(),Rt=$t.getClearAlpha(),Lt=xt.r,Jt=xt.g,jt=xt.b;Tt?(w[0]=Lt,w[1]=Jt,w[2]=jt,w[3]=Rt,O.clearBufferuiv(O.COLOR,0,w)):(p[0]=Lt,p[1]=Jt,p[2]=jt,p[3]=Rt,O.clearBufferiv(O.COLOR,0,p))}else W|=O.COLOR_BUFFER_BIT}k&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),E=I},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),$t.dispose(),mt.dispose(),dt.dispose(),H.dispose(),ot.dispose(),tt.dispose(),vt.dispose(),rt.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ku),Ct.removeEventListener("sessionend",Gu),Gi.stop()};function Te(I){I.preventDefault(),bh("WebGLRenderer: Context Lost."),A=!0}function ve(){bh("WebGLRenderer: Context Restored."),A=!1;let I=z.autoReset,k=zt.enabled,Y=zt.autoUpdate,W=zt.needsUpdate,q=zt.type;It(),z.autoReset=I,zt.enabled=k,zt.autoUpdate=Y,zt.needsUpdate=W,zt.type=q}function Vn(I){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function kn(I){let k=I.target;k.removeEventListener("dispose",kn),dm(k)}function dm(I){pm(I),H.remove(I)}function pm(I){let k=H.get(I).programs;k!==void 0&&(k.forEach(function(Y){ft.releaseProgram(Y)}),I.isShaderMaterial&&ft.releaseShaderCache(I))}this.renderBufferDirect=function(I,k,Y,W,q,yt){k===null&&(k=Xt);let Tt=q.isMesh&&q.matrixWorld.determinantAffine()<0,xt=_m(I,k,Y,W,q);C.setMaterial(W,Tt);let Rt=Y.index,Lt=1;if(W.wireframe===!0){if(Rt=J.getWireframeAttribute(Y),Rt===void 0)return;Lt=2}let Jt=Y.drawRange,jt=Y.attributes.position,Nt=Jt.start*Lt,le=(Jt.start+Jt.count)*Lt;yt!==null&&(Nt=Math.max(Nt,yt.start*Lt),le=Math.min(le,(yt.start+yt.count)*Lt)),Rt!==null?(Nt=Math.max(Nt,0),le=Math.min(le,Rt.count)):jt!=null&&(Nt=Math.max(Nt,0),le=Math.min(le,jt.count));let Ce=le-Nt;if(Ce<0||Ce===1/0)return;vt.setup(q,W,xt,Y,Rt);let we,pe=ht;if(Rt!==null&&(we=ct.get(Rt),pe=Q,pe.setIndex(we)),q.isMesh)W.wireframe===!0?(C.setLineWidth(W.wireframeLinewidth*qt()),pe.setMode(O.LINES)):pe.setMode(O.TRIANGLES);else if(q.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),C.setLineWidth(qe*qt()),q.isLineSegments?pe.setMode(O.LINES):q.isLineLoop?pe.setMode(O.LINE_LOOP):pe.setMode(O.LINE_STRIP)}else q.isPoints?pe.setMode(O.POINTS):q.isSprite&&pe.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))pe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let qe=q._multiDrawStarts,St=q._multiDrawCounts,an=q._multiDrawCount,ne=Rt?ct.get(Rt).bytesPerElement:1,yn=H.get(W).currentProgram.getUniforms();for(let Gn=0;Gn<an;Gn++)yn.setValue(O,"_gl_DrawID",Gn),pe.render(qe[Gn]/ne,St[Gn])}else if(q.isInstancedMesh)pe.renderInstances(Nt,Ce,q.count);else if(Y.isInstancedBufferGeometry){let qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,qe);pe.renderInstances(Nt,Ce,St)}else pe.render(Nt,Ce)};function Vu(I,k,Y){I.transparent===!0&&I.side===en&&I.forceSinglePass===!1?(I.side=Oe,I.needsUpdate=!0,No(I,k,Y),I.side=Mn,I.needsUpdate=!0,No(I,k,Y),I.side=en):No(I,k,Y)}this.compile=function(I,k,Y=null){Y===null&&(Y=I),c=dt.get(Y),c.init(k),x.push(c),Y.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(c.pushLight(q),q.castShadow&&c.pushShadow(q))}),I!==Y&&I.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(c.pushLight(q),q.castShadow&&c.pushShadow(q))}),c.setupLights();let W=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let yt=q.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let xt=yt[Tt];Vu(xt,Y,q),W.add(xt)}else Vu(yt,Y,q),W.add(yt)}),c=x.pop(),W},this.compileAsync=function(I,k,Y=null){let W=this.compile(I,k,Y);return new Promise(q=>{function yt(){if(W.forEach(function(Tt){H.get(Tt).currentProgram.isReady()&&W.delete(Tt)}),W.size===0){q(I);return}setTimeout(yt,10)}Ut.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Tl=null;function mm(I){Tl&&Tl(I)}function ku(){Gi.stop()}function Gu(){Gi.start()}let Gi=new Ed;Gi.setAnimationLoop(mm),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(I){Tl=I,Ct.setAnimationLoop(I),I===null?Gi.stop():Gi.start()},Ct.addEventListener("sessionstart",ku),Ct.addEventListener("sessionend",Gu),this.render=function(I,k){if(k!==void 0&&k.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;E!==null&&E.renderStart(I,k);let Y=Ct.enabled===!0&&Ct.isPresenting===!0,W=S!==null&&(G===null||Y)&&S.begin(b,G);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(k),k=Ct.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,k,G),c=dt.get(I,x.length),c.init(k),c.state.textureUnits=$.getTextureUnits(),x.push(c),Ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Pt.setFromProjectionMatrix(Ot,In,k.reversedDepth),wt=this.localClippingEnabled,At=Ft.init(this.clippingPlanes,wt),v=mt.get(I,P.length),v.init(),P.push(v),Ct.enabled===!0&&Ct.isPresenting===!0){let Tt=b.xr.getDepthSensingMesh();Tt!==null&&wl(Tt,k,-1/0,b.sortObjects)}wl(I,k,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(st,lt,k.reversedDepth),Gt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Gt&&$t.addToRenderList(v,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&Ft.beginShadows();let q=c.state.shadowsArray;if(zt.render(q,I,k),At===!0&&Ft.endShadows(),(W&&S.hasRenderPass())===!1){let Tt=v.opaque,xt=v.transmissive;if(c.setupLights(),k.isArrayCamera){let Rt=k.cameras;if(xt.length>0)for(let Lt=0,Jt=Rt.length;Lt<Jt;Lt++){let jt=Rt[Lt];Wu(Tt,xt,I,jt)}Gt&&$t.render(I);for(let Lt=0,Jt=Rt.length;Lt<Jt;Lt++){let jt=Rt[Lt];Hu(v,I,jt,jt.viewport)}}else xt.length>0&&Wu(Tt,xt,I,k),Gt&&$t.render(I),Hu(v,I,k)}G!==null&&B===0&&($.updateMultisampleRenderTarget(G),$.updateRenderTargetMipmap(G)),W&&S.end(b),I.isScene===!0&&I.onAfterRender(b,I,k),vt.resetDefaultState(),X=-1,it=null,x.pop(),x.length>0?(c=x[x.length-1],$.setTextureUnits(c.state.textureUnits),At===!0&&Ft.setGlobalState(b.clippingPlanes,c.state.camera)):c=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,E!==null&&E.renderEnd()};function wl(I,k,Y,W){if(I.visible===!1)return;if(I.layers.test(k.layers)){if(I.isGroup)Y=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(k);else if(I.isLightProbeGrid)c.pushLightProbeGrid(I);else if(I.isLight)c.pushLight(I),I.castShadow&&c.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Pt.intersectsSprite(I)){W&&Wt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ot);let Tt=tt.update(I),xt=I.material;xt.visible&&v.push(I,Tt,xt,Y,Wt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Pt.intersectsObject(I))){let Tt=tt.update(I),xt=I.material;if(W&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Wt.copy(I.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Wt.copy(Tt.boundingSphere.center)),Wt.applyMatrix4(I.matrixWorld).applyMatrix4(Ot)),Array.isArray(xt)){let Rt=Tt.groups;for(let Lt=0,Jt=Rt.length;Lt<Jt;Lt++){let jt=Rt[Lt],Nt=xt[jt.materialIndex];Nt&&Nt.visible&&v.push(I,Tt,Nt,Y,Wt.z,jt)}}else xt.visible&&v.push(I,Tt,xt,Y,Wt.z,null)}}let yt=I.children;for(let Tt=0,xt=yt.length;Tt<xt;Tt++)wl(yt[Tt],k,Y,W)}function Hu(I,k,Y,W){let{opaque:q,transmissive:yt,transparent:Tt}=I;c.setupLightsView(Y),At===!0&&Ft.setGlobalState(b.clippingPlanes,Y),W&&C.viewport(j.copy(W)),q.length>0&&Lo(q,k,Y),yt.length>0&&Lo(yt,k,Y),Tt.length>0&&Lo(Tt,k,Y),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Wu(I,k,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(c.state.transmissionRenderTarget[W.id]===void 0){let Nt=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");c.state.transmissionRenderTarget[W.id]=new un(1,1,{generateMipmaps:!0,type:Nt?Jn:nn,minFilter:Ii,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}let yt=c.state.transmissionRenderTarget[W.id],Tt=W.viewport||j;yt.setSize(Tt.z*b.transmissionResolutionScale,Tt.w*b.transmissionResolutionScale);let xt=b.getRenderTarget(),Rt=b.getActiveCubeFace(),Lt=b.getActiveMipmapLevel();b.setRenderTarget(yt),b.getClearColor(Mt),ut=b.getClearAlpha(),ut<1&&b.setClearColor(16777215,.5),b.clear(),Gt&&$t.render(Y);let Jt=b.toneMapping;b.toneMapping=Ln;let jt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),c.setupLightsView(W),At===!0&&Ft.setGlobalState(b.clippingPlanes,W),Lo(I,Y,W),$.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let le=0,Ce=k.length;le<Ce;le++){let we=k[le],{object:pe,geometry:qe,material:St,group:an}=we;if(St.side===en&&pe.layers.test(W.layers)){let ne=St.side;St.side=Oe,St.needsUpdate=!0,Xu(pe,Y,W,qe,St,an),St.side=ne,St.needsUpdate=!0,Nt=!0}}Nt===!0&&($.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt))}b.setRenderTarget(xt,Rt,Lt),b.setClearColor(Mt,ut),jt!==void 0&&(W.viewport=jt),b.toneMapping=Jt}function Lo(I,k,Y){let W=k.isScene===!0?k.overrideMaterial:null;for(let q=0,yt=I.length;q<yt;q++){let Tt=I[q],{object:xt,geometry:Rt,group:Lt}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&W!==null&&(Jt=W),xt.layers.test(Y.layers)&&Xu(xt,k,Y,Rt,Jt,Lt)}}function Xu(I,k,Y,W,q,yt){I.onBeforeRender(b,k,Y,W,q,yt),I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(b,k,Y,W,I,yt),q.transparent===!0&&q.side===en&&q.forceSinglePass===!1?(q.side=Oe,q.needsUpdate=!0,b.renderBufferDirect(Y,k,W,q,I,yt),q.side=Mn,q.needsUpdate=!0,b.renderBufferDirect(Y,k,W,q,I,yt),q.side=en):b.renderBufferDirect(Y,k,W,q,I,yt),I.onAfterRender(b,k,Y,W,q,yt)}function No(I,k,Y){k.isScene!==!0&&(k=Xt);let W=H.get(I),q=c.state.lights,yt=c.state.shadowsArray,Tt=q.state.version,xt=ft.getParameters(I,q.state,yt,k,Y,c.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(xt),Lt=W.programs;W.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;let Jt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;W.envMap=ot.get(I.envMap||W.environment,Jt),W.envMapRotation=W.environment!==null&&I.envMap===null?k.environmentRotation:I.envMapRotation,Lt===void 0&&(I.addEventListener("dispose",kn),Lt=new Map,W.programs=Lt);let jt=Lt.get(Rt);if(jt!==void 0){if(W.currentProgram===jt&&W.lightsStateVersion===Tt)return Yu(I,xt),jt}else xt.uniforms=ft.getUniforms(I),E!==null&&I.isNodeMaterial&&E.build(I,Y,xt),I.onBeforeCompile(xt,b),jt=ft.acquireProgram(xt,Rt),Lt.set(Rt,jt),W.uniforms=xt.uniforms;let Nt=W.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Nt.clippingPlanes=Ft.uniform),Yu(I,xt),W.needsLights=ym(I),W.lightsStateVersion=Tt,W.needsLights&&(Nt.ambientLightColor.value=q.state.ambient,Nt.lightProbe.value=q.state.probe,Nt.directionalLights.value=q.state.directional,Nt.directionalLightShadows.value=q.state.directionalShadow,Nt.spotLights.value=q.state.spot,Nt.spotLightShadows.value=q.state.spotShadow,Nt.rectAreaLights.value=q.state.rectArea,Nt.ltc_1.value=q.state.rectAreaLTC1,Nt.ltc_2.value=q.state.rectAreaLTC2,Nt.pointLights.value=q.state.point,Nt.pointLightShadows.value=q.state.pointShadow,Nt.hemisphereLights.value=q.state.hemi,Nt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Nt.spotLightMatrix.value=q.state.spotLightMatrix,Nt.spotLightMap.value=q.state.spotLightMap,Nt.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=c.state.lightProbeGridArray.length>0,W.currentProgram=jt,W.uniformsList=null,jt}function qu(I){if(I.uniformsList===null){let k=I.currentProgram.getUniforms();I.uniformsList=qr.seqWithValue(k.seq,I.uniforms)}return I.uniformsList}function Yu(I,k){let Y=H.get(I);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function gm(I,k){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;l.setFromMatrixPosition(k.matrixWorld);for(let Y=0,W=I.length;Y<W;Y++){let q=I[Y];if(q.texture!==null&&q.boundingBox.containsPoint(l))return q}return null}function _m(I,k,Y,W,q){k.isScene!==!0&&(k=Xt),$.resetTextureUnits();let yt=k.fog,Tt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,xt=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:te.workingColorSpace,Rt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Lt=ot.get(W.envMap||Tt,Rt),Jt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,jt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Nt=!!Y.morphAttributes.position,le=!!Y.morphAttributes.normal,Ce=!!Y.morphAttributes.color,we=Ln;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(we=b.toneMapping);let pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qe=pe!==void 0?pe.length:0,St=H.get(W),an=c.state.lights;if(At===!0&&(wt===!0||I!==it)){let Me=I===it&&W.id===X;Ft.setState(W,I,Me)}let ne=!1;W.version===St.__version?(St.needsLights&&St.lightsStateVersion!==an.state.version||St.outputColorSpace!==xt||q.isBatchedMesh&&St.batching===!1||!q.isBatchedMesh&&St.batching===!0||q.isBatchedMesh&&St.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&St.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&St.instancing===!1||!q.isInstancedMesh&&St.instancing===!0||q.isSkinnedMesh&&St.skinning===!1||!q.isSkinnedMesh&&St.skinning===!0||q.isInstancedMesh&&St.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&St.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&St.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&St.instancingMorph===!1&&q.morphTexture!==null||St.envMap!==Lt||W.fog===!0&&St.fog!==yt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Ft.numPlanes||St.numIntersection!==Ft.numIntersection)||St.vertexAlphas!==Jt||St.vertexTangents!==jt||St.morphTargets!==Nt||St.morphNormals!==le||St.morphColors!==Ce||St.toneMapping!==we||St.morphTargetsCount!==qe||!!St.lightProbeGrid!=c.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,St.__version=W.version);let yn=St.currentProgram;ne===!0&&(yn=No(W,k,q),E&&W.isNodeMaterial&&E.onUpdateProgram(W,yn,St));let Gn=!1,fi=!1,fr=!1,me=yn.getUniforms(),Re=St.uniforms;if(C.useProgram(yn.program)&&(Gn=!0,fi=!0,fr=!0),W.id!==X&&(X=W.id,fi=!0),St.needsLights){let Me=gm(c.state.lightProbeGridArray,q);St.lightProbeGrid!==Me&&(St.lightProbeGrid=Me,fi=!0)}if(Gn||it!==I){C.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),me.setValue(O,"projectionMatrix",I.projectionMatrix),me.setValue(O,"viewMatrix",I.matrixWorldInverse);let pi=me.map.cameraPosition;pi!==void 0&&pi.setValue(O,de.setFromMatrixPosition(I.matrixWorld)),D.logarithmicDepthBuffer&&me.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&me.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),it!==I&&(it=I,fi=!0,fr=!0)}if(St.needsLights&&(an.state.directionalShadowMap.length>0&&me.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,$),an.state.spotShadowMap.length>0&&me.setValue(O,"spotShadowMap",an.state.spotShadowMap,$),an.state.pointShadowMap.length>0&&me.setValue(O,"pointShadowMap",an.state.pointShadowMap,$)),q.isSkinnedMesh){me.setOptional(O,q,"bindMatrix"),me.setOptional(O,q,"bindMatrixInverse");let Me=q.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),me.setValue(O,"boneTexture",Me.boneTexture,$))}q.isBatchedMesh&&(me.setOptional(O,q,"batchingTexture"),me.setValue(O,"batchingTexture",q._matricesTexture,$),me.setOptional(O,q,"batchingIdTexture"),me.setValue(O,"batchingIdTexture",q._indirectTexture,$),me.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&me.setValue(O,"batchingColorTexture",q._colorsTexture,$));let di=Y.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&V.update(q,Y,yn),(fi||St.receiveShadow!==q.receiveShadow)&&(St.receiveShadow=q.receiveShadow,me.setValue(O,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Re.envMapIntensity.value=k.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=iv()),fi){if(me.setValue(O,"toneMappingExposure",b.toneMappingExposure),St.needsLights&&xm(Re,fr),yt&&W.fog===!0&&Dt.refreshFogUniforms(Re,yt),Dt.refreshMaterialUniforms(Re,W,K,et,c.state.transmissionRenderTarget[I.id]),St.needsLights&&St.lightProbeGrid){let Me=St.lightProbeGrid;Re.probesSH.value=Me.texture,Re.probesMin.value.copy(Me.boundingBox.min),Re.probesMax.value.copy(Me.boundingBox.max),Re.probesResolution.value.copy(Me.resolution)}qr.upload(O,qu(St),Re,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qr.upload(O,qu(St),Re,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&me.setValue(O,"center",q.center),me.setValue(O,"modelViewMatrix",q.modelViewMatrix),me.setValue(O,"normalMatrix",q.normalMatrix),me.setValue(O,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){let Me=W.uniformsGroups;for(let pi=0,dr=Me.length;pi<dr;pi++){let Zu=Me[pi];rt.update(Zu,yn),rt.bind(Zu,yn)}}return yn}function xm(I,k){I.ambientLightColor.needsUpdate=k,I.lightProbe.needsUpdate=k,I.directionalLights.needsUpdate=k,I.directionalLightShadows.needsUpdate=k,I.pointLights.needsUpdate=k,I.pointLightShadows.needsUpdate=k,I.spotLights.needsUpdate=k,I.spotLightShadows.needsUpdate=k,I.rectAreaLights.needsUpdate=k,I.hemisphereLights.needsUpdate=k}function ym(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(I,k,Y){let W=H.get(I);W.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(I.texture).__webglTexture=k,H.get(I.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,k){let Y=H.get(I);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(I,k=0,Y=0){G=I,F=k,B=Y;let W=null,q=!1,yt=!1;if(I){let xt=H.get(I);if(xt.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(O.FRAMEBUFFER,xt.__webglFramebuffer),j.copy(I.viewport),nt.copy(I.scissor),_t=I.scissorTest,C.viewport(j),C.scissor(nt),C.setScissorTest(_t),X=-1;return}else if(xt.__webglFramebuffer===void 0)$.setupRenderTarget(I);else if(xt.__hasExternalTextures)$.rebindTextures(I,H.get(I.texture).__webglTexture,H.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Jt=I.depthTexture;if(xt.__boundDepthTexture!==Jt){if(Jt!==null&&H.has(Jt)&&(I.width!==Jt.image.width||I.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(I)}}let Rt=I.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(yt=!0);let Lt=H.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Lt[k])?W=Lt[k][Y]:W=Lt[k],q=!0):I.samples>0&&$.useMultisampledRTT(I)===!1?W=H.get(I).__webglMultisampledFramebuffer:Array.isArray(Lt)?W=Lt[Y]:W=Lt,j.copy(I.viewport),nt.copy(I.scissor),_t=I.scissorTest}else j.copy(at).multiplyScalar(K).floor(),nt.copy(Qt).multiplyScalar(K).floor(),_t=bt;if(Y!==0&&(W=R),C.bindFramebuffer(O.FRAMEBUFFER,W)&&C.drawBuffers(I,W),C.viewport(j),C.scissor(nt),C.setScissorTest(_t),q){let xt=H.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,xt.__webglTexture,Y)}else if(yt){let xt=k;for(let Rt=0;Rt<I.textures.length;Rt++){let Lt=H.get(I.textures[Rt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,Y,xt)}}else if(I!==null&&Y!==0){let xt=H.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,Y)}X=-1},this.readRenderTargetPixels=function(I,k,Y,W,q,yt,Tt,xt=0){if(!(I&&I.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=H.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){C.bindFramebuffer(O.FRAMEBUFFER,Rt);try{let Lt=I.textures[xt],Jt=Lt.format,jt=Lt.type;if(I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt),!D.textureFormatReadable(Jt)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(jt)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=I.width-W&&Y>=0&&Y<=I.height-q&&O.readPixels(k,Y,W,q,pt.convert(Jt),pt.convert(jt),yt)}finally{let Lt=G!==null?H.get(G).__webglFramebuffer:null;C.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(I,k,Y,W,q,yt,Tt,xt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=H.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(k>=0&&k<=I.width-W&&Y>=0&&Y<=I.height-q){C.bindFramebuffer(O.FRAMEBUFFER,Rt);let Lt=I.textures[xt],Jt=Lt.format,jt=Lt.type;if(I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt),!D.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Nt),O.bufferData(O.PIXEL_PACK_BUFFER,yt.byteLength,O.STREAM_READ),O.readPixels(k,Y,W,q,pt.convert(Jt),pt.convert(jt),0);let le=G!==null?H.get(G).__webglFramebuffer:null;C.bindFramebuffer(O.FRAMEBUFFER,le);let Ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qf(O,Ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Nt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,yt),O.deleteBuffer(Nt),O.deleteSync(Ce),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,k=null,Y=0){let W=Math.pow(2,-Y),q=Math.floor(I.image.width*W),yt=Math.floor(I.image.height*W),Tt=k!==null?k.x:0,xt=k!==null?k.y:0;$.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Tt,xt,q,yt),C.unbindTexture()},this.copyTextureToTexture=function(I,k,Y=null,W=null,q=0,yt=0){let Tt,xt,Rt,Lt,Jt,jt,Nt,le,Ce,we=I.isCompressedTexture?I.mipmaps[yt]:I.image;if(Y!==null)Tt=Y.max.x-Y.min.x,xt=Y.max.y-Y.min.y,Rt=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Jt=Y.min.y,jt=Y.isBox3?Y.min.z:0;else{let Re=Math.pow(2,-q);Tt=Math.floor(we.width*Re),xt=Math.floor(we.height*Re),I.isDataArrayTexture?Rt=we.depth:I.isData3DTexture?Rt=Math.floor(we.depth*Re):Rt=1,Lt=0,Jt=0,jt=0}W!==null?(Nt=W.x,le=W.y,Ce=W.z):(Nt=0,le=0,Ce=0);let pe=pt.convert(k.format),qe=pt.convert(k.type),St;k.isData3DTexture?($.setTexture3D(k,0),St=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?($.setTexture2DArray(k,0),St=O.TEXTURE_2D_ARRAY):($.setTexture2D(k,0),St=O.TEXTURE_2D),C.activeTexture(O.TEXTURE0),C.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let an=C.getParameter(O.UNPACK_ROW_LENGTH),ne=C.getParameter(O.UNPACK_IMAGE_HEIGHT),yn=C.getParameter(O.UNPACK_SKIP_PIXELS),Gn=C.getParameter(O.UNPACK_SKIP_ROWS),fi=C.getParameter(O.UNPACK_SKIP_IMAGES);C.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(O.UNPACK_SKIP_IMAGES,jt);let fr=I.isDataArrayTexture||I.isData3DTexture,me=k.isDataArrayTexture||k.isData3DTexture;if(I.isDepthTexture){let Re=H.get(I),di=H.get(k),Me=H.get(Re.__renderTarget),pi=H.get(di.__renderTarget);C.bindFramebuffer(O.READ_FRAMEBUFFER,Me.__webglFramebuffer),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let dr=0;dr<Rt;dr++)fr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(I).__webglTexture,q,jt+dr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(k).__webglTexture,yt,Ce+dr)),O.blitFramebuffer(Lt,Jt,Tt,xt,Nt,le,Tt,xt,O.DEPTH_BUFFER_BIT,O.NEAREST);C.bindFramebuffer(O.READ_FRAMEBUFFER,null),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||H.has(I)){let Re=H.get(I),di=H.get(k);C.bindFramebuffer(O.READ_FRAMEBUFFER,U),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let Me=0;Me<Rt;Me++)fr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,q,jt+Me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,q),me?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,di.__webglTexture,yt,Ce+Me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,di.__webglTexture,yt),q!==0?O.blitFramebuffer(Lt,Jt,Tt,xt,Nt,le,Tt,xt,O.COLOR_BUFFER_BIT,O.NEAREST):me?O.copyTexSubImage3D(St,yt,Nt,le,Ce+Me,Lt,Jt,Tt,xt):O.copyTexSubImage2D(St,yt,Nt,le,Lt,Jt,Tt,xt);C.bindFramebuffer(O.READ_FRAMEBUFFER,null),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else me?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(St,yt,Nt,le,Ce,Tt,xt,Rt,pe,qe,we.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(St,yt,Nt,le,Ce,Tt,xt,Rt,pe,we.data):O.texSubImage3D(St,yt,Nt,le,Ce,Tt,xt,Rt,pe,qe,we):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,yt,Nt,le,Tt,xt,pe,qe,we.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,yt,Nt,le,we.width,we.height,pe,we.data):O.texSubImage2D(O.TEXTURE_2D,yt,Nt,le,Tt,xt,pe,qe,we);C.pixelStorei(O.UNPACK_ROW_LENGTH,an),C.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne),C.pixelStorei(O.UNPACK_SKIP_PIXELS,yn),C.pixelStorei(O.UNPACK_SKIP_ROWS,Gn),C.pixelStorei(O.UNPACK_SKIP_IMAGES,fi),yt===0&&k.generateMipmaps&&O.generateMipmap(St),C.unbindTexture()},this.initRenderTarget=function(I){H.get(I).__webglFramebuffer===void 0&&$.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?$.setTextureCube(I,0):I.isData3DTexture?$.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?$.setTexture2DArray(I,0):$.setTexture2D(I,0),C.unbindTexture()},this.resetState=function(){F=0,B=0,G=null,C.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ld={type:"change"},qh={type:"start"},Ud={type:"end"},Dc=new Sn,Nd=new Ue,sv=Math.cos(70*wh.DEG2RAD),Ve=new L,rn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xh=1e-6,Lc=class extends Ks{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new hn,this._lastTargetPosition=new L,this._quat=new hn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vr,this._sphericalDelta=new Vr,this._scale=1,this._panOffset=new L,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new L,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=av.bind(this),this._onPointerDown=ov.bind(this),this._onPointerUp=cv.bind(this),this._onContextMenu=mv.bind(this),this._onMouseWheel=uv.bind(this),this._onKeyDown=fv.bind(this),this._onTouchStart=dv.bind(this),this._onTouchMove=pv.bind(this),this._onMouseDown=lv.bind(this),this._onMouseMove=hv.bind(this),this._interceptControlDown=gv.bind(this),this._interceptControlUp=_v.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ld),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ve.length();o=this._clampDistance(a*this._scale);let h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;let u=new L(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dc.origin.copy(this.object.position),Dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dc.direction))<sv?this.object.lookAt(this.target):(Nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dc.intersectPlane(Nd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xh||this._lastTargetPosition.distanceToSquared(this.target)>Xh?(this.dispatchEvent(Ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ve.copy(r).sub(this.target);let s=Ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ov(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function av(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ud),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case Ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case Ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(qh)}function hv(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function uv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(qh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ud))}function fv(i){this.enabled!==!1&&this._handleKeyDown(i)}function dv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(qh)}function pv(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function mv(i){this.enabled!==!1&&i.preventDefault()}function gv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _v(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nc=class extends ji{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Zn;t.deleteAttribute("uv");let e=new Qi({side:Oe}),n=new Qi,r=new Zs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new _e(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Os(t,n,6),a=new Xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let h=new _e(t,$r(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let u=new _e(t,$r(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let d=new _e(t,$r(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let m=new _e(t,$r(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let f=new _e(t,$r(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let g=new _e(t,$r(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function $r(i){return new Xs({color:0,emissive:16777215,emissiveIntensity:i})}var fo=new L;function wn(i,t,e,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),h=Math.PI/4;fo.copy(t),fo[n]=0,fo.normalize();let u=.5*o/(o+a),d=1-fo.angleTo(i)/h;return Math.sign(fo[e])===1?d*u:a/(o+a)+u+u*(1-d)}var Jr=class i extends Zn{constructor(t=1,e=1,n=1,r=2,s=.1){let o=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let h=new L,u=new L,d=new L(t,e,n).divideScalar(2).subScalar(s),m=this.attributes.position.array,f=this.attributes.normal.array,g=this.attributes.uv.array,M=m.length/6,T=new L,y=.5/o;for(let _=0,w=0;_<m.length;_+=3,w+=2)switch(h.fromArray(m,_),u.copy(h),u.x-=Math.sign(u.x)*y,u.y-=Math.sign(u.y)*y,u.z-=Math.sign(u.z)*y,u.normalize(),m[_+0]=d.x*Math.sign(h.x)+u.x*s,m[_+1]=d.y*Math.sign(h.y)+u.y*s,m[_+2]=d.z*Math.sign(h.z)+u.z*s,f[_+0]=u.x,f[_+1]=u.y,f[_+2]=u.z,Math.floor(_/M)){case 0:T.set(1,0,0),g[w+0]=wn(T,u,"z","y",s,n),g[w+1]=1-wn(T,u,"y","z",s,e);break;case 1:T.set(-1,0,0),g[w+0]=1-wn(T,u,"z","y",s,n),g[w+1]=1-wn(T,u,"y","z",s,e);break;case 2:T.set(0,1,0),g[w+0]=1-wn(T,u,"x","z",s,t),g[w+1]=wn(T,u,"z","x",s,n);break;case 3:T.set(0,-1,0),g[w+0]=1-wn(T,u,"x","z",s,t),g[w+1]=1-wn(T,u,"z","x",s,n);break;case 4:T.set(0,0,1),g[w+0]=1-wn(T,u,"x","y",s,t),g[w+1]=1-wn(T,u,"y","x",s,e);break;case 5:T.set(0,0,-1),g[w+0]=wn(T,u,"x","y",s,t),g[w+1]=1-wn(T,u,"y","x",s,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Kr=Math.pow(2,-24),po=Symbol("SKIP_GENERATION"),Uc={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[po]:!1};function xe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function mo(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Yh(i,t){t.set(i)}function Zh(i,t,e){let n,r;for(let s=0;s<3;s++){let o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function go(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function jr(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function ee(i,t){return t[i+15]===65535}function ce(i,t){return t[i+6]}function fe(i,t){return t[i+14]}function se(i){return i+8}function oe(i,t){let e=t[i+6];return i+e*8}function Qr(i,t){return t[i+7]}function Fc(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,u=-1/0,d=-1/0,m=1/0,f=1/0,g=1/0,M=-1/0,T=-1/0,y=-1/0,_=i.offset||0;for(let w=(t-_)*6,p=(t+e-_)*6;w<p;w+=6){let l=i[w+0],v=i[w+1],c=l-v,P=l+v;c<s&&(s=c),P>h&&(h=P),l<m&&(m=l),l>M&&(M=l);let x=i[w+2],S=i[w+3],b=x-S,A=x+S;b<o&&(o=b),A>u&&(u=A),x<f&&(f=x),x>T&&(T=x);let E=i[w+4],R=i[w+5],U=E-R,N=E+R;U<a&&(a=U),N>d&&(d=N),E<g&&(g=E),E>y&&(y=E)}n[0]=s,n[1]=o,n[2]=a,n[3]=h,n[4]=u,n[5]=d,r[0]=m,r[1]=f,r[2]=g,r[3]=M,r[4]=T,r[5]=y}var ci=32,vv=(i,t)=>i.candidate-t.candidate,Ui=new Array(ci).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Oc=new Float32Array(6);function Od(i,t,e,n,r,s){let o=-1,a=0;if(s===0)o=mo(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=mo(i),o!==-1&&(a=Mv(e,n,r,o));else if(s===2){let h=jr(i),u=1.25*r,d=e.offset||0,m=(n-d)*6,f=(n+r-d)*6;for(let g=0;g<3;g++){let M=t[g],_=(t[g+3]-M)/ci;if(r<ci/4){let w=[...Ui];w.length=r;let p=0;for(let v=m;v<f;v+=6,p++){let c=w[p];c.candidate=e[v+2*g],c.count=0;let{bounds:P,leftCacheBounds:x,rightCacheBounds:S}=c;for(let b=0;b<3;b++)S[b]=1/0,S[b+3]=-1/0,x[b]=1/0,x[b+3]=-1/0,P[b]=1/0,P[b+3]=-1/0;go(v,e,P)}w.sort(vv);let l=r;for(let v=0;v<l;v++){let c=w[v];for(;v+1<l&&w[v+1].candidate===c.candidate;)w.splice(v+1,1),l--}for(let v=m;v<f;v+=6){let c=e[v+2*g];for(let P=0;P<l;P++){let x=w[P];c>=x.candidate?go(v,e,x.rightCacheBounds):(go(v,e,x.leftCacheBounds),x.count++)}}for(let v=0;v<l;v++){let c=w[v],P=c.count,x=r-c.count,S=c.leftCacheBounds,b=c.rightCacheBounds,A=0;P!==0&&(A=jr(S)/h);let E=0;x!==0&&(E=jr(b)/h);let R=1+1.25*(A*P+E*x);R<u&&(o=g,u=R,a=c.candidate)}}else{for(let l=0;l<ci;l++){let v=Ui[l];v.count=0,v.candidate=M+_+l*_;let c=v.bounds;for(let P=0;P<3;P++)c[P]=1/0,c[P+3]=-1/0}for(let l=m;l<f;l+=6){let P=~~((e[l+2*g]-M)/_);P>=ci&&(P=ci-1);let x=Ui[P];x.count++,go(l,e,x.bounds)}let w=Ui[ci-1];Yh(w.bounds,w.rightCacheBounds);for(let l=ci-2;l>=0;l--){let v=Ui[l],c=Ui[l+1];Zh(v.bounds,c.rightCacheBounds,v.rightCacheBounds)}let p=0;for(let l=0;l<ci-1;l++){let v=Ui[l],c=v.count,P=v.bounds,S=Ui[l+1].rightCacheBounds;c!==0&&(p===0?Yh(P,Oc):Zh(P,Oc,Oc)),p+=c;let b=0,A=0;p!==0&&(b=jr(Oc)/h);let E=r-p;E!==0&&(A=jr(S)/h);let R=1+1.25*(b*p+A*E);R<u&&(o=g,u=R,a=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Mv(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}var ts=class{constructor(){this.boundingData=new Float32Array(6)}};function Bd(i,t,e,n,r,s){let o=n,a=n+r-1,h=s.pos,u=s.axis*2,d=e.offset||0;for(;;){for(;o<=a&&e[(o-d)*6+u]<h;)o++;for(;o<=a&&e[(a-d)*6+u]>=h;)a--;if(o<a){for(let m=0;m<t;m++){let f=i[o*t+m];i[o*t+m]=i[a*t+m],i[a*t+m]=f}for(let m=0;m<6;m++){let f=o-d,g=a-d,M=e[f*6+m];e[f*6+m]=e[g*6+m],e[g*6+m]=M}o++,a--}else return o}}var zd,Bc,$h,Vd,Sv=Math.pow(2,32);function zc(i){return"count"in i?1:1+zc(i.left)+zc(i.right)}function kd(i,t,e){return zd=new Float32Array(e),Bc=new Uint32Array(e),$h=new Uint16Array(e),Vd=new Uint8Array(e),Jh(i,t)}function Jh(i,t){let e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)zd[e+o]=s[o];if(r)return t.buffer?(Vd.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Bc[e+6]=t.offset,$h[n+14]=t.count,$h[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:h}=t,u=i+32,d=Jh(u,o),m=i/32,g=d/32-m;if(g>Sv)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Bc[e+6]=g,Bc[e+7]=h,Jh(d,a)}}function bv(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:h,_strictLeafSize:u=1/0,strategy:d,onProgress:m}=r,f=i.primitiveBuffer,g=i.primitiveBufferStride,M=new Float32Array(6),T=!1,y=new ts;return Fc(t,e,n,y.boundingData,M),w(y,e,n,M),y;function _(p){m&&m((p-s.offset)/s.count)}function w(p,l,v,c=null,P=0){!T&&P>=o&&(T=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let x=v>u;if(v<=h&&!x||P>=o)return _(l+v),p.offset=l,p.count=v,p;let S=Od(p.boundingData,c,t,l,v,d),b=S.axis===-1?-1:Bd(f,g,t,l,v,S);if(S.axis===-1||b===l||b===l+v){if(!x)return _(l+v),p.offset=l,p.count=v,p;S.axis=Math.max(0,mo(p.boundingData)),b=l+Math.max(1,Math.floor(v/2))}p.splitAxis=S.axis;let A=new ts,E=l,R=b-l;p.left=A,Fc(t,E,R,A.boundingData,M),w(A,E,R,M,P+1);let U=new ts,N=b,F=v-R;return p.right=U,Fc(t,N,F,U.boundingData,M),w(U,N,F,M,P+1),p}}function Gd(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(h=>{let u=bv(i,a,h.offset,h.count,t,o),d=zc(u),m=new e(32*d);return kd(0,u,m),m})}var Fi=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Kh=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},ie=new Kh;var Oi,ns,es=[],Vc=new Fi(()=>new Se);function Hd(i,t,e,n,r,s){Oi=Vc.getPrimitive(),ns=Vc.getPrimitive(),es.push(Oi,ns),ie.setBuffer(i._roots[t]);let o=jh(0,i.geometry,e,n,r,s);ie.clearBuffer(),Vc.releasePrimitive(Oi),Vc.releasePrimitive(ns),es.pop(),es.pop();let a=es.length;return a>0&&(ns=es[a-1],Oi=es[a-2]),o}function jh(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:h,uint32Array:u}=ie,d=i*2;if(ee(d,h)){let f=ce(i,u),g=fe(d,h);return xe(i,a,Oi),n(f,g,!1,o,s+i/8,Oi)}else{let b=function(E){let{uint16Array:R,uint32Array:U}=ie,N=E*2;for(;!ee(N,R);)E=se(E),N=E*2;return ce(E,U)},A=function(E){let{uint16Array:R,uint32Array:U}=ie,N=E*2;for(;!ee(N,R);)E=oe(E,U),N=E*2;return ce(E,U)+fe(N,R)},f=se(i),g=oe(i,u),M=f,T=g,y,_,w,p;if(r&&(w=Oi,p=ns,xe(M,a,w),xe(T,a,p),y=r(w),_=r(p),_<y)){M=g,T=f;let E=y;y=_,_=E,w=p}w||(w=Oi,xe(M,a,w));let l=ee(M*2,h),v=e(w,l,y,o+1,s+M/8),c;if(v===2){let E=b(M),U=A(M)-E;c=n(E,U,!0,o+1,s+M/8,w)}else c=v&&jh(M,t,e,n,r,s,o+1);if(c)return!0;p=ns,xe(T,a,p);let P=ee(T*2,h),x=e(p,P,_,o+1,s+T/8),S;if(x===2){let E=b(T),U=A(T)-E;S=n(E,U,!0,o+1,s+T/8,p)}else S=x&&jh(T,t,e,n,r,s,o+1);return!!S}}var _o=new ie.constructor,kc=new ie.constructor,Bi=new Fi(()=>new Se),is=new Se,rs=new Se,tu=new Se,eu=new Se,nu=!1;function Wd(i,t,e,n){if(nu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");nu=!0;let r=i._roots,s=t._roots,o,a=0,h=0,u=new kt().copy(e).invert();for(let d=0,m=r.length;d<m;d++){_o.setBuffer(r[d]),h=0;let f=Bi.getPrimitive();xe(0,_o.float32Array,f),f.applyMatrix4(u);for(let g=0,M=s.length;g<M&&(kc.setBuffer(s[g]),o=Un(0,0,e,u,n,a,h,0,0,f),kc.clearBuffer(),h+=s[g].byteLength/32,!o);g++);if(Bi.releasePrimitive(f),_o.clearBuffer(),a+=r[d].byteLength/32,o)break}return nu=!1,o}function Un(i,t,e,n,r,s=0,o=0,a=0,h=0,u=null,d=!1){let m,f;d?(m=kc,f=_o):(m=_o,f=kc);let g=m.float32Array,M=m.uint32Array,T=m.uint16Array,y=f.float32Array,_=f.uint32Array,w=f.uint16Array,p=i*2,l=t*2,v=ee(p,T),c=ee(l,w),P=!1;if(c&&v)d?P=r(ce(t,_),fe(t*2,w),ce(i,M),fe(i*2,T),h,o+t/8,a,s+i/8):P=r(ce(i,M),fe(i*2,T),ce(t,_),fe(t*2,w),a,s+i/8,h,o+t/8);else if(c){let x=Bi.getPrimitive();xe(t,y,x),x.applyMatrix4(e);let S=se(i),b=oe(i,M);xe(S,g,is),xe(b,g,rs);let A=x.intersectsBox(is),E=x.intersectsBox(rs);P=A&&Un(t,S,n,e,r,o,s,h,a+1,x,!d)||E&&Un(t,b,n,e,r,o,s,h,a+1,x,!d),Bi.releasePrimitive(x)}else{let x=se(t),S=oe(t,_);xe(x,y,tu),xe(S,y,eu);let b=u.intersectsBox(tu),A=u.intersectsBox(eu);if(b&&A)P=Un(i,x,e,n,r,s,o,a,h+1,u,d)||Un(i,S,e,n,r,s,o,a,h+1,u,d);else if(b)if(v)P=Un(i,x,e,n,r,s,o,a,h+1,u,d);else{let E=Bi.getPrimitive();E.copy(tu).applyMatrix4(e);let R=se(i),U=oe(i,M);xe(R,g,is),xe(U,g,rs);let N=E.intersectsBox(is),F=E.intersectsBox(rs);P=N&&Un(x,R,n,e,r,o,s,h,a+1,E,!d)||F&&Un(x,U,n,e,r,o,s,h,a+1,E,!d),Bi.releasePrimitive(E)}else if(A)if(v)P=Un(i,S,e,n,r,s,o,a,h+1,u,d);else{let E=Bi.getPrimitive();E.copy(eu).applyMatrix4(e);let R=se(i),U=oe(i,M);xe(R,g,is),xe(U,g,rs);let N=E.intersectsBox(is),F=E.intersectsBox(rs);P=N&&Un(S,R,n,e,r,o,s,h,a+1,E,!d)||F&&Un(S,U,n,e,r,o,s,h,a+1,E,!d),Bi.releasePrimitive(E)}}return P}var Gc=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!ee(o,e);)s=se(s),o=s*2;return ce(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!ee(o,e);)s=oe(s,t),o=s*2;return ce(s,t)+fe(o,e)};let r=(s,o,a)=>{let h=o*2,u=ee(h,e);if(!s(a,u,o)&&!u){let m=se(o),f=oe(o,t);r(s,m,a+1),r(s,f,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,h)=>{if(a){let u=h*2,d=t[h+6],m=e[u+14];return s(o,a,new Float32Array(i,h*4,6),d,m)}else{let u=Qr(h,t);return s(o,a,new Float32Array(i,h*4,6),u)}})}}};var Xd=new Se,ss=new Float32Array(6),Hc=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Uc,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Gd(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,u=-1/0,d=-1/0;for(let m=t,f=t+e;m<f;m++){this.writePrimitiveBounds(m,ss,0);let[g,M,T,y,_,w]=ss;g<s&&(s=g),y>h&&(h=y),M<o&&(o=M),_>u&&(u=_),T<a&&(a=T),w>d&&(d=w)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=h,n[r+4]=u,n[r+5]=d,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,ss,0);let[a,h,u,d,m,f]=ss,g=(a+d)/2,M=(h+m)/2,T=(u+f)/2,y=(d-a)/2,_=(m-h)/2,w=(f-u)/2,p=(s-r)*6;n[p+0]=g,n[p+1]=y+(Math.abs(g)+y)*Kr,n[p+2]=M,n[p+3]=_+(Math.abs(M)+_)*Kr,n[p+4]=T,n[p+5]=w+(Math.abs(T)+w)*Kr}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),h=s.byteLength/32;for(let u=0;u<h;u++){let d=8*u,m=2*d;ee(m,a)&&(o[d+6]+=t)}}}}traverse(t,e=0){Gc.setBVH(this,e),Gc.traverse(t),Gc.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),h=r.byteLength/32;for(let u=h-1;u>=0;u--){let d=u*8,m=d*2;if(ee(m,o)){let g=ce(d,s),M=fe(m,o);this.writePrimitiveRangeBounds(g,M,ss,0),a.set(ss,d)}else{let g=se(d),M=oe(d,s);for(let T=0;T<3;T++){let y=a[g+T],_=a[g+T+3],w=a[M+T],p=a[M+T+3];a[d+T]=y<w?y:w,a[d+T+3]=_>p?_:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{xe(0,new Float32Array(n),Xd),t.union(Xd)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let m=r;r=(f,g,M,T,y)=>m(f,g,M,T,y)?!0:a(f,g,this,s,M,T,o)}else r||(s?r=(m,f,g,M)=>a(m,f,this,s,g,M,o):r=(m,f,g)=>g);let h=!1,u=0,d=this._roots;for(let m=0,f=d.length;m<f;m++){let g=d[m];if(h=Hd(this,m,n,r,e,u),h)break;u+=g.byteLength/32}return h}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Wd(this,t,e,r)}};function qd(){return typeof SharedArrayBuffer<"u"}function iu(i){return i.index?i.index.count:i.attributes.position.count}function zi(i){return iu(i)/3}function wv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Yd(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=wv(e,n);i.setIndex(new Pe(r,1));for(let s=0;s<e;s++)r[s]=s}}function Ev(i,t,e){let n=iu(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),h=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(h)}}function Av(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function ru(i,t,e){let n=Ev(i,t,e),r=Av(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,h=iu(i)/e,u=[];for(let f of r){let{offset:g,count:M}=f,T=g,y=isFinite(M)?M:h-g,_=g+y;T<a&&_>o&&(u.push({pos:Math.max(o,T),isStart:!0}),u.push({pos:Math.min(a,_),isStart:!1}))}u.sort((f,g)=>f.pos!==g.pos?f.pos-g.pos:f.type==="end"?-1:1);let d=0,m=null;for(let f of u){let g=f.pos;d!==0&&g!==m&&s.push({offset:m,count:g-m}),d+=f.isStart?1:-1,m=g}return s}function Cv(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((u,d)=>u+d.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),h=0;for(let u=0;u<i.length;u++){let{offset:d,count:m}=i[u];for(let f=0;f<m;f++)a[h+f]=d+f;h+=m}return a}var Wc=class extends Hc{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!qd())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Uc,...e},e[po]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=ru(e,t.range,n),s=Cv(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Yd(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Se))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:ru(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var mn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let h=t[s][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],h=t.dot(a);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};mn.prototype.setFromBox=(function(){let i=new L;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let h=0;h<=1;h++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){i.x=r.x*h+s.x*(1-h),i.y=r.y*u+s.y*(1-u),i.z=r.z*d+s.z*(1-d);let m=e.dot(i);o=Math.min(m,o),a=Math.max(m,a)}this.min=o,this.max=a}})();var Rv=(function(){let i=new L,t=new L,e=new L;return function(r,s,o){let a=r.start,h=i,u=s.start,d=t;e.subVectors(a,u),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let m=e.dot(d),f=d.dot(h),g=d.dot(d),M=e.dot(h),y=h.dot(h)*g-f*f,_,w;y!==0?_=(m*f-M*g)/y:_=0,w=(m+_*f)/g,o.x=_,o.y=w}})(),xo=(function(){let i=new Et,t=new L,e=new L;return function(r,s,o,a){Rv(r,s,i);let h=i.x,u=i.y;if(h>=0&&h<=1&&u>=0&&u<=1){r.at(h,o),s.at(u,a);return}else if(h>=0&&h<=1){u<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){h<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let d;h<0?d=r.start:d=r.end;let m;u<0?m=s.start:m=s.end;let f=t,g=e;if(r.closestPointToPoint(m,!0,t),s.closestPointToPoint(d,!0,e),f.distanceToSquared(m)<=g.distanceToSquared(d)){o.copy(f),a.copy(m);return}else{o.copy(d),a.copy(g);return}}}})(),Zd=(function(){let i=new L,t=new L,e=new Ue,n=new he;return function(s,o){let{radius:a,center:h}=s,{a:u,b:d,c:m}=o;if(n.start=u,n.end=d,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a||(n.start=u,n.end=m,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a)||(n.start=d,n.end=m,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a))return!0;let T=o.getPlane(e);if(Math.abs(T.distanceToPoint(h))<=a){let _=T.projectPoint(h,t);if(o.containsPoint(_))return!0}return!1}})();var Pv=["x","y","z"],li=1e-15,$d=li*li;function En(i){return Math.abs(i)<li}var Ee=class extends ge{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new mn),this.points=[this.a,this.b,this.c],this.plane=new Ue,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new he,this.needsUpdate=!0}intersectsSphere(t){return Zd(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],h=o[0];this.getNormal(a),h.setFromPoints(a,r);let u=s[1],d=o[1];u.subVectors(t,e),d.setFromPoints(u,r);let m=s[2],f=o[2];m.subVectors(e,n),f.setFromPoints(m,r);let g=s[3],M=o[3];g.subVectors(n,t),M.setFromPoints(g,r);let T=u.length(),y=m.length(),_=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,T<li?y<li||_<li?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):y<li?_<li?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<li&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ee.prototype.closestPointToSegment=(function(){let i=new L,t=new L,e=new he;return function(r,s=null,o=null){let{start:a,end:h}=r,u=this.points,d,m=1/0;for(let f=0;f<3;f++){let g=(f+1)%3;e.start.copy(u[f]),e.end.copy(u[g]),xo(e,r,i,t),d=i.distanceToSquared(t),d<m&&(m=d,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),d=a.distanceToSquared(i),d<m&&(m=d,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(h,i),d=h.distanceToSquared(i),d<m&&(m=d,s&&s.copy(i),o&&o.copy(h)),Math.sqrt(m)}})();Ee.prototype.intersectsTriangle=(function(){let i=new Ee,t=new mn,e=new mn,n=new L,r=new L,s=new L,o=new L,a=new he,h=new he,u=new L,d=new Et,m=new Et;function f(p,l,v,c){let P=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?P.copy(p.plane.normal):P.copy(l.plane.normal);let x=p.satBounds,S=p.satAxes;for(let E=1;E<4;E++){let R=x[E],U=S[E];if(t.setFromPoints(U,l.points),R.isSeparated(t)||(o.copy(P).cross(U),t.setFromPoints(o,p.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}let b=l.satBounds,A=l.satAxes;for(let E=1;E<4;E++){let R=b[E],U=A[E];if(t.setFromPoints(U,p.points),R.isSeparated(t)||(o.crossVectors(P,U),t.setFromPoints(o,p.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}return v&&(c||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function g(p,l,v,c,P,x,S,b,A,E,R){let U=S/(S-b);E.x=c+(P-c)*U,R.start.subVectors(l,p).multiplyScalar(U).add(p),U=S/(S-A),E.y=c+(x-c)*U,R.end.subVectors(v,p).multiplyScalar(U).add(p)}function M(p,l,v,c,P,x,S,b,A,E,R){if(P>0)g(p.c,p.a,p.b,c,l,v,A,S,b,E,R);else if(x>0)g(p.b,p.a,p.c,v,l,c,b,S,A,E,R);else if(b*A>0||S!=0)g(p.a,p.b,p.c,l,v,c,S,b,A,E,R);else if(b!=0)g(p.b,p.a,p.c,v,l,c,b,S,A,E,R);else if(A!=0)g(p.c,p.a,p.b,c,l,v,A,S,b,E,R);else return!0;return!1}function T(p,l,v,c){let P=l.degenerateSegment,x=p.plane.distanceToPoint(P.start),S=p.plane.distanceToPoint(P.end);return En(x)?En(S)?f(p,l,v,c):(v&&(v.start.copy(P.start),v.end.copy(P.start)),p.containsPoint(P.start)):En(S)?(v&&(v.start.copy(P.end),v.end.copy(P.end)),p.containsPoint(P.end)):p.plane.intersectLine(P,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),p.containsPoint(n)):!1}function y(p,l,v){let c=l.a;return En(p.plane.distanceToPoint(c))&&p.containsPoint(c)?(v&&(v.start.copy(c),v.end.copy(c)),!0):!1}function _(p,l,v){let c=p.degenerateSegment,P=l.a;return c.closestPointToPoint(P,!0,n),P.distanceToSquared(n)<$d?(v&&(v.start.copy(P),v.end.copy(P)),!0):!1}function w(p,l,v,c){if(p.isDegenerateIntoSegment)if(l.isDegenerateIntoSegment){let P=p.degenerateSegment,x=l.degenerateSegment,S=r,b=s;P.delta(S),x.delta(b);let A=n.subVectors(x.start,P.start),E=S.x*b.y-S.y*b.x;if(En(E))return!1;let R=(A.x*b.y-A.y*b.x)/E,U=-(S.x*A.y-S.y*A.x)/E;if(R<0||R>1||U<0||U>1)return!1;let N=P.start.z+S.z*R,F=x.start.z+b.z*U;return En(N-F)?(v&&(v.start.copy(P.start).addScaledVector(S,R),v.end.copy(P.start).addScaledVector(S,R)),!0):!1}else return l.isDegenerateIntoPoint?_(p,l,v):T(l,p,v,c);else{if(p.isDegenerateIntoPoint)return l.isDegenerateIntoPoint?l.a.distanceToSquared(p.a)<$d?(v&&(v.start.copy(p.a),v.end.copy(p.a)),!0):!1:l.isDegenerateIntoSegment?_(l,p,v):y(l,p,v);if(l.isDegenerateIntoPoint)return y(p,l,v);if(l.isDegenerateIntoSegment)return T(p,l,v,c)}}return function(l,v=null,c=!1){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(i.copy(l),i.update(),l=i);let P=w(this,l,v,c);if(P!==void 0)return P;let x=this.plane,S=l.plane,b=S.distanceToPoint(this.a),A=S.distanceToPoint(this.b),E=S.distanceToPoint(this.c);En(b)&&(b=0),En(A)&&(A=0),En(E)&&(E=0);let R=b*A,U=b*E;if(R>0&&U>0)return!1;let N=x.distanceToPoint(l.a),F=x.distanceToPoint(l.b),B=x.distanceToPoint(l.c);En(N)&&(N=0),En(F)&&(F=0),En(B)&&(B=0);let G=N*F,X=N*B;if(G>0&&X>0)return!1;r.copy(x.normal),s.copy(S.normal);let it=r.cross(s),j=0,nt=Math.abs(it.x),_t=Math.abs(it.y);_t>nt&&(nt=_t,j=1),Math.abs(it.z)>nt&&(j=2);let ut=Pv[j],Z=this.a[ut],et=this.b[ut],K=this.c[ut],st=l.a[ut],lt=l.b[ut],at=l.c[ut];if(M(this,Z,et,K,R,U,b,A,E,d,a))return f(this,l,v,c);if(M(l,st,lt,at,G,X,N,F,B,m,h))return f(this,l,v,c);if(d.y<d.x){let Qt=d.y;d.y=d.x,d.x=Qt,u.copy(a.start),a.start.copy(a.end),a.end.copy(u)}if(m.y<m.x){let Qt=m.y;m.y=m.x,m.x=Qt,u.copy(h.start),h.start.copy(h.end),h.end.copy(u)}return d.y<m.x||m.y<d.x?!1:(v&&(m.x>d.x?v.start.copy(h.start):v.start.copy(a.start),m.y<d.y?v.end.copy(h.end):v.end.copy(a.end)),!0)}})();Ee.prototype.distanceToPoint=(function(){let i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ee.prototype.distanceToTriangle=(function(){let i=new L,t=new L,e=["a","b","c"],n=new he,r=new he;return function(o,a=null,h=null){let u=a||h?n:null;if(this.intersectsTriangle(o,u,!0))return(a||h)&&(a&&u.getCenter(a),h&&u.getCenter(h)),0;let d=1/0;for(let m=0;m<3;m++){let f,g=e[m],M=o[g];this.closestPointToPoint(M,i),f=M.distanceToSquared(i),f<d&&(d=f,a&&a.copy(i),h&&h.copy(M));let T=this[g];o.closestPointToPoint(T,i),f=T.distanceToSquared(i),f<d&&(d=f,a&&a.copy(T),h&&h.copy(i))}for(let m=0;m<3;m++){let f=e[m],g=e[(m+1)%3];n.set(this[f],this[g]);for(let M=0;M<3;M++){let T=e[M],y=e[(M+1)%3];r.set(o[T],o[y]),xo(n,r,i,t);let _=i.distanceToSquared(t);_<d&&(d=_,a&&a.copy(i),h&&h.copy(t))}}return Math.sqrt(d)}})();var Ae=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new kt,this.invMatrix=new kt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new mn),this.alignedSatBounds=new Array(3).fill().map(()=>new mn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ae.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let m=0;m<=1;m++){let f=1*u|2*d|4*m,g=r[f];g.x=u?n.x:e.x,g.y=d?n.y:e.y,g.z=m?n.z:e.z,g.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let u=0;u<3;u++){let d=o[u],m=s[u],f=1<<u,g=r[f];d.subVectors(a,g),m.setFromPoints(d,r)}let h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ae.prototype.intersectsBox=(function(){let i=new mn;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){let u=o[h],d=s[h];if(i.setFromBox(u,e),d.isSeparated(i))return!1}return!0}})();Ae.prototype.intersectsTriangle=(function(){let i=new Ee,t=new Array(3),e=new mn,n=new mn,r=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,h=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let g=a[f],M=h[f];if(e.setFromPoints(M,t),g.isSeparated(e))return!1}let u=o.satBounds,d=o.satAxes,m=this.points;for(let f=0;f<3;f++){let g=u[f],M=d[f];if(e.setFromPoints(M,m),g.isSeparated(e))return!1}for(let f=0;f<3;f++){let g=h[f];for(let M=0;M<4;M++){let T=d[M];if(r.crossVectors(g,T),e.setFromPoints(r,t),n.setFromPoints(r,m),e.isSeparated(n))return!1}}return!0}})();Ae.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ae.prototype.distanceToPoint=(function(){let i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ae.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new he),e=new Array(12).fill().map(()=>new he),n=new L,r=new L;return function(o,a=0,h=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(h||u)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),h&&h.copy(n),u&&u.copy(r)),0;let d=a*a,m=o.min,f=o.max,g=this.points,M=1/0;for(let y=0;y<8;y++){let _=g[y];r.copy(_).clamp(m,f);let w=_.distanceToSquared(r);if(w<M&&(M=w,h&&h.copy(_),u&&u.copy(r),w<d))return Math.sqrt(w)}let T=0;for(let y=0;y<3;y++)for(let _=0;_<=1;_++)for(let w=0;w<=1;w++){let p=(y+1)%3,l=(y+2)%3,v=_<<p|w<<l,c=1<<y|_<<p|w<<l,P=g[v],x=g[c];t[T].set(P,x);let b=i[y],A=i[p],E=i[l],R=e[T],U=R.start,N=R.end;U[b]=m[b],U[A]=_?m[A]:f[A],U[E]=w?m[E]:f[A],N[b]=f[b],N[A]=_?m[A]:f[A],N[E]=w?m[E]:f[A],T++}for(let y=0;y<=1;y++)for(let _=0;_<=1;_++)for(let w=0;w<=1;w++){r.x=y?f.x:m.x,r.y=_?f.y:m.y,r.z=w?f.z:m.z,this.closestPointToPoint(r,n);let p=r.distanceToSquared(n);if(p<M&&(M=p,h&&h.copy(n),u&&u.copy(r),p<d))return Math.sqrt(p)}for(let y=0;y<12;y++){let _=t[y];for(let w=0;w<12;w++){let p=e[w];xo(_,p,n,r);let l=n.distanceToSquared(r);if(l<M&&(M=l,h&&h.copy(n),u&&u.copy(r),l<d))return Math.sqrt(l)}}return Math.sqrt(M)}})();var su=class extends Fi{constructor(){super(()=>new Ee)}},tn=new su;var yo=new L,ou=new L;function Jd(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,h=null;if(i.shapecast({boundsTraverseOrder:d=>(yo.copy(t).clamp(d.min,d.max),yo.distanceToSquared(t)),intersectsBounds:(d,m,f)=>f<a&&f<o,intersectsTriangle:(d,m)=>{d.closestPointToPoint(t,yo);let f=t.distanceToSquared(yo);return f<a&&(ou.copy(yo),a=f,h=m),f<s}}),a===1/0)return null;let u=Math.sqrt(a);return e.point?e.point.copy(ou):e.point=ou.clone(),e.distance=u,e.faceIndex=h,e}var Xc=parseInt("185")>=169,Iv=parseInt("185")<=161,ir=new L,rr=new L,sr=new L,qc=new Et,Yc=new Et,Zc=new Et,Kd=new L,jd=new L,Qd=new L,vo=new L;function Dv(i,t,e,n,r,s,o,a){let h;if(s===Oe?h=i.intersectTriangle(n,e,t,!0,r):h=i.intersectTriangle(t,e,n,s!==en,r),h===null)return null;let u=i.origin.distanceTo(r);return u<o||u>a?null:{distance:u,point:r.clone()}}function tp(i,t,e,n,r,s,o,a,h,u,d){ir.fromBufferAttribute(t,s),rr.fromBufferAttribute(t,o),sr.fromBufferAttribute(t,a);let m=Dv(i,ir,rr,sr,vo,h,u,d);if(m){if(n){qc.fromBufferAttribute(n,s),Yc.fromBufferAttribute(n,o),Zc.fromBufferAttribute(n,a),m.uv=new Et;let g=ge.getInterpolation(vo,ir,rr,sr,qc,Yc,Zc,m.uv);Xc||(m.uv=g)}if(r){qc.fromBufferAttribute(r,s),Yc.fromBufferAttribute(r,o),Zc.fromBufferAttribute(r,a),m.uv1=new Et;let g=ge.getInterpolation(vo,ir,rr,sr,qc,Yc,Zc,m.uv1);Xc||(m.uv1=g),Iv&&(m.uv2=m.uv1)}if(e){Kd.fromBufferAttribute(e,s),jd.fromBufferAttribute(e,o),Qd.fromBufferAttribute(e,a),m.normal=new L;let g=ge.getInterpolation(vo,ir,rr,sr,Kd,jd,Qd,m.normal);m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1),Xc||(m.normal=g)}let f={a:s,b:o,c:a,normal:new L,materialIndex:0};if(ge.getNormal(ir,rr,sr,f.normal),m.face=f,m.faceIndex=s,Xc){let g=new L;ge.getBarycoord(vo,ir,rr,sr,g),m.barycoord=g}}return m}function ep(i){return i&&i.isMaterial?i.side:i}function os(i,t,e,n,r,s,o){let a=n*3,h=a+0,u=a+1,d=a+2,{index:m,groups:f}=i;i.index&&(h=m.getX(h),u=m.getX(u),d=m.getX(d));let{position:g,normal:M,uv:T,uv1:y}=i.attributes;if(Array.isArray(t)){let _=n*3;for(let w=0,p=f.length;w<p;w++){let{start:l,count:v,materialIndex:c}=f[w];if(_>=l&&_<l+v){let P=ep(t[c]),x=tp(e,g,M,T,y,h,u,d,P,s,o);if(x)if(x.faceIndex=n,x.face.materialIndex=c,r)r.push(x);else return x}}}else{let _=ep(t),w=tp(e,g,M,T,y,h,u,d,_,s,o);if(w)if(w.faceIndex=n,w.face.materialIndex=0,r)r.push(w);else return w}return null}function ye(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,h=t+1,u=t+2;e&&(a=e.getX(a),h=e.getX(h),u=e.getX(u)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(h),s.y=n.getY(h),s.z=n.getZ(h),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function np(i,t,e,n,r,s,o,a){let{geometry:h,_indirectBuffer:u}=i;for(let d=n,m=n+r;d<m;d++)os(h,t,e,d,s,o,a)}function ip(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:h}=i,u=1/0,d=null;for(let m=n,f=n+r;m<f;m++){let g;g=os(a,t,e,m,null,s,o),g&&g.distance<u&&(d=g,u=g.distance)}return d}function rp(i,t,e,n,r,s,o){let{geometry:a}=e,{index:h}=a,u=a.attributes.position;for(let d=i,m=t+i;d<m;d++){let f;if(f=d,ye(o,f*3,h,u),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function sp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,h,u=0,d=i._roots;for(let f=0,g=d.length;f<g;f++)s=d[f],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),m(0,u),u+=s.byteLength;function m(f,g,M=!1){let T=f*2;if(ee(T,a)){let y=ce(f,o),_=fe(T,a),w=1/0,p=1/0,l=1/0,v=-1/0,c=-1/0,P=-1/0;for(let x=3*y,S=3*(y+_);x<S;x++){let b=n[x],A=r.getX(b),E=r.getY(b),R=r.getZ(b);A<w&&(w=A),A>v&&(v=A),E<p&&(p=E),E>c&&(c=E),R<l&&(l=R),R>P&&(P=R)}return h[f+0]!==w||h[f+1]!==p||h[f+2]!==l||h[f+3]!==v||h[f+4]!==c||h[f+5]!==P?(h[f+0]=w,h[f+1]=p,h[f+2]=l,h[f+3]=v,h[f+4]=c,h[f+5]=P,!0):!1}else{let y=se(f),_=oe(f,o),w=M,p=!1,l=!1;if(t){if(!w){let b=y/8+g/32,A=_/8+g/32;p=t.has(b),l=t.has(A),w=!p&&!l}}else p=!0,l=!0;let v=w||p,c=w||l,P=!1;v&&(P=m(y,g,w));let x=!1;c&&(x=m(_,g,w));let S=P||x;if(S)for(let b=0;b<3;b++){let A=y+b,E=_+b,R=h[A],U=h[A+3],N=h[E],F=h[E+3];h[f+b]=R<N?R:N,h[f+b+3]=U>F?U:F}return S}}}function An(i,t,e,n,r){let s,o,a,h,u,d,m=1/e.direction.x,f=1/e.direction.y,g=1/e.direction.z,M=e.origin.x,T=e.origin.y,y=e.origin.z,_=t[i],w=t[i+3],p=t[i+1],l=t[i+3+1],v=t[i+2],c=t[i+3+2];return m>=0?(s=(_-M)*m,o=(w-M)*m):(s=(w-M)*m,o=(_-M)*m),f>=0?(a=(p-T)*f,h=(l-T)*f):(a=(l-T)*f,h=(p-T)*f),s>h||a>o||((a>s||isNaN(s))&&(s=a),(h<o||isNaN(o))&&(o=h),g>=0?(u=(v-y)*g,d=(c-y)*g):(u=(c-y)*g,d=(v-y)*g),s>d||u>o)?!1:((u>s||s!==s)&&(s=u),(d<o||o!==o)&&(o=d),s<=r&&o>=n)}function op(i,t,e,n,r,s,o,a){let{geometry:h,_indirectBuffer:u}=i;for(let d=n,m=n+r;d<m;d++){let f=u?u[d]:d;os(h,t,e,f,s,o,a)}}function ap(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:h}=i,u=1/0,d=null;for(let m=n,f=n+r;m<f;m++){let g;g=os(a,t,e,h?h[m]:m,null,s,o),g&&g.distance<u&&(d=g,u=g.distance)}return d}function cp(i,t,e,n,r,s,o){let{geometry:a}=e,{index:h}=a,u=a.attributes.position;for(let d=i,m=t+i;d<m;d++){let f;if(f=e.resolveTriangleIndex(d),ye(o,f*3,h,u),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function lp(i,t,e,n,r,s,o){ie.setBuffer(i._roots[t]),au(0,i,e,n,r,s,o),ie.clearBuffer()}function au(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:h,uint32Array:u}=ie,d=i*2;if(ee(d,h)){let f=ce(i,u),g=fe(d,h);np(t,e,n,f,g,r,s,o)}else{let f=se(i);An(f,a,n,s,o)&&au(f,t,e,n,r,s,o);let g=oe(i,u);An(g,a,n,s,o)&&au(g,t,e,n,r,s,o)}}var Lv=["x","y","z"];function hp(i,t,e,n,r,s){ie.setBuffer(i._roots[t]);let o=cu(0,i,e,n,r,s);return ie.clearBuffer(),o}function cu(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:h}=ie,u=i*2;if(ee(u,a)){let m=ce(i,h),f=fe(u,a);return ip(t,e,n,m,f,r,s)}else{let m=Qr(i,h),f=Lv[m],M=n.direction[f]>=0,T,y;M?(T=se(i),y=oe(i,h)):(T=oe(i,h),y=se(i));let w=An(T,o,n,r,s)?cu(T,t,e,n,r,s):null;if(w){let v=w.point[f];if(M?v<=o[y+m]:v>=o[y+m+3])return w}let l=An(y,o,n,r,s)?cu(y,t,e,n,r,s):null;return w&&l?w.distance<=l.distance?w:l:w||l||null}}var $c=new Se,as=new Ee,cs=new Ee,Mo=new kt,up=new Ae,Jc=new Ae;function fp(i,t,e,n){ie.setBuffer(i._roots[t]);let r=lu(0,i,e,n);return ie.clearBuffer(),r}function lu(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=ie,h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),up.set(e.boundingBox.min,e.boundingBox.max,n),r=up),ee(h,o)){let d=t.geometry,m=d.index,f=d.attributes.position,g=e.index,M=e.attributes.position,T=ce(i,a),y=fe(h,o);if(Mo.copy(n).invert(),e.boundsTree)return xe(i,s,Jc),Jc.matrix.copy(Mo),Jc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Jc.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let p=T*3,l=(y+T)*3;p<l;p+=3)if(ye(cs,p,m,f),cs.needsUpdate=!0,w.intersectsTriangle(cs))return!0;return!1}});{let _=zi(e);for(let w=T*3,p=(y+T)*3;w<p;w+=3){ye(as,w,m,f),as.a.applyMatrix4(Mo),as.b.applyMatrix4(Mo),as.c.applyMatrix4(Mo),as.needsUpdate=!0;for(let l=0,v=_*3;l<v;l+=3)if(ye(cs,l,g,M),cs.needsUpdate=!0,as.intersectsTriangle(cs))return!0}}}else{let d=se(i),m=oe(i,a);return xe(d,s,$c),!!(r.intersectsBox($c)&&lu(d,t,e,n,r)||(xe(m,s,$c),r.intersectsBox($c)&&lu(m,t,e,n,r)))}}var Kc=new kt,hu=new Ae,So=new Ae,Nv=new L,Uv=new L,Fv=new L,Ov=new L;function dp(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),hu.set(t.boundingBox.min,t.boundingBox.max,e),hu.needsUpdate=!0;let a=i.geometry,h=a.attributes.position,u=a.index,d=t.attributes.position,m=t.index,f=tn.getPrimitive(),g=tn.getPrimitive(),M=Nv,T=Uv,y=null,_=null;r&&(y=Fv,_=Ov);let w=1/0,p=null,l=null;return Kc.copy(e).invert(),So.matrix.copy(Kc),i.shapecast({boundsTraverseOrder:v=>hu.distanceToBox(v),intersectsBounds:(v,c,P)=>P<w&&P<o?(c&&(So.min.copy(v.min),So.max.copy(v.max),So.needsUpdate=!0),!0):!1,intersectsRange:(v,c)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:x=>So.distanceToBox(x),intersectsBounds:(x,S,b)=>b<w&&b<o,intersectsRange:(x,S)=>{for(let b=x,A=x+S;b<A;b++){ye(g,3*b,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=v,R=v+c;E<R;E++){ye(f,3*E,u,h),f.needsUpdate=!0;let U=f.distanceToTriangle(g,M,y);if(U<w&&(T.copy(M),_&&_.copy(y),w=U,p=E,l=b),U<s)return!0}}}});{let P=zi(t);for(let x=0,S=P;x<S;x++){ye(g,3*x,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let b=v,A=v+c;b<A;b++){ye(f,3*b,u,h),f.needsUpdate=!0;let E=f.distanceToTriangle(g,M,y);if(E<w&&(T.copy(M),_&&_.copy(y),w=E,p=b,l=x),E<s)return!0}}}}}),tn.releasePrimitive(f),tn.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=w,n.faceIndex=p,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(Kc),T.applyMatrix4(Kc),r.distance=T.sub(r.point).length(),r.faceIndex=l),n)}function pp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,h,u=0,d=i._roots;for(let f=0,g=d.length;f<g;f++)s=d[f],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),m(0,u),u+=s.byteLength;function m(f,g,M=!1){let T=f*2;if(ee(T,a)){let y=ce(f,o),_=fe(T,a),w=1/0,p=1/0,l=1/0,v=-1/0,c=-1/0,P=-1/0;for(let x=y,S=y+_;x<S;x++){let b=3*i.resolveTriangleIndex(x);for(let A=0;A<3;A++){let E=b+A;E=n?n[E]:E;let R=r.getX(E),U=r.getY(E),N=r.getZ(E);R<w&&(w=R),R>v&&(v=R),U<p&&(p=U),U>c&&(c=U),N<l&&(l=N),N>P&&(P=N)}}return h[f+0]!==w||h[f+1]!==p||h[f+2]!==l||h[f+3]!==v||h[f+4]!==c||h[f+5]!==P?(h[f+0]=w,h[f+1]=p,h[f+2]=l,h[f+3]=v,h[f+4]=c,h[f+5]=P,!0):!1}else{let y=se(f),_=oe(f,o),w=M,p=!1,l=!1;if(t){if(!w){let b=y/8+g/32,A=_/8+g/32;p=t.has(b),l=t.has(A),w=!p&&!l}}else p=!0,l=!0;let v=w||p,c=w||l,P=!1;v&&(P=m(y,g,w));let x=!1;c&&(x=m(_,g,w));let S=P||x;if(S)for(let b=0;b<3;b++){let A=y+b,E=_+b,R=h[A],U=h[A+3],N=h[E],F=h[E+3];h[f+b]=R<N?R:N,h[f+b+3]=U>F?U:F}return S}}}function mp(i,t,e,n,r,s,o){ie.setBuffer(i._roots[t]),uu(0,i,e,n,r,s,o),ie.clearBuffer()}function uu(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:h,uint32Array:u}=ie,d=i*2;if(ee(d,h)){let f=ce(i,u),g=fe(d,h);op(t,e,n,f,g,r,s,o)}else{let f=se(i);An(f,a,n,s,o)&&uu(f,t,e,n,r,s,o);let g=oe(i,u);An(g,a,n,s,o)&&uu(g,t,e,n,r,s,o)}}var Bv=["x","y","z"];function gp(i,t,e,n,r,s){ie.setBuffer(i._roots[t]);let o=fu(0,i,e,n,r,s);return ie.clearBuffer(),o}function fu(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:h}=ie,u=i*2;if(ee(u,a)){let m=ce(i,h),f=fe(u,a);return ap(t,e,n,m,f,r,s)}else{let m=Qr(i,h),f=Bv[m],M=n.direction[f]>=0,T,y;M?(T=se(i),y=oe(i,h)):(T=oe(i,h),y=se(i));let w=An(T,o,n,r,s)?fu(T,t,e,n,r,s):null;if(w){let v=w.point[f];if(M?v<=o[y+m]:v>=o[y+m+3])return w}let l=An(y,o,n,r,s)?fu(y,t,e,n,r,s):null;return w&&l?w.distance<=l.distance?w:l:w||l||null}}var jc=new Se,ls=new Ee,hs=new Ee,bo=new kt,_p=new Ae,Qc=new Ae;function xp(i,t,e,n){ie.setBuffer(i._roots[t]);let r=du(0,i,e,n);return ie.clearBuffer(),r}function du(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=ie,h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),_p.set(e.boundingBox.min,e.boundingBox.max,n),r=_p),ee(h,o)){let d=t.geometry,m=d.index,f=d.attributes.position,g=e.index,M=e.attributes.position,T=ce(i,a),y=fe(h,o);if(bo.copy(n).invert(),e.boundsTree)return xe(i,s,Qc),Qc.matrix.copy(bo),Qc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Qc.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let p=T,l=y+T;p<l;p++)if(ye(hs,3*t.resolveTriangleIndex(p),m,f),hs.needsUpdate=!0,w.intersectsTriangle(hs))return!0;return!1}});{let _=zi(e);for(let w=T,p=y+T;w<p;w++){let l=t.resolveTriangleIndex(w);ye(ls,3*l,m,f),ls.a.applyMatrix4(bo),ls.b.applyMatrix4(bo),ls.c.applyMatrix4(bo),ls.needsUpdate=!0;for(let v=0,c=_*3;v<c;v+=3)if(ye(hs,v,g,M),hs.needsUpdate=!0,ls.intersectsTriangle(hs))return!0}}}else{let d=se(i),m=oe(i,a);return xe(d,s,jc),!!(r.intersectsBox(jc)&&du(d,t,e,n,r)||(xe(m,s,jc),r.intersectsBox(jc)&&du(m,t,e,n,r)))}}var tl=new kt,pu=new Ae,To=new Ae,zv=new L,Vv=new L,kv=new L,Gv=new L;function yp(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),pu.set(t.boundingBox.min,t.boundingBox.max,e),pu.needsUpdate=!0;let a=i.geometry,h=a.attributes.position,u=a.index,d=t.attributes.position,m=t.index,f=tn.getPrimitive(),g=tn.getPrimitive(),M=zv,T=Vv,y=null,_=null;r&&(y=kv,_=Gv);let w=1/0,p=null,l=null;return tl.copy(e).invert(),To.matrix.copy(tl),i.shapecast({boundsTraverseOrder:v=>pu.distanceToBox(v),intersectsBounds:(v,c,P)=>P<w&&P<o?(c&&(To.min.copy(v.min),To.max.copy(v.max),To.needsUpdate=!0),!0):!1,intersectsRange:(v,c)=>{if(t.boundsTree){let P=t.boundsTree;return P.shapecast({boundsTraverseOrder:x=>To.distanceToBox(x),intersectsBounds:(x,S,b)=>b<w&&b<o,intersectsRange:(x,S)=>{for(let b=x,A=x+S;b<A;b++){let E=P.resolveTriangleIndex(b);ye(g,3*E,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let R=v,U=v+c;R<U;R++){let N=i.resolveTriangleIndex(R);ye(f,3*N,u,h),f.needsUpdate=!0;let F=f.distanceToTriangle(g,M,y);if(F<w&&(T.copy(M),_&&_.copy(y),w=F,p=R,l=b),F<s)return!0}}}})}else{let P=zi(t);for(let x=0,S=P;x<S;x++){ye(g,3*x,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let b=v,A=v+c;b<A;b++){let E=i.resolveTriangleIndex(b);ye(f,3*E,u,h),f.needsUpdate=!0;let R=f.distanceToTriangle(g,M,y);if(R<w&&(T.copy(M),_&&_.copy(y),w=R,p=b,l=x),R<s)return!0}}}}}),tn.releasePrimitive(f),tn.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=w,n.faceIndex=p,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(tl),T.applyMatrix4(tl),r.distance=T.sub(r.point).length(),r.faceIndex=l),n)}function mu(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var el=new Ae,nl=new Sn,vp=new L,Mp=new kt,Sp=new L,gu=["getX","getY","getZ"],il=class i extends Wc{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(h=>h.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),h(s));let a=new i(e,{...n,[po]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let u=e.getIndex();if(u===null){let d=new Pe(t.index,1,!1);e.setIndex(d)}else u.array!==r&&(u.array.set(r),u.needsUpdate=!0)}return a;function h(u){for(let d=0;d<u.length;d++){let m=u[d],f=new Uint32Array(m),g=new Uint16Array(m);for(let M=0,T=m.byteLength/32;M<T;M++){let y=8*M,_=2*y;ee(_,g)||(f[y+6]=f[y+6]/8-M)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=(s?s[t]:t)*3,d=u+0,m=u+1,f=u+2;a&&(d=a[d],m=a[m],f=a[f]);for(let g=0;g<3;g++){let M=o[gu[g]](d),T=o[gu[g]](m),y=o[gu[g]](f),_=M;T<_&&(_=T),y<_&&(_=y);let w=M;T>w&&(w=T),y>w&&(w=y),e[n+g]=_,e[n+g+3]=w}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let u=o.array,d=o.offset||0,m=3;o.isInterleavedBufferAttribute&&(m=o.data.stride);let f=["getX","getY","getZ"],g=n.offset;for(let M=t,T=t+e;M<T;M++){let _=(s?s[M]:M)*3,w=(M-g)*6,p=_+0,l=_+1,v=_+2;a&&(p=a[p],l=a[l],v=a[v]),h||(p=p*m+d,l=l*m+d,v=v*m+d);for(let c=0;c<3;c++){let P,x,S;h?(P=o[f[c]](p),x=o[f[c]](l),S=o[f[c]](v)):(P=u[p+c],x=u[l+c],S=u[v+c]);let b=P;x<b&&(b=x),S<b&&(b=S);let A=P;x>A&&(A=x),S>A&&(A=S);let E=(A-b)/2,R=c*2;n[w+R+0]=b+E,n[w+R+1]=E+(Math.abs(b)+E)*Kr}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;Mp.copy(t.matrixWorld).invert(),nl.copy(e.ray).applyMatrix4(Mp),Sp.setFromMatrixScale(t.matrixWorld),vp.copy(nl.direction).multiply(Sp);let s=vp.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let h=this.raycastFirst(nl,r,o,a);h=mu(h,t,e),h&&n.push(h)}else{let h=this.raycast(nl,r,o,a);for(let u=0,d=h.length;u<d;u++){let m=mu(h[u],t,e);m&&n.push(m)}}return n}refit(t=null){return(this.indirect?pp:sp)(this,t)}raycast(t,e=Mn,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?mp:lp;for(let h=0,u=s.length;h<u;h++)a(this,h,e,t,o,n,r);return o}raycastFirst(t,e=Mn,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?gp:hp;for(let h=0,u=s.length;h<u;h++){let d=a(this,h,e,t,n,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?xp:fp;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=tn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?cp:rp});return tn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=tn.getPrimitive(),a=this.geometry.index,h=this.geometry.attributes.position,u=this.indirect?M=>{let T=this.resolveTriangleIndex(M);ye(o,T*3,a,h)}:M=>{ye(o,M*3,a,h)},d=tn.getPrimitive(),m=t.geometry.index,f=t.geometry.attributes.position,g=t.indirect?M=>{let T=t.resolveTriangleIndex(M);ye(d,T*3,m,f)}:M=>{ye(d,M*3,m,f)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let M=(T,y,_,w,p,l,v,c)=>{for(let P=_,x=_+w;P<x;P++){g(P),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=T,b=T+y;S<b;S++)if(u(S),o.needsUpdate=!0,s(o,d,S,P,p,l,v,c))return!0}return!1};if(r){let T=r;r=function(y,_,w,p,l,v,c,P){return T(y,_,w,p,l,v,c,P)?!0:M(y,_,w,p,l,v,c,P)}}else r=M}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return el.set(t.min,t.max,e),el.needsUpdate=!0,this.shapecast({intersectsBounds:n=>el.intersectsBox(n),intersectsTriangle:n=>el.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?yp:dp)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return Jd(this,t,e,n,r)}};var bp=Math.pow(10,-Math.log10(1e-6)),Hv=5e-7*bp;function Fn(i){return~~(i*bp+Hv)}function Tp(i){return`${Fn(i.x)},${Fn(i.y)}`}function _u(i){return`${Fn(i.x)},${Fn(i.y)},${Fn(i.z)}`}function wp(i){return`${Fn(i.x)},${Fn(i.y)},${Fn(i.z)},${Fn(i.w)}`}function Ep(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function rl(){return typeof SharedArrayBuffer<"u"}function Ap(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function Wv(i){return i.index?i.index.count:i.attributes.position.count}function us(i){return Wv(i)/3}var Xv=1e-8,qv=new L;function Rp(i){return~~(i/3)}function Pp(i){return i%3}function Cp(i,t){return i.start-t.start}function xu(i,t){return qv.subVectors(t,i.origin).dot(i.direction)}function Ip(i,t,e,n=Xv){i.sort(Cp),t.sort(Cp);for(let a=0;a<i.length;a++){let h=i[a];for(let u=0;u<t.length;u++){let d=t[u];if(!(d.start>h.end)){if(h.end<d.start||d.end<h.start)continue;if(h.start<=d.start&&h.end>=d.end)s(d.end,h.end)||i.splice(a+1,0,{start:d.end,end:h.end,index:h.index}),h.end=d.start,d.start=0,d.end=0;else if(h.start>=d.start&&h.end<=d.end)s(h.end,d.end)||t.splice(u+1,0,{start:h.end,end:d.end,index:d.index}),d.end=h.start,h.start=0,h.end=0;else if(h.start<=d.start&&h.end<=d.end){let m=h.end;h.end=d.start,d.start=m}else if(h.start>=d.start&&h.end>=d.end){let m=d.end;d.end=h.start,h.start=m}else throw new Error}if(e.has(h.index)||e.set(h.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(h.index).push(d.index),e.get(d.index).push(h.index),o(d)&&(t.splice(u,1),u--),o(h)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let h=0;h<a.length;h++)o(a[h])&&(a.splice(h,1),h--)}function s(a,h){return Math.abs(h-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var sl=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let h=0,u=e.length;h<u;h++){let d=e[h];if(o(d,t)&&o(d,n))continue;let m=a(d,t),f=a(d,n),g=Math.min(m,f);g<r&&(r=g,s=d)}return s;function o(h,u){let d=h.origin.distanceTo(u.origin)>1e-5;return h.direction.angleTo(u.direction)>1e-4||d}function a(h,u){let d=h.origin.distanceTo(u.origin),m=h.direction.angleTo(u.direction);return d/1e-5+m/1e-4}}};var yu=new L,vu=new L,ol=new Sn;function Dp(i,t,e){let n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,h=Array.from(t),u=new sl;for(let d=0,m=h.length;d<m;d++){let f=h[d],g=Rp(f),M=Pp(f),T=3*g+M,y=3*g+(M+1)%3;r&&(T=r.getX(T),y=r.getX(y)),yu.fromBufferAttribute(s,T),vu.fromBufferAttribute(s,y),Ep(yu,vu,ol);let _,w=u.findClosestRay(ol);w===null&&(w=ol.clone(),u.addRay(w)),a.has(w)||a.set(w,{forward:[],reverse:[],ray:w}),_=a.get(w);let p=xu(w,yu),l=xu(w,vu);p>l&&([p,l]=[l,p]),ol.direction.dot(w.direction)<0?_.reverse.push({start:p,end:l,index:f}):_.forward.push({start:p,end:l,index:f})}return a.forEach(({forward:d,reverse:m},f)=>{Ip(d,m,o,e),d.length===0&&m.length===0&&a.delete(f)}),{disjointConnectivityMap:o,fragmentMap:a}}var Yv=new Et,Mu=new L,Zv=new re,Su=["","",""],al=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?p:w,a=new Map,{attributes:h}=t,u=e?Object.keys(h):null,d=t.index,m=h.position,f=us(t),g=f,M=0;n&&(M=t.drawRange.start,t.drawRange.count!==1/0&&(f=~~(t.drawRange.count/3)));let T=this.data;(!T||T.length<3*g)&&(T=new Int32Array(3*g)),T.fill(-1);let y=0,_=new Set;for(let l=M,v=f*3+M;l<v;l+=3){let c=l;for(let P=0;P<3;P++){let x=c+P;d&&(x=d.getX(x)),Su[P]=o(x)}for(let P=0;P<3;P++){let x=(P+1)%3,S=Su[P],b=Su[x],A=`${b}_${S}`;if(a.has(A)){let E=c+P,R=a.get(A);T[E]=R,T[R]=E,a.delete(A),y+=2,_.delete(R)}else{let E=`${S}_${b}`,R=c+P;a.set(E,R),_.add(R)}}}if(r){let{fragmentMap:l,disjointConnectivityMap:v}=Dp(t,_,s);_.clear(),l.forEach(({forward:c,reverse:P})=>{c.forEach(({index:x})=>_.add(x)),P.forEach(({index:x})=>_.add(x))}),this.unmatchedDisjointEdges=l,this.disjointConnections=v,y=f*3-_.size}this.matchedEdges=y,this.unmatchedEdges=_.size,this.data=T;function w(l){return Mu.fromBufferAttribute(m,l),_u(Mu)}function p(l){let v="";for(let c=0,P=u.length;c<P;c++){let x=h[u[c]],S;switch(x.itemSize){case 1:S=Fn(x.getX(l));break;case 2:S=Tp(Yv.fromBufferAttribute(x,l));break;case 3:S=_u(Mu.fromBufferAttribute(x,l));break;case 4:S=wp(Zv.fromBufferAttribute(x,l));break}v!==""&&(v+="|"),v+=S}return v}}};var or=class extends _e{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new kt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=rl(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,h=`${t.uuid}_${o}_${a}`;if(this._hash===h)return;if(this._hash=h,n)for(let f in e){let g=e[f];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=Ap(g.array)}t.boundsTree=new il(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new al),t.halfEdges.updateFrom(t);let u=us(t);(!t.groupIndices||t.groupIndices.length!==u)&&(t.groupIndices=new Uint16Array(u));let d=t.groupIndices,m=t.groups;for(let f=0,g=m.length;f<g;f++){let{start:M,count:T}=m[f];for(let y=M/3,_=(M+T)/3;y<_;y++)d[y]=f}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var $v=Object.getOwnPropertyNames,gn=(i,t)=>function(){return t||(0,i[$v(i)[0]])((t={exports:{}}).exports,t),t.exports},cl=gn({"node_modules/binary-search-bounds/search-bounds.js"(i,t){"use strict";function e(h,u,d,m,f){for(var g=f+1;m<=f;){var M=m+f>>>1,T=h[M],y=d!==void 0?d(T,u):T-u;y>=0?(g=M,f=M-1):m=M+1}return g}function n(h,u,d,m,f){for(var g=f+1;m<=f;){var M=m+f>>>1,T=h[M],y=d!==void 0?d(T,u):T-u;y>0?(g=M,f=M-1):m=M+1}return g}function r(h,u,d,m,f){for(var g=m-1;m<=f;){var M=m+f>>>1,T=h[M],y=d!==void 0?d(T,u):T-u;y<0?(g=M,m=M+1):f=M-1}return g}function s(h,u,d,m,f){for(var g=m-1;m<=f;){var M=m+f>>>1,T=h[M],y=d!==void 0?d(T,u):T-u;y<=0?(g=M,m=M+1):f=M-1}return g}function o(h,u,d,m,f){for(;m<=f;){var g=m+f>>>1,M=h[g],T=d!==void 0?d(M,u):M-u;if(T===0)return g;T<=0?m=g+1:f=g-1}return-1}function a(h,u,d,m,f,g){return typeof d=="function"?g(h,u,d,m===void 0?0:m|0,f===void 0?h.length-1:f|0):g(h,u,void 0,d===void 0?0:d|0,m===void 0?h.length-1:m|0)}t.exports={ge:function(h,u,d,m,f){return a(h,u,d,m,f,e)},gt:function(h,u,d,m,f){return a(h,u,d,m,f,n)},lt:function(h,u,d,m,f){return a(h,u,d,m,f,r)},le:function(h,u,d,m,f){return a(h,u,d,m,f,s)},eq:function(h,u,d,m,f){return a(h,u,d,m,f,o)}}}}),bu=gn({"node_modules/two-product/two-product.js"(i,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,h=e*r,u=h-r,d=h-u,m=r-d,f=e*s,g=f-s,M=f-g,T=s-M,y=a-d*M,_=y-m*M,w=_-d*T,p=m*T-w;return o?(o[0]=p,o[1]=a,o):[p,a]}}}),Lp=gn({"node_modules/robust-sum/robust-sum.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,u=s-a,d=r-h,m=d+u;return m?[m,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var h=o+a,u=new Array(h),d=0,m=0,f=0,g=Math.abs,M=r[m],T=g(M),y=s[f],_=g(y),w,p;T<_?(p=M,m+=1,m<o&&(M=r[m],T=g(M))):(p=y,f+=1,f<a&&(y=s[f],_=g(y))),m<o&&T<_||f>=a?(w=M,m+=1,m<o&&(M=r[m],T=g(M))):(w=y,f+=1,f<a&&(y=s[f],_=g(y)));for(var l=w+p,v=l-w,c=p-v,P=c,x=l,S,b,A,E,R;m<o&&f<a;)T<_?(w=M,m+=1,m<o&&(M=r[m],T=g(M))):(w=y,f+=1,f<a&&(y=s[f],_=g(y))),p=P,l=w+p,v=l-w,c=p-v,c&&(u[d++]=c),S=x+l,b=S-x,A=S-b,E=l-b,R=x-A,P=R+E,x=S;for(;m<o;)w=M,p=P,l=w+p,v=l-w,c=p-v,c&&(u[d++]=c),S=x+l,b=S-x,A=S-b,E=l-b,R=x-A,P=R+E,x=S,m+=1,m<o&&(M=r[m]);for(;f<a;)w=y,p=P,l=w+p,v=l-w,c=p-v,c&&(u[d++]=c),S=x+l,b=S-x,A=S-b,E=l-b,R=x-A,P=R+E,x=S,f+=1,f<a&&(y=s[f]);return P&&(u[d++]=P),x&&(u[d++]=x),d||(u[d++]=0),u.length=d,u}}}),Jv=gn({"node_modules/two-sum/two-sum.js"(i,t){"use strict";t.exports=e;function e(n,r,s){var o=n+r,a=o-n,h=o-a,u=r-a,d=n-h;return s?(s[0]=d+u,s[1]=o,s):[d+u,o]}}}),Np=gn({"node_modules/robust-scale/robust-scale.js"(i,t){"use strict";var e=bu(),n=Jv();t.exports=r;function r(s,o){var a=s.length;if(a===1){var h=e(s[0],o);return h[0]?h:[h[1]]}var u=new Array(2*a),d=[.1,.1],m=[.1,.1],f=0;e(s[0],o,d),d[0]&&(u[f++]=d[0]);for(var g=1;g<a;++g){e(s[g],o,m);var M=d[1];n(M,m[0],d),d[0]&&(u[f++]=d[0]);var T=m[1],y=d[1],_=T+y,w=_-T,p=y-w;d[1]=_,p&&(u[f++]=p)}return d[1]&&(u[f++]=d[1]),f===0&&(u[f++]=0),u.length=f,u}}}),Up=gn({"node_modules/robust-subtract/robust-diff.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,u=s-a,d=r-h,m=d+u;return m?[m,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var h=o+a,u=new Array(h),d=0,m=0,f=0,g=Math.abs,M=r[m],T=g(M),y=-s[f],_=g(y),w,p;T<_?(p=M,m+=1,m<o&&(M=r[m],T=g(M))):(p=y,f+=1,f<a&&(y=-s[f],_=g(y))),m<o&&T<_||f>=a?(w=M,m+=1,m<o&&(M=r[m],T=g(M))):(w=y,f+=1,f<a&&(y=-s[f],_=g(y)));for(var l=w+p,v=l-w,c=p-v,P=c,x=l,S,b,A,E,R;m<o&&f<a;)T<_?(w=M,m+=1,m<o&&(M=r[m],T=g(M))):(w=y,f+=1,f<a&&(y=-s[f],_=g(y))),p=P,l=w+p,v=l-w,c=p-v,c&&(u[d++]=c),S=x+l,b=S-x,A=S-b,E=l-b,R=x-A,P=R+E,x=S;for(;m<o;)w=M,p=P,l=w+p,v=l-w,c=p-v,c&&(u[d++]=c),S=x+l,b=S-x,A=S-b,E=l-b,R=x-A,P=R+E,x=S,m+=1,m<o&&(M=r[m]);for(;f<a;)w=y,p=P,l=w+p,v=l-w,c=p-v,c&&(u[d++]=c),S=x+l,b=S-x,A=S-b,E=l-b,R=x-A,P=R+E,x=S,f+=1,f<a&&(y=-s[f]);return P&&(u[d++]=P),x&&(u[d++]=x),d||(u[d++]=0),u.length=d,u}}}),Kv=gn({"node_modules/robust-orientation/orientation.js"(i,t){"use strict";var e=bu(),n=Lp(),r=Np(),s=Up(),o=5,a=11102230246251565e-32,h=(3+16*a)*a,u=(7+56*a)*a;function d(l,v,c,P){return function(S,b,A){var E=l(l(v(b[1],A[0]),v(-A[1],b[0])),l(v(S[1],b[0]),v(-b[1],S[0]))),R=l(v(S[1],A[0]),v(-A[1],S[0])),U=P(E,R);return U[U.length-1]}}function m(l,v,c,P){return function(S,b,A,E){var R=l(l(c(l(v(A[1],E[0]),v(-E[1],A[0])),b[2]),l(c(l(v(b[1],E[0]),v(-E[1],b[0])),-A[2]),c(l(v(b[1],A[0]),v(-A[1],b[0])),E[2]))),l(c(l(v(b[1],E[0]),v(-E[1],b[0])),S[2]),l(c(l(v(S[1],E[0]),v(-E[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),E[2])))),U=l(l(c(l(v(A[1],E[0]),v(-E[1],A[0])),S[2]),l(c(l(v(S[1],E[0]),v(-E[1],S[0])),-A[2]),c(l(v(S[1],A[0]),v(-A[1],S[0])),E[2]))),l(c(l(v(b[1],A[0]),v(-A[1],b[0])),S[2]),l(c(l(v(S[1],A[0]),v(-A[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),A[2])))),N=P(R,U);return N[N.length-1]}}function f(l,v,c,P){return function(S,b,A,E,R){var U=l(l(l(c(l(c(l(v(E[1],R[0]),v(-R[1],E[0])),A[2]),l(c(l(v(A[1],R[0]),v(-R[1],A[0])),-E[2]),c(l(v(A[1],E[0]),v(-E[1],A[0])),R[2]))),b[3]),l(c(l(c(l(v(E[1],R[0]),v(-R[1],E[0])),b[2]),l(c(l(v(b[1],R[0]),v(-R[1],b[0])),-E[2]),c(l(v(b[1],E[0]),v(-E[1],b[0])),R[2]))),-A[3]),c(l(c(l(v(A[1],R[0]),v(-R[1],A[0])),b[2]),l(c(l(v(b[1],R[0]),v(-R[1],b[0])),-A[2]),c(l(v(b[1],A[0]),v(-A[1],b[0])),R[2]))),E[3]))),l(c(l(c(l(v(A[1],E[0]),v(-E[1],A[0])),b[2]),l(c(l(v(b[1],E[0]),v(-E[1],b[0])),-A[2]),c(l(v(b[1],A[0]),v(-A[1],b[0])),E[2]))),-R[3]),l(c(l(c(l(v(E[1],R[0]),v(-R[1],E[0])),b[2]),l(c(l(v(b[1],R[0]),v(-R[1],b[0])),-E[2]),c(l(v(b[1],E[0]),v(-E[1],b[0])),R[2]))),S[3]),c(l(c(l(v(E[1],R[0]),v(-R[1],E[0])),S[2]),l(c(l(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),c(l(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),-b[3])))),l(l(c(l(c(l(v(b[1],R[0]),v(-R[1],b[0])),S[2]),l(c(l(v(S[1],R[0]),v(-R[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),R[2]))),E[3]),l(c(l(c(l(v(b[1],E[0]),v(-E[1],b[0])),S[2]),l(c(l(v(S[1],E[0]),v(-E[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),E[2]))),-R[3]),c(l(c(l(v(A[1],E[0]),v(-E[1],A[0])),b[2]),l(c(l(v(b[1],E[0]),v(-E[1],b[0])),-A[2]),c(l(v(b[1],A[0]),v(-A[1],b[0])),E[2]))),S[3]))),l(c(l(c(l(v(A[1],E[0]),v(-E[1],A[0])),S[2]),l(c(l(v(S[1],E[0]),v(-E[1],S[0])),-A[2]),c(l(v(S[1],A[0]),v(-A[1],S[0])),E[2]))),-b[3]),l(c(l(c(l(v(b[1],E[0]),v(-E[1],b[0])),S[2]),l(c(l(v(S[1],E[0]),v(-E[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),E[2]))),A[3]),c(l(c(l(v(b[1],A[0]),v(-A[1],b[0])),S[2]),l(c(l(v(S[1],A[0]),v(-A[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),A[2]))),-E[3]))))),N=l(l(l(c(l(c(l(v(E[1],R[0]),v(-R[1],E[0])),A[2]),l(c(l(v(A[1],R[0]),v(-R[1],A[0])),-E[2]),c(l(v(A[1],E[0]),v(-E[1],A[0])),R[2]))),S[3]),c(l(c(l(v(E[1],R[0]),v(-R[1],E[0])),S[2]),l(c(l(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),c(l(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),-A[3])),l(c(l(c(l(v(A[1],R[0]),v(-R[1],A[0])),S[2]),l(c(l(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),c(l(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),E[3]),c(l(c(l(v(A[1],E[0]),v(-E[1],A[0])),S[2]),l(c(l(v(S[1],E[0]),v(-E[1],S[0])),-A[2]),c(l(v(S[1],A[0]),v(-A[1],S[0])),E[2]))),-R[3]))),l(l(c(l(c(l(v(A[1],R[0]),v(-R[1],A[0])),b[2]),l(c(l(v(b[1],R[0]),v(-R[1],b[0])),-A[2]),c(l(v(b[1],A[0]),v(-A[1],b[0])),R[2]))),S[3]),c(l(c(l(v(A[1],R[0]),v(-R[1],A[0])),S[2]),l(c(l(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),c(l(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-b[3])),l(c(l(c(l(v(b[1],R[0]),v(-R[1],b[0])),S[2]),l(c(l(v(S[1],R[0]),v(-R[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),R[2]))),A[3]),c(l(c(l(v(b[1],A[0]),v(-A[1],b[0])),S[2]),l(c(l(v(S[1],A[0]),v(-A[1],S[0])),-b[2]),c(l(v(S[1],b[0]),v(-b[1],S[0])),A[2]))),-R[3])))),F=P(U,N);return F[F.length-1]}}function g(l){var v=l===3?d:l===4?m:f;return v(n,e,r,s)}var M=g(3),T=g(4),y=[function(){return 0},function(){return 0},function(v,c){return c[0]-v[0]},function(v,c,P){var x=(v[1]-P[1])*(c[0]-P[0]),S=(v[0]-P[0])*(c[1]-P[1]),b=x-S,A;if(x>0){if(S<=0)return b;A=x+S}else if(x<0){if(S>=0)return b;A=-(x+S)}else return b;var E=h*A;return b>=E||b<=-E?b:M(v,c,P)},function(v,c,P,x){var S=v[0]-x[0],b=c[0]-x[0],A=P[0]-x[0],E=v[1]-x[1],R=c[1]-x[1],U=P[1]-x[1],N=v[2]-x[2],F=c[2]-x[2],B=P[2]-x[2],G=b*U,X=A*R,it=A*E,j=S*U,nt=S*R,_t=b*E,Mt=N*(G-X)+F*(it-j)+B*(nt-_t),ut=(Math.abs(G)+Math.abs(X))*Math.abs(N)+(Math.abs(it)+Math.abs(j))*Math.abs(F)+(Math.abs(nt)+Math.abs(_t))*Math.abs(B),Z=u*ut;return Mt>Z||-Mt>Z?Mt:T(v,c,P,x)}];function _(l){var v=y[l.length];return v||(v=y[l.length]=g(l.length)),v.apply(void 0,l)}function w(l,v,c,P,x,S,b){return function(E,R,U,N,F){switch(arguments.length){case 0:case 1:return 0;case 2:return P(E,R);case 3:return x(E,R,U);case 4:return S(E,R,U,N);case 5:return b(E,R,U,N,F)}for(var B=new Array(arguments.length),G=0;G<arguments.length;++G)B[G]=arguments[G];return l(B)}}function p(){for(;y.length<=o;)y.push(g(y.length));t.exports=w.apply(void 0,[_].concat(y));for(var l=0;l<=o;++l)t.exports[l]=y[l]}p()}}),jv=gn({"node_modules/cdt2d/lib/monotone.js"(i,t){"use strict";var e=cl(),n=Kv()[3],r=0,s=1,o=2;t.exports=T;function a(y,_,w,p,l){this.a=y,this.b=_,this.idx=w,this.lowerIds=p,this.upperIds=l}function h(y,_,w,p){this.a=y,this.b=_,this.type=w,this.idx=p}function u(y,_){var w=y.a[0]-_.a[0]||y.a[1]-_.a[1]||y.type-_.type;return w||y.type!==r&&(w=n(y.a,y.b,_.b),w)?w:y.idx-_.idx}function d(y,_){return n(y.a,y.b,_)}function m(y,_,w,p,l){for(var v=e.lt(_,p,d),c=e.gt(_,p,d),P=v;P<c;++P){for(var x=_[P],S=x.lowerIds,A=S.length;A>1&&n(w[S[A-2]],w[S[A-1]],p)>0;)y.push([S[A-1],S[A-2],l]),A-=1;S.length=A,S.push(l);for(var b=x.upperIds,A=b.length;A>1&&n(w[b[A-2]],w[b[A-1]],p)<0;)y.push([b[A-2],b[A-1],l]),A-=1;b.length=A,b.push(l)}}function f(y,_){var w;return y.a[0]<_.a[0]?w=n(y.a,y.b,_.a):w=n(_.b,_.a,y.a),w||(_.b[0]<y.b[0]?w=n(y.a,y.b,_.b):w=n(_.b,_.a,y.b),w||y.idx-_.idx)}function g(y,_,w){var p=e.le(y,w,f),l=y[p],v=l.upperIds,c=v[v.length-1];l.upperIds=[c],y.splice(p+1,0,new a(w.a,w.b,w.idx,[c],v))}function M(y,_,w){var p=w.a;w.a=w.b,w.b=p;var l=e.eq(y,w,f),v=y[l],c=y[l-1];c.upperIds=v.upperIds,y.splice(l,1)}function T(y,_){for(var w=y.length,p=_.length,l=[],v=0;v<w;++v)l.push(new h(y[v],null,r,v));for(var v=0;v<p;++v){var c=_[v],P=y[c[0]],x=y[c[1]];P[0]<x[0]?l.push(new h(P,x,o,v),new h(x,P,s,v)):P[0]>x[0]&&l.push(new h(x,P,o,v),new h(P,x,s,v))}l.sort(u);for(var S=l[0].a[0]-(1+Math.abs(l[0].a[0]))*Math.pow(2,-52),b=[new a([S,1],[S,0],-1,[],[],[],[])],A=[],v=0,E=l.length;v<E;++v){var R=l[v],U=R.type;U===r?m(A,b,y,R.a,R.idx):U===o?g(b,y,R):M(b,y,R)}return A}}}),Qv=gn({"node_modules/cdt2d/lib/triangulation.js"(i,t){"use strict";var e=cl();t.exports=o;function n(a,h){this.stars=a,this.edges=h}var r=n.prototype;function s(a,h,u){for(var d=1,m=a.length;d<m;d+=2)if(a[d-1]===h&&a[d]===u){a[d-1]=a[m-2],a[d]=a[m-1],a.length=m-2;return}}r.isConstraint=(function(){var a=[0,0];function h(u,d){return u[0]-d[0]||u[1]-d[1]}return function(u,d){return a[0]=Math.min(u,d),a[1]=Math.max(u,d),e.eq(this.edges,a,h)>=0}})(),r.removeTriangle=function(a,h,u){var d=this.stars;s(d[a],h,u),s(d[h],u,a),s(d[u],a,h)},r.addTriangle=function(a,h,u){var d=this.stars;d[a].push(h,u),d[h].push(u,a),d[u].push(a,h)},r.opposite=function(a,h){for(var u=this.stars[h],d=1,m=u.length;d<m;d+=2)if(u[d]===a)return u[d-1];return-1},r.flip=function(a,h){var u=this.opposite(a,h),d=this.opposite(h,a);this.removeTriangle(a,h,u),this.removeTriangle(h,a,d),this.addTriangle(a,d,u),this.addTriangle(h,u,d)},r.edges=function(){for(var a=this.stars,h=[],u=0,d=a.length;u<d;++u)for(var m=a[u],f=0,g=m.length;f<g;f+=2)h.push([m[f],m[f+1]]);return h},r.cells=function(){for(var a=this.stars,h=[],u=0,d=a.length;u<d;++u)for(var m=a[u],f=0,g=m.length;f<g;f+=2){var M=m[f],T=m[f+1];u<Math.min(M,T)&&h.push([u,M,T])}return h};function o(a,h){for(var u=new Array(a),d=0;d<a;++d)u[d]=[];return new n(u,h)}}}),tM=gn({"node_modules/robust-in-sphere/in-sphere.js"(i,t){"use strict";var e=bu(),n=Lp(),r=Up(),s=Np(),o=6;function a(p){var l=p===3?m:p===4?f:p===5?g:M;return l(n,r,e,s)}function h(){return 0}function u(){return 0}function d(){return 0}function m(p,l,v,c){function P(x,S,b){var A=v(x[0],x[0]),E=c(A,S[0]),R=c(A,b[0]),U=v(S[0],S[0]),N=c(U,x[0]),F=c(U,b[0]),B=v(b[0],b[0]),G=c(B,x[0]),X=c(B,S[0]),it=p(l(X,F),l(N,E)),j=l(G,R),nt=l(it,j);return nt[nt.length-1]}return P}function f(p,l,v,c){function P(x,S,b,A){var E=p(v(x[0],x[0]),v(x[1],x[1])),R=c(E,S[0]),U=c(E,b[0]),N=c(E,A[0]),F=p(v(S[0],S[0]),v(S[1],S[1])),B=c(F,x[0]),G=c(F,b[0]),X=c(F,A[0]),it=p(v(b[0],b[0]),v(b[1],b[1])),j=c(it,x[0]),nt=c(it,S[0]),_t=c(it,A[0]),Mt=p(v(A[0],A[0]),v(A[1],A[1])),ut=c(Mt,x[0]),Z=c(Mt,S[0]),et=c(Mt,b[0]),K=p(p(c(l(et,_t),S[1]),p(c(l(Z,X),-b[1]),c(l(nt,G),A[1]))),p(c(l(Z,X),x[1]),p(c(l(ut,N),-S[1]),c(l(B,R),A[1])))),st=p(p(c(l(et,_t),x[1]),p(c(l(ut,N),-b[1]),c(l(j,U),A[1]))),p(c(l(nt,G),x[1]),p(c(l(j,U),-S[1]),c(l(B,R),b[1])))),lt=l(K,st);return lt[lt.length-1]}return P}function g(p,l,v,c){function P(x,S,b,A,E){var R=p(v(x[0],x[0]),p(v(x[1],x[1]),v(x[2],x[2]))),U=c(R,S[0]),N=c(R,b[0]),F=c(R,A[0]),B=c(R,E[0]),G=p(v(S[0],S[0]),p(v(S[1],S[1]),v(S[2],S[2]))),X=c(G,x[0]),it=c(G,b[0]),j=c(G,A[0]),nt=c(G,E[0]),_t=p(v(b[0],b[0]),p(v(b[1],b[1]),v(b[2],b[2]))),Mt=c(_t,x[0]),ut=c(_t,S[0]),Z=c(_t,A[0]),et=c(_t,E[0]),K=p(v(A[0],A[0]),p(v(A[1],A[1]),v(A[2],A[2]))),st=c(K,x[0]),lt=c(K,S[0]),at=c(K,b[0]),Qt=c(K,E[0]),bt=p(v(E[0],E[0]),p(v(E[1],E[1]),v(E[2],E[2]))),Pt=c(bt,x[0]),At=c(bt,S[0]),wt=c(bt,b[0]),Ot=c(bt,A[0]),de=p(p(p(c(p(c(l(Ot,Qt),b[1]),p(c(l(wt,et),-A[1]),c(l(at,Z),E[1]))),S[2]),p(c(p(c(l(Ot,Qt),S[1]),p(c(l(At,nt),-A[1]),c(l(lt,j),E[1]))),-b[2]),c(p(c(l(wt,et),S[1]),p(c(l(At,nt),-b[1]),c(l(ut,it),E[1]))),A[2]))),p(c(p(c(l(at,Z),S[1]),p(c(l(lt,j),-b[1]),c(l(ut,it),A[1]))),-E[2]),p(c(p(c(l(Ot,Qt),S[1]),p(c(l(At,nt),-A[1]),c(l(lt,j),E[1]))),x[2]),c(p(c(l(Ot,Qt),x[1]),p(c(l(Pt,B),-A[1]),c(l(st,F),E[1]))),-S[2])))),p(p(c(p(c(l(At,nt),x[1]),p(c(l(Pt,B),-S[1]),c(l(X,U),E[1]))),A[2]),p(c(p(c(l(lt,j),x[1]),p(c(l(st,F),-S[1]),c(l(X,U),A[1]))),-E[2]),c(p(c(l(at,Z),S[1]),p(c(l(lt,j),-b[1]),c(l(ut,it),A[1]))),x[2]))),p(c(p(c(l(at,Z),x[1]),p(c(l(st,F),-b[1]),c(l(Mt,N),A[1]))),-S[2]),p(c(p(c(l(lt,j),x[1]),p(c(l(st,F),-S[1]),c(l(X,U),A[1]))),b[2]),c(p(c(l(ut,it),x[1]),p(c(l(Mt,N),-S[1]),c(l(X,U),b[1]))),-A[2]))))),Wt=p(p(p(c(p(c(l(Ot,Qt),b[1]),p(c(l(wt,et),-A[1]),c(l(at,Z),E[1]))),x[2]),c(p(c(l(Ot,Qt),x[1]),p(c(l(Pt,B),-A[1]),c(l(st,F),E[1]))),-b[2])),p(c(p(c(l(wt,et),x[1]),p(c(l(Pt,B),-b[1]),c(l(Mt,N),E[1]))),A[2]),c(p(c(l(at,Z),x[1]),p(c(l(st,F),-b[1]),c(l(Mt,N),A[1]))),-E[2]))),p(p(c(p(c(l(wt,et),S[1]),p(c(l(At,nt),-b[1]),c(l(ut,it),E[1]))),x[2]),c(p(c(l(wt,et),x[1]),p(c(l(Pt,B),-b[1]),c(l(Mt,N),E[1]))),-S[2])),p(c(p(c(l(At,nt),x[1]),p(c(l(Pt,B),-S[1]),c(l(X,U),E[1]))),b[2]),c(p(c(l(ut,it),x[1]),p(c(l(Mt,N),-S[1]),c(l(X,U),b[1]))),-E[2])))),Xt=l(de,Wt);return Xt[Xt.length-1]}return P}function M(p,l,v,c){function P(x,S,b,A,E,R){var U=p(p(v(x[0],x[0]),v(x[1],x[1])),p(v(x[2],x[2]),v(x[3],x[3]))),N=c(U,S[0]),F=c(U,b[0]),B=c(U,A[0]),G=c(U,E[0]),X=c(U,R[0]),it=p(p(v(S[0],S[0]),v(S[1],S[1])),p(v(S[2],S[2]),v(S[3],S[3]))),j=c(it,x[0]),nt=c(it,b[0]),_t=c(it,A[0]),Mt=c(it,E[0]),ut=c(it,R[0]),Z=p(p(v(b[0],b[0]),v(b[1],b[1])),p(v(b[2],b[2]),v(b[3],b[3]))),et=c(Z,x[0]),K=c(Z,S[0]),st=c(Z,A[0]),lt=c(Z,E[0]),at=c(Z,R[0]),Qt=p(p(v(A[0],A[0]),v(A[1],A[1])),p(v(A[2],A[2]),v(A[3],A[3]))),bt=c(Qt,x[0]),Pt=c(Qt,S[0]),At=c(Qt,b[0]),wt=c(Qt,E[0]),Ot=c(Qt,R[0]),de=p(p(v(E[0],E[0]),v(E[1],E[1])),p(v(E[2],E[2]),v(E[3],E[3]))),Wt=c(de,x[0]),Xt=c(de,S[0]),Gt=c(de,b[0]),qt=c(de,A[0]),O=c(de,R[0]),Le=p(p(v(R[0],R[0]),v(R[1],R[1])),p(v(R[2],R[2]),v(R[3],R[3]))),Ut=c(Le,x[0]),D=c(Le,S[0]),C=c(Le,b[0]),z=c(Le,A[0]),H=c(Le,E[0]),$=p(p(p(c(p(p(c(p(c(l(H,O),A[1]),p(c(l(z,Ot),-E[1]),c(l(qt,wt),R[1]))),b[2]),c(p(c(l(H,O),b[1]),p(c(l(C,at),-E[1]),c(l(Gt,lt),R[1]))),-A[2])),p(c(p(c(l(z,Ot),b[1]),p(c(l(C,at),-A[1]),c(l(At,st),R[1]))),E[2]),c(p(c(l(qt,wt),b[1]),p(c(l(Gt,lt),-A[1]),c(l(At,st),E[1]))),-R[2]))),S[3]),p(c(p(p(c(p(c(l(H,O),A[1]),p(c(l(z,Ot),-E[1]),c(l(qt,wt),R[1]))),S[2]),c(p(c(l(H,O),S[1]),p(c(l(D,ut),-E[1]),c(l(Xt,Mt),R[1]))),-A[2])),p(c(p(c(l(z,Ot),S[1]),p(c(l(D,ut),-A[1]),c(l(Pt,_t),R[1]))),E[2]),c(p(c(l(qt,wt),S[1]),p(c(l(Xt,Mt),-A[1]),c(l(Pt,_t),E[1]))),-R[2]))),-b[3]),c(p(p(c(p(c(l(H,O),b[1]),p(c(l(C,at),-E[1]),c(l(Gt,lt),R[1]))),S[2]),c(p(c(l(H,O),S[1]),p(c(l(D,ut),-E[1]),c(l(Xt,Mt),R[1]))),-b[2])),p(c(p(c(l(C,at),S[1]),p(c(l(D,ut),-b[1]),c(l(K,nt),R[1]))),E[2]),c(p(c(l(Gt,lt),S[1]),p(c(l(Xt,Mt),-b[1]),c(l(K,nt),E[1]))),-R[2]))),A[3]))),p(p(c(p(p(c(p(c(l(z,Ot),b[1]),p(c(l(C,at),-A[1]),c(l(At,st),R[1]))),S[2]),c(p(c(l(z,Ot),S[1]),p(c(l(D,ut),-A[1]),c(l(Pt,_t),R[1]))),-b[2])),p(c(p(c(l(C,at),S[1]),p(c(l(D,ut),-b[1]),c(l(K,nt),R[1]))),A[2]),c(p(c(l(At,st),S[1]),p(c(l(Pt,_t),-b[1]),c(l(K,nt),A[1]))),-R[2]))),-E[3]),c(p(p(c(p(c(l(qt,wt),b[1]),p(c(l(Gt,lt),-A[1]),c(l(At,st),E[1]))),S[2]),c(p(c(l(qt,wt),S[1]),p(c(l(Xt,Mt),-A[1]),c(l(Pt,_t),E[1]))),-b[2])),p(c(p(c(l(Gt,lt),S[1]),p(c(l(Xt,Mt),-b[1]),c(l(K,nt),E[1]))),A[2]),c(p(c(l(At,st),S[1]),p(c(l(Pt,_t),-b[1]),c(l(K,nt),A[1]))),-E[2]))),R[3])),p(c(p(p(c(p(c(l(H,O),A[1]),p(c(l(z,Ot),-E[1]),c(l(qt,wt),R[1]))),S[2]),c(p(c(l(H,O),S[1]),p(c(l(D,ut),-E[1]),c(l(Xt,Mt),R[1]))),-A[2])),p(c(p(c(l(z,Ot),S[1]),p(c(l(D,ut),-A[1]),c(l(Pt,_t),R[1]))),E[2]),c(p(c(l(qt,wt),S[1]),p(c(l(Xt,Mt),-A[1]),c(l(Pt,_t),E[1]))),-R[2]))),x[3]),c(p(p(c(p(c(l(H,O),A[1]),p(c(l(z,Ot),-E[1]),c(l(qt,wt),R[1]))),x[2]),c(p(c(l(H,O),x[1]),p(c(l(Ut,X),-E[1]),c(l(Wt,G),R[1]))),-A[2])),p(c(p(c(l(z,Ot),x[1]),p(c(l(Ut,X),-A[1]),c(l(bt,B),R[1]))),E[2]),c(p(c(l(qt,wt),x[1]),p(c(l(Wt,G),-A[1]),c(l(bt,B),E[1]))),-R[2]))),-S[3])))),p(p(p(c(p(p(c(p(c(l(H,O),S[1]),p(c(l(D,ut),-E[1]),c(l(Xt,Mt),R[1]))),x[2]),c(p(c(l(H,O),x[1]),p(c(l(Ut,X),-E[1]),c(l(Wt,G),R[1]))),-S[2])),p(c(p(c(l(D,ut),x[1]),p(c(l(Ut,X),-S[1]),c(l(j,N),R[1]))),E[2]),c(p(c(l(Xt,Mt),x[1]),p(c(l(Wt,G),-S[1]),c(l(j,N),E[1]))),-R[2]))),A[3]),c(p(p(c(p(c(l(z,Ot),S[1]),p(c(l(D,ut),-A[1]),c(l(Pt,_t),R[1]))),x[2]),c(p(c(l(z,Ot),x[1]),p(c(l(Ut,X),-A[1]),c(l(bt,B),R[1]))),-S[2])),p(c(p(c(l(D,ut),x[1]),p(c(l(Ut,X),-S[1]),c(l(j,N),R[1]))),A[2]),c(p(c(l(Pt,_t),x[1]),p(c(l(bt,B),-S[1]),c(l(j,N),A[1]))),-R[2]))),-E[3])),p(c(p(p(c(p(c(l(qt,wt),S[1]),p(c(l(Xt,Mt),-A[1]),c(l(Pt,_t),E[1]))),x[2]),c(p(c(l(qt,wt),x[1]),p(c(l(Wt,G),-A[1]),c(l(bt,B),E[1]))),-S[2])),p(c(p(c(l(Xt,Mt),x[1]),p(c(l(Wt,G),-S[1]),c(l(j,N),E[1]))),A[2]),c(p(c(l(Pt,_t),x[1]),p(c(l(bt,B),-S[1]),c(l(j,N),A[1]))),-E[2]))),R[3]),c(p(p(c(p(c(l(z,Ot),b[1]),p(c(l(C,at),-A[1]),c(l(At,st),R[1]))),S[2]),c(p(c(l(z,Ot),S[1]),p(c(l(D,ut),-A[1]),c(l(Pt,_t),R[1]))),-b[2])),p(c(p(c(l(C,at),S[1]),p(c(l(D,ut),-b[1]),c(l(K,nt),R[1]))),A[2]),c(p(c(l(At,st),S[1]),p(c(l(Pt,_t),-b[1]),c(l(K,nt),A[1]))),-R[2]))),x[3]))),p(p(c(p(p(c(p(c(l(z,Ot),b[1]),p(c(l(C,at),-A[1]),c(l(At,st),R[1]))),x[2]),c(p(c(l(z,Ot),x[1]),p(c(l(Ut,X),-A[1]),c(l(bt,B),R[1]))),-b[2])),p(c(p(c(l(C,at),x[1]),p(c(l(Ut,X),-b[1]),c(l(et,F),R[1]))),A[2]),c(p(c(l(At,st),x[1]),p(c(l(bt,B),-b[1]),c(l(et,F),A[1]))),-R[2]))),-S[3]),c(p(p(c(p(c(l(z,Ot),S[1]),p(c(l(D,ut),-A[1]),c(l(Pt,_t),R[1]))),x[2]),c(p(c(l(z,Ot),x[1]),p(c(l(Ut,X),-A[1]),c(l(bt,B),R[1]))),-S[2])),p(c(p(c(l(D,ut),x[1]),p(c(l(Ut,X),-S[1]),c(l(j,N),R[1]))),A[2]),c(p(c(l(Pt,_t),x[1]),p(c(l(bt,B),-S[1]),c(l(j,N),A[1]))),-R[2]))),b[3])),p(c(p(p(c(p(c(l(C,at),S[1]),p(c(l(D,ut),-b[1]),c(l(K,nt),R[1]))),x[2]),c(p(c(l(C,at),x[1]),p(c(l(Ut,X),-b[1]),c(l(et,F),R[1]))),-S[2])),p(c(p(c(l(D,ut),x[1]),p(c(l(Ut,X),-S[1]),c(l(j,N),R[1]))),b[2]),c(p(c(l(K,nt),x[1]),p(c(l(et,F),-S[1]),c(l(j,N),b[1]))),-R[2]))),-A[3]),c(p(p(c(p(c(l(At,st),S[1]),p(c(l(Pt,_t),-b[1]),c(l(K,nt),A[1]))),x[2]),c(p(c(l(At,st),x[1]),p(c(l(bt,B),-b[1]),c(l(et,F),A[1]))),-S[2])),p(c(p(c(l(Pt,_t),x[1]),p(c(l(bt,B),-S[1]),c(l(j,N),A[1]))),b[2]),c(p(c(l(K,nt),x[1]),p(c(l(et,F),-S[1]),c(l(j,N),b[1]))),-A[2]))),R[3]))))),ot=p(p(p(c(p(p(c(p(c(l(H,O),A[1]),p(c(l(z,Ot),-E[1]),c(l(qt,wt),R[1]))),b[2]),c(p(c(l(H,O),b[1]),p(c(l(C,at),-E[1]),c(l(Gt,lt),R[1]))),-A[2])),p(c(p(c(l(z,Ot),b[1]),p(c(l(C,at),-A[1]),c(l(At,st),R[1]))),E[2]),c(p(c(l(qt,wt),b[1]),p(c(l(Gt,lt),-A[1]),c(l(At,st),E[1]))),-R[2]))),x[3]),p(c(p(p(c(p(c(l(H,O),A[1]),p(c(l(z,Ot),-E[1]),c(l(qt,wt),R[1]))),x[2]),c(p(c(l(H,O),x[1]),p(c(l(Ut,X),-E[1]),c(l(Wt,G),R[1]))),-A[2])),p(c(p(c(l(z,Ot),x[1]),p(c(l(Ut,X),-A[1]),c(l(bt,B),R[1]))),E[2]),c(p(c(l(qt,wt),x[1]),p(c(l(Wt,G),-A[1]),c(l(bt,B),E[1]))),-R[2]))),-b[3]),c(p(p(c(p(c(l(H,O),b[1]),p(c(l(C,at),-E[1]),c(l(Gt,lt),R[1]))),x[2]),c(p(c(l(H,O),x[1]),p(c(l(Ut,X),-E[1]),c(l(Wt,G),R[1]))),-b[2])),p(c(p(c(l(C,at),x[1]),p(c(l(Ut,X),-b[1]),c(l(et,F),R[1]))),E[2]),c(p(c(l(Gt,lt),x[1]),p(c(l(Wt,G),-b[1]),c(l(et,F),E[1]))),-R[2]))),A[3]))),p(p(c(p(p(c(p(c(l(z,Ot),b[1]),p(c(l(C,at),-A[1]),c(l(At,st),R[1]))),x[2]),c(p(c(l(z,Ot),x[1]),p(c(l(Ut,X),-A[1]),c(l(bt,B),R[1]))),-b[2])),p(c(p(c(l(C,at),x[1]),p(c(l(Ut,X),-b[1]),c(l(et,F),R[1]))),A[2]),c(p(c(l(At,st),x[1]),p(c(l(bt,B),-b[1]),c(l(et,F),A[1]))),-R[2]))),-E[3]),c(p(p(c(p(c(l(qt,wt),b[1]),p(c(l(Gt,lt),-A[1]),c(l(At,st),E[1]))),x[2]),c(p(c(l(qt,wt),x[1]),p(c(l(Wt,G),-A[1]),c(l(bt,B),E[1]))),-b[2])),p(c(p(c(l(Gt,lt),x[1]),p(c(l(Wt,G),-b[1]),c(l(et,F),E[1]))),A[2]),c(p(c(l(At,st),x[1]),p(c(l(bt,B),-b[1]),c(l(et,F),A[1]))),-E[2]))),R[3])),p(c(p(p(c(p(c(l(H,O),b[1]),p(c(l(C,at),-E[1]),c(l(Gt,lt),R[1]))),S[2]),c(p(c(l(H,O),S[1]),p(c(l(D,ut),-E[1]),c(l(Xt,Mt),R[1]))),-b[2])),p(c(p(c(l(C,at),S[1]),p(c(l(D,ut),-b[1]),c(l(K,nt),R[1]))),E[2]),c(p(c(l(Gt,lt),S[1]),p(c(l(Xt,Mt),-b[1]),c(l(K,nt),E[1]))),-R[2]))),x[3]),c(p(p(c(p(c(l(H,O),b[1]),p(c(l(C,at),-E[1]),c(l(Gt,lt),R[1]))),x[2]),c(p(c(l(H,O),x[1]),p(c(l(Ut,X),-E[1]),c(l(Wt,G),R[1]))),-b[2])),p(c(p(c(l(C,at),x[1]),p(c(l(Ut,X),-b[1]),c(l(et,F),R[1]))),E[2]),c(p(c(l(Gt,lt),x[1]),p(c(l(Wt,G),-b[1]),c(l(et,F),E[1]))),-R[2]))),-S[3])))),p(p(p(c(p(p(c(p(c(l(H,O),S[1]),p(c(l(D,ut),-E[1]),c(l(Xt,Mt),R[1]))),x[2]),c(p(c(l(H,O),x[1]),p(c(l(Ut,X),-E[1]),c(l(Wt,G),R[1]))),-S[2])),p(c(p(c(l(D,ut),x[1]),p(c(l(Ut,X),-S[1]),c(l(j,N),R[1]))),E[2]),c(p(c(l(Xt,Mt),x[1]),p(c(l(Wt,G),-S[1]),c(l(j,N),E[1]))),-R[2]))),b[3]),c(p(p(c(p(c(l(C,at),S[1]),p(c(l(D,ut),-b[1]),c(l(K,nt),R[1]))),x[2]),c(p(c(l(C,at),x[1]),p(c(l(Ut,X),-b[1]),c(l(et,F),R[1]))),-S[2])),p(c(p(c(l(D,ut),x[1]),p(c(l(Ut,X),-S[1]),c(l(j,N),R[1]))),b[2]),c(p(c(l(K,nt),x[1]),p(c(l(et,F),-S[1]),c(l(j,N),b[1]))),-R[2]))),-E[3])),p(c(p(p(c(p(c(l(Gt,lt),S[1]),p(c(l(Xt,Mt),-b[1]),c(l(K,nt),E[1]))),x[2]),c(p(c(l(Gt,lt),x[1]),p(c(l(Wt,G),-b[1]),c(l(et,F),E[1]))),-S[2])),p(c(p(c(l(Xt,Mt),x[1]),p(c(l(Wt,G),-S[1]),c(l(j,N),E[1]))),b[2]),c(p(c(l(K,nt),x[1]),p(c(l(et,F),-S[1]),c(l(j,N),b[1]))),-E[2]))),R[3]),c(p(p(c(p(c(l(qt,wt),b[1]),p(c(l(Gt,lt),-A[1]),c(l(At,st),E[1]))),S[2]),c(p(c(l(qt,wt),S[1]),p(c(l(Xt,Mt),-A[1]),c(l(Pt,_t),E[1]))),-b[2])),p(c(p(c(l(Gt,lt),S[1]),p(c(l(Xt,Mt),-b[1]),c(l(K,nt),E[1]))),A[2]),c(p(c(l(At,st),S[1]),p(c(l(Pt,_t),-b[1]),c(l(K,nt),A[1]))),-E[2]))),x[3]))),p(p(c(p(p(c(p(c(l(qt,wt),b[1]),p(c(l(Gt,lt),-A[1]),c(l(At,st),E[1]))),x[2]),c(p(c(l(qt,wt),x[1]),p(c(l(Wt,G),-A[1]),c(l(bt,B),E[1]))),-b[2])),p(c(p(c(l(Gt,lt),x[1]),p(c(l(Wt,G),-b[1]),c(l(et,F),E[1]))),A[2]),c(p(c(l(At,st),x[1]),p(c(l(bt,B),-b[1]),c(l(et,F),A[1]))),-E[2]))),-S[3]),c(p(p(c(p(c(l(qt,wt),S[1]),p(c(l(Xt,Mt),-A[1]),c(l(Pt,_t),E[1]))),x[2]),c(p(c(l(qt,wt),x[1]),p(c(l(Wt,G),-A[1]),c(l(bt,B),E[1]))),-S[2])),p(c(p(c(l(Xt,Mt),x[1]),p(c(l(Wt,G),-S[1]),c(l(j,N),E[1]))),A[2]),c(p(c(l(Pt,_t),x[1]),p(c(l(bt,B),-S[1]),c(l(j,N),A[1]))),-E[2]))),b[3])),p(c(p(p(c(p(c(l(Gt,lt),S[1]),p(c(l(Xt,Mt),-b[1]),c(l(K,nt),E[1]))),x[2]),c(p(c(l(Gt,lt),x[1]),p(c(l(Wt,G),-b[1]),c(l(et,F),E[1]))),-S[2])),p(c(p(c(l(Xt,Mt),x[1]),p(c(l(Wt,G),-S[1]),c(l(j,N),E[1]))),b[2]),c(p(c(l(K,nt),x[1]),p(c(l(et,F),-S[1]),c(l(j,N),b[1]))),-E[2]))),-A[3]),c(p(p(c(p(c(l(At,st),S[1]),p(c(l(Pt,_t),-b[1]),c(l(K,nt),A[1]))),x[2]),c(p(c(l(At,st),x[1]),p(c(l(bt,B),-b[1]),c(l(et,F),A[1]))),-S[2])),p(c(p(c(l(Pt,_t),x[1]),p(c(l(bt,B),-S[1]),c(l(j,N),A[1]))),b[2]),c(p(c(l(K,nt),x[1]),p(c(l(et,F),-S[1]),c(l(j,N),b[1]))),-A[2]))),E[3]))))),ct=l($,ot);return ct[ct.length-1]}return P}var T=[h,u,d];function y(p){var l=T[p.length];return l||(l=T[p.length]=a(p.length)),l.apply(void 0,p)}function _(p,l,v,c,P,x,S,b){function A(E,R,U,N,F,B){switch(arguments.length){case 0:case 1:return 0;case 2:return c(E,R);case 3:return P(E,R,U);case 4:return x(E,R,U,N);case 5:return S(E,R,U,N,F);case 6:return b(E,R,U,N,F,B)}for(var G=new Array(arguments.length),X=0;X<arguments.length;++X)G[X]=arguments[X];return p(G)}return A}function w(){for(;T.length<=o;)T.push(a(T.length));t.exports=_.apply(void 0,[y].concat(T));for(var p=0;p<=o;++p)t.exports[p]=T[p]}w()}}),eM=gn({"node_modules/cdt2d/lib/delaunay.js"(i,t){"use strict";var e=tM()[4],n=cl();t.exports=s;function r(o,a,h,u,d,m){var f=a.opposite(u,d);if(!(f<0)){if(d<u){var g=u;u=d,d=g,g=m,m=f,f=g}a.isConstraint(u,d)||e(o[u],o[d],o[m],o[f])<0&&h.push(u,d)}}function s(o,a){for(var h=[],u=o.length,d=a.stars,m=0;m<u;++m)for(var f=d[m],g=1;g<f.length;g+=2){var M=f[g];if(!(M<m)&&!a.isConstraint(m,M)){for(var T=f[g-1],y=-1,_=1;_<f.length;_+=2)if(f[_-1]===M){y=f[_];break}y<0||e(o[m],o[M],o[T],o[y])<0&&h.push(m,M)}}for(;h.length>0;){for(var M=h.pop(),m=h.pop(),T=-1,y=-1,f=d[m],w=1;w<f.length;w+=2){var p=f[w-1],l=f[w];p===M?y=l:l===M&&(T=p)}T<0||y<0||e(o[m],o[M],o[T],o[y])>=0||(a.flip(m,M),r(o,a,h,T,m,y),r(o,a,h,m,y,T),r(o,a,h,y,M,T),r(o,a,h,M,T,y))}}}}),nM=gn({"node_modules/cdt2d/lib/filter.js"(i,t){"use strict";var e=cl();t.exports=h;function n(u,d,m,f,g,M,T){this.cells=u,this.neighbor=d,this.flags=f,this.constraint=m,this.active=g,this.next=M,this.boundary=T}var r=n.prototype;function s(u,d){return u[0]-d[0]||u[1]-d[1]||u[2]-d[2]}r.locate=(function(){var u=[0,0,0];return function(d,m,f){var g=d,M=m,T=f;return m<f?m<d&&(g=m,M=f,T=d):f<d&&(g=f,M=d,T=m),g<0?-1:(u[0]=g,u[1]=M,u[2]=T,e.eq(this.cells,u,s))}})();function o(u,d){for(var m=u.cells(),f=m.length,g=0;g<f;++g){var M=m[g],T=M[0],y=M[1],_=M[2];y<_?y<T&&(M[0]=y,M[1]=_,M[2]=T):_<T&&(M[0]=_,M[1]=T,M[2]=y)}m.sort(s);for(var w=new Array(f),g=0;g<w.length;++g)w[g]=0;var p=[],l=[],v=new Array(3*f),c=new Array(3*f),P=null;d&&(P=[]);for(var x=new n(m,v,c,w,p,l,P),g=0;g<f;++g)for(var M=m[g],S=0;S<3;++S){var T=M[S],y=M[(S+1)%3],b=v[3*g+S]=x.locate(y,T,u.opposite(y,T)),A=c[3*g+S]=u.isConstraint(T,y);b<0&&(A?l.push(g):(p.push(g),w[g]=1),d&&P.push([y,T,-1]))}return x}function a(u,d,m){for(var f=0,g=0;g<u.length;++g)d[g]===m&&(u[f++]=u[g]);return u.length=f,u}function h(u,d,m){var f=o(u,m);if(d===0)return m?f.cells.concat(f.boundary):f.cells;for(var g=1,M=f.active,T=f.next,y=f.flags,_=f.cells,w=f.constraint,p=f.neighbor;M.length>0||T.length>0;){for(;M.length>0;){var l=M.pop();if(y[l]!==-g){y[l]=g;for(var v=_[l],c=0;c<3;++c){var P=p[3*l+c];P>=0&&y[P]===0&&(w[3*l+c]?T.push(P):(M.push(P),y[P]=g))}}}var x=T;T=M,M=x,T.length=0,g=-g}var S=a(_,y,d);return m?S.concat(f.boundary):S}}}),iM=gn({"node_modules/cdt2d/cdt2d.js"(i,t){var e=jv(),n=Qv(),r=eM(),s=nM();t.exports=d;function o(m){return[Math.min(m[0],m[1]),Math.max(m[0],m[1])]}function a(m,f){return m[0]-f[0]||m[1]-f[1]}function h(m){return m.map(o).sort(a)}function u(m,f,g){return f in m?m[f]:g}function d(m,f,g){Array.isArray(f)?(g=g||{},f=f||[]):(g=f||{},f=[]);var M=!!u(g,"delaunay",!0),T=!!u(g,"interior",!0),y=!!u(g,"exterior",!0),_=!!u(g,"infinity",!1);if(!T&&!y||m.length===0)return[];var w=e(m,f);if(M||T!==y||_){for(var p=n(m.length,h(f)),l=0;l<w.length;++l){var v=w[l];p.addTriangle(v[0],v[1],v[2])}return M&&r(m,p),y?T?_?s(p,0,_):p.cells():s(p,1,_):s(p,-1)}else return w}}}),Fp=iM();var _n=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var Op=1e-16,rM=1e-16,ar=new L,Bp=new L,zp=new _n(()=>({param:0,index:0})),sM=new _n(()=>new L);function oM(i,t,e,n){zp.clear(),t.length=0,e.length=0;for(let u=0,d=i.length;u<d;u++){let m=i[u];h(m.start),h(m.end)}for(let u=0,d=i.length;u<d;u++){let m=i[u];for(let f=u+1;f<d;f++){let g=i[f];m.distanceSqToLine3(g,ar,Bp)<Op*n&&h(Bp)}}let r=[];for(let u=0,d=i.length;u<d;u++){r.length=0;let m=i[u];for(let f=0,g=t.length;f<g;f++){let M=t[f],T=m.closestPointToPointParameter(M,!0);if(m.at(T,ar),M.distanceToSquared(ar)<Op*n){let y=zp.getInstance();y.param=T,y.index=f,r.push(y)}}r.sort(a);for(let f=0,g=r.length-1;f<g;f++){let M=r[f].index,T=r[f+1].index;M!==T&&e.push([M,T])}}let s=new Set,o=0;for(let u=0,d=e.length;u<d;u++){let m=e[u],f=Math.min(m[0],m[1]),g=Math.max(m[0],m[1]),M=f+","+g;s.has(M)||(s.add(M),e[o++]=m)}e.length=o;function a(u,d){return u.param-d.param}function h(u){for(let d=0;d<t.length;d++){let m=t[d];if(u===m||u.distanceToSquared(m)<rM*n)return d}return t.push(sM.getInstance().copy(u)),t.length-1}}var wo=class{constructor(){this.trianglePool=new _n(()=>new Ee),this.linePool=new _n(()=>new he),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new L,this.projOrigin=new L,this.projU=new L,this.projV=new L,this.baseTri=new Ee,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();let{normal:s,baseTri:o,projU:a,projV:h,projOrigin:u,constrainedEdges:d,linePool:m,baseIndices:f}=this;t.getNormal(s),o.copy(t),o.update(),f[0]=e,f[1]=n,f[2]=r,d.length=0;let g=m.getInstance();g.start.copy(o.a),g.end.copy(o.b);let M=m.getInstance();M.start.copy(o.b),M.end.copy(o.c);let T=m.getInstance();T.start.copy(o.c),T.end.copy(o.a),d.push(g,M,T),u.copy(o.a),a.subVectors(o.b,o.a).normalize(),h.crossVectors(s,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){let{projOrigin:n,projU:r,projV:s}=this;return ar.subVectors(t,n),e.set(ar.dot(r),ar.dot(s),0)}_from2D(t,e,n){let{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:h}=this;t.length=0,e.clear();let u=[];for(let _=0,w=a.length;_<w;_++){let p=a[_],l=s.getInstance();this._to2D(p.start,l.start),this._to2D(p.end,l.end),u.push(l)}let d=0;for(let _=0;_<3;_++){let w=this._to2D(o.points[_],ar);d=Math.max(d,Math.abs(w.x),Math.abs(w.y))}let m=[],f=[];oM(u,m,f,d);let g=[];for(let _=0,w=m.length;_<w;_++){let p=m[_];g.push([p.x,p.y])}let M=Fp(g,f,{exterior:!1}),T=new Map;for(let _=0,w=f.length;_<w;_++){let p=f[_];T.set(`${p[0]}_${p[1]}`,-1),T.set(`${p[1]}_${p[0]}`,-1)}let y=`${h[0]}_${h[1]}_${h[2]}_`;for(let _=0,w=M.length;_<w;_++){let p=M[_],[l,v,c]=p,P=e.getInstance();this._from2D(g[l][0],g[l][1],P.a),this._from2D(g[v][0],g[v][1],P.b),this._from2D(g[c][0],g[c][1],P.c),t.push(P);let x=[];n.push(x);let S=[];r.push(S);for(let b=0;b<3;b++){let A=p[b];S.push(A<3?h[A]:y+A);let E=p[(b+1)%3],R=`${A}_${E}`;if(T.has(R)){let U=T.get(R);U!==-1&&(x.push(U),n[U].push(_))}else{let U=`${E}_${A}`;T.set(U,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var aM=1e-14,Tu=new L,Vp=new L,kp=new L;function On(i,t=aM){Tu.subVectors(i.b,i.a),Vp.subVectors(i.c,i.a),kp.subVectors(i.b,i.c);let e=Tu.angleTo(Vp),n=Tu.angleTo(kp),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var wu=1e-10,Eo=1e-10,hi=new he,De=new he,ui=new L,Gp=new L,Hp=new L,ll=new Ue,Eu=new Ee,Ao=class{constructor(){this.trianglePool=new _n(()=>new ge),this.triangles=[],this.normal=new L}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){let a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(ui).dot(r))>wu)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let h=n.getInstance();h.copy(a),e.push(h)}else{t.getNormal(r);let s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){let a=n[s];a.coplanarCount=0}let r=[t.a,t.b,t.c];for(let s=0;s<3;s++){let o=(s+1)%3,a=r[s],h=r[o];t.getNormal(Gp).normalize(),ui.subVectors(h,a).normalize(),Hp.crossVectors(Gp,ui),ll.setFromNormalAndCoplanarPoint(Hp,a),this.splitByPlane(ll,t)}}else t.getPlane(ll),this.splitByPlane(ll,t)}splitByPlane(t,e){let{triangles:n,trianglePool:r}=this;Eu.copy(e),Eu.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){let a=n[s];if(!Eu.intersectsTriangle(a,hi,!0))continue;let{a:h,b:u,c:d}=a,m=0,f=-1,g=!1,M=[],T=[],y=[h,u,d];for(let _=0;_<3;_++){let w=(_+1)%3;hi.start.copy(y[_]),hi.end.copy(y[w]);let p=t.distanceToPoint(hi.start),l=t.distanceToPoint(hi.end);if(Math.abs(p)<Eo&&Math.abs(l)<Eo){g=!0;break}if(p>0?M.push(_):T.push(_),Math.abs(p)<Eo)continue;let v=!!t.intersectLine(hi,ui);!v&&Math.abs(l)<Eo&&(ui.copy(hi.end),v=!0),v&&!(ui.distanceTo(hi.start)<wu)&&(ui.distanceTo(hi.end)<wu&&(f=_),m===0?De.start.copy(ui):De.end.copy(ui),m++)}if(!g&&m===2&&De.distance()>Eo)if(f!==-1){f=(f+1)%3;let _=0;_===f&&(_=(_+1)%3);let w=_+1;w===f&&(w=(w+1)%3);let p=r.getInstance();p.a.copy(y[w]),p.b.copy(De.end),p.c.copy(De.start),On(p)||n.push(p),a.a.copy(y[_]),a.b.copy(De.start),a.c.copy(De.end),On(a)&&(n.splice(s,1),s--,o--)}else{let _=M.length>=2?T[0]:M[0];if(_===0){let c=De.start;De.start=De.end,De.end=c}let w=(_+1)%3,p=(_+2)%3,l=r.getInstance(),v=r.getInstance();y[w].distanceToSquared(De.start)<y[p].distanceToSquared(De.end)?(l.a.copy(y[w]),l.b.copy(De.start),l.c.copy(De.end),v.a.copy(y[w]),v.b.copy(y[p]),v.c.copy(De.start)):(l.a.copy(y[p]),l.b.copy(De.start),l.c.copy(De.end),v.a.copy(y[w]),v.b.copy(y[p]),v.c.copy(De.end)),a.a.copy(y[_]),a.b.copy(De.end),a.c.copy(De.start),On(l)||n.push(l),On(v)||n.push(v),On(a)&&(n.splice(s,1),s--,o--)}else m===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var Co=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Au=1e-10,cM=1e-15,lM=1e-10,hM=1e-10,Wp=new he,fs=new he,Xp=new L,qp=new L,Yp=new L,Cu=new Ue,ds=new L,hl=new L;function $p(i,t){i.getNormal(ds),t.getNormal(hl);let e=ds.dot(hl);if(Math.abs(1-Math.abs(e))>=lM)return!1;let n=ds.dot(i.a),r=ds.dot(t.a);return Math.abs(n-r)<hM}function Zp(i,t,e,n){let r=0,s=1;i.delta(Xp);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let h=o[a],u=o[(a+1)%3];qp.subVectors(u,h),Yp.crossVectors(e,qp),Cu.setFromNormalAndCoplanarPoint(Yp,h);let d=Cu.distanceToPoint(i.start),m=Cu.normal.dot(Xp);if(Math.abs(m)<cM){if(d<-Au)return null;continue}let f=-d/m;if(m>0?r=Math.max(r,f):s=Math.min(s,f),r>s+Au)return null}return s-r<Au?null:(i.at(r,n.start),i.at(s,n.end),n)}function Ru(i,t,e){let n=0;i.getNormal(ds),t.getNormal(hl);let r=[t.a,t.b,t.c];for(let o=0;o<3;o++){fs.start.copy(r[o]),fs.end.copy(r[(o+1)%3]);let a=Zp(fs,i,ds,Wp);a!==null&&(n>=e.length&&e.push(new he),e[n].copy(a),n++)}let s=[i.a,i.b,i.c];for(let o=0;o<3;o++){fs.start.copy(s[o]),fs.end.copy(s[(o+1)%3]);let a=Zp(fs,t,hl,Wp);a!==null&&(n>=e.length&&e.push(new he),e[n].copy(a),n++)}return n}var ps=new Sn,Jp=new kt,ul=new he,Pu=[],fl=new _n(()=>new he),ms=-1,gs=1,Ro=-2,Po=2,_s=0,cr=1,ml=2,dl=null;function Iu(i){dl=i}function Du(i,t,e=null){i.getMidpoint(ps.origin),i.getNormal(ps.direction),e&&(ps.origin.applyMatrix4(e),ps.direction.transformDirection(e));let n=t.raycastFirst(ps,en);return!!(n&&ps.direction.dot(n.face.normal)>0)?ms:gs}function Kp(i,t){let e=new Co,n=new Co;return fl.clear(),Jp.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Jp,{intersectsTriangles(r,s,o,a){if(!On(r)&&!On(s)){let u=($p(r,s)?Ru(r,s,Pu):0)>2;if(u||r.intersectsTriangle(s,ul,!0)){let m=i.geometry.boundsTree.resolveTriangleIndex(o),f=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(m,f,u),n.add(f,m,u),u){let g=Ru(r,s,Pu);for(let M=0;M<g;M++){let T=fl.getInstance().copy(Pu[M]);e.addIntersectionEdge(m,T),n.addIntersectionEdge(f,T)}}else{let g=fl.getInstance().copy(ul),M=fl.getInstance().copy(ul);e.addIntersectionEdge(m,g),n.addIntersectionEdge(f,M)}dl&&(dl.addEdge(ul),dl.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Lu(i,t,e=!1){switch(i){case 0:if(t===gs||t===Po&&!e)return cr;break;case 1:if(e){if(t===ms)return _s}else if(t===gs||t===Ro)return cr;break;case 2:if(e){if(t===gs||t===Ro)return cr}else if(t===ms)return _s;break;case 4:if(t===ms)return _s;if(t===gs)return cr;break;case 3:if(t===ms||t===Po&&!e)return cr;break;case 5:if(!e&&(t===gs||t===Ro))return cr;break;case 6:if(!e&&(t===ms||t===Po))return cr;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return ml}var Nu=class{constructor(t){this.triangle=new ge().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ge().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},gl=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){let{data:s}=this;s[t]||(s[t]=new Nu(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{let h=n[a].intersects;for(let u in h)r.has(u)||(r.add(u),s.push(h[u]))}};if(t!==null)o(t);else for(let a in n)o(a);return s}reset(){this.data={}}},_l=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new gl,this.triangleIntersectsB=new gl,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){let{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Iu(this))}complete(){this.enabled&&Iu(null)}};var xn=new kt,lr=new kt,sn=new kt,ki=new Ht,Bn=new ge,hr=new ge,zn=new ge,Vi=new ge,ur=[],Qn=[],xl=new Set,jp=new L,Qp=new L,tm=new _n(()=>new ge),em=new L,yl=[];function rm(i,t,e,n,r,s={}){let{useGroups:o=!0}=s,{aIntersections:a,bIntersections:h}=Kp(i,t),u=[],d=null,m;return m=o?0:-1,im(i,t,a,e,!1,r,m),nm(i,t,a,e,!1,n,r,m),e.findIndex(g=>g!==6&&g!==5)!==-1&&(r.forEach(g=>g.clearIndexMap()),m=o?i.geometry.groups.length||1:-1,im(t,i,h,e,!0,r,m),nm(t,i,h,e,!0,n,r,m)),r.forEach(g=>g.clearIndexMap()),ur.length=0,{groups:u,materials:d}}function nm(i,t,e,n,r,s,o,a=0){xn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),lr.copy(xn).invert(),r?sn.copy(xn):sn.identity();let h=sn.determinant()<0;ki.getNormalMatrix(sn).multiplyScalar(h?-1:1);let u=i.geometry.groupIndices,d=i.geometry.index,m=i.geometry.attributes.position,f=t.geometry.boundsTree,g=t.geometry.index,M=t.geometry.attributes.position,T=e.ids;for(let y=0,_=T.length;y<_;y++){let w=T[y],p=a===-1?0:u[w]+a,l=3*w,v=l+0,c=l+1,P=l+2;d&&(v=d.getX(v),c=d.getX(c),P=d.getX(P)),Bn.a.fromBufferAttribute(m,v),Bn.b.fromBufferAttribute(m,c),Bn.c.fromBufferAttribute(m,P),r&&(Bn.a.applyMatrix4(xn),Bn.b.applyMatrix4(xn),Bn.c.applyMatrix4(xn)),s.reset(),s.initialize(Bn,v,c,P),yl.length=0,tm.clear(),Bn.getNormal(Qp);let x=e.coplanarSet.get(w);if(x)for(let E of x){let R=3*E,U=R+0,N=R+1,F=R+2;g&&(U=g.getX(U),N=g.getX(N),F=g.getX(F));let B=tm.getInstance();B.a.fromBufferAttribute(M,U),B.b.fromBufferAttribute(M,N),B.c.fromBufferAttribute(M,F),r||(B.a.applyMatrix4(lr),B.b.applyMatrix4(lr),B.c.applyMatrix4(lr)),yl.push(B)}if(s.addConstraintEdge){let E=e.getIntersectionEdges(w);if(E)for(let R of E)s.addConstraintEdge(R);s.triangulate()}else{let R=e.intersectionSet.get(w);for(let U=0,N=R.length;U<N;U++){let F=R[U],B=x&&x.has(F),G=3*F,X=G+0,it=G+1,j=G+2;g&&(X=g.getX(X),it=g.getX(it),j=g.getX(j)),hr.a.fromBufferAttribute(M,X),hr.b.fromBufferAttribute(M,it),hr.c.fromBufferAttribute(M,j),r||(hr.a.applyMatrix4(lr),hr.b.applyMatrix4(lr),hr.c.applyMatrix4(lr)),s.splitByTriangle(hr,B)}}let{triangles:S,triangleIndices:b=[],triangleConnectivity:A=[]}=s;for(let E=0,R=o.length;E<R;E++)o[E].initInterpolatedAttributeData(i.geometry,sn,ki,v,c,P);xl.clear();for(let E=0,R=S.length;E<R;E++){if(xl.has(E))continue;let U=S[E],N=r?null:xn,F=null;U.getMidpoint(jp);for(let B=0,G=yl.length;B<G;B++){let X=yl[B];if(X.containsPoint(jp)){X.getNormal(em),F=Qp.dot(em)>0?Po:Ro;break}}F===null&&(F=Du(U,f,N)),ur.length=0,Qn.length=0;for(let B=0,G=n.length;B<G;B++){let X=Lu(n[B],F,r);X!==ml&&(ur.push(X),Qn.push(o[B]))}if(Qn.length!==0){let B=[E];for(;B.length>0;){let G=B.pop();if(xl.has(G))continue;xl.add(G);let X=b[G],it=null,j=null,nt=null;X&&(it=X[0],j=X[1],nt=X[2]);let _t=S[G];Bn.getBarycoord(_t.a,Vi.a),Bn.getBarycoord(_t.b,Vi.b),Bn.getBarycoord(_t.c,Vi.c);for(let Mt=0,ut=Qn.length;Mt<ut;Mt++){let Z=Qn[Mt],K=ur[Mt]===_s,st=h!==K;Z.appendInterpolatedAttributeData(p,Vi.a,it,st),st?(Z.appendInterpolatedAttributeData(p,Vi.c,nt,st),Z.appendInterpolatedAttributeData(p,Vi.b,j,st)):(Z.appendInterpolatedAttributeData(p,Vi.b,j,st),Z.appendInterpolatedAttributeData(p,Vi.c,nt,st))}}}}}return T.length}function im(i,t,e,n,r,s,o=0){xn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?sn.copy(xn):sn.identity();let a=sn.determinant()<0;ki.getNormalMatrix(sn).multiplyScalar(a?-1:1);let h=t.geometry.boundsTree,u=i.geometry.groupIndices,d=i.geometry.index,f=i.geometry.attributes.position,g=[],M=i.geometry.halfEdges,T=new Set(e.ids),y=us(i.geometry);for(let _=0;_<y&&T.size!==y;_++){if(T.has(_))continue;T.add(_),g.push(_);let w=3*_,p=w+0,l=w+1,v=w+2;d&&(p=d.getX(p),l=d.getX(l),v=d.getX(v)),zn.a.fromBufferAttribute(f,p),zn.b.fromBufferAttribute(f,l),zn.c.fromBufferAttribute(f,v),r&&(zn.a.applyMatrix4(xn),zn.b.applyMatrix4(xn),zn.c.applyMatrix4(xn));let c=Du(zn,h,r?null:xn);ur.length=0,Qn.length=0;for(let P=0,x=n.length;P<x;P++){let S=Lu(n[P],c,r);S!==ml&&(ur.push(S),Qn.push(s[P]))}for(;g.length>0;){let P=g.pop();for(let x=0;x<3;x++){let S=M.getSiblingTriangleIndex(P,x);S!==-1&&!T.has(S)&&(g.push(S),T.add(S))}if(Qn.length!==0){let x=3*P,S=x+0,b=x+1,A=x+2;d&&(S=d.getX(S),b=d.getX(b),A=d.getX(A));let E=o===-1?0:u[P]+o;if(zn.a.fromBufferAttribute(f,S),zn.b.fromBufferAttribute(f,b),zn.c.fromBufferAttribute(f,A),!On(zn))for(let R=0,U=Qn.length;R<U;R++){let N=Qn[R],G=ur[R]===_s!==a;N.appendIndexFromGeometry(i.geometry,sn,ki,E,S,G),G?(N.appendIndexFromGeometry(i.geometry,sn,ki,E,A,G),N.appendIndexFromGeometry(i.geometry,sn,ki,E,b,G)):(N.appendIndexFromGeometry(i.geometry,sn,ki,E,b,G),N.appendIndexFromGeometry(i.geometry,sn,ki,E,A,G))}}}}}function dM(i){return i=~~i,i+4-i%4}var vl=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=rl()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(dM(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}};var on=new L,Uu=new L,Fu=new L,Ou=new L,Ml=new re,pM=new re,mM=new re,gM=new re;function _M(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function sm(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}var Do=class extends vl{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},Sl=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){let a=e[s],h=r[a],u=h.array.constructor;n[a]||(n[a]=new Do(u)),n[a].setType(u),n[a].itemSize=h.itemSize,n[a].normalized=h.normalized}for(let s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){let{attributeData:a,interpolatedFields:h}=this,{attributes:u}=t;for(let d in a){let m=u[d];if(!m)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let f,g,M;if(d==="position"?(f=Uu.fromBufferAttribute(m,r).applyMatrix4(e),g=Fu.fromBufferAttribute(m,s).applyMatrix4(e),M=Ou.fromBufferAttribute(m,o).applyMatrix4(e)):d==="normal"?(f=Uu.fromBufferAttribute(m,r).applyNormalMatrix(n),g=Fu.fromBufferAttribute(m,s).applyNormalMatrix(n),M=Ou.fromBufferAttribute(m,o).applyNormalMatrix(n)):d==="tangent"?(f=Uu.fromBufferAttribute(m,r).transformDirection(e),g=Fu.fromBufferAttribute(m,s).transformDirection(e),M=Ou.fromBufferAttribute(m,o).transformDirection(e)):(f=pM.fromBufferAttribute(m,r),g=mM.fromBufferAttribute(m,s),M=gM.fromBufferAttribute(m,o)),!h[d])h[d]=[f.clone(),g.clone(),M.clone()];else{let T=h[d];T[0].copy(f),T[1].copy(g),T[2].copy(M)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){let{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:h,invertedIndexMap:u}=this;for(;s.length<=t;)s.push(new Do(Uint32Array));let d=r?u:h,m=s[t];if(n!==null&&d.has(n))m.push(d.get(n));else{d.set(n,o.position.count),m.push(o.position.count);for(let f in a){let g=o[f],M=f==="normal"||f==="tangent",T=r&&M,y=g.itemSize,[_,w,p]=a[f];_M(_,w,p,e,Ml,M,T),sm(Ml,y,g)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){let{groupIndices:a,attributeData:h,forwardIndexMap:u,invertedIndexMap:d}=this;for(;a.length<=r;)a.push(new Do(Uint32Array));let m=o?d:u,f=a[r];if(s!==null&&m.has(s))f.push(m.get(s));else{m.set(s,h.position.count),f.push(h.position.count);let{attributes:g}=t;for(let M in h){let T=h[M],y=g[M];if(!y)throw new Error(`CSG Operations: Attribute ${M} not available on geometry.`);let _=y.itemSize;M==="position"?(on.fromBufferAttribute(y,s).applyMatrix4(e),T.push(on.x,on.y,on.z)):M==="normal"?(on.fromBufferAttribute(y,s).applyNormalMatrix(n),o&&on.multiplyScalar(-1),T.push(on.x,on.y,on.z)):M==="tangent"?(on.fromBufferAttribute(y,s).transformDirection(e),o&&on.multiplyScalar(-1),T.push(on.x,on.y,on.z)):(Ml.fromBufferAttribute(y,s),sm(Ml,_,T))}}}buildGeometry(t,e){let n=!1,{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(let d in s){let m=s[d],{type:f,itemSize:g,normalized:M,length:T,count:y}=m,_=m.array.buffer,w=o[d];(!w||w.count<y||w.array.type!==f)&&(w=new Pe(new f(T),g,M),t.setAttribute(d,w),n=!0),w.array.set(new f(_,0,T),0),w.needsUpdate=!0}let h=r.reduce((d,m)=>m.count+d,0);(!t.index||a.count<h||a.array.type!==Uint32Array)&&(t.setIndex(new Pe(new Uint32Array(h),1)),n=!0),t.clearGroups();let u=0;for(let d=0,m=Math.min(e.length,r.length);d<m;d++){let{index:f,materialIndex:g}=e[d],{count:M}=r[f],T=r[f].array.buffer;M!==0&&(t.index.array.set(new Uint32Array(T,0,M),u),t.addGroup(u,M,g),u+=M)}t.setDrawRange(0,u),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function om(i,t){for(let e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function am(i,t){let e=[];for(let n=0,r=i.length;n<r;n++){let s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function cm(i,t){let e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){let o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function lm(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function Bu(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var bl=class{get useCDTClipping(){return this.triangleSplitter instanceof wo}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new wo:new Ao)}constructor(){this.triangleSplitter=new Ao,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new _l}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new or){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:h,useGroups:u,consolidateGroups:d,removeUnusedMaterials:m,debug:f}=this;for(;a.length<r.length;)a.push(new Sl);r.forEach((p,l)=>{a[l].initFromGeometry(t.geometry,h),om(p.geometry,h)}),f.init(),rm(t,e,n,o,a,{useGroups:u}),f.complete();let g=this.getGroupRanges(t.geometry),M=Bu(g,t.material),T=this.getGroupRanges(e.geometry),y=Bu(T,e.material);T.forEach(p=>p.materialIndex+=M.length);let _=[...M,...y],w=[...g,...T].map((p,l)=>({...p,index:l}));return u?u&&d&&(w=am(w,_),w.sort((p,l)=>p.materialIndex-l.materialIndex)):w=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((p,l)=>{let v=p.geometry;a[l].buildGeometry(v,w),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),u?(p.material=_,d&&lm(v.groups),m&&(p.material=cm(v.groups,_))):p.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new or){t.updateMatrixWorld(!0);let n=(s,o)=>{let a=s.children;for(let h=0,u=a.length;h<u;h++){let d=a[h];d.isOperationGroup?n(d,o):o(d)}},r=s=>{let o=s.children,a=!1;for(let u=0,d=o.length;u<d;u++){let m=o[u];a=r(m)||a}let h=s.isDirty();if(h&&s.markUpdated(),a&&!s.isOperationGroup){let u;return n(s,d=>{u?u=this.evaluate(u,d,d.operation):u=this.evaluate(s,d,d.operation)}),s._cachedGeometry=u.geometry,s._cachedMaterials=u.material,!0}else return a||h};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};function yM(){let i=new bl;i.attributes=["position","normal","uv"];let t=(h,u=0,d=0,m=0,f=0)=>{let g=new or(h);return g.position.set(u,d,m),g.rotation.x=f,g.updateMatrixWorld(),g},e=t(new Jr(150,16,100,4,5),0,8,0),n=t(new bi(30,32,26,64),-23,29,0),r=t(new Hs(30,64,32,0,Math.PI*2,0,Math.PI/2).scale(1,.22,1),-23,42,0),s=t(new Jr(74,10,7,3,2.5),33,21,-16),o=t(new Jr(74,10,7,3,2.5),33,21,16);e=i.evaluate(e,n,0),e=i.evaluate(e,r,0),e=i.evaluate(e,s,0),e=i.evaluate(e,o,0);for(let[h,u]of[[-63,-38],[-63,38],[60,-36],[60,36]])e=i.evaluate(e,t(new bi(4.6,4.6,40,40),h,8,u),1),e=i.evaluate(e,t(new bi(8.6,4.6,5.2,40),h,16-2.4,u),1);e=i.evaluate(e,t(new bi(12,12,20,48),-23,42,0),1);let a=e.geometry;return a.computeVertexNormals(),a}function hm(i,t=512){let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d");i(n,t);let r=new zs(e);return r.wrapS=r.wrapT=Ir,r}function zu(i,t){return hm((e,n)=>{e.fillStyle="#808080",e.fillRect(0,0,n,n);for(let r=0;r<n*n/(i*i)*2.2;r++){let s=Math.floor(128+(Math.random()-.5)*t*255);e.fillStyle=`rgb(${s},${s},${s})`,e.beginPath(),e.arc(Math.random()*n,Math.random()*n,i*(.4+Math.random()*.8),0,7),e.fill()}})}function vM(i,t){return hm((e,n)=>{e.fillStyle=`rgb(${i},${i},${i})`,e.fillRect(0,0,n,n);for(let r=0;r<9e3;r++){let s=Math.floor(i+(Math.random()-.5)*t);e.fillStyle=`rgb(${s},${s},${s})`,e.fillRect(Math.random()*n,Math.random()*n,2.2,2.2)}})}var um={9005:789518,3020:10556425,7040:10199718,9003:15724780,5010:20348};function MM(){let i=zu(2.6,1),t=zu(1.3,.5),e=zu(1,.22);i.repeat.set(2,2),t.repeat.set(3,3),e.repeat.set(4,4);let n=vM(215,80);return n.repeat.set(2,2),{F0:new Ti({color:13617853,roughness:1,roughnessMap:n,bumpMap:i,bumpScale:2.4,envMapIntensity:.4}),F1:new Ti({color:13815494,roughness:.86,bumpMap:t,bumpScale:1.1,envMapIntensity:.55}),F2:new Ti({color:um[9005],roughness:.34,metalness:0,clearcoat:.85,clearcoatRoughness:.22,envMapIntensity:1.15}),F3:new Ti({color:15724008,roughness:.5,bumpMap:e,bumpScale:.25,envMapIntensity:.85})}}function fm(i){let t=new Cc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.toneMapping=Qs,t.toneMappingExposure=.98,t.outputColorSpace=je,t.shadowMap.enabled=!0,t.shadowMap.type=Ua,i.appendChild(t.domElement);let e=new ji;e.background=new Zt(16447991);let n=new Yr(t);e.environment=n.fromScene(new Nc,.04).texture;let r=new He(30,1,10,3e3);r.position.set(215,170,260);let s=new $s(16777215,1.5);s.position.set(140,260,120),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.radius=7;let o=170;Object.assign(s.shadow.camera,{left:-o,right:o,top:o,bottom:-o,far:800}),e.add(s,new Js(16777215,.28));let a=MM(),h=new _e(yM(),a.F0);h.castShadow=h.receiveShadow=!0,h.position.y=0,e.add(h);let u=new _e(new ks(300,64),new Ws({opacity:.16}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u);let d=new Lc(r,t.domElement);d.target.set(0,26,0),d.enablePan=!1,d.minDistance=180,d.maxDistance=520,d.minPolarAngle=.35,d.maxPolarAngle=1.45,d.enableDamping=!0,d.dampingFactor=.06,d.autoRotate=!0,d.autoRotateSpeed=.7,t.domElement.addEventListener("pointerdown",()=>{d.autoRotate=!1});function m(){let T=i.clientWidth,y=Math.max(300,Math.round(T*.72));t.setSize(T,y),r.aspect=T/y,r.updateProjectionMatrix()}m(),addEventListener("resize",m);let f=!0,g=!1;return new IntersectionObserver(T=>{f=T[0].isIntersecting},{threshold:.05}).observe(i),(function T(){requestAnimationFrame(T),f&&!g&&(d.update(),t.render(e,r))})(),{stato(T){h.material=a[T],d.update(),t.render(e,r)},pausa(){g=!0},riprendi(){g=!1},fotogramma(){d.update(),t.render(e,r)},ral(T){a.F2.color.set(um[T]);let y=T==="9003"||T==="7040";a.F2.clearcoatRoughness=y?.3:.22}}}window.DPG3D={avviaScena:fm};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
