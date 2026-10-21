const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C_-mC7RC.js","./palette-BLfAqt5k.js","./three.core-WfT5IgKt.js","./noise-CKL401Yw.js","./index-BUR019gN.css"])))=>i.map(i=>d[i]);
import{a as e,c as t,l as n,s as r,t as i,u as a}from"./noise-CKL401Yw.js";import{$ as o,A as s,F as c,O as l,Y as u,cn as d,d as f,ft as p,gn as m,kn as h,l as g,ln as _,lt as v,o as y,on as b,pn as x,st as S,w as C}from"./three.core-WfT5IgKt.js";import{a as w,i as T,n as E,r as D}from"./index-C_-mC7RC.js";new h;var O=n=>{let a=new i(n.seed),o=n.res??120,s=o+1,c=new Float32Array(s*s),l=new Float32Array(s*s*3),d=[];for(let e=0;e<(n.shoulders??3);e++){let t=a.n1(e*7.3+1)*Math.PI*2+e*2.1,n=.35+.25*Math.abs(a.n1(e*3.1+5));d.push([Math.cos(t)*n,Math.sin(t)*n,.45+.25*Math.abs(a.n1(e*1.7+9))])}for(let e=0;e<s;e++)for(let t=0;t<s;t++){let r=t/o*2-1,i=e/o*2-1,u=r+a.n2(r*1.3+3,i*1.3)*.18,f=i+a.n2(r*1.3,i*1.3+7)*.18,p=Math.hypot(u,f);if(n.faces){let e=n.faces,t=Math.atan2(f,u)+.4+p*.6,r=2*Math.PI/e,i=(t%r+r)%r-r/2;p=p*Math.cos(i)/Math.cos(r/2),p=Math.min(p*1.1,Math.hypot(u,f)*1.45)}let m=Math.max(0,1-p)**1.6;for(let[e,t,n]of d)m=Math.max(m,n*Math.max(0,1-Math.hypot(u-e,f-t)*1.9)**1.5);let h=0,g=.5,_=2.2;for(let e=0;e<5;e++){let t=1-Math.abs(a.n2(u*_+e*11,f*_+e*7));h+=t*t*g,g*=.5,_*=2.05}let v=m*(.55+h*.9)*n.height;c[e*s+t]=v-(1-m)*n.height*.15;let y=(e*s+t)*3;l[y]=n.x+r*n.size,l[y+1]=n.y+c[e*s+t],l[y+2]=n.z+i*n.size}let p=n.rock??new f(4012358),m=n.rockLit??new f(7168607),g=n.snow??new f(15922427),_=n.snowLine??.45,v=new e,y=2*n.size/o,b=(e,t,n)=>{let r=c[t*s+Math.max(0,e-1)],i=c[t*s+Math.min(o,e+1)],a=c[Math.max(0,t-1)*s+e],l=c[Math.min(o,t+1)*s+e];return n.set(r-i,2*y,a-l).normalize()},x=(e,t,i,o)=>{let l=c[t*s+e]/n.height,u=a.n2(e*.31,t*.31)*.5+a.n2(e*.07,t*.07);o.copy(p).lerp(m,Math.max(0,Math.min(1,.45+u*.5)));let d=(i.y-(n.snowSlope??.48)+u*.08)/.18,f=(l-(1-_)+u*.06)/.08,h=Math.max(0,Math.min(1,d))*Math.max(0,Math.min(1,f));return o.lerp(g,h),h>.5?r.snow:r.rock},S=[new h,new h,new h,new h],C=[new h,new h,new h,new h],w=[new f,new f,new f,new f],T=[0,0,0,0],E=[[0,0],[1,0],[1,1],[0,1]];for(let e=0;e<o;e++)for(let t=0;t<o;t++){for(let n=0;n<4;n++){let r=t+E[n][0],i=e+E[n][1],a=(i*s+r)*3;S[n].set(l[a],l[a+1],l[a+2]),b(r,i,C[n]),T[n]=x(r,i,C[n],w[n])}v.surf=T[0]===T[2]?T[0]:r.rock,v.glow=0;let i=e=>.62+.38*Math.min(1,e/n.height+.2);v.triNC(S[0],S[2],S[1],C[0],C[2],C[1],w[0],w[2],w[1],i(S[0].y-n.y),i(S[2].y-n.y),i(S[1].y-n.y)),v.triNC(S[0],S[3],S[2],C[0],C[3],C[2],w[0],w[3],w[2],i(S[0].y-n.y),i(S[3].y-n.y),i(S[2].y-n.y))}let D=new u(v.build(),t());return D.frustumCulled=!1,D},k=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,A=`
uniform vec3 uSunDir;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 top = vec3(0.025, 0.03, 0.13);
  vec3 high = vec3(0.12, 0.06, 0.3);
  vec3 mid = vec3(0.55, 0.14, 0.36);
  vec3 low = vec3(1.0, 0.42, 0.18);
  vec3 col = mix(low, mid, smoothstep(-0.01, 0.05, y));
  col = mix(col, high, smoothstep(0.04, 0.14, y));
  col = mix(col, top, smoothstep(0.12, 0.34, y));
  float sd = max(dot(d, uSunDir), 0.0);
  col += vec3(1.0, 0.5, 0.2) * (pow(sd, 10.0) * 0.45 + pow(sd, 90.0) * 0.9 + pow(sd, 1400.0) * 1.8);
  col = mix(col, vec3(1.0, 0.97, 0.88), smoothstep(0.99935, 0.9997, sd));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,j=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,M=`
uniform vec3 uSunDir;
uniform vec3 uCam;
uniform vec3 uHaze;
varying vec3 vW;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) { s += n(p) * a; p *= 2.03; a *= 0.5; }
  return s;
}
float fbm4(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) { s += n(p) * a; p *= 2.1; a *= 0.5; }
  return s;
}
float cloud(vec2 p) {
  vec2 w = vec2(fbm4(p * 0.5 + 3.1), fbm4(p * 0.5 + 7.7));
  return fbm4(p + w * 1.4);
}
void main() {
  vec2 p = vW.xz * vec2(0.0021, 0.0034);
  float c = cloud(p);
  vec2 sd = normalize(uSunDir.xz);
  float c2 = cloud(p + sd * 0.07);
  float puff = smoothstep(0.3, 0.62, c);
  // the side of each billow facing the sun is lit, the far side in shadow
  float lightK = clamp((c - c2) * 5.0 + 0.5, 0.0, 1.0);
  vec3 V = normalize(vW - uCam);
  float dist = length(vW.xz - uCam.xz);
  float toward = pow(max(dot(normalize(vec3(V.x, 0.0, V.z)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z))), 0.0), 3.0) * smoothstep(400.0, 5000.0, dist);
  vec3 shadowC = vec3(0.12, 0.08, 0.24);
  vec3 litC = mix(vec3(0.62, 0.34, 0.5), vec3(1.0, 0.55, 0.3), toward);
  vec3 top = mix(shadowC, litC, lightK);
  vec3 col = mix(vec3(0.02, 0.014, 0.06), top, puff);
  col += vec3(1.0, 0.62, 0.36) * pow(puff * lightK, 3.0) * toward * 0.5;
  // far off the cloud melts into the same glow as the sky at the horizon
  float sdv = max(dot(normalize(vec3(V.x, 0.0, V.z)), normalize(uSunDir)), 0.0);
  vec3 hz = vec3(1.0, 0.42, 0.18) * 0.92 + vec3(1.0, 0.5, 0.2) * (pow(sdv, 10.0) * 0.45 + pow(sdv, 90.0) * 0.9);
  col = mix(col, mix(uHaze, hz, 0.7), smoothstep(1800.0, 14000.0, dist));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,N=(e,n,a,o,s)=>{let c=new i(s),d=[];for(let e=a-320;e<a-8;e+=8)d.push(e);for(let e=a-8;e<a-.5;e+=.35)d.push(e);d.push(a-.3,a-.12,a);let p=[],m=[],h=[],g=new f(1380636),_=new f(4600384),v=new f;for(let t of d){let i=a-t;for(let a=0;a<40;a++){let s=a/40*Math.PI*2,l=Math.cos(s),u=Math.sin(s),d=o*(1+i*.01+(i/320)**2*3);d*=1+c.n2(l*1.3+5,t*.04)*.26+c.n2(l*3.1+u*2.2,t*.09)*.1+c.n2(l*7+u*5,t*.4)*.03,d*=1+c.n2(u*1.2+9,t*.08)*.16,i<.6&&(d*=.86+i*.23),p.push(e+l*d,t+(i<.15?c.n2(l*4,u*4)*.08:0),n+u*d),v.copy(g).lerp(_,Math.max(0,Math.min(1,.35+c.n2(l*2+t*.02,u*2)*.55))),m.push(v.r,v.g,v.b),h.push(i<.4?1:.85,r.rock,0)}}let b=p.length/3;p.push(e,a+.06,n),m.push(_.r,_.g,_.b),h.push(1,r.rock,0);let x=[],S=d.length;for(let e=0;e<S-1;e++)for(let t=0;t<40;t++){let n=e*40+t,r=e*40+(t+1)%40,i=(e+1)*40+(t+1)%40,a=(e+1)*40+t;x.push(n,i,r,n,a,i)}for(let e=0;e<40;e++)x.push(b,(S-1)*40+(e+1)%40,(S-1)*40+e);let C=new y;C.setAttribute(`position`,new l(p,3)),C.setAttribute(`color`,new l(m,3)),C.setAttribute(`aux`,new l(h,3)),C.setIndex(x),C.computeVertexNormals();let w=new u(C,t());return w.frustumCulled=!1,w},P=e=>{let t=(t,n,r=0,i=0)=>e[t].rotation.set(n,r,i);t(1,.08,0,0),t(2,.22,0,.02),t(3,.12,-.05,0),t(4,-.18),t(5,-.22,.05,0),t(9,-2.55,.15,-.125),t(10,-.35),t(11,-.2),t(6,-1.2,-.2,.065),t(7,-.9),t(8,-.2),t(15,-1.45,0,-.08),t(16,1.55),t(17,-.25),t(12,.62,0,.1),t(13,.75),t(14,.55)},F=e=>{let t=new URLSearchParams(location.search),n=t.get(`anim`)??`run`,r=Number(t.get(`cols`)??8),i=Number(t.get(`speed`)??14),s=document.getElementById(`gl`);for(let e of[`vignette`,`danger`,`flash`,`ui`,`fx2d`])document.getElementById(e)?.remove();let l=new a({canvas:s,antialias:!0,preserveDrawingBuffer:!0});l.outputColorSpace=b,l.setPixelRatio(1),l.setSize(window.innerWidth,window.innerHeight,!1),l.setClearColor(10466520,1),l.setScissorTest(!0);let f=new d;f.add(new c(16770774,4865914,1.3));let p=new C(16773600,2.6);p.position.set(2.2,3.2,-3.4),f.add(p);let m=new C(9417983,1);m.position.set(-3,.5,-2),f.add(m);let g=new E(T(e));f.add(g.group);let _=n===`climb`,y=new u(new v(30,30),new o({color:_?9080732:10129274}));_?(y.position.set(0,0,.3),y.rotation.y=Math.PI):y.rotation.x=-Math.PI/2,f.add(y);let x={mode:_?`climb`:`run`,air:!1,vh:0,phase:0,speed:i,lean:0,idle:!1,alive:!0,falling:!1,chute:!1,dazed:!1,celebrate:0,time:1,curve:0,caught:0,land:0,boost:0},w=window.innerWidth,D=window.innerHeight,O=w/r,k=D/2,A=new S(30,O/k,.05,100),j=_?[{p:new h(4.6,1.3,-.4),t:new h(0,1.3,.05)},{p:new h(.5,-.6,-5.6),t:new h(0,1.35,.2)}]:[{p:new h(3.6,1,.3),t:new h(0,.9,.3)},{p:new h(.6,2.3,-4.6),t:new h(0,.9,1.2)}];for(let e=0;e<2;e++)for(let t=0;t<r;t++){x.phase=t/r,g.animate(1,x),g.group.updateMatrixWorld(!0),A.position.copy(j[e].p),A.lookAt(j[e].t),A.updateProjectionMatrix();let n=Math.round(t*O),i=Math.round((1-e)*k);l.setViewport(n,i,Math.round(O),Math.round(k)),l.setScissor(n,i,Math.round(O),Math.round(k)),l.render(f,A)}window.__ready=!0,window.__frames=99},I=async()=>{let e=new URLSearchParams(location.search),t=Number(e.get(`zone`)??0),r=(e.get(`kinds`)??`boulder,log,crevasse,roller,roof,rockfall,eagle,bird,stalagmite,crystal,hole,spur,drip,icicle,slab,plankgap`).split(`,`),i=Number(e.get(`cols`)??8),{hazardPreview:s}=await w(async()=>{let{hazardPreview:e}=await import(`./index-C_-mC7RC.js`).then(e=>e.t);return{hazardPreview:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url),{paletteOf:l}=await w(async()=>{let{paletteOf:e}=await import(`./palette-BLfAqt5k.js`).then(e=>e.i);return{paletteOf:e}},__vite__mapDeps([1,2]),import.meta.url),f=l(t),p=document.getElementById(`gl`);for(let e of[`vignette`,`danger`,`flash`,`ui`,`fx2d`])document.getElementById(e)?.remove();let m=new a({canvas:p,antialias:!0,preserveDrawingBuffer:!0});m.outputColorSpace=b,m.setPixelRatio(1),m.setSize(window.innerWidth,window.innerHeight,!1),m.setClearColor(f.fog,1),m.setScissorTest(!0);let h=n;h.uSunDir.value.set(.4,.75,-.55).normalize(),h.uSunColor.value.copy(f.sun).multiplyScalar(f.sunIntensity*.42),h.uSky.value.copy(f.hemiSky).multiplyScalar(f.hemiIntensity*.55),h.uGround.value.copy(f.hemiGround).multiplyScalar(f.hemiIntensity*.5),h.uRim.value.copy(f.sunGlow),h.uGlow.value=1.3;let g=Math.ceil(r.length/i),_=window.innerWidth/i,y=window.innerHeight/g,x=new S(40,_/y,.05,200);for(let e=0;e<r.length;e++){let n=r[e],a=new d,l=new u(new v(40,40),new o({color:n===`hole`||n===`stalagmite`||n===`crystal`||n===`spur`||n===`drip`?f.rockDark:f.ground}));l.rotation.x=-Math.PI/2,l.position.y=-.005,n!==`crevasse`&&n!==`hole`&&n!==`plankgap`&&a.add(l),a.add(new c(f.hemiSky,f.hemiGround,1.2));let p=n===`log`||n===`crevasse`||n===`hole`||n===`slab`||n===`plankgap`;a.add(s(n,t,p?2.2:n===`boulder`||n===`roof`||n===`stalagmite`||n===`crystal`||n===`spur`?1.6:1));let h=n===`eagle`||n===`bird`;x.position.set(1.6,h?1.9:2.3,-4.2),x.lookAt(0,h?1.15:n===`roller`||n===`rockfall`||n===`drip`?.2:.55,0),x.updateProjectionMatrix();let b=Math.round(e%i*_),S=Math.round((g-1-Math.floor(e/i))*y);m.setViewport(b,S,Math.round(_),Math.round(y)),m.setScissor(b,S,Math.round(_),Math.round(y)),m.setClearColor(f.fog,1),m.clear(),m.render(a,x)}window.__ready=!0,window.__frames=99},L=(e,t=`pip`)=>{if(e===`anim`)return F(t);if(e===`hazards`){I();return}let r=e===`iconscene`||e===`iconbg`||e===`iconfg`||e===`featurebg`;document.documentElement.style.background=`transparent`,document.body.style.background=`transparent`,document.getElementById(`stage`).style.background=`transparent`;for(let e of[`vignette`,`danger`,`flash`,`ui`,`fx2d`])document.getElementById(e)?.remove();let i=document.getElementById(`gl`),l=new a({canvas:i,antialias:!0,alpha:!r||e===`iconfg`,preserveDrawingBuffer:!0});l.outputColorSpace=b,l.setClearColor(0,0),l.setPixelRatio(window.devicePixelRatio||1),l.setSize(window.innerWidth,window.innerHeight,!1);let y=new d,w=new S(30,window.innerWidth/window.innerHeight,.05,9e3),L=new c(16770774,4865914,1.25);y.add(L);let R=new C(16773600,3.1);R.position.set(2.2,3.2,3.4);let z=new C(16751210,2.4);z.position.set(-3,1.5,-2.5);let B=new C(9417983,.9);B.position.set(-3,.5,2),y.add(R,z,B);let V=new URLSearchParams(location.search).get(`fine`)===`1`||r;D(V?.0062:.0145);let H=new E(T(t));y.add(H.group,H.scarf.mesh);let U={mode:`run`,air:!1,vh:0,phase:0,speed:0,lean:0,idle:!0,alive:!0,falling:!1,chute:!1,dazed:!1,celebrate:0,time:1.3,curve:0,caught:0,land:0,boost:0},W=new h(0,1.3,0),G=new h(-9,2.5,-4);if(r){let t=e===`iconbg`||e===`iconfg`,r=new h(-.05,.03,-1).normalize(),i=new u(new x(8e3,48,24),new _({vertexShader:k,fragmentShader:A,side:1,depthWrite:!1,uniforms:{uSunDir:{value:r}}}));if(i.renderOrder=-10,e!==`iconfg`){y.add(i);let t=new u(new v(24e3,24e3,1,1),new _({vertexShader:j,fragmentShader:M,uniforms:{uSunDir:{value:r},uCam:{value:e===`featurebg`?new h(-.6,1.55,5.6):new h(.5,1.6,5)},uHaze:{value:new f(.9,.36,.22)}}}));t.rotation.x=-Math.PI/2,t.position.y=-260,y.add(t),y.add(O({x:-2600,y:-1500,z:-8200,size:2100,height:2500,seed:7,res:150,snowSlope:.3,snowLine:.55})),y.add(O({x:1150,y:-1700,z:-6400,size:1800,height:2800,seed:17,res:170,faces:4,snowSlope:.28,snowLine:.6,shoulders:2})),y.add(O({x:2300,y:-1500,z:-9800,size:2500,height:2300,seed:13,res:120,snowSlope:.32,snowLine:.5})),y.add(O({x:300,y:-1500,z:-12500,size:2600,height:2200,seed:21,res:110,snowSlope:.32,snowLine:.5})),y.add(O({x:-6800,y:-1500,z:-11e3,size:2600,height:1900,seed:5,res:110,snowSlope:.32,snowLine:.5})),y.add(O({x:6600,y:-1500,z:-12e3,size:2600,height:2e3,seed:9,res:110,snowSlope:.32,snowLine:.5})),y.add(N(-3.2,-1.2,-.95,1.5,31)),y.add(N(3.8,-3.6,-1.7,1.8,44))}y.fog=new s(new f(13656186),900,11e3);let a=n;a.uSunDir.value.copy(r),a.uSunColor.value.setRGB(1.6,.85,.5),a.uSky.value.setRGB(.3,.22,.5),a.uGround.value.setRGB(.16,.08,.16),a.uRim.value.setRGB(1.6,.75,.42),a.uLamp.value=0,L.color.setHex(9404632),L.groundColor.setHex(3808308),L.intensity=.95,R.color.setHex(16757626),R.intensity=2.6,R.position.copy(r).multiplyScalar(-1).add(new h(1.4,1.8,0)),R.position.set(-r.x*3+1.6,2.4,-r.z*-3),z.color.setHex(16752736),z.intensity=4.2,z.position.copy(r).multiplyScalar(6),B.color.setHex(8228095),B.intensity=1.1,B.position.set(-2.5,1.2,4),H.rimUniforms.uRim.value.setHex(16757370),H.rimUniforms.uRimAmt.value=1.15,H.group.quaternion.copy(new p().setFromAxisAngle(new h(0,1,0),1.86)),w.position.set(.5,1.6,5),W=new h(0,1.02,-.2),w.fov=t?2*Math.atan(1024/800*Math.tan(42*Math.PI/360))*(180/Math.PI):42,e===`featurebg`&&(w.fov=40,w.position.set(-.6,1.55,5.6),W=new h(-2.1,1.08,-.4)),G=new h(-12,3,1.5),U.idle=!1,U.air=!0,e===`iconbg`&&(H.group.visible=!1),H.scarf.mesh.visible=!1}else if(e!==`icon`){if(e===`icon`)H.group.quaternion.copy(new p().setFromAxisAngle(new h(0,1,0),.42)),w.position.set(.42,1.48,1.55),W=new h(.02,1.52,0),w.fov=26;else if(e===`face`||e===`face-side`){let t=e===`face-side`;H.group.quaternion.copy(new p().setFromAxisAngle(new h(0,1,0),t?.95:.22)),w.position.set(.12,1.6,.95),W=new h(0,1.57,0),w.fov=24}else e===`hero`?(U.celebrate=1,U.idle=!1,H.group.quaternion.copy(new p().setFromAxisAngle(new h(0,1,0),.5)),w.position.set(1.6,1.05,4.6),W=new h(0,.95,0),w.fov=30):e===`pose-climb`?(U.idle=!1,U.mode=`climb`,U.phase=.2,H.group.quaternion.copy(new p().setFromAxisAngle(new h(0,1,0),Math.PI+.35)),w.position.set(1.4,.4,-3.6),W=new h(0,1,0)):e===`pose-jump`&&(U.idle=!1,U.air=!0,U.vh=6,H.group.quaternion.copy(new p().setFromAxisAngle(new h(0,1,0),.9)),w.position.set(2.2,1.2,4.2),W=new h(0,1,0))}w.lookAt(W),w.updateProjectionMatrix();let K=new h(1,0,0),q=new h(0,0,-1).applyQuaternion(H.group.quaternion);for(let t=0;t<240;t++)U.time=1.3+t/60,(e===`icon`||r)&&(U.time=1.3),H.animate(1/60,U),r&&P(H.body.skeleton.bones),H.group.updateMatrixWorld(!0),t===0&&H.resetScarf(q),H.updateScarf(1/60,G,K,q,t/60);if(r&&e!==`iconbg`){H.group.updateMatrixWorld(!0);let e=H.harnessWorld(new h),t=new h(-2.2,-.98,-.9),n=e.clone().lerp(t,.5).add(new h(0,-.32,0)),r=new g([e,e.clone().lerp(n,.5).add(new h(0,-.08,0)),n,n.clone().lerp(t,.5).add(new h(0,-.05,0)),t]),i=new u(new m(r,64,.02,8,!1),new o({color:16734762,emissive:new f(6952454)}));y.add(i)}l.render(y,w),window.__ready=!0,window.__frames=99};export{L as runStudio};