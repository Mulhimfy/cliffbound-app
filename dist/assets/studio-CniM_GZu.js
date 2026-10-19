import{C as e,D as t,E as n,S as r,T as i,_ as a,a as o,b as s,c,d as l,f as u,g as d,h as f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S,v as C,w,x as T,y as E}from"./index-yPSNm5KS.js";new n;var D=e=>{let t=new b(e.seed),r=e.res??120,i=r+1,a=new Float32Array(i*i),s=new Float32Array(i*i*3),c=[];for(let n=0;n<(e.shoulders??3);n++){let e=t.n1(n*7.3+1)*Math.PI*2+n*2.1,r=.35+.25*Math.abs(t.n1(n*3.1+5));c.push([Math.cos(e)*r,Math.sin(e)*r,.45+.25*Math.abs(t.n1(n*1.7+9))])}for(let n=0;n<i;n++)for(let o=0;o<i;o++){let l=o/r*2-1,u=n/r*2-1,d=l+t.n2(l*1.3+3,u*1.3)*.18,f=u+t.n2(l*1.3,u*1.3+7)*.18,p=Math.hypot(d,f);if(e.faces){let t=e.faces,n=Math.atan2(f,d)+.4+p*.6,r=2*Math.PI/t,i=(n%r+r)%r-r/2;p=p*Math.cos(i)/Math.cos(r/2),p=Math.min(p*1.1,Math.hypot(d,f)*1.45)}let m=Math.max(0,1-p)**1.6;for(let[e,t,n]of c)m=Math.max(m,n*Math.max(0,1-Math.hypot(d-e,f-t)*1.9)**1.5);let h=0,g=.5,_=2.2;for(let e=0;e<5;e++){let n=1-Math.abs(t.n2(d*_+e*11,f*_+e*7));h+=n*n*g,g*=.5,_*=2.05}let v=m*(.55+h*.9)*e.height;a[n*i+o]=v-(1-m)*e.height*.15;let y=(n*i+o)*3;s[y]=e.x+l*e.size,s[y+1]=e.y+a[n*i+o],s[y+2]=e.z+u*e.size}let u=e.rock??new l(4012358),f=e.rockLit??new l(7168607),m=e.snow??new l(15922427),h=e.snowLine??.45,g=new y,_=2*e.size/r,v=(e,t,n)=>{let o=a[t*i+Math.max(0,e-1)],s=a[t*i+Math.min(r,e+1)],c=a[Math.max(0,t-1)*i+e],l=a[Math.min(r,t+1)*i+e];return n.set(o-s,2*_,c-l).normalize()},x=(n,r,o,s)=>{let c=a[r*i+n]/e.height,l=t.n2(n*.31,r*.31)*.5+t.n2(n*.07,r*.07);s.copy(u).lerp(f,Math.max(0,Math.min(1,.45+l*.5)));let d=(o.y-(e.snowSlope??.48)+l*.08)/.18,g=(c-(1-h)+l*.06)/.08,_=Math.max(0,Math.min(1,d))*Math.max(0,Math.min(1,g));return s.lerp(m,_),_>.5?p.snow:p.rock},S=[new n,new n,new n,new n],C=[new n,new n,new n,new n],w=[new l,new l,new l,new l],T=[0,0,0,0],E=[[0,0],[1,0],[1,1],[0,1]];for(let t=0;t<r;t++)for(let n=0;n<r;n++){for(let e=0;e<4;e++){let r=n+E[e][0],a=t+E[e][1],o=(a*i+r)*3;S[e].set(s[o],s[o+1],s[o+2]),v(r,a,C[e]),T[e]=x(r,a,C[e],w[e])}g.surf=T[0]===T[2]?T[0]:p.rock,g.glow=0;let r=t=>.62+.38*Math.min(1,t/e.height+.2);g.triNC(S[0],S[2],S[1],C[0],C[2],C[1],w[0],w[2],w[1],r(S[0].y-e.y),r(S[2].y-e.y),r(S[1].y-e.y)),g.triNC(S[0],S[3],S[2],C[0],C[3],C[2],w[0],w[3],w[2],r(S[0].y-e.y),r(S[3].y-e.y),r(S[2].y-e.y))}let D=new d(g.build(),o());return D.frustumCulled=!1,D},O=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,k=`
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
}`,A=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,j=`
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
}`,M=(e,t,n,r,i)=>{let a=new b(i),s=[];for(let e=n-320;e<n-8;e+=8)s.push(e);for(let e=n-8;e<n-.5;e+=.35)s.push(e);s.push(n-.3,n-.12,n);let c=[],u=[],f=[],h=new l(1380636),g=new l(4600384),_=new l;for(let i of s){let o=n-i;for(let n=0;n<40;n++){let s=n/40*Math.PI*2,l=Math.cos(s),d=Math.sin(s),m=r*(1+o*.01+(o/320)**2*3);m*=1+a.n2(l*1.3+5,i*.04)*.26+a.n2(l*3.1+d*2.2,i*.09)*.1+a.n2(l*7+d*5,i*.4)*.03,m*=1+a.n2(d*1.2+9,i*.08)*.16,o<.6&&(m*=.86+o*.23),c.push(e+l*m,i+(o<.15?a.n2(l*4,d*4)*.08:0),t+d*m),_.copy(h).lerp(g,Math.max(0,Math.min(1,.35+a.n2(l*2+i*.02,d*2)*.55))),u.push(_.r,_.g,_.b),f.push(o<.4?1:.85,p.rock,0)}}let y=c.length/3;c.push(e,n+.06,t),u.push(g.r,g.g,g.b),f.push(1,p.rock,0);let x=[],S=s.length;for(let e=0;e<S-1;e++)for(let t=0;t<40;t++){let n=e*40+t,r=e*40+(t+1)%40,i=(e+1)*40+(t+1)%40,a=(e+1)*40+t;x.push(n,i,r,n,a,i)}for(let e=0;e<40;e++)x.push(y,(S-1)*40+(e+1)%40,(S-1)*40+e);let C=new m;C.setAttribute(`position`,new v(c,3)),C.setAttribute(`color`,new v(u,3)),C.setAttribute(`aux`,new v(f,3)),C.setIndex(x),C.computeVertexNormals();let w=new d(C,o());return w.frustumCulled=!1,w},N=e=>{let t=(t,n,r=0,i=0)=>e[t].rotation.set(n,r,i);t(1,.08,0,0),t(2,.22,0,.02),t(3,.12,-.05,0),t(4,-.18),t(5,-.22,.05,0),t(9,-2.55,.15,-.125),t(10,-.35),t(11,-.2),t(6,-1.2,-.2,.065),t(7,-.9),t(8,-.2),t(15,-1.45,0,-.08),t(16,1.55),t(17,-.25),t(12,.62,0,.1),t(13,.75),t(14,.55)},P=(o,p=`pip`)=>{let m=o===`iconscene`||o===`iconbg`||o===`iconfg`||o===`featurebg`;document.documentElement.style.background=`transparent`,document.body.style.background=`transparent`,document.getElementById(`stage`).style.background=`transparent`;for(let e of[`vignette`,`danger`,`flash`,`ui`,`fx2d`])document.getElementById(e)?.remove();let v=document.getElementById(`gl`),y=new c({canvas:v,antialias:!0,alpha:!m||o===`iconfg`,preserveDrawingBuffer:!0});y.outputColorSpace=T,y.setClearColor(0,0),y.setPixelRatio(window.devicePixelRatio||1),y.setSize(window.innerWidth,window.innerHeight,!1);let b=new r,P=new C(30,window.innerWidth/window.innerHeight,.05,9e3),F=new f(16770774,4865914,1.25);b.add(F);let I=new u(16773600,3.1);I.position.set(2.2,3.2,3.4);let L=new u(16751210,2.4);L.position.set(-3,1.5,-2.5);let R=new u(9417983,.9);R.position.set(-3,.5,2),b.add(I,L,R);let z=new URLSearchParams(location.search).get(`fine`)===`1`||m;g(z?.0062:.0145);let B=new x(t(p));b.add(B.group,B.scarf.mesh);let V={mode:`run`,air:!1,vh:0,phase:0,speed:0,lean:0,idle:!0,alive:!0,falling:!1,chute:!1,dazed:!1,celebrate:0,time:1.3,curve:0,caught:0,land:0,boost:0},H=new n(0,1.3,0),U=new n(-9,2.5,-4);if(m){let t=o===`iconbg`||o===`iconfg`,r=new n(-.05,.03,-1).normalize(),i=new d(new w(8e3,48,24),new e({vertexShader:O,fragmentShader:k,side:1,depthWrite:!1,uniforms:{uSunDir:{value:r}}}));if(i.renderOrder=-10,o!==`iconfg`){b.add(i);let t=new d(new E(24e3,24e3,1,1),new e({vertexShader:A,fragmentShader:j,uniforms:{uSunDir:{value:r},uCam:{value:o===`featurebg`?new n(-.6,1.55,5.6):new n(.5,1.6,5)},uHaze:{value:new l(.9,.36,.22)}}}));t.rotation.x=-Math.PI/2,t.position.y=-260,b.add(t),b.add(D({x:-2600,y:-1500,z:-8200,size:2100,height:2500,seed:7,res:150,snowSlope:.3,snowLine:.55})),b.add(D({x:1150,y:-1700,z:-6400,size:1800,height:2800,seed:17,res:170,faces:4,snowSlope:.28,snowLine:.6,shoulders:2})),b.add(D({x:2300,y:-1500,z:-9800,size:2500,height:2300,seed:13,res:120,snowSlope:.32,snowLine:.5})),b.add(D({x:300,y:-1500,z:-12500,size:2600,height:2200,seed:21,res:110,snowSlope:.32,snowLine:.5})),b.add(D({x:-6800,y:-1500,z:-11e3,size:2600,height:1900,seed:5,res:110,snowSlope:.32,snowLine:.5})),b.add(D({x:6600,y:-1500,z:-12e3,size:2600,height:2e3,seed:9,res:110,snowSlope:.32,snowLine:.5})),b.add(M(-3.2,-1.2,-.95,1.5,31)),b.add(M(3.8,-3.6,-1.7,1.8,44))}b.fog=new h(new l(13656186),900,11e3);let a=_;a.uSunDir.value.copy(r),a.uSunColor.value.setRGB(1.6,.85,.5),a.uSky.value.setRGB(.3,.22,.5),a.uGround.value.setRGB(.16,.08,.16),a.uRim.value.setRGB(1.6,.75,.42),a.uLamp.value=0,F.color.setHex(9404632),F.groundColor.setHex(3808308),F.intensity=.95,I.color.setHex(16757626),I.intensity=2.6,I.position.copy(r).multiplyScalar(-1).add(new n(1.4,1.8,0)),I.position.set(-r.x*3+1.6,2.4,-r.z*-3),L.color.setHex(16752736),L.intensity=4.2,L.position.copy(r).multiplyScalar(6),R.color.setHex(8228095),R.intensity=1.1,R.position.set(-2.5,1.2,4),B.rimUniforms.uRim.value.setHex(16757370),B.rimUniforms.uRimAmt.value=1.15,B.group.quaternion.copy(new s().setFromAxisAngle(new n(0,1,0),1.86)),P.position.set(.5,1.6,5),H=new n(0,1.02,-.2),P.fov=t?2*Math.atan(1024/800*Math.tan(42*Math.PI/360))*(180/Math.PI):42,o===`featurebg`&&(P.fov=40,P.position.set(-.6,1.55,5.6),H=new n(-2.1,1.08,-.4)),U=new n(-12,3,1.5),V.idle=!1,V.air=!0,o===`iconbg`&&(B.group.visible=!1),B.scarf.mesh.visible=!1}else if(o!==`icon`){if(o===`icon`)B.group.quaternion.copy(new s().setFromAxisAngle(new n(0,1,0),.42)),P.position.set(.42,1.48,1.55),H=new n(.02,1.52,0),P.fov=26;else if(o===`face`||o===`face-side`){let e=o===`face-side`;B.group.quaternion.copy(new s().setFromAxisAngle(new n(0,1,0),e?.95:.22)),P.position.set(.12,1.6,.95),H=new n(0,1.57,0),P.fov=24}else o===`hero`?(V.celebrate=1,V.idle=!1,B.group.quaternion.copy(new s().setFromAxisAngle(new n(0,1,0),.5)),P.position.set(1.6,1.05,4.6),H=new n(0,.95,0),P.fov=30):o===`pose-climb`?(V.idle=!1,V.mode=`climb`,V.phase=1.2,B.group.quaternion.copy(new s().setFromAxisAngle(new n(0,1,0),Math.PI+.35)),P.position.set(1.4,.4,-3.6),H=new n(0,1,0)):o===`pose-jump`&&(V.idle=!1,V.air=!0,V.vh=6,B.group.quaternion.copy(new s().setFromAxisAngle(new n(0,1,0),.9)),P.position.set(2.2,1.2,4.2),H=new n(0,1,0))}P.lookAt(H),P.updateProjectionMatrix();let W=new n(1,0,0),G=new n(0,0,-1).applyQuaternion(B.group.quaternion);for(let e=0;e<240;e++)V.time=1.3+e/60,(o===`icon`||m)&&(V.time=1.3),B.animate(1/60,V),m&&N(B.body.skeleton.bones),B.group.updateMatrixWorld(!0),e===0&&B.resetScarf(G),B.updateScarf(1/60,U,W,G,e/60);if(m&&o!==`iconbg`){B.group.updateMatrixWorld(!0);let e=B.harnessWorld(new n),t=new n(-2.2,-.98,-.9),r=e.clone().lerp(t,.5).add(new n(0,-.32,0)),o=new S([e,e.clone().lerp(r,.5).add(new n(0,-.08,0)),r,r.clone().lerp(t,.5).add(new n(0,-.05,0)),t]),s=new d(new i(o,64,.02,8,!1),new a({color:16734762,emissive:new l(6952454)}));b.add(s)}y.render(b,P),window.__ready=!0,window.__frames=99};export{P as runStudio};