(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1234567,t=()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296*2-1),n=t=>{e=t>>>0||1},r=(e,t)=>new Float32Array(Math.max(1,Math.floor(e*t))),i=(e,n=1)=>{for(let r=0;r<e.length;r++)e[r]+=t()*n;return e},a=(e,n=1)=>{let r=0,i=0,a=0,o=0,s=0,c=0,l=0;for(let u=0;u<e.length;u++){let d=t();r=.99886*r+d*.0555179,i=.99332*i+d*.0750759,a=.969*a+d*.153852,o=.8665*o+d*.3104856,s=.55*s+d*.5329522,c=-.7616*c-d*.016898,e[u]+=(r+i+a+o+s+c+l+d*.5362)*.11*n,l=d*.115926}return e},o=(e,n=1)=>{let r=0;for(let i=0;i<e.length;i++)r=(r+.02*t())/1.02,e[i]+=r*3.5*n;return e},s=(e,t,n,r,i=.707,a=0)=>{let o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=e.length,g=typeof r==`number`,_=e=>{let r=2*Math.PI*Math.min(e,t*.45)/t,o=Math.cos(r),s=Math.sin(r)/(2*i),c=1;switch(n){case`lp`:u=(1-o)/2,d=1-o,f=(1-o)/2,c=1+s,p=-2*o,m=1-s;break;case`hp`:u=(1+o)/2,d=-(1+o),f=(1+o)/2,c=1+s,p=-2*o,m=1-s;break;case`bp`:u=s,d=0,f=-s,c=1+s,p=-2*o,m=1-s;break;case`peak`:{let e=10**(a/40);u=1+s*e,d=-2*o,f=1-s*e,c=1+s/e,p=-2*o,m=1-s/e;break}}u/=c,d/=c,f/=c,p/=c,m/=c};g&&_(r);for(let t=0;t<h;t++){!g&&!(t&31)&&_(r(t/h));let n=e[t],i=u*n+d*o+f*s-p*c-m*l;s=o,o=n,l=c,c=i,e[t]=i}return e},c=(e,t,n,r,i=4)=>{let a=Math.max(1,Math.floor(n*t)),o=Math.max(1,Math.floor(r*t));for(let t=0;t<e.length;t++){let n;if(t<a)n=t/a;else{let e=(t-a)/o;n=e>=1?0:Math.exp(-i*e)*(1-e)}e[t]*=n}return e},l=(e,t,n,r)=>{let i=Math.floor(n*t),a=Math.floor(r*t);for(let t=0;t<i&&t<e.length;t++)e[t]*=t/i;for(let t=0;t<a&&t<e.length;t++)e[e.length-1-t]*=t/a;return e},u=(e,t,n,r,i=0,a=-1,o=.002,s=5,c=`sin`)=>{let l=Math.floor(i*t),u=a<0?e.length-l:Math.min(e.length-l,Math.floor(a*t)),d=0,f=Math.max(1,Math.floor(o*t));for(let i=0;i<u;i++){let a=i/u,o=typeof n==`number`?n:n(a);d+=2*Math.PI*o/t;let p;switch(c){case`sin`:p=Math.sin(d);break;case`tri`:p=2/Math.PI*Math.asin(Math.sin(d));break;case`saw`:p=d/Math.PI%2-1;break;default:p=Math.sin(d)>0?1:-1}let m=(i<f?i/f:1)*Math.exp(-s*a)*(1-a);e[l+i]+=p*r*m}return e},d=(e,t,n,r,i=0,a=1,o=3.5,s=3,c=5)=>{let l=Math.floor(i*t),u=Math.min(e.length-l,Math.floor(a*t)),d=0,f=0;for(let i=0;i<u;i++){let a=i/u;f+=2*Math.PI*n*o/t;let p=s*Math.exp(-c*1.6*a);d+=2*Math.PI*n/t;let m=Math.sin(d+p*Math.sin(f)),h=Math.min(1,i/(.002*t))*Math.exp(-c*a)*(1-a);e[l+i]+=m*r*h}return e},f=(e,n,r,i,a,o,s=.0015)=>{for(let c=0;c<r;c++){let r=i+(t()+1)/2*(a-i),c=Math.floor(r*n),l=Math.max(2,Math.floor(s*n*(.5+(t()+1)/2))),u=o*(.4+(t()+1)*.3);for(let n=0;n<l&&c+n<e.length;n++)e[c+n]+=t()*u*(1-n/l)}return e},p=(e,t)=>{for(let n=0;n<e.length;n++)e[n]*=t;return e},m=(e,t,n=1,r=0)=>{for(let i=0;i<t.length&&i+r<e.length;i++)e[i+r]+=t[i]*n;return e},h=(e,t=.9)=>{let n=0;for(let t=0;t<e.length;t++)n=Math.max(n,Math.abs(e[t]));return n>0&&p(e,t/n),e},g=(e,t=2)=>{let n=Math.tanh(t);for(let r=0;r<e.length;r++)e[r]=Math.tanh(e[r]*t)/n;return e},_=(e,t,n=.25)=>{let r=Math.floor(n*t),i=new Float32Array(e.length-r);for(let t=0;t<i.length;t++)i[t]=e[t];for(let t=0;t<r;t++){let n=t/r;i[t]=e[t]*n+e[i.length+t]*(1-n)}return i},v=()=>t(),y=e=>({step:()=>[0,1,2,3].map(t=>{n(100+t);let a=r(e,.12);return i(a,.9),s(a,e,`lp`,1700+t*250,.8),c(a,e,.003,.07,5),f(a,e,5,.005,.06,.35),u(a,e,e=>95-e*30,.5,0,.06,.002,6),h(a,.55)}),stepSnow:()=>[0,1,2].map(t=>{n(140+t);let a=r(e,.16);return f(a,e,40,0,.11,.6,8e-4),i(a,.25),s(a,e,`bp`,2600+t*300,.9),c(a,e,.008,.12,3),u(a,e,80,.25,0,.05),h(a,.5)}),stepWood:()=>[0,1,2].map(t=>{n(170+t);let a=r(e,.16);return u(a,e,210+t*25,.6,0,.12,.001,9),u(a,e,520+t*40,.3,0,.06,.001,9),i(a,.15),s(a,e,`lp`,2400),c(a,e,.001,.12,6),h(a,.55)}),grab:()=>[0,1,2,3].map(t=>{n(200+t);let a=r(e,.22),o=r(e,.04);return i(o,1),s(o,e,`bp`,1300+t*200,1.2),c(o,e,.001,.035,6),m(a,o,1),u(a,e,130,.5,0,.05,.001,7),f(a,e,4,.05,.2,.18,.001),s(a,e,`lp`,5e3),h(a,.5)}),jump:()=>[0,1].map(t=>{n(300+t);let a=r(e,.3);return i(a,1),s(a,e,`bp`,e=>500+e*2600,1.4),c(a,e,.04,.24,3),h(a,.45)}),land:()=>[0,1].map(t=>{n(320+t);let a=r(e,.25);u(a,e,e=>75-e*35,.9,0,.14,.002,5);let o=r(e,.12);return i(o,1),s(o,e,`lp`,900),c(o,e,.002,.1,5),m(a,o,.7),f(a,e,6,.01,.12,.2),h(g(a,1.5),.7)}),slide:()=>{n(340);let t=r(e,.55);return i(t,1),s(t,e,`lp`,e=>2200-e*1400,.7),f(t,e,50,0,.5,.4,8e-4),c(t,e,.02,.5,2.5),[h(t,.45)]},swish:()=>[0,1,2].map(t=>{n(360+t);let a=r(e,.16);return i(a,1),s(a,e,`bp`,e=>2400-e*1500+t*200,1.1),c(a,e,.02,.13,3),h(a,.32)}),crystal:()=>{n(400);let t=r(e,.5);return d(t,e,880,.55,0,.5,3.5,2.2,5.5),d(t,e,1760,.25,0,.3,2,1.2,7),u(t,e,2640,.08,0,.12),[h(t,.5)]},gem:()=>{n(410);let t=r(e,1);return d(t,e,660,.5,0,1,3.5,2.5,4),d(t,e,990,.4,.06,.9,3.5,2,4),d(t,e,1320,.35,.12,.8,3.5,2,4.5),u(t,e,e=>2e3+e*3e3,.06,.1,.5,.05,2),[h(t,.6)]},power:()=>{n(420);let t=r(e,.8);u(t,e,e=>320+e*e*1500,.35,0,.55,.02,1.5,`tri`),u(t,e,e=>640+e*e*3e3,.12,0,.55,.02,1.5,`sin`);for(let n=0;n<6;n++)d(t,e,1200+n*260,.12,.25+n*.07,.35,2.5,1,6);return[h(t,.55)]},shield:()=>{n(430);let t=r(e,.7);for(let n=0;n<26;n++)d(t,e,2e3+(v()+1)/2*4500,.1,(v()+1)/2*.25,.3,1.414,.5,9);let a=r(e,.25);return i(a,1),s(a,e,`hp`,2500),c(a,e,.001,.2,5),m(t,a,.5),u(t,e,e=>140-e*60,.5,0,.2,.001,6),[h(t,.65)]},bump:()=>{n(440);let t=r(e,.3);return u(t,e,e=>110-e*50,.8,0,.18,.001,6),i(t,.4),s(t,e,`lp`,1200),c(t,e,.001,.25,6),f(t,e,8,.01,.2,.3),[h(g(t,2),.7)]},crash:()=>{n(450);let t=r(e,1.3);u(t,e,e=>62-e*30,1,0,.8,.001,4);let a=r(e,.9);return o(a,1),i(a,.5),s(a,e,`lp`,e=>3200-e*2900,.8),c(a,e,.001,.85,4),m(t,a,.9),f(t,e,40,.02,.9,.35,.002),[h(g(t,2.2),.85)]},whistle:()=>{n(460);let t=r(e,.9);return u(t,e,e=>1500-e*900,.4,0,.9,.04,1.2),u(t,e,e=>1506-e*900,.2,0,.9,.04,1.2),[h(t,.35)]},chute:()=>{n(470);let t=r(e,.5);return i(t,1),s(t,e,`bp`,e=>300+e*500,.9),c(t,e,.005,.4,3),u(t,e,90,.4,0,.12,.003,6),[h(t,.6)]},cartLand:()=>{n(480);let t=r(e,.7);for(let[n,r]of[[220,.5],[563,.35],[912,.3],[1431,.2],[2210,.12]])u(t,e,n,r,0,.7,.001,6+n/400);return i(t,.15),c(t,e,.001,.65,3),[h(t,.55)]},cartHop:()=>{n(490);let t=r(e,.3);for(let n of[310,744,1230])u(t,e,n,.3,0,.3,.001,9);return i(t,.25),s(t,e,`lp`,3500),c(t,e,.001,.25,5),[h(t,.45)]},drip:()=>[0,1,2].map(t=>{n(500+t);let i=r(e,.18);return u(i,e,e=>(1100+t*180)*(1+Math.min(1,e*8)*.9),.6,0,.12,.001,8),h(i,.4)}),eagle:()=>{n(520);let t=r(e,.75),a=0;for(let n=0;n<t.length;n++){let r=n/t.length,i=2700-r*900+Math.sin(r*90)*60;a+=2*Math.PI*i/e;let o=Math.sin(a+1.8*Math.sin(a*.5));t[n]=o*Math.min(1,r*20)*(1-r)**1.5}let o=r(e,.75);return i(o,.3),s(o,e,`bp`,2400,2),m(t,o,.5),[h(t,.38)]},rumble:()=>{n(530);let t=r(e,1.6);return o(t,1),s(t,e,`lp`,260),f(t,e,26,.05,1.4,.25,.004),l(t,e,.2,.6),[h(t,.6)]},near:()=>{n(540);let t=r(e,.4);return i(t,1),s(t,e,`bp`,e=>3200-e*2700,2.2),c(t,e,.03,.33,2.5),[h(t,.5)]},crumble:()=>{n(550);let t=r(e,.7);return o(t,.6),f(t,e,30,0,.6,.6,.002),s(t,e,`lp`,1800),c(t,e,.01,.65,2.5),[h(t,.5)]},creak:()=>{n(560);let t=r(e,.55),i=0;for(let n=0;n<t.length;n++){let r=n/t.length;i+=2*Math.PI*(82+Math.sin(r*7)*14+v()*6)/e,t[n]=(i/Math.PI%2-1)*Math.sin(Math.PI*r)}return s(t,e,`bp`,700,3),[h(t,.3)]},tap:()=>{n(600);let t=r(e,.06);return u(t,e,1350,.6,0,.05,.001,9),u(t,e,2700,.15,0,.03,.001,9),f(t,e,1,0,.002,.4,.001),[h(t,.38)]},back:()=>{n(610);let t=r(e,.08);return u(t,e,e=>900-e*300,.6,0,.07,.001,8),[h(t,.33)]},open:()=>{n(620);let t=r(e,.35);return i(t,1),s(t,e,`bp`,e=>600+e*2400,1.6),c(t,e,.06,.28,2),u(t,e,e=>500+e*400,.12,.05,.25,.04,3),[h(t,.3)]},buy:()=>{n(630);let t=r(e,.8);return d(t,e,1046,.5,0,.6,3.5,2,5),d(t,e,1568,.45,.09,.6,3.5,2,5),d(t,e,2093,.35,.18,.55,3.5,2,5),[h(t,.5)]},unlock:()=>{n(640);let t=r(e,1.4);u(t,e,e=>200+e*900,.2,0,.6,.1,1);for(let n=0;n<5;n++)d(t,e,[784,988,1175,1568,1976][n],.35,.3+n*.07,1,3.5,1.8,3.5);return[h(t,.55)]},error:()=>{n(650);let t=r(e,.28);return u(t,e,140,.5,0,.12,.002,3,`sqr`),u(t,e,120,.5,.13,.12,.002,3,`sqr`),s(t,e,`lp`,900),[h(t,.3)]},toggle:()=>{n(660);let t=r(e,.05);return u(t,e,1900,.5,0,.03,.001,9),f(t,e,1,0,.002,.5,8e-4),[h(t,.3)]},mission:()=>{n(670);let t=r(e,.9);return d(t,e,1318,.5,0,.6,2,1.4,4.5),d(t,e,1976,.5,.11,.7,2,1.4,4.5),u(t,e,e=>3e3+e*2e3,.05,.1,.4,.05,2),[h(t,.5)]},best:()=>{n(680);let t=r(e,1.6),a=r(e,.7);i(a,1),s(a,e,`bp`,e=>400+e*5e3,1.2),c(a,e,.6,.08,1),m(t,a,.5),u(t,e,e=>220+e*660,.25,0,.7,.3,.5,`tri`);for(let[n,r]of[[880,.7],[1108,.74],[1318,.78],[1760,.82]])d(t,e,n,.35,r,.8,3.5,2,3);return u(t,e,e=>70-e*20,.6,.68,.4,.001,4),[h(t,.65)]},summit:()=>{n(690);let t=r(e,2.6),i=r(e,1.2);a(i,1),s(i,e,`bp`,e=>300+e*2200,.8),c(i,e,.9,.3,1),m(t,i,.4);for(let[n,r]of[[523,.9],[659,.95],[784,1],[1046,1.05],[1568,1.15]])d(t,e,n,.4,r,1.5,3.5,2.2,2.5);return u(t,e,65,.5,.88,1.4,.01,2.5),[h(t,.7)]},zone:()=>{n(700);let t=r(e,2.4);return a(t,1),s(t,e,`bp`,e=>200+Math.sin(e*Math.PI)*1400,.7),c(t,e,1,1.3,1.5),u(t,e,98,.3,.2,2,.6,1.5),u(t,e,147,.2,.3,1.9,.6,1.5),[h(t,.55)]},tick:()=>{n(710);let t=r(e,.05);return u(t,e,2400,.5,0,.04,.001,9),[h(t,.3)]},revive:()=>{n(720);let t=r(e,1);i(t,.6),s(t,e,`bp`,e=>300+e*3500,1.5),c(t,e,.5,.4,2);for(let n=0;n<3;n++)d(t,e,[880,1318,1760][n],.4,.45+n*.08,.5,3.5,2,4);return[h(t,.6)]},clank:()=>{n(730);let t=r(e,.4);for(let n of[410,1033,1620])u(t,e,n,.3,0,.4,.001,8);return f(t,e,3,0,.02,.6,.001),[h(t,.45)]},chirp:()=>[0,1,2].map(t=>{n(740+t);let i=r(e,.5);for(let n=0;n<3+t;n++)u(i,e,e=>3200+t*300+Math.sin(e*Math.PI)*900,.3,n*.11,.08,.004,3);return h(i,.25)}),whoosh:()=>{n(750);let t=r(e,.7);return a(t,1),s(t,e,`bp`,e=>300+Math.sin(e*Math.PI)*1800,.9),c(t,e,.25,.42,2),[h(t,.5)]}}),b=e=>({wind:()=>{n(900);let t=r(e,6.5);return a(t,1),o(t,.6),s(t,e,`lp`,e=>500+Math.sin(e*Math.PI*4)*250,.6),h(_(t,e,.8),.7)},windHigh:()=>{n(910);let t=r(e,5.5);return i(t,1),s(t,e,`bp`,e=>1500+Math.sin(e*Math.PI*6)*600,3.5),h(_(t,e,.8),.6)},cave:()=>{n(920);let t=r(e,7);o(t,1),s(t,e,`lp`,180),p(t,.8);for(let n=0;n<6;n++){let i=r(e,.15);u(i,e,e=>1e3*(1+Math.min(1,e*8)),.25,0,.1,.001,8),m(t,i,.6,Math.floor((n+v()*.4+.3)/6*6.2*e))}return h(_(t,e,.6),.6)},cart:()=>{n(930);let t=r(e,1);o(t,1),s(t,e,`lp`,220),p(t,.6);for(let n=0;n<8;n++){let a=r(e,.08);i(a,1),s(a,e,`bp`,2600,1.5),c(a,e,.001,.05,6),u(a,e,900,.3,0,.06,.001,8),m(t,a,n%2?.7:1,Math.floor(n/8*e))}return h(t,.6)},zip:()=>{n(940);let t=r(e,2);for(let n=0;n<t.length;n++){let r=n/e;t[n]=Math.sin(2*Math.PI*520*r+Math.sin(2*Math.PI*3*r)*2)*.3+Math.sin(2*Math.PI*1040*r)*.1}return i(t,.25),s(t,e,`bp`,900,.8),h(t,.5)},fire:()=>{n(950);let t=r(e,4);return a(t,.3),s(t,e,`lp`,900),f(t,e,90,0,3.9,.8,.0012),h(_(t,e,.4),.5)},magnet:()=>{n(960);let t=r(e,1);for(let n=0;n<t.length;n++){let r=n/e;t[n]=Math.sin(2*Math.PI*110*r)*(.6+.4*Math.sin(2*Math.PI*8*r))*.5+Math.sin(2*Math.PI*220*r)*.15}return h(t,.4)},glide:()=>{n(970);let t=r(e,3);return a(t,1),s(t,e,`bp`,700,.6),h(_(t,e,.5),.6)}}),x=[1,9/8,5/4,3/2,5/3,2,9/4,5/2,3,10/3,4],S=new class{ctx=null;master;sfxBus;ambBus;reverb;reverbIn;bank=new Map;loops=new Map;ready=!1;enabled=!0;wet=0;last=new Map;setEnabled(e){this.enabled=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:`interactive`}),this.build()}this.ctx.state===`suspended`&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}build(){let e=this.ctx,t=e.sampleRate;this.master=e.createGain(),this.master.gain.value=this.enabled?.9:0;let r=e.createDynamicsCompressor();r.threshold.value=-14,r.knee.value=10,r.ratio.value=4,r.attack.value=.004,r.release.value=.18,this.master.connect(r).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.ambBus=e.createGain(),this.ambBus.gain.value=.55,this.sfxBus.connect(this.master),this.ambBus.connect(this.master),this.reverb=e.createConvolver();let i=Math.floor(t*2.4),a=e.createBuffer(2,i,t);for(let e=0;e<2;e++){let r=a.getChannelData(e);n(77+e);for(let e=0;e<i;e++)r[e]=v()*(1-e/i)**3.2*(e<t*.012?.2:1)}this.reverb.buffer=a,this.reverbIn=e.createGain(),this.reverbIn.gain.value=0;let o=e.createGain();o.gain.value=.5,this.reverbIn.connect(this.reverb).connect(o).connect(this.master),this.sfxBus.connect(this.reverbIn);let s=y(t),c=Object.keys(s),l=b(t),u=Object.keys(l),d=0,f=()=>{let n=performance.now();for(;d<c.length+u.length&&performance.now()-n<8;){if(d<c.length){let n=c[d];this.bank.set(n,s[n]().map(n=>{let r=e.createBuffer(1,n.length,t);return r.getChannelData(0).set(n),r}))}else{let n=u[d-c.length],r=l[n](),i=e.createBuffer(1,r.length,t);i.getChannelData(0).set(r),this.startLoop(n,i)}d++}d<c.length+u.length?setTimeout(f,0):this.ready=!0};f()}startLoop(e,t){let n=this.ctx,r=n.createBufferSource();r.buffer=t,r.loop=!0;let i=n.createGain();i.gain.value=0;let a;e===`wind`||e===`windHigh`||e===`glide`?(a=n.createBiquadFilter(),a.type=`lowpass`,a.frequency.value=1200,r.connect(a).connect(i)):r.connect(i),i.connect(this.ambBus),(e===`cave`||e===`cart`)&&i.connect(this.reverbIn),r.start(n.currentTime+Math.random()*.1,Math.random()*t.duration*.9),this.loops.set(e,{src:r,gain:i,filter:a})}get isReady(){return this.ready}play(e,t={}){if(!this.ctx||!this.enabled)return;let n=this.bank.get(e);if(!n||!n.length)return;let r=this.ctx.currentTime,i=e+(t.rate??``);if(r-(this.last.get(i)??-1)<.025)return;this.last.set(i,r);let a=this.ctx,o=a.createBufferSource();o.buffer=n[Math.floor(Math.random()*n.length)];let s=t.vary??.06;o.playbackRate.value=(t.rate??1)*(1+(Math.random()*2-1)*s);let c=a.createGain();c.gain.value=t.vol??1;let l=o;if(l.connect(c),l=c,t.pan&&a.createStereoPanner){let e=a.createStereoPanner();e.pan.value=Math.max(-1,Math.min(1,t.pan)),l.connect(e),l=e}if(l.connect(this.sfxBus),(t.wet??0)>0){let e=a.createGain();e.gain.value=t.wet,l.connect(e).connect(this.reverbIn)}o.start(r+(t.delay??0))}crystal(e,t=0){let n=Math.min(x.length-1,Math.max(0,e-1));this.play(`crystal`,{rate:x[n]*.85,vol:.55,pan:t,vary:.004,wet:this.wet*.6})}ambience(e){if(!this.ctx||!this.ready)return;let t=this.ctx.currentTime,n=(e,n,r=.25)=>{let i=this.loops.get(e);i&&i.gain.gain.setTargetAtTime(this.enabled?n:0,t,r)},r=1-e.cave,i=Math.min(1,e.altitude/2600),a=Math.min(1,e.speed/28);n(`wind`,(.22+i*.35+a*.25)*r*(e.dead?.6:1)),n(`windHigh`,(.03+i*.22+a*.12)*r);let o=this.loops.get(`wind`);o?.filter&&o.filter.frequency.setTargetAtTime(500+a*1400+i*600,t,.3);let s=this.loops.get(`windHigh`);s?.filter&&s.filter.frequency.setTargetAtTime(1600+i*2600,t,.4),n(`cave`,e.cave*.85),n(`cart`,e.mode===`cart`&&!e.dead?.55:0,.08);let c=this.loops.get(`cart`);c&&c.src.playbackRate.setTargetAtTime(.75+a*.75,t,.2),n(`zip`,e.mode===`zip`&&!e.dead&&!e.wings?.32:0,.1);let l=this.loops.get(`zip`);l&&l.src.playbackRate.setTargetAtTime(.8+a*.5,t,.2),n(`fire`,e.fire*.5),n(`magnet`,e.magnet&&!e.dead?.22:0),n(`glide`,e.wings&&!e.dead?.5:0),this.wet=e.cave,this.reverbIn.gain.setTargetAtTime(.08+e.cave*.9,t,.3)}get caveWet(){return this.wet}},C={name:`Cliffbound`,mark:[`CLIFF`,`BOUND`],tagline:[`Climb`,`Ride`,`Rise`],privacyUrl:`https://mulhimfy.github.io/cliffbound-app/privacy.html`,supportUrl:`https://mulhimfy.github.io/cliffbound-app/`,version:`1.0.0`},w=Math.PI/180,T=(e,t,n)=>e<t?t:e>n?n:e,E=e=>e<0?0:e>1?1:e,D=(e,t,n)=>e+(t-e)*n,O=(e,t,n)=>{let r=E((n-e)/(t-e));return r*r*(3-2*r)},k=(e,t,n)=>{let r=E((n-e)/(t-e));return r*r*r*(r*(r*6-15)+10)},A=(e,t)=>1-Math.exp(-e*t),ee=e=>{let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0},te=e=>Math.round(e).toLocaleString(`en-US`),j=class{startX=0;startY=0;startT=0;active=!1;fired=!1;pointerId=-1;enabled=!0;onSwipe=()=>void 0;onTap=()=>void 0;constructor(e){e.addEventListener(`pointerdown`,this.down,{passive:!0}),window.addEventListener(`pointermove`,this.move,{passive:!0}),window.addEventListener(`pointerup`,this.up,{passive:!0}),window.addEventListener(`pointercancel`,this.up,{passive:!0}),window.addEventListener(`keydown`,this.key)}threshold(){return Math.max(18,Math.min(window.innerWidth,window.innerHeight)*.05)}down=e=>{this.enabled&&(this.active=!0,this.fired=!1,this.pointerId=e.pointerId,this.startX=e.clientX,this.startY=e.clientY,this.startT=performance.now())};move=e=>{if(!this.active||this.fired||e.pointerId!==this.pointerId)return;let t=e.clientX-this.startX,n=e.clientY-this.startY,r=this.threshold();Math.abs(t)<r&&Math.abs(n)<r||(this.fired=!0,Math.abs(t)>Math.abs(n)?this.onSwipe(t>0?`right`:`left`):this.onSwipe(n>0?`down`:`up`),this.startX=e.clientX,this.startY=e.clientY,setTimeout(()=>{this.active&&(this.fired=!1)},90))};up=e=>{this.active&&e.pointerId===this.pointerId&&(this.active=!1,!this.fired&&performance.now()-this.startT<300&&this.onTap(e.clientX,e.clientY))};key=e=>{if(!this.enabled||e.repeat)return;let t={ArrowLeft:`left`,ArrowRight:`right`,ArrowUp:`up`,ArrowDown:`down`,a:`left`,d:`right`,w:`up`,s:`down`," ":`up`}[e.key];t&&(e.preventDefault(),this.onSwipe(t))}},ne;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(ne||={});var re=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},ie=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,ae=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?ie(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new re(`"${e}" plugin is not implemented on ${c}`,ne.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new re(`"${e}.${t}()" is not implemented on ${c}`,ne.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=re,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},oe=(e=>e.Capacitor=ae(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),se=oe.registerPlugin,ce=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new oe.Exception(e,ne.Unimplemented)}unavailable(e=`not available`){return new oe.Exception(e,ne.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},le=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ue=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),de=class extends ce{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=ue(n).trim(),r=ue(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=le(e.key),n=le(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};se(`CapacitorCookies`,{web:()=>new de});var fe=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),pe=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},me=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,he=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=pe(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},ge=class extends ce{async request(e){let t=he(e,e.webFetchExtra),n=me(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await fe(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};se(`CapacitorHttp`,{web:()=>new ge});var _e;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(_e||={});var ve;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(ve||={});var ye=class extends ce{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};se(`SystemBars`,{web:()=>new ye});var be;(function(e){e.Heavy=`HEAVY`,e.Medium=`MEDIUM`,e.Light=`LIGHT`})(be||={});var xe;(function(e){e.Success=`SUCCESS`,e.Warning=`WARNING`,e.Error=`ERROR`})(xe||={});var Se=`modulepreload`,Ce=function(e,t){return new URL(e,t).href},we={},Te=function(e){return e.pathname.endsWith(`.css`)},M=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ce(t,n);let r=s(t),i=Te(r);return M(we,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Se,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},De=se(`Haptics`,{web:()=>Ee(()=>import(`./web-CRkHA23_.js`).then(e=>new e.HapticsWeb),[],import.meta.url)}),Oe=se(`App`,{web:()=>Ee(()=>import(`./web-CPROMWtt.js`).then(e=>new e.AppWeb),[],import.meta.url)}),N=se(`Preferences`,{web:()=>Ee(()=>import(`./web-DdLhWFHr.js`).then(e=>new e.PreferencesWeb),[],import.meta.url)}),ke;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(ke||={});var P;(function(e){e.None=`NONE`,e.Slide=`SLIDE`,e.Fade=`FADE`})(P||={});var Ae=se(`StatusBar`),je=se(`SplashScreen`,{web:()=>Ee(()=>import(`./web-QB1XfAQl.js`).then(e=>new e.SplashScreenWeb),[],import.meta.url)}),Me=se(`KeepAwake`,{web:()=>Ee(()=>import(`./web-LOAJ8dX6.js`).then(e=>new e.KeepAwakeWeb),[],import.meta.url)}),Ne=oe.isNativePlatform();oe.getPlatform();var Pe=!0,Fe=new Map,Ie=(e,t)=>{let n=performance.now();return n-(Fe.get(e)??-1e9)<t?!1:(Fe.set(e,n),!0)},Le=e=>{try{navigator.vibrate?.(e)}catch{}},Re={set enabled(e){Pe=e},get enabled(){return Pe},tick(){Pe&&Ie(`tick`,45)&&(Ne?De.selectionChanged().catch(()=>void 0):Le(6))},light(){Pe&&Ie(`light`,40)&&(Ne?De.impact({style:be.Light}).catch(()=>void 0):Le(10))},medium(){Pe&&Ie(`medium`,60)&&(Ne?De.impact({style:be.Medium}).catch(()=>void 0):Le(18))},heavy(){Pe&&Ie(`heavy`,80)&&(Ne?De.impact({style:be.Heavy}).catch(()=>void 0):Le(32))},success(){Pe&&Ie(`success`,300)&&(Ne?De.notification({type:xe.Success}).catch(()=>void 0):Le([12,60,18]))},warning(){Pe&&Ie(`warning`,300)&&(Ne?De.notification({type:xe.Warning}).catch(()=>void 0):Le([20,50,20]))},error(){Pe&&Ie(`error`,300)&&(Ne?De.notification({type:xe.Error}).catch(()=>void 0):Le([40,40,60]))}},ze={async get(e){try{return Ne?(await N.get({key:e})).value:localStorage.getItem(e)}catch{return null}},async set(e,t){try{Ne?await N.set({key:e,value:t}):localStorage.setItem(e,t)}catch{}}},Be=async()=>{if(Ne)try{await Ae.setStyle({style:ke.Dark}),await Ae.hide()}catch{}},Ve=()=>{Ne&&je.hide({fadeOutDuration:250}).catch(()=>void 0)},He=e=>{Ne&&(e?Me.keepAwake():Me.allowSleep()).catch(()=>void 0)},Ue=e=>{document.addEventListener(`visibilitychange`,()=>document.hidden?e.pause():e.resume()),Ne&&(Oe.addListener(`appStateChange`,({isActive:t})=>t?e.resume():e.pause()),Oe.addListener(`backButton`,()=>e.back()))},We=()=>{Ne&&Oe.exitApp()},Ge=[{id:`pip`,name:`Pip`,tagline:`Never met a peak they didn’t like.`,price:0,jacket:16738859,jacketDark:14240282,pants:2964070,beanie:16763213,scarf:16723797,scarf2:16763213,gloves:2830149,boots:5912614,pack:3833194,skin:15844257,lens:6547199,trail:16757596},{id:`juno`,name:`Juno`,tagline:`Glacier blue, ice cold nerves.`,price:400,jacket:3065305,jacketDark:1740712,pants:1910087,beanie:16054015,scarf:16765503,scarf2:16747069,gloves:1910087,boots:2830149,pack:16738859,skin:13012075,lens:16757596,trail:5891839},{id:`koa`,name:`Koa`,tagline:`Born in the pines. Climbs like a squirrel.`,price:900,jacket:4177770,jacketDark:2787916,pants:6965806,beanie:16734781,scarf:16183264,scarf2:4177770,gloves:6965806,boots:4008478,pack:16763213,skin:9263675,lens:11992924,trail:10354554},{id:`ember`,name:`Ember`,tagline:`Leaves a trail of sparks on every wall.`,price:1600,jacket:2760494,jacketDark:1511194,pants:2760494,beanie:16727342,scarf:16727342,scarf2:16756782,gloves:16727342,boots:1511194,pack:5974570,skin:15774862,lens:16742959,trail:16734751},{id:`frost`,name:`Frost`,tagline:`Quiet as fresh snow, twice as quick.`,price:2600,jacket:15660287,jacketDark:12175334,pants:9085657,beanie:9433343,scarf:9433343,scarf2:16777215,gloves:9085657,boots:5925536,pack:5925536,skin:16175805,lens:9433343,trail:12580607},{id:`nova`,name:`Nova`,tagline:`Wears the aurora like a scarf.`,price:4e3,jacket:8014847,jacketDark:5583049,pants:1774672,beanie:3014576,scarf:3014576,scarf2:16743129,gloves:1774672,boots:1774672,pack:16743129,skin:14260856,lens:16743129,trail:3014576},{id:`sol`,name:`Sol`,tagline:`Summited every peak. Twice. In gold.`,price:6500,jacket:16763213,jacketDark:14260766,pants:3811858,beanie:16773577,scarf:16773577,scarf2:16763213,gloves:3811858,boots:3811858,pack:11878954,skin:11037515,lens:16769162,trail:16769162},{id:`shade`,name:`Shade`,tagline:`Climbs at night. Glows a little.`,price:9500,jacket:1184540,jacketDark:460813,pants:1184540,beanie:1184540,scarf:4191969,scarf2:16727435,gloves:4191969,boots:460813,pack:2500666,skin:15319200,lens:4191969,trail:4191969}],Ke=e=>Ge.find(t=>t.id===e)??Ge[0],qe=2.1,Je=e=>e*qe,Ye=.25,Xe={gravity:34,jumpV:10.4,fastFallV:-24,duckTime:.62,laneOmega:30,laneZeta:.78,bodyH:1.55,duckH:.72,halfDepth:.34,halfWidth:.42,obstacleHalfWidth:.95,coyote:.09,bufferTime:.2,wingsHeight:6.2,invulnAfterHit:2.2},Ze={v0:12.5,vmax:27,dist:2900,mult:{run:1,climb:.74,cart:1.24,zip:1.32},accel:2.6},Qe=e=>Ze.v0+(Ze.vmax-Ze.v0)*(1-Math.exp(-Math.max(0,e)/Ze.dist)),$e=[60,150,350],et=e=>1<<e+1,tt=e=>[-1,0,1].filter(t=>e&et(t)),nt=class{reaction;cooldown=0;constructor(e=.12){this.reaction=e}think(e,t){let n=e.player;if(!n.alive||!n.started||(this.cooldown-=t,this.cooldown>0))return null;let r=Math.max(1,n.speed),i=r*2+12,a=[[],[],[]];for(let t of e.gen.pieces){if(t.s0>n.s+i+40)break;if(!(t.s1<n.s-4))for(let e of t.obstacles){if(e.state===2)continue;let t=e.s;if(e.moving){if(e.vs===0)continue;let i=(e.s-n.s)/(r-e.vs);if(i<0)continue;t=e.s+e.vs*(e.state>=1||n.s>=e.trigger?i:Math.max(0,i-(e.trigger-n.s)/r))}let o=t-e.depth/2-(n.s+Xe.halfDepth);if(!(o<-e.depth-1||o>i))for(let t of tt(e.lanes))a[t+1].push({ob:e,dist:o})}}for(let e of a)e.sort((e,t)=>e.dist-t.dist);let o=e=>{for(let t of a[e+1])if(!(t.dist<-t.ob.depth)&&t.ob.clear===`block`)return-t.dist;return-999},s=n.lane,c=o(s);if(c>-r*.9-4||n.laneT>.3&&this.betterLane(s,o)!==s&&c>-r*1.4){let e=this.betterLane(s,o);if(e!==s)return this.cooldown=this.reaction,e<s?`left`:`right`}let l=Math.round(n.x/2.1),u=a[(Math.abs(n.x-Je(s))<.6?s:l)+1]??a[s+1];for(let e of u)if(!(e.dist<-e.ob.depth)){if(e.ob.clear===`jump`||e.ob.clear===`gap`){let t=r*(Xe.jumpV/Xe.gravity*.62)-e.ob.depth*.25;if(e.dist<t+.5&&!n.air)return this.cooldown=this.reaction,`up`}else if(e.ob.clear===`duck`&&e.dist<r*.22+1&&n.duck<=.08)return this.cooldown=this.reaction,`down`;break}return null}betterLane(e,t){let n=e,r=t(e);for(let i of[e-1,e+1]){if(i<-1||i>1)continue;let e=t(i);e<r-.5&&(n=i,r=e)}if(e!==0){let n=-e,i=t(0);if(t(n)<r-.5&&i<-4)return 0}return n}},rt=()=>({px:0,py:0,pz:0,fx:0,fy:0,fz:1,rx:-1,ry:0,rz:0,ux:0,uy:1,uz:0,yaw:0,pitch:0}),it=(e,t,n)=>{let r=Math.sin(t),i=Math.cos(t),a=Math.sin(n),o=Math.cos(n);return e.yaw=t,e.pitch=n,e.fx=r*o,e.fy=a,e.fz=i*o,e.rx=-i,e.ry=0,e.rz=r,e.ux=-r*a,e.uy=o,e.uz=-i*a,e},at=32768,ot=5,st=class{data=new Float64Array(at*ot);first=0;end=0;x=0;y=0;z=0;yaw=0;pitch=0;tmp={yaw:0,pitch:0};constructor(){this.push()}get length(){return(this.end-1)*Ye}get start(){return this.first*Ye}push(){this.end-this.first>=at&&this.first++;let e=this.end%at*ot,t=this.data;t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.yaw,t[e+4]=this.pitch,this.end++}append(e,t){let n=Math.max(1,Math.round(e/Ye)),r=e/n,i=this.tmp;for(let e=1;e<=n;e++){t(e*r,i);let n=(this.yaw+i.yaw)*.5,a=(this.pitch+i.pitch)*.5,o=Math.cos(a);this.x+=Math.sin(n)*o*Ye,this.y+=Math.sin(a)*Ye,this.z+=Math.cos(n)*o*Ye,this.yaw=i.yaw,this.pitch=i.pitch,this.push()}}trim(e){let t=Math.floor(e/Ye);t>this.first&&(this.first=Math.min(t,this.end-2))}frame(e,t){let n=e/Ye,r=this.first,i=this.end-1;n<r&&(n=r),n>i&&(n=i);let a=Math.floor(n);a>=i&&(a=i-1),a<r&&(a=r);let o=n-a,s=this.data,c=a%at*ot,l=(a+1)%at*ot;return t.px=s[c]+(s[l]-s[c])*o,t.py=s[c+1]+(s[l+1]-s[c+1])*o,t.pz=s[c+2]+(s[l+2]-s[c+2])*o,it(t,s[c+3]+(s[l+3]-s[c+3])*o,s[c+4]+(s[l+4]-s[c+4])*o),t}point(e,t,n,r,i){return this.frame(e,r),i.x=r.px+r.rx*t+r.ux*n,i.y=r.py+r.ry*t+r.uy*n,i.z=r.pz+r.rz*t+r.uz*n,i}pitchAt(e){let t=e/Ye;t<this.first&&(t=this.first),t>this.end-1&&(t=this.end-1);let n=Math.min(Math.floor(t),this.end-1);return this.data[n%at*ot+4]}heightAt(e){let t=e/Ye;t<this.first&&(t=this.first),t>this.end-1&&(t=this.end-1);let n=Math.min(Math.floor(t),this.end-1);return this.data[n%at*ot+1]}},ct=class e{a;b;c;d;constructor(e){this.a=2654435769,this.b=608135816,this.c=3084996962,this.d=e>>>0;for(let e=0;e<16;e++)this.next()}next(){let{a:e,b:t,c:n,d:r}=this;e>>>=0,t>>>=0,n>>>=0,r>>>=0;let i=e+t|0;return e=t^t>>>9,t=n+(n<<3)|0,n=n<<21|n>>>11,r=r+1|0,i=i+r|0,n=n+i|0,this.a=e,this.b=t,this.c=n,this.d=r,(i>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)]}weighted(e){let t=0;for(let n in e)t+=Math.max(0,e[n]??0);let n=this.next()*t,r;for(let t in e){let i=Math.max(0,e[t]??0);if(!(i<=0)&&(r=t,n-=i,n<=0))return t}return r}gauss(){return(this.next()+this.next()+this.next()+this.next()-2)*1.732}fork(){return new e(this.next()*4294967296>>>0)}},lt=e=>e,ut=[{id:0,name:`Dawn Foothills`,subtitle:`First light on the pines`,summitAt:260,weather:`pollen`,flora:`pine`,pieces:{wall:1,cave:.55,bridge:.45},palette:lt({skyTop:4875189,skyMid:13077947,horizon:16763558,fog:15908782,sun:16774366,sunGlow:16757372,sunElev:.2,sunAzim:.55,hemiSky:16769228,hemiGround:4734318,hemiIntensity:1.21,sunIntensity:2.62,rock:9075330,rockDark:5194329,rockLight:13807270,ground:8834971,groundDark:5151868,snow:16774126,foliage:3109990,foliageDark:2053458,accent:4191969,far1:11833273,far2:10257595,far3:9207734,cloud:16770006,stars:0,aurora:0,snowCover:0})},{id:1,name:`Amber Canyon`,subtitle:`Red rock and golden hour`,summitAt:640,weather:`dust`,flora:`juniper`,pieces:{wall:1.1,cave:.6,bridge:.55},palette:lt({skyTop:3041709,skyMid:15314290,horizon:16765844,fog:16041095,sun:16773828,sunGlow:16751429,sunElev:.13,sunAzim:-.6,hemiSky:16769712,hemiGround:5189450,hemiIntensity:1.17,sunIntensity:2.88,rock:13595716,rockDark:9190699,rockLight:15903344,ground:14722918,groundDark:11695685,snow:16773340,foliage:7244348,foliageDark:5073455,accent:4191969,far1:13667188,far2:12022394,far3:10185350,cloud:16769205,stars:0,aurora:0,snowCover:0})},{id:2,name:`Crystal Hollows`,subtitle:`The mountain glows from within`,summitAt:1120,weather:`motes`,flora:`crystal`,pieces:{wall:1,cave:1.1,bridge:.5},palette:lt({skyTop:2056132,skyMid:6534895,horizon:12905727,fog:11459826,sun:16777215,sunGlow:12577279,sunElev:.75,sunAzim:.3,hemiSky:14677247,hemiGround:4016765,hemiIntensity:1.21,sunIntensity:2.5,rock:7767731,rockDark:4608639,rockLight:11846372,ground:7526845,groundDark:4564374,snow:15924223,foliage:3116167,foliageDark:1926768,accent:11963647,far1:8825302,far2:7574472,far3:6717885,cloud:16055295,stars:0,aurora:0,snowCover:.1})},{id:3,name:`Frost Ridge`,subtitle:`Ice, wind and a violet dusk`,summitAt:1700,weather:`snow`,flora:`frost`,pieces:{wall:1.2,cave:.7,bridge:.6},palette:lt({skyTop:2762345,skyMid:8082081,horizon:15900585,fog:13013175,sun:16767423,sunGlow:16744335,sunElev:.06,sunAzim:-.35,hemiSky:14993136,hemiGround:3092326,hemiIntensity:1.17,sunIntensity:2.12,rock:6251923,rockDark:3685227,rockLight:10726361,ground:15331071,groundDark:11976166,snow:15988223,foliage:4022140,foliageDark:2770275,accent:9433343,far1:10321844,far2:8087203,far3:5919376,cloud:15844308,stars:.25,aurora:0,snowCover:.75})},{id:4,name:`Aurora Peaks`,subtitle:`Night climbs under living light`,summitAt:2400,weather:`stars`,flora:`glow`,pieces:{wall:1.25,cave:.8,bridge:.6},palette:lt({skyTop:264735,skyMid:924999,horizon:2376826,fog:1715287,sun:14871807,sunGlow:8365823,sunElev:.55,sunAzim:.7,hemiSky:9086194,hemiGround:1054774,hemiIntensity:.98,sunIntensity:1.5,rock:3424623,rockDark:1844553,rockLight:6518707,ground:12570869,groundDark:8558543,snow:13951231,foliage:2046563,foliageDark:1321033,accent:6094802,far1:2241898,far2:1780568,far3:1385034,cloud:3822992,stars:1,aurora:1,snowCover:.8})},{id:5,name:`Sky Summit`,subtitle:`Sunrise above a sea of clouds`,summitAt:3200,weather:`wind`,flora:`cloud`,pieces:{wall:1.3,cave:.5,bridge:.8},palette:lt({skyTop:2901392,skyMid:14978217,horizon:16767400,fog:16769736,sun:16777215,sunGlow:16761466,sunElev:.1,sunAzim:.1,hemiSky:16773346,hemiGround:9400466,hemiIntensity:1.25,sunIntensity:2.75,rock:14206146,rockDark:10388887,rockLight:16773610,ground:16775926,groundDark:15259870,snow:16777215,foliage:12947374,foliageDark:10120335,accent:16763213,far1:15775165,far2:14261172,far3:12421037,cloud:16771296,stars:0,aurora:0,snowCover:.9})},{id:6,name:`The Edge of Space`,subtitle:`Where the mountain meets the stars`,summitAt:4100,weather:`cosmic`,flora:`cosmic`,pieces:{wall:1.35,cave:.7,bridge:.9},palette:lt({skyTop:131852,skyMid:1773904,horizon:8013485,fog:3876464,sun:16774120,sunGlow:16743129,sunElev:.32,sunAzim:-.5,hemiSky:13215999,hemiGround:1707834,hemiIntensity:1.01,sunIntensity:2,rock:7166627,rockDark:3944046,rockLight:11902182,ground:15129855,groundDark:11772646,snow:15920383,foliage:8015800,foliageDark:5584015,accent:16743129,far1:5191568,far2:4008568,far3:2957155,cloud:9071817,stars:1,aurora:.55,snowCover:.6})}],dt=e=>{if(e<ut.length)return ut[e];let t=[3,4,5,6],n=ut[t[(e-ut.length)%t.length]],r=ut[ut.length-1],i=e-ut.length+1;return{...n,id:e,name:`${n.name} ${ft(i+1)}`,summitAt:r.summitAt+i*950}},ft=e=>{let t=[[10,`X`],[9,`IX`],[5,`V`],[4,`IV`],[1,`I`]],n=``;for(let[r,i]of t)for(;e>=r;)n+=i,e-=r;return n},pt=e=>e===0?0:dt(e-1).summitAt,mt={boulder:{clear:`block`,depth:1.7},log:{clear:`jump`,depth:.9,hTop:.72},arch:{clear:`duck`,depth:1.3,hBottom:1.05},crevasse:{clear:`gap`,depth:3},overhang:{clear:`block`,depth:2},crumble:{clear:`gap`,depth:3.2},eagle:{clear:`duck`,depth:1.4,hBottom:1},rockfall:{clear:`block`,depth:1.7},rubble:{clear:`block`,depth:1.7},barrier:{clear:`jump`,depth:.8,hTop:.7},beam:{clear:`duck`,depth:.9,hBottom:1.05},railgap:{clear:`gap`,depth:3.4},oncoming:{clear:`block`,depth:2.3},plankgap:{clear:`gap`,depth:2.7},swinglog:{clear:`duck`,depth:.9,hBottom:1},bird:{clear:`block`,depth:1.1}},ht={run:{block:`boulder`,jump:[`log`,`crevasse`],duck:`arch`,moving:null},climb:{block:`overhang`,jump:[`crumble`],duck:`eagle`,moving:`rockfall`},cart:{block:`rubble`,jump:[`barrier`,`railgap`],duck:`beam`,moving:`oncoming`},zip:{block:`bird`,jump:[],duck:null,moving:null}},gt=2.3,_t={rockfall:-12,oncoming:-9},vt=class{path;rng;pieces=[];zone=0;plan=[];ids=1;obIds=1;itemIds=1;golden=0;nextRowS=0;nextPowerS=300;rowsSinceBreather=0;lastSpecial=null;deck=[];tutorial;rows=0;constructor(e,t){this.path=e,this.rng=new ct(t.seed),this.tutorial=t.tutorial,this.camp(),this.tutorial?this.plan.push({kind:`ridge`,variant:`tutorial`},{kind:`wall`,variant:`tutorial`}):this.plan.push({kind:`ridge`,variant:`intro`},{kind:`wall`}),this.deck=[{kind:`cave`,variant:`shaft`},{kind:`bridge`},{kind:`wall`},{kind:`cave`,variant:`open`}]}ensure(e){let t=[],n=0;for(;this.path.length<e&&n++<40;)t.push(this.build());return t}dropBefore(e){let t=[];for(;this.pieces.length>1&&this.pieces[0].s1<e;)t.push(this.pieces.shift());return t}pieceAt(e){for(let t of this.pieces)if(e>=t.s0&&e<t.s1)return t;return this.pieces[this.pieces.length-1]}modeAt(e){let t=this.pieceAt(e);if(!t)return`run`;for(let n of t.modes)if(e>=n.s0&&e<n.s1)return n.mode;return`run`}speedAt(e,t){return Qe(e)*Ze.mult[t]}difficulty(e){return T((Math.max(0,e-140)/2900)**.85,0,1)}peek(){return this.plan.length<2&&this.plan.push(this.choose(this.plan[this.plan.length-1]??{kind:`ridge`})),this.plan[1]}choose(e){let t=this.rng;switch(e.kind){case`camp`:return{kind:`ridge`};case`ridge`:{this.deck.length||this.refillDeck();let e=this.deck.findIndex(e=>e.kind!==this.lastSpecial||e.kind===`wall`);e<0&&(e=0);let t=this.deck.splice(e,1)[0];return(t.kind===`cave`||t.kind===`bridge`)&&(this.lastSpecial=t.kind),t}case`wall`:return{kind:`ridge`};case`cave`:return e.variant===`shaft`?{kind:`wall`,variant:`shaft`}:{kind:`ridge`};case`bridge`:return t.chance(.55)?{kind:`wall`}:{kind:`ridge`};case`summit`:return{kind:`zip`};case`zip`:return{kind:`ridge`,variant:`arrival`}}}build(){this.plan.length||this.plan.push(this.choose({kind:`ridge`}));let e=this.plan[0],t=dt(this.zone),n=this.path.y;!e.final&&n>=t.summitAt-46&&(e.kind===`ridge`||e.kind===`wall`||e.kind===`bridge`||e.kind===`cave`)&&(e={kind:`wall`,variant:e.kind===`wall`?e.variant:void 0,final:!0},this.plan=[e,{kind:`summit`},{kind:`zip`}]);let r=this.peek();this.plan.shift();let i;switch(e.kind){case`ridge`:i=this.ridge(e.variant??``,r.kind);break;case`wall`:i=this.wall(e.variant??``,!!e.final);break;case`cave`:i=this.cave(e.variant??`open`);break;case`bridge`:i=this.bridge();break;case`summit`:i=this.summit();break;case`zip`:this.zone++,i=this.zip();break;default:i=this.ridge(``,r.kind)}return i}refillDeck(){let e=this.rng,t=dt(this.zone),n=[{kind:`wall`},{kind:`wall`},{kind:`cave`,variant:e.chance(.45)?`shaft`:`open`},{kind:`bridge`}];e.chance(t.pieces.wall-.9)&&n.push({kind:`wall`}),e.chance(t.pieces.cave-.6)&&n.push({kind:`cave`,variant:e.chance(.5)?`shaft`:`open`}),e.chance(t.pieces.bridge-.4)&&n.push({kind:`bridge`});for(let t=n.length-1;t>0;t--){let r=Math.floor(e.next()*(t+1));[n[t],n[r]]=[n[r],n[t]]}this.deck=n}begin(e,t){return{id:this.ids++,kind:e,variant:t,s0:this.path.length,s1:this.path.length,zone:this.zone,seed:this.rng.next()*4294967296>>>0,y0:this.path.y,y1:this.path.y,modes:[],marks:{},obstacles:[],items:[]}}end(e){return e.s1=this.path.length,e.y1=this.path.y,e.modes.length||e.modes.push({s0:e.s0,s1:e.s1,mode:`run`}),this.pieces.push(e),e}nextYaw(e){let t=this.path.yaw;return D(T(t+this.rng.range(-e,e),-.62,.62),0,.3)}camp(){let e=this.begin(`camp`,``);this.path.append(34,(e,t)=>{t.yaw=0,t.pitch=0}),e.marks.start=13,this.end(e),this.nextRowS=46}ridge(e,t){let n=this.rng,r=e===`tutorial`,i=r?`tutorial`:e===`arrival`?`arrival`:n.pick([`crest`,`ledgeL`,`ledgeR`,`forest`]),a=this.begin(`ridge`,i),o=r?230:e===`intro`?150:n.range(78,150),s=this.path.yaw,c=this.path.pitch,l=r?0:this.nextYaw(.5),u=(r?4:n.range(5,10))*w,d=(t===`wall`?n.range(2,5):t===`cave`?1.5:0)*w,f=r?0:n.range(.08,.22)*n.sign(),p=r?0:n.range(1.5,3.5)*w,m=n.range(1,2.5);return this.path.append(o,(e,t)=>{let n=e/o,r=Math.sin(Math.PI*n);t.yaw=D(s,l,k(0,1,n))+f*Math.sin(2*Math.PI*n)*r,t.pitch=(e<o*.5?D(c,u,O(0,14,e)):D(u,d,O(o-16,o,e)))+p*Math.sin(2*Math.PI*n*m)*r*r}),this.end(a),a.modes=[{s0:a.s0,s1:a.s1,mode:`run`}],r?this.tutorialRows(a):this.fill(a,a.s0+16,a.s1-14,`run`),a}wall(e,t){let n=this.rng,r=this.begin(`wall`,e||(n.chance(.3)?`buttress`:`face`)),i=this.path.pitch,a=this.path.yaw,o=Math.max(1,3.4*(Math.PI/2-i)),s=e===`tutorial`?34:n.range(26,54)+this.difficulty(this.path.length)*18;t&&(s=Math.max(28,dt(this.zone).summitAt-this.path.y-o*.6+6));let c=4*w,l=1.8*(Math.PI/2-c);this.path.append(o,(e,t)=>{t.yaw=a,t.pitch=D(i,Math.PI/2,e/o)});let u=this.path.length;this.path.append(s,(e,t)=>{t.yaw=a,t.pitch=Math.PI/2});let d=this.path.length;if(this.path.append(l,(e,t)=>{t.yaw=a,t.pitch=D(Math.PI/2,c,e/l)}),this.end(r),r.marks.climbStart=u,r.marks.climbEnd=d,r.marks.final=+!!t,r.modes=[{s0:r.s0,s1:u-o*.35,mode:`run`},{s0:u-o*.35,s1:d+l*.4,mode:`climb`},{s0:d+l*.4,s1:r.s1,mode:`run`}],e===`tutorial`){let e=u+16;this.addOb(r,`overhang`,e,et(this.golden===0?-1:0)),this.crystalLine(r,u+4,d-4,this.golden===0?0:1,.9,`climb`),this.nextRowS=d+12}else this.fill(r,u+9,d-7,`climb`);return r}cave(e){let t=this.rng,n=this.begin(`cave`,e),r=this.path.yaw,i=this.path.pitch,a=t.range(150,240),o=e===`shaft`?16:18;this.path.append(12,(e,t)=>{t.yaw=r,t.pitch=D(i,0,O(0,12,e))});let s=n.s0+4,c=this.path.length,l=this.nextYaw(.55),u=t.int(2,3),d=t.range(.28,.48)*t.sign(),f=t.range(5,9)*w,p=t.range(1,3)*w;this.path.append(a,(e,t)=>{let n=e/a,i=Math.sin(Math.PI*n);t.yaw=D(r,l,k(0,1,n))+d*Math.sin(Math.PI*2*u*n*.5)*i,t.pitch=p*i-f*Math.sin(Math.PI*2*n*1.5)*i*i});let m=this.path.length,h=this.path.yaw,g=this.path.pitch,_=e===`shaft`?0:4*w;return this.path.append(o,(e,t)=>{t.yaw=h,t.pitch=D(g,_,O(0,o,e))}),this.end(n),n.marks.mouth=s,n.marks.cartStart=c+2,n.marks.cartEnd=m-4,n.marks.exit=m+(e===`shaft`?o:6),n.modes=[{s0:n.s0,s1:c+2,mode:`run`},{s0:c+2,s1:m-4,mode:`cart`},{s0:m-4,s1:n.s1,mode:`run`}],this.fill(n,c+22,m-16,`cart`),n}bridge(){let e=this.rng,t=this.begin(`bridge`,e.chance(.5)?`rope`:`plank`),n=this.path.yaw,r=this.path.pitch,i=e.range(46,74);return this.path.append(i,(e,t)=>{t.yaw=n,t.pitch=D(r,0,O(0,4,e))}),this.end(t),t.marks.deckStart=t.s0+3,t.marks.deckEnd=t.s1-3,t.modes=[{s0:t.s0,s1:t.s1,mode:`run`}],this.fill(t,t.s0+10,t.s1-8,`bridge`),t}summit(){let e=this.begin(`summit`,``),t=this.path.yaw,n=this.path.pitch;this.path.append(40,(e,r)=>{r.yaw=t,r.pitch=D(n,0,O(0,4,e))}),this.end(e),e.marks.flag=e.s0+16,e.modes=[{s0:e.s0,s1:e.s1,mode:`run`}];for(let t=0;t<5;t++)for(let n of[-1,0,1])this.addItem(e,`crystal`,e.s0+8+t*2.6,n,.9+Math.sin(t/4*Math.PI)*.6);return this.nextRowS=e.s1+30,e}zip(){let e=this.rng,t=this.begin(`zip`,``),n=this.path.yaw,r=e.range(150,175),i=6.5*w,a=this.nextYaw(.25);return this.path.append(r,(e,t)=>{let o=e/r;t.yaw=D(n,a,k(0,1,o)),t.pitch=-i*Math.cos(Math.PI*o)*O(0,.08,o)*O(1,.92,o)}),this.end(t),t.marks.zipStart=t.s0+3,t.marks.zipEnd=t.s1-6,t.modes=[{s0:t.s0,s1:t.s0+3,mode:`run`},{s0:t.s0+3,s1:t.s1-6,mode:`zip`},{s0:t.s1-6,s1:t.s1,mode:`run`}],this.fill(t,t.s0+26,t.s1-20,`zip`),t}addOb(e,t,n,r,i){let a=mt[t],o=t===`rockfall`||t===`oncoming`,s={id:this.obIds++,kind:t,clear:a.clear,s:n,depth:a.depth,lanes:r,hTop:a.hTop??0,hBottom:a.hBottom??0,vs:0,trigger:-1/0,moving:o,state:+!o,seed:this.rng.next()*1e9|0,pieceId:e.id,tutorial:i};if(o){let e=_t[t]??-10,r=this.speedAt(n,t===`rockfall`?`climb`:`cart`);s.vs=e,s.trigger=n-r*gt,s.s=n-e*gt}return e.obstacles.push(s),s}addItem(e,t,n,r,i,a){let o={id:this.itemIds++,kind:t,s:n,x:a??r*2.1,h:i,taken:!1,pieceId:e.id,pull:0};return e.items.push(o),o}crystalLine(e,t,n,r,i,a,o=2.3,s=12){let c=Math.min(s,Math.floor((n-t)/o));if(c<2)return;let l=t+(n-t-(c-1)*o)/2;for(let t=0;t<c;t++)this.addItem(e,`crystal`,l+t*o,r,i)}tutorialRows(e){let t=e.s0;this.golden=0,this.crystalLine(e,t+8,t+36,0,.9,`run`),this.addOb(e,`boulder`,t+52,et(0),`lane`),this.crystalLine(e,t+58,t+86,-1,.9,`run`),this.crystalLine(e,t+58,t+86,1,.9,`run`),this.addOb(e,`log`,t+112,7,`jump`);for(let n of[-1,0,1])for(let r=0;r<4;r++)this.addItem(e,`crystal`,t+108+r*2.4,n,.9+Math.sin((r+.5)/4*Math.PI)*1.1);this.addOb(e,`arch`,t+168,7,`duck`);for(let n of[-1,0,1])for(let r=0;r<3;r++)this.addItem(e,`crystal`,t+165+r*2.2,n,.38);this.crystalLine(e,t+182,t+222,0,.9,`run`),this.nextRowS=e.s1+8,this.golden=0}fill(e,t,n,r){let i=this.rng,a=r===`bridge`?`run`:r,o=Math.max(t,this.nextRowS),s=t-6,c=0;for(;c++<200;){let c=this.speedAt(o,a),l=this.difficulty(o);this.rowsSinceBreather>6&&i.chance(.3)&&(this.rowsSinceBreather=0,o+=c*i.range(1.6,2.4));let u=(o-s)/c,d=this.golden;if(i.chance(.5)){let e=u>.85&&i.chance(.3)?2:1,t=this.golden===-1?1:this.golden===1?-1:i.sign();this.golden=T(this.golden+t*e,-1,1)}let f=this.makeRow(e,o,a,r,l);if(!f){this.golden=d;break}if(o+f.depth>n){e.obstacles.splice(e.obstacles.length-f.count,f.count),this.golden=d;break}if(this.rows++,this.rowsSinceBreather++,i.chance(.68)){let n=a===`zip`?1.05:.9;this.crystalLine(e,Math.max(s+3,t-4),o-f.depth/2-3.5,this.golden,n,r)}if(f.action===`jump`&&i.chance(.75))for(let t=0;t<4;t++)this.addItem(e,`crystal`,o-3.3+t*2.2,this.golden,.95+Math.sin((t+.5)/4*Math.PI)*1.05);else if(f.action===`duck`&&i.chance(.7))for(let t=0;t<3;t++)this.addItem(e,`crystal`,o-2+t*2,this.golden,.36);if(l>.15&&i.chance(.07)&&a!==`zip`){let t=this.golden===0?i.sign():0;this.addItem(e,`gem`,o+f.depth/2+c*.35,t,1)}if(o>this.nextPowerS&&a!==`zip`){let t=i.weighted(a===`cart`?{magnet:.55,shield:.45}:{magnet:.38,shield:.32,wings:.3});this.addItem(e,t,o+f.depth/2+c*.45,this.golden,1),this.nextPowerS=o+i.range(420,700)}s=o+f.depth/2;let p=D(1.32,.64,l)*i.range(.95,1.38),m=f.action===`none`?0:.22;o=s+c*(p+m)+i.range(0,2)}i.chance(.5)&&this.crystalLine(e,s+4,Math.min(n,s+30),this.golden,a===`zip`?1.05:.9,r),this.nextRowS=Math.max(o,n+10)}makeRow(e,t,n,r,i){let a=this.rng,o=this.golden,s=[-1,0,1].filter(e=>e!==o),c=e.obstacles.length,l=`none`,u=2,d=ht[n];if(r===`bridge`){let n=a.weighted({gapAll:1.1,gapGold:i>.2?1.2:.4,swing:1,swing2:i>.3?.8:0});if(n===`gapAll`)this.addOb(e,`plankgap`,t,7),l=`jump`;else if(n===`gapGold`)this.addOb(e,`plankgap`,t,et(o)|(a.chance(.5)?et(s[0]):0)),l=`jump`;else if(n===`swing2`||a.chance(.4)){this.addOb(e,`swinglog`,t,et(o)),l=`duck`;for(let n of s)a.chance(.6)&&this.addOb(e,`swinglog`,t,et(n))}else for(let n of s)this.addOb(e,`swinglog`,t,et(n));return u=3,{depth:u,action:l,count:e.obstacles.length-c}}if(n===`zip`){let n=i>.35&&a.chance(.55)?2:1,r=a.chance(.5)?s:[s[1],s[0]];for(let i=0;i<n;i++)this.addOb(e,`bird`,t,et(r[i]));return{depth:1.5,action:l,count:e.obstacles.length-c}}let f={block1:2.6-i,block2:i>.1?1.4+i:.3,jumpAll:d.jump.length?1.25:0,duckAll:d.duck?1.05:0,jumpGold:d.jump.length&&i>.2?.8+i*1.2:0,duckGold:d.duck&&n!==`climb`&&i>.25?.7+i:0,moving:d.moving&&i>.08?1.1+i*.6:0};switch(a.weighted(f)){case`block1`:this.addOb(e,d.block,t,et(a.pick(s))),u=mt[d.block].depth;break;case`block2`:this.addOb(e,d.block,t,et(s[0])),this.addOb(e,d.block,t+(a.chance(.3)?a.range(-.6,.6):0),et(s[1])),u=mt[d.block].depth+.6;break;case`jumpAll`:{let n=a.pick(d.jump);this.addOb(e,n,t,7),u=mt[n].depth,l=`jump`;break}case`duckAll`:this.addOb(e,d.duck,t,7),u=mt[d.duck].depth,l=`duck`;break;case`jumpGold`:{let n=a.pick(d.jump);this.addOb(e,n,t,et(o));for(let r of s)a.chance(.65)?this.addOb(e,d.block,t,et(r)):this.addOb(e,n,t,et(r));u=Math.max(mt[n].depth,mt[d.block].depth),l=`jump`;break}case`duckGold`:{let n=d.duck;this.addOb(e,n,t,et(o));for(let r of s)a.chance(.6)?this.addOb(e,d.block,t,et(r)):this.addOb(e,n,t,et(r));u=Math.max(mt[n].depth,mt[d.block].depth),l=`duck`;break}case`moving`:{let n=a.pick(s);this.addOb(e,d.moving,t,et(n));let r=s.find(e=>e!==n);i>.35&&a.chance(.45)&&this.addOb(e,d.block,t,et(r)),u=mt[d.moving].depth;break}}return{depth:u,action:l,count:e.obstacles.length-c}}};2*Xe.jumpV/Xe.gravity;var yt=()=>({time:0,distance:0,altitude:0,maxAltitude:0,crystals:0,gems:0,jumps:0,ducks:0,lanes:0,nearMisses:0,caves:0,walls:0,bridges:0,ziplines:0,summits:0,powerups:0,shieldSaves:0,revives:0,caveCrystals:0,zone:0}),bt={run:1.45,climb:1.15,cart:2.4,zip:4},xt=class{s=13;sPrev=13;x=0;vx=0;lane=0;laneFrom=0;laneT=9;h=0;vh=0;air=!1;airT=0;duck=0;speed=0;mode=`run`;alive=!0;started=!1;invuln=0;shield=!1;magnet=0;wings=0;fastFall=!1;buffered=null;bufferT=0;stepIndex=0;deathCause=null;killer=null;sinceLane=9;laneDirLast=0;stumble=0;get ducking(){return this.duck>0}get top(){return this.h+(this.duck>0?Xe.duckH:Xe.bodyH)}},St=class{opts;path=new st;gen;player=new xt;events=[];stats=yt();frame=rt();time=0;combo=0;comboT=0;pieceId=-1;tutorialShown=new Set;tutorialWait=null;tutorial;startY=0;constructor(e){this.opts=e,this.tutorial=e.tutorial,this.gen=new vt(this.path,{seed:e.seed,tutorial:e.tutorial});for(let e of this.gen.pieces)this.events.push({t:`piece`,piece:e});this.ensure();let t=this.gen.pieces[0];this.player.s=this.player.sPrev=t.marks.start,this.path.frame(this.player.s,this.frame),this.startY=this.frame.py}ensure(){for(let e of this.gen.ensure(this.player.s+520))this.events.push({t:`piece`,piece:e});for(let e of this.gen.dropBefore(this.player.s-90))this.events.push({t:`unpiece`,piece:e});this.path.trim(this.player.s-90-40)}get altitude(){return this.frame.py-this.startY}input(e){let t=this.player;t.alive&&t.started&&(this.tryAction(e)?t.buffered=null:(t.buffered=e,t.bufferT=Xe.bufferTime))}tryAction(e){let t=this.player,n=this.tutorialWait;switch(e){case`left`:case`right`:{let r=e===`left`?-1:1,i=t.lane+r;return i<-1||i>1||(t.laneFrom=t.lane,t.lane=i,t.laneT=0,t.sinceLane=0,t.laneDirLast=r,this.stats.lanes++,this.events.push({t:`lane`,dir:r,mode:t.mode}),n===`lane`&&(this.tutorialWait=null)),!0}case`up`:return t.mode===`zip`||t.wings>0||!t.air&&(t.duck=0,t.air=!0,t.airT=0,t.vh=Xe.jumpV,t.fastFall=!1,this.stats.jumps++,this.events.push({t:`jump`,mode:t.mode}),n===`jump`&&(this.tutorialWait=null),!0);case`down`:return t.mode===`zip`||t.wings>0?!0:t.air?(t.vh=Math.min(t.vh,Xe.fastFallV),t.fastFall=!0,n===`duck`&&(this.tutorialWait=null),!0):(t.duck=Xe.duckTime,this.stats.ducks++,this.events.push({t:`duck`,mode:t.mode}),n===`duck`&&(this.tutorialWait=null),!0)}}start(){this.player.started=!0}update(e){let t=this.player;if(!t.started){this.path.frame(t.s,this.frame);return}this.time+=e,t.alive&&(this.stats.time+=e);let n=this.gen.modeAt(t.s);if(n!==t.mode){let e=t.mode;t.mode=n,this.events.push({t:`mode`,from:e,to:n}),(n===`cart`||n===`zip`)&&(t.duck=0),n===`cart`&&t.wings>0&&this.endPower(`wings`),this.tutorial&&n===`climb`&&!this.tutorialShown.has(-1)&&(this.tutorialShown.add(-1),this.events.push({t:`tutorial`,step:`climb`}))}let r=t.alive?Qe(t.s)*Ze.mult[n]*(t.stumble>0?.82:1):0;t.speed===0&&t.alive&&(t.speed=r*.55),t.speed+=(r-t.speed)*A(t.alive?Ze.accel:6,e),t.stumble=Math.max(0,t.stumble-e),t.sPrev=t.s,t.alive&&(t.s+=t.speed*e),this.stats.distance=t.s-this.gen.pieces[0].s0;let i=Je(t.lane),a=Xe.laneOmega,o=Xe.laneZeta;if(t.vx+=(a*a*(i-t.x)-2*o*a*t.vx)*e,t.x+=t.vx*e,t.laneT+=e,t.sinceLane+=e,t.wings>0){let r=n===`cart`?0:Xe.wingsHeight;t.h+=(r-t.h)*A(3,e),t.vh=0,t.air=!0,t.wings-=e,t.wings<=0&&this.endPower(`wings`)}else if(t.air&&(t.airT+=e,t.vh-=Xe.gravity*(t.fastFall?1.6:1)*e,t.h+=t.vh*e,t.h<=0)){let e=t.vh<-14;t.h=0,t.vh=0,t.air=!1,this.events.push({t:`land`,mode:n,hard:e}),t.fastFall&&(t.fastFall=!1,t.duck=Xe.duckTime,this.stats.ducks++,this.events.push({t:`duck`,mode:n}))}t.duck>0&&(t.duck=Math.max(0,t.duck-e)),t.invuln>0&&(t.invuln-=e),t.buffered&&(t.bufferT-=e,(t.bufferT<=0||this.tryAction(t.buffered))&&(t.buffered=null)),t.magnet>0&&(t.magnet-=e,t.magnet<=0&&this.endPower(`magnet`));let s=Math.floor(t.s/bt[n]);s!==t.stepIndex&&(t.stepIndex=s,t.alive&&!t.air&&t.duck<=0&&this.events.push({t:`step`,mode:n,foot:s&1})),this.path.frame(t.s,this.frame);let c=this.altitude;this.stats.altitude=c,c>this.stats.maxAltitude&&(this.stats.maxAltitude=c);let l=this.gen.pieceAt(t.s);if(l&&l.id!==this.pieceId){let e=this.gen.pieces.find(e=>e.id===this.pieceId);this.pieceId=l.id,this.events.push({t:`enter`,piece:l}),e&&this.completed(e),l.kind===`ridge`&&l.variant===`arrival`&&(this.stats.zone=l.zone,this.events.push({t:`zone`,zone:l.zone}))}l&&l.kind===`summit`&&t.sPrev<l.marks.flag&&t.s>=l.marks.flag&&(this.stats.summits++,this.events.push({t:`summit`,zone:l.zone,piece:l})),this.comboT>0&&(this.comboT-=e,this.comboT<=0&&(this.combo=0)),this.updateHazards(e),t.alive&&(this.collide(),this.pickups(e)),this.ensure()}completed(e){let t=this.stats;e.kind===`cave`?t.caves++:e.kind===`wall`?t.walls++:e.kind===`bridge`?t.bridges++:e.kind===`zip`&&t.ziplines++}endPower(e){let t=this.player;e===`wings`&&(t.wings=0,t.air=t.h>.01,t.vh=0,t.invuln=Math.max(t.invuln,1.1)),e===`magnet`&&(t.magnet=0),this.events.push({t:`powerEnd`,kind:e})}updateHazards(e){let t=this.player;for(let n of this.gen.pieces){if(n.s0>t.s+140)break;if(!(n.s1<t.s-20))for(let r of n.obstacles)r.moving&&(r.state===0&&t.s>=r.trigger&&t.alive&&(r.state=1,this.events.push({t:`moving`,ob:r})),r.state>=1&&(r.s+=r.vs*e)),r.tutorial&&!this.tutorialShown.has(r.id)&&r.s-t.s<22&&r.s>t.s&&(this.tutorialShown.add(r.id),this.tutorialWait=r.tutorial,this.events.push({t:`tutorial`,step:r.tutorial,ob:r})),!r.passed&&r.s+r.depth/2<t.s-Xe.halfDepth&&r.state!==2&&(r.passed=!0,this.passedOb(r))}}passedOb(e){let t=this.player;if(!t.alive||(this.events.push({t:`passed`,ob:e}),e.clear!==`block`||e.lanes===7))return;let n=9;for(let r of tt(e.lanes))n=Math.min(n,Math.abs(t.x-Je(r)));n<2.6&&t.sinceLane<.55&&(this.stats.nearMisses++,this.events.push({t:`near`,ob:e}))}collide(){let e=this.player;if(e.invuln>0||e.wings>0)return;let t=Xe.halfDepth,n=Math.min(e.sPrev,e.s)-t,r=e.s+t,i=e.sPrev-t,a=e.sPrev+t;for(let t of this.gen.pieces){if(t.s0>r+30)break;if(!(t.s1<n-30))for(let o of t.obstacles){if(o.state===2||o.moving&&o.state===0)continue;let t=o.s-o.depth/2,s=o.s+o.depth/2;if(s<n||t>r)continue;let c=o.clear===`gap`?.72:o.clear===`block`?Xe.obstacleHalfWidth+Xe.halfWidth:1.2,l=!1,u=!1,d=e.x-e.vx*(1/60);for(let t of tt(o.lanes)){let n=Je(t);Math.abs(e.x-n)<c&&(l=!0),Math.abs(d-n)<c&&(u=!0)}if(!l)continue;let f=!1;switch(o.clear){case`block`:f=!0;break;case`jump`:f=e.h<o.hTop;break;case`duck`:f=e.top>o.hBottom;break;case`gap`:{let n=t+.35,r=s-.35;f=!e.air&&e.h<=.02&&e.s>n&&e.s<r;break}}if(!f)continue;let p=a>t&&i<s&&!u;if(o.clear===`block`&&p&&e.lane!==e.laneFrom){let t=e.lane-e.laneFrom;e.lane=e.laneFrom,e.vx=-t*6,e.stumble=.6,e.invuln=.35,this.combo=0,this.events.push({t:`bump`,ob:o,dir:t});return}if(e.shield){e.shield=!1,e.invuln=1.2,this.stats.shieldSaves++,o.clear===`gap`?(e.air=!0,e.vh=Xe.jumpV*1.1):o.state=2,this.events.push({t:`shield`,ob:o});return}this.die(o);return}}}die(e){let t=this.player;t.alive=!1,t.deathCause=e.clear,t.killer=e,t.duck=0,t.buffered=null,this.combo=0,this.events.push({t:`crash`,ob:e,cause:e.clear,mode:t.mode})}pickups(e){let t=this.player,n=t.mode===`zip`?1:t.h+(t.duck>0?.42:.85),r=t.magnet>0?8.5:0;for(let i of this.gen.pieces){if(i.s0>t.s+20)break;if(!(i.s1<t.s-6))for(let a of i.items){if(a.taken)continue;let o=a.s-t.s;o>12||o<-3||(r>0&&(a.kind===`crystal`||a.kind===`gem`)&&(o*o+(a.x-t.x)**2<r*r||a.pull>0)&&(a.pull=Math.min(1,a.pull+e*3.2)),(Math.abs(o)<1.05&&Math.abs(a.x-t.x)<1.05&&Math.abs(a.h-n)<1.25||a.pull>=1)&&this.take(a,i))}}}take(e,t){let n=this.player;switch(e.taken=!0,e.kind){case`crystal`:this.stats.crystals++,t.kind===`cave`&&this.stats.caveCrystals++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=.75,this.events.push({t:`crystal`,item:e,combo:this.combo});break;case`gem`:this.stats.gems++,this.stats.crystals+=10,this.events.push({t:`gem`,item:e});break;case`magnet`:n.magnet=11,this.stats.powerups++,this.events.push({t:`power`,kind:`magnet`,item:e});break;case`shield`:n.shield=!0,this.stats.powerups++,this.events.push({t:`power`,kind:`shield`,item:e});break;case`wings`:if(n.mode===`cart`){n.shield=!0,this.events.push({t:`power`,kind:`shield`,item:e});break}n.wings=6.5,n.duck=0,this.stats.powerups++,this.events.push({t:`power`,kind:`wings`,item:e})}}debugCrash(){if(!this.player.alive)return;let e={id:-1,kind:`boulder`,clear:`block`,s:this.player.s,depth:1,lanes:7,hTop:0,hBottom:0,vs:0,trigger:0,moving:!1,state:1,seed:1,pieceId:-1};this.die(e)}revive(){let e=this.player,t=e.s;e.killer&&(t=Math.max(t,e.killer.s+e.killer.depth/2+.8)),e.s=e.sPrev=t;for(let e of this.gen.pieces)if(!(e.s1<t-5)){if(e.s0>t+60)break;for(let n of e.obstacles)n.s>t-6&&n.s<t+48&&(n.state=2)}e.alive=!0,e.deathCause=null,e.killer=null,e.h=0,e.vh=0,e.air=!1,e.duck=0,e.invuln=2.6,e.x=Je(e.lane),e.vx=0,e.speed=Qe(e.s)*Ze.mult[e.mode]*.6,this.stats.revives++}wingsTrail(){let e=this.player,t=this.gen.pieceAt(e.s);if(!t)return[];let n=[],r=e.lane,i=e.speed||14;for(let a=0;a<26;a++){let o=e.s+14+a*i*.24;a%7==6&&(r=T(r+(r===1?-1:r===-1?1:Math.random()<.5?-1:1),-1,1));let s=this.gen.pieceAt(o)??t;if(this.gen.modeAt(o)===`cart`)break;let c={id:9e5+Math.floor(Math.random()*1e6),kind:`crystal`,s:o,x:Je(r),h:Xe.wingsHeight+.9,taken:!1,pieceId:s.id,pull:0};s.items.push(c),n.push(c)}return n}},Ct=e=>Math.max(5,Math.round(e/5)*5),wt={altitude:{perRun:!0,text:e=>`Reach ${e} m in one climb`,target:e=>Ct(140+e*120),value:e=>e.maxAltitude},crystalsRun:{perRun:!0,text:e=>`Collect ${e} crystals in one climb`,target:e=>Ct(40+e*28),value:e=>e.crystals},crystalsTotal:{perRun:!1,text:e=>`Collect ${e} crystals in total`,target:e=>Ct(200+e*150),value:e=>e.crystals},jumps:{perRun:!0,text:e=>`Jump ${e} times in one climb`,target:e=>Ct(10+e*6),value:e=>e.jumps},ducks:{perRun:!0,text:e=>`Slide ${e} times in one climb`,target:e=>Ct(5+e*4),value:e=>e.ducks},caves:{perRun:!0,text:e=>e===1?`Ride through a crystal cave`:`Ride through ${e} caves in one climb`,target:e=>Math.min(6,1+Math.floor(e/2)),value:e=>e.caves},walls:{perRun:!0,text:e=>`Scale ${e} cliffs in one climb`,target:e=>Math.min(14,2+e),value:e=>e.walls},bridges:{perRun:!1,text:e=>`Cross ${e} rope bridges`,target:e=>Math.min(20,2+e),value:e=>e.bridges},zips:{perRun:!1,text:e=>e===1?`Ride a zipline between peaks`:`Ride ${e} ziplines`,target:e=>Math.min(10,1+Math.floor(e/2)),value:e=>e.ziplines,minRank:1},near:{perRun:!0,text:e=>`Pull off ${e} close calls in one climb`,target:e=>Math.min(25,3+e*2),value:e=>e.nearMisses},power:{perRun:!1,text:e=>`Grab ${e} power-ups`,target:e=>Math.min(30,3+e*2),value:e=>e.powerups},summit:{perRun:!0,text:e=>e===1?`Reach a summit`:`Reach ${e} summits in one climb`,target:e=>Math.min(5,1+Math.floor(e/3)),value:e=>e.summits,minRank:1},caveCrystals:{perRun:!0,text:e=>`Grab ${e} crystals inside caves in one climb`,target:e=>Ct(15+e*8),value:e=>e.caveCrystals},runs:{perRun:!1,text:e=>`Start ${e} climbs`,target:e=>Math.min(15,3+e),value:()=>1},lanes:{perRun:!0,text:e=>`Switch lanes ${e} times in one climb`,target:e=>Ct(25+e*12),value:e=>e.lanes}},Tt=Object.keys(wt),Et=e=>wt[e.kind].text(e.target),Dt=(e,t,n)=>{let r=Tt.filter(t=>!n.includes(t)&&(wt[t].minRank??0)<=e),i=r[(e*7+t*5+Math.floor(Math.random()*r.length))%r.length];return{kind:i,target:wt[i].target(e),progress:0,done:!1,reward:40+e*20+t*10}},Ot=(e,t)=>{let n=[];for(let r of e){if(r.done)continue;let e=wt[r.kind];if(!e.perRun)continue;let i=e.value(t);i>r.progress&&(r.progress=Math.min(r.target,i)),r.progress>=r.target&&(r.done=!0,n.push(r))}return n},kt=(e,t)=>{let n=[];for(let r of e){if(r.done)continue;let e=wt[r.kind],i=e.value(t);r.progress=e.perRun?Math.max(r.progress,Math.min(r.target,i)):Math.min(r.target,r.progress+i),r.progress>=r.target&&(r.done=!0,n.push(r))}return n},At=[`Rookie`,`Scrambler`,`Trailblazer`,`Crag Runner`,`Wall Walker`,`Ridge Racer`,`Alpinist`,`Summiteer`,`Sky Dancer`,`Peak Legend`,`Mountain Myth`],jt=e=>e<At.length?At[e]:`Mountain Myth ${e-At.length+2}`,Mt=class{canvas;ctx;ps=[];dpr=1;running=!1;last=0;onArrive=null;constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.floor(window.innerWidth*this.dpr),this.canvas.height=Math.floor(window.innerHeight*this.dpr)}shards(e,t,n,r=14){for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,a=140+Math.random()*320;this.ps.push({x:e,y:t,vx:Math.cos(r)*a,vy:Math.sin(r)*a-60,life:0,max:.38+Math.random()*.3,size:4+Math.random()*7,rot:Math.random()*6,vr:(Math.random()-.5)*18,color:n[i%n.length],kind:0})}this.start()}confetti(e,t,n=80){let r=[`#ff6a2b`,`#ffc94d`,`#3ff6e1`,`#ff4d8d`,`#8a6bff`,`#ffffff`];for(let i=0;i<n;i++){let n=-Math.PI/2+(Math.random()-.5)*2.2,a=380+Math.random()*520;this.ps.push({x:e,y:t,vx:Math.cos(n)*a,vy:Math.sin(n)*a,life:0,max:1.6+Math.random()*1.2,size:5+Math.random()*6,rot:Math.random()*6,vr:(Math.random()-.5)*14,color:r[i%r.length],kind:1})}this.start()}fly(e,t,n,r,i=10){for(let a=0;a<i;a++){let i=Math.random()*Math.PI*2,o=120+Math.random()*220;this.ps.push({x:e,y:t,vx:Math.cos(i)*o,vy:Math.sin(i)*o,life:-a*.035,max:.9,size:7+Math.random()*4,rot:0,vr:0,color:`#3ff6e1`,kind:2,tx:n,ty:r})}this.start()}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}tick=e=>{let t=this.ctx;if(!t)return;let n=Math.min(.05,(e-this.last)/1e3);this.last=e,t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e=this.ps.length-1;e>=0;e--){let r=this.ps[e];if(r.life+=n,r.life<0)continue;let i=r.life/r.max;if(i>=1){r.kind===2&&this.onArrive?.(),this.ps.splice(e,1);continue}if(r.kind===2&&r.tx!==void 0&&r.ty!==void 0){let e=Math.min(1,i*i*2.2);r.vx*=.9,r.vy*=.9,r.x+=r.vx*n,r.y+=r.vy*n,r.x+=(r.tx-r.x)*e*.35,r.y+=(r.ty-r.y)*e*.35}else{let e=r.kind===1?2.2:3.5;r.vx*=Math.exp(-e*n),r.vy=r.vy*Math.exp(-e*n)+(r.kind===1?520:260)*n,r.x+=r.vx*n,r.y+=r.vy*n}r.rot+=r.vr*n;let a=r.kind===1?i>.7?(1-i)/.3:1:1-i*i;t.save(),t.globalAlpha=Math.max(0,a),t.translate(r.x,r.y),t.rotate(r.rot),t.fillStyle=r.color,r.kind===0?(t.beginPath(),t.moveTo(0,-r.size),t.lineTo(r.size*.55,r.size*.4),t.lineTo(-r.size*.45,r.size*.6),t.closePath(),t.shadowColor=r.color,t.shadowBlur=8,t.fill()):r.kind===1?(t.scale(1,Math.cos(r.rot*2)),t.fillRect(-r.size/2,-r.size/3,r.size,r.size*.66)):(t.beginPath(),t.moveTo(0,-r.size),t.lineTo(r.size*.62,0),t.lineTo(0,r.size),t.lineTo(-r.size*.62,0),t.closePath(),t.shadowColor=`#3ff6e1`,t.shadowBlur=12,t.fill()),t.restore()}this.ps.length?requestAnimationFrame(this.tick):(this.running=!1,t.clearRect(0,0,this.canvas.width,this.canvas.height))}},Nt=(e,t=``)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${t}>${e}</svg>`,F={play:`<svg viewBox="0 0 24 24"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.4-7.2c.6-.4.6-1.3 0-1.7L8.6 3.9C7.9 3.5 7 4 7 4.8z" fill="currentColor"/></svg>`,pause:Nt(`<rect x="6.5" y="5" width="3.5" height="14" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="5" width="3.5" height="14" rx="1.2" fill="currentColor" stroke="none"/>`),gear:Nt(`<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`),gem:`<svg viewBox="0 0 24 24"><defs><linearGradient id="gq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8fff7"/><stop offset=".5" stop-color="#3ff6e1"/><stop offset="1" stop-color="#14a9b8"/></linearGradient></defs><path d="M12 2.2 19.2 9 12 21.8 4.8 9z" fill="url(#gq)"/><path d="M12 2.2 9 9l3 12.8L15 9z" fill="#fff" opacity=".35"/><path d="M4.8 9h14.4" stroke="#fff" stroke-opacity=".55" stroke-width="1"/></svg>`,gemGold:`<svg viewBox="0 0 24 24"><defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".5" stop-color="#ffc94d"/><stop offset="1" stop-color="#d98a12"/></linearGradient></defs><path d="M12 2.2 19.2 9 12 21.8 4.8 9z" fill="url(#gg)"/><path d="M12 2.2 9 9l3 12.8L15 9z" fill="#fff" opacity=".35"/></svg>`,mountain:Nt(`<path d="m3 20 6.5-11 3.5 5.5L15.5 11 21 20z"/><path d="m8 11.6 1.5 1.4 1.5-1.2"/>`),flag:Nt(`<path d="M5 21V4"/><path d="M5 4h11l-2.2 3.5L16 11H5"/>`),target:Nt(`<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>`),calendar:Nt(`<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path d="m9.5 15 1.8 1.8 3.5-3.6"/>`),flame:`<svg viewBox="0 0 24 24"><path d="M12.6 2.5c.4 3-1.6 4.6-3 6.3C8 10.7 7 12.4 7 14.6 7 18 9.3 21 12.4 21c3.2 0 5.6-2.4 5.6-5.8 0-2.7-1.3-4.4-2.6-5.9-.3 1.3-1 2.3-2 2.6.6-3.6-.3-6.9-.8-9.4z" fill="#ff8a3d"/><path d="M12.3 12.6c-1.4 1.3-2.2 2.4-2.2 3.9 0 1.6 1 2.8 2.4 2.8s2.5-1.2 2.5-2.8c0-1.6-1-2.5-1.9-3.4-.1.6-.4 1-.8 1.1z" fill="#ffd27a"/></svg>`,user:Nt(`<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5c.9-3.6 3.9-5.6 7.5-5.6s6.6 2 7.5 5.6"/>`),climber:Nt(`<circle cx="14.5" cy="4.5" r="2"/><path d="m9 21 2.5-6 2.5 2 1 4"/><path d="m11.5 15 1-5 3 2.5 3.5-1"/><path d="m12.5 10-4 1.5L6 9"/>`),lock:Nt(`<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>`),check:Nt(`<path d="m5 12.5 4.5 4.5L19 7.5"/>`,`stroke-width="3"`),close:Nt(`<path d="M6 6l12 12M18 6 6 18"/>`),home:Nt(`<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>`),retry:Nt(`<path d="M20 11.5A8 8 0 1 1 17.7 6"/><path d="M20 4v5h-5"/>`),back:Nt(`<path d="M15 5 8 12l7 7"/>`),soundOn:Nt(`<path d="M4 9.5h3.5L12 5v14l-4.5-4.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>`),vibrate:Nt(`<rect x="7.5" y="3.5" width="9" height="17" rx="2"/><path d="M3.5 9v6M20.5 9v6"/>`),sparkle:Nt(`<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>`),star:`<svg viewBox="0 0 24 24"><path d="m12 2.8 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="currentColor"/></svg>`,trophy:Nt(`<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>`),shield:`<svg viewBox="0 0 24 24"><path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.4 7.5 10 4.3-1.6 7.5-5.4 7.5-10v-6z" fill="#59b8ff"/><path d="M12 2.5v19.5c4.3-1.6 7.5-5.4 7.5-10v-6z" fill="#fff" opacity=".22"/></svg>`,magnet:`<svg viewBox="0 0 24 24"><path d="M5 4h4.5v8a2.5 2.5 0 0 0 5 0V4H19v8a7 7 0 0 1-14 0z" fill="#ff4d6d"/><path d="M5 4h4.5v3.2H5zM14.5 4H19v3.2h-4.5z" fill="#eef2ff"/></svg>`,wings:`<svg viewBox="0 0 24 24"><path d="M2.5 11.5C6 7 10 5.5 12 5.5s6 1.5 9.5 6c-3-1.2-6.3-1.6-9.5-1.6s-6.5.4-9.5 1.6z" fill="#ffb02e"/><path d="M7 10.2 12 19l5-8.8" stroke="#ffd27a" stroke-width="1.2" fill="none"/><circle cx="12" cy="19" r="1.8" fill="#ff6a2b"/></svg>`,privacy:Nt(`<path d="M12 3 5 6v5.5c0 4.2 3 7.8 7 9.5 4-1.7 7-5.3 7-9.5V6z"/><path d="m9 12 2 2 4-4"/>`),info:Nt(`<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>`),hand:`<svg viewBox="0 0 64 64"><defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#dfe6ff"/></linearGradient></defs><circle cx="26" cy="13" r="10" fill="#fff" opacity=".22"/><circle cx="26" cy="13" r="5.5" fill="#fff" opacity=".5"/><path d="M22 13c0-2.2 1.8-4 4-4s4 1.8 4 4v15l2.2-1c1.8-.8 3.8.1 4.5 1.9l.2.6 2-.6c1.9-.5 3.8.6 4.3 2.5l1.6-.2c2-.2 3.7 1.2 3.9 3.2.3 4.7.1 10.4-2.4 14.4-2.3 3.6-6 5.4-11 5.4-6 0-9.3-2.4-12.2-6.8l-6.5-9.9c-1.2-1.8-.7-4.2 1.1-5.4 1.7-1.1 3.9-.8 5.2.7L22 37z" fill="url(#hg)" stroke="#0a1024" stroke-width="2.2" stroke-linejoin="round"/></svg>`,arrow:Nt(`<path d="M5 12h14M13 6l6 6-6 6"/>`)},Pt=`<svg viewBox="0 0 140 140" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <linearGradient id="mk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb066"/><stop offset="1" stop-color="#ff4d1f"/></linearGradient>
  </defs>
  <path d="M14 112 58 34l20 34 12-20 36 64z" stroke="#f2f5ff" stroke-width="6"/>
  <path d="M58 34l-8 30 16-8 12 12" stroke="#c2cbea" stroke-width="4"/>
  <path d="M34 112c10-18 22-24 34-34s20-22 24-34" stroke="url(#mk)" stroke-width="6" stroke-dasharray="1 11"/>
  <circle class="sun" cx="104" cy="30" r="9" fill="url(#mk)"/>
</svg>`,Ft=(e,t)=>{let n=new Float32Array(e*e),r=t,i=()=>(r=r*16807%2147483647)/2147483647,a=[];for(let e=0;e<9;e++)a.push([1+Math.floor(i()*4),1+Math.floor(i()*4),i()*Math.PI*2,.4+i()*.8]);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let i=0;for(let[n,o,s,c]of a)i+=Math.sin((r*n+t*o*(n%2?1:-1))/e*Math.PI*2+s)*c;n[t*e+r]=i}return n},It=(e=256,t=14,n=7,r=`rgba(255,255,255,0.55)`)=>{let i=document.createElement(`canvas`);i.width=i.height=e;let a=i.getContext(`2d`);if(!a)return``;let o=Ft(64,n),s=1/0,c=-1/0;for(let e of o)s=Math.min(s,e),c=Math.max(c,e);let l=e/64;a.strokeStyle=r,a.lineWidth=1;let u=(e,t)=>o[(t+64)%64*64+(e+64)%64];for(let e=1;e<t;e++){let n=s+(c-s)*e/t;a.globalAlpha=e%5==0?1:.55,a.beginPath();for(let e=0;e<64;e++)for(let t=0;t<64;t++){let r=u(t,e),i=u(t+1,e),o=u(t+1,e+1),s=u(t,e+1),c=[],d=(e,t,r,i,a,o)=>{if(e<n!=t<n){let s=(n-e)/(t-e);c.push([(r+(a-r)*s)*l,(i+(o-i)*s)*l])}};d(r,i,t,e,t+1,e),d(i,o,t+1,e,t+1,e+1),d(o,s,t+1,e+1,t,e+1),d(s,r,t,e+1,t,e);for(let e=0;e+1<c.length;e+=2)a.moveTo(c[e][0],c[e][1]),a.lineTo(c[e+1][0],c[e+1][1])}a.stroke()}return i.toDataURL(`image/png`)},Lt=e=>{let t=document.createElement(`template`);return t.innerHTML=e.trim(),t.content.firstElementChild},Rt=(e,t,n,r,i=`rgba(255,255,255,0.14)`)=>{let a=2*Math.PI*e,o=(e+t)*2;return`<svg viewBox="0 0 ${o} ${o}"><circle cx="${o/2}" cy="${o/2}" r="${e}" stroke="${i}" stroke-width="${t}" fill="none"/><circle class="arc" cx="${o/2}" cy="${o/2}" r="${e}" stroke="${r}" stroke-width="${t}" fill="none" stroke-linecap="round" stroke-dasharray="${a}" stroke-dashoffset="${a*(1-n)}"/></svg>`},zt=class{on;root;fx;layer=null;overlay=null;hud=null;hudRefs={};lastAlt=-1;lastCrystals=-1;tapeBase=-1;hintEl=null;toastZone=null;reviveTimer=null;save;constructor(e,t,n){this.on=n,this.root=e,this.fx=new Mt(t),document.documentElement.style.setProperty(`--topo`,`url(${It(320,16,11)})`),e.addEventListener(`pointerdown`,e=>this.press(e),{passive:!0}),e.addEventListener(`pointermove`,e=>this.glare(e),{passive:!0}),window.addEventListener(`resize`,()=>this.fx.resize())}press(e){let t=e.target.closest(`.btn, .tile, .icon-btn, .ccard, .row-item, .seg button, .chip, .rank`);if(t){if(Re.tick(),t.classList.contains(`btn-primary`)||t.classList.contains(`btn-gold`)||t.classList.contains(`btn-crystal`)){let n=t.classList.contains(`btn-gold`)?[`#ffe39a`,`#ffc94d`,`#fff6d8`]:t.classList.contains(`btn-crystal`)?[`#9ffff1`,`#3ff6e1`,`#ffffff`]:[`#ffb066`,`#ff5a1f`,`#ffd27a`,`#ffffff`];this.fx.shards(e.clientX,e.clientY,n,16)}else(t.classList.contains(`tile`)||t.classList.contains(`btn-ghost`))&&this.fx.shards(e.clientX,e.clientY,[`#ffffff`,`#c2cbea`,`#3ff6e1`],8)}}glare(e){let t=e.target.closest(`.holo`);if(!t)return;let n=t.getBoundingClientRect();t.style.setProperty(`--mx`,`${(e.clientX-n.left)/n.width*100}%`),t.style.setProperty(`--my`,`${(e.clientY-n.top)/n.height*100}%`)}bind(e,t){e.querySelectorAll(`[data-act]`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=t[e.dataset.act];r&&r(e)})})}setLayer(e){if(this.layer){let e=this.layer;e.style.transition=`opacity .28s ease, transform .28s ease`,e.style.opacity=`0`,e.style.pointerEvents=`none`,setTimeout(()=>e.remove(),300)}this.layer=e,e&&this.root.appendChild(e)}setOverlay(e){if(this.overlay){let e=this.overlay;e.style.transition=`opacity .22s ease`,e.style.opacity=`0`,e.style.pointerEvents=`none`,setTimeout(()=>e.remove(),240)}this.overlay=e,e&&this.root.appendChild(e),this.layer?.classList.toggle(`under`,!!e&&e.dataset.keep!==`1`)}closeOverlay(){this.setOverlay(null)}get hasOverlay(){return!!this.overlay}static bootSplash(){let e=Lt(`<div id="boot">
      <div class="mark">${Pt.replace(`<svg`,`<svg class="mark"`)}</div>
      <div class="load"><div class="bar"><i style="transform:scaleX(.08)"></i></div></div>
      <div class="t-label dim">Charting the mountain</div>
    </div>`);return document.body.appendChild(e),e}static bootProgress(e,t){let n=e.querySelector(`.bar i`);n&&(n.style.transform=`scaleX(${Math.max(.08,Math.min(1,t))})`)}static bootDone(e){e.classList.add(`gone`),setTimeout(()=>e.remove(),800)}showHome(e){this.save=e,this.hud=null,this.setOverlay(null);let t=[0,1,2].map(t=>`<span style="color:${t<e.stars?`var(--gold)`:`rgba(255,255,255,.22)`}">${F.star}</span>`).join(``),n=e.missions.filter(e=>e.done).length,r=e.daily.streak,i=e.daily.lastPlayed!==new Date().toDateString()&&e.daily.claimed!==Bt(),a=Lt(`<div class="screen home">
      <div class="top stagger">
        <button class="rank" data-act="missions" aria-label="Rank and missions">
          <div class="ring">${Rt(16,3,e.stars/3,`var(--gold)`)}<b>${e.rank+1}</b></div>
          <div class="meta"><span class="name">${jt(e.rank)}</span><span class="stars">${t}</span></div>
        </button>
        <div class="spacer"></div>
        <div class="chip" data-act="climbers"><span class="gem">${F.gem}</span><span class="t-num" data-ref="cr">${te(e.crystals)}</span></div>
        <button class="icon-btn" data-act="settings" aria-label="Settings">${F.gear}</button>
      </div>
      <div class="logo-wrap">
        <div class="logo-kicker t-label"><i></i>Endless mountain<i></i></div>
        <div class="logo"><span class="l1" data-text="${C.mark[0]}">${C.mark[0]}</span><span class="l2 accent" data-text="${C.mark[1]}">${C.mark[1]}</span></div>
        <div class="logo-sub">${C.tagline.map((e,t)=>t===1?`<b>${e}</b>`:e).join(` · `)}</div>
      </div>
      <div class="fill"></div>
      <div class="bottom">
        ${e.best>0?`<div class="best-line"><span class="t-label">Best</span><span class="t-num">${te(e.best)}</span><span class="unit">M</span></div>`:`<div class="best-line"><span class="t-label">Swipe to dodge · jump · slide</span></div>`}
        <button class="btn btn-primary btn-xl" data-act="play">${F.play}<span>Climb</span></button>
        <div class="nav-row">
          <button class="tile" data-act="climbers">${F.climber}<span class="t-label">Climbers</span></button>
          <button class="tile" data-act="missions">${F.target}<span class="t-label">Missions</span>${n?`<span class="dot"></span>`:``}</button>
          <button class="tile" data-act="daily">${F.calendar}<span class="t-label">Daily</span>${r>0?`<span class="badge">${F.flame}${r}</span>`:i?`<span class="dot"></span>`:``}</button>
        </div>
      </div>
    </div>`);this.bind(a,{play:()=>this.on.play(),climbers:()=>this.showClimbers(),missions:()=>this.showMissions(),daily:()=>this.showDaily(),settings:()=>this.showSettings()}),this.setLayer(a)}refreshCrystals(e){this.root.querySelectorAll(`[data-ref="cr"]`).forEach(t=>t.textContent=te(e))}showHud(e){this.setOverlay(null);let t=Lt(`<div class="screen hud passthrough">
      <div class="row">
        <button class="icon-btn tap" data-act="pause" aria-label="Pause">${F.pause}</button>
        <div class="chip" data-ref="chip"><span class="gem">${F.gem}</span><span class="t-num" data-ref="cr">0</span></div>
      </div>
      <div class="alt" data-ref="alt">
        <div class="val"><span class="t-num" data-ref="altv">0</span><span class="unit">M</span></div>
        <div class="next"><div class="bar"><i data-ref="nextbar"></i></div><span class="t-label" data-ref="nextlbl">Summit</span></div>
      </div>
      <div class="tape" data-ref="tape"><div class="ticks" data-ref="ticks"></div><div data-ref="lbls"></div><div class="bestmark" data-ref="bestmark"><span>Best</span></div><div class="now"></div></div>
      <div class="powers" data-ref="powers"></div>
      <div class="toast-zone" data-ref="toasts"></div>
    </div>`);this.bind(t,{pause:()=>this.on.pause()}),this.hudRefs={},t.querySelectorAll(`[data-ref]`).forEach(e=>this.hudRefs[e.dataset.ref]=e),this.toastZone=this.hudRefs.toasts,this.hud=t,this.lastAlt=-1,this.lastCrystals=-1,this.tapeBase=-9999,this.setLayer(t),this.hudRefs.bestmark.style.display=e>0?`block`:`none`}updateHud(e){if(!this.hud)return;let t=this.hudRefs,n=Math.max(0,Math.floor(e.altitude));if(n!==this.lastAlt){this.lastAlt=n,t.altv.textContent=te(n),t.alt.classList.toggle(`gold`,e.best>0&&e.altitude>e.best);let r=Math.max(1,e.nextSummit-e.zoneStart);t.nextbar.style.transform=`scaleX(${Math.max(0,Math.min(1,(e.altitude-e.zoneStart)/r))})`,t.nextlbl.textContent=`Summit ${te(e.nextSummit)} m`}e.crystals!==this.lastCrystals&&(this.lastCrystals>=0&&(t.chip.classList.remove(`bump`),t.chip.offsetWidth,t.chip.classList.add(`bump`)),this.lastCrystals=e.crystals,t.cr.textContent=te(e.crystals));let r=.8,i=t.tape.clientHeight||300,a=e.altitude*r%40;t.ticks.style.transform=`translateY(${a}px)`;let o=Math.floor(e.altitude/50)*50;if(o!==this.tapeBase){this.tapeBase=o;let e=``;for(let t=-4;t<=4;t++){let n=o+t*50;n<0||(e+=`<div class="lbl" data-v="${n}">${n}</div>`)}t.lbls.innerHTML=e}let s=i/2;if(t.lbls.querySelectorAll(`.lbl`).forEach(t=>{let n=Number(t.dataset.v);t.style.top=`${s-(n-e.altitude)*r}px`}),e.best>0){let n=s-(e.best-e.altitude)*r;t.bestmark.style.top=`${Math.max(-20,Math.min(i+20,n))}px`}let c=[];e.magnet>0&&c.push([`magnet`,e.magnet/11,`#ff4d6d`]),e.wings>0&&c.push([`wings`,e.wings/6.5,`#ffb02e`]),e.shield&&c.push([`shield`,1,`#59b8ff`]);let l=c.map(e=>e[0]).join(`,`);t.powers.dataset.key!==l&&(t.powers.dataset.key=l,t.powers.innerHTML=c.map(([e,,t])=>`<div class="power" data-k="${e}">${Rt(23,3,1,t)}<span class="ic">${F[e]}</span></div>`).join(``),t.powers.querySelectorAll(`.ic svg`).forEach(e=>e.classList.add(`ic`)));for(let[e,n]of c){let r=t.powers.querySelector(`[data-k="${e}"]`),i=r?.querySelector(`.arc`);if(i){let e=2*Math.PI*23;i.setAttribute(`stroke-dashoffset`,String(e*(1-n)))}r?.classList.toggle(`ending`,n<.22&&e!==`shield`)}}callout(e,t=``){if(!this.toastZone)return;let n=Lt(`<div class="callout ${t}">${e}</div>`);this.toastZone.appendChild(n),setTimeout(()=>n.remove(),1150)}banner(e,t,n){if(!this.hud)return;let r=Lt(`<div class="banner"><div class="t-label">${e}</div><div class="name">${t}</div><div class="sub">${n}</div></div>`);this.hud.appendChild(r),setTimeout(()=>r.remove(),3500)}missionToast(e){if(!this.hud)return;let t=Lt(`<div class="mtoast glass"><span class="ok">${F.check}</span><span class="txt"><span class="t-label">Mission complete</span><b>${Et(e)}</b></span><span class="reward">+${e.reward}</span></div>`);this.hud.appendChild(t),setTimeout(()=>t.remove(),3100)}hint(e){if(this.hintEl?.remove(),this.hintEl=null,!e||!this.hud)return;let[t,n,r]={lane:[`lr`,`Swipe left or right`,`dodge the boulder`],jump:[`up`,`Swipe up`,`jump the log`],duck:[`down`,`Swipe down`,`slide under the arch`],climb:[`up`,`Same swipes on the wall`,`climb · leap · hug the rock`]}[e],i=Lt(`<div class="hint ${t}"><div class="pad"><div class="hand">${F.hand}</div></div><div class="cap">${n}<small>${r}</small></div></div>`);this.hud.appendChild(i),this.hintEl=i,e===`climb`&&setTimeout(()=>this.hint(null),2600)}danger(e){let t=document.getElementById(`danger`);t&&(t.style.opacity=String(e))}showPause(e){let t=Lt(`<div class="screen" data-keep="1">
      <div class="modal-bg"></div>
      <div class="center-col stagger">
        <div class="t-label">Paused</div>
        <div class="t-title" style="font-size:44px">Catch your<br>breath</div>
        <button class="btn btn-primary btn-xl" data-act="resume">${F.play}<span>Resume</span></button>
        <div class="actions" style="justify-content:center">
          <button class="btn btn-ghost" data-act="restart">${F.retry}<span>Restart</span></button>
          <button class="btn btn-ghost" data-act="home">${F.home}<span>Home</span></button>
        </div>
        <div class="actions" style="justify-content:center;gap:18px">
          <button class="icon-btn" data-act="snd" aria-label="Sound" style="opacity:${e.settings.sound?1:.4}">${F.soundOn}</button>
          <button class="icon-btn" data-act="hap" aria-label="Haptics" style="opacity:${e.settings.haptics?1:.4}">${F.vibrate}</button>
        </div>
      </div>
    </div>`);t.style.zIndex=`20`,this.bind(t,{resume:()=>this.on.resume(),restart:()=>this.on.restart(),home:()=>this.on.home(),snd:t=>{this.on.setSetting(`sound`,!e.settings.sound),t.style.opacity=e.settings.sound?`1`:`0.4`},hap:t=>{this.on.setSetting(`haptics`,!e.settings.haptics),t.style.opacity=e.settings.haptics?`1`:`0.4`}}),this.setOverlay(t)}showRevive(e,t,n,r){let i=2*Math.PI*52,a=Lt(`<div class="screen revive" data-keep="1">
      <div class="modal-bg"></div>
      <div class="center-col stagger">
        <div class="t-label" style="color:var(--signal-hot)">${n}</div>
        <h3>Second wind?</h3>
        <div class="ring-wrap">${Rt(52,6,1,`var(--crystal)`)}<span class="n t-num" data-ref="n">${r}</span></div>
        <button class="btn btn-crystal btn-xl" data-act="revive">${F.retry}<span>Continue</span><span style="display:inline-flex;align-items:center;gap:5px;font-size:18px">${F.gem.replace(`<svg`,`<svg style="width:20px;height:20px"`)}${e}</span></button>
        <div class="t-label dim">You have ${te(t)} crystals</div>
        <button class="linkish" data-act="skip">No thanks</button>
      </div>
    </div>`);a.style.zIndex=`20`,this.bind(a,{revive:()=>this.stopRevive(()=>this.on.revive()),skip:()=>this.stopRevive(()=>this.on.skipRevive())}),this.setOverlay(a);let o=a.querySelector(`.arc`),s=a.querySelector(`[data-ref="n"]`),c=performance.now(),l=()=>{let e=(performance.now()-c)/1e3,t=Math.max(0,1-e/r);o.setAttribute(`stroke-dashoffset`,String(i*(1-t)));let n=Math.ceil(r-e);s.textContent!==String(n)&&n>=0&&(s.textContent=String(Math.max(0,n)),this.on.sound(`tick`)),t<=0?this.stopRevive(()=>this.on.skipRevive()):this.reviveTimer=requestAnimationFrame(l)};this.reviveTimer=requestAnimationFrame(l)}stopRevive(e){this.reviveTimer!==null&&cancelAnimationFrame(this.reviveTimer),this.reviveTimer=null,e()}showResults(e){this.hud=null;let t=e.missions.map(e=>`<div class="mission ${e.done&&!e.justDone?`done`:``}" data-just="${+!!e.justDone}">
          <span class="chk">${F.check}</span>
          <span class="body"><b>${Et(e)}</b><span class="bar"><i style="transform:scaleX(0)" data-f="${Math.min(1,e.progress/e.target)}"></i></span></span>
          <span class="rw">+${e.reward}${F.gem}</span>
        </div>`).join(``),n=e.best-e.altitude,r=Lt(`<div class="screen results">
      <div class="modal-bg" style="background:radial-gradient(120% 80% at 50% 30%, rgba(6,9,24,.25), rgba(4,6,15,.86))"></div>
      <div class="center-col stagger" style="gap:14px">
        <div class="hero">
          <div class="t-label">${e.daily?`Daily climb · you reached`:`You reached`}</div>
          <div class="big"><span class="t-num" data-ref="big">0</span><span class="unit">M</span></div>
          ${e.newBest?`<div class="stamp">New best!</div>`:e.best>0?`<div class="togo">${n<=60?`Only <b>${te(n)} m</b> short of your best!`:`Best <b>${te(e.best)} m</b>`}</div>`:``}
          ${e.rankUp?`<div class="stamp" style="background:linear-gradient(180deg,#b9fff4,#3ff6e1 60%,#12bfb4);transform:rotate(3deg)">Rank up · ${e.rankUp}</div>`:``}
        </div>
        <div class="stats">
          <div class="stat"><span class="t-num" style="color:var(--crystal)">+${te(e.crystals)}</span><span class="t-label">Crystals</span></div>
          <div class="stat"><span class="t-num">${e.summits}</span><span class="t-label">Summits</span></div>
          <div class="stat"><span class="t-num" style="font-size:13px;line-height:22px;font-stretch:100%">${e.zoneName}</span><span class="t-label">Reached</span></div>
        </div>
        <div class="missions">${t}</div>
        <div class="actions">
          <button class="icon-btn" data-act="home" aria-label="Home" style="width:64px;height:64px">${F.home}</button>
          <button class="btn btn-primary" data-act="again" style="height:68px">${F.retry}<span>Climb again</span></button>
        </div>
      </div>
    </div>`);this.bind(r,{home:()=>this.on.home(),again:()=>e.daily?this.on.daily():this.on.restart()}),this.setOverlay(null),this.setLayer(r);let i=r.querySelector(`[data-ref="big"]`),a=performance.now(),o=900+Math.min(900,e.altitude),s=()=>{let t=Math.min(1,(performance.now()-a)/o),n=1-(1-t)**4;if(i.textContent=te(e.altitude*n),t<1)requestAnimationFrame(s);else if(e.newBest){let e=i.getBoundingClientRect();this.fx.confetti(e.left+e.width/2,e.top+e.height/2,110),this.on.sound(`unlock`),Re.success()}};requestAnimationFrame(s),setTimeout(()=>{r.querySelectorAll(`.mission`).forEach((e,t)=>{let n=e.querySelector(`i`);n.style.transform=`scaleX(${n.dataset.f})`,e.dataset.just===`1`&&setTimeout(()=>{e.classList.add(`done`);let t=e.getBoundingClientRect();this.fx.shards(t.right-30,t.top+t.height/2,[`#3dffb0`,`#3ff6e1`,`#ffffff`],18),this.on.sound(`buy`),Re.medium()},900+t*260)})},500)}showClimbers(){let e=this.save;this.on.sound(`open`),this.on.cameraMode(`closeup`);let t=Math.max(0,Ge.findIndex(t=>t.id===e.climber)),n=t=>{let n=Ke(t),r=e.owned.includes(t),i=e.climber===t,a=[n.jacket,n.scarf,n.beanie,n.pack].map(e=>`<i style="background:#${e.toString(16).padStart(6,`0`)}"></i>`).join(``),o=i?`<button class="btn btn-ghost" disabled style="opacity:.75">${F.check}<span>Equipped</span></button>`:r?`<button class="btn btn-primary" data-act="equip" data-id="${t}"><span>Equip</span></button>`:`<button class="btn ${e.crystals>=n.price?`btn-crystal`:`btn-ghost`}" data-act="buy" data-id="${t}">${F.lock}<span>${te(n.price)}</span>${F.gem.replace(`<svg`,`<svg style="width:18px;height:18px"`)}</button>`;return`<div class="ccard glass holo" data-id="${t}">
        <div class="sw">${a}</div>
        <h3>${n.name}</h3>
        <p class="t-body">${n.tagline}</p>
        ${r?`<span class="owned">${F.check.replace(`<svg`,`<svg style="width:12px;height:12px"`)} Owned</span>`:`<span class="owned" style="color:var(--frost-3)">${F.lock.replace(`<svg`,`<svg style="width:12px;height:12px"`)} Locked</span>`}
        ${o}
      </div>`},r=Lt(`<div class="screen">
      <div class="head-row stagger">
        <button class="icon-btn" data-act="back" aria-label="Back">${F.back}</button>
        <h2>Climbers</h2>
        <div class="chip"><span class="gem">${F.gem}</span><span class="t-num" data-ref="cr">${te(e.crystals)}</span></div>
      </div>
      <div class="sheet"><div class="carousel">${Ge.map(e=>n(e.id)).join(``)}</div></div>
    </div>`);r.style.zIndex=`15`;let i=r.querySelector(`.carousel`),a=()=>this.bind(r,{back:()=>{this.on.sound(`back`),this.on.closeClimbers(),this.on.cameraMode(`home`),this.setOverlay(null),this.showHome(this.save)},equip:e=>{this.on.selectClimber(e.dataset.id),this.on.sound(`toggle`),o(e.dataset.id)},buy:e=>{let t=e.dataset.id;if(this.on.buyClimber(t)){let n=e.getBoundingClientRect();this.fx.confetti(n.left+n.width/2,n.top,70),Re.success(),o(t)}else e.animate([{transform:`translateX(0)`},{transform:`translateX(-8px)`},{transform:`translateX(8px)`},{transform:`translateX(0)`}],{duration:260}),Re.warning()}}),o=e=>{i.querySelector(`[data-id="${e}"]`),Ge.forEach(e=>{let t=i.querySelector(`.ccard[data-id="${e.id}"]`),r=Lt(n(e.id));t.classList.contains(`active`)&&r.classList.add(`active`),t.replaceWith(r)}),this.refreshCrystals(this.save.crystals),a()};a(),this.setOverlay(null),this.setLayer(r);let s=``,c=()=>{let e=i.scrollLeft+i.clientWidth/2,t=null,n=1/0;i.querySelectorAll(`.ccard`).forEach(r=>{let i=Math.abs(r.offsetLeft+r.offsetWidth/2-e);i<n&&(n=i,t=r)}),t&&t.dataset.id!==s&&(s=t.dataset.id,i.querySelectorAll(`.ccard`).forEach(e=>e.classList.toggle(`active`,e===t)),this.on.previewClimber(s),Re.tick(),this.on.sound(`tick`))};i.addEventListener(`scroll`,c,{passive:!0}),requestAnimationFrame(()=>{let e=i.children[t];i.scrollLeft=e.offsetLeft+e.offsetWidth/2-i.clientWidth/2,c()})}showMissions(){let e=this.save;this.on.sound(`open`);let t=[0,1,2].map(t=>`<span style="color:${t<e.stars?`var(--gold)`:`rgba(255,255,255,.2)`};width:22px;height:22px;display:inline-block">${F.star}</span>`).join(``),n=e.missions.map(e=>`<div class="mission ${e.done?`done`:``}"><span class="chk">${F.check}</span><span class="body"><b>${Et(e)}</b><span class="bar"><i style="transform:scaleX(${Math.min(1,e.progress/e.target)})"></i></span><span class="t-label dim">${te(e.progress)} / ${te(e.target)}</span></span><span class="rw">+${e.reward}${F.gem}</span></div>`).join(``),r=Lt(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${F.back}</button>
        <h2>Missions</h2>
      </div>
      <div class="center-col stagger" style="justify-content:flex-start;margin-top:22px;gap:14px">
        <div class="glass topo holo panel" style="display:flex;align-items:center;gap:16px;text-align:left">
          <div class="rank" style="padding:0;background:none;box-shadow:none"><div class="ring" style="width:64px;height:64px">${Rt(28,4,e.stars/3,`var(--gold)`)}<b style="font-size:24px">${e.rank+1}</b></div></div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <span class="t-label">Rank</span>
            <span class="t-title" style="font-size:24px">${jt(e.rank)}</span>
            <span class="stars" style="gap:4px">${t}</span>
          </div>
        </div>
        <div class="t-body" style="font-size:13.5px;max-width:330px">Each mission pays crystals and a star. Three stars rank you up — and the next missions get bolder.</div>
        <div class="missions">${n}</div>
        <button class="btn btn-primary" data-act="play" style="width:min(100%,400px)">${F.play}<span>Climb</span></button>
      </div>
    </div>`);r.style.zIndex=`15`,this.bind(r,{back:()=>{this.on.sound(`back`),this.setOverlay(null)},play:()=>{this.setOverlay(null),this.on.play()}}),this.setOverlay(r)}showDaily(){let e=this.save;this.on.sound(`open`);let t=new Date().toLocaleDateString(`en-US`,{month:`short`,day:`numeric`}),n=e.daily.date===Bt(),r=Math.min(100,30+e.daily.streak*10),i=Lt(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${F.back}</button>
        <h2>Daily climb</h2>
      </div>
      <div class="center-col stagger">
        <div class="glass topo holo panel" style="display:flex;flex-direction:column;gap:16px;align-items:center">
          <span class="t-label">${t} · same mountain for everyone</span>
          <div style="display:flex;align-items:center;gap:10px"><span style="width:44px;height:44px;display:inline-block">${F.flame}</span><span class="t-num" style="font-size:52px">${e.daily.streak}</span></div>
          <span class="t-label">Day streak</span>
          <div class="stats" style="width:100%;grid-template-columns:1fr 1fr">
            <div class="stat"><span class="t-num">${n?te(e.daily.best):`—`}</span><span class="t-label">Today's best</span></div>
            <div class="stat"><span class="t-num" style="color:var(--crystal)">+${r}</span><span class="t-label">${e.daily.claimed===Bt()?`Claimed`:`First climb bonus`}</span></div>
          </div>
          <p class="t-body" style="margin:0;font-size:13.5px">One hand-picked mountain a day. Climb it every day to grow your streak and your bonus.</p>
        </div>
        <button class="btn btn-gold btn-xl" data-act="go">${F.play}<span>Start daily</span></button>
      </div>
    </div>`);i.style.zIndex=`15`,this.bind(i,{back:()=>{this.on.sound(`back`),this.setOverlay(null)},go:()=>{this.setOverlay(null),this.on.daily()}}),this.setOverlay(i)}showSettings(){let e=this.save;this.on.sound(`open`);let t=e.settings.quality,n=Lt(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${F.back}</button>
        <h2>Settings</h2>
      </div>
      <div class="center-col" style="justify-content:flex-start;margin-top:14px">
        <div class="glass panel topo" style="text-align:left">
          <div class="list">
            <button class="row-item" data-act="sound">${F.soundOn.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Sound</span><span class="switch ${e.settings.sound?`on`:``}"></span></button>
            <button class="row-item" data-act="haptics">${F.vibrate.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Vibration</span><span class="switch ${e.settings.haptics?`on`:``}"></span></button>
            <div class="row-item">${F.sparkle.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Graphics</span>
              <span class="seg">${[`battery`,`auto`,`high`].map(e=>`<button data-act="q" data-q="${e}" class="${t===e?`on`:``}">${e===`battery`?`Saver`:e===`auto`?`Auto`:`High`}</button>`).join(``)}</span>
            </div>
            <button class="row-item" data-act="privacy">${F.privacy.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Privacy policy</span>${F.arrow.replace(`<svg`,`<svg style="width:18px;height:18px;opacity:.6"`)}</button>
            <button class="row-item" data-act="support">${F.info.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Help &amp; support</span>${F.arrow.replace(`<svg`,`<svg style="width:18px;height:18px;opacity:.6"`)}</button>
            <button class="row-item" data-act="reset">${F.retry.replace(`<svg`,`<svg class="lead"`)}<span class="grow" style="color:var(--ember)">Reset progress</span></button>
          </div>
        </div>
        <div class="foot t-label dim">${C.name} ${C.version} · No ads · No tracking · Plays offline</div>
      </div>
    </div>`);n.style.zIndex=`15`,this.bind(n,{back:()=>{this.on.sound(`back`),this.setOverlay(null)},sound:t=>{this.on.setSetting(`sound`,!e.settings.sound),t.querySelector(`.switch`).classList.toggle(`on`,e.settings.sound),this.on.sound(`toggle`)},haptics:t=>{this.on.setSetting(`haptics`,!e.settings.haptics),t.querySelector(`.switch`).classList.toggle(`on`,e.settings.haptics),this.on.sound(`toggle`),Re.medium()},q:e=>{this.on.setSetting(`quality`,e.dataset.q),n.querySelectorAll(`.seg button`).forEach(t=>t.classList.toggle(`on`,t===e)),this.on.sound(`toggle`)},privacy:()=>this.on.openLink(C.privacyUrl),support:()=>this.on.openLink(C.supportUrl),reset:e=>{e.dataset.confirm===`1`?(this.on.resetProgress(),this.setOverlay(null)):(e.dataset.confirm=`1`,e.querySelector(`.grow`).textContent=`Tap again to erase everything`,this.on.sound(`error`),Re.warning())}}),this.setOverlay(n)}flash(e=.5,t=220){let n=document.getElementById(`flash`);n&&n.animate([{opacity:e},{opacity:0}],{duration:t,easing:`ease-out`})}},Bt=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`},Vt=`attached`,Ht=1e3,Ut=1001,Wt=1002,Gt=1003,Kt=1004,qt=1005,Jt=1006,Yt=1007,Xt=1008,Zt=1009,Qt=1010,$t=1011,en=1012,tn=1013,nn=1014,rn=1015,an=1016,on=1017,sn=1018,cn=1020,ln=35902,un=35899,dn=1021,fn=1022,pn=1023,mn=1026,hn=1027,gn=1028,_n=1029,vn=1030,yn=1031,bn=1033,xn=33776,Sn=33777,Cn=33778,wn=33779,Tn=35840,En=35841,Dn=35842,On=35843,kn=36196,An=37492,jn=37496,Mn=37488,Nn=37489,Pn=37490,Fn=37491,In=37808,Ln=37809,Rn=37810,zn=37811,Bn=37812,Vn=37813,Hn=37814,Un=37815,Wn=37816,Gn=37817,Kn=37818,qn=37819,Jn=37820,Yn=37821,Xn=36492,Zn=36494,Qn=36495,$n=36283,er=36284,tr=36285,nr=36286,rr=2300,ir=2301,ar=2302,or=2303,sr=2400,cr=2401,lr=2402,ur=3200,dr=`srgb`,fr=`srgb-linear`,pr=`linear`,mr=`srgb`,hr=7680,gr=35044,_r=35048,vr=2e3;function yr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function br(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function xr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Sr(){let e=xr(`canvas`);return e.style.display=`block`,e}var Cr={};function wr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Tr(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=Tr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=Tr(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Er(...e){let t=e.join(` `);t in Cr||(Cr[t]=!0,I(...e))}function Dr(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Or={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},kr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ar=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),jr=Math.PI/180,Mr=180/Math.PI;function Nr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ar[e&255]+Ar[e>>8&255]+Ar[e>>16&255]+Ar[e>>24&255]+`-`+Ar[t&255]+Ar[t>>8&255]+`-`+Ar[t>>16&15|64]+Ar[t>>24&255]+`-`+Ar[n&63|128]+Ar[n>>8&255]+`-`+Ar[n>>16&255]+Ar[n>>24&255]+Ar[r&255]+Ar[r>>8&255]+Ar[r>>16&255]+Ar[r>>24&255]).toLowerCase()}function Pr(e,t,n){return Math.max(t,Math.min(n,e))}function Fr(e,t){return(e%t+t)%t}function Ir(e,t,n){return(1-n)*e+n*t}function Lr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Rr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var zr=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pr(this.x,e.x,t.x),this.y=Pr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pr(this.x,e,t),this.y=Pr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Br=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pr(this.x,e.x,t.x),this.y=Pr(this.y,e.y,t.y),this.z=Pr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pr(this.x,e,t),this.y=Pr(this.y,e,t),this.z=Pr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vr=new R,Hr=new Br,z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Er(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return Er(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return Er(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ur=new z,Wr=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gr=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kr(){let e={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Jr(e.r),e.g=Jr(e.g),e.b=Jr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Yr(e.r),e.g=Yr(e.g),e.b=Yr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?pr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Er(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Er(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[fr]:{primaries:t,whitePoint:r,transfer:pr,toXYZ:Wr,fromXYZ:Gr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:dr},outputColorSpaceConfig:{drawingBufferColorSpace:dr}},[dr]:{primaries:t,whitePoint:r,transfer:mr,toXYZ:Wr,fromXYZ:Gr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:dr}}}),e}var qr=Kr();function Jr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Yr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Xr,Zr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=xr(`canvas`)),Xr.width=e.width,Xr.height=e.height;let t=Xr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Jr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Jr(t[e]/255)*255):t[e]=Jr(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Qr=0,$r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qr++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ei(r[t].image)):e.push(ei(r[t]))}else e=ei(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ei(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Zr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var ti=0,ni=new R,ri=class e extends kr{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ut,i=Ut,a=Jt,o=Xt,s=pn,c=Zt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ti++}),this.uuid=Nr(),this.name=``,this.source=new $r(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new zr(0,0),this.repeat=new zr(1,1),this.center=new zr(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ni).x}get height(){return this.source.getSize(ni).y}get depth(){return this.source.getSize(ni).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ht:e.x-=Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Wt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ht:e.y-=Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Wt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null,ri.DEFAULT_MAPPING=300,ri.DEFAULT_ANISOTROPY=1;var ii=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pr(this.x,e.x,t.x),this.y=Pr(this.y,e.y,t.y),this.z=Pr(this.z,e.z,t.z),this.w=Pr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pr(this.x,e,t),this.y=Pr(this.y,e,t),this.z=Pr(this.z,e,t),this.w=Pr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ai=class extends kr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ii(0,0,e,t),this.scissorTest=!1,this.viewport=new ii(0,0,e,t),this.textures=[];let r=new ri({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},oi=class extends ai{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},si=class extends ri{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ci=class extends ri{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},B=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),i=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(di,e,fi)}lookAt(e,t,n){let r=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),pi.crossVectors(n,hi),pi.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),pi.crossVectors(n,hi)),pi.normalize(),mi.crossVectors(hi,pi),r[0]=pi.x,r[4]=mi.x,r[8]=hi.x,r[1]=pi.y,r[5]=mi.y,r[9]=hi.y,r[2]=pi.z,r[6]=mi.z,r[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=li.set(r[0],r[1],r[2]).length(),o=li.set(r[4],r[5],r[6]).length(),s=li.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ui.copy(this);let c=1/a,l=1/o,u=1/s;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=l,ui.elements[5]*=l,ui.elements[6]*=l,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=vr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=vr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},li=new R,ui=new B,di=new R(0,0,0),fi=new R(1,1,1),pi=new R,mi=new R,hi=new R,gi=new B,_i=new Br,vi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Pr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Pr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Pr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Pr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Pr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Pr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _i.setFromEuler(this),this.setFromQuaternion(_i,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER=`XYZ`;var yi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bi=0,xi=new R,Si=new Br,Ci=new B,wi=new R,Ti=new R,Ei=new R,Di=new Br,Oi=new R(1,0,0),ki=new R(0,1,0),Ai=new R(0,0,1),ji={type:`added`},Mi={type:`removed`},Ni={type:`childadded`,child:null},Pi={type:`childremoved`,child:null},Fi=class e extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bi++}),this.uuid=Nr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new vi,r=new Br,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new B},normalMatrix:{value:new z}}),this.matrix=new B,this.matrixWorld=new B,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Oi,e)}rotateY(e){return this.rotateOnAxis(ki,e)}rotateZ(e){return this.rotateOnAxis(Ai,e)}translateOnAxis(e,t){return xi.copy(e).applyQuaternion(this.quaternion),this.position.add(xi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oi,e)}translateY(e){return this.translateOnAxis(ki,e)}translateZ(e){return this.translateOnAxis(Ai,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wi.copy(e):wi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ti,wi,this.up):Ci.lookAt(wi,Ti,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(Ci),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ji),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mi),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ji),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Ei),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Di,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Fi.DEFAULT_UP=new R(0,1,0),Fi.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=class extends Fi{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Li={type:`move`},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Li)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Hi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qr.workingColorSpace){return this.r=e,this.g=t,this.b=n,qr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qr.workingColorSpace){if(e=Fr(e,1),t=Pr(t,0,1),n=Pr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Hi(i,r,e+1/3),this.g=Hi(i,r,e),this.b=Hi(i,r,e-1/3)}return qr.colorSpaceToWorking(this,r),this}setStyle(e,t=dr){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dr){let n=zi[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dr){return qr.workingToColorSpace(Ui.copy(this),e),Math.round(Pr(Ui.r*255,0,255))*65536+Math.round(Pr(Ui.g*255,0,255))*256+Math.round(Pr(Ui.b*255,0,255))}getHexString(e=dr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qr.workingColorSpace){qr.workingToColorSpace(Ui.copy(this),t);let n=Ui.r,r=Ui.g,i=Ui.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=qr.workingColorSpace){return qr.workingToColorSpace(Ui.copy(this),t),e.r=Ui.r,e.g=Ui.g,e.b=Ui.b,e}getStyle(e=dr){qr.workingToColorSpace(Ui.copy(this),e);let t=Ui.r,n=Ui.g,r=Ui.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Vi);let n=Ir(Bi.h,Vi.h,t),r=Ir(Bi.s,Vi.s,t),i=Ir(Bi.l,Vi.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ui=new V;V.NAMES=zi;var Wi=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new V(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends Fi{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ki=new R,qi=new R,Ji=new R,Yi=new R,Xi=new R,Zi=new R,Qi=new R,$i=new R,ea=new R,ta=new R,na=new ii,ra=new ii,ia=new ii,aa=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ki.subVectors(e,t),r.cross(Ki);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ki.subVectors(r,t),qi.subVectors(n,t),Ji.subVectors(e,t);let a=Ki.dot(Ki),o=Ki.dot(qi),s=Ki.dot(Ji),c=qi.dot(qi),l=qi.dot(Ji),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yi)!==null&&Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yi.x),s.addScaledVector(a,Yi.y),s.addScaledVector(o,Yi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return na.setScalar(0),ra.setScalar(0),ia.setScalar(0),na.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(na,i.x),a.addScaledVector(ra,i.y),a.addScaledVector(ia,i.z),a}static isFrontFacing(e,t,n,r){return Ki.subVectors(n,t),qi.subVectors(e,t),Ki.cross(qi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Ki.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xi.subVectors(r,n),Zi.subVectors(i,n),$i.subVectors(e,n);let s=Xi.dot($i),c=Zi.dot($i);if(s<=0&&c<=0)return t.copy(n);ea.subVectors(e,r);let l=Xi.dot(ea),u=Zi.dot(ea);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Xi,a);ta.subVectors(e,i);let f=Xi.dot(ta),p=Zi.dot(ta);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oa=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ca.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ca.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ca.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ca):ca.fromBufferAttribute(r,t),ca.applyMatrix4(e.matrixWorld),this.expandByPoint(ca);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ca),ca.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),_a.subVectors(this.max,ga),ua.subVectors(e.a,ga),da.subVectors(e.b,ga),fa.subVectors(e.c,ga),pa.subVectors(da,ua),ma.subVectors(fa,da),ha.subVectors(ua,fa);let t=[0,-pa.z,pa.y,0,-ma.z,ma.y,0,-ha.z,ha.y,pa.z,0,-pa.x,ma.z,0,-ma.x,ha.z,0,-ha.x,-pa.y,pa.x,0,-ma.y,ma.x,0,-ha.y,ha.x,0];return!ba(t,ua,da,fa,_a)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,ua,da,fa,_a))?!1:(va.crossVectors(pa,ma),t=[va.x,va.y,va.z],ba(t,ua,da,fa,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ca).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ca).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sa=[new R,new R,new R,new R,new R,new R,new R,new R],ca=new R,la=new oa,ua=new R,da=new R,fa=new R,pa=new R,ma=new R,ha=new R,ga=new R,_a=new R,va=new R,ya=new R;function ba(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ya.fromArray(e,a);let o=i.x*Math.abs(ya.x)+i.y*Math.abs(ya.y)+i.z*Math.abs(ya.z),s=t.dot(ya),c=n.dot(ya),l=r.dot(ya);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xa=new R,Sa=new zr,Ca=0,wa=class extends kr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ca++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=gr,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXYZ(t,xa.x,xa.y,xa.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix4(e),this.setXYZ(t,xa.x,xa.y,xa.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyNormalMatrix(e),this.setXYZ(t,xa.x,xa.y,xa.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.transformDirection(e),this.setXYZ(t,xa.x,xa.y,xa.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rr(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rr(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rr(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rr(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rr(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rr(t,this.array),n=Rr(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rr(t,this.array),n=Rr(n,this.array),r=Rr(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Rr(t,this.array),n=Rr(n,this.array),r=Rr(r,this.array),i=Rr(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Ta=class extends wa{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ea=class extends wa{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Da=class extends wa{constructor(e,t,n){super(new Float32Array(e),t,n)}},Oa=new oa,ka=new R,Aa=new R,ja=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Oa.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);let t=ka.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ka,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Aa)),this.expandByPoint(ka.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ma=0,Na=new B,Pa=new Fi,Fa=new R,Ia=new oa,La=new oa,Ra=new R,za=class e extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ma++}),this.uuid=Nr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(yr(e)?Ea:Ta)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Na.makeRotationFromQuaternion(e),this.applyMatrix4(Na),this}rotateX(e){return Na.makeRotationX(e),this.applyMatrix4(Na),this}rotateY(e){return Na.makeRotationY(e),this.applyMatrix4(Na),this}rotateZ(e){return Na.makeRotationZ(e),this.applyMatrix4(Na),this}translate(e,t,n){return Na.makeTranslation(e,t,n),this.applyMatrix4(Na),this}scale(e,t,n){return Na.makeScale(e,t,n),this.applyMatrix4(Na),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fa).negate(),this.translate(Fa.x,Fa.y,Fa.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Da(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ia.setFromBufferAttribute(n),this.morphTargetsRelative?(Ra.addVectors(this.boundingBox.min,Ia.min),this.boundingBox.expandByPoint(Ra),Ra.addVectors(this.boundingBox.max,Ia.max),this.boundingBox.expandByPoint(Ra)):(this.boundingBox.expandByPoint(Ia.min),this.boundingBox.expandByPoint(Ia.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(Ia.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];La.setFromBufferAttribute(n),this.morphTargetsRelative?(Ra.addVectors(Ia.min,La.min),Ia.expandByPoint(Ra),Ra.addVectors(Ia.max,La.max),Ia.expandByPoint(Ra)):(Ia.expandByPoint(La.min),Ia.expandByPoint(La.max))}Ia.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ra.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ra));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ra.fromBufferAttribute(a,t),o&&(Fa.fromBufferAttribute(e,t),Ra.add(Fa)),r=Math.max(r,n.distanceToSquared(Ra))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new wa(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new zr,f=new zr,p=new zr,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new wa(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ra.fromBufferAttribute(e,t),Ra.normalize(),e.setXYZ(t,Ra.x,Ra.y,Ra.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wa(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ba=new R,Va=new R,Ha=new z,Ua=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ba.subVectors(n,t).cross(Va.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ba),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ha.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wa=0,Ga=class extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wa++}),this.uuid=Nr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new V().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ua().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new zr().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zr().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ka=new R,qa=new R,Ja=new R,Ya=new R,Xa=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ka)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ka.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ka.copy(this.origin).addScaledVector(this.direction,t),Ka.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qa.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Ya.copy(this.origin).sub(qa);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ja),o=Ya.dot(this.direction),s=-Ya.dot(Ja),c=Ya.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qa).addScaledVector(Ja,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ka.subVectors(e.center,this.origin);let n=Ka.dot(this.direction),r=Ka.dot(Ka)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ka)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,j;if(y>=b&&y>=x?(w=s,D=u,A=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=O-ne*A,ce=k-re*A,le=ee-ne*j,ue=te-re*j,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*A+pe*j);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Za=class extends Ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qa=new B,$a=new Xa,eo=new ja,to=new R,no=new R,ro=new R,io=new R,ao=new R,oo=new R,so=new R,co=new R,lo=class extends Fi{constructor(e=new za,t=new Za){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){oo.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ao.fromBufferAttribute(s,e),a?oo.addScaledVector(ao,r):oo.addScaledVector(ao.sub(t),r))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),$a.copy(e.ray).recast(e.near),!(eo.containsPoint($a.origin)===!1&&($a.intersectSphere(eo,to)===null||$a.origin.distanceToSquared(to)>(e.far-e.near)**2))&&(Qa.copy(i).invert(),$a.copy(e.ray).applyMatrix4(Qa),(n.boundingBox===null||$a.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,$a)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=fo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=fo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=fo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=fo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function uo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;co.copy(s),co.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(co);return l<n.near||l>n.far?null:{distance:l,point:co.clone(),object:e}}function fo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,no),e.getVertexPosition(c,ro),e.getVertexPosition(l,io);let u=uo(e,t,n,r,no,ro,io,so);if(u){let e=new R;aa.getBarycoord(so,no,ro,io,e),i&&(u.uv=aa.getInterpolatedAttribute(i,s,c,l,e,new zr)),a&&(u.uv1=aa.getInterpolatedAttribute(a,s,c,l,e,new zr)),o&&(u.normal=aa.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};aa.getNormal(no,ro,io,t.normal),u.face=t,u.barycoord=e}return u}var po=new ii,mo=new ii,ho=new ii,go=new ii,_o=new B,vo=new R,yo=new ja,bo=new B,xo=new Xa,So=class extends lo{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=Vt,this.bindMatrix=new B,this.bindMatrixInverse=new B,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oa),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ja),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,vo),this.boundingSphere.expandByPoint(vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(r),e.ray.intersectsSphere(yo)!==!1&&(bo.copy(r).invert(),xo.copy(e.ray).applyMatrix4(bo),(this.boundingBox===null||xo.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,xo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ii,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():I(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;mo.fromBufferAttribute(r.attributes.skinIndex,e),ho.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(po.copy(t),t.set(0,0,0,0)):(po.set(...t,1),t.set(0,0,0)),po.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=ho.getComponent(e);if(r!==0){let i=mo.getComponent(e);_o.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(go.copy(po).applyMatrix4(_o),r)}}return t.isVector4&&(t.w=po.w),t.applyMatrix4(this.bindMatrixInverse)}},Co=class extends Fi{constructor(){super(),this.isBone=!0,this.type=`Bone`}},wo=class extends ri{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Gt,l=Gt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},To=new B,Eo=new B,Do=class e{constructor(e=[],t=[]){this.uuid=Nr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){I(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new B)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new B;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Eo;To.multiplyMatrices(i,t[r]),To.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wo(t,e,e,pn,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(I(`Skeleton: No bone found with UUID:`,r),i=new Co),this.bones.push(i),this.boneInverses.push(new B().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Oo=class extends wa{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ko=new B,Ao=new B,jo=[],Mo=new oa,No=new B,Po=new lo,Fo=new ja,Io=class extends lo{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,No)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),Mo.copy(e.boundingBox).applyMatrix4(ko),this.boundingBox.union(Mo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ja),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),Fo.copy(e.boundingSphere).applyMatrix4(ko),this.boundingSphere.union(Fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(n),e.ray.intersectsSphere(Fo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ko),Ao.multiplyMatrices(n,ko),Po.matrixWorld=Ao,Po.raycast(e,jo);for(let e=0,n=jo.length;e<n;e++){let n=jo[e];n.instanceId=i,n.object=this,t.push(n)}jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(r*this.count),r,this.count,gn,rn));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lo=new ja,Ro=new zr(.5,.5),zo=new R,Bo=class{constructor(e=new Ua,t=new Ua,n=new Ua,r=new Ua,i=new Ua,a=new Ua){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lo)}intersectsSprite(e){return Lo.center.set(0,0,0),Lo.radius=.7071067811865476+Ro.distanceTo(e.center),Lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vo=class extends Ga{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ho=new B,Uo=new Xa,Wo=new ja,Go=new R,Ko=class extends Fi{constructor(e=new za,t=new Vo){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=i,e.ray.intersectsSphere(Wo)===!1)return;Ho.copy(r).invert(),Uo.copy(e.ray).applyMatrix4(Ho);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Go.fromBufferAttribute(l,n),qo(Go,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Go.fromBufferAttribute(l,a),qo(Go,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function qo(e,t,n,r,i,a,o){let s=Uo.distanceSqToPoint(e);if(s<n){let n=new R;Uo.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Jo=class extends ri{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yo=class extends ri{constructor(e,t,n=nn,r,i,a,o=Gt,s=Gt,c,l=mn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xo=class extends Yo{constructor(e,t=nn,n=301,r,i,a=Gt,o=Gt,s,c=mn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zo=class extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},H=class e extends za{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Da(c,3)),this.setAttribute(`normal`,new Da(l,3)),this.setAttribute(`uv`,new Da(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qo=class e extends za{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Da(u,3)),this.setAttribute(`normal`,new Da(d,3)),this.setAttribute(`uv`,new Da(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new zr,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$o=class e extends Qo{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},es=class e extends za{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Da(i,3)),this.setAttribute(`normal`,new Da(i.slice(),3)),this.setAttribute(`uv`,new Da(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new zr,s=new zr,c=new zr;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ts=class e extends es{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ns=class e extends es{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},rs=class e extends za{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Da(p,3)),this.setAttribute(`normal`,new Da(m,3)),this.setAttribute(`uv`,new Da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},is=class e extends za{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Da(p,3)),this.setAttribute(`normal`,new Da(m,3)),this.setAttribute(`uv`,new Da(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},as=class e extends za{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Da(c,3)),this.setAttribute(`normal`,new Da(l,3)),this.setAttribute(`uv`,new Da(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function os(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(cs(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(cs(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ss(e){let t={};for(let n=0;n<e.length;n++){let r=os(e[n]);for(let e in r)t[e]=r[e]}return t}function cs(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ls(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function us(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qr.workingColorSpace}var ds={clone:os,merge:ss},fs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ps=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ms=class extends Ga{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fs,this.fragmentShader=ps,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=ls(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new V().setHex(r.value);break;case`v2`:this.uniforms[n].value=new zr().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ii().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new B().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hs=class extends ms{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},gs=class extends Ga{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new zr(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_s=class extends Ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ur,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vs=class extends Ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ys(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function bs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var xs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ss=class extends xs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case cr:i=e,o=2*t-n;break;case lr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case cr:a=e,s=2*n-t;break;case lr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Cs=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ws=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ts=class extends xs{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Os(n,t,g,y,r);i[p]=Es(x,o,_,b,m)}return i}};function Es(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ds(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Os(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Es(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ds(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ks=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),bs(e.settings)&&(n.settings={inTangents:ys(e.settings.inTangents,Array),outTangents:ys(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ws(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ts(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case ar:t=this.InterpolantFactoryMethodSmooth;break;case or:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return ar;case this.InterpolantFactoryMethodBezier:return or}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;bs(this.settings)&&(As(this.settings.inTangents,e),As(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&br(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ar,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,bs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function As(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ks.prototype.ValueTypeName=``,ks.prototype.TimeBufferType=Float32Array,ks.prototype.ValueBufferType=Float32Array,ks.prototype.DefaultInterpolation=ir;var js=class extends ks{constructor(e,t,n){super(e,t,n)}};js.prototype.ValueTypeName=`bool`,js.prototype.ValueBufferType=Array,js.prototype.DefaultInterpolation=rr,js.prototype.InterpolantFactoryMethodLinear=void 0,js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}};Ms.prototype.ValueTypeName=`color`;var Ns=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}};Ns.prototype.ValueTypeName=`number`;var Ps=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Br.slerpFlat(i,0,a,c-o,a,c,s);return i}},Fs=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ps(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName=`quaternion`,Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends ks{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName=`string`,Is.prototype.ValueBufferType=Array,Is.prototype.DefaultInterpolation=rr,Is.prototype.InterpolantFactoryMethodLinear=void 0,Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}};Ls.prototype.ValueTypeName=`vector`;var Rs=class extends Fi{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zs=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Fi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bs=new B,Vs=new R,Hs=new R,Us=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zr(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new B,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new zr(1,1),this._viewportCount=1,this._viewports=[new ii(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vs),Hs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Bs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ws=new R,Gs=new Br,Ks=new R,qs=class extends Fi{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new B,this.projectionMatrix=new B,this.projectionMatrixInverse=new B,this.coordinateSystem=vr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ws,Gs,Ks),Ks.x===1&&Ks.y===1&&Ks.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Gs,Ks.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ws,Gs,Ks),Ks.x===1&&Ks.y===1&&Ks.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Gs,Ks.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Js=new R,Ys=new zr,Xs=new zr,Zs=class extends qs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,Ys,Xs),t.subVectors(Xs,Ys)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=class extends Us{constructor(){super(new Zs(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends Rs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Qs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ec=class extends qs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends Us{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nc=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Fi.DEFAULT_UP),this.updateMatrix(),this.target=new Fi,this.shadow=new tc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},rc=class extends za{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ic=-90,ac=1,oc=class extends Fi{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zs(ic,ac,e,t);r.layers=this.layers,this.add(r);let i=new Zs(ic,ac,e,t);i.layers=this.layers,this.add(i);let a=new Zs(ic,ac,e,t);a.layers=this.layers,this.add(a);let o=new Zs(ic,ac,e,t);o.layers=this.layers,this.add(o);let s=new Zs(ic,ac,e,t);s.layers=this.layers,this.add(s);let c=new Zs(ic,ac,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},sc=class extends Zs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},cc=`\\[\\]\\.:\\/`,lc=RegExp(`[\\[\\]\\.:\\/]`,`g`),uc=`[^\\[\\]\\.:\\/]`,dc=`[^`+cc.replace(`\\.`,``)+`]`,fc=`((?:WC+[\\/:])*)`.replace(`WC`,uc),pc=`(WCOD+)?`.replace(`WCOD`,dc),mc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,uc),hc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,uc),gc=RegExp(`^`+fc+pc+mc+hc+`$`),_c=[`material`,`materials`,`bones`,`map`],vc=class{constructor(e,t,n){let r=n||yc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(lc,``)}static parseTrackName(e){let t=gc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);_c.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yc.Composite=vc,yc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yc.prototype.GetterByBindingType=[yc.prototype._getValue_direct,yc.prototype._getValue_array,yc.prototype._getValue_arrayElement,yc.prototype._getValue_toArray],yc.prototype.SetterByBindingTypeAndVersioning=[[yc.prototype._setValue_direct,yc.prototype._setValue_direct_setNeedsUpdate,yc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yc.prototype._setValue_array,yc.prototype._setValue_array_setNeedsUpdate,yc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yc.prototype._setValue_arrayElement,yc.prototype._setValue_arrayElement_setNeedsUpdate,yc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yc.prototype._setValue_fromArray,yc.prototype._setValue_fromArray_setNeedsUpdate,yc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function bc(e,t,n,r){let i=xc(r);switch(n){case dn:return e*t;case gn:return e*t/i.components*i.byteLength;case _n:return e*t/i.components*i.byteLength;case vn:return e*t*2/i.components*i.byteLength;case yn:return e*t*2/i.components*i.byteLength;case fn:return e*t*3/i.components*i.byteLength;case pn:return e*t*4/i.components*i.byteLength;case bn:return e*t*4/i.components*i.byteLength;case xn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Cn:case wn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case En:case On:return Math.max(e,16)*Math.max(t,8)/4;case Tn:case Dn:return Math.max(e,8)*Math.max(t,8)/2;case kn:case An:case Mn:case Nn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jn:case Pn:case Fn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case In:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ln:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Rn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case zn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Bn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Vn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Hn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Un:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Wn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Gn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Kn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case qn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Jn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Yn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xn:case Zn:case Qn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case $n:case er:return Math.ceil(e/4)*Math.ceil(t/4)*8;case tr:case nr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function xc(e){switch(e){case Zt:case Qt:return{byteLength:1,components:1};case en:case $t:case an:return{byteLength:2,components:1};case on:case sn:return{byteLength:2,components:4};case nn:case tn:case rn:return{byteLength:4,components:1};case ln:case un:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Sc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Cc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},W={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new zr(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new zr(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},wc={basic:{uniforms:ss([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:ss([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:ss([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:ss([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:ss([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new V(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:ss([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:ss([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:ss([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:ss([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:ss([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:ss([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:ss([W.common,W.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:ss([W.lights,W.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};wc.physical={uniforms:ss([wc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new zr(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new zr},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new zr},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var Tc={r:0,b:0,g:0},Ec=new B,Dc=new z;Dc.set(-1,0,0,0,1,0,0,0,1);function Oc(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new lo(new H(1,1,1),new ms({name:`BackgroundCubeMaterial`,uniforms:os(wc.backgroundCube.uniforms),vertexShader:wc.backgroundCube.vertexShader,fragmentShader:wc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ec.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dc),l.material.toneMapped=qr.getTransfer(i.colorSpace)!==mr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new lo(new rs(2,2),new ms({name:`BackgroundMaterial`,uniforms:os(wc.background.uniforms),vertexShader:wc.background.vertexShader,fragmentShader:wc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=qr.getTransfer(i.colorSpace)!==mr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Tc,us(e)),n.buffers.color.setClear(Tc.r,Tc.g,Tc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function kc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ac(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Mc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ua,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Nc=4,Pc=6,Fc=20,Ic=256,Lc=new ec,Rc=new V,zc=null,Bc=0,Vc=0,Hc=!1,Uc=new R,Wc=new R,Gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Uc}=i;zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Bc,Vc),this._renderer.xr.enabled=Hc,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:an,format:pn,colorSpace:fr,depthBuffer:!1},r=qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kc(r)),this._blurMaterial=Xc(r,e,t),this._ggxMaterial=Yc(r,e,t)}return r}_compileMaterial(e){let t=new lo(new za,e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,r,i){let a=new Zs(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Rc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lo(new H,new Za({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Rc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Jc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Jc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Nc?n-d+Nc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Jc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Lc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Jc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Lc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Jc(t,3*l*(r>this._lodMax-Nc?r-this._lodMax+Nc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Lc)}};function Kc(e){let t=[],n=[],r=e,i=e-Nc+1+Pc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Wc.set(1,r,n):e===1?Wc.set(-n,1,-r):e===2?Wc.set(-n,r,1):e===3?Wc.set(-1,r,-n):e===4?Wc.set(-n,-1,r):Wc.set(n,r,-1),Wc.toArray(l,(e*6+t)*3)}}let u=new za;u.setAttribute(`position`,new wa(c,3)),u.setAttribute(`outputDirection`,new wa(l,3)),n.push(new lo(u,null)),r>Nc&&r--}return{lodMeshes:n,sizeLods:t}}function qc(e,t,n){let r=new oi(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Jc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Yc(e,t,n){return new ms({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ic,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xc(e,t,n){return new ms({name:`SphericalGaussianBlur`,defines:{SAMPLES:Fc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zc(){return new ms({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qc(){return new ms({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var el=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new H(5,5,5),i=new ms({name:`CubemapFromEquirect`,uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new lo(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Jt),new oc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function tl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new el(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Gc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Gc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function nl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Er(`WebGLRenderer: `+e+` extension not supported.`),t}}}function rl(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ea:Ta)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function il(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function al(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ol(e,t,n){let r=new WeakMap,i=new ii;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new si(h,p,m,u);g.type=rn,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new zr(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function sl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var cl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ll(e,t,n,r,i,a){let o=new oi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new za;l.setAttribute(`position`,new Da([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Da([0,2,0,0,2,0],2));let u=new hs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new lo(l,u),f=new ec(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new oi(t,n,{type:an,depthBuffer:!1,stencilBuffer:!1}),c=new oi(t,n,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},qr.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=cl[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ul=new ri,dl=new Yo(1,1),fl=new si,pl=new ci,ml=new Jo,hl=[],gl=[],_l=new Float32Array(16),vl=new Float32Array(9),yl=new Float32Array(4);function bl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=hl[i];if(a===void 0&&(a=new Float32Array(i),hl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function xl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Sl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Cl(e,t){let n=gl[t];n===void 0&&(n=new Int32Array(t),gl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function wl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xl(n,t))return;e.uniform2fv(this.addr,t),Sl(n,t)}}function El(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xl(n,t))return;e.uniform3fv(this.addr,t),Sl(n,t)}}function Dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xl(n,t))return;e.uniform4fv(this.addr,t),Sl(n,t)}}function Ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Sl(n,t)}else{if(xl(n,r))return;yl.set(r),e.uniformMatrix2fv(this.addr,!1,yl),Sl(n,r)}}function kl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Sl(n,t)}else{if(xl(n,r))return;vl.set(r),e.uniformMatrix3fv(this.addr,!1,vl),Sl(n,r)}}function Al(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Sl(n,t)}else{if(xl(n,r))return;_l.set(r),e.uniformMatrix4fv(this.addr,!1,_l),Sl(n,r)}}function jl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xl(n,t))return;e.uniform2iv(this.addr,t),Sl(n,t)}}function Nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xl(n,t))return;e.uniform3iv(this.addr,t),Sl(n,t)}}function Pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xl(n,t))return;e.uniform4iv(this.addr,t),Sl(n,t)}}function Fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xl(n,t))return;e.uniform2uiv(this.addr,t),Sl(n,t)}}function Ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xl(n,t))return;e.uniform3uiv(this.addr,t),Sl(n,t)}}function Rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xl(n,t))return;e.uniform4uiv(this.addr,t),Sl(n,t)}}function zl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(dl.compareFunction=n.isReversedDepthBuffer()?518:515,a=dl):a=ul,n.setTexture2D(t||a,i)}function Bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||pl,i)}function Vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ml,i)}function Hl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||fl,i)}function Ul(e){switch(e){case 5126:return wl;case 35664:return Tl;case 35665:return El;case 35666:return Dl;case 35674:return Ol;case 35675:return kl;case 35676:return Al;case 5124:case 35670:return jl;case 35667:case 35671:return Ml;case 35668:case 35672:return Nl;case 35669:case 35673:return Pl;case 5125:return Fl;case 36294:return Il;case 36295:return Ll;case 36296:return Rl;case 35678:case 36198:case 36298:case 36306:case 35682:return zl;case 35679:case 36299:case 36307:return Bl;case 35680:case 36300:case 36308:case 36293:return Vl;case 36289:case 36303:case 36311:case 36292:return Hl}}function Wl(e,t){e.uniform1fv(this.addr,t)}function Gl(e,t){let n=bl(t,this.size,2);e.uniform2fv(this.addr,n)}function Kl(e,t){let n=bl(t,this.size,3);e.uniform3fv(this.addr,n)}function ql(e,t){let n=bl(t,this.size,4);e.uniform4fv(this.addr,n)}function Jl(e,t){let n=bl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Yl(e,t){let n=bl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xl(e,t){let n=bl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zl(e,t){e.uniform1iv(this.addr,t)}function Ql(e,t){e.uniform2iv(this.addr,t)}function $l(e,t){e.uniform3iv(this.addr,t)}function eu(e,t){e.uniform4iv(this.addr,t)}function tu(e,t){e.uniform1uiv(this.addr,t)}function nu(e,t){e.uniform2uiv(this.addr,t)}function ru(e,t){e.uniform3uiv(this.addr,t)}function iu(e,t){e.uniform4uiv(this.addr,t)}function au(e,t,n){let r=this.cache,i=t.length,a=Cl(n,i);xl(r,a)||(e.uniform1iv(this.addr,a),Sl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?dl:ul;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ou(e,t,n){let r=this.cache,i=t.length,a=Cl(n,i);xl(r,a)||(e.uniform1iv(this.addr,a),Sl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||pl,a[e])}function su(e,t,n){let r=this.cache,i=t.length,a=Cl(n,i);xl(r,a)||(e.uniform1iv(this.addr,a),Sl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ml,a[e])}function cu(e,t,n){let r=this.cache,i=t.length,a=Cl(n,i);xl(r,a)||(e.uniform1iv(this.addr,a),Sl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||fl,a[e])}function lu(e){switch(e){case 5126:return Wl;case 35664:return Gl;case 35665:return Kl;case 35666:return ql;case 35674:return Jl;case 35675:return Yl;case 35676:return Xl;case 5124:case 35670:return Zl;case 35667:case 35671:return Ql;case 35668:case 35672:return $l;case 35669:case 35673:return eu;case 5125:return tu;case 36294:return nu;case 36295:return ru;case 36296:return iu;case 35678:case 36198:case 36298:case 36306:case 35682:return au;case 35679:case 36299:case 36307:return ou;case 35680:case 36300:case 36308:case 36293:return su;case 36289:case 36303:case 36311:case 36292:return cu}}var uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ul(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lu(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function mu(e,t){e.seq.push(t),e.map[t.id]=t}function hu(e,t,n){let r=e.name,i=r.length;for(pu.lastIndex=0;;){let a=pu.exec(r),o=pu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mu(n,l===void 0?new uu(s,e,t):new du(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fu(s),mu(n,e)),n=e}}}var gu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _u(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vu=37297,yu=0;function bu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xu=new z;function Su(e){qr._getMatrix(xu,qr.workingColorSpace,e);let t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(qr.getTransfer(e)){case pr:return[t,`LinearTransferOETF`];case mr:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Cu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bu(e.getShaderSource(t),r)}return i}function wu(e,t){let n=Su(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Tu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Eu(e,t){let n=Tu[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Du=new R;function Ou(){return qr.getLuminanceCoefficients(Du),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Du.x.toFixed(4)}, ${Du.y.toFixed(4)}, ${Du.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ku(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mu).join(`
`)}function Au(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ju(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mu(e){return e!==``}function Nu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(e){return e.replace(Fu,Ru)}var Lu=new Map;function Ru(e,t){let n=U[t];if(n===void 0){let e=Lu.get(t);if(e!==void 0)n=U[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Iu(n)}var zu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(e){return e.replace(zu,Vu)}function Vu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Hu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Uu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Wu(e){return Uu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Gu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ku(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Gu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var qu={302:`ENVMAP_MODE_REFRACTION`};function Ju(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:qu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Yu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Xu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Yu[e.combine]||`ENVMAP_BLENDING_NONE`}function Zu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Qu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wu(n),l=Ku(n),u=Ju(n),d=Xu(n),f=Zu(n),p=ku(n),m=Au(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mu).join(`
`),_.length>0&&(_+=`
`)):(g=[Hu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mu).join(`
`),_=[Hu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:Eu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,wu(`linearToOutputTexel`,n.outputColorSpace),Ou(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mu).join(`
`)),o=Iu(o),o=Nu(o,n),o=Pu(o,n),s=Iu(s),s=Nu(s,n),s=Pu(s,n),o=Bu(o),s=Bu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=_u(i,i.VERTEX_SHADER,y),S=_u(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Cu(i,x,`vertex`),n=Cu(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new gu(i,h),T=ju(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,vu)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var $u=0,ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new td(e),t.set(e,n)),n}},td=class{constructor(e){this.id=$u++,this.code=e,this.usedTimes=0}};function nd(e){return e===1030||e===37490||e===36285}function rd(e,t,n,r,i,a){let o=new yi,s=new ed,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=wc[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=me&&!!i.anisotropyMap,Se=he&&!!i.clearcoatMap,Ce=he&&!!i.clearcoatNormalMap,we=he&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,M=ve&&!!i.iridescenceThicknessMap,Ee=ye&&!!i.sheenColorMap,De=ye&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,N=!!i.specularColorMap,ke=!!i.specularIntensityMap,P=be&&!!i.transmissionMap,Ae=be&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:qr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&nd(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:xe,clearcoat:he,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:M,sheen:ye,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:N,specularIntensityMap:ke,transmission:be,transmissionMap:P,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:M&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:N&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:P&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&qr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&qr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=wc[t];n=ds.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Qu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function id(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ad(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function od(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function sd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ad),r.length>1&&r.sort(t||od),i.length>1&&i.sort(t||od)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function cd(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new sd,e.set(t,[i])):n>=r.length?(i=new sd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ld(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new V};break;case`SpotLight`:n={position:new R,direction:new R,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function ud(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zr};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zr};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zr,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var dd=0;function fd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function pd(e){let t=new ld,n=ud(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new B,o=new B;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(fd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=dd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function md(e){let t=new pd(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function hd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new md(e),t.set(n,[a])):r>=i.length?(a=new md(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var gd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_d=`uniform sampler2D shadow_pass;
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
}`,vd=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],yd=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],bd=new B,xd=new R,Sd=new R;function Cd(e,t,n){let r=new Bo,i=new zr,a=new zr,o=new ii,s=new _s,c=new vs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zr},radius:{value:4}},vertexShader:gd,fragmentShader:_d}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new za;m.setAttribute(`position`,new wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new lo(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){I(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new oi(i.x,i.y,{format:vn,type:an,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Yo(i.x,i.y,rn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=mn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Gt,d.map.depthTexture.magFilter=Gt}else l.isPointLight?(d.map=new el(i.x),d.map.depthTexture=new Xo(i.x,nn)):(d.map=new oi(i.x,i.y),d.map.depthTexture=new Yo(i.x,i.y,nn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=mn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Jt,d.map.depthTexture.magFilter=Jt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Gt,d.map.depthTexture.magFilter=Gt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),xd.setFromMatrixPosition(l.matrixWorld),e.position.copy(xd),Sd.copy(e.position),Sd.add(vd[t]),e.up.copy(yd[t]),e.lookAt(Sd),e.updateMatrixWorld(),n.makeTranslation(-xd.x,-xd.y,-xd.z),bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(bd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new oi(i.x,i.y,{format:vn,type:an}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function wd(e,t){function n(){let t=!1,n=new ii,r=null,i=new ii(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Or[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new ii().fromArray(oe),le=new ii().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==k&&(j&&e.lineWidth(t),k=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function M(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function Ee(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function P(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:M,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:N,texImage2D:Pe,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:ke,texSubImage3D:P,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Re,viewport:ze,reset:He}}function Td(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zr,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):xr(`canvas`)}function g(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?pr:qr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function ee(e){O=e}function te(){let e=O;return e>=i.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ne(t,i){let a=r.get(t);if(t.isVideoTexture&&Ee(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?pe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let oe={[Ht]:e.REPEAT,[Ut]:e.CLAMP_TO_EDGE,[Wt]:e.MIRRORED_REPEAT},se={[Gt]:e.NEAREST,[Kt]:e.NEAREST_MIPMAP_NEAREST,[qt]:e.NEAREST_MIPMAP_LINEAR,[Jt]:e.LINEAR,[Yt]:e.LINEAR_MIPMAP_NEAREST,[Xt]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,oe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,oe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,oe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=qr.getPrimaries(qr.workingColorSpace),r=o.colorSpace===``?null:qr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=De(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);le(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===hn,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=bc(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=bc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Oe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Oe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=qr.getPrimaries(qr.workingColorSpace),r=o.colorSpace===``?null:qr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=De(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);le(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Oe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),M(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Te(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;M(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);M(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),le(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ne(i.depthTexture,0);let u=l.__webglTexture,d=Te(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)M(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)M(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function be(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&M(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Te(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),le(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),le(c,a),he(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),le(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let Se=[],Ce=[];function we(t){if(t.samples>0){if(M(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Se.length=0,Ce.length=0,Se.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Se.push(l),Ce.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Te(e){return Math.min(i.maxSamples,e.samples)}function M(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ee(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(qr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=ee,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=M,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ed(e,t){function n(n,r=``){let i,a=qr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Dd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Od=`
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

}`,kd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ms({vertexShader:Dd,fragmentShader:Od,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lo(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ad=class extends kr{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new kd,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new zr,C=null,w=null,T=new Zs;T.viewport=new ii;let E=new Zs;E.viewport=new ii;let D=[T,E],O=new sc,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ri,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ri,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ri,b[e]=t),t.getHandSpace()};function ee(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?hn:mn,a=_.stencil?cn:nn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new oi(d.textureWidth,d.textureHeight,{format:pn,type:Zt,depthTexture:new Yo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new oi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ne=new R,re=new R;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ae(O,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,O,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Mr*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Zs,o.layers.enable(n),o.viewport=new ii,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Zo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let le=new Sc;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},jd=new B,Md=new z;Md.set(-1,0,0,0,1,0,0,0,1);function Nd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,us(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(jd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Md),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Pd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Fd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Id=null;function Ld(){return Id===null&&(Id=new wo(Fd,16,16,vn,an),Id.name=`DFG_LUT`,Id.minFilter=Jt,Id.magFilter=Jt,Id.wrapS=Ut,Id.wrapT=Ut,Id.generateMipmaps=!1,Id.needsUpdate=!0),Id}var Rd=class{constructor(e={}){let{canvas:t=Sr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([bn,yn,_n]),g=new Set([Zt,nn,en,cn,on,sn]),_=new Uint32Array(4),v=new Int32Array(4),y=new R,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=dr;let ee=0,te=0,j=null,ne=-1,re=null,ie=new ii,ae=new ii,oe=null,se=new V(0),ce=0,le=t.width,ue=t.height,de=1,fe=null,pe=null,me=new ii(0,0,le,ue),he=new ii(0,0,le,ue),ge=!1,_e=new Bo,ve=!1,ye=!1,be=new B,xe=new R,Se=new ii,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Te(){return j===null?de:1}let M=n;function Ee(e,n){return t.getContext(e,n)}let De,Oe,N,ke,P,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Xe,!1),t.addEventListener(`webglcontextrestored`,Ze,!1),t.addEventListener(`webglcontextcreationerror`,Qe,!1),M===null){let t=`webgl2`;if(M=Ee(t,e),M===null)throw Ee(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Je()}catch(e){throw t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,Qe,!1),L(`WebGLRenderer: `+e.message),e}function Je(){De=new nl(M),De.init(),Ge=new Ed(M,De),Oe=new jc(M,De,e,Ge),N=new wd(M,De),Oe.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),O=M.createFramebuffer(),k=M.createFramebuffer(),A=M.createFramebuffer(),ke=new al(M),P=new id,Ae=new Td(M,De,N,P,Oe,Ge,ke),je=new tl(T),Me=new Cc(M),Ke=new kc(M,Me),Ne=new rl(M,Me,ke,Ke),Pe=new sl(M,Ne,Me,Ke,ke),He=new ol(M,Oe,Ae),ze=new Mc(P),Fe=new rd(T,je,De,Oe,Ke,ze),Ie=new Nd(T,P),Le=new cd,Re=new hd(De),Ve=new Oc(T,je,N,Pe,p,s),Be=new Cd(T,Pe,Oe),qe=new Pd(M,ke,Oe,N),Ue=new Ac(M,De,ke),We=new il(M,De,ke),ke.programs=Fe.programs,T.capabilities=Oe,T.extensions=De,T.properties=P,T.renderLists=Le,T.shadowMap=Be,T.state=N,T.info=ke}m!==1009&&(w=new ll(m,t.width,t.height,o,r,i));let Ye=new Ad(T,M);this.xr=Ye,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=De.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=De.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){Ye.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ie)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),N.viewport(ie.copy(me).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),N.scissor(ae.copy(he).multiplyScalar(de).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){N.setScissorTest(ge=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Ve.getClearColor(),r=Ve.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,Qe,!1),Ve.dispose(),Le.dispose(),Re.dispose(),P.dispose(),je.dispose(),Pe.dispose(),Ke.dispose(),qe.dispose(),Fe.dispose(),Ye.dispose(),Ye.removeEventListener(`sessionstart`,at),Ye.removeEventListener(`sessionend`,ot),st.stop()};function Xe(e){e.preventDefault(),wr(`WebGLRenderer: Context Lost.`),E=!0}function Ze(){wr(`WebGLRenderer: Context Restored.`),E=!1;let e=ke.autoReset,t=Be.enabled,n=Be.autoUpdate,r=Be.needsUpdate,i=Be.type;Je(),ke.autoReset=e,Be.enabled=t,Be.autoUpdate=n,Be.needsUpdate=r,Be.type=i}function Qe(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function $e(e){let t=e.target;t.removeEventListener(`dispose`,$e),et(t)}function et(e){tt(e),P.remove(e)}function tt(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Fe.releaseProgram(e)}),e.isShaderMaterial&&Fe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ce);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=_t(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ne.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ke.setup(i,r,s,n,c);let h,g=Ue;if(c!==null&&(h=Me.get(c),g=We,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Te()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Te()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(De.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Me.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function nt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ve===!0&&ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,pt(e,t,r),e.side=0,e.needsUpdate=!0,pt(e,t,r),e.side=2):pt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Re.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ye=this.localClippingEnabled,ve=ze.init(this.clippingPlanes,ye),ve===!0&&ze.setGlobalState(this.clippingPlanes,t),D!==null&&Be.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];nt(o,n,t,e),r.add(o)}else nt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=P.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}De.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let rt=null;function it(e){rt&&rt(e)}function at(){st.stop()}function ot(){st.start()}let st=new Sc;st.setAnimationLoop(it),typeof self<`u`&&st.setContext(self),this.setAnimationLoop=function(e){rt=e,Ye.setAnimationLoop(e),e===null?st.stop():st.start()},Ye.addEventListener(`sessionstart`,at),Ye.addEventListener(`sessionend`,ot),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ye.enabled===!0&&Ye.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(t),t=Ye.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=Re.get(e,C.length),x.init(t),x.state.textureUnits=Ae.getTextureUnits(),C.push(x),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_e.setFromProjectionMatrix(be,vr,t.reversedDepth),ye=this.localClippingEnabled,ve=ze.init(this.clippingPlanes,ye),b=Le.get(e,S.length),b.init(),S.push(b),Ye.enabled===!0&&Ye.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ct(e,t,-1/0,T.sortObjects)}ct(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(fe,pe),we=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,we&&Ve.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&ze.beginShadows();let i=x.state.shadowsArray;if(Be.render(i,e,t),ve===!0&&ze.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ut(n,r,e,a)}we&&Ve.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];lt(b,e,n,n.viewport)}}else r.length>0&&ut(n,r,e,t),we&&Ve.render(e),lt(b,e,t)}j!==null&&te===0&&(Ae.updateMultisampleRenderTarget(j),Ae.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ke.resetDefaultState(),ne=-1,re=null,C.pop(),C.length>0?(x=C[C.length-1],Ae.setTextureUnits(x.state.textureUnits),ve===!0&&ze.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(_e)){r&&Se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let i=Pe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Se.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(_e))){let i=Pe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Se.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Se.copy(e.boundingSphere.center)),Se.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Se.z,s,t)}}else a.visible&&b.push(e,i,a,n,Se.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ct(i[e],t,n,r)}function lt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ve===!0&&ze.setGlobalState(T.clippingPlanes,n),r&&N.viewport(ie.copy(r)),i.length>0&&dt(i,t,n),a.length>0&&dt(a,t,n),o.length>0&&dt(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ut(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=De.has(`EXT_color_buffer_half_float`)||De.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new oi(1,1,{generateMipmaps:!0,type:e?an:Zt,minFilter:Xt,samples:Math.max(4,Oe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ie;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(se),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),we&&Ve.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ve===!0&&ze.setGlobalState(T.clippingPlanes,r),dt(e,n,r),Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a),De.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ft(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(se,ce),d!==void 0&&(r.viewport=d),T.toneMapping=u}function dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ft(o,t,n,s,l,c)}}function ft(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function pt(e,t,n){t.isScene!==!0&&(t=Ce);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Fe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Fe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=je.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,$e),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ht(e,s),d}else s.uniforms=Fe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Fe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=ze.uniform),ht(e,s),r.needsLights=yt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ht(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function gt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function _t(e,t,n,r,i){t.isScene!==!0&&(t=Ce),Ae.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=je.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=x.state.lights;if(ve===!0&&(ye===!0||e!==re)){let t=e===re&&r.id===ne;ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==ze.numPlanes||v.numIntersection!==ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=pt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(N.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ne&&(ne=r.id,w=!0),v.needsLights){let e=gt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||re!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(M,`projectionMatrix`,e.projectionMatrix),O.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(M,xe.setFromMatrixPosition(e.matrixWorld)),Oe.logarithmicDepthBuffer&&O.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),re!==e&&(re=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(M,`sunShadowMap`,y.state.sunShadowMap,Ae),y.state.directionalShadowMap.length>0&&O.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,Ae),y.state.spotShadowMap.length>0&&O.setValue(M,`spotShadowMap`,y.state.spotShadowMap,Ae),y.state.pointShadowMap.length>0&&O.setValue(M,`pointShadowMap`,y.state.pointShadowMap,Ae)),i.isSkinnedMesh){O.setOptional(M,i,`bindMatrix`),O.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(M,`boneTexture`,e.boneTexture,Ae))}i.isBatchedMesh&&(O.setOptional(M,i,`batchingTexture`),O.setValue(M,`batchingTexture`,i._matricesTexture,Ae),O.setOptional(M,i,`batchingIdTexture`),O.setValue(M,`batchingIdTexture`,i._indirectTexture,Ae),O.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(M,`batchingColorTexture`,i._colorsTexture,Ae));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&He.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Ld()),w){if(O.setValue(M,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&vt(k,E),a&&r.fog===!0&&Ie.refreshFogUniforms(k,a),Ie.refreshMaterialUniforms(k,r,de,ue,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}gu.upload(M,mt(v),k,Ae)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gu.upload(M,mt(v),k,Ae),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(M,`center`,i.center),O.setValue(M,`modelViewMatrix`,i.modelViewMatrix),O.setValue(M,`normalMatrix`,i.normalMatrix),O.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];qe.update(n,S),qe.bind(n,S)}}return S}function vt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function yt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest,N.viewport(ie),N.scissor(ae),N.setScissorTest(oe),ne=-1;return}if(o.__webglFramebuffer===void 0)Ae.setupRenderTarget(e);else if(o.__hasExternalTextures)Ae.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ae.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ae.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest}else ie.copy(me).multiplyScalar(de).floor(),ae.copy(he).multiplyScalar(de).floor(),oe=ge;if(n!==0&&(r=O),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(ie),N.scissor(ae),N.setScissorTest(oe),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}ne=-1};function bt(e){let t=P.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Oe.textureFormatReadable(e.format),t.__typeReadable=Oe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=bt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,Ge.convert(c),Ge.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=bt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,Ge.convert(l),Ge.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Dr(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ae.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ge.convert(t.format),_=Ge.convert(t.type),v;t.isData3DTexture?(Ae.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ae.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(Ae.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,k),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&Ae.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ae.setTextureCube(e,0):e.isData3DTexture?Ae.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ae.setTexture2DArray(e,0):Ae.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ee=0,te=0,j=null,N.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qr._getDrawingBufferColorSpace(e),t.unpackColorSpace=qr._getUnpackColorSpace()}},zd=class{perm=new Uint8Array(512);gx=new Float32Array(256);gy=new Float32Array(256);constructor(e){let t=new Uint8Array(256);for(let e=0;e<256;e++)t[e]=e;let n=e>>>0||1,r=()=>(n^=n<<13,n^=n>>>17,n^=n<<5,(n>>>0)/4294967296);for(let e=255;e>0;e--){let n=Math.floor(r()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}for(let e=0;e<512;e++)this.perm[e]=t[e&255];for(let e=0;e<256;e++){let t=r()*Math.PI*2;this.gx[e]=Math.cos(t),this.gy[e]=Math.sin(t)}}n2(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=n&255,s=r&255,c=this.perm,l=c[o+c[s]],u=c[o+1+c[s]],d=c[o+c[s+1]],f=c[o+1+c[s+1]],p=this.gx[l]*i+this.gy[l]*a,m=this.gx[u]*(i-1)+this.gy[u]*a,h=this.gx[d]*i+this.gy[d]*(a-1),g=this.gx[f]*(i-1)+this.gy[f]*(a-1),_=i*i*i*(i*(i*6-15)+10),v=a*a*a*(a*(a*6-15)+10),y=p+(m-p)*_;return(y+(h+(g-h)*_-y)*v)*1.414}fbm(e,t,n=3,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=this.n2(e*o,t*o)*a,c+=a,a*=i,o*=r;return s/c}ridged(e,t,n=3){let r=.5,i=1,a=0;for(let o=0;o<n;o++){let n=1-Math.abs(this.n2(e*i,t*i));a+=n*n*r,r*=.5,i*=2.1}return a}n1(e){return this.n2(e,17.31)}},Bd=`
attribute float aShade;
attribute float aSnow;
attribute float aH;
uniform vec2 uRange;
varying float vShade;
varying float vSnow;
varying float vH;
void main() {
  vShade = aShade;
  vSnow = aSnow;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  // 0 at the foot of the range, 1 at its tallest peak: lower slopes sink into the haze
  vH = clamp((wp.y - uRange.x) / (uRange.y - uRange.x), 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Vd=`
uniform vec3 uBase;
uniform vec3 uSnow;
uniform vec3 uHaze;
uniform vec3 uLight;
uniform float uHazeAmt;
varying float vShade;
varying float vSnow;
varying float vH;
void main() {
  vec3 col = mix(uBase, uSnow, vSnow) * vShade;
  col += uLight * max(vShade - 1.0, 0.0) * 0.8;
  float haze = clamp(uHazeAmt + pow(1.0 - vH, 1.6) * 0.62, 0.0, 1.0);
  col = mix(col, uHaze, haze);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Hd=`
varying vec2 vXZ;
varying float vDist;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  vec4 mv = viewMatrix * wp;
  vDist = length(mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,Ud=`
uniform vec3 uLow;
uniform vec3 uHigh;
uniform vec3 uFar;
uniform float uTime;
varying vec2 vXZ;
varying float vDist;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
void main() {
  vec2 p = vXZ * 0.0045 + vec2(uTime * 0.006, uTime * 0.004);
  float n = vn(p) * 0.55 + vn(p * 2.3 + 7.1) * 0.3 + vn(p * 5.1 - 3.7) * 0.15;
  n = smoothstep(0.25, 0.85, n);
  vec3 col = mix(uLow, uHigh, n);
  col = mix(col, uFar, smoothstep(500.0, 2600.0, vDist));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Wd=[{r:1250,yBase:-170,amp:300,haze:.2,snowAt:.92,seed:11},{r:2e3,yBase:-140,amp:720,haze:.38,snowAt:.7,seed:23},{r:2950,yBase:-60,amp:1500,haze:.56,snowAt:.55,seed:37}],Gd=e=>{let t=new zd(e.seed),n=[],r=[];for(let i=0;i<200;i++){let a=i/200*Math.PI*2,o=Math.cos(a)*1.7,s=Math.sin(a)*1.7,c=.5+.5*t.n2(o*.55+3,s*.55+3),l=t.ridged(o+10,s+10,4)**1.6*1.5*(.35+c*.9);l+=c*.22,n.push(e.yBase+e.amp*Math.min(1.15,l)),r.push(t.n2(o*2+5,s*2+5))}let i=[],a=[],o=[],s=[],c=-3200,l=(e,t,n,r,c,l)=>{i.push(e,t,n),a.push(r),o.push(c),s.push(l)},u=e.yBase+e.amp;for(let t=0;t<200;t++){let i=(t+1)%200,a=t/200*Math.PI*2,o=i/200*Math.PI*2+(i===0?Math.PI*2:0),s=n[t],d=n[i],f=e.yBase-e.amp*.15+(s-e.yBase)*.45,p=e.yBase-e.amp*.15+(d-e.yBase)*.45,m=e.r*(1+r[t]*.04),h=e.r*(1+r[i]*.04),g=Math.sin(a)*e.r,_=Math.cos(a)*e.r,v=Math.sin(o)*e.r,y=Math.cos(o)*e.r,b=Math.sin(a)*m,x=Math.cos(a)*m,S=Math.sin(o)*h,C=Math.cos(o)*h,w=(d-s)/(e.amp*.08),T=1+Math.max(-.28,Math.min(.2,w*.22)),E=(s-c)/(u-c),D=(d-c)/(u-c),O=(f-c)/(u-c),k=(p-c)/(u-c),A=+((s-e.yBase)/e.amp>e.snowAt),ee=+((d-e.yBase)/e.amp>e.snowAt),te=A&&ee?1:A||ee?.6:0;l(b,f,x,T*.95,0,O),l(g,s,_,T,te,E),l(v,d,y,T,te,D),l(b,f,x,T*.9,0,O),l(v,d,y,T*.97,te,D),l(S,p,C,T*.9,0,k);let j=.82+r[t]*.05;l(g,c,_,j,0,0),l(b,f,x,j,0,O),l(S,p,C,j,0,k),l(g,c,_,j,0,0),l(S,p,C,j,0,k),l(v,c,y,j,0,0)}let d=new za;return d.setAttribute(`position`,new Da(i,3)),d.setAttribute(`aShade`,new Da(a,1)),d.setAttribute(`aSnow`,new Da(o,1)),d.setAttribute(`aH`,new Da(s,1)),d.computeBoundingSphere(),d},Kd=class{group=new Ii;rings=[];mist;mistMat;constructor(){for(let e of Wd){let t=new ms({vertexShader:Bd,fragmentShader:Vd,uniforms:{uBase:{value:new V},uSnow:{value:new V},uHaze:{value:new V},uLight:{value:new V},uHazeAmt:{value:e.haze},uRange:{value:[e.yBase-e.amp*.15,e.yBase+e.amp]}},side:2}),n=new lo(Gd(e),t);n.frustumCulled=!1,n.renderOrder=-5,this.group.add(n),this.rings.push({mesh:n,mat:t,spec:e})}this.mistMat=new ms({vertexShader:Hd,fragmentShader:Ud,uniforms:{uLow:{value:new V},uHigh:{value:new V},uFar:{value:new V},uTime:{value:0}}});let e=new rs(7e3,7e3,1,1);e.rotateX(-Math.PI/2),this.mist=new lo(e,this.mistMat),this.mist.frustumCulled=!1,this.mist.renderOrder=-4,this.group.add(this.mist)}update(e,t,n,r){this.group.visible=r<.995;let i=[e.far1,e.far2,e.far3];for(let n=0;n<this.rings.length;n++){let r=this.rings[n];r.mesh.position.set(t.x,0,t.z);let a=r.mat.uniforms;a.uBase.value.copy(i[n]),a.uSnow.value.copy(e.snow).lerp(i[n],.25+n*.12),a.uHaze.value.copy(e.horizon).lerp(e.fog,.5),a.uLight.value.copy(e.sunGlow)}this.mist.position.set(t.x,t.y-250,t.z);let a=this.mistMat.uniforms;a.uLow.value.copy(e.fog).lerp(e.far1,.35),a.uHigh.value.copy(e.cloud),a.uFar.value.copy(e.horizon).lerp(e.fog,.5),a.uTime.value=n}},qd=new R,Jd=new R,Yd=new R,Xd=new R,Zd=new R,Qd=new R,$d=class{pos=[];nor=[];col=[];skinIdx=null;bone=0;get triCount(){return this.pos.length/9}withSkin(){return this.skinIdx=[],this}tri(e,t,n,r){Zd.subVectors(t,e),Qd.subVectors(n,e),Xd.crossVectors(Zd,Qd);let i=Xd.length();if(!(i<1e-10)){Xd.multiplyScalar(1/i),this.pos.push(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z);for(let e=0;e<3;e++)this.nor.push(Xd.x,Xd.y,Xd.z),this.col.push(r.r,r.g,r.b);this.skinIdx&&this.skinIdx.push(this.bone,this.bone,this.bone)}}triN(e,t,n,r,i,a,o){this.pos.push(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z),this.nor.push(r.x,r.y,r.z,i.x,i.y,i.z,a.x,a.y,a.z);for(let e=0;e<3;e++)this.col.push(o.r,o.g,o.b);this.skinIdx&&this.skinIdx.push(this.bone,this.bone,this.bone)}t9(e,t,n,r,i,a,o,s,c,l){this.tri(qd.set(e,t,n),Jd.set(r,i,a),Yd.set(o,s,c),l)}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}stamp(e,t,n){let r=e.pos,i=new V;for(let a=0,o=0;a<r.length;a+=9,o++)qd.set(r[a],r[a+1],r[a+2]).applyMatrix4(t),Jd.set(r[a+3],r[a+4],r[a+5]).applyMatrix4(t),Yd.set(r[a+6],r[a+7],r[a+8]).applyMatrix4(t),Zd.subVectors(Jd,qd),Qd.subVectors(Yd,qd),Xd.crossVectors(Zd,Qd).normalize(),n(e.slot[o],e.shade[o],Xd.y,i),this.tri(qd,Jd,Yd,i)}build(){let e=new za;if(e.setAttribute(`position`,new Da(this.pos,3)),e.setAttribute(`normal`,new Da(this.nor,3)),e.setAttribute(`color`,new Da(this.col,3)),this.skinIdx){let t=this.skinIdx.length,n=new Uint16Array(t*4),r=new Float32Array(t*4);for(let e=0;e<t;e++)n[e*4]=this.skinIdx[e],r[e*4]=1;e.setAttribute(`skinIndex`,new Ta(n,4)),e.setAttribute(`skinWeight`,new Da(r,4))}return e.computeBoundingSphere(),e}},ef=class{p=[];s=[];sh=[];slot=0;tri(e,t,n,r=1){this.p.push(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z),this.s.push(this.slot),this.sh.push(r)}add(e,t,n,r=0,i=1){let a=e.index?e.toNonIndexed():e,o=a.getAttribute(`position`),s=i*9301+49297;for(let e=0;e<o.count;e+=3){qd.fromBufferAttribute(o,e).applyMatrix4(t),Jd.fromBufferAttribute(o,e+1).applyMatrix4(t),Yd.fromBufferAttribute(o,e+2).applyMatrix4(t),s=(s*9301+49297)%233280;let i=s/233280;this.slot=n,this.tri(qd,Jd,Yd,1+(i-.5)*2*r)}a!==e&&a.dispose()}build(){return{pos:new Float32Array(this.p),slot:new Uint8Array(this.s),shade:new Float32Array(this.sh)}}},tf=(e,t,n,r=1)=>{let i=e.index?e.toNonIndexed():e,a=i.getAttribute(`position`),o=new R;for(let e=0;e<a.count;e++){o.fromBufferAttribute(a,e);let i=Math.round(o.x*1e3)*73856093^Math.round(o.y*1e3)*19349663^Math.round(o.z*1e3)*83492791^n,s=(i*2654435761>>>0)%1e4/1e4-.5,c=((i^1540483477)*2246822519>>>0)%1e4/1e4-.5,l=((i^668265261)*3266489917>>>0)%1e4/1e4-.5;o.x+=s*t*r,o.y+=c*t*r,o.z+=l*t*r,a.setXYZ(e,o.x,o.y,o.z)}return i},G={rock:0,rockDark:1,rockLight:2,foliage:3,foliageDark:4,wood:5,snow:6,accent:7,ground:8,white:9,red:10,woodDark:11,metal:12,orange:13,cloth:14,hazard:15},K=(e=0,t=0,n=0,r=0,i=0,a=0,o=1,s=1,c=1)=>{let l=new Br().setFromAxisAngle(new R(1,0,0),r);return l.multiply(new Br().setFromAxisAngle(new R(0,1,0),i)),l.multiply(new Br().setFromAxisAngle(new R(0,0,1),a)),new B().compose(new R(e,t,n),l,new R(o,s,c))},nf=null,rf=e=>{let t=new ef;return e(t),t.build()},af=()=>{if(nf)return nf;let e={};e.pine=rf(e=>{e.add(new Qo(.12,.18,1.2,5),K(0,.6,0),G.wood,.1),e.add(new $o(1.25,1.9,7),K(0,1.75,0),G.foliageDark,.12,3),e.add(new $o(.98,1.6,7),K(0,2.65,0,0,.4),G.foliage,.12,5),e.add(new $o(.66,1.3,7),K(0,3.45,0,0,.9),G.foliage,.12,7)}),e.pineSnow=rf(e=>{e.add(new Qo(.12,.18,1.2,5),K(0,.6,0),G.wood,.1),e.add(new $o(1.25,1.9,7),K(0,1.75,0),G.foliageDark,.12,3),e.add(new $o(1,.5,7),K(0,2.5,0,0,.2),G.snow,.05,4),e.add(new $o(.98,1.6,7),K(0,2.65,0,0,.4),G.foliage,.12,5),e.add(new $o(.66,1.3,7),K(0,3.45,0,0,.9),G.snow,.06,7)}),e.juniper=rf(e=>{e.add(new Qo(.1,.22,1.6,5),K(.1,.8,0,0,0,-.18),G.wood,.1),e.add(new Qo(.06,.1,1,4),K(.45,1.5,0,0,0,-.9),G.wood,.1),e.add(tf(new ts(.85,0),.25,3),K(.1,1.95,0,0,0,0,1.2,.7,1.1),G.foliage,.15,2),e.add(tf(new ts(.6,0),.2,5),K(.95,1.8,.1,0,0,0,1.1,.65,1),G.foliageDark,.15,4)}),e.shrub=rf(e=>{e.add(tf(new ts(.55,0),.22,9),K(0,.35,0,0,0,0,1.2,.75,1.1),G.foliage,.18,1),e.add(tf(new ts(.38,0),.15,11),K(.45,.25,.2,0,0,0,1,.8,1),G.foliageDark,.18,2)}),e.tuft=rf(e=>{for(let t=0;t<4;t++)e.add(new $o(.07,.45,3),K(Math.cos(t*1.7)*.12,.2,Math.sin(t*1.7)*.12,Math.cos(t)*.4,0,Math.sin(t)*.4),G.foliage,.2,t)});for(let t=0;t<4;t++)e[`rock${t}`]=rf(e=>{e.add(tf(new ts(1,t%2),.55,17+t*13),K(0,.35,0,0,t,0,1.15,.75,1),G.rock,.16,t+1)});return e.boulderTop=rf(e=>{e.add(tf(new ts(1,1),.4,77),K(0,.5,0,0,0,0,1.2,.7,1.1),G.rockLight,.14,2)}),e.spire=rf(e=>{e.add(tf(new Qo(.35,1.25,5,6,3),.35,41),K(0,2.5,0),G.rock,.14,4),e.add(tf(new Qo(.15,.4,1.4,5),.12,43),K(.05,5.6,0),G.rockLight,.14,5)}),e.crystal=rf(e=>{for(let[t,n,r,i,a,o,s,c]of[[0,0,0,0,0,0,.32,1.6],[.32,0,.1,.35,0,-.45,.22,1.05],[-.28,0,-.05,-.2,0,.5,.24,1.15],[.05,0,.32,.5,0,.1,.18,.8]]){let l=new ns(1,0);e.add(l,K(t,n+c*.5,r,i,a,o,s,c,s),G.accent,.25,Math.round(c*10))}}),e.iceSpike=rf(e=>{e.add(new $o(.35,2.4,5),K(0,1.2,0),G.white,.15),e.add(new $o(.22,1.4,5),K(.35,.7,.1,0,0,-.35),G.white,.15,2),e.add(new $o(.2,1.1,5),K(-.3,.55,-.1,0,0,.4),G.white,.15,3)}),e.stalagmite=rf(e=>{e.add(tf(new $o(.5,2.2,6,2),.12,51),K(0,1.1,0),G.rockDark,.15,3),e.add(tf(new $o(.3,1.2,5),.08,53),K(.5,.6,.2),G.rock,.15,4)}),e.stalactite=rf(e=>{e.add(tf(new $o(.42,1.8,6,2),.1,61),K(0,-.9,0,Math.PI,0,0),G.rockDark,.15,3)}),e.mushroom=rf(e=>{e.add(new Qo(.06,.08,.4,5),K(0,.2,0),G.white,.1),e.add(new $o(.28,.2,7),K(0,.47,0),G.accent,.1)}),e.hold=rf(e=>{e.add(tf(new ts(.17,0),.06,71),K(0,.04,0,0,0,0,1.3,.55,.9),G.rockLight,.1,1)}),e.cairn=rf(e=>{[[0,.18,0,.62,.28],[.05,.5,.02,.48,.24],[-.03,.78,-.02,.36,.2],[.02,1,.01,.25,.16],[0,1.16,0,.15,.12]].forEach(([t,n,r,i,a],o)=>e.add(tf(new ts(1,0),.12,81+o),K(t,n,r,0,o,0,i,a,i*.9),o%2?G.rockLight:G.rock,.12,o))}),e.tent=rf(e=>{let t=new Qo(1.3,1.3,2.6,3,1);e.add(t,K(0,.65,0,0,0,Math.PI/2,1,1,.9),G.orange,.12,2),e.add(new H(.05,1.5,.05),K(0,.75,1.32),G.woodDark,0),e.add(new H(.9,.9,.04),K(0,.45,1.32,0,0,Math.PI/4),G.woodDark,.05)}),e.log=rf(e=>{e.add(new Qo(.16,.16,1.5,6),K(0,.16,0,0,0,Math.PI/2),G.wood,.12,1)}),e.crate=rf(e=>{e.add(new H(.8,.6,.6),K(0,.3,0),G.wood,.12,1),e.add(new H(.84,.08,.64),K(0,.58,0),G.woodDark,.1,2)}),e.pack=rf(e=>{e.add(new H(.55,.75,.32),K(0,.4,0,-.25,0,0),G.red,.1,1),e.add(new Qo(.16,.16,.6,7),K(0,.85,-.12,0,0,Math.PI/2),G.cloth,.08,2)}),e.post=rf(e=>{e.add(new Qo(.14,.18,1,6),K(0,.5,0),G.wood,.1,1)}),e.beam=rf(e=>{e.add(new H(1,.32,.32),K(0,0,0),G.wood,.1,1)}),e.plank=rf(e=>{e.add(new H(1,.12,.34),K(0,-.06,0),G.wood,.18,1)}),e.sleeper=rf(e=>{e.add(new H(1.45,.08,.24),K(0,.04,0),G.woodDark,.15,1)}),e.lantern=rf(e=>{e.add(new H(.22,.3,.22),K(0,0,0),G.accent,.05,1),e.add(new $o(.2,.14,4),K(0,.22,0,0,Math.PI/4,0),G.metal,.05,2)}),e.flagPole=rf(e=>{e.add(new Qo(.06,.08,6,6),K(0,3,0),G.metal,.05,1),e.add(new ts(.12,0),K(0,6.05,0),G.accent,0,2)}),e.tower=rf(e=>{for(let t of[-1,1])e.add(new Qo(.16,.22,3.6,6),K(t*4.3,1.6,0,0,0,t*.1),G.wood,.12,2);e.add(new H(9.4,.32,.4),K(0,2.62,0),G.woodDark,.1,3);for(let t of[-2.1,0,2.1])e.add(new as(.2,.05,4,8),K(t,2.3,0),G.metal,0,5)}),e.frame=rf(e=>{for(let t of[-1,1])e.add(new H(.34,4.7,.34),K(t*4.35,2.35,0,0,0,t*-.05),G.wood,.1,2);e.add(new H(9.4,.4,.42),K(0,4.75,0),G.woodDark,.1,3);for(let t of[-1,1])e.add(new H(.9,.24,.26),K(t*3.85,4.3,0,0,0,t*.75),G.wood,.1,4)}),e.mineGate=rf(e=>{for(let t of[-1,1])e.add(new H(.5,5.8,.5),K(t*4.6,2.9,0),G.woodDark,.1,2);e.add(new H(10.6,.6,.6),K(0,5.9,0),G.wood,.1,3),e.add(new H(4.2,.9,.12),K(0,6.65,.15),G.wood,.1,4)}),nf=e,e},q={root:0,hips:1,spine:2,head:3,armL:4,foreL:5,armR:6,foreR:7,legL:8,shinL:9,legR:10,shinR:11,pack:12},of=13,sf=[[-1,0,0,0],[0,0,.62,0],[1,0,.16,0],[2,0,.32,0],[2,.25,.22,0],[4,.02,-.26,0],[2,-.25,.22,0],[6,-.02,-.26,0],[1,.11,-.04,0],[8,0,-.27,0],[1,-.11,-.04,0],[10,0,-.27,0],[2,0,.1,-.2]],cf=new R,lf=new R,uf=new R,df=new R,ff=new R,pf=new R,mf=new R,hf=new z,J=(e,t,n,r,i=0)=>{let a=t.index?t.toNonIndexed():t,o=a.getAttribute(`position`),s=a.getAttribute(`normal`);hf.getNormalMatrix(n);let c=new V;for(let t=0;t<o.count;t+=3){if(lf.fromBufferAttribute(o,t).applyMatrix4(n),uf.fromBufferAttribute(o,t+1).applyMatrix4(n),df.fromBufferAttribute(o,t+2).applyMatrix4(n),c.copy(r),i){let e=Math.sin(t*12.9898)*43758.5453;c.multiplyScalar(1+(e-Math.floor(e)-.5)*i)}s?(ff.fromBufferAttribute(s,t).applyMatrix3(hf).normalize(),pf.fromBufferAttribute(s,t+1).applyMatrix3(hf).normalize(),mf.fromBufferAttribute(s,t+2).applyMatrix3(hf).normalize(),e.triN(lf,uf,df,ff,pf,mf,c)):e.tri(lf,uf,df,c)}a!==t&&a.dispose(),t.dispose()},gf=e=>new V().setHex(e),_f=e=>{let t=new $d().withSkin(),n=gf(e.jacket),r=gf(e.jacketDark),i=gf(e.pants),a=gf(e.skin),o=gf(e.beanie),s=gf(e.gloves),c=gf(e.boots),l=gf(e.pack),u=gf(e.lens),d=gf(1776938),f=gf(15260085),p=gf(e.scarf);t.bone=q.hips,J(t,new Qo(.2,.19,.2,12),K(0,.6,0),i),J(t,new Qo(.205,.205,.05,12),K(0,.69,0),d),t.bone=q.spine,J(t,new is(1,14,10),K(0,.9,0,0,0,0,.245,.27,.205),n),J(t,new as(.236,.026,6,20),K(0,.86,0,Math.PI/2,0,0,1,.84,1),r),J(t,new as(.222,.024,6,20),K(0,.99,0,Math.PI/2,0,0,1,.84,1),r),J(t,new H(.026,.34,.03),K(0,.9,.197),r),J(t,new Qo(.15,.18,.1,10),K(0,1.13,0),p),t.bone=q.head;let m=gf(1711144),h=a.clone().lerp(gf(16740221),.45);J(t,new ts(.262,3),K(0,1.34,.01),a);for(let e of[-1,1])J(t,new is(.037,10,8),K(e*.088,1.33,.238,0,0,0,1,1.28,.6),m,0),J(t,new is(.012,6,5),K(e*.08,1.347,.261),gf(16777215),0),J(t,new is(.047,10,7),K(e*.15,1.27,.2,0,e*.55,0,1,.7,.4),h,0);J(t,new is(.03,8,6),K(0,1.295,.262),a.clone().lerp(h,.35),0),J(t,new as(.04,.009,4,10,Math.PI),K(0,1.245,.252,0,0,Math.PI,1,1,.6),m,0),J(t,new is(.272,18,9,0,Math.PI*2,0,Math.PI/2),K(0,1.39,-.004),o),J(t,new as(.27,.04,6,24),K(0,1.405,-.004,Math.PI/2,0,0),o.clone().multiplyScalar(.84)),J(t,new Qo(.283,.283,.045,18,1,!0),K(0,1.5,-.01,-.12,0,0),d);for(let e of[-1,1])J(t,new Qo(.072,.072,.05,14),K(e*.078,1.53,.246,Math.PI/2-.35,0,0,1,1,.78),d),J(t,new Qo(.058,.058,.02,14),K(e*.078,1.538,.268,Math.PI/2-.35,0,0,1,1,.78),u),J(t,new is(.014,6,4),K(e*.078-.02,1.555,.282),gf(16777215),0);J(t,new ts(.085,2),K(0,1.69,-.02),p);for(let[e,i,a]of[[q.armL,q.foreL,1],[q.armR,q.foreR,-1]])t.bone=e,J(t,new is(.097,10,8),K(a*.25,.99,0),n),J(t,new Qo(.078,.07,.26,10),K(a*.26,.86,0),n),t.bone=i,J(t,new Qo(.07,.064,.2,10),K(a*.27,.64,0),r),J(t,new is(.082,10,8),K(a*.27,.5,.01),s);for(let[e,n,r]of[[q.legL,q.shinL,1],[q.legR,q.shinR,-1]])t.bone=e,J(t,new Qo(.095,.085,.28,10),K(r*.11,.45,0),i),t.bone=n,J(t,new Qo(.083,.078,.2,10),K(r*.11,.2,0),i),J(t,new H(.17,.13,.28),K(r*.11,.065,.045),c),J(t,new H(.175,.04,.285),K(r*.11,.01,.045),d);return t.bone=q.pack,J(t,new H(.38,.44,.2),K(0,.92,-.25),l),J(t,new H(.4,.1,.22),K(0,1.15,-.25),l.clone().multiplyScalar(.8)),J(t,new as(.1,.035,4,8),K(0,.86,-.37),f),J(t,new Qo(.075,.075,.46,7),K(0,1.24,-.24,0,0,Math.PI/2),gf(4026321)),t.build()},vf=42,Y=(e,t,n,r=0,i=0)=>{e[t*3]=n,e[t*3+1]=r,e[t*3+2]=i},yf=39,bf=(e,t,n)=>{let r=Math.sin(t),i=T(n/14,.6,1.25);Y(e,q.hips,0,r*.12,0),Y(e,q.spine,.26*i,-r*.22,0),Y(e,q.head,-.22*i,r*.1,0),Y(e,q.legL,-r*.95*i,0,.02),Y(e,q.legR,r*.95*i,0,-.02),Y(e,q.shinL,Math.max(0,Math.sin(t-1.3))*1.5+.15,0,0),Y(e,q.shinR,Math.max(0,Math.sin(t+Math.PI-1.3))*1.5+.15,0,0),Y(e,q.armL,r*.85*i,0,.18),Y(e,q.armR,-r*.85*i,0,-.18),Y(e,q.foreL,-1.15,0,0),Y(e,q.foreR,-1.15,0,0),Y(e,q.pack,Math.abs(r)*.12,0,0),e[yf]=0,e[40]=Math.abs(Math.cos(t))*.07*i-.03,e[41]=0},xf=(e,t)=>{let n=T(t/10,-1,1),r=T(.5+n*.6,0,1);Y(e,q.hips,0,0,0),Y(e,q.spine,.18,0,0),Y(e,q.head,-.1,0,0),Y(e,q.legL,-1.15*r-.2,0,.06),Y(e,q.legR,-.6*r-.1,0,-.06),Y(e,q.shinL,1.7*r+.2,0,0),Y(e,q.shinR,1.2*r+.25,0,0),Y(e,q.armL,-2.5+n*.3,0,.45),Y(e,q.armR,-2.1+n*.3,0,-.45),Y(e,q.foreL,-.35,0,0),Y(e,q.foreR,-.5,0,0),Y(e,q.pack,-.1,0,0),e[yf]=0,e[40]=.05,e[41]=0},Sf=e=>{Y(e,q.hips,-.55,0,0),Y(e,q.spine,.55,0,0),Y(e,q.head,.05,0,0),Y(e,q.legL,-1.35,0,.1),Y(e,q.legR,-.75,0,-.12),Y(e,q.shinL,.25,0,0),Y(e,q.shinR,1.35,0,0),Y(e,q.armL,.7,0,.9),Y(e,q.armR,.5,0,-.9),Y(e,q.foreL,-.3,0,0),Y(e,q.foreR,-.3,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=-.36,e[41]=0},Cf=(e,t)=>{let n=Math.sin(t),r=.5+.5*n,i=.5-.5*n;Y(e,q.hips,.05,0,n*.12),Y(e,q.spine,.12,0,-n*.08),Y(e,q.head,-.55,n*.18,0),Y(e,q.armL,-2.15-.75*r,0,.32),Y(e,q.armR,-2.15-.75*i,0,-.32),Y(e,q.foreL,-.95*(1-r)-.1,0,0),Y(e,q.foreR,-.95*(1-i)-.1,0,0),Y(e,q.legL,-.25-.95*i,0,.32),Y(e,q.legR,-.25-.95*r,0,-.32),Y(e,q.shinL,.35+1.35*i,0,0),Y(e,q.shinR,.35+1.35*r,0,0),Y(e,q.pack,0,0,0),e[yf]=n*.07,e[40]=-.04+Math.abs(Math.cos(t))*.05,e[41]=.06},wf=(e,t)=>{let n=T(t/10,-1,1);Y(e,q.hips,-.05,0,0),Y(e,q.spine,-.08,0,0),Y(e,q.head,-.7,0,0),Y(e,q.armL,-3,0,.18+n*.1),Y(e,q.armR,-3,0,-.18-n*.1),Y(e,q.foreL,-.05,0,0),Y(e,q.foreR,-.05,0,0),Y(e,q.legL,.2-n*.5,0,.12),Y(e,q.legR,.05-n*.3,0,-.12),Y(e,q.shinL,.4,0,0),Y(e,q.shinR,.7,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=.06,e[41]=-.05},Tf=e=>{Y(e,q.hips,.2,0,0),Y(e,q.spine,.3,0,0),Y(e,q.head,.25,.6,0),Y(e,q.armL,-1.3,0,1.25),Y(e,q.armR,-1.3,0,-1.25),Y(e,q.foreL,-.9,0,0),Y(e,q.foreR,-.9,0,0),Y(e,q.legL,-.6,0,.55),Y(e,q.legR,-.6,0,-.55),Y(e,q.shinL,1.2,0,0),Y(e,q.shinR,1.2,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=-.15,e[41]=.2},Ef=(e,t,n)=>{let r=Math.sin(n*22)*.02;Y(e,q.hips,0,0,-t*.3),Y(e,q.spine,.42,0,-t*.25),Y(e,q.head,-.3,t*.3,0),Y(e,q.legL,-1.55,0,.18),Y(e,q.legR,-1.55,0,-.18),Y(e,q.shinL,2.05,0,0),Y(e,q.shinR,2.05,0,0),Y(e,q.armL,-1.15,0,.42),Y(e,q.armR,-1.15,0,-.42),Y(e,q.foreL,-.7,0,0),Y(e,q.foreR,-.7,0,0),Y(e,q.pack,.05,0,0),e[yf]=0,e[40]=-.02+r,e[41]=-.1},Df=e=>{Ef(e,0,0),Y(e,q.spine,1.05,0,0),Y(e,q.head,.2,0,0),e[40]=-.32},Of=(e,t,n)=>{let r=Math.sin(t*2.6)*.18;Y(e,q.hips,r,0,n*.3),Y(e,q.spine,-.05,0,0),Y(e,q.head,-.35,0,0),Y(e,q.armL,-3.05,0,.12),Y(e,q.armR,-3.05,0,-.12),Y(e,q.foreL,-.15,0,0),Y(e,q.foreR,-.15,0,0),Y(e,q.legL,-.45+r,0,.05),Y(e,q.legR,-.25+r,0,-.05),Y(e,q.shinL,.55,0,0),Y(e,q.shinR,.35,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=.08,e[41]=0},kf=(e,t)=>{let n=Math.sin(t*1.7)*.08;Y(e,q.hips,-.25,0,n),Y(e,q.spine,-.1,0,0),Y(e,q.head,-.2,0,0),Y(e,q.armL,-2.6,0,.55),Y(e,q.armR,-2.6,0,-.55),Y(e,q.foreL,-.3,0,0),Y(e,q.foreR,-.3,0,0),Y(e,q.legL,-1.25,0,.05),Y(e,q.legR,-1.15,0,-.05),Y(e,q.shinL,.9+n,0,0),Y(e,q.shinR,1-n,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=0,e[41]=0},Af=(e,t)=>{let n=Math.sin(t*1.9)*.025,r=Math.sin(t*.37)*.5+Math.sin(t*.91)*.15;Y(e,q.hips,0,Math.sin(t*.3)*.05,Math.sin(t*.5)*.03),Y(e,q.spine,.04+n,0,0),Y(e,q.head,-.12+Math.sin(t*.6)*.06,r,0),Y(e,q.armL,.08,0,.16+n),Y(e,q.armR,-.06,0,-.18-n),Y(e,q.foreL,-.35,0,0),Y(e,q.foreR,-.3,0,0),Y(e,q.legL,-.04,0,.06),Y(e,q.legR,.04,0,-.04),Y(e,q.shinL,.08,0,0),Y(e,q.shinR,.05,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=n*.4,e[41]=0},jf=(e,t)=>{let n=Math.sin(t*9)*.25;Y(e,q.hips,0,0,0),Y(e,q.spine,-.15,0,0),Y(e,q.head,-.35,0,0),Y(e,q.armL,-2.75,0,.75+n),Y(e,q.armR,-2.75,0,-.75-n),Y(e,q.foreL,-.2,0,0),Y(e,q.foreR,-.2,0,0),Y(e,q.legL,-.1,0,.12),Y(e,q.legR,.1,0,-.12),Y(e,q.shinL,.2,0,0),Y(e,q.shinR,.2,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=0,e[41]=0},Mf=(e,t)=>{Y(e,q.hips,Math.sin(t*9)*.5,0,Math.cos(t*7)*.3),Y(e,q.spine,.3,0,0),Y(e,q.head,-.4,0,0),Y(e,q.armL,-2.2+Math.sin(t*13)*.8,0,1),Y(e,q.armR,-1.6+Math.cos(t*11)*.8,0,-1),Y(e,q.foreL,-.4,0,0),Y(e,q.foreR,-.6,0,0),Y(e,q.legL,-.8+Math.sin(t*10)*.6,0,.4),Y(e,q.legR,-.3+Math.cos(t*12)*.6,0,-.4),Y(e,q.shinL,.9,0,0),Y(e,q.shinR,1.2,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=0,e[41]=0},Nf=(e,t)=>{let n=Math.sin(t*2.1)*.15;Y(e,q.hips,n*.5,0,0),Y(e,q.spine,0,0,0),Y(e,q.head,-.25,Math.sin(t*.8)*.4,0),Y(e,q.armL,-2.65,0,.42),Y(e,q.armR,-2.65,0,-.42),Y(e,q.foreL,-.25,0,0),Y(e,q.foreR,-.25,0,0),Y(e,q.legL,-.15+n,0,.1),Y(e,q.legR,.1-n,0,-.1),Y(e,q.shinL,.35,0,0),Y(e,q.shinR,.25,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=0,e[41]=0},Pf=(e,t)=>{let n=Math.sin(t*2.4)*.12;Y(e,q.hips,-.15,0,n*.4),Y(e,q.spine,.25,0,n),Y(e,q.head,.15,n*2,n),Y(e,q.legL,-1.5,0,.35),Y(e,q.legR,-1.45,0,-.35),Y(e,q.shinL,.3,0,0),Y(e,q.shinR,.45,0,0),Y(e,q.armL,.4,0,.6),Y(e,q.armR,.4,0,-.6),Y(e,q.foreL,-.2,0,0),Y(e,q.foreR,-.2,0,0),Y(e,q.pack,0,0,0),e[yf]=0,e[40]=-.48,e[41]=0},Ff=class{mesh;n=12;seg=.115;pos=[];prev=[];geo;posAttr;inited=!1;constructor(){this.geo=new za;let e=new Float32Array(this.n*2*3);this.posAttr=new wa(e,3),this.geo.setAttribute(`position`,this.posAttr),this.geo.setAttribute(`color`,new wa(new Float32Array(this.n*2*3),3));let t=[];for(let e=0;e<this.n-1;e++){let n=e*2;t.push(n,n+1,n+2,n+1,n+3,n+2)}this.geo.setIndex(t),this.mesh=new lo(this.geo,new gs({vertexColors:!0,side:2})),this.mesh.frustumCulled=!1;for(let e=0;e<this.n;e++)this.pos.push(new R),this.prev.push(new R)}setColors(e,t){let n=gf(e),r=gf(t),i=this.geo.getAttribute(`color`);for(let e=0;e<this.n;e++){let t=(e>>1)%2==0?n:r,a=e>=this.n-2?r:t;i.setXYZ(e*2,a.r,a.g,a.b),i.setXYZ(e*2+1,a.r*.85,a.g*.85,a.b*.85)}i.needsUpdate=!0}reset(e,t){for(let n=0;n<this.n;n++)this.pos[n].copy(e).addScaledVector(t,n*this.seg),this.prev[n].copy(this.pos[n]);this.inited=!0}update(e,t,n,r,i,a){this.inited||this.reset(t,a);let o=Math.min(e,1/30)/2;for(let e=0;e<2;e++){this.pos[0].copy(t);for(let e=1;e<this.n;e++){let t=this.pos[e],a=this.prev[e];cf.subVectors(t,a).multiplyScalar(.9),a.copy(t);let s=Math.sin(i*17-e*.9)*2.6*(e/this.n);t.add(cf),t.x+=(r.x+n.x*s)*o*o*60,t.y+=(r.y-9.8+n.y*s+Math.cos(i*13-e)*1.4)*o*o*60,t.z+=(r.z+n.z*s)*o*o*60}for(let e=0;e<3;e++){this.pos[0].copy(t);for(let e=0;e<this.n-1;e++){let t=this.pos[e],n=this.pos[e+1];cf.subVectors(n,t);let r=cf.length()||1e-4;n.copy(t).addScaledVector(cf,this.seg/r)}}}for(let e=0;e<this.n;e++){let t=this.pos[e],r=Math.sin(i*9-e*.7)*.5,a=.075*(e===this.n-1?.6:1);this.posAttr.setXYZ(e*2,t.x+n.x*a,t.y+n.y*a+r*.02,t.z+n.z*a),this.posAttr.setXYZ(e*2+1,t.x-n.x*a,t.y-n.y*a-r*.02,t.z-n.z*a)}this.posAttr.needsUpdate=!0,this.geo.computeVertexNormals()}},If=e=>new gs({color:e}),Lf=()=>{let e=new Ii,t=new $d,n=gf(7305360),r=gf(4541536),i=gf(9132602),a=gf(11556142);J(t,new H(1.5,.12,1.9),K(0,.32,0),r),J(t,new H(.1,.62,1.9),K(.75,.66,0),a),J(t,new H(.1,.62,1.9),K(-.75,.66,0),a),J(t,new H(1.5,.62,.1),K(0,.66,.95),a),J(t,new H(1.5,.62,.1),K(0,.66,-.95),a),J(t,new H(1.64,.08,2.04),K(0,.99,0),n);for(let e of[-.5,.5])J(t,new H(1.62,.07,.14),K(0,.7,e*1.92),i);for(let e of[-.5,.5])for(let i of[-.6,.6])J(t,new Qo(.2,.2,.09,10),K(e,.2,i,0,0,Math.PI/2),r),J(t,new Qo(.07,.07,.1,6),K(e*1.02,.2,i,0,0,Math.PI/2),n);let o=new lo(t.build(),new gs({vertexColors:!0}));return e.add(o),e},Rf=()=>{let e=new Ii,t=new $d;return J(t,new as(.13,.05,5,10),K(0,2.28,0,0,Math.PI/2,0),gf(10134453)),J(t,new H(.08,.32,.08),K(0,2.06,0),gf(3817298)),J(t,new H(.62,.06,.06),K(0,1.9,0),gf(16738859)),e.add(new lo(t.build(),new gs({vertexColors:!0}))),e},zf=(e,t,n,r,i)=>{let a=new $d;for(let o=0;o<n;o++){let s=o/n*Math.PI*2,c=(o+1)/n*Math.PI*2,l=gf(r[o%r.length]);for(let n=0;n<4;n++){let r=n/4*(Math.PI/2),o=(n+1)/4*(Math.PI/2),u=(n,r)=>new R(Math.cos(n)*Math.sin(r)*e*(i?1.6:1),Math.cos(r)*t,Math.sin(n)*Math.sin(r)*e*(i?.55:1));a.quad(u(s,r),u(c,r),u(c,o),u(s,o),l.clone().multiplyScalar(1-n*.06))}}return a.build()},Bf=(e,t)=>{let n=new $d,r=gf(15921126);for(let i of e){let e=new R().subVectors(t,i).normalize(),a=new R().crossVectors(e,new R(0,0,1)).normalize().multiplyScalar(.012);n.quad(i.clone().add(a),t.clone().add(a),t.clone().sub(a),i.clone().sub(a),r)}return n.build()},Vf=`
uniform float uTime;
uniform vec3 uColor;
uniform float uOpacity;
varying vec3 vN;
varying vec3 vV;
varying vec3 vP;
void main() {
  float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
  float scan = 0.5 + 0.5 * sin(vP.y * 26.0 - uTime * 6.0);
  float hex = 0.5 + 0.5 * sin(vP.x * 40.0) * sin(vP.z * 40.0 + uTime);
  float a = (f * 0.9 + scan * 0.08 + hex * 0.05) * uOpacity;
  gl_FragColor = vec4(uColor * a, 1.0);
}`,Hf=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vP;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalMatrix * normal;
  vV = -mv.xyz;
  vP = position;
  gl_Position = projectionMatrix * mv;
}`,Uf=class{group=new Ii;inner=new Ii;body;bones=[];scarf=new Ff;cart=Lf();trolley=Rf();glider=new Ii;chute=new Ii;shield;lamp;shieldMat;pose=new Float32Array(vf);target=new Float32Array(vf);tmp=new Float32Array(vf);material=new gs({vertexColors:!0});climber;chuteOpen=0;gliderOpen=0;shieldOn=0;constructor(e){this.group.add(this.inner),this.scarf.mesh.renderOrder=1;let t=new lo(zf(1.7,.75,9,[16738859,16763213,16738859,16773577],!0),If(16777215));t.material.vertexColors=!0,t.material.side=2,t.position.y=3.3;let n=new lo(Bf([-2.3,-1.2,0,1.2,2.3].map(e=>new R(e,3.4+(1-Math.abs(e)/2.5)*.5,0)),new R(0,1.2,0)),new Za({vertexColors:!0,side:2}));this.glider.add(t,n),this.glider.visible=!1;let r=new lo(zf(1.45,.95,10,[16723797,16774378],!1),If(16777215));r.material.vertexColors=!0,r.material.side=2,r.position.y=2.75;let i=[];for(let e=0;e<8;e++)i.push(new R(Math.cos(e/8*Math.PI*2)*1.4,2.8,Math.sin(e/8*Math.PI*2)*1.4));let a=new lo(Bf(i,new R(0,1.25,0)),new Za({vertexColors:!0,side:2}));this.chute.add(r,a),this.chute.visible=!1,this.group.add(this.glider,this.chute,this.trolley),this.trolley.visible=!1,this.shieldMat=new ms({vertexShader:Hf,fragmentShader:Vf,transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uColor:{value:new V(7334399)},uOpacity:{value:0}}}),this.shield=new lo(new ts(1.15,2),this.shieldMat),this.shield.position.y=.82,this.shield.visible=!1,this.group.add(this.shield),this.lamp=new lo(new H(.1,.07,.06),new Za({color:16774084})),this.lamp.visible=!1,this.setClimber(e)}setClimber(e){this.climber=e,this.body&&(this.inner.remove(this.body),this.body.geometry.dispose());let t=_f(e);this.bones=[];for(let e=0;e<of;e++){let[t,n,r,i]=sf[e],a=new Co;a.position.set(n,r,i),this.bones.push(a),t>=0&&this.bones[t].add(a)}let n=new So(t,this.material);n.add(this.bones[0]),n.bind(new Do(this.bones)),n.frustumCulled=!1,this.body=n,this.inner.add(n),this.scarf.setColors(e.scarf,e.scarf2),this.bones[q.head].add(this.lamp),this.lamp.position.set(0,.29,.2)}neckWorld(e){return this.bones[q.spine].updateWorldMatrix(!0,!1),e.set(0,.33,-.12).applyMatrix4(this.bones[q.spine].matrixWorld)}headWorld(e){return this.bones[q.head].updateWorldMatrix(!0,!1),e.set(0,.3,0).applyMatrix4(this.bones[q.head].matrixWorld)}handWorld(e,t){let n=this.bones[e?q.foreL:q.foreR];return n.updateWorldMatrix(!0,!1),t.set(0,-.24,0).applyMatrix4(n.matrixWorld)}footWorld(e,t){let n=this.bones[e?q.shinL:q.shinR];return n.updateWorldMatrix(!0,!1),t.set(0,-.26,.05).applyMatrix4(n.matrixWorld)}animate(e,t){let n=this.target,r=t.time;t.alive?t.idle?t.celebrate>0?jf(n,r):Af(n,r):t.wings?kf(n,r):t.mode===`zip`?Of(n,r,t.lean):t.mode===`cart`?(t.duck?Df(n):Ef(n,t.curve,r),t.air&&(n[q.armL*3]-=.6,n[q.armR*3]-=.6)):t.mode===`climb`?t.air?wf(n,t.vh):t.duck?Tf(n):Cf(n,t.phase):t.celebrate>0?jf(n,r):t.air?xf(n,t.vh):t.duck?Sf(n):bf(n,t.phase,t.speed):t.chute?Nf(n,r):t.dazed?Pf(n,r):Mf(n,r),n[q.spine*3+2]+=-t.lean*.35,n[q.hips*3+2]+=-t.lean*.15;let i=A(t.alive?18:10,e),a=this.pose;for(let e=0;e<vf;e++)a[e]+=(n[e]-a[e])*i;for(let e=1;e<of;e++)this.bones[e].rotation.set(a[e*3],a[e*3+1],a[e*3+2]);this.inner.position.set(a[yf],a[40],a[41]),this.trolley.visible=t.alive&&t.mode===`zip`&&!t.wings,this.gliderOpen+=((t.wings&&t.alive?1:0)-this.gliderOpen)*A(6,e),this.glider.visible=this.gliderOpen>.02,this.glider.scale.setScalar(Math.max(.01,this.gliderOpen)),this.glider.rotation.z=Math.sin(r*1.7)*.06-t.lean*.25,this.chuteOpen+=(+!!t.chute-this.chuteOpen)*A(5,e),this.chute.visible=this.chuteOpen>.02,this.chute.scale.set(Math.max(.01,this.chuteOpen),Math.max(.01,this.chuteOpen*(.8+Math.sin(r*7)*.04)),Math.max(.01,this.chuteOpen)),this.chute.rotation.z=Math.sin(r*2.1)*.12,this.shield.visible=this.shieldOn>.01,this.shieldMat.uniforms.uOpacity.value=this.shieldOn,this.shieldMat.uniforms.uTime.value=r,this.shield.rotation.y=r*.6,this.tmp}updateScarf(e,t,n,r,i){this.neckWorld(cf);let a=lf.copy(cf);this.scarf.update(e,a,n,t,i,r)}resetScarf(e){this.neckWorld(cf),this.scarf.reset(cf,e)}},Wf=`
attribute vec3 color;
attribute float aSize;
attribute float aAlpha;
attribute float aShape;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
varying float vShape;
#include <fog_pars_vertex>
void main() {
  vColor = color;
  vAlpha = aAlpha;
  vShape = aShape;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = clamp(aSize * uScale / max(0.1, -mvPosition.z), 0.0, 220.0);
  #include <fog_vertex>
}`,Gf=`
varying vec3 vColor;
varying float vAlpha;
varying float vShape;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float a;
  if (vShape < 0.5) {
    a = smoothstep(0.5, 0.05, length(c));
  } else if (vShape < 1.5) {
    // chunky debris: a soft-edged diamond
    a = smoothstep(0.5, 0.42, abs(c.x) + abs(c.y));
  } else {
    // sparkle: a four-point star
    float d = min(abs(c.x), abs(c.y));
    a = smoothstep(0.08, 0.0, d) * smoothstep(0.5, 0.0, length(c)) + smoothstep(0.22, 0.0, length(c));
  }
  if (a * vAlpha < 0.01) discard;
  gl_FragColor = vec4(vColor, a * vAlpha);
  #include <fog_fragment>
  #include <colorspace_fragment>
}`,Kf=`
attribute vec3 iPos;
attribute vec4 iCol;
attribute float iSize;
varying vec2 vUv;
varying vec4 vCol;
void main() {
  vUv = position.xy;
  vCol = iCol;
  vec4 mv = viewMatrix * vec4(iPos, 1.0);
  mv.xy += position.xy * iSize;
  gl_Position = projectionMatrix * mv;
}`,qf=`
varying vec2 vUv;
varying vec4 vCol;
void main() {
  float d = length(vUv) * 2.0;
  float a = exp(-d * d * 3.2) + exp(-d * d * 28.0) * 0.8;
  a *= smoothstep(1.0, 0.75, d);
  gl_FragColor = vec4(vCol.rgb * a * vCol.a, 1.0);
  #include <colorspace_fragment>
}`,Jf=(e,t)=>{let n=new za,r=new Float32Array(e*3),i=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),s=new Float32Array(e),c=(e,t)=>new wa(e,t).setUsage(_r);n.setAttribute(`position`,c(r,3)),n.setAttribute(`color`,c(i,3)),n.setAttribute(`aSize`,c(a,1)),n.setAttribute(`aAlpha`,c(o,1)),n.setAttribute(`aShape`,c(s,1)),n.setDrawRange(0,0);let l=new ms({vertexShader:Wf,fragmentShader:Gf,transparent:!0,depthWrite:!1,blending:t?2:1,fog:!0,uniforms:{uScale:{value:400},fogColor:{value:new V},fogNear:{value:1},fogFar:{value:1e3}}}),u=new Ko(n,l);return u.frustumCulled=!1,u.renderOrder=t?6:5,{max:e,count:0,pos:r,vel:new Float32Array(e*3),col:i,size:a,alpha:o,shape:s,life:new Float32Array(e),maxLife:new Float32Array(e),s0:new Float32Array(e),s1:new Float32Array(e),grav:new Float32Array(e),drag:new Float32Array(e),geo:n,points:u,mat:l}},Yf=new V,Xf=new V,Zf=new R,Qf=class{soft=Jf(1400,!1);add=Jf(1400,!0);glowGeo;glowPos;glowCol;glowSize;glowCount=0;glowMax=600;glowMesh;rnd=1;constructor(e){e.add(this.soft.points,this.add.points);let t=new rc,n=new rs(1,1);t.index=n.index,t.setAttribute(`position`,n.getAttribute(`position`)),this.glowPos=new Float32Array(this.glowMax*3),this.glowCol=new Float32Array(this.glowMax*4),this.glowSize=new Float32Array(this.glowMax),t.setAttribute(`iPos`,new Oo(this.glowPos,3).setUsage(_r)),t.setAttribute(`iCol`,new Oo(this.glowCol,4).setUsage(_r)),t.setAttribute(`iSize`,new Oo(this.glowSize,1).setUsage(_r)),t.instanceCount=0,this.glowGeo=t;let r=new ms({vertexShader:Kf,fragmentShader:qf,transparent:!0,depthWrite:!1,blending:2});this.glowMesh=new lo(t,r),this.glowMesh.frustumCulled=!1,this.glowMesh.renderOrder=7,e.add(this.glowMesh)}r(){return this.rnd=this.rnd*16807%2147483647,this.rnd/2147483647}setView(e,t,n,r,i){let a=e/(2*Math.tan(t*Math.PI/180/2));for(let e of[this.soft,this.add])e.mat.uniforms.uScale.value=a,e.mat.uniforms.fogColor.value.copy(n),e.mat.uniforms.fogNear.value=r,e.mat.uniforms.fogFar.value=i*1.4}emit(e,t,n={}){let r=e===`spark`||e===`crystal`||e===`ember`||e===`mote`||e===`star`||e===`speed`?this.add:this.soft,i=n.count??8,a=n.spread??.3,o=n.speed??2,s=n.cone??1;Yf.set(n.color??16777215),Xf.set(n.color2??n.color??16777215);for(let c=0;c<i;c++){r.count>=r.max&&this.kill(r,0);let i=r.count++,c=i*3;r.pos[c]=t.x+(this.r()-.5)*a*2,r.pos[c+1]=t.y+(this.r()-.5)*a*2,r.pos[c+2]=t.z+(this.r()-.5)*a*2,Zf.set(this.r()*2-1,this.r()*2-1,this.r()*2-1).normalize(),n.dir&&Zf.multiplyScalar(s).add(n.dir).normalize();let l=o*(.45+this.r()*.75);r.vel[c]=Zf.x*l,r.vel[c+1]=Zf.y*l,r.vel[c+2]=Zf.z*l;let u=this.r();r.col[c]=Yf.r+(Xf.r-Yf.r)*u,r.col[c+1]=Yf.g+(Xf.g-Yf.g)*u,r.col[c+2]=Yf.b+(Xf.b-Yf.b)*u;let d=(n.life??.8)*(.7+this.r()*.6);r.life[i]=d,r.maxLife[i]=d;let f=(n.size??.3)*(.7+this.r()*.6);r.s0[i]=f,r.s1[i]=n.sizeEnd===void 0?f:n.sizeEnd*(.7+this.r()*.6),r.grav[i]=n.gravity??0,r.drag[i]=n.drag??1.5,r.shape[i]=e===`debris`||e===`confetti`?1:e===`star`||e===`crystal`?2:0,r.alpha[i]=1,r.size[i]=f}}kill(e,t){let n=--e.count;if(t===n)return;let r=t*3,i=n*3;for(let t of[e.pos,e.vel,e.col])t[r]=t[i],t[r+1]=t[i+1],t[r+2]=t[i+2];for(let r of[e.size,e.alpha,e.shape,e.life,e.maxLife,e.s0,e.s1,e.grav,e.drag])r[t]=r[n]}glow(e,t,n,r=1){if(this.glowCount>=this.glowMax||r<=.003)return;let i=this.glowCount++;this.glowPos[i*3]=e.x,this.glowPos[i*3+1]=e.y,this.glowPos[i*3+2]=e.z,this.glowCol[i*4]=n.r,this.glowCol[i*4+1]=n.g,this.glowCol[i*4+2]=n.b,this.glowCol[i*4+3]=r,this.glowSize[i]=t}update(e){for(let t of[this.soft,this.add]){for(let n=t.count-1;n>=0;n--){if(t.life[n]-=e,t.life[n]<=0){this.kill(t,n);continue}let r=n*3,i=Math.exp(-t.drag[n]*e);t.vel[r]*=i,t.vel[r+1]=t.vel[r+1]*i-t.grav[n]*e,t.vel[r+2]*=i,t.pos[r]+=t.vel[r]*e,t.pos[r+1]+=t.vel[r+1]*e,t.pos[r+2]+=t.vel[r+2]*e;let a=1-t.life[n]/t.maxLife[n];t.size[n]=t.s0[n]+(t.s1[n]-t.s0[n])*a,t.alpha[n]=a<.15?a/.15:1-((a-.15)/.85)**1.6}let n=t.geo;n.setDrawRange(0,t.count);for(let e of[`position`,`color`,`aSize`,`aAlpha`,`aShape`]){let r=n.getAttribute(e);r.needsUpdate=!0,r.clearUpdateRanges(),r.addUpdateRange(0,t.count*r.itemSize)}}let t=this.glowGeo;t.instanceCount=this.glowCount;for(let e of[`iPos`,`iCol`,`iSize`]){let n=t.getAttribute(e);n.needsUpdate=!0,n.clearUpdateRanges(),n.addUpdateRange(0,this.glowCount*n.itemSize)}this.glowCount=0}clear(){this.soft.count=0,this.add.count=0}get particleCount(){return this.soft.count+this.add.count}attachTo(e){}},$f=rt(),ep=new R,tp=new R,np=new B,rp=new Br,ip=new R,ap=new R,op=new R,sp=new R,cp=new V(4191969),lp=new V(3135999),up=new V(16763213),dp={magnet:new V(16731501),shield:new V(5880063),wings:new V(16756782)},fp=(e,t,n,r,i=.08)=>{let a=t.index?t.toNonIndexed():t,o=a.getAttribute(`position`),s=new V().setHex(r),c=new V;for(let t=0;t<o.count;t+=3)ap.fromBufferAttribute(o,t).applyMatrix4(n),op.fromBufferAttribute(o,t+1).applyMatrix4(n),sp.fromBufferAttribute(o,t+2).applyMatrix4(n),c.copy(s).multiplyScalar(1+(t*7919%100/100-.5)*i*2),e.tri(ap,op,sp,c);a!==t&&a.dispose(),t.dispose()},pp=()=>{let e=new $d;return fp(e,new ns(.3,0),K(0,0,0,0,0,0,.75,1.25,.75),4191969,.18),e.build()},mp=e=>{let t=new $d;if(e===`magnet`){fp(t,new as(.34,.12,6,10,Math.PI),K(0,.05,0,0,0,Math.PI),16731501);for(let e of[-.34,.34])fp(t,new H(.25,.22,.25),K(e,.16,0),15659775)}else if(e===`shield`)fp(t,new is(.4,10,5,0,Math.PI*2,0,Math.PI/2),K(0,-.1,0),5880063),fp(t,new H(.62,.12,.12),K(0,.05,.33),16763213),fp(t,new Qo(.42,.44,.07,10),K(0,-.12,0),3043281);else{for(let e=0;e<5;e++){let n=-.9+e*.45;fp(t,new H(.34,.06,.4),K(Math.sin(n)*.5,Math.cos(n)*.5-.3,0,0,0,-n),e%2?16763213:16738859)}fp(t,new $o(.1,.25,4),K(0,-.35,0,Math.PI,0,0),2830149)}return t.build()},hp=class{group=new Ii;crystals;gems;powers=new Map;powerGeos={};powerMat=new gs({vertexColors:!0,emissive:2236962});crystalMat=new gs({vertexColors:!0,emissive:new V(1019782),emissiveIntensity:1});gemMat=new gs({color:16763213,emissive:new V(10119696)});max=700;ringGeo=new as(.62,.035,4,24);constructor(e){this.crystals=new Io(pp(),this.crystalMat,this.max),this.crystals.instanceMatrix.setUsage(_r),this.crystals.frustumCulled=!1,this.crystals.count=0,this.gems=new Io(new ns(.42,0),this.gemMat,32),this.gems.instanceMatrix.setUsage(_r),this.gems.frustumCulled=!1,this.gems.count=0,this.group.add(this.crystals,this.gems);for(let e of[`magnet`,`shield`,`wings`])this.powerGeos[e]=mp(e);e.add(this.group)}itemPos(e,t,n,r,i){e.frame(t.s,$f);let a=Math.sin(n*3+t.id*.7)*.12,o=t.h+a;return i.set($f.px+$f.rx*t.x+$f.ux*o,$f.py+$f.ry*t.x+$f.uy*o,$f.pz+$f.rz*t.x+$f.uz*o),t.pull>0&&i.lerp(r,t.pull*t.pull),i}update(e,t,n,r,i,a,o){let s=0,c=0,l=new Set;for(let u of t){if(u.s0>n+175)break;if(!(u.s1<n-8))for(let t of u.items){if(t.taken)continue;let u=t.s-n;if(!(u<-6||u>175)){if(this.itemPos(e,t,r,i,tp),t.kind===`crystal`){if(s>=this.max)continue;let e=r*2.2+t.id;rp.setFromAxisAngle(ep.set(0,1,0),e);let n=1-t.pull*.4;np.compose(tp,rp,ip.set(n,n,n)),this.crystals.setMatrixAt(s++,np),o>0&&u<90&&a.glow(tp,1.05,lp,.26*(1-Math.max(0,u-60)/30))}else if(t.kind===`gem`){if(c>=32)continue;rp.setFromAxisAngle(ep.set(0,1,0),r*3),np.compose(tp,rp,ip.set(1,1.3,1)),this.gems.setMatrixAt(c++,np),a.glow(tp,2.4,up,.55)}else{l.add(t.id);let e=this.powers.get(t.id);if(!e){e=new lo(this.powerGeos[t.kind],this.powerMat);let n=new lo(this.ringGeo,new gs({color:dp[t.kind],emissive:dp[t.kind],emissiveIntensity:.6}));e.add(n),this.group.add(e),this.powers.set(t.id,e)}e.position.copy(tp),e.rotation.set(0,r*2.4,0),e.scale.setScalar(1.35+Math.sin(r*5)*.06),e.children[0].rotation.set(Math.PI/2+Math.sin(r*2)*.3,0,r*1.5),a.glow(tp,3.4,dp[t.kind],.6)}}}}for(let[e,t]of this.powers)l.has(e)||(this.group.remove(t),this.powers.delete(e));this.crystals.count=s,this.crystals.instanceMatrix.needsUpdate=!0,this.gems.count=c,this.gems.instanceMatrix.needsUpdate=!0}},gp=new Set([`sunElev`,`sunAzim`,`hemiIntensity`,`sunIntensity`,`stars`,`aurora`,`snowCover`]),_p=new Map,vp=e=>{let t=_p.get(e);if(t)return t;let n=dt(e).palette,r={};for(let e of Object.keys(n))r[e]=gp.has(e)?n[e]:new V().setHex(n[e]);return t=r,_p.set(e,t),t},yp=e=>{let t={};for(let n of Object.keys(e)){let r=e[n];t[n]=typeof r==`number`?r:r.clone()}return t},bp=(e,t,n,r)=>{for(let i of Object.keys(e)){let a=e[i],o=t[i];typeof a==`number`?r[i]=a+(o-a)*n:r[i].copy(a).lerp(o,n)}return r},xp=2.25,Sp=[-30,-19,-12,-7.5,-4.8,-3.45,-1.05,0,1.05,3.45,4.8,7.5,12,19,30],Cp=Sp.length,wp={crest:[-26,-16,-8.5,-3.4,-1,-.12,0,0,0,-.12,-1,-3.4,-8.5,-16,-26],ledgeL:[24,15,8,3.4,.9,.1,0,0,0,-.12,-1,-3.4,-8.5,-16,-26],ledgeR:[-26,-16,-8.5,-3.4,-1,-.12,0,0,0,.1,.9,3.4,8,15,24],forest:[-13,-7.5,-4.2,-2,-.6,-.08,0,0,0,-.08,-.6,-2,-4.2,-7.5,-13],wall:[-36,-21,-9.5,-3.2,-.75,-.12,0,0,0,-.12,-.75,-3.2,-9.5,-21,-36],buttress:[-18,3.2,5.2,1.7,.45,.1,0,0,0,.1,.45,1.7,5.2,3.2,-18],shaft:[-4,9,10,6.5,1.4,.2,0,0,0,.2,1.4,6.5,10,9,-4],plateau:[-30,-15,-5.5,-1.6,-.35,-.04,0,0,0,-.04,-.35,-1.6,-5.5,-15,-30]},Tp=[9,6,3.4,1.5,.45,.05,0,0,0,.05,.45,1.5,3.4,6,9],Ep=[4,2.6,2,1,.32,.06,.02,.02,.02,.06,.32,1,2,2.6,4],Dp=[[-3.6,0],[-1.05,0],[0,0],[1.05,0],[3.6,0],[4.9,1.1],[5.4,2.8],[4.7,4.5],[2.6,5.6],[0,5.95],[-2.6,5.6],[-4.7,4.5],[-5.4,2.8],[-4.9,1.1]],Op=[.05,0,0,0,.05,.5,.65,.6,.45,.4,.45,.6,.65,.5],kp=new V(9132602),Ap=new V(5912614),jp=new V(10134453),Mp=new V(16756782),Np=[3108829,16052714,14696762,3912554,16106818].map(e=>new V(e)),Pp=new gs({vertexColors:!0,side:2}),Fp=new Za({vertexColors:!0,fog:!0}),Ip=rt(),X=rt(),Lp=new R,Rp=new R,zp=new R,Bp=new R,Vp=new R,Hp=new B,Up=new Br,Wp=new V,Gp=new R(0,1,0),Kp=(e,t,n,r,i,a=Ip)=>(e.frame(t,a),i.set(a.px+a.rx*n+a.ux*r,a.py+a.ry*n+a.uy*r,a.pz+a.rz*n+a.uz*r)),qp=(e,t,n,r,i,a,o,s=a)=>(Kp(e,t,n,r,Lp),Up.setFromAxisAngle(Gp,i+Ip.yaw),o.compose(Lp,Up,Rp.set(a,s,a))),Jp=(e,t,n,r,i,a,o,s,c)=>(Kp(e,t,n,r,Lp),s.makeBasis(Rp.set(-Ip.rx,-Ip.ry,-Ip.rz),zp.set(Ip.ux,Ip.uy,Ip.uz),Bp.set(Ip.fx,Ip.fy,Ip.fz)),c&&s.multiply(Hp.makeRotationFromQuaternion(c)),s.scale(Vp.set(i,a,o)),s.setPosition(Lp),s),Yp=class{pal;snowCover;rng;noise;slots;constructor(e,t){this.pal=vp(e),this.snowCover=this.pal.snowCover,this.rng=new ct(t),this.noise=new zd(t);let n=this.pal;this.slots=[],this.slots[G.rock]=n.rock,this.slots[G.rockDark]=n.rockDark,this.slots[G.rockLight]=n.rockLight,this.slots[G.foliage]=n.foliage,this.slots[G.foliageDark]=n.foliageDark,this.slots[G.wood]=kp,this.slots[G.snow]=n.snow,this.slots[G.accent]=n.accent,this.slots[G.ground]=n.ground,this.slots[G.white]=new V(15660799).lerp(n.snow,.3),this.slots[G.red]=new V(14172207),this.slots[G.woodDark]=Ap,this.slots[G.metal]=jp,this.slots[G.orange]=new V(16742959),this.slots[G.cloth]=new V(4026321),this.slots[G.hazard]=Mp}paint=(e,t,n,r)=>(r.copy(this.slots[e]??this.pal.rock).multiplyScalar(t),this.snowCover>0&&n>.55&&(e===G.rock||e===G.rockLight||e===G.foliage||e===G.foliageDark)&&this.rng.next()<this.snowCover*.9&&r.copy(this.pal.snow).multiplyScalar(.94+t*.06),r);surface(e,t,n,r,i,a){let o=this.pal,s=this.rng.next(),c=this.noise.n2(i*.05,r*.08);switch(e){case`ground`:a.copy(o.ground).lerp(o.groundDark,T(.12+c*.25,0,.5));break;case`trail`:a.copy(o.rockLight).lerp(o.ground,.38+c*.12).lerp(o.groundDark,.12),this.snowCover>.5&&a.lerp(o.snow,.55);break;case`edge`:a.copy(o.groundDark).lerp(o.rock,.3+s*.2);break;case`slope`:{let e=O(.5,.82,t+c*.12);a.copy(this.strata(n,s)).lerp(s<.5?o.ground:o.groundDark,e*.92),this.snowCover>0&&t>.45&&s<this.snowCover&&a.copy(o.snow).multiplyScalar(.92+s*.1);break}case`wall`:a.copy(this.strata(n,s)),this.snowCover>0&&t>.5&&s<this.snowCover*.8&&a.copy(o.snow);break;case`cave`:a.copy(o.rockDark).lerp(o.rock,.12+c*.18+s*.12).multiplyScalar(.82);break;case`caveFloor`:a.copy(o.rockDark).multiplyScalar(.6+s*.12)}return a.multiplyScalar(.94+s*.12),a}strata(e,t){let n=this.pal,r=Math.sin(e*.55+this.noise.n1(e*.08)*2.5);return Wp.copy(n.rock),r>.55?Wp.lerp(n.rockLight,.55+t*.25):r<-.6&&Wp.lerp(n.rockDark,.45+t*.2),Wp}},Xp=(e,t,n)=>{if(n<=t[0])return e[0];for(let r=0;r<t.length-1;r++)if(n<=t[r+1]){let i=(n-t[r])/(t[r+1]-t[r]);return e[r]+(e[r+1]-e[r])*i}return e[e.length-1]},Zp=(e,t,n)=>{let r=Array(Cp).fill(0),i=Array(Cp).fill(0),a=Array(Cp).fill(0),o=Array(Cp).fill(0),s=Array.from({length:Cp},()=>new R),c=Array.from({length:Cp},()=>new R),l=new V,u=(e,r,i,a)=>{n.profile(e,r,i),t.frame(e,Ip);for(let e=0;e<Cp;e++)a[e].set(Ip.px+Ip.rx*i[e]+Ip.ux*r[e],Ip.py+Ip.ry*i[e]+Ip.uy*r[e],Ip.pz+Ip.rz*i[e]+Ip.uz*r[e])},d=n.sa;u(d,r,i,s);let f=0;for(;d<n.sb-1e-4&&f++<4e3;){let f=t.pitchAt(d),p=t.pitchAt(Math.min(n.sb,d+1)),m=Math.abs(p-f),h=n.step??(m>.05?.45:1.35),g=Math.min(n.sb,d+h);u(g,a,o,c);let _=t.pitchAt(d);for(let a=0;a<Cp-1;a++){if(n.skip?.(d,a))continue;let o=s[a],u=s[a+1],f=c[a+1],p=c[a];Rp.subVectors(f,o),zp.subVectors(u,p),Bp.crossVectors(zp,Rp).normalize(),t.frame(d,X);let m=i[a+1]-i[a],h=-(r[a+1]-r[a]),g=m,v=X.rx*h+X.ux*g,y=X.ry*h+X.uy*g,b=X.rz*h+X.uz*g,x=Bp.x*v+Bp.y*y+Bp.z*b<0,S=x?-Bp.y:Bp.y,C=(i[a]+i[a+1])*.5;n.paint(a,S,(o.y+f.y)*.5,C,d,_,l,(r[a]+r[a+1])*.5),x?e.quad(o,p,f,u,l):e.quad(o,u,f,p,l)}for(let e=0;e<Cp;e++)s[e].copy(c[e]),r[e]=a[e],i[e]=o[e];d=g}},Qp=(e,t,n,r,i,a,o)=>{let s=Dp.length,c=Array.from({length:s},()=>new R),l=Array.from({length:s},()=>new R),u=new V,d=(e,n)=>{t.frame(e,Ip);for(let t=0;t<s;t++){let[r,a]=Dp[t],o=Op[t],s=i.n2(e*.09,t*1.37)*o,c=i.n2(e*.09+31,t*1.37)*o,l=r+s*Math.sign(r||1),u=a+c;n[t].set(Ip.px+Ip.rx*l+Ip.ux*u,Ip.py+Ip.ry*l+Ip.uy*u,Ip.pz+Ip.rz*l+Ip.uz*u)}},f=n;for(d(f,c);f<r-1e-4;){let n=Math.min(r,f+1.3);d(n,l),t.frame((f+n)/2,X);let i=X.px+X.ux*2.8,p=X.py+X.uy*2.8,m=X.pz+X.uz*2.8;for(let t=0;t<s;t++){let n=(t+1)%s,r=t<4;if(r&&o(f,t))continue;let d=c[t],h=c[n],g=l[n],_=l[t];Rp.subVectors(g,d),zp.subVectors(h,_),Bp.crossVectors(zp,Rp).normalize();let v=(d.x+g.x)/2-i,y=(d.y+g.y)/2-p,b=(d.z+g.z)/2-m,x=Bp.x*v+Bp.y*y+Bp.z*b>0;a.surface(r?`caveFloor`:`cave`,0,d.y,Dp[t][0],f,u),x?e.quad(d,_,g,h,u):e.quad(d,h,g,_,u)}for(let e=0;e<s;e++)c[e].copy(l[e]);f=n}},$p=(e,t,n,r,i,a)=>{t.frame(n,X);let o=Dp.length,s=new V,c=[0,.32,.6,1],l=c.map(()=>[]);for(let e=0;e<o;e++){let[t,a]=Dp[e],o=Math.atan2(a-2.6,t),s=32+i.n2(e*.7,n*.01)*10+(a>3?10:0);for(let u=0;u<c.length;u++){let d=c[u],f,p;if(u===0)f=t*1.04,p=a<.01?-.05:a*1.03;else{let t=6+(s-6)*d;f=Math.cos(o)*t*1.15+i.n2(e*1.9,u*3.1+n)*2.2*d,p=2.6+Math.sin(o)*t*(a<.01?1.25:.95)+i.n2(e*2.3+7,u*1.7)*2.6*d}let m=u===0?0:-r*(.8+Math.abs(i.n2(e*1.3+u*5,4.1+u))*(2+d*7));l[u].push(new R(X.px+X.rx*f+X.ux*p+X.fx*m,X.py+X.ry*f+X.uy*p+X.fy*m,X.pz+X.rz*f+X.uz*p+X.fz*m))}}let u=new R(X.fx,X.fy,X.fz).multiplyScalar(-r),d=(t,r,i,o,c)=>{Rp.subVectors(r,t),zp.subVectors(i,t),Bp.crossVectors(Rp,zp),a.surface(`wall`,.3,(t.y+i.y)/2,10+c*7,n+c,s),c===0?s.multiplyScalar(.55):c===1&&s.multiplyScalar(.8),Bp.dot(u)>=0?e.quad(t,r,i,o,s):e.quad(t,o,i,r,s)};for(let e=0;e<c.length-1;e++)for(let t=0;t<o;t++){let n=(t+1)%o;d(l[e][t],l[e][n],l[e+1][n],l[e+1][t],e)}if(r===1){let r=af(),i=new B;for(let o=0;o<7;o++){let s=(o%2?1:-1)*(6.5+o*2.7%9),c=-1+o*1.3%4;qp(t,n-1.5-o%3*1.4,s,c,o*1.7,1.4+o%3*.9,i),e.stamp(r[`rock${o%4}`],i,a.paint)}}},em=e=>O(.42,1.25,e),tm=(e,t,n)=>{let r=new $d,i=new $d,a=[],o=new Yp(e.zone,e.seed),s=new ct(e.seed^40503),c=o.noise,l=o.pal,u=af(),d=dt(e.zone).flora,f={piece:e,group:new Ii,glows:a,dispose:()=>void 0},{s0:p,s1:m}=e,h=(e,t,n=!1)=>(n?i:r).stamp(e,t,o.paint),g=e=>e===`ledgeL`||e===`ledgeR`||e===`forest`?wp[e]:wp.crest,_=(e,t,n,r)=>{for(let i=0;i<Cp;i++)r[i]=e[i]+(t[i]-e[i])*n},v=(e,t,n,r=1)=>c.n2(e*.045,t*.9)*n[t]*r+c.n2(e*.16,t*2.3+9)*n[t]*.35*r,y=(e,t,n,r,i,a,s,c=0)=>em(a)>.5?(o.surface(`wall`,t,n,r,i,s),e>=5&&e<=8&&s.lerp(l.rockLight,.14),b(s,c)):e>=5&&e<=8?o.surface(`trail`,t,n,r,i,s).multiplyScalar(e===6||e===7?1.03:.97):e===4||e===9?o.surface(`ground`,t,n,r,i,s):b(o.surface(`slope`,t,n,r,i,s),c),b=(e,t)=>{let n=O(1.5,30,-t);return e.multiplyScalar(1-n*.32),e.lerp(l.fog,n*.3)},x=(e,t,n)=>Math.min(O(t,t+12,e),1-O(n-12,n,e));switch(e.kind){case`camp`:case`summit`:{let n=wp.plateau;Zp(r,t,{sa:p,sb:m,profile:(t,r,i)=>{let a=e.kind===`camp`?1-O(m-12,m,t):x(t,p,m);_(wp.crest,n,a,r);for(let e=0;e<Cp;e++)i[e]=Sp[e],r[e]+=v(t,e,Tp)},paint:(t,n,r,i,a,o,s)=>(y(t,n,r,i,a,o,s),e.kind===`summit`&&n>.6&&s.lerp(l.snow,.75),s)});let c=e=>Xp(wp.plateau,Sp,e)-.06;if(e.kind===`camp`){let n=e.marks.start;h(u.tent,qp(t,n-3.5,-5.4,c(-5.4),.5,1.1,Hp)),h(u.pack,qp(t,n-1.2,-3.9,c(-3.9),-.3,1,Hp)),h(u.crate,qp(t,n+2.5,-5,c(-5),.3,1,Hp)),h(u.crate,qp(t,n+3.3,-5.2,c(-5.2)+.6,.9,.8,Hp));for(let e=0;e<4;e++)h(u.log,qp(t,n+.6,4.4,c(4.4),e/4*Math.PI,.6,Hp));h(u.cairn,qp(t,n-6,5.2,c(5.2),0,1.2,Hp)),h(u.flagPole,qp(t,n+9,4.6,c(4.6),0,.75,Hp)),f.fire={s:n+.6,x:4.4,h:c(4.4)+.2},f.flag={s:n+9,x:4.6,h:c(4.6)+4.4},a.push({s:n+.6,x:4.4,h:c(4.4)+.7,size:4.5,color:new V(16751165),flicker:1})}else{let n=e.marks.flag;h(u.flagPole,qp(t,n,4.4,c(4.4),0,1.1,Hp)),h(u.cairn,qp(t,n+2,-4.8,c(-4.8),.4,1.4,Hp)),h(u.cairn,qp(t,n-7,5.8,c(5.8),1.2,.9,Hp)),f.flag={s:n,x:4.4,h:c(4.4)+6.1},a.push({s:n,x:4.4,h:c(4.4)+6.6,size:3,color:l.accent.clone(),flicker:0}),om(r,t,n,4.4,c(4.4)+5.9,n-7,5.8,c(5.8)+1.1,s),om(r,t,n,4.4,c(4.4)+5.9,n+9,7.5,c(7.5)+.8,s),om(r,t,n+2,-4.8,c(-4.8)+1.3,n+14,-7.5,c(-7.5)+.6,s)}nm(e,t,r,i,a,o,s,d,p+2,m-2,.5,()=>wp.plateau,!0);break}case`ridge`:{let n=g(e.variant);Zp(r,t,{sa:p,sb:m,profile:(e,t,r)=>{_(wp.crest,n,x(e,p,m),t);for(let n=0;n<Cp;n++)r[n]=Sp[n],t[n]+=v(e,n,Tp)},paint:y}),nm(e,t,r,i,a,o,s,d,p+3,m-3,e.variant===`forest`?1.6:1,()=>n,!1),rm(t,r,o,s,p+2,m-2,n),im(e,t,r,o,s,p,m,n);break}case`wall`:{let n=e.variant===`shaft`?wp.shaft:e.variant===`buttress`?wp.buttress:wp.wall,f=e.marks.climbStart,g=e.marks.climbEnd;Zp(r,t,{sa:p,sb:m,profile:(e,r,i)=>{let a=em(t.pitchAt(e));_(wp.crest,n,a,r);for(let t=0;t<Cp;t++)i[t]=Sp[t],r[t]+=v(e,t,Tp)*(1-a)+v(e,t,Ep)*a;if(a>.5){let t=Math.max(0,Math.sin(e*.42+c.n1(e*.05)*3));for(let e of[1,2,3,11,12,13])r[e]+=t*t*1.6}},paint:y});let b=e.obstacles.filter(e=>e.kind===`crumble`);for(let e=f-1.5;e<g+.5;e+=1.15)for(let n of[-1,0,1]){if(b.find(t=>Math.abs(e-t.s)<t.depth/2+.3&&tt(t.lanes).includes(n)))continue;let r=Math.floor(e/1.15)+n&1?.38:-.38;Jp(t,e,Je(n)+r+s.range(-.08,.08),.02,1+s.range(-.2,.25),1,1,Hp),h(u.hold,Hp)}for(let e=0;e<(g-f)*.45;e++){let e=s.range(f,g),r=s.sign()*s.range(4.2,13),i=Xp(n,Sp,r)+.05,o=s.next();(d===`crystal`||d===`cosmic`||d===`glow`)&&o<.25?(Jp(t,e,r,i,.7,.7,.7,Hp,Up.setFromAxisAngle(Rp.set(1,0,0),-.6)),h(u.crystal,Hp,!0),Kp(t,e,r,i+.6,Lp),a.push({s:e,x:r,h:i+.6,size:3.2,color:l.accent.clone(),flicker:.3})):o<.5?(Jp(t,e,r,i,1.4,1.4,1.4,Hp,Up.setFromAxisAngle(Rp.set(1,0,0),-1.2)),h(u.tuft,Hp)):o<.62&&d!==`cosmic`?(qp(t,e,r,i+.3,s.range(0,6),s.range(.35,.6),Hp),h(d===`frost`||d===`glow`?u.pineSnow:d===`juniper`?u.juniper:u.pine,Hp)):(Jp(t,e,r,i,s.range(.4,1.1),s.range(.4,.8),s.range(.4,1),Hp,Up.setFromAxisAngle(Rp.set(1,0,0),-1.4)),h(u[`rock${s.int(0,3)}`],Hp))}e.variant!==`shaft`&&nm(e,t,r,i,a,o,s,d,g+3,m-1,.6,()=>wp.crest,!1);break}case`cave`:{let n=e.marks.mouth,f=e.marks.exit;Zp(r,t,{sa:p,sb:n+.6,profile:(e,t,n)=>{for(let r=0;r<Cp;r++)n[r]=Sp[r],t[r]=wp.crest[r]+v(e,r,Tp)},paint:y});let g=e.obstacles.filter(e=>e.kind===`railgap`),_=(e,t)=>g.some(n=>Math.abs(e-n.s)<n.depth/2&&tt(n.lanes).includes(t));Qp(r,t,n,f,c,o,(e,t)=>{let n=t===0?-1:+(t===3);return t>0&&t<3?_(e,0)&&_(e+1.2,0):_(e,n)&&_(e+1.2,n)}),$p(r,t,n,1,c,o),$p(r,t,f,-1,c,o),Jp(t,n+.4,0,0,1,1,1,Hp),h(u.mineGate,Hp);for(let e of[-4.6,4.6])a.push({s:n+.2,x:e,h:4.7,size:4,color:new V(16757594),flicker:.6});e.variant===`shaft`?Zp(r,t,{sa:f-.6,sb:m,profile:(e,t,n)=>{for(let r=0;r<Cp;r++)n[r]=Sp[r],t[r]=wp.crest[r]*.6+v(e,r,Tp)},paint:y}):Zp(r,t,{sa:f-.6,sb:m,profile:(e,t,n)=>{for(let r=0;r<Cp;r++)n[r]=Sp[r],t[r]=wp.crest[r]+v(e,r,Tp)},paint:y}),am(r,t,e.marks.cartStart-2,e.marks.cartEnd+3,_,o);for(let e=n+10;e<f-6;e+=s.range(11,16)){Jp(t,e,0,0,1,1,1,Hp),h(u.frame,Hp);let n=s.chance(.5)?-3.9:3.9;Jp(t,e,n,4.15,1,1,1,Hp),h(u.lantern,Hp,!0),a.push({s:e,x:n,h:4.1,size:2.9,color:new V(16756810),flicker:.8})}for(let e=0;e<(f-n)*.22;e++){let e=s.range(n+6,f-4),r=s.sign(),i=s.int(5,7),[o,c]=Dp[i],d=o*r*.92,p=c*.96,m=r*(.6+(i-5)*.45);s.chance(.55)?(Jp(t,e,d,p,.55,.65,.55,Hp,Up.setFromAxisAngle(Rp.set(0,0,1),m)),h(u.crystal,Hp,!0),a.push({s:e,x:d*.92,h:p+.3,size:2.3,color:l.accent.clone(),flicker:.2})):(Jp(t,e,r*s.range(4.1,4.6),0,s.range(.6,1.1),s.range(.6,1.2),.8,Hp),h(u.stalagmite,Hp))}for(let e=0;e<(f-n)*.12;e++)Jp(t,s.range(n+8,f-6),s.range(-3,3),s.range(5.4,5.8),s.range(.6,1),s.range(.5,1.1),.7,Hp),h(u.stalactite,Hp);e.variant!==`shaft`&&nm(e,t,r,i,a,o,s,d,f+2,m-1,.7,()=>wp.crest,!1);break}case`bridge`:sm(e,t,r,o,s,n);break;case`zip`:pm(e,t,r,o,s)}let S=new lo(r.build(),Pp);S.matrixAutoUpdate=!1,f.group.add(S);let C=null;return i.triCount>0&&(C=new lo(i.build(),Fp),C.matrixAutoUpdate=!1,f.group.add(C)),f.dispose=()=>{S.geometry.dispose(),C?.geometry.dispose()},f};function nm(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=af(),m=l-c;if(m<=0)return;let h=Math.floor(m*.8*u),g=new B;for(let e=0;e<h;e++){let e=o.range(c,l),u=o.sign()*(5.2+o.next()**1.4*19),m=Xp(d(e),Sp,u)-.15,h=o.next(),_=Math.abs(u)<7.5,v=null,y=1,b=!1;if(f)v=h<.5?p[`rock${o.int(0,3)}`]:h<.75?p.cairn:p.tuft,y=h<.5?o.range(.3,1.2):o.range(.6,1.1);else switch(s){case`pine`:v=h<.5?p.pine:h<.68?p.shrub:h<.86?p[`rock${o.int(0,3)}`]:p.tuft,y=h<.5?o.range(.7,1.6):o.range(.4,1.3);break;case`juniper`:v=h<.28?p.juniper:h<.48?p.spire:h<.78?p[`rock${o.int(0,3)}`]:p.shrub,y=h<.28?o.range(.8,1.4):h<.48?o.range(.5,1.4):o.range(.4,1.5);break;case`crystal`:h<.22?(v=p.crystal,b=!0,y=o.range(.6,1.5)):v=h<.45?p.pine:h<.6?p.mushroom:h<.85?p[`rock${o.int(0,3)}`]:p.shrub,b||(y=o.range(.5,1.3));break;case`frost`:v=h<.45?p.pineSnow:h<.62?p.iceSpike:p[`rock${o.int(0,3)}`],y=o.range(.6,1.5);break;case`glow`:h<.2?(v=p.crystal,b=!0):v=h<.55?p.pineSnow:h<.7?p.iceSpike:p[`rock${o.int(0,3)}`],y=o.range(.6,1.4);break;case`cloud`:v=h<.3?p.cairn:h<.75?p[`rock${o.int(0,3)}`]:p.tuft,y=o.range(.5,1.3);break;case`cosmic`:h<.32?(v=p.crystal,b=!0,y=o.range(.8,2.2)):v=h<.55?p.spire:p[`rock${o.int(0,3)}`],b||(y=o.range(.4,1.2))}v&&(_&&(v===p.pine||v===p.pineSnow||v===p.spire||v===p.juniper)&&(y*=.7),qp(t,e,u,m,o.range(0,Math.PI*2),y,g),(b?r:n).stamp(v,g,a.paint),b&&o.chance(.6)&&i.push({s:e,x:u,h:m+y*1,size:2.6+y*2,color:a.pal.accent.clone(),flicker:.25}))}}function rm(e,t,n,r,i,a,o){let s=af(),c=new B;for(let l=i;l<a;l+=r.range(.9,2.2)){let i=r.sign()*r.range(3.75,6.2),a=Xp(o,Sp,i)-.05;r.next()<.5?(qp(e,l,i,a,r.range(0,6.28),r.range(.6,1.4),c),t.stamp(s.tuft,c,n.paint)):(qp(e,l,i,a,r.range(0,6.28),r.range(.12,.32),c,r.range(.08,.26)),t.stamp(s[`rock${r.int(0,3)}`],c,n.paint))}}function im(e,t,n,r,i,a,o,s){let c=af(),l=new B,u=i.int(2,5);for(let d=0;d<u;d++){let u=i.range(a+6,o-6),d=i.sign()*i.range(13,26),f=Xp(s,Sp,d)-1.5,p=i.range(3.5,8);qp(t,u,d,f,i.range(0,6.28),p,l,p*i.range(.7,1.6)),n.stamp(i.chance(.3)&&e.zone===1?c.spire:c[`rock${i.int(0,3)}`],l,r.paint)}}function am(e,t,n,r,i,a){let o=af(),s=new B,c=new V(12042448).lerp(a.pal.rockLight,.2),l=c.clone().multiplyScalar(.55),u=[new R,new R,new R,new R],d=[new R,new R,new R,new R];for(let f of[-1,0,1]){for(let a of[-.5,.5]){let o=Je(f)+a,s=n,p=(e,n)=>{Kp(t,e,o-.05,0,n[0]),Kp(t,e,o-.05,.15,n[1]),Kp(t,e,o+.05,.15,n[2]),Kp(t,e,o+.05,0,n[3])};for(p(s,u);s<r;){let t=Math.min(r,s+1.2);p(t,d),!i(s,f)&&!i(t,f)&&(e.quad(u[1],d[1],d[2],u[2],c),e.quad(u[0],d[0],d[1],u[1],l),e.quad(u[2],d[2],d[3],u[3],l));for(let e=0;e<4;e++)u[e].copy(d[e]);s=t}}for(let c=n;c<r;c+=.85)i(c,f)||(Jp(t,c,Je(f),0,1,1,1,s),e.stamp(o.sleeper,s,a.paint))}}function om(e,t,n,r,i,a,o,s,c){let l=Kp(t,n,r,i,new R),u=Kp(t,a,o,s,new R),d=new V(15327952),f=new R;for(let t=0;t<=14;t++){let n=t/14,r=l.clone().lerp(u,n);if(r.y-=Math.sin(n*Math.PI)*.9,t>0){let n=new R(0,-.03,0);e.quad(f,r,r.clone().add(n),f.clone().add(n),d);let i=f.clone().lerp(r,.5),a=Np[(t+Math.floor(c.next()*2))%5],o=f.clone().lerp(r,.15),s=f.clone().lerp(r,.85),l=i.clone().add(new R(0,-.55,0));e.tri(o,s,l,a),e.tri(o,l,s,a)}f.copy(r)}}function sm(e,t,n,r,i,a){let o=af(),s=new B,{s0:c,s1:l}=e,u=e.marks.deckStart,d=e.marks.deckEnd;for(let[e,i,a]of[[c,u+.4,u+.4],[d-.4,l,d-.4]])Zp(n,t,{sa:e,sb:i,profile:(e,t,n)=>{for(let i=0;i<Cp;i++)n[i]=Sp[i],t[i]=wp.crest[i]+r.noise.n2(e*.05,i)*Tp[i]},paint:(e,t,n,i,a,o,s)=>r.surface(e>=4&&e<=9?`edge`:`slope`,t,n,i,a,s)}),fm(n,t,a,r,a===u+.4?1:-1);let f=e.obstacles.filter(e=>e.kind===`plankgap`),p=e=>-Math.sin((e-u)/(d-u)*Math.PI)*0;for(let e=u;e<d;e+=.44)for(let r of[-1,0,1]){if(f.find(t=>Math.abs(e-t.s)<t.depth/2&&tt(t.lanes).includes(r)))continue;let a=new Br().setFromAxisAngle(new R(0,1,0),i.range(-.04,.04));Jp(t,e,Je(r)+i.range(-.05,.05),p(e),2.12,1,1+i.range(-.1,.1),s,a);let c=(i.chance(.2)?Ap:kp).clone().multiplyScalar(.88+i.next()*.24);n.stamp(o.plank,s,(e,t,n,r)=>r.copy(c).multiplyScalar(t))}for(let e of[-3.3,3.3])dm(n,t,u,d,e,-.2,.24,.3,Ap);let m=new V(14272417);for(let e of[-3.75,3.75]){lm(n,t,u,d,e,1.15,.55,m);for(let r=u+1.4;r<d-1;r+=1.6){let i=Kp(t,r,e,1.15-cm(r,u,d,.55),new R),a=Kp(t,r,e,0,new R);Kp(t,r+.05,e,0,new R),um(n,i,a,.035,m)}for(let i of[u-.6,d+.6])qp(t,i,e,-.2,0,1,s,1.6),n.stamp(o.post,s,r.paint);om(n,t,u+1,e,1.35,(u+d)/2,e,1.5,i),om(n,t,(u+d)/2,e,1.5,d-1,e,1.35,i)}for(let i of e.obstacles.filter(e=>e.kind===`swinglog`)){for(let e of[-3.9,3.9])qp(t,i.s,e,-.2,0,1,s,4.8),n.stamp(o.post,s,r.paint);dm(n,t,i.s-.2,i.s+.2,0,4.6,8.2,.3,Ap,!0)}}var cm=(e,t,n,r)=>Math.sin(T((e-t)/(n-t),0,1)*Math.PI)*r;function lm(e,t,n,r,i,a,o,s){let c=Kp(t,n,i,a,new R);for(let l=n+1;l<=r+.01;l+=1){let u=Kp(t,Math.min(l,r),i,a-cm(l,n,r,o),new R);um(e,c,u,.05,s),c=u}}function um(e,t,n,r,i){let a=new R().subVectors(n,t).normalize(),o=new R().crossVectors(a,Math.abs(a.y)>.9?new R(1,0,0):new R(0,1,0)).normalize().multiplyScalar(r),s=new R().crossVectors(o,a).normalize().multiplyScalar(r),c=[o.clone().add(s),o.clone().sub(s),o.clone().negate().sub(s),o.clone().negate().add(s)],l=i.clone().multiplyScalar(.7);for(let r=0;r<4;r++){let a=(r+1)%4;e.quad(t.clone().add(c[r]),n.clone().add(c[r]),n.clone().add(c[a]),t.clone().add(c[a]),r%2?l:i)}}function dm(e,t,n,r,i,a,o,s,c,l=!1){let u=new B,d=af();if(l)Jp(t,(n+r)/2,i,a,o,1,1,u),e.stamp(d.beam,u,(e,t,n,r)=>r.copy(c).multiplyScalar(t));else for(let l=n;l<r;l+=2){let n=Math.min(2,r-l);Jp(t,l+n/2,i,a,1,1,1,u,new Br().setFromAxisAngle(new R(0,1,0),Math.PI/2)),u.scale(new R(n,s/.32,o/.32)),e.stamp(d.beam,u,(e,t,n,r)=>r.copy(c).multiplyScalar(t))}}function fm(e,t,n,r,i){let a=[],o=[];t.frame(n,X);for(let e=0;e<Cp;e++){let t=wp.crest[e]+r.noise.n2(n*.05,e)*Tp[e],s=Sp[e];a.push(new R(X.px+X.rx*s+X.ux*t,X.py+X.ry*s+X.uy*t,X.pz+X.rz*s+X.uz*t));let c=26+Math.abs(r.noise.n2(e*.8,n))*18,l=-i*(3+Math.abs(r.noise.n2(e,n*.3))*5);o.push(new R(X.px+X.rx*s*.8+X.fx*l,X.py+t-c+X.fy*l,X.pz+X.rz*s*.8+X.fz*l))}let s=new R(X.fx,X.fy,X.fz).multiplyScalar(i),c=new V;for(let t=0;t<Cp-1;t++){let i=a[t],l=a[t+1],u=o[t+1],d=o[t];Rp.subVectors(l,i),zp.subVectors(d,i),Bp.crossVectors(Rp,zp),r.surface(`wall`,.1,(i.y+d.y)/2,Sp[t],n,c),Bp.dot(s)>=0?e.quad(i,l,u,d,c):e.quad(i,d,u,l,c)}}function pm(e,t,n,r,i){let a=af(),o=new B,{s0:s,s1:c}=e,l=e.marks.zipStart,u=e.marks.zipEnd;for(let[e,i,a]of[[s,l+1.5,l+1.5],[u-2,c,u-2]])Zp(n,t,{sa:e,sb:i,profile:(e,t,n)=>{for(let i=0;i<Cp;i++)n[i]=Sp[i],t[i]=wp.crest[i]+r.noise.n2(e*.05,i)*Tp[i]},paint:(e,t,n,i,a,o,s)=>r.surface(e>=4&&e<=9?`ground`:`slope`,t,n,i,a,s)}),fm(n,t,a,r,a===l+1.5?1:-1);Jp(t,l-.5,0,-.1,1,1,1,o),n.stamp(a.tower,o,r.paint),Jp(t,u+.5,0,-.1,1,1,1,o),n.stamp(a.tower,o,r.paint);let d=new V(4870246);for(let e of[-1,0,1]){let r=Kp(t,l-.5,Je(e),xp,new R);for(let i=l+1.5;i<=u+.51;i+=2){let a=Kp(t,Math.min(i,u+.5),Je(e),xp,new R);um(n,r,a,.028,d),r=a}}}var mm=rt(),hm=new R,gm=new R,_m=new R,vm=new R,ym=new B,bm=new Br,Z=(e,t,n,r,i=.1,a=1)=>{let o=t.index?t.toNonIndexed():t,s=o.getAttribute(`position`),c=typeof r==`number`?new V().setHex(r):r,l=new V,u=a*7919;for(let t=0;t<s.count;t+=3)gm.fromBufferAttribute(s,t).applyMatrix4(n),_m.fromBufferAttribute(s,t+1).applyMatrix4(n),vm.fromBufferAttribute(s,t+2).applyMatrix4(n),u=u*16807%2147483647,l.copy(c).multiplyScalar(1+(u/2147483647-.5)*2*i),e.tri(gm,_m,vm,l);o!==t&&o.dispose(),t.dispose()},xm=new V(724246),Sm=new V(1120819),Cm=e=>{let t=tt(e),n=Je(t[0])-1.05,r=Je(t[t.length-1])+1.05;return{x0:n,x1:r,w:r-n,cx:(n+r)/2}},wm=(e,t,n,r)=>{let i=new $d,a=vp(n),o=a.rock.clone().lerp(a.rockDark,.25),s=a.rockLight,c=a.rockDark,l=Cm(t),u=l.w;switch(e){case`boulder`:case`rockfall`:if(Z(i,tf(new ts(1,1),.38,r),K(0,.82,0,0,r,0,.98,.9,.92),o,.14,r),Z(i,tf(new ts(.62,0),.2,r+3),K(.35,1.45,-.1,0,r,0,1,.7,1),s,.1,r+1),e===`boulder`){for(let e=0;e<3;e++)Z(i,tf(new ts(.22,0),.08,r+e),K(Math.cos(e*2.2)*1,.12,Math.sin(e*2.2)*.9),c,.1,e);a.snowCover>.3&&Z(i,tf(new ts(.75,0),.15,r+9),K(0,1.55,0,0,0,0,1,.35,.9),a.snow,.04)}break;case`log`:{let e=u-.3;Z(i,new Qo(.34,.34,e,8),K(0,.36,0,0,0,Math.PI/2),kp,.08,r);for(let t of[-1,1])Z(i,new Qo(.28,.28,.03,8),K(t*e/2,.36,0,0,0,Math.PI/2),new V(14725242),.04);for(let t=0;t<Math.round(e/1.6);t++)Z(i,new Qo(.06,.09,.5,4),K(-e/2+.8+t*1.6,.68,.05,.3,0,.5),Ap,.1,t);a.snowCover>.3&&Z(i,new H(e*.9,.1,.32),K(0,.7,0),a.snow,.04);break}case`arch`:if(t===7){for(let e of[-1,1])Z(i,tf(new Qo(.75,1.05,2.4,6,2),.18,r+e),K(e*4.05,1.1,0),o,.12,r);Z(i,tf(new H(9.6,.95,1.5,6,1,1),.22,r+5),K(0,1.72,0),s.clone().lerp(o,.4),.12,r),a.snowCover>.3&&Z(i,tf(new H(9.2,.18,1.3,5,1,1),.08,r),K(0,2.25,0),a.snow,.04)}else{for(let e of[-1,1])Z(i,new Qo(.07,.09,1.9,5),K(e*u/2-e*.08,.95,0),Ap,.05);let e=Math.max(3,Math.round(u/.5));for(let t=0;t<e;t++)Z(i,new H(u/e,.3,.22),K(-u/2+(t+.5)*(u/e),1.3,0),t%2?Mp:new V(16052198),.03,t)}break;case`crevasse`:case`railgap`:{let n=e===`crevasse`?3:3.4,o=u-.1;Z(i,new H(o,.04,n),K(0,.025,0),xm,0);for(let e of[-1,1])Z(i,new H(o,3.5,.08),K(0,-1.72,e*n/2),Sm,.1,e+3);let s=e===`crevasse`?a.snowCover>.4?a.snow:a.groundDark:c;for(let e of[-1,1])for(let t=0;t<Math.round(o/.6);t++)Z(i,tf(new ts(.26,0),.09,r+t*3+e),K(-o/2+.3+t*.6,.06,e*n/2+e*.05,0,t,0,1.2,.4,.8),s,.12,t);if(e===`railgap`)for(let e of[-1,0,1].filter(e=>t&1<<e+1))for(let t of[-.5,.5]){let r=Je(e)-l.cx+t;Z(i,new H(.1,.15,.8),K(-r,.25,-n/2+.15,-.55,0,0),jp,.1),Z(i,new H(.1,.15,.8),K(-r,.25,n/2-.15,.55,0,0),jp,.1)}break}case`overhang`:Z(i,tf(new ts(1,1),.3,r),K(0,.85,0,0,r,0,1.05,.95,1.15),o,.12,r),Z(i,tf(new H(1.7,.45,1.6,2,1,2),.18,r+1),K(0,1.6,.2),s,.12,r+2),a.snowCover>.3&&Z(i,tf(new H(1.5,.15,1.3,2,1,2),.06,r),K(0,1.85,.2),a.snow,.03);break;case`crumble`:{let e=3.2,t=u-.2,n=new V(2759196),a=new V(11818810).lerp(o,.35);Z(i,new H(t,.05,e),K(0,.03,0),n,.08);let s=r,c=()=>(s=s*16807%2147483647)/2147483647;for(let n=0;n<Math.round(t*e*1.6);n++){let r=(c()-.5)*t*.92,s=(c()-.5)*e*.9,l=.18+c()*.22;Z(i,new H(l*1.6,l,l*1.3),K(r,l*.4,s,c()*.6,c()*3,c()*.6),c()<.5?a:o.clone().multiplyScalar(.75),.15,n)}for(let n=0;n<5;n++)Z(i,new H(.06,.06,e*(.4+c()*.4)),K((c()-.5)*t*.8,.06,(c()-.5)*.6,0,(c()-.5)*.9,0),new V(16738859),0,n);break}case`eagle`:{let e=new V(5913126),t=new V(16052198);Z(i,new ts(.35,0),K(0,0,0,0,0,0,1.6,.8,.8),e,.06),Z(i,new ts(.2,0),K(.6,.08,0),t,.05),Z(i,new $o(.08,.22,4),K(.8,.04,0,0,0,-Math.PI/2),Mp,.05),Z(i,new $o(.25,.5,4),K(-.65,0,0,0,0,Math.PI/2,1,1,.3),e.clone().multiplyScalar(.8),.05);break}case`rubble`:for(let e=0;e<6;e++)Z(i,tf(new ts(.45+e%3*.12,0),.15,r+e),K(Math.cos(e*2.4)*.55,.3+(e>3?.45:0),Math.sin(e*2.4)*.5),e%2?o:c,.12,e);Z(i,new H(2,.12,.3),K(0,.9,.2,0,.5,.4),kp,.1),Z(i,new H(1.8,.12,.3),K(.1,.75,-.3,0,-.6,-.3),Ap,.1);break;case`barrier`:{for(let e of[-1,1])Z(i,new H(.22,.75,.22),K(e*u/2-e*.25,.37,0),Ap,.05);let e=Math.max(3,Math.round(u/.55));for(let t=0;t<e;t++)Z(i,new H(u/e,.26,.24),K(-u/2+(t+.5)*(u/e),.55,0),t%2?Mp:xm,.03,t);Z(i,new H(u-.2,.12,.2),K(0,.25,0),kp,.08);break}case`beam`:{let e=Math.max(3,Math.round(u/.55));for(let t=0;t<e;t++)Z(i,new H(u/e,.34,.34),K(-u/2+(t+.5)*(u/e),1.3,0),t%2?Mp:Ap,.04,t);for(let e of[-1,1])Z(i,new H(.05,4.4,.05),K(e*(u-.4)/2,3.6,0),jp,.05);break}case`oncoming`:{let e=new V(10242602);Z(i,new H(1.5,.66,1.9),K(0,.7,0),e,.08,r),Z(i,new H(1.62,.08,2),K(0,1.05,0),jp,.06),Z(i,tf(new ts(.55,0),.15,r),K(0,1.18,0,0,0,0,1.2,.6,1.4),c,.12);for(let e of[-.5,.5])for(let t of[-.6,.6])Z(i,new Qo(.2,.2,.09,8),K(e,.2,t,0,0,Math.PI/2),jp.clone().multiplyScalar(.6),.05);Z(i,new H(.24,.3,.2),K(.5,1.3,-.9),new V(16773296),0);break}case`swinglog`:{let e=u-.4;Z(i,new Qo(.3,.3,e,8),K(0,-3.25,0,0,0,Math.PI/2),kp,.08);for(let t of[-1,1])Z(i,new H(.04,3.2,.04),K(t*e/2.6,-1.6,0),new V(14272417),.05);for(let t=0;t<3;t++)Z(i,new H(e*.98,.07,.62),K(0,-3.25,0,t*Math.PI/3,0,0),Ap,.05,t);break}case`plankgap`:for(let e of[-1,1])Z(i,new H(u-.3,.05,.08),K(0,-.05,e*1.38),Ap,.05);break;case`bird`:{let e=new V(1974320);Z(i,new ts(.22,0),K(0,xp+.24,0,0,0,0,.9,.9,1.4),e,.08),Z(i,new ts(.13,0),K(0,xp+.42,.22),e,.08),Z(i,new $o(.05,.16,4),K(0,xp+.42,.38,Math.PI/2,0,0),Mp,.04),Z(i,new $o(.12,.35,4),K(0,xp+.2,-.32,-Math.PI/2-.4,0,0,1,1,.3),e,.05);break}}return i.build()},Tm=new gs({vertexColors:!0}),Em=class{group=new Ii;live=new Map;geoCache=new Map;wingGeo;constructor(e){e.add(this.group);let t=new $d;Z(t,new H(1.1,.05,.5),K(0,0,.55),new V(4861727),.08),Z(t,new H(.5,.04,.4),K(0,.01,1.1),new V(16052198),.05),this.wingGeo=t.build()}geo(e,t){let n=`${e.kind}:${e.lanes}:${t}:${e.seed%3}`,r=this.geoCache.get(n);return r||(r=wm(e.kind,e.lanes,t,e.seed%3+11),this.geoCache.set(n,r)),r}add(e,t){if(this.live.has(e.id))return;let n=new lo(this.geo(e,t),Tm);n.matrixAutoUpdate=!1;let r={ob:e,mesh:n,cx:Cm(e.lanes).cx,t:0};if(e.kind===`eagle`){r.wings=[new lo(this.wingGeo,Tm),new lo(this.wingGeo,Tm)];for(let e of r.wings)e.matrixAutoUpdate=!0,n.add(e);r.wings[1].scale.z=-1}this.group.add(n),this.live.set(e.id,r)}remove(e){let t=this.live.get(e);t&&(this.group.remove(t.mesh),this.live.delete(e))}smash(e,t){let n=this.live.get(e);n&&(n.smash={v:t.clone().multiplyScalar(9).add(new R(0,7,0)),spin:8,t:0})}get count(){return this.live.size}update(e,t,n,r,i){for(let r of this.live.values()){let a=r.ob;if(r.t+=e,a.state===2&&!r.smash&&a.kind!==`plankgap`){r.mesh.visible=!1;continue}let o=a.s-n;if(o>190||o<-30){r.mesh.visible=!1;continue}r.mesh.visible=!0;let s=a.s,c=r.cx,l=0,u=bm.identity();switch(a.kind){case`rockfall`:l=.15+Math.abs(Math.sin(r.t*5.5))*(a.state>=1?.9:0),u.setFromAxisAngle(hm.set(1,0,0),a.state>=1?-r.t*7:0);break;case`oncoming`:l=Math.abs(Math.sin(r.t*30))*.03,u.setFromAxisAngle(hm.set(0,1,0),Math.PI);break;case`eagle`:if(c=Math.max(-1.4,Math.min(1.4,o/18*1))*9,l=1.55+Math.sin(r.t*3)*.15,u.setFromAxisAngle(hm.set(0,1,0),0),r.wings){let e=Math.sin(r.t*11)*.7;r.wings[0].rotation.x=e,r.wings[1].rotation.x=-e}break;case`swinglog`:{let e=Math.sin(i*2.2+a.seed)*.35;l=4.55,u.setFromAxisAngle(hm.set(1,0,0),e);break}case`bird`:{let e=o<9&&o>-6;l=e?Math.max(0,9-o)*.25:0,e&&(s+=Math.max(0,9-o)*.4);break}}r.smash?(r.smash.t+=e,r.smash.v.y-=22*e,r.mesh.matrix.elements[12]+=r.smash.v.x*e,r.mesh.matrix.elements[13]+=r.smash.v.y*e,r.mesh.matrix.elements[14]+=r.smash.v.z*e,r.mesh.matrixWorldNeedsUpdate=!0,r.smash.t>1.4&&(r.mesh.visible=!1)):(t.frame(s,mm),hm.set(mm.px+mm.rx*c+mm.ux*l,mm.py+mm.ry*c+mm.uy*l,mm.pz+mm.rz*c+mm.uz*l),ym.makeBasis(gm.set(-mm.rx,-mm.ry,-mm.rz),_m.set(mm.ux,mm.uy,mm.uz),vm.set(mm.fx,mm.fy,mm.fz)),ym.multiply(new B().makeRotationFromQuaternion(u)),ym.setPosition(hm),r.mesh.matrix.copy(ym),r.mesh.matrixWorldNeedsUpdate=!0)}}forEach(e){for(let t of this.live.values())e(t.ob,t.mesh)}},Dm=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Om=`
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform vec3 uFog;
uniform vec3 uSun;
uniform vec3 uGlow;
uniform vec3 uSunDir;
uniform float uSunSize;
uniform float uCave;
uniform float uTime;
uniform vec3 uCloud;
uniform float uClouds;
varying vec3 vDir;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
void main() {
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = mix(uHorizon, uMid, smoothstep(-0.02, 0.32, y));
  col = mix(col, uTop, smoothstep(0.2, 0.95, y));
  col = mix(uFog, col, smoothstep(-0.3, 0.03, y));
  float sd = max(dot(d, uSunDir), 0.0);
  col += uGlow * (pow(sd, 5.0) * 0.32 + pow(sd, 42.0) * 0.5);
  float disc = smoothstep(1.0 - uSunSize * 1.35, 1.0 - uSunSize, sd);
  col = mix(col, uSun, disc);
  // drifting cloud banks, lit by the sun from behind
  if (y > 0.02 && uClouds > 0.0) {
    vec2 q = d.xz / (y + 0.1) * 3.4 + vec2(uTime * 0.02, uTime * 0.007);
    float n = vn(q) * 0.55 + vn(q * 2.1 + 3.7) * 0.28 + vn(q * 4.3 - 1.3) * 0.17;
    float c = smoothstep(0.46, 0.74, n) * smoothstep(0.02, 0.16, y) * uClouds;
    vec3 cc = mix(uCloud, uSun, pow(sd, 3.0) * 0.6) + uGlow * pow(sd, 10.0) * 0.4;
    col = mix(col, cc, c * 0.85);
  }
  col = mix(col, uFog, uCave);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
  gl_FragColor.rgb += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
}`,km=`
attribute float aSize;
attribute float aPhase;
uniform float uTime;
uniform float uOpacity;
uniform float uPx;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9999;
  float tw = 0.65 + 0.35 * sin(uTime * (1.3 + aPhase * 2.0) + aPhase * 40.0);
  vA = uOpacity * tw * smoothstep(-0.05, 0.25, normalize(position).y);
  gl_PointSize = aSize * uPx;
}`,Am=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = smoothstep(0.5, 0.0, d);
  a = a * a;
  gl_FragColor = vec4(vec3(1.0, 0.97, 0.92) * a * vA, 1.0);
}`,jm=`
varying vec2 vUv;
uniform float uTime;
void main() {
  vUv = uv;
  vec3 p = position;
  p.x += sin(uv.x * 9.0 + uTime * 0.25) * 30.0;
  p.z += cos(uv.x * 7.0 + uTime * 0.18) * 30.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w * 0.9998;
}`,Mm=`
varying vec2 vUv;
uniform float uTime;
uniform float uOpacity;
uniform vec3 uA;
uniform vec3 uB;
void main() {
  float bands = 0.5 + 0.5 * sin(vUv.x * 46.0 + sin(vUv.x * 13.0 + uTime * 0.6) * 2.2 + uTime * 0.35);
  bands = pow(bands, 3.0);
  float v = vUv.y;
  float fall = smoothstep(0.0, 0.2, v) * (1.0 - smoothstep(0.35, 1.0, v));
  float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
  vec3 col = mix(uA, uB, smoothstep(0.25, 0.85, v));
  float a = (0.35 + 0.65 * bands) * fall * edge * uOpacity;
  gl_FragColor = vec4(col * a, 1.0);
  #include <colorspace_fragment>
}`,Nm=class{group=new Ii;sky;stars;aurora;auroraMesh;sunDir=new R(0,.3,1).normalize();constructor(){this.sky=new ms({vertexShader:Dm,fragmentShader:Om,side:1,depthWrite:!1,uniforms:{uTop:{value:new V},uMid:{value:new V},uHorizon:{value:new V},uFog:{value:new V},uSun:{value:new V},uGlow:{value:new V},uSunDir:{value:this.sunDir},uSunSize:{value:9e-4},uCave:{value:0},uTime:{value:0},uCloud:{value:new V},uClouds:{value:1}}});let e=new lo(new is(2600,32,16),this.sky);e.renderOrder=-10,e.frustumCulled=!1,this.group.add(e);let t=1400,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=7,o=()=>(a=a*16807%2147483647)/2147483647;for(let e=0;e<t;e++){let t=o()*2-1,a=o()*Math.PI*2,s=Math.abs(t)*.95+.02,c=Math.sqrt(1-s*s);n[e*3]=Math.cos(a)*c*2400,n[e*3+1]=s*2400,n[e*3+2]=Math.sin(a)*c*2400;let l=o();r[e]=l>.985?5.5:l>.9?3.4:2+o(),i[e]=o()}let s=new za;s.setAttribute(`position`,new Da(n,3)),s.setAttribute(`aSize`,new Da(r,1)),s.setAttribute(`aPhase`,new Da(i,1)),this.stars=new ms({vertexShader:km,fragmentShader:Am,transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:0},uPx:{value:1}}});let c=new Ko(s,this.stars);c.renderOrder=-9,c.frustumCulled=!1,this.group.add(c);let l=new za,u=[],d=[],f=[],p=[{r:1500,a0:-.9,a1:.7,y0:260,h:620},{r:1750,a0:.2,a1:1.6,y0:380,h:520},{r:1300,a0:-2.2,a1:-.7,y0:300,h:480}],m=0;for(let e of p){for(let t=0;t<=64;t++){let n=t/64,r=e.a0+(e.a1-e.a0)*n,i=Math.sin(r)*e.r,a=Math.cos(r)*e.r,o=Math.sin(n*7)*60;if(u.push(i,e.y0+o,a,i,e.y0+e.h+o,a),d.push(n,0,n,1),t<64){let e=m+t*2;f.push(e,e+1,e+2,e+1,e+3,e+2)}}m+=130}l.setAttribute(`position`,new Da(u,3)),l.setAttribute(`uv`,new Da(d,2)),l.setIndex(f),this.aurora=new ms({vertexShader:jm,fragmentShader:Mm,transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:0},uA:{value:new V(3014576)},uB:{value:new V(10120191)}}}),this.auroraMesh=new lo(l,this.aurora),this.auroraMesh.renderOrder=-8,this.auroraMesh.frustumCulled=!1,this.group.add(this.auroraMesh)}update(e,t,n,r,i,a=1){this.stars.uniforms.uPx.value=a,this.group.position.copy(t);let o=this.sky.uniforms;o.uTop.value.copy(e.skyTop),o.uMid.value.copy(e.skyMid),o.uHorizon.value.copy(e.horizon),o.uFog.value.copy(e.fog),o.uSun.value.copy(e.sun),o.uGlow.value.copy(e.sunGlow),o.uCave.value=r,o.uTime.value=n,o.uCloud.value.copy(e.cloud),o.uClouds.value=1-e.stars*.6;let s=e.sunAzim+i;this.sunDir.set(Math.sin(s)*Math.cos(e.sunElev),Math.sin(e.sunElev),Math.cos(s)*Math.cos(e.sunElev)).normalize(),this.stars.uniforms.uTime.value=n,this.stars.uniforms.uOpacity.value=e.stars*(1-r),this.aurora.uniforms.uTime.value=n,this.aurora.uniforms.uOpacity.value=e.aurora*(1-r)*.9,this.auroraMesh.visible=e.aurora>.01&&r<.99,this.auroraMesh.rotation.y=i}},Q=rt(),Pm=rt(),$=new R,Fm=new R,Im=new R,Lm=new B,Rm=new Br,zm=new Br,Bm=new V,Vm=new R(0,1,0),Hm=(e,t,n,r,i)=>{let a=r*r,o=2*r;t.x+=(a*(n.x-e.x)-o*t.x)*i,t.y+=(a*(n.y-e.y)-o*t.y)*i,t.z+=(a*(n.z-e.z)-o*t.z)*i,e.addScaledVector(t,i)},Um={run:{back:5.6,up:2.95,ahead:8,lookUp:1.2,follow:.62,fov:64},climb:{back:3.4,up:5.1,ahead:9.5,lookUp:1.4,follow:.78,fov:70},cart:{back:5.2,up:2.45,ahead:10,lookUp:1.1,follow:.5,fov:70},zip:{back:6.8,up:3.2,ahead:11,lookUp:1.2,follow:.55,fov:66},wings:{back:7.8,up:3.4,ahead:10,lookUp:.6,follow:.5,fov:70}},Wm=class{renderer;scene=new Gi;camera=new Zs(64,1,.1,6e3);sky=new Nm;backdrop=new Kd;fx;obstacles;items;character;pieces=new Map;buildQueue=[];hemi=new zs(16777215,4473924,1.5);key=new nc(16777215,2);rim=new nc(16777215,1);lamp=new $s(16773328,0,34,1.4);fog=new Wi(16777215,80,560);pal=yp(vp(0));cave=0;camP=new R;camV=new R;tgtP=new R;tgtV=new R;modeW={run:1,climb:0,cart:0,zip:0,wings:0};snapCam=!0;trauma=0;fovKick=0;roll=0;death=null;homeT=0;charPos=new R;charQuat=new Br;lean=0;curve=0;cartPos=new R;cartVis=0;cartHop=0;celebrate=0;quality={maxDpr:2,particles:1};dpr=1.5;frameEma=16;slowFor=0;fastFor=0;adaptive=!0;homeClose=!1;time=0;body=new R;weatherAcc=0;sparkAcc=0;trailAcc=0;climberData;constructor(e,t){this.renderer=new Rd({canvas:e,antialias:!0,powerPreference:`high-performance`,stencil:!1,alpha:!1}),this.renderer.outputColorSpace=dr,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.dpr),this.scene.fog=this.fog,this.scene.add(this.sky.group,this.backdrop.group),this.scene.add(this.hemi,this.key,this.key.target,this.rim,this.rim.target,this.lamp),this.fx=new Qf(this.scene),this.obstacles=new Em(this.scene),this.items=new hp(this.scene),this.climberData=Ke(t),this.character=new Uf(this.climberData),this.scene.add(this.character.group,this.character.scarf.mesh,this.character.cart),this.character.cart.visible=!1}setClimber(e){this.climberData=Ke(e),this.character.setClimber(this.climberData)}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setQuality(e){this.quality=e,this.dpr=Math.min(this.dpr,e.maxDpr),this.renderer.setPixelRatio(this.dpr)}get pixelRatio(){return this.dpr}reset(){for(let e of this.pieces.values())this.scene.remove(e.group),e.dispose();this.pieces.clear(),this.buildQueue.length=0,this.obstacles.group.clear(),this.obstacles.live.clear(),this.fx.clear(),this.death=null,this.snapCam=!0,this.trauma=0,this.cartVis=0,this.character.chuteOpen=0,this.character.gliderOpen=0,this.character.shieldOn=0}addPiece(e,t){let n=t.gen.pieces.find(t=>t.s1===e.s0),r=tm(e,t.path,n?.kind??null);this.pieces.set(e.id,r),this.scene.add(r.group);for(let t of e.obstacles)this.obstacles.add(t,e.zone)}flushBuilds(e){for(;this.buildQueue.length;)this.addPiece(this.buildQueue.shift(),e)}onEvent(e,t){let n=t.player;switch(e.t){case`piece`:this.buildQueue.push(e.piece);break;case`unpiece`:{let t=this.buildQueue.indexOf(e.piece);t>=0&&this.buildQueue.splice(t,1);let n=this.pieces.get(e.piece.id);n&&(this.scene.remove(n.group),n.dispose(),this.pieces.delete(e.piece.id));for(let t of e.piece.obstacles)this.obstacles.remove(t.id);break}case`jump`:this.fovKick+=2.2,this.footDust(t,10,1.6);break;case`land`:this.footDust(t,e.hard?18:10,e.hard?3:2),e.mode===`cart`&&this.sparks(t,14),this.trauma=Math.min(1,this.trauma+(e.hard?.18:.06));break;case`duck`:e.mode===`run`&&this.footDust(t,12,2.2);break;case`lane`:e.mode===`cart`&&(this.cartHop=1,this.sparks(t,10));break;case`step`:if(e.mode===`run`&&this.quality.particles>0){this.character.footWorld(e.foot===0,$);let t=this.pal;this.fx.emit(`dust`,$,{count:2,spread:.1,speed:.8,dir:Fm.set(0,1,0),color:t.groundDark,color2:t.ground,size:.32,sizeEnd:.8,life:.55,drag:3}),t.snowCover>.5&&this.fx.emit(`dust`,$,{count:2,spread:.08,speed:1.2,color:t.snow,size:.18,sizeEnd:.3,life:.5,gravity:4})}else e.mode===`climb`&&(this.character.handWorld(e.foot===0,$),this.fx.emit(`debris`,$,{count:3,spread:.08,speed:1.2,dir:Fm.set(0,-1,0),color:this.pal.rock,color2:this.pal.rockLight,size:.09,life:.9,gravity:14,drag:.5}),this.fx.emit(`dust`,$,{count:2,spread:.06,speed:.4,color:16184042,size:.22,sizeEnd:.55,life:.6,drag:2}));break;case`crystal`:this.items.itemPos(t.path,e.item,this.time,this.body,$),this.fx.emit(`crystal`,$,{count:7,spread:.12,speed:3.4,color:cp,color2:16777215,size:.34,sizeEnd:.05,life:.45,drag:4});break;case`gem`:this.items.itemPos(t.path,e.item,this.time,this.body,$),this.fx.emit(`crystal`,$,{count:26,spread:.2,speed:6,color:up,color2:16777215,size:.5,sizeEnd:.05,life:.7,drag:3}),this.trauma=Math.min(1,this.trauma+.1);break;case`power`:this.fx.emit(`crystal`,this.body,{count:34,spread:.3,speed:7,color:dp[e.kind],color2:16777215,size:.55,sizeEnd:.05,life:.8,drag:2.5}),this.fovKick+=4;break;case`shield`:this.trauma=Math.min(1,this.trauma+.45),this.fx.emit(`crystal`,this.body,{count:40,spread:.6,speed:9,color:dp.shield,color2:16777215,size:.5,sizeEnd:.05,life:.7}),t.path.frame(n.s,Q),this.obstacles.smash(e.ob.id,$.set(Q.fx,Q.fy,Q.fz)),this.debris(Im.copy(this.body),22,1.4);break;case`bump`:this.trauma=Math.min(1,this.trauma+.32),this.debris(Im.copy(this.body),8,.8);break;case`near`:this.fovKick+=3.5;for(let e=0;e<6;e++)this.speedLine(t,1.6);break;case`crash`:this.startDeath(t,e.cause,e.mode);break;case`summit`:this.celebrate=2.4,this.confetti(this.body,90)}}celebrateNow(){this.confetti(this.body,120)}footDust(e,t,n){if(this.quality.particles<=0)return;let r=e.player;e.path.frame(r.s,Q),$.set(Q.px+Q.rx*r.x,Q.py+Q.ry*r.x,Q.pz+Q.rz*r.x);let i=this.pal;r.mode===`climb`?this.fx.emit(`debris`,this.body,{count:t,spread:.3,speed:n,color:i.rock,color2:i.rockLight,size:.12,life:1,gravity:14}):this.fx.emit(`dust`,$,{count:t,spread:.35,speed:n,dir:Fm.set(Q.ux,Q.uy,Q.uz),cone:2.5,color:i.groundDark,color2:i.ground,size:.5,sizeEnd:1.3,life:.7,drag:3.2})}sparks(e,t){let n=e.player;e.path.frame(n.s,Q);for(let e of[-.55,.55])$.set(Q.px+Q.rx*(n.x+e)+Q.ux*(n.h+.15)-Q.fx*.7,Q.py+Q.ry*(n.x+e)+Q.uy*(n.h+.15)-Q.fy*.7,Q.pz+Q.rz*(n.x+e)+Q.uz*(n.h+.15)-Q.fz*.7),this.fx.emit(`spark`,$,{count:Math.ceil(t/2),spread:.05,speed:6,dir:Fm.set(-Q.fx,.6,-Q.fz),cone:.6,color:16765803,color2:16742959,size:.13,life:.35,gravity:18,drag:1})}debris(e,t,n){this.fx.emit(`debris`,e,{count:t,spread:.4,speed:7,color:this.pal.rock,color2:this.pal.rockLight,size:.2*n,life:1.2,gravity:18,drag:.6}),this.fx.emit(`dust`,e,{count:Math.ceil(t*.6),spread:.5,speed:2.5,color:this.pal.rockLight,color2:this.pal.fog,size:.9*n,sizeEnd:2.2*n,life:1,drag:2.5})}confetti(e,t){let n=[16738859,16763213,4191969,16731533,9202943,16777215];for(let r=0;r<n.length;r++)this.fx.emit(`confetti`,$.copy(e).add(Fm.set(0,1.4,0)),{count:Math.ceil(t/n.length),spread:.4,speed:9,dir:Im.set(0,1,0),cone:1.4,color:n[r],size:.2,life:2.2,gravity:7,drag:1.4})}speedLine(e,t){let n=this.camera.position;e.path.frame(e.player.s,Q);let r=Fm.set(Q.fx,Q.fy,Q.fz),i=Math.random()*Math.PI*2,a=2.2+Math.random()*2.5,o=Im.set(Q.rx,Q.ry,Q.rz);$.copy(n).addScaledVector(r,7+Math.random()*6).addScaledVector(o,Math.cos(i)*a).addScaledVector(Vm,Math.sin(i)*a*1.4),this.fx.emit(`speed`,$,{count:1,spread:0,speed:40*t,dir:r.clone().negate(),cone:0,color:16777215,size:.09,life:.3,drag:0})}startDeath(e,t,n){let r=e.player;e.path.frame(r.s,Q);let i=$.set(Q.fx,Q.fy,Q.fz),a=Fm.set(Q.ux,Q.uy,Q.uz),o=t===`gap`||n===`climb`||n===`zip`?`fall`:n===`cart`?`cart`:`tumble`,s=new R;o===`tumble`?s.copy(i).multiplyScalar(-3.5).addScaledVector(a,7.5):o===`cart`?s.copy(i).multiplyScalar(7).addScaledVector(a,8):t===`gap`?s.copy(i).multiplyScalar(4).addScaledVector(a,1.5):s.copy(a).multiplyScalar(4.5).add(Im.set(0,2,0)),this.death={pos:this.charPos.clone(),vel:s,spin:new R(Math.random()*6-3,Math.random()*4-2,Math.random()*8-4),rot:this.charQuat.clone(),kind:o,t:0,settled:!1,groundY:Q.py+(n===`climb`?-999:0),camAnchor:this.camP.clone()},this.trauma=1,this.debris(Im.copy(this.body),26,1.3)}revived(){this.death=null,this.character.chuteOpen=0,this.fovKick+=6}updatePalette(e,t){let n=e.player,r=e.gen.pieceAt(n.s),i=vp(r?.zone??0),a=i,o=0;r&&r.kind===`zip`&&r.zone>0&&(i=vp(r.zone-1),a=vp(r.zone),o=O(r.s0+10,r.s1-10,n.s)),bp(i,a,o,this.pal);let s=0;r&&r.kind===`cave`&&(s=O(r.marks.mouth-1,r.marks.mouth+9,n.s)*(1-O(r.marks.exit-16,r.marks.exit+1,n.s))),this.cave+=(s-this.cave)*A(5,t)}frame(e,t,n,r){this.time+=r;let i=this.time;this.buildQueue.length&&this.addPiece(this.buildQueue.shift(),t),this.updatePalette(t,r);let a=this.pal,o=this.cave,s=t.player;Bm.copy(a.rockDark).multiplyScalar(.12),this.fog.color.copy(a.fog).lerp(Bm,o),this.fog.near=D(70,5,o),this.fog.far=D(620,64,o),this.hemi.color.copy(a.hemiSky),this.hemi.groundColor.copy(a.hemiGround),this.hemi.intensity=a.hemiIntensity*(1-o*.78),this.key.color.copy(a.sun).lerp(a.hemiSky,.3),this.key.intensity=a.sunIntensity*(1-o*.92),this.rim.color.copy(a.sunGlow),this.rim.intensity=a.sunIntensity*.75*(1-o),this.lamp.intensity=o*34,t.path.frame(s.s,Q);let c=s.mode,l=Q.pitch,u=O(.42,1.25,l),d=s.h;c===`zip`&&s.wings<=0&&(d=xp-2.2),c===`cart`&&(d=s.h+.3);let f=s.x,p=$.set(Q.px+Q.rx*f+Q.ux*d,Q.py+Q.ry*f+Q.uy*d,Q.pz+Q.rz*f+Q.uz*d);Lm.makeBasis(Fm.set(-Q.rx,-Q.ry,-Q.rz),Im.set(Q.ux,Q.uy,Q.uz),new R(Q.fx,Q.fy,Q.fz)),Rm.setFromRotationMatrix(Lm),Lm.makeBasis(Fm.set(-Q.rx,-Q.ry,-Q.rz),Im.set(Q.fx,Q.fy,Q.fz),new R(-Q.ux,-Q.uy,-Q.uz)),zm.setFromRotationMatrix(Lm),Rm.slerp(zm,u);let m=T(-s.vx/9,-1,1);this.lean+=(m-this.lean)*A(12,r),t.path.frame(s.s+6,Pm);let h=Pm.yaw-Q.yaw;h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2),this.curve+=(T(h*4,-1,1)-this.curve)*A(4,r);let g=new Br().setFromAxisAngle(new R(0,0,1),this.lean*.18+(c===`cart`?-this.curve*.12:0));Rm.multiply(g),this.death?this.updateDeath(r,t):(this.charPos.copy(p),this.charQuat.copy(Rm)),this.character.group.position.copy(this.charPos),this.character.group.quaternion.copy(this.charQuat),this.body.set(0,c===`zip`?1:s.duck>0?.45:.85,0).applyQuaternion(this.charQuat).add(this.charPos),this.celebrate>0&&(this.celebrate-=r);let _={mode:c,air:s.air&&s.wings<=0,vh:s.vh,duck:s.duck>0,phase:s.s/bt[c]*Math.PI,speed:s.speed,lean:this.lean,idle:n===`home`||!s.started,alive:s.alive,falling:!!this.death&&this.death.kind===`fall`,chute:!!this.death&&this.death.kind===`fall`&&this.death.t>.42,dazed:!!this.death&&this.death.settled,wings:s.wings>0,celebrate:n===`home`?0:this.celebrate,time:i,curve:this.curve};this.character.animate(r,_),this.character.shieldOn+=((s.shield||s.invuln>.3?s.shield?1:.5+.5*Math.sin(i*30):0)-this.character.shieldOn)*A(8,r),this.character.lamp.visible=o>.2,this.character.group.updateMatrixWorld(!0);let v=Fm.set(Q.fx,Q.fy,Q.fz).multiplyScalar(s.alive&&s.started?s.speed:0);this.death&&v.copy(this.death.vel);let y=Im.copy(v).multiplyScalar(-1.1).add(new R(Math.sin(i*.7)*3+2,1.5,Math.cos(i*.5)*2)),b=new R(1,0,0).applyQuaternion(this.charQuat),x=new R(0,0,-1).applyQuaternion(this.charQuat);this.snapCam&&this.character.resetScarf(x),this.character.updateScarf(r,y,b,x,i);let S=c===`cart`&&s.alive?1:0;this.cartVis+=(S-this.cartVis)*A(S?20:3,r),this.cartHop=Math.max(0,this.cartHop-r*4);let C=this.character.cart;if(C.visible=this.cartVis>.05||this.death?.kind===`cart`&&this.death.t<2,C.visible){if(c===`cart`&&s.alive){let e=Math.sin(this.cartHop*Math.PI)*.35;for(this.cartPos.set(Q.px+Q.rx*f+Q.ux*(s.h+e),Q.py+Q.ry*f+Q.uy*(s.h+e),Q.pz+Q.rz*f+Q.uz*(s.h+e)),C.position.copy(this.cartPos),Lm.makeBasis($.set(-Q.rx,-Q.ry,-Q.rz),new R(Q.ux,Q.uy,Q.uz),new R(Q.fx,Q.fy,Q.fz)),C.quaternion.setFromRotationMatrix(Lm).multiply(new Br().setFromAxisAngle(new R(0,0,1),-this.curve*.1+this.lean*.08)),C.scale.setScalar(Math.min(1,this.cartVis*1.2)),this.sparkAcc+=r*(Math.abs(this.curve)*30+4)*this.quality.particles;this.sparkAcc>1;)--this.sparkAcc,this.sparks(t,2)}else C.scale.setScalar(Math.max(.01,this.cartVis))}this.updateCamera(r,t,n);for(let e of this.pieces.values()){let n=e.piece;if(!(n.s1<s.s-30||n.s0>s.s+220)){for(let n of e.glows){if(n.s<s.s-20||n.s>s.s+200)continue;t.path.point(n.s,n.x,n.h,Pm,$);let e=n.flicker>0?1-n.flicker*.25*(.5+.5*Math.sin(i*13+n.s)*Math.sin(i*7.3+n.x)):1;this.fx.glow($,n.size,n.color,(.55+o*.35)*e)}e.fire&&n.s0<=s.s+60&&(t.path.point(e.fire.s,e.fire.x,e.fire.h,Pm,$),Math.random()<r*26&&this.fx.emit(`ember`,$,{count:1,spread:.25,speed:1.4,dir:Fm.set(0,1,0),cone:.3,color:16757575,color2:16734751,size:.13,life:1.4,gravity:-1.2,drag:.6}),Math.random()<r*18&&this.fx.emit(`smoke`,$.add(Fm.set(0,.6,0)),{count:1,spread:.15,speed:.7,dir:Fm.set(.2,1,0),cone:.2,color:16754784,color2:16765600,size:.5,sizeEnd:.05,life:.6,gravity:-2}))}}if(this.items.update(t.path,t.gen.pieces,s.s,i,this.body,this.fx,this.quality.particles),this.obstacles.update(r,t.path,s.s,s.x,i),this.hazardFx(t,r),this.weather(t,r,n),s.alive&&s.started&&n===`play`&&this.quality.particles>0){for(this.trailAcc+=r*(s.wings>0?40:10);this.trailAcc>1;)--this.trailAcc,this.character.neckWorld($),this.fx.emit(s.wings>0?`spark`:`mote`,$,{count:1,spread:.12,speed:.4,color:this.climberData.trail,size:s.wings>0?.22:.1,sizeEnd:.02,life:.6,drag:2});(s.speed>21||s.wings>0)&&Math.random()<r*(s.wings>0?30:(s.speed-20)*2.2)&&this.speedLine(t,1)}this.sky.update(a,this.camera.position,i,o,0,this.dpr),this.backdrop.update(a,this.camera.position,i,o),this.key.position.copy(this.charPos).add($.set(-.85,.75,.45).applyQuaternion(this.camera.quaternion).multiplyScalar(40)),this.key.target.position.copy(this.charPos),this.rim.position.copy(this.charPos).addScaledVector(this.sky.sunDir,40),this.rim.target.position.copy(this.charPos),this.lamp.position.copy(this.charPos).add($.set(0,2.2,3.2).applyQuaternion(this.charQuat)),this.fx.setView(this.renderer.domElement.height,this.camera.fov,this.fog.color,this.fog.near,this.fog.far),this.fx.update(r),this.renderer.render(this.scene,this.camera)}hazardFx(e,t){let n=e.player;this.obstacles.forEach((r,i)=>{if(!i.visible)return;let a=r.s-n.s;if(!(a<-10||a>120)){if(r.kind===`oncoming`&&r.state===1)$.setFromMatrixPosition(i.matrix),e.path.frame(r.s,Pm),$.addScaledVector(Fm.set(Pm.ux,Pm.uy,Pm.uz),1.3).addScaledVector(Im.set(Pm.fx,Pm.fy,Pm.fz),-1),this.fx.glow($,6,new V(16770208),.9),Math.random()<t*30&&this.fx.emit(`spark`,$.addScaledVector(Fm,-1.1),{count:2,spread:.4,speed:5,color:16765803,color2:16742959,size:.12,life:.3,gravity:16});else if(r.kind===`rockfall`&&r.state===1)$.setFromMatrixPosition(i.matrix),Math.random()<t*24&&this.fx.emit(`dust`,$,{count:1,spread:.5,speed:1,color:this.pal.rockLight,size:.8,sizeEnd:1.8,life:.9,drag:2}),Math.random()<t*12&&this.fx.emit(`debris`,$,{count:1,spread:.6,speed:2,color:this.pal.rock,size:.14,life:1,gravity:10});else if(r.kind===`crumble`&&a<70){if(Math.random()<t*5){e.path.point(r.s+(Math.random()-.5)*2.5,(Math.random()-.5)*2+0,.2,Pm,$);let t=[-1,0,1].filter(e=>r.lanes&1<<e+1);e.path.point(r.s+(Math.random()-.5)*2.5,Je(t[Math.floor(Math.random()*t.length)])+(Math.random()-.5)*1.4,.2,Pm,$),this.fx.emit(`debris`,$,{count:1,spread:.05,speed:.6,color:8011824,size:.09,life:1.2,gravity:9})}}else r.kind===`crevasse`&&this.pal.stars}})}weather(e,t,n){if(this.quality.particles<=0)return;let r=dt(e.gen.pieceAt(e.player.s)?.zone??0),i=this.camera.position,a=Im.set(0,0,-1).applyQuaternion(this.camera.quaternion),o=0,s=this.cave>.5?`cave`:r.weather;switch(s){case`pollen`:case`dust`:case`motes`:o=14;break;case`snow`:o=60;break;case`stars`:o=30;break;case`wind`:o=22;break;case`cosmic`:o=20;break;case`cave`:o=16}for(this.weatherAcc+=t*o*this.quality.particles*(n===`home`?.7:1);this.weatherAcc>1;){--this.weatherAcc;let e=4+Math.random()*26;switch($.copy(i).addScaledVector(a,e).add(Fm.set((Math.random()-.5)*e*1.3,(Math.random()-.4)*e*1.2,(Math.random()-.5)*e*1.3)),s){case`pollen`:this.fx.emit(`mote`,$,{count:1,speed:.3,color:16773560,size:.09,life:3.2,drag:.2,gravity:-.05});break;case`dust`:this.fx.emit(`dust`,$,{count:1,speed:1.2,dir:Fm.set(1,.1,0),cone:.4,color:this.pal.groundDark,color2:this.pal.fog,size:.4,sizeEnd:1.2,life:2.6,drag:.1});break;case`motes`:this.fx.emit(`mote`,$,{count:1,speed:.25,color:this.pal.accent,color2:16777215,size:.12,life:3,drag:.2,gravity:-.15});break;case`snow`:case`stars`:this.fx.emit(`dust`,$,{count:1,speed:1.1,dir:Fm.set(.6,-1,.2),cone:.4,color:16777215,size:.11,life:4,drag:.15,gravity:.7});break;case`wind`:this.fx.emit(`speed`,$,{count:1,speed:26,dir:Fm.set(1,.05,.3),cone:.05,color:16777215,size:.06,life:.45,drag:0});break;case`cosmic`:this.fx.emit(`star`,$,{count:1,speed:.2,color:this.pal.accent,color2:16777215,size:.25,sizeEnd:.02,life:2,drag:.2});break;case`cave`:this.fx.emit(`mote`,$,{count:1,speed:.15,color:16770736,size:.07,life:2.5,drag:.3})}}}updateDeath(e,t){let n=this.death;if(n.t+=e,n.kind===`fall`){n.t<.42?n.vel.y-=18*e:(n.vel.multiplyScalar(Math.exp(-3*e)),n.vel.y+=(-2.2-n.vel.y)*A(3,e),n.vel.x+=Math.sin(n.t*1.3)*.6*e),n.pos.addScaledVector(n.vel,e);let r=n.t<.42?1:Math.exp(-(n.t-.42)*5);Rm.setFromAxisAngle($.copy(n.spin).normalize(),n.spin.length()*e*r),n.rot.premultiply(Rm),n.t>.42&&(t.path.frame(t.player.s,Pm),Lm.lookAt($.set(0,0,0),Fm.set(-Pm.fx,0,-Pm.fz).normalize(),Vm),zm.setFromRotationMatrix(Lm),n.rot.slerp(zm,A(3,e)))}else if(n.settled)t.path.frame(t.player.s,Pm),Lm.lookAt($.set(0,0,0),Fm.set(-Pm.fx,0,-Pm.fz).normalize(),Vm),zm.setFromRotationMatrix(Lm),n.rot.slerp(zm,A(8,e)),Math.random()<e*4&&(this.character.headWorld($),this.fx.emit(`star`,$.add(Fm.set(0,.25,0)),{count:1,spread:.3,speed:.6,color:16765803,color2:16777215,size:.28,sizeEnd:.05,life:.9,drag:1,gravity:-.5}));else{n.vel.y-=22*e,n.pos.addScaledVector(n.vel,e),Rm.setFromAxisAngle($.copy(n.spin).normalize(),n.spin.length()*e),n.rot.premultiply(Rm),t.path.frame(t.player.s,Pm);let r=Pm.py;n.pos.y<=r&&n.vel.y<0&&(n.pos.y=r,n.t>.5||Math.abs(n.vel.y)<3?(n.settled=!0,this.trauma=Math.min(1,this.trauma+.3),this.fx.emit(`dust`,n.pos,{count:14,spread:.6,speed:2.4,color:this.pal.groundDark,color2:this.pal.ground,size:.7,sizeEnd:1.6,life:.9,drag:2.8})):(n.vel.y*=-.35,n.vel.x*=.5,n.vel.z*=.5))}this.charPos.copy(n.pos),this.charQuat.copy(n.rot)}updateCamera(e,t,n){let r=t.player,i=this.camera,a=t.path,o=64,s=$,c=Fm;if(n===`home`||!r.started){if(this.homeT+=e,a.frame(r.s,Q),this.homeClose){let e=.45+Math.sin(this.homeT*.4)*.22;s.set(Q.px,Q.py,Q.pz).addScaledVector(Im.set(Q.rx,Q.ry,Q.rz),Math.sin(e)*3.9).addScaledVector(Im.set(Q.fx,Q.fy,Q.fz),Math.cos(e)*3.9).add(Im.set(0,1.2,0)),c.set(Q.px,Q.py+.32,Q.pz),o=52}else{let e=Math.sin(this.homeT*.11)*.55+.35,t=Im.set(Q.rx,Q.ry,Q.rz);s.set(Q.px,Q.py,Q.pz).addScaledVector(t,Math.sin(e)*5.2).addScaledVector(Im.set(Q.fx,Q.fy,Q.fz),-Math.cos(e)*5.6).add(Im.set(0,2.15,0)),a.frame(r.s+7,Pm),c.set(Pm.px,Pm.py+1.55,Pm.pz).lerp(new R(Q.px,Q.py+1.1,Q.pz),.6),o=58}}else if(this.death){let e=this.death;s.copy(e.camAnchor),e.kind===`fall`&&(s.y=Math.min(e.camAnchor.y,e.pos.y+6)),c.copy(e.pos).add(Im.set(0,.8,0)),o=58}else{let t=r.wings>0?`wings`:r.mode;for(let n of Object.keys(this.modeW))this.modeW[n]+=(+(n===t)-this.modeW[n])*A(3.2,e);let n=0,i=0,l=0,u=0,d=0,f=0;for(let e of Object.keys(this.modeW)){let t=this.modeW[e],r=Um[e];n+=r.back*t,i+=r.up*t,l+=r.ahead*t,u+=r.lookUp*t,d+=r.follow*t,o+=(r.fov-64)*t,f+=t}n/=f,i/=f,l/=f,u/=f,d/=f;let p=r.wings>0?r.h*.85:Math.max(0,r.h)*.35;a.frame(r.s-n,Q);let m=Im.set(Q.px+Q.rx*r.x*d+Q.ux*(i+p),Q.py+Q.ry*r.x*d+Q.uy*(i+p),Q.pz+Q.rz*r.x*d+Q.uz*(i+p)),h=Q.pitch;a.frame(r.s,Pm);let g=T((h-Pm.pitch)/.5,0,1);if(s.copy(m),g>0){let e=new R(Pm.px-Pm.fx*n+Pm.rx*r.x*d+Pm.ux*(i+p),Pm.py-Pm.fy*n+Pm.ry*r.x*d+Pm.uy*(i+p),Pm.pz-Pm.fz*n+Pm.rz*r.x*d+Pm.uz*(i+p));s.lerp(e,g)}a.frame(r.s+l,Q),c.set(Q.px+Q.rx*r.x*.3+Q.ux*(u+p),Q.py+Q.ry*r.x*.3+Q.uy*(u+p),Q.pz+Q.rz*r.x*.3+Q.uz*(u+p)),o+=T((r.speed-13)/14,0,1)*7}if(this.snapCam)this.camP.copy(s),this.tgtP.copy(c),this.camV.set(0,0,0),this.tgtV.set(0,0,0),this.snapCam=!1;else{let t=n===`home`?this.homeClose?4.5:2.2:this.death?3:9;Hm(this.camP,this.camV,s,t,e),Hm(this.tgtP,this.tgtV,c,t*1.4,e)}this.trauma=Math.max(0,this.trauma-e*1.7);let l=this.trauma*this.trauma;if(i.position.copy(this.camP),l>0){let e=this.time*37;i.position.x+=(Math.sin(e*1.1)+Math.sin(e*2.3)*.5)*l*.32,i.position.y+=(Math.sin(e*1.7+1)+Math.sin(e*3.1)*.5)*l*.32,i.position.z+=Math.sin(e*1.3+2)*l*.25}i.lookAt(this.tgtP),this.roll+=((n===`play`&&r.alive?-this.lean*.035+(r.mode===`cart`?-this.curve*.05:0):0)-this.roll)*A(6,e),i.rotateZ(this.roll+(l>0?Math.sin(this.time*41)*l*.03:0)),this.fovKick*=Math.exp(-e*4);let u=o+this.fovKick;i.fov+=(u-i.fov)*A(5,e),i.updateProjectionMatrix()}snapCamera(){this.snapCam=!0}adapt(e){if(!this.adaptive)return;this.frameEma+=(e-this.frameEma)*.05,this.frameEma>19.5?(this.slowFor+=e,this.fastFor=0):this.frameEma<13?(this.fastFor+=e,this.slowFor=0):(this.slowFor=0,this.fastFor=0);let t=Math.min(window.devicePixelRatio||1,this.quality.maxDpr);this.slowFor>1200&&this.dpr>.8?(this.dpr=Math.max(.8,this.dpr-.15),this.renderer.setPixelRatio(this.dpr),this.slowFor=0,this.frameEma=16):this.fastFor>5e3&&this.dpr<t&&(this.dpr=Math.min(t,this.dpr+.1),this.renderer.setPixelRatio(this.dpr),this.fastFor=0)}project(e,t,n){return $.copy(e).project(this.camera),{x:($.x*.5+.5)*t,y:(-$.y*.5+.5)*n,behind:$.z>1}}},Gm=`cliffbound.save.v1`,Km=()=>({v:1,best:0,crystals:0,totalCrystals:0,runs:0,totalAltitude:0,summits:0,maxZone:0,climber:`pip`,owned:[`pip`],missions:[Dt(0,0,[]),Dt(0,1,[]),Dt(0,2,[])],rank:0,stars:0,daily:{date:``,best:0,streak:0,lastPlayed:``,claimed:``},settings:{sound:!0,haptics:!0,quality:`auto`},tutorial:!1,seenZones:[0]}),qm=async()=>{let e=await ze.get(Gm),t=Km();if(!e)return t;try{let n=JSON.parse(e);return{...t,...n,daily:{...t.daily,...n.daily??{}},settings:{...t.settings,...n.settings??{}},owned:Array.isArray(n.owned)&&n.owned.length?n.owned:t.owned,missions:Array.isArray(n.missions)&&n.missions.length===3?n.missions:t.missions,seenZones:Array.isArray(n.seenZones)?n.seenZones:t.seenZones}}catch{return t}},Jm=null,Ym=(e,t=!1)=>{Jm&&clearTimeout(Jm);let n=()=>void ze.set(Gm,JSON.stringify(e));t?n():Jm=setTimeout(n,120)},Xm=()=>{let e=new Date(Date.now()-864e5);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`},Zm=new URLSearchParams(location.search),Qm={boulder:`Boulder in the way`,log:`Tripped on a log`,arch:`Bonked the stone arch`,crevasse:`Lost in a crevasse`,overhang:`Ran into an overhang`,crumble:`The rock crumbled`,eagle:`Swept off by an eagle`,rockfall:`Hit by falling rock`,rubble:`Cart hit the rubble`,barrier:`Cart hit the barrier`,beam:`Ducked too late`,railgap:`The rails ran out`,oncoming:`Runaway cart!`,plankgap:`Missing planks`,swinglog:`Swinging log got you`,bird:`The crows had other plans`},$m=class{save;world;view;ui;input;phase=`home`;last=performance.now();timeScale=1;hitStop=0;slow={scale:1,t:0};daily=!1;revives=0;bestAtStart=0;passedBest=!1;missionTick=0;liveDone=[];bot=null;announced=new Set;homeCam=`home`;crystalsBefore=0;frames=0;fpsAcc=0;fpsN=0;fps=0;dangerV=0;constructor(e,t,n,r){this.save=r,this.view=new Wm(e,r.climber),this.applyQuality(r.settings.quality),S.setEnabled(r.settings.sound&&Zm.get(`mute`)!==`1`),Re.enabled=r.settings.haptics,this.ui=new zt(t,n,{play:()=>this.play(!1),daily:()=>this.play(!0),pause:()=>this.pause(),resume:()=>this.resume(),restart:()=>this.play(this.daily),home:()=>this.goHome(),revive:()=>this.doRevive(),skipRevive:()=>this.finishRun(),buyClimber:e=>this.buyClimber(e),selectClimber:e=>this.selectClimber(e),previewClimber:e=>this.view.setClimber(e),closeClimbers:()=>this.view.setClimber(this.save.climber),setSetting:(e,t)=>this.setSetting(e,t),resetProgress:()=>this.resetProgress(),openLink:e=>window.open(e,`_blank`),sound:e=>S.play(e,{vol:e===`tick`?.5:.8,vary:.02}),cameraMode:e=>this.homeCam=e}),this.input=new j(e.parentElement),this.input.onSwipe=e=>this.swipe(e),this.resize(),window.addEventListener(`resize`,()=>this.resize()),Ue({pause:()=>{this.phase===`play`&&this.pause(),S.suspend()},resume:()=>S.resume(),back:()=>this.back()});let i=()=>{S.unlock(),window.removeEventListener(`pointerdown`,i)};window.addEventListener(`pointerdown`,i),Zm.get(`crystals`)&&(this.save.crystals=Number(Zm.get(`crystals`))),Zm.get(`best`)&&(this.save.best=Number(Zm.get(`best`))),this.newWorld(!1),this.ui.showHome(this.save),window.__game=this,Zm.get(`autoplay`)===`1`&&(this.bot=new nt(.08)),requestAnimationFrame(this.loop),(Zm.get(`play`)===`1`||Zm.get(`daily`)===`1`)&&setTimeout(()=>this.play(Zm.get(`daily`)===`1`),60);let a=Zm.get(`ui`);a===`climbers`&&setTimeout(()=>this.ui.showClimbers(),80),a===`missions`&&setTimeout(()=>this.ui.showMissions(),80),a===`settings`&&setTimeout(()=>this.ui.showSettings(),80),a===`daily`&&setTimeout(()=>this.ui.showDaily(),80),Zm.get(`hud`)===`0`&&(document.getElementById(`ui`).style.display=`none`)}resize(){let e=window.innerWidth,t=window.innerHeight;this.view.resize(e,t)}applyQuality(e){let t=window.devicePixelRatio||1;e===`battery`?this.view.setQuality({maxDpr:Math.min(t,1.15),particles:.5}):e===`high`?this.view.setQuality({maxDpr:Math.min(t,2.5),particles:1}):this.view.setQuality({maxDpr:Math.min(t,2),particles:1}),this.view.adaptive=e!==`high`}seedFor(e){let t=Zm.get(`seed`);return t?Number(t)>>>0:e?ee(`cliffbound-daily-${Bt()}`):Math.random()*4294967296>>>0}newWorld(e){let t=Zm.has(`tutorial`)?Zm.get(`tutorial`)===`1`:!this.save.tutorial&&!e;this.world=new St({seed:this.seedFor(e),tutorial:t}),this.view.reset();for(let e of this.world.events)this.view.onEvent(e,this.world);this.world.events.length=0,this.view.flushBuilds(this.world),this.view.snapCamera(),this.announced.clear()}play(e){S.unlock(),(this.phase!==`home`||this.daily!==e||this.world.player.started)&&this.newWorld(e),this.daily=e,this.phase=`play`,this.revives=0,this.bestAtStart=e?this.save.daily.date===Bt()?this.save.daily.best:0:this.save.best,this.passedBest=!1,this.liveDone=[],this.crystalsBefore=this.save.crystals,this.world.start(),this.ui.showHud(this.bestAtStart),this.homeCam=`home`,this.view.setClimber(this.save.climber),eh(``),He(!0),S.play(`whoosh`,{vol:.6}),Re.medium();let t=Number(Zm.get(`ff`)??0);t>0&&this.fastForward(t),Zm.get(`crash`)===`1`&&setTimeout(()=>this.world.debugCrash(),400)}fastForward(e){let t=this.world,n=new nt(.05),r=t.player.s+e,i=0;for(t.tutorialWait;t.player.s<r&&t.player.alive&&i++<2e5;){let e=n.think(t,1/60);e&&t.input(e),t.tutorialWait=null,t.update(1/60);for(let e of t.events)(e.t===`piece`||e.t===`unpiece`)&&this.view.onEvent(e,t);t.events.length=0}this.view.flushBuilds(t),this.view.snapCamera(),this.ui.hint(null)}swipe(e){this.phase===`play`&&this.world.input(e)}pause(){this.phase===`play`&&(this.phase=`paused`,this.ui.showPause(this.save),eh(`dim`),S.play(`back`,{vol:.6}),He(!1))}resume(){this.phase===`paused`&&(this.phase=`play`,this.ui.closeOverlay(),eh(``),S.play(`tap`,{vol:.6}),He(!0),this.last=performance.now())}goHome(){this.phase=`home`,this.homeCam=`home`,this.newWorld(!1),this.daily=!1,this.ui.closeOverlay(),this.ui.showHome(this.save),eh(``),He(!1),S.play(`back`,{vol:.7})}back(){if(this.ui.hasOverlay&&this.phase===`home`)this.ui.closeOverlay(),this.ui.showHome(this.save),this.view.setClimber(this.save.climber),this.homeCam=`home`;else switch(this.phase){case`play`:this.pause();break;case`paused`:this.resume();break;case`results`:this.goHome();break;case`revive`:this.finishRun();break;case`home`:We()}}setSetting(e,t){let n=this.save.settings;e===`sound`?(n.sound=t,S.setEnabled(n.sound)):e===`haptics`?(n.haptics=t,Re.enabled=n.haptics):(n.quality=t,this.applyQuality(n.quality)),Ym(this.save)}resetProgress(){let e=Km();e.settings=this.save.settings,Object.assign(this.save,e),Ym(this.save,!0),this.view.setClimber(this.save.climber),this.goHome()}buyClimber(e){let t=Ke(e);return this.save.owned.includes(e)?!0:this.save.crystals<t.price?(S.play(`error`,{vol:.7}),!1):(this.save.crystals-=t.price,this.save.owned.push(e),this.save.climber=e,this.view.setClimber(e),this.view.celebrateNow(),S.play(`unlock`,{vol:.9}),Ym(this.save,!0),!0)}selectClimber(e){this.save.owned.includes(e)&&(this.save.climber=e,this.view.setClimber(e),Ym(this.save))}doRevive(){let e=$e[this.revives]??9999;if(this.save.crystals<e)return this.finishRun();this.save.crystals-=e,this.revives++,this.world.revive(),this.view.revived(),this.phase=`play`,this.ui.closeOverlay(),this.ui.flash(.6,400),eh(``),S.play(`revive`,{vol:.9}),Re.success(),Ym(this.save)}finishRun(){if(this.phase===`results`)return;this.phase=`results`,He(!1);let e=this.world.stats,t=this.save,n=Math.floor(e.maxAltitude);t.runs++,t.totalAltitude+=n,t.crystals+=e.crystals,t.totalCrystals+=e.crystals,t.summits+=e.summits,t.maxZone=Math.max(t.maxZone,e.zone),!t.tutorial&&this.world.tutorial&&(t.tutorial=!0);let r=!1;if(this.daily){let e=Bt();t.daily.date!==e&&(t.daily.streak=t.daily.date===Xm()?t.daily.streak+1:1,t.daily.date=e,t.daily.best=0),n>t.daily.best&&(t.daily.best=n,r=this.bestAtStart>0),t.daily.claimed!==e&&(t.daily.claimed=e,t.crystals+=Math.min(100,30+(t.daily.streak-1)*10)),n>t.best&&(t.best=n)}else n>t.best&&(r=t.best>0||n>30,t.best=n);let i=kt(t.missions,e);for(let e of i)t.crystals+=e.reward;let a=t.missions.map(e=>({...e,justDone:i.includes(e)||this.liveDone.includes(e.kind)})),o=t.missions.filter(e=>e.done).length,s=null;for(t.stars+=i.length+this.liveDone.length;t.stars>=3;)t.stars-=3,t.rank++,t.crystals+=100+t.rank*50,s=jt(t.rank);if(o){let e=t.missions.filter(e=>!e.done).map(e=>e.kind);t.missions=t.missions.map((n,r)=>{if(!n.done)return n;let i=Dt(t.rank,r,e);return e.push(i.kind),i})}Ym(t,!0);let c=dt(e.zone);this.ui.showResults({altitude:n,best:this.daily?t.daily.best:t.best,newBest:r,crystals:t.crystals-this.crystalsBefore,summits:e.summits,zoneName:c.name,missions:a,rankUp:s,daily:this.daily,dailyBest:t.daily.best,totalCrystals:t.crystals}),eh(`blur`),s&&setTimeout(()=>S.play(`summit`,{vol:.8}),1200)}handle(e){let t=this.world,n=t.player,r=T(n.x/4,-.8,.8);switch(this.view.onEvent(e,t),e.t){case`lane`:S.play(e.mode===`cart`?`cartHop`:`swish`,{vol:e.mode===`cart`?.4:.55,pan:e.dir*.5}),Re.tick();break;case`jump`:S.play(e.mode===`cart`?`cartHop`:`jump`,{vol:.6,pan:r}),Re.light();break;case`land`:S.play(e.mode===`cart`?`cartLand`:`land`,{vol:e.hard?.8:.5,pan:r}),e.hard?Re.medium():Re.light();break;case`duck`:S.play(`slide`,{vol:e.mode===`climb`?.3:.55,pan:r}),Re.light();break;case`step`:{let i=t.gen.pieceAt(n.s),a=this.view.pal;if(e.mode===`climb`)S.play(`grab`,{vol:.42,pan:r+(e.foot?.15:-.15)});else if(e.mode===`run`){let t=i?.kind===`bridge`&&n.s>i.marks.deckStart&&n.s<i.marks.deckEnd;S.play(t?`stepWood`:a.snowCover>.5?`stepSnow`:`step`,{vol:.32,pan:r+(e.foot?.12:-.12)})}break}case`crystal`:S.crystal(e.combo,r),e.combo>0&&e.combo%10==0&&(this.ui.callout(`×${e.combo}`,`crystal small`),Re.light());break;case`gem`:S.play(`gem`,{vol:.8,pan:r}),Re.medium(),this.ui.callout(`+10`,`gold`);break;case`power`:S.play(`power`,{vol:.85}),Re.medium(),this.ui.callout(e.kind===`magnet`?`Magnet`:e.kind===`shield`?`Helmet`:`Updraft`,e.kind===`shield`?`crystal`:`gold`),e.kind===`wings`&&t.wingsTrail();break;case`powerEnd`:e.kind===`wings`&&S.play(`whoosh`,{vol:.5});break;case`shield`:S.play(`shield`,{vol:.9}),Re.heavy(),this.ui.flash(.45,260),this.ui.callout(`Saved!`,`crystal`),this.slowMo(.35,.45);break;case`bump`:S.play(`bump`,{vol:.8,pan:r}),Re.medium(),this.dangerV=.8;break;case`near`:S.play(`near`,{vol:.7,pan:-r}),Re.light(),this.ui.callout(`Close call`,`small`),this.slowMo(.55,.18);break;case`crash`:this.crash(e.ob,e.cause);break;case`mode`:e.to===`cart`&&S.play(`clank`,{vol:.7,wet:.5}),e.to===`zip`&&S.play(`clank`,{vol:.5}),e.from===`cart`&&S.play(`cartLand`,{vol:.5,wet:.4});break;case`enter`:e.piece.kind===`bridge`&&S.play(`creak`,{vol:.6}),e.piece.kind===`cave`&&S.play(`whoosh`,{vol:.5,wet:.6});break;case`summit`:{let n=dt(e.zone);S.play(`summit`,{vol:.95}),Re.success(),this.ui.banner(`Summit reached`,n.name,`${Math.floor(t.altitude)} m above camp`),this.ui.fx.confetti(window.innerWidth/2,window.innerHeight*.45,90);break}case`zone`:{let t=dt(e.zone);S.play(`zone`,{vol:.85}),Re.medium(),this.ui.banner(`Zone ${String(e.zone+1).padStart(2,`0`)}`,t.name,t.subtitle),this.save.seenZones.includes(e.zone)||this.save.seenZones.push(e.zone);break}case`moving`:e.ob.kind===`rockfall`&&S.play(`rumble`,{vol:.8,pan:this.obPan(e.ob)}),e.ob.kind===`oncoming`&&(S.play(`rumble`,{vol:.6,pan:this.obPan(e.ob),wet:.5}),S.play(`clank`,{vol:.5,delay:.2,wet:.6})),Re.light();break;case`tutorial`:this.ui.hint(e.step),S.play(`tick`,{vol:.6});break;case`passed`:e.ob.tutorial&&this.ui.hint(null)}}obPan(e){let t=[-1,0,1].filter(t=>e.lanes&1<<t+1);return T((t.reduce((e,t)=>e+Je(t),0)/Math.max(1,t.length)-this.world.player.x)/4,-.8,.8)}slowMo(e,t){this.slow={scale:e,t}}crash(e,t){let n=this.world;S.play(`crash`,{vol:1,pan:this.obPan(e),wet:.2}),(t===`gap`||n.player.mode===`climb`||n.player.mode===`zip`)&&S.play(`whistle`,{vol:.5,delay:.25}),Re.heavy(),setTimeout(()=>Re.error(),120),this.hitStop=.09,this.slowMo(.3,.8),this.ui.flash(.35,200),this.phase=`dying`,this.ui.hint(null),(t===`gap`||n.player.mode===`climb`||n.player.mode===`zip`)&&setTimeout(()=>S.play(`chute`,{vol:.7}),520),setTimeout(()=>{if(this.phase!==`dying`)return;let t=$e[this.revives];t!==void 0&&this.save.crystals>=t&&!this.bot?(this.phase=`revive`,eh(`dim`),this.ui.showRevive(t,this.save.crystals,Qm[e.kind]??`Wiped out`,5)):this.finishRun()},1250)}loop=e=>{requestAnimationFrame(this.loop);let t=Math.min(.05,Math.max(0,(e-this.last)/1e3));this.last=e,this.frames++,this.fpsAcc+=t,this.fpsN++,this.fpsAcc>1&&(this.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0,window.__fps=this.fps),this.view.adapt(t*1e3);let n=this.world,r=n.player,i=1;this.slow.t>0&&(this.slow.t-=t,i=this.slow.scale),n.tutorialWait&&(i=Math.min(i,.12)),this.timeScale+=(i-this.timeScale)*A(this.slow.t>0||n.tutorialWait?14:5,t);let a=t*this.timeScale;if(this.hitStop>0&&(this.hitStop-=t,a=0),this.phase===`play`||this.phase===`dying`){if(this.bot&&this.phase===`play`){let e=this.bot.think(n,a);e&&n.input(e),n.tutorialWait&&=null}let e=a;for(;e>1e-6;){let t=Math.min(e,1/60);n.update(t),e-=t}for(let e of n.events)this.handle(e);n.events.length=0,this.phase===`play`&&this.runChecks(t)}else if(this.phase===`home`){n.update(0);for(let e of n.events)this.view.onEvent(e,n);n.events.length=0}let o=this.phase===`home`?`home`:this.phase===`paused`?`paused`:r.alive?`play`:`dead`;if(this.view.homeClose=this.homeCam===`closeup`,this.view.frame(a,n,o,t),this.phase===`play`||this.phase===`dying`){let e=dt(n.stats.zone);this.ui.updateHud({altitude:n.altitude,best:this.bestAtStart,crystals:n.stats.crystals,nextSummit:e.summitAt,zoneStart:pt(n.stats.zone),magnet:r.magnet,shield:r.shield,wings:r.wings,danger:0})}this.dangerV=Math.max(0,this.dangerV-t*2.5),this.ui.danger(this.dangerV);let s=n.gen.pieceAt(r.s);if(S.ambience({altitude:Math.max(0,n.altitude),speed:r.started?r.speed:0,cave:s?.kind===`cave`?T((r.s-s.marks.mouth)/8,0,1)*T((s.marks.exit-r.s)/10,0,1):0,mode:r.mode,wings:r.wings>0,magnet:r.magnet>0,home:this.phase===`home`,dead:!r.alive,fire:+(this.phase===`home`),zone:n.stats.zone}),this.frames===3&&(window.__ready=!0,Ve()),window.__frames=this.frames,this.frames%10==0||this.frames===3){let e=this.view.renderer.info.render;window.__stats={calls:e.calls,tris:e.triangles,geos:this.view.renderer.info.memory.geometries,particles:this.view.fx.particleCount}}};runChecks(e){let t=this.world,n=t.stats;if(!this.passedBest&&this.bestAtStart>0&&n.maxAltitude>this.bestAtStart&&(this.passedBest=!0,S.play(`best`,{vol:.95}),Re.success(),this.ui.callout(`New best!`,`gold`),this.ui.fx.confetti(window.innerWidth/2,window.innerHeight*.3,70),this.view.celebrateNow()),this.missionTick-=e,this.missionTick<=0){this.missionTick=.4;for(let e of Ot(this.save.missions,n))this.liveDone.push(e.kind),this.save.crystals+=e.reward,this.ui.missionToast(e),S.play(`mission`,{vol:.85}),Re.success()}for(let e of t.gen.pieces){if(e.s0>t.player.s+80)break;for(let n of e.obstacles){if(n.kind!==`eagle`||this.announced.has(n.id))continue;let e=n.s-t.player.s;e<46&&e>0&&(this.announced.add(n.id),S.play(`eagle`,{vol:.8,pan:.6}))}}}},eh=e=>{let t=document.getElementById(`gl`);t&&(t.classList.remove(`dim`,`blur`),e&&t.classList.add(e))};(async()=>{let e=new URLSearchParams(location.search).get(`studio`);if(e){let{runStudio:t}=await Ee(async()=>{let{runStudio:e}=await import(`./studio-CW5FtJFb.js`);return{runStudio:e}},[],import.meta.url);t(e,new URLSearchParams(location.search).get(`climber`)??`pip`);return}let t=zt.bootSplash();zt.bootProgress(t,.2),await Be();let[n]=await Promise.all([qm(),document.fonts?.ready??Promise.resolve()]);zt.bootProgress(t,.55),await new Promise(e=>requestAnimationFrame(()=>setTimeout(e,30)));let r=new $m(document.getElementById(`gl`),document.getElementById(`ui`),document.getElementById(`fx2d`),n);zt.bootProgress(t,1);let i=()=>{r.frames>=3?setTimeout(()=>zt.bootDone(t),250):requestAnimationFrame(i)};i()})();export{Zs as a,Gi as c,be as d,xe as f,zs as i,R as l,Rd as n,Br as o,ce as p,nc as r,dr as s,Uf as t,Ke as u};