(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1234567,t=()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296*2-1),n=t=>{e=t>>>0||1},r=(e,t)=>new Float32Array(Math.max(1,Math.floor(e*t))),i=(e,n=1)=>{for(let r=0;r<e.length;r++)e[r]+=t()*n;return e},a=(e,n=1)=>{let r=0,i=0,a=0,o=0,s=0,c=0,l=0;for(let u=0;u<e.length;u++){let d=t();r=.99886*r+d*.0555179,i=.99332*i+d*.0750759,a=.969*a+d*.153852,o=.8665*o+d*.3104856,s=.55*s+d*.5329522,c=-.7616*c-d*.016898,e[u]+=(r+i+a+o+s+c+l+d*.5362)*.11*n,l=d*.115926}return e},o=(e,n=1)=>{let r=0;for(let i=0;i<e.length;i++)r=(r+.02*t())/1.02,e[i]+=r*3.5*n;return e},s=(e,t,n,r,i=.707,a=0)=>{let o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=e.length,g=typeof r==`number`,_=e=>{let r=2*Math.PI*Math.min(e,t*.45)/t,o=Math.cos(r),s=Math.sin(r)/(2*i),c=1;switch(n){case`lp`:u=(1-o)/2,d=1-o,f=(1-o)/2,c=1+s,p=-2*o,m=1-s;break;case`hp`:u=(1+o)/2,d=-(1+o),f=(1+o)/2,c=1+s,p=-2*o,m=1-s;break;case`bp`:u=s,d=0,f=-s,c=1+s,p=-2*o,m=1-s;break;case`peak`:{let e=10**(a/40);u=1+s*e,d=-2*o,f=1-s*e,c=1+s/e,p=-2*o,m=1-s/e;break}}u/=c,d/=c,f/=c,p/=c,m/=c};g&&_(r);for(let t=0;t<h;t++){!g&&!(t&31)&&_(r(t/h));let n=e[t],i=u*n+d*o+f*s-p*c-m*l;s=o,o=n,l=c,c=i,e[t]=i}return e},c=(e,t,n,r,i=4)=>{let a=Math.max(1,Math.floor(n*t)),o=Math.max(1,Math.floor(r*t));for(let t=0;t<e.length;t++){let n;if(t<a)n=t/a;else{let e=(t-a)/o;n=e>=1?0:Math.exp(-i*e)*(1-e)}e[t]*=n}return e},l=(e,t,n,r)=>{let i=Math.floor(n*t),a=Math.floor(r*t);for(let t=0;t<i&&t<e.length;t++)e[t]*=t/i;for(let t=0;t<a&&t<e.length;t++)e[e.length-1-t]*=t/a;return e},u=(e,t,n,r,i=0,a=-1,o=.002,s=5,c=`sin`)=>{let l=Math.floor(i*t),u=a<0?e.length-l:Math.min(e.length-l,Math.floor(a*t)),d=0,f=Math.max(1,Math.floor(o*t));for(let i=0;i<u;i++){let a=i/u,o=typeof n==`number`?n:n(a);d+=2*Math.PI*o/t;let p;switch(c){case`sin`:p=Math.sin(d);break;case`tri`:p=2/Math.PI*Math.asin(Math.sin(d));break;case`saw`:p=d/Math.PI%2-1;break;default:p=Math.sin(d)>0?1:-1}let m=(i<f?i/f:1)*Math.exp(-s*a)*(1-a);e[l+i]+=p*r*m}return e},d=(e,t,n,r,i=0,a=1,o=3.5,s=3,c=5)=>{let l=Math.floor(i*t),u=Math.min(e.length-l,Math.floor(a*t)),d=0,f=0;for(let i=0;i<u;i++){let a=i/u;f+=2*Math.PI*n*o/t;let p=s*Math.exp(-c*1.6*a);d+=2*Math.PI*n/t;let m=Math.sin(d+p*Math.sin(f)),h=Math.min(1,i/(.002*t))*Math.exp(-c*a)*(1-a);e[l+i]+=m*r*h}return e},f=(e,n,r,i,a,o,s=.0015)=>{for(let c=0;c<r;c++){let r=i+(t()+1)/2*(a-i),c=Math.floor(r*n),l=Math.max(2,Math.floor(s*n*(.5+(t()+1)/2))),u=o*(.4+(t()+1)*.3);for(let n=0;n<l&&c+n<e.length;n++)e[c+n]+=t()*u*(1-n/l)}return e},p=(e,t)=>{for(let n=0;n<e.length;n++)e[n]*=t;return e},m=(e,t,n=1,r=0)=>{for(let i=0;i<t.length&&i+r<e.length;i++)e[i+r]+=t[i]*n;return e},h=(e,t=.9)=>{let n=0;for(let t=0;t<e.length;t++)n=Math.max(n,Math.abs(e[t]));return n>0&&p(e,t/n),e},g=(e,t=2)=>{let n=Math.tanh(t);for(let r=0;r<e.length;r++)e[r]=Math.tanh(e[r]*t)/n;return e},_=(e,t,n=.25)=>{let r=Math.floor(n*t),i=new Float32Array(e.length-r);for(let t=0;t<i.length;t++)i[t]=e[t];for(let t=0;t<r;t++){let n=t/r;i[t]=e[t]*n+e[i.length+t]*(1-n)}return i},v=()=>t(),y=e=>({step:()=>[0,1,2,3].map(t=>{n(100+t);let a=r(e,.12);return i(a,.9),s(a,e,`lp`,1700+t*250,.8),c(a,e,.003,.07,5),f(a,e,5,.005,.06,.35),u(a,e,e=>95-e*30,.5,0,.06,.002,6),h(a,.55)}),stepSnow:()=>[0,1,2].map(t=>{n(140+t);let a=r(e,.16);return f(a,e,40,0,.11,.6,8e-4),i(a,.25),s(a,e,`bp`,2600+t*300,.9),c(a,e,.008,.12,3),u(a,e,80,.25,0,.05),h(a,.5)}),stepWood:()=>[0,1,2].map(t=>{n(170+t);let a=r(e,.16);return u(a,e,210+t*25,.6,0,.12,.001,9),u(a,e,520+t*40,.3,0,.06,.001,9),i(a,.15),s(a,e,`lp`,2400),c(a,e,.001,.12,6),h(a,.55)}),grab:()=>[0,1,2,3].map(t=>{n(200+t);let a=r(e,.22),o=r(e,.04);return i(o,1),s(o,e,`bp`,1300+t*200,1.2),c(o,e,.001,.035,6),m(a,o,1),u(a,e,130,.5,0,.05,.001,7),f(a,e,4,.05,.2,.18,.001),s(a,e,`lp`,5e3),h(a,.5)}),jump:()=>[0,1].map(t=>{n(300+t);let a=r(e,.3);return i(a,1),s(a,e,`bp`,e=>500+e*2600,1.4),c(a,e,.04,.24,3),h(a,.45)}),land:()=>[0,1].map(t=>{n(320+t);let a=r(e,.25);u(a,e,e=>75-e*35,.9,0,.14,.002,5);let o=r(e,.12);return i(o,1),s(o,e,`lp`,900),c(o,e,.002,.1,5),m(a,o,.7),f(a,e,6,.01,.12,.2),h(g(a,1.5),.7)}),slide:()=>{n(340);let t=r(e,.55);return i(t,1),s(t,e,`lp`,e=>2200-e*1400,.7),f(t,e,50,0,.5,.4,8e-4),c(t,e,.02,.5,2.5),[h(t,.45)]},swish:()=>[0,1,2].map(t=>{n(360+t);let a=r(e,.16);return i(a,1),s(a,e,`bp`,e=>2400-e*1500+t*200,1.1),c(a,e,.02,.13,3),h(a,.32)}),crystal:()=>{n(400);let t=r(e,.5);return d(t,e,880,.55,0,.5,3.5,2.2,5.5),d(t,e,1760,.25,0,.3,2,1.2,7),u(t,e,2640,.08,0,.12),[h(t,.5)]},gem:()=>{n(410);let t=r(e,1);return d(t,e,660,.5,0,1,3.5,2.5,4),d(t,e,990,.4,.06,.9,3.5,2,4),d(t,e,1320,.35,.12,.8,3.5,2,4.5),u(t,e,e=>2e3+e*3e3,.06,.1,.5,.05,2),[h(t,.6)]},power:()=>{n(420);let t=r(e,.8);u(t,e,e=>320+e*e*1500,.35,0,.55,.02,1.5,`tri`),u(t,e,e=>640+e*e*3e3,.12,0,.55,.02,1.5,`sin`);for(let n=0;n<6;n++)d(t,e,1200+n*260,.12,.25+n*.07,.35,2.5,1,6);return[h(t,.55)]},shield:()=>{n(430);let t=r(e,.7);for(let n=0;n<26;n++)d(t,e,2e3+(v()+1)/2*4500,.1,(v()+1)/2*.25,.3,1.414,.5,9);let a=r(e,.25);return i(a,1),s(a,e,`hp`,2500),c(a,e,.001,.2,5),m(t,a,.5),u(t,e,e=>140-e*60,.5,0,.2,.001,6),[h(t,.65)]},bump:()=>{n(440);let t=r(e,.3);return u(t,e,e=>110-e*50,.8,0,.18,.001,6),i(t,.4),s(t,e,`lp`,1200),c(t,e,.001,.25,6),f(t,e,8,.01,.2,.3),[h(g(t,2),.7)]},crash:()=>{n(450);let t=r(e,1.3);u(t,e,e=>62-e*30,1,0,.8,.001,4);let a=r(e,.9);return o(a,1),i(a,.5),s(a,e,`lp`,e=>3200-e*2900,.8),c(a,e,.001,.85,4),m(t,a,.9),f(t,e,40,.02,.9,.35,.002),[h(g(t,2.2),.85)]},whistle:()=>{n(460);let t=r(e,.9);return u(t,e,e=>1500-e*900,.4,0,.9,.04,1.2),u(t,e,e=>1506-e*900,.2,0,.9,.04,1.2),[h(t,.35)]},chute:()=>{n(470);let t=r(e,.5);return i(t,1),s(t,e,`bp`,e=>300+e*500,.9),c(t,e,.005,.4,3),u(t,e,90,.4,0,.12,.003,6),[h(t,.6)]},iceLand:()=>[0,1].map(t=>{n(480+t);let a=r(e,.45);u(a,e,e=>95-e*40,.7,0,.12,.002,6);let o=r(e,.3);i(o,1),s(o,e,`bp`,e=>5200-e*6e3,1.4),c(o,e,.001,.26,4),m(a,o,.55),f(a,e,14,.005,.28,.18,8e-4);for(let n of[2630,3410,4870])u(a,e,n*(1+t*.03),.07,.01,.18,.001,9);return h(a,.6)}),drip:()=>[0,1,2].map(t=>{n(500+t);let i=r(e,.18);return u(i,e,e=>(1100+t*180)*(1+Math.min(1,e*8)*.9),.6,0,.12,.001,8),h(i,.4)}),eagle:()=>{n(520);let t=r(e,.75),a=0;for(let n=0;n<t.length;n++){let r=n/t.length,i=2700-r*900+Math.sin(r*90)*60;a+=2*Math.PI*i/e;let o=Math.sin(a+1.8*Math.sin(a*.5));t[n]=o*Math.min(1,r*20)*(1-r)**1.5}let o=r(e,.75);return i(o,.3),s(o,e,`bp`,2400,2),m(t,o,.5),[h(t,.38)]},rumble:()=>{n(530);let t=r(e,1.6);return o(t,1),s(t,e,`lp`,260),f(t,e,26,.05,1.4,.25,.004),l(t,e,.2,.6),[h(t,.6)]},near:()=>{n(540);let t=r(e,.4);return i(t,1),s(t,e,`bp`,e=>3200-e*2700,2.2),c(t,e,.03,.33,2.5),[h(t,.5)]},crumble:()=>{n(550);let t=r(e,.7);return o(t,.6),f(t,e,30,0,.6,.6,.002),s(t,e,`lp`,1800),c(t,e,.01,.65,2.5),[h(t,.5)]},creak:()=>{n(560);let t=r(e,.55),i=0;for(let n=0;n<t.length;n++){let r=n/t.length;i+=2*Math.PI*(82+Math.sin(r*7)*14+v()*6)/e,t[n]=(i/Math.PI%2-1)*Math.sin(Math.PI*r)}return s(t,e,`bp`,700,3),[h(t,.3)]},tap:()=>{n(600);let t=r(e,.06);return u(t,e,1350,.6,0,.05,.001,9),u(t,e,2700,.15,0,.03,.001,9),f(t,e,1,0,.002,.4,.001),[h(t,.38)]},back:()=>{n(610);let t=r(e,.08);return u(t,e,e=>900-e*300,.6,0,.07,.001,8),[h(t,.33)]},open:()=>{n(620);let t=r(e,.35);return i(t,1),s(t,e,`bp`,e=>600+e*2400,1.6),c(t,e,.06,.28,2),u(t,e,e=>500+e*400,.12,.05,.25,.04,3),[h(t,.3)]},buy:()=>{n(630);let t=r(e,.8);return d(t,e,1046,.5,0,.6,3.5,2,5),d(t,e,1568,.45,.09,.6,3.5,2,5),d(t,e,2093,.35,.18,.55,3.5,2,5),[h(t,.5)]},unlock:()=>{n(640);let t=r(e,1.4);u(t,e,e=>200+e*900,.2,0,.6,.1,1);for(let n=0;n<5;n++)d(t,e,[784,988,1175,1568,1976][n],.35,.3+n*.07,1,3.5,1.8,3.5);return[h(t,.55)]},error:()=>{n(650);let t=r(e,.28);return u(t,e,140,.5,0,.12,.002,3,`sqr`),u(t,e,120,.5,.13,.12,.002,3,`sqr`),s(t,e,`lp`,900),[h(t,.3)]},toggle:()=>{n(660);let t=r(e,.05);return u(t,e,1900,.5,0,.03,.001,9),f(t,e,1,0,.002,.5,8e-4),[h(t,.3)]},mission:()=>{n(670);let t=r(e,.9);return d(t,e,1318,.5,0,.6,2,1.4,4.5),d(t,e,1976,.5,.11,.7,2,1.4,4.5),u(t,e,e=>3e3+e*2e3,.05,.1,.4,.05,2),[h(t,.5)]},best:()=>{n(680);let t=r(e,1.6),a=r(e,.7);i(a,1),s(a,e,`bp`,e=>400+e*5e3,1.2),c(a,e,.6,.08,1),m(t,a,.5),u(t,e,e=>220+e*660,.25,0,.7,.3,.5,`tri`);for(let[n,r]of[[880,.7],[1108,.74],[1318,.78],[1760,.82]])d(t,e,n,.35,r,.8,3.5,2,3);return u(t,e,e=>70-e*20,.6,.68,.4,.001,4),[h(t,.65)]},summit:()=>{n(690);let t=r(e,2.6),i=r(e,1.2);a(i,1),s(i,e,`bp`,e=>300+e*2200,.8),c(i,e,.9,.3,1),m(t,i,.4);for(let[n,r]of[[523,.9],[659,.95],[784,1],[1046,1.05],[1568,1.15]])d(t,e,n,.4,r,1.5,3.5,2.2,2.5);return u(t,e,65,.5,.88,1.4,.01,2.5),[h(t,.7)]},zone:()=>{n(700);let t=r(e,2.4);return a(t,1),s(t,e,`bp`,e=>200+Math.sin(e*Math.PI)*1400,.7),c(t,e,1,1.3,1.5),u(t,e,98,.3,.2,2,.6,1.5),u(t,e,147,.2,.3,1.9,.6,1.5),[h(t,.55)]},tick:()=>{n(710);let t=r(e,.05);return u(t,e,2400,.5,0,.04,.001,9),[h(t,.3)]},revive:()=>{n(720);let t=r(e,1);i(t,.6),s(t,e,`bp`,e=>300+e*3500,1.5),c(t,e,.5,.4,2);for(let n=0;n<3;n++)d(t,e,[880,1318,1760][n],.4,.45+n*.08,.5,3.5,2,4);return[h(t,.6)]},clank:()=>{n(730);let t=r(e,.4);for(let n of[410,1033,1620])u(t,e,n,.3,0,.4,.001,8);return f(t,e,3,0,.02,.6,.001),[h(t,.45)]},chirp:()=>[0,1,2].map(t=>{n(740+t);let i=r(e,.5);for(let n=0;n<3+t;n++)u(i,e,e=>3200+t*300+Math.sin(e*Math.PI)*900,.3,n*.11,.08,.004,3);return h(i,.25)}),whoosh:()=>{n(750);let t=r(e,.7);return a(t,1),s(t,e,`bp`,e=>300+Math.sin(e*Math.PI)*1800,.9),c(t,e,.25,.42,2),[h(t,.5)]},clip:()=>[0,1,2].map(t=>{n(1200+t);let a=r(e,.32),o=r(e,.012);return i(o,1),s(o,e,`hp`,3200),m(a,o,.9),d(a,e,2300+t*140,.35,.004,.28,2.76,1.6,9),d(a,e,3480+t*90,.2,.01,.22,3.1,1.2,10),f(a,e,2,.03,.06,.3,8e-4),h(a,.6)}),catch:()=>{n(1240);let t=r(e,.9);u(t,e,e=>70-e*30,1,0,.32,.002,4);let a=r(e,.5);i(a,1),s(a,e,`bp`,e=>300+e*500,3),c(a,e,.04,.45,2),m(t,a,.5,Math.floor(e*.04));for(let n=0;n<5;n++){let i=r(e,.05);d(i,e,1800+n*210,.25,0,.05,2.7,1.3,12),m(t,i,.5,Math.floor(e*(.08+n*.045)))}return[h(g(t,1.4),.85)]},dyno:()=>[0,1].map(t=>{n(1280+t);let o=r(e,.36);i(o,1),s(o,e,`bp`,e=>700+e*3e3,1.1),c(o,e,.01,.3,3.2);let l=r(e,.12);return a(l,1),s(l,e,`bp`,1100,.8),c(l,e,.005,.1,4),m(o,l,.6),h(o,.5)})}),b=e=>({wind:()=>{n(900);let t=r(e,6.5);return a(t,1),o(t,.6),s(t,e,`lp`,e=>500+Math.sin(e*Math.PI*4)*250,.6),h(_(t,e,.8),.7)},windHigh:()=>{n(910);let t=r(e,5.5);return i(t,1),s(t,e,`bp`,e=>1500+Math.sin(e*Math.PI*6)*600,3.5),h(_(t,e,.8),.6)},cave:()=>{n(920);let t=r(e,7);o(t,1),s(t,e,`lp`,180),p(t,.8);for(let n=0;n<6;n++){let i=r(e,.15);u(i,e,e=>1e3*(1+Math.min(1,e*8)),.25,0,.1,.001,8),m(t,i,.6,Math.floor((n+v()*.4+.3)/6*6.2*e))}return h(_(t,e,.6),.6)},ice:()=>{n(930);let t=r(e,2.4);return i(t,1),s(t,e,`bp`,e=>2400+Math.sin(e*Math.PI*6)*500,.8),p(t,.5),f(t,e,220,0,2.38,.35,6e-4),s(t,e,`lp`,7e3),h(_(t,e,.4),.55)},fire:()=>{n(950);let t=r(e,4);return a(t,.3),s(t,e,`lp`,900),f(t,e,90,0,3.9,.8,.0012),h(_(t,e,.4),.5)},magnet:()=>{n(960);let t=r(e,1);for(let n=0;n<t.length;n++){let r=n/e;t[n]=Math.sin(2*Math.PI*110*r)*(.6+.4*Math.sin(2*Math.PI*8*r))*.5+Math.sin(2*Math.PI*220*r)*.15}return h(t,.4)},glide:()=>{n(970);let t=r(e,3);return a(t,1),s(t,e,`bp`,700,.6),h(_(t,e,.5),.6)}}),x=[1,9/8,5/4,3/2,5/3,2,9/4,5/2,3,10/3,4],S=new class{ctx=null;master;sfxBus;ambBus;reverb;reverbIn;bank=new Map;loops=new Map;ready=!1;enabled=!0;wet=0;last=new Map;setEnabled(e){this.enabled=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:`interactive`}),this.build()}this.ctx.state!==`running`&&this.ctx.resume().catch(()=>void 0)}suspend(){this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!==`running`&&this.ctx.resume().catch(()=>void 0)}build(){let e=this.ctx,t=e.sampleRate;this.master=e.createGain(),this.master.gain.value=this.enabled?.9:0;let r=e.createDynamicsCompressor();r.threshold.value=-14,r.knee.value=10,r.ratio.value=4,r.attack.value=.004,r.release.value=.18,this.master.connect(r).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.ambBus=e.createGain(),this.ambBus.gain.value=.55,this.sfxBus.connect(this.master),this.ambBus.connect(this.master),this.reverb=e.createConvolver();let i=Math.floor(t*2.4),a=e.createBuffer(2,i,t);for(let e=0;e<2;e++){let r=a.getChannelData(e);n(77+e);for(let e=0;e<i;e++)r[e]=v()*(1-e/i)**3.2*(e<t*.012?.2:1)}this.reverb.buffer=a,this.reverbIn=e.createGain(),this.reverbIn.gain.value=0;let o=e.createGain();o.gain.value=.5,this.reverbIn.connect(this.reverb).connect(o).connect(this.master),this.sfxBus.connect(this.reverbIn);let s=y(t),c=Object.keys(s),l=b(t),u=Object.keys(l),d=0,f=()=>{let n=performance.now();for(;d<c.length+u.length&&performance.now()-n<8;){if(d<c.length){let n=c[d];this.bank.set(n,s[n]().map(n=>{let r=e.createBuffer(1,n.length,t);return r.getChannelData(0).set(n),r}))}else{let n=u[d-c.length],r=l[n](),i=e.createBuffer(1,r.length,t);i.getChannelData(0).set(r),this.startLoop(n,i)}d++}d<c.length+u.length?setTimeout(f,0):this.ready=!0};f()}startLoop(e,t){let n=this.ctx,r=n.createBufferSource();r.buffer=t,r.loop=!0;let i=n.createGain();i.gain.value=0;let a;e===`wind`||e===`windHigh`||e===`glide`?(a=n.createBiquadFilter(),a.type=`lowpass`,a.frequency.value=1200,r.connect(a).connect(i)):r.connect(i),i.connect(this.ambBus),(e===`cave`||e===`ice`)&&i.connect(this.reverbIn),r.start(n.currentTime+Math.random()*.1,Math.random()*t.duration*.9),this.loops.set(e,{src:r,gain:i,filter:a})}get isReady(){return this.ready}play(e,t={}){if(!this.ctx||!this.enabled)return;let n=this.bank.get(e);if(!n||!n.length)return;let r=this.ctx.currentTime,i=e+(t.rate??``);if(r-(this.last.get(i)??-1)<.025)return;this.last.set(i,r);let a=this.ctx,o=a.createBufferSource();o.buffer=n[Math.floor(Math.random()*n.length)];let s=t.vary??.06;o.playbackRate.value=(t.rate??1)*(1+(Math.random()*2-1)*s);let c=a.createGain();c.gain.value=t.vol??1;let l=o;if(l.connect(c),l=c,t.pan&&a.createStereoPanner){let e=a.createStereoPanner();e.pan.value=Math.max(-1,Math.min(1,t.pan)),l.connect(e),l=e}if(l.connect(this.sfxBus),(t.wet??0)>0){let e=a.createGain();e.gain.value=t.wet,l.connect(e).connect(this.reverbIn)}o.start(r+(t.delay??0))}crystal(e,t=0){let n=Math.min(x.length-1,Math.max(0,e-1));this.play(`crystal`,{rate:x[n]*.85,vol:.55,pan:t,vary:.004,wet:this.wet*.6})}ambience(e){if(!this.ctx||!this.ready)return;let t=this.ctx.currentTime,n=(e,n,r=.25)=>{let i=this.loops.get(e);i&&i.gain.gain.setTargetAtTime(this.enabled?n:0,t,r)},r=1-e.cave,i=Math.min(1,e.altitude/2600),a=Math.min(1,e.speed/28);n(`wind`,(.22+i*.35+a*.25+(e.glide?.2:0))*r*(e.dead?.6:1)),n(`windHigh`,(.03+i*.22+a*.12)*r);let o=this.loops.get(`wind`);o?.filter&&o.filter.frequency.setTargetAtTime(500+a*1400+i*600,t,.3);let s=this.loops.get(`windHigh`);s?.filter&&s.filter.frequency.setTargetAtTime(1600+i*2600,t,.4),n(`cave`,e.cave*.85),n(`ice`,e.slide&&!e.dead?.5:0,.08);let c=this.loops.get(`ice`);c&&c.src.playbackRate.setTargetAtTime(.8+a*.6,t,.2),n(`fire`,e.fire*.5),n(`magnet`,e.magnet&&!e.dead?.22:0),n(`glide`,e.glide&&!e.dead?.5:0),this.wet=e.cave,this.reverbIn.gain.setTargetAtTime(.08+e.cave*.9,t,.3)}get caveWet(){return this.wet}},C={name:`Cliffbound`,mark:[`CLIFF`,`BOUND`],tagline:[`Climb`,`Leap`,`Rise`],privacyUrl:`https://mulhimfy.github.io/cliffbound-app/privacy.html`,supportUrl:`https://mulhimfy.github.io/cliffbound-app/`,version:`1.2.0`},w=Math.PI/180,T=(e,t,n)=>e<t?t:e>n?n:e,E=e=>e<0?0:e>1?1:e,D=(e,t,n)=>e+(t-e)*n,O=(e,t,n)=>{let r=E((n-e)/(t-e));return r*r*(3-2*r)},k=(e,t,n)=>{let r=E((n-e)/(t-e));return r*r*r*(r*(r*6-15)+10)},A=(e,t)=>1-Math.exp(-e*t),j=(e,t,n,r,i)=>{let a=1+2*i*r*n,o=n*n*i,s=i*o,c=1/(a+s),l=a*e.x+i*e.v+s*t,u=e.v+o*(t-e.x);return e.x=l*c,e.v=u*c,e},ee=e=>{let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0},M=e=>Math.round(e).toLocaleString(`en-US`),te=class{steerId=-1;lastX=0;startX=0;startY=0;startT=0;moved=0;steering=!1;flicked=!1;enabled=!0;onSteer=()=>void 0;onLeap=()=>void 0;onTouch=()=>void 0;axis=0;keys=new Set;constructor(e){e.addEventListener(`pointerdown`,this.down,{passive:!0}),window.addEventListener(`pointermove`,this.move,{passive:!0}),window.addEventListener(`pointerup`,this.up,{passive:!0}),window.addEventListener(`pointercancel`,this.cancel,{passive:!0}),window.addEventListener(`keydown`,this.keyDown),window.addEventListener(`keyup`,this.keyUp),window.addEventListener(`blur`,()=>{this.keys.clear(),this.axis=0})}down=e=>{this.enabled&&(this.onTouch(),this.steerId>=0&&e.pointerId!==this.steerId?this.onLeap():(this.steerId=e.pointerId,this.lastX=this.startX=e.clientX,this.startY=e.clientY,this.startT=performance.now(),this.moved=0,this.steering=!1,this.flicked=!1))};move=e=>{if(e.pointerId!==this.steerId||!this.enabled)return;let t=e.clientX-this.lastX;this.lastX=e.clientX,this.moved=Math.max(this.moved,Math.hypot(e.clientX-this.startX,e.clientY-this.startY));let n=e.clientY-this.startY;if(!this.flicked&&n<-Math.max(34,window.innerHeight*.045)&&Math.abs(e.clientX-this.startX)<Math.abs(n)*.6&&performance.now()-this.startT<260&&(this.flicked=!0,this.onLeap()),!this.steering){if(Math.abs(e.clientX-this.startX)<7)return;this.steering=!0,this.onSteer(e.clientX-this.startX)}else t!==0&&this.onSteer(t)};up=e=>{e.pointerId===this.steerId&&(this.steerId=-1,this.enabled&&!this.flicked&&this.moved<14&&performance.now()-this.startT<320&&this.onLeap())};cancel=e=>{e.pointerId===this.steerId&&(this.steerId=-1)};keyDown=e=>{if(!this.enabled)return;let t=e.key;t===` `||t===`ArrowUp`||t===`w`||t===`W`?(e.preventDefault(),e.repeat||(this.onTouch(),this.onLeap())):(t===`ArrowLeft`||t===`ArrowRight`||t===`a`||t===`d`||t===`A`||t===`D`)&&(e.preventDefault(),this.keys.add(t.toLowerCase().replace(`arrow`,``)),e.repeat||this.onTouch(),this.updateAxis())};keyUp=e=>{this.keys.delete(e.key.toLowerCase().replace(`arrow`,``)),this.updateAxis()};updateAxis(){let e=this.keys.has(`left`)||this.keys.has(`a`),t=this.keys.has(`right`)||this.keys.has(`d`);this.axis=!!t-+!!e}get touching(){return this.steerId>=0}},ne;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(ne||={});var re=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},ie=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,ae=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?ie(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new re(`"${e}" plugin is not implemented on ${c}`,ne.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new re(`"${e}.${t}()" is not implemented on ${c}`,ne.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=re,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},oe=(e=>e.Capacitor=ae(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),se=oe.registerPlugin,ce=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new oe.Exception(e,ne.Unimplemented)}unavailable(e=`not available`){return new oe.Exception(e,ne.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},le=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ue=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),de=class extends ce{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=ue(n).trim(),r=ue(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=le(e.key),n=le(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};se(`CapacitorCookies`,{web:()=>new de});var fe=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),pe=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},me=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,he=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=pe(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},ge=class extends ce{async request(e){let t=he(e,e.webFetchExtra),n=me(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await fe(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};se(`CapacitorHttp`,{web:()=>new ge});var _e;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(_e||={});var ve;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(ve||={});var ye=class extends ce{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};se(`SystemBars`,{web:()=>new ye});var be;(function(e){e.Heavy=`HEAVY`,e.Medium=`MEDIUM`,e.Light=`LIGHT`})(be||={});var xe;(function(e){e.Success=`SUCCESS`,e.Warning=`WARNING`,e.Error=`ERROR`})(xe||={});var Se=`modulepreload`,Ce=function(e,t){return new URL(e,t).href},we={},N=function(e){return e.pathname.endsWith(`.css`)},Te=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ce(t,n);let r=s(t),i=N(r);return Te(we,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Se,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},De=se(`Haptics`,{web:()=>Ee(()=>import(`./web-CkdLCinJ.js`).then(e=>new e.HapticsWeb),[],import.meta.url)}),P=se(`App`,{web:()=>Ee(()=>import(`./web-CAd-esux.js`).then(e=>new e.AppWeb),[],import.meta.url)}),Oe=se(`Preferences`,{web:()=>Ee(()=>import(`./web-o5M5IGj4.js`).then(e=>new e.PreferencesWeb),[],import.meta.url)}),ke;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(ke||={});var Ae;(function(e){e.None=`NONE`,e.Slide=`SLIDE`,e.Fade=`FADE`})(Ae||={});var je=se(`StatusBar`),Me=se(`SplashScreen`,{web:()=>Ee(()=>import(`./web-DyvP4AJg.js`).then(e=>new e.SplashScreenWeb),[],import.meta.url)}),Ne=se(`KeepAwake`,{web:()=>Ee(()=>import(`./web-Wjb6h0zb.js`).then(e=>new e.KeepAwakeWeb),[],import.meta.url)}),Pe=se(`InAppReview`,{web:()=>Ee(()=>import(`./web-m4_9HZmj.js`).then(e=>new e.InAppReviewWeb),[],import.meta.url)}),Fe=se(`Browser`,{web:()=>Ee(()=>import(`./web-B-D9B5kf.js`).then(e=>new e.BrowserWeb),[],import.meta.url)}),Ie=oe.isNativePlatform();oe.getPlatform();var Le=!0,Re=new Map,ze=(e,t)=>{let n=performance.now();return n-(Re.get(e)??-1e9)<t?!1:(Re.set(e,n),!0)},Be=e=>{try{navigator.vibrate?.(e)}catch{}},F={set enabled(e){Le=e},get enabled(){return Le},tick(){Le&&ze(`tick`,45)&&(Ie?De.selectionChanged().catch(()=>void 0):Be(6))},light(){Le&&ze(`light`,40)&&(Ie?De.impact({style:be.Light}).catch(()=>void 0):Be(10))},medium(){Le&&ze(`medium`,60)&&(Ie?De.impact({style:be.Medium}).catch(()=>void 0):Be(18))},heavy(){Le&&ze(`heavy`,80)&&(Ie?De.impact({style:be.Heavy}).catch(()=>void 0):Be(32))},success(){Le&&ze(`success`,300)&&(Ie?De.notification({type:xe.Success}).catch(()=>void 0):Be([12,60,18]))},warning(){Le&&ze(`warning`,300)&&(Ie?De.notification({type:xe.Warning}).catch(()=>void 0):Be([20,50,20]))},error(){Le&&ze(`error`,300)&&(Ie?De.notification({type:xe.Error}).catch(()=>void 0):Be([40,40,60]))}},Ve={async get(e){try{return Ie?(await Oe.get({key:e})).value:localStorage.getItem(e)}catch{return null}},async set(e,t){try{Ie?await Oe.set({key:e,value:t}):localStorage.setItem(e,t)}catch{}}},He=async()=>{if(Ie)try{await je.setStyle({style:ke.Dark}),await je.hide()}catch{}},Ue=()=>{Ie&&Me.hide({fadeOutDuration:250}).catch(()=>void 0)},We=e=>{Ie&&(e?Ne.keepAwake():Ne.allowSleep()).catch(()=>void 0)},Ge=e=>{document.addEventListener(`visibilitychange`,()=>document.hidden?e.pause():e.resume()),Ie&&(P.addListener(`appStateChange`,({isActive:t})=>t?e.resume():e.pause()),P.addListener(`backButton`,()=>e.back()))},Ke=()=>{Ie&&Pe.requestReview().catch(()=>void 0)},qe=e=>{Ie?Fe.open({url:e,presentationStyle:`popover`,toolbarColor:`#0a1024`}).catch(()=>window.open(e,`_blank`)):window.open(e,`_blank`)},Je=()=>{Ie&&P.exitApp()},Ye=[{id:`pip`,name:`Kestrel`,tagline:`Swift, silent, always upward.`,price:0,cloak:12865834,trim:5907478,jacket:3488576,trousers:3091241,boots:2759959,gloves:4863014,mask:1250328,harness:7230518,pack:4542527,lens:6289636,scarf:15918799,scarf2:14178090,trail:16757596},{id:`juno`,name:`Glacier`,tagline:`Born in the ice. Never slips.`,price:400,cloak:15331061,trim:7310256,jacket:3890566,trousers:2503757,boots:1909811,gloves:2964050,mask:1712690,harness:10474495,pack:5664911,lens:16757596,scarf:4165600,scarf2:15331061,trail:10479359},{id:`koa`,name:`Warden`,tagline:`Keeper of the high pines.`,price:900,cloak:4025157,trim:2112039,jacket:5915699,trousers:3090980,boots:2759959,gloves:4863270,mask:1842970,harness:12094026,pack:7033656,lens:16765803,scarf:12094026,scarf2:4025157,trail:13168778},{id:`ember`,name:`Ember`,tagline:`Leaves sparks on every wall.`,price:1600,cloak:11018282,trim:2755856,jacket:1776418,trousers:1579039,boots:1052693,gloves:2823190,mask:1183506,harness:16742959,pack:2826278,lens:16742959,scarf:16742959,scarf2:1776418,trail:16747069},{id:`frost`,name:`Wraith`,tagline:`Seen once. Then only on the summit.`,price:2600,cloak:11121344,trim:4936806,jacket:3093826,trousers:2501430,boots:1514018,gloves:3883602,mask:1448482,harness:14674165,pack:4410203,lens:10479359,scarf:14674165,scarf2:4936806,trail:14674175},{id:`nova`,name:`Aurora`,tagline:`Wears the northern lights.`,price:4e3,cloak:2055270,trim:797235,jacket:2761542,trousers:1907251,boots:1183776,gloves:2761542,mask:987680,harness:6094802,pack:3025490,lens:6094802,scarf:6094802,scarf2:9202943,trail:6094802},{id:`sol`,name:`Sunforged`,tagline:`Summited every peak. Twice.`,price:6500,cloak:14198842,trim:8016916,jacket:15854296,trousers:5916210,boots:3811866,gloves:8016916,mask:2760724,harness:16773577,pack:9071162,lens:16774872,scarf:16773577,scarf2:14198842,trail:16765803},{id:`shade`,name:`Shade`,tagline:`Climbs at night. Leaves no trace.`,price:9500,cloak:1381917,trim:3811942,jacket:1842470,trousers:1316124,boots:657935,gloves:2367546,mask:789522,harness:9202943,pack:2039856,lens:11767039,scarf:9202943,scarf2:1381917,trail:11767039}],Xe=e=>Ye.find(t=>t.id===e)??Ye[0],Ze=.25,Qe={gravity:32,leapV:10.6,dynoV:7.4,dynoBoost:8.5,boostDecay:5.5,bodyH:1.6,halfWidth:.36,halfDepth:.32,forgive:.12,coyote:.1,bufferTime:.22,steerOmega:17,invulnAfterCatch:2.4,catchTime:1.05},$e={v0:11.5,vmax:24.5,dist:3200,mult:{run:1,climb:.72,slide:1.28,shaft:.68,glide:1.22},accel:2.6},et=e=>$e.v0+($e.vmax-$e.v0)*(1-Math.exp(-Math.max(0,e)/$e.dist)),tt=3.4,nt=1.78,rt=5.6,it=.32,at=[60,150,350],ot=(e,t,n)=>{let r=t-e;if(!n?.wrap||!n.tube)return r;let i=Math.PI*2*n.tube;return r-Math.round(r/i)*i},st=Math.PI*2*tt,ct=class{reaction;wait=0;target=null;constructor(e=.12){this.reaction=e}think(e,t){let n={steerTo:null,leap:!1},r=e.player;if(!r.alive||!r.started||r.caught>0)return n;let i=e.span,a=Math.max(4,r.speed+r.boost),o=a*2.4+14,s=[];for(let t of e.gen.pieces){if(t.s0>r.s+o+40)break;if(!(t.s1<r.s-6))for(let e of t.obstacles){if(e.state===2)continue;let t=e.s;if(e.moving&&e.vs!==0){let n=e.state>=1?0:Math.max(0,(e.trigger-r.s)/a),i=(e.s-e.depth/2-(r.s+Qe.halfDepth)-a*n)/(a-e.vs);if(i<0)continue;t=e.s+e.vs*(i+0)}let n=t-e.depth/2-(r.s+Qe.halfDepth);if(n>o||t+e.depth/2<r.s-Qe.halfDepth)continue;let i=e.x;if(e.amp>0){let t=Math.max(0,n)/a,o=e.state>=1?e.age+t:Math.max(0,t-Math.max(0,(e.trigger-r.s)/a));i=e.x0+e.amp*Math.sin(e.freq*o+e.phase)}s.push({ob:e,s0:t-e.depth/2,s1:t+e.depth/2,x:i})}}if(this.wait-=t,(this.wait<=0||this.target===null)&&(this.wait=this.reaction,this.target=this.plan(e,s,a)),n.steerTo=this.target,!r.air){let e=r.mode===`climb`||r.mode===`shaft`;for(let t of s){if(t.ob.clear===`block`||Math.abs(ot(r.x,t.x,i))>=t.ob.w+Qe.halfWidth-Qe.forgive)continue;let o=t.s0-(r.s+Qe.halfDepth);if(o<(e?a*.1+.5:a*.16+.55)&&o>-t.ob.depth*.4){n.leap=!0;break}}}return n}plan(e,t,n){let r=e.player,i=e.span,a=!!i.wrap,o=a?st/2:i.tube?i.w:Math.max(.2,i.w-Qe.halfWidth),s=[];if(a)for(let e=-40;e<=40;e++)s.push(r.x+e/40*(st/2));else for(let e=0;e<=48;e++)s.push(-o+2*o*e/48);let c=r.x,l=1/0;for(let e of s){let a=1/0,o=0;for(let n of t){if(Math.abs(ot(e,n.x,i))>=n.ob.w+Qe.halfWidth+.22)continue;let t=n.s0-r.s;n.ob.clear===`block`?a=Math.min(a,Math.max(.01,t)):o+=1/Math.max(2,t)}let s=Math.abs(ot(r.x,e,i)),u=s/6+.12,d=a/n,f=s*.06+o*.4;a<1/0&&(f+=40/(d+.05)+(d<u?200:0)),f<l&&(l=f,c=e)}return c}},lt=()=>({px:0,py:0,pz:0,fx:0,fy:0,fz:1,rx:-1,ry:0,rz:0,ux:0,uy:1,uz:0,yaw:0,pitch:0}),ut=(e,t,n)=>{let r=Math.sin(t),i=Math.cos(t),a=Math.sin(n),o=Math.cos(n);return e.yaw=t,e.pitch=n,e.fx=r*o,e.fy=a,e.fz=i*o,e.rx=-i,e.ry=0,e.rz=r,e.ux=-r*a,e.uy=o,e.uz=-i*a,e},dt=32768,ft=5,pt=class{data=new Float64Array(dt*ft);first=0;end=0;x=0;y=0;z=0;yaw=0;pitch=0;tmp={yaw:0,pitch:0};constructor(){this.push()}resetTo(e){this.first=0,this.end=0,this.x=0,this.y=e,this.z=0,this.yaw=0,this.pitch=0,this.push()}get length(){return(this.end-1)*Ze}get start(){return this.first*Ze}push(){this.end-this.first>=dt&&this.first++;let e=this.end%dt*ft,t=this.data;t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.yaw,t[e+4]=this.pitch,this.end++}append(e,t){let n=Math.max(1,Math.round(e/Ze)),r=e/n,i=this.tmp;for(let e=1;e<=n;e++){t(e*r,i);let n=(this.yaw+i.yaw)*.5,a=(this.pitch+i.pitch)*.5,o=Math.cos(a);this.x+=Math.sin(n)*o*Ze,this.y+=Math.sin(a)*Ze,this.z+=Math.cos(n)*o*Ze,this.yaw=i.yaw,this.pitch=i.pitch,this.push()}}trim(e){let t=Math.floor(e/Ze);t>this.first&&(this.first=Math.min(t,this.end-2))}frame(e,t){let n=e/Ze,r=this.first,i=this.end-1;n<r&&(n=r),n>i&&(n=i);let a=Math.floor(n);a>=i&&(a=i-1),a<r&&(a=r);let o=n-a,s=this.data,c=a%dt*ft,l=(a+1)%dt*ft;return t.px=s[c]+(s[l]-s[c])*o,t.py=s[c+1]+(s[l+1]-s[c+1])*o,t.pz=s[c+2]+(s[l+2]-s[c+2])*o,ut(t,s[c+3]+(s[l+3]-s[c+3])*o,s[c+4]+(s[l+4]-s[c+4])*o),t}point(e,t,n,r,i){return this.frame(e,r),i.x=r.px+r.rx*t+r.ux*n,i.y=r.py+r.ry*t+r.uy*n,i.z=r.pz+r.rz*t+r.uz*n,i}pitchAt(e){let t=e/Ze;t<this.first&&(t=this.first),t>this.end-1&&(t=this.end-1);let n=Math.min(Math.floor(t),this.end-1);return this.data[n%dt*ft+4]}heightAt(e){let t=e/Ze;t<this.first&&(t=this.first),t>this.end-1&&(t=this.end-1);let n=Math.min(Math.floor(t),this.end-1);return this.data[n%dt*ft+1]}},mt=class e{a;b;c;d;constructor(e){this.a=2654435769,this.b=608135816,this.c=3084996962,this.d=e>>>0;for(let e=0;e<16;e++)this.next()}next(){let{a:e,b:t,c:n,d:r}=this;e>>>=0,t>>>=0,n>>>=0,r>>>=0;let i=e+t|0;return e=t^t>>>9,t=n+(n<<3)|0,n=n<<21|n>>>11,r=r+1|0,i=i+r|0,n=n+i|0,this.a=e,this.b=t,this.c=n,this.d=r,(i>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)]}weighted(e){let t=0;for(let n in e)t+=Math.max(0,e[n]??0);let n=this.next()*t,r;for(let t in e){let i=Math.max(0,e[t]??0);if(!(i<=0)&&(r=t,n-=i,n<=0))return t}return r}gauss(){return(this.next()+this.next()+this.next()+this.next()-2)*1.732}fork(){return new e(this.next()*4294967296>>>0)}},ht=e=>e,gt=[{id:0,name:`Dawn Foothills`,subtitle:`First light on the pines`,summitAt:150,weather:`pollen`,flora:`pine`,crystalGoal:45,pieces:{wall:1,cave:.55,bridge:.45},palette:ht({skyTop:4875189,skyMid:13077947,horizon:16763558,fog:15908782,sun:16774366,sunGlow:16757372,sunElev:.2,sunAzim:.55,hemiSky:16769228,hemiGround:4734318,hemiIntensity:1.21,sunIntensity:2.62,rock:9075330,rockDark:5194329,rockLight:13807270,ground:8834971,groundDark:5151868,snow:16774126,foliage:3109990,foliageDark:2053458,accent:4191969,far1:11833273,far2:10257595,far3:9207734,cloud:16770006,stars:0,aurora:0,snowCover:0})},{id:1,name:`Amber Canyon`,subtitle:`Red rock and golden hour`,summitAt:390,weather:`dust`,flora:`juniper`,crystalGoal:60,pieces:{wall:1.1,cave:.6,bridge:.55},palette:ht({skyTop:3041709,skyMid:15314290,horizon:16765844,fog:16041095,sun:16773828,sunGlow:16751429,sunElev:.13,sunAzim:-.6,hemiSky:16769712,hemiGround:5189450,hemiIntensity:1.17,sunIntensity:2.88,rock:13595716,rockDark:9190699,rockLight:15903344,ground:14722918,groundDark:11695685,snow:16773340,foliage:7244348,foliageDark:5073455,accent:4191969,far1:13667188,far2:12022394,far3:10185350,cloud:16769205,stars:0,aurora:0,snowCover:0})},{id:2,name:`Crystal Hollows`,subtitle:`The mountain glows from within`,summitAt:700,weather:`motes`,flora:`crystal`,crystalGoal:75,pieces:{wall:1,cave:1.1,bridge:.5},palette:ht({skyTop:2056132,skyMid:6534895,horizon:12905727,fog:11459826,sun:16777215,sunGlow:12577279,sunElev:.75,sunAzim:.3,hemiSky:14677247,hemiGround:4016765,hemiIntensity:1.21,sunIntensity:2.5,rock:7767731,rockDark:4608639,rockLight:11846372,ground:7526845,groundDark:4564374,snow:15924223,foliage:3116167,foliageDark:1926768,accent:11963647,far1:8825302,far2:7574472,far3:6717885,cloud:16055295,stars:0,aurora:0,snowCover:.1})},{id:3,name:`Frost Ridge`,subtitle:`Ice, wind and a violet dusk`,summitAt:1080,weather:`snow`,flora:`frost`,crystalGoal:90,pieces:{wall:1.2,cave:.7,bridge:.6},palette:ht({skyTop:2762345,skyMid:8082081,horizon:15900585,fog:13013175,sun:16767423,sunGlow:16744335,sunElev:.06,sunAzim:-.35,hemiSky:14993136,hemiGround:3092326,hemiIntensity:1.17,sunIntensity:2.12,rock:6251923,rockDark:3685227,rockLight:10726361,ground:15331071,groundDark:11976166,snow:15988223,foliage:4022140,foliageDark:2770275,accent:9433343,far1:10321844,far2:8087203,far3:5919376,cloud:15844308,stars:.25,aurora:0,snowCover:.75})},{id:4,name:`Aurora Peaks`,subtitle:`Night climbs under living light`,summitAt:1540,weather:`stars`,flora:`glow`,crystalGoal:105,pieces:{wall:1.25,cave:.8,bridge:.6},palette:ht({skyTop:264735,skyMid:924999,horizon:2376826,fog:1715287,sun:14871807,sunGlow:8365823,sunElev:.55,sunAzim:.7,hemiSky:9086194,hemiGround:1054774,hemiIntensity:.98,sunIntensity:1.5,rock:3424623,rockDark:1844553,rockLight:6518707,ground:12570869,groundDark:8558543,snow:13951231,foliage:2046563,foliageDark:1321033,accent:6094802,far1:2241898,far2:1780568,far3:1385034,cloud:3822992,stars:1,aurora:1,snowCover:.8})},{id:5,name:`Sky Summit`,subtitle:`Sunrise above a sea of clouds`,summitAt:2080,weather:`wind`,flora:`cloud`,crystalGoal:120,pieces:{wall:1.3,cave:.5,bridge:.8},palette:ht({skyTop:2901392,skyMid:14978217,horizon:16767400,fog:16769736,sun:16777215,sunGlow:16761466,sunElev:.1,sunAzim:.1,hemiSky:16773346,hemiGround:9400466,hemiIntensity:1.25,sunIntensity:2.75,rock:14206146,rockDark:10388887,rockLight:16773610,ground:16775926,groundDark:15259870,snow:16777215,foliage:12947374,foliageDark:10120335,accent:16763213,far1:15775165,far2:14261172,far3:12421037,cloud:16771296,stars:0,aurora:0,snowCover:.9})},{id:6,name:`The Edge of Space`,subtitle:`Where the mountain meets the stars`,summitAt:2700,weather:`cosmic`,flora:`cosmic`,crystalGoal:135,pieces:{wall:1.35,cave:.7,bridge:.9},palette:ht({skyTop:131852,skyMid:1773904,horizon:8013485,fog:3876464,sun:16774120,sunGlow:16743129,sunElev:.32,sunAzim:-.5,hemiSky:13215999,hemiGround:1707834,hemiIntensity:1.01,sunIntensity:2,rock:7166627,rockDark:3944046,rockLight:11902182,ground:15129855,groundDark:11772646,snow:15920383,foliage:8015800,foliageDark:5584015,accent:16743129,far1:5191568,far2:4008568,far3:2957155,cloud:9071817,stars:1,aurora:.55,snowCover:.6})}],_t=e=>{if(e<gt.length)return gt[e];let t=[3,4,5,6],n=gt[t[(e-gt.length)%t.length]],r=gt[gt.length-1],i=e-gt.length+1;return{...n,id:e,name:`${n.name} ${vt(i+1)}`,summitAt:r.summitAt+i*700,crystalGoal:n.crystalGoal+i*10}},vt=e=>{let t=[[10,`X`],[9,`IX`],[5,`V`],[4,`IV`],[1,`I`]],n=``;for(let[r,i]of t)for(;e>=r;)n+=i,e-=r;return n},yt=e=>e===0?0:_t(e-1).summitAt-38,bt={boulder:{clear:`block`,depth:1.8,maxW:1.3},log:{clear:`jump`,depth:.9,hTop:.72,maxW:9},crevasse:{clear:`gap`,depth:3,maxW:9},roller:{clear:`block`,depth:1.9,maxW:1},roof:{clear:`block`,depth:1.8,maxW:1.4},slab:{clear:`gap`,depth:3.2,maxW:9},rockfall:{clear:`block`,depth:1.5,maxW:.8},eagle:{clear:`block`,depth:1.4,maxW:.75},icicle:{clear:`block`,depth:1.4,maxW:1.1},stalagmite:{clear:`block`,depth:1.4,maxW:.85},crystal:{clear:`block`,depth:1.4,maxW:.9},hole:{clear:`gap`,depth:3.1,maxW:9},spur:{clear:`block`,depth:1.6,maxW:1.1},drip:{clear:`block`,depth:1.2,maxW:.6},plankgap:{clear:`gap`,depth:2.6,maxW:9},swinglog:{clear:`block`,depth:.9,maxW:.75},bird:{clear:`block`,depth:1.2,maxW:.75}},xt={rockfall:{vs:-12,lead:2.3},eagle:{vs:-17,lead:1.9},roller:{vs:-7,lead:2.6},drip:{vs:-11,lead:2.1},swinglog:{vs:0,lead:1.7},bird:{vs:-3,lead:2.5}},St={camp:4.2,crest:3,ledge:2.5,forest:3.2,meadow:4,intro:3.2,tutorial:3.4,wall:3.8,cave:3,bridge:1.7,summit:4,glide:7},Ct=Math.PI*2*tt,wt=class{path;rng;pieces=[];zone=0;plan=[];ids=1;obIds=1;itemIds=1;anchorIds=1;golden=0;nextRowS=0;nextPowerS=340;lastAnchorS=-999;rowsSinceBreather=0;lastSpecial=null;deck=[];tutorial;sOffset=0;startY=0;rows=0;lastPieceIdx=0;constructor(e,t){this.path=e,this.rng=new mt(t.seed),this.tutorial=t.tutorial&&!t.startZone,this.zone=t.startZone??0,this.startY=yt(this.zone),this.startY!==0&&this.path.resetTo(this.startY),this.sOffset=this.startY*2.2,this.camp(),this.tutorial?this.plan.push({kind:`trail`,variant:`tutorial`},{kind:`wall`,variant:`tutorial`},{kind:`trail`,variant:`ledge`}):this.plan.push({kind:`trail`,variant:`intro`},{kind:`wall`}),this.deck=[{kind:`cave`,variant:`shaft`},{kind:`bridge`},{kind:`wall`},{kind:`cave`,variant:`open`}]}ensure(e){let t=[],n=0;for(;this.path.length<e&&n++<40;)t.push(this.build());return t}dropBefore(e){let t=[];for(;this.pieces.length>1&&this.pieces[0].s1<e;)t.push(this.pieces.shift());return this.lastPieceIdx=0,t}pieceAt(e){let t=this.pieces,n=Math.min(this.lastPieceIdx,t.length-1);if(!(n<0)){for(e<t[n].s0&&(n=0);n<t.length;n++)if(e>=t[n].s0&&e<t[n].s1)return this.lastPieceIdx=n,t[n];return t[t.length-1]}}spanAt(e){let t=this.pieceAt(e);if(t){for(let n of t.modes)if(e>=n.s0&&e<n.s1)return n;return t.modes[t.modes.length-1]}return{s0:0,s1:1e9,mode:`run`,w:3}}modeAt(e){return this.spanAt(e).mode}speedAt(e,t){return et(e+this.sOffset)*$e.mult[t]}difficultyAt(e){let t=_t(this.zone),n=yt(this.zone),r=T((e-n)/Math.max(1,t.summitAt-n),0,1);return T(T((Math.max(0,e-25)/2300)**.8,0,1)*.86+r*.14,0,1)}peek(){return this.plan.length<2&&this.plan.push(this.choose(this.plan[this.plan.length-1]??{kind:`trail`})),this.plan[1]}choose(e){let t=this.rng;switch(e.kind){case`camp`:return{kind:`trail`};case`trail`:{this.deck.length||this.refillDeck();let e=this.deck.findIndex(e=>e.kind!==this.lastSpecial||e.kind===`wall`);e<0&&(e=0);let t=this.deck.splice(e,1)[0];return(t.kind===`cave`||t.kind===`bridge`)&&(this.lastSpecial=t.kind),t}case`wall`:return{kind:`trail`,variant:t.chance(.55)?`ledge`:void 0};case`cave`:return e.variant===`shaft`?{kind:`shaft`}:{kind:`trail`};case`shaft`:return{kind:`trail`,variant:`ledge`};case`bridge`:return t.chance(.55)?{kind:`wall`}:{kind:`trail`};case`summit`:return{kind:`glide`};case`glide`:return{kind:`trail`,variant:`meadow`}}}build(){this.plan.length||this.plan.push(this.choose({kind:`trail`}));let e=this.plan[0],t=_t(this.zone),n=this.path.y;!e.final&&n>=t.summitAt-52&&(e.kind===`trail`||e.kind===`wall`||e.kind===`bridge`||e.kind===`cave`)&&e.variant!==`meadow`&&e.variant!==`tutorial`&&(e={kind:`wall`,final:!0},this.plan=[e,{kind:`summit`},{kind:`glide`}]);let r=this.peek();switch(this.plan.shift(),e.kind){case`trail`:return this.trail(e.variant??``,r.kind);case`wall`:return this.wall(e.variant??``,!!e.final);case`cave`:return this.cave(e.variant===`shaft`?`shaft`:`open`);case`shaft`:return this.shaft();case`bridge`:return this.bridge();case`summit`:return this.summit();case`glide`:return this.zone++,this.glide();default:return this.trail(``,r.kind)}}refillDeck(){let e=this.rng,t=_t(this.zone),n=[{kind:`wall`},{kind:`wall`},{kind:`cave`,variant:e.chance(.55)?`shaft`:`open`},{kind:`bridge`}];e.chance(t.pieces.wall-.85)&&n.push({kind:`wall`}),e.chance(t.pieces.cave-.6)&&n.push({kind:`cave`,variant:e.chance(.5)?`shaft`:`open`}),e.chance(t.pieces.bridge-.4)&&n.push({kind:`bridge`});for(let t=n.length-1;t>0;t--){let r=Math.floor(e.next()*(t+1));[n[t],n[r]]=[n[r],n[t]]}this.deck=n}begin(e,t){return{id:this.ids++,kind:e,variant:t,s0:this.path.length,s1:this.path.length,zone:this.zone,seed:this.rng.next()*4294967296>>>0,y0:this.path.y,y1:this.path.y,modes:[],marks:{},obstacles:[],items:[],anchors:[]}}end(e){return e.s1=this.path.length,e.y1=this.path.y,e.modes.length||e.modes.push({s0:e.s0,s1:e.s1,mode:`run`,w:St.crest}),this.pieces.push(e),e}nextYaw(e){let t=this.path.yaw;return D(T(t+this.rng.range(-e,e),-.62,.62),0,.3)}camp(){let e=this.begin(`camp`,``);this.path.append(34,(e,t)=>{t.yaw=0,t.pitch=0}),e.marks.start=13,this.end(e),e.modes=[{s0:e.s0,s1:e.s1,mode:`run`,w:St.camp}],e.marks.start=e.s0+13,this.nextRowS=e.s0+46}trail(e,t){let n=this.rng,r=_t(this.zone),i=e===`tutorial`||e===`meadow`||e===`intro`||e===`ledge`,a=r.flora===`pine`||r.flora===`juniper`||r.flora===`frost`||r.flora===`glow`,o=i?e:n.weighted({crest:1,ledge:.8,forest:a?.8:.15}),s=n.sign(),c=this.begin(`trail`,o===`ledge`?s<0?`ledgeL`:`ledgeR`:o),l=o===`tutorial`?250:o===`meadow`?124:o===`intro`?120:o===`ledge`?n.range(48,84):n.range(80,150),u=this.path.yaw,d=this.path.pitch,f=o===`tutorial`||o===`meadow`,p=f?D(u,0,.5):this.nextYaw(.5),m=(f?3:n.range(5,10))*w,h=(t===`wall`?n.range(2,5):t===`cave`?1.5:0)*w,g=f?0:n.range(.08,.22)*n.sign(),_=f?0:n.range(1.5,3.5)*w,v=n.range(1,2.5);this.path.append(l,(e,t)=>{let n=e/l,r=Math.sin(Math.PI*n);t.yaw=D(u,p,k(0,1,n))+g*Math.sin(2*Math.PI*n)*r,t.pitch=(e<l*.5?D(d,m,O(0,14,e)):D(m,h,O(l-16,l,e)))+_*Math.sin(2*Math.PI*n*v)*r*r}),this.end(c);let y=o===`ledge`?St.ledge:o===`forest`?St.forest:o===`meadow`?St.meadow:o===`tutorial`?St.tutorial:o===`intro`?St.intro:St.crest;if(c.modes=[{s0:c.s0,s1:c.s1,mode:`run`,w:y}],o===`tutorial`)this.tutorialTrail(c);else{let e=o===`meadow`?c.s0+52:c.s0+14;o===`meadow`&&(this.nextRowS=Math.max(this.nextRowS,e)),this.fill(c,e,c.s1-12,`run`)}return c}wall(e,t){let n=this.rng,r=_t(this.zone),i=r.flora===`frost`||r.flora===`glow`,a=this.begin(`wall`,e||(i&&n.chance(.5)?`ice`:n.chance(.3)?`buttress`:`face`)),o=this.path.pitch,s=this.path.yaw,c=Math.max(1,3.4*(Math.PI/2-o)),l=e===`tutorial`?40:n.range(26,50)+this.difficultyAt(this.path.y)*16;t&&(l=Math.max(26,_t(this.zone).summitAt-this.path.y-c*.6+6));let u=4*w,d=1.8*(Math.PI/2-u);this.path.append(c,(e,t)=>{t.yaw=s,t.pitch=D(o,Math.PI/2,e/c)});let f=this.path.length;this.path.append(l,(e,t)=>{t.yaw=s,t.pitch=Math.PI/2});let p=this.path.length;return this.path.append(d,(e,t)=>{t.yaw=s,t.pitch=D(Math.PI/2,u,e/d)}),this.end(a),a.marks.climbStart=f,a.marks.climbEnd=p,a.marks.final=+!!t,a.modes=[{s0:a.s0,s1:f-c*.35,mode:`run`,w:St.crest},{s0:f-c*.35,s1:p+d*.4,mode:`climb`,w:St.wall},{s0:p+d*.4,s1:a.s1,mode:`run`,w:St.crest}],this.golden=T(this.golden,-2.6,2.6),this.addAnchor(a,f+2.5,this.golden),e===`tutorial`?this.tutorialWall(a,f,p):this.fill(a,f+9,p-7,`climb`),a}cave(e){let t=this.rng,n=this.begin(`cave`,e),r=this.path.yaw,i=this.path.pitch,a=t.range(150,220);this.path.append(14,(e,t)=>{t.yaw=r,t.pitch=D(i,0,O(0,14,e))});let o=n.s0+5,s=this.path.length,c=this.nextYaw(.55),l=t.int(2,3),u=t.range(.28,.46)*t.sign(),d=t.range(5,8.5)*w,f=t.range(2.5,4.5)*w;this.path.append(a,(e,t)=>{let n=e/a,i=Math.sin(Math.PI*n);t.yaw=D(r,c,k(0,1,n))+u*Math.sin(Math.PI*2*l*n*.5)*i,t.pitch=-d*Math.max(0,i)**.6+f*Math.sin(Math.PI*2*n*2.5)*i});let p=this.path.length,m=this.path.yaw,h=this.path.pitch,g=e===`shaft`?10:18,_=e===`shaft`?0:4*w;this.path.append(g,(e,t)=>{t.yaw=m,t.pitch=D(h,_,O(0,g,e))}),this.end(n);let v=tt;return n.marks.mouth=o,n.marks.slideStart=s,n.marks.slideEnd=p,n.marks.exit=e===`shaft`?n.s1+999:p+6,n.modes=e===`shaft`?[{s0:n.s0,s1:s,mode:`run`,w:St.cave},{s0:s,s1:n.s1,mode:`slide`,w:nt*v,tube:v}]:[{s0:n.s0,s1:s,mode:`run`,w:St.cave},{s0:s,s1:p+2,mode:`slide`,w:nt*v,tube:v},{s0:p+2,s1:n.s1,mode:`run`,w:St.cave}],this.fill(n,s+22,(e===`shaft`?n.s1:p)-12,`slide`),n}shaft(){let e=this.rng,t=this.begin(`shaft`,``),n=this.path.pitch,r=this.path.yaw,i=Math.max(1,3*(Math.PI/2-n)),a=e.range(40,60)+this.difficultyAt(this.path.y)*12,o=4*w,s=1.8*(Math.PI/2-o);this.path.append(i,(e,t)=>{t.yaw=r,t.pitch=D(n,Math.PI/2,e/i)});let c=this.path.length;this.path.append(a,(e,t)=>{t.yaw=r,t.pitch=Math.PI/2});let l=this.path.length;return this.path.append(s+10,(e,t)=>{t.yaw=r,t.pitch=e<s?D(Math.PI/2,o,e/s):o}),this.end(t),t.marks.climbStart=c,t.marks.climbEnd=l,t.modes=[{s0:t.s0,s1:l+s*.3,mode:`shaft`,w:Math.PI*tt,tube:tt,wrap:!0},{s0:l+s*.3,s1:t.s1,mode:`run`,w:St.crest}],this.golden=this.wrapX(this.golden),this.addAnchor(t,c+3,this.golden),this.fill(t,c+6,l-11,`shaft`),this.golden=0,this.nextRowS=Math.max(this.nextRowS,t.s1+8),t}bridge(){let e=this.rng,t=this.begin(`bridge`,e.chance(.5)?`rope`:`plank`),n=this.path.yaw,r=this.path.pitch,i=e.range(50,80);return this.path.append(i,(e,t)=>{t.yaw=n,t.pitch=D(r,0,O(0,4,e))}),this.end(t),t.marks.deckStart=t.s0+3,t.marks.deckEnd=t.s1-3,t.modes=[{s0:t.s0,s1:t.s1,mode:`run`,w:St.bridge}],this.golden=T(this.golden,-.9,.9),this.addAnchor(t,t.s0+1.5,this.golden),this.fill(t,t.s0+11,t.s1-8,`bridge`),t}summit(){let e=this.begin(`summit`,``),t=this.path.yaw,n=this.path.pitch;this.path.append(46,(e,r)=>{r.yaw=t,r.pitch=D(n,0,O(0,4,e))}),this.end(e),e.marks.flag=e.s0+16,e.marks.launch=e.s1-2,e.modes=[{s0:e.s0,s1:e.s1,mode:`run`,w:St.summit}];for(let t=0;t<5;t++)for(let n of[-2,0,2])this.addItem(e,`crystal`,e.s0+8+t*2.6,n,.9+Math.sin(t/4*Math.PI)*.6);return this.golden=0,this.nextRowS=e.s1+30,e}glide(){let e=this.rng,t=this.begin(`glide`,``),n=this.path.yaw,r=e.range(240,290),i=this.nextYaw(.3),a=Math.asin(Math.min(.3,38/(r-11)));return this.path.append(r,(e,t)=>{let o=e/r;t.yaw=D(n,i,k(0,1,o));let s=O(0,10,e)*(1-O(r-22,r-4,e));t.pitch=-a*s*(1+.25*Math.sin(o*Math.PI*3))}),this.end(t),t.marks.launch=t.s0,t.marks.land=t.s1-10,t.modes=[{s0:t.s0,s1:t.s1-10,mode:`glide`,w:St.glide},{s0:t.s1-10,s1:t.s1,mode:`run`,w:St.meadow}],this.golden=0,this.nextRowS=t.s0+40,this.fill(t,t.s0+40,t.s1-60,`glide`),this.golden=0,this.nextRowS=t.s1+40,t}wrapX(e){return e-Math.round(e/Ct)*Ct}addOb(e,t,n,r,i,a){let o=bt[t],s=xt[t],c={id:this.obIds++,kind:t,clear:o.clear,s:n,depth:o.depth,x:r,w:i,hTop:o.hTop??0,vs:0,trigger:-1/0,moving:!!s,state:+!s,seed:this.rng.next()*1e9|0,pieceId:e.id,amp:0,freq:0,phase:0,x0:r,age:0,tutorial:a};if(s){let t=this.modeAtBuild(e,n),r=this.speedAt(n,t);c.vs=s.vs,c.trigger=n-r*s.lead,c.s=n-s.vs*s.lead}return e.obstacles.push(c),c}modeAtBuild(e,t){for(let n of e.modes)if(t>=n.s0&&t<n.s1)return n.mode;return e.modes[0]?.mode??`run`}addItem(e,t,n,r,i){let a={id:this.itemIds++,kind:t,s:n,x:r,h:i,taken:!1,pieceId:e.id,pull:0};return e.items.push(a),a}addAnchor(e,t,n,r=!1){let i={id:this.anchorIds++,s:t,x:n,clipped:!1,pieceId:e.id,tutorial:r};return e.anchors.push(i),this.lastAnchorS=t,i}crystalTrail(e,t,n,r,i,a,o=2.3,s=12){let c=Math.min(s,Math.floor((r-t)/o));if(c<2)return;let l=t+(r-t-(c-1)*o)/2;for(let s=0;s<c;s++){let c=l+s*o,u=O(t,r,c);this.addItem(e,`crystal`,c,D(n,i,u),a)}}tutorialTrail(e){let t=e.s0;this.golden=0,this.crystalTrail(e,t+6,0,t+34,0,.9),this.crystalTrail(e,t+40,0,t+76,-2.1,.9),this.addOb(e,`boulder`,t+84,.3,1.25,`steer`),this.crystalTrail(e,t+90,-2.1,t+112,0,.9),this.addOb(e,`log`,t+132,0,4.2,`leap`);for(let n of[-1.6,0,1.6])for(let r=0;r<4;r++)this.addItem(e,`crystal`,t+128+r*2.4,n,.9+Math.sin((r+.5)/4*Math.PI)*1.1);this.crystalTrail(e,t+146,0,t+170,1.6,.9),this.addAnchor(e,t+178,1.6,!0),this.addOb(e,`crevasse`,t+210,0,4.4);for(let n=0;n<4;n++)this.addItem(e,`crystal`,t+206+n*2.4,0,.95+Math.sin((n+.5)/4*Math.PI)*1.05);this.crystalTrail(e,t+220,0,t+246,0,.9),this.nextRowS=e.s1+8,this.golden=0}tutorialWall(e,t,n){this.crystalTrail(e,t+5,0,t+14,1.5,.9),this.addOb(e,`rockfall`,t+22,-1.4,.75,`rockfall`),this.crystalTrail(e,t+16,1.5,t+26,1.5,.9,2.2),this.addOb(e,`slab`,t+34,0,4.3,`climb`);for(let n=0;n<3;n++)this.addItem(e,`crystal`,t+32+n*2.2,1.5,1.1);this.crystalTrail(e,t+37,1.5,n-1,0,.9,2.2),this.golden=0,this.nextRowS=n+12}fill(e,t,n,r){let i=this.rng,a=r===`bridge`?`run`:r,o=this.spanOf(e,(t+n)/2)??e.modes[0],s=!!o.wrap,c=r===`bridge`?.55:a===`glide`?1.2:a===`slide`?.7:.6,l=o.w,u=s?1/0:Math.max(.3,o.w-c),d=Math.max(t,this.nextRowS),f=t-6,p=this.golden=s?this.wrapX(this.golden):T(this.golden,-u,u),m=0,h=a===`climb`||a===`shaft`?i.range(40,60):i.range(80,120);for(;m++<220;){let o=this.speedAt(d,a),c=this.path.heightAt(d),m=this.difficultyAt(c);if(this.rowsSinceBreather>6&&i.chance(.3)&&(this.rowsSinceBreather=0,d+=o*i.range(1.5,2.2)),d-this.lastAnchorS>h&&d-f>9&&a!==`glide`&&a!==`slide`){let r=(f+d)/2;r>t-2&&r<n&&this.addAnchor(e,r,this.golden)}let g=(d-f)/o-it,_=Math.max(0,g)*rt;p=this.golden;let v={p:e,mode:a,kind:r,W:u,Wfull:l,wrap:s,d:m,v:o},y=this.golden+i.range(-1,1)*Math.min(_,s?5.5:u*1.4);s||(y=T(y,-u,u),Math.abs(y-this.golden)<.6&&_>1.6&&i.chance(.6)&&(y=T(this.golden+i.sign()*Math.min(_,1.2+i.next()*2),-u,u))),this.golden=y;let b=e.obstacles.length,x=this.makeRow(v,d);if(d+x.depth>n){e.obstacles.splice(b,e.obstacles.length-b),this.golden=p;break}if(this.rows++,this.rowsSinceBreather++,i.chance(.72)){let n=a===`glide`?.2:.9,r=Math.max(f+3,t-4);this.crystalTrail(e,r,p,d-x.depth/2-3,this.golden,n)}if(x.leap&&i.chance(.75))for(let t=0;t<4;t++)this.addItem(e,`crystal`,d-3.3+t*2.2,this.golden,.95+Math.sin((t+.5)/4*Math.PI)*1.05);if(m>.15&&i.chance(.07)&&a!==`glide`){let t=s?this.golden+i.sign()*2.4:T(this.golden+i.sign()*1.9,-u,u);this.addItem(e,`gem`,d+x.depth/2+o*.35,t,1)}if(d>this.nextPowerS&&a!==`glide`&&a!==`shaft`){let t=i.weighted({magnet:.55,shield:.45});this.addItem(e,t,d+x.depth/2+o*.45,this.golden,1),this.nextPowerS=d+i.range(420,700)}f=d+x.depth/2;let S=D(1.38,.68,m)*i.range(.95,1.35),C=x.leap?.3:0;d=f+o*(S+C)+i.range(0,2)}i.chance(.5)&&this.crystalTrail(e,f+4,this.golden,Math.min(n,f+30),this.golden,a===`glide`?.2:.9),this.nextRowS=Math.max(d,n+10)}spanOf(e,t){for(let n of e.modes)if(t>=n.s0&&t<n.s1)return n}gapW(e){return D(2.7,1.55,e)}blockSpan(e,t,n,r,i,a=0){let o=i-r;if(o<.3)return;let s=bt[t].maxW,c=Math.max(1,Math.ceil(o/(2*s))),l=o/c;for(let i=0;i<c;i++)this.addOb(e.p,t,n+(a?this.rng.range(-a,a):0),r+l*(i+.5),l/2)}blockRow(e,t,n,r,i=this.gapW(e.d)){let a=this.golden;if(e.wrap){let o=Ct-i,s=r===`both`?this.rng.int(2,3):1,c=Math.min(bt[t].maxW*2,o/s*.8);for(let r=0;r<s;r++){let l=(r+.5)/s,u=a+i/2+o*l,d=c/2,f=u-d,p=u+d;f<a+i/2||p>a+Ct-i/2||this.addOb(e.p,t,n,this.wrapX(u),d)}return}let o=-e.Wfull-.2,s=e.Wfull+.2,c=[o,a-i/2],l=[a+i/2,s],u=this.rng.sign();(r===`both`||u<0)&&this.blockSpan(e,t,n,c[0]+(r===`one`?0:this.rng.range(0,.6)),c[1]),(r===`both`||u>0)&&this.blockSpan(e,t,n,l[0],l[1]-(r===`one`?0:this.rng.range(0,.6)))}leapRow(e,t,n,r){let i=this.golden;if(e.wrap){let a=r?3.6:2.2;this.addOb(e.p,t,n,this.wrapX(i+this.rng.range(-.4,.4)),a);return}if(r){this.addOb(e.p,t,n,0,e.Wfull+.3);return}let a=Math.max(-e.Wfull-.3,i-this.rng.range(1.1,2.4)),o=Math.min(e.Wfull+.3,i+this.rng.range(1.1,2.4));this.addOb(e.p,t,n,(a+o)/2,(o-a)/2)}movingRow(e,t,n,r){let i=this.golden,a=bt[t].maxW*this.rng.range(.85,1),o=a+Qe.halfWidth+.75,s=[];for(let c=0;c<r*4&&s.length<r;c++){let r;if(e.wrap)r=this.wrapX(i+this.rng.sign()*this.rng.range(o,Ct/2));else{let t=-Math.min(e.Wfull-a*.5,e.W+.4),n=-t;if(r=this.rng.range(t,n),Math.abs(r-i)<o)continue}s.some(e=>Math.abs(e-r)<a*2.2)||(s.push(r),this.addOb(e.p,t,n+c*.3,r,a))}}makeRow(e,t){let n=this.rng,r=e.d,i=e.p.obstacles.length,a=_t(this.zone),o=a.flora===`frost`||a.flora===`glow`,s=2,c=!1,l=()=>({depth:s,leap:c,count:e.p.obstacles.length-i});switch(e.kind){case`bridge`:{let i=n.weighted({gap:1.3,swing:r>.05?1.1:.4,gapSwing:r>.4?.6:0});if((i===`gap`||i===`gapSwing`)&&(this.leapRow(e,`plankgap`,t,n.chance(.55)),c=!0,s=bt.plankgap.depth),i===`swing`||i===`gapSwing`){let n=i===`gapSwing`?t+9:t;this.swingLog(e,n),s=Math.max(s,n-t+1)}return l()}case`glide`:{let i=r>.35&&n.chance(.5)?2:1;if(this.movingRow(e,`bird`,t,i),n.chance(.55)){let n=this.golden;for(let r=0;r<8;r++){let i=r/8*Math.PI*2;this.addItem(e.p,`crystal`,t+10,n+Math.cos(i)*1.3,.25+Math.sin(i)*1.3)}}return s=1.5,l()}case`run`:switch(n.weighted({boulders:2.3-r,tight:r>.12?1.2+r:.3,log:1.05,crevasse:.85+(o?.4:0),roller:r>.1?.75+r*.6:0,slalom:r>.2?.7:0})){case`boulders`:this.blockRow(e,`boulder`,t,n.chance(.5)?`one`:`both`,this.gapW(r)+.6),s=bt.boulder.depth;break;case`tight`:this.blockRow(e,`boulder`,t,`both`),s=bt.boulder.depth;break;case`log`:this.leapRow(e,`log`,t,n.chance(.6)),c=!0,s=bt.log.depth;break;case`crevasse`:this.leapRow(e,`crevasse`,t,n.chance(.65)),c=!0,s=bt.crevasse.depth;break;case`roller`:this.movingRow(e,`roller`,t,r>.45&&n.chance(.5)?2:1),s=bt.roller.depth;break;case`slalom`:{let n=this.golden,i=this.gapW(r)/2+.95;n-i>-e.Wfull&&this.addOb(e.p,`boulder`,t,n-i,.95),n+i<e.Wfull&&this.addOb(e.p,`boulder`,t+6.5,n+i,.95),s=8;break}}return l();case`climb`:{let i=o&&n.chance(.55)?`icicle`:`roof`;switch(n.weighted({roofs:2.1-r*.6,tight:r>.15?1.1+r:.3,slab:1,rockfall:r>.05?1.25+r*.6:.3,eagle:r>.3?.55+r*.4:0})){case`roofs`:this.blockRow(e,i,t,n.chance(.5)?`one`:`both`,this.gapW(r)+.5),s=bt[i].depth;break;case`tight`:this.blockRow(e,i,t,`both`),s=bt[i].depth;break;case`slab`:this.leapRow(e,`slab`,t,n.chance(.5)),c=!0,s=bt.slab.depth;break;case`rockfall`:this.movingRow(e,`rockfall`,t,r>.4&&n.chance(.5)?2:1),s=bt.rockfall.depth;break;case`eagle`:this.movingRow(e,`eagle`,t,1),s=bt.eagle.depth}return l()}case`slide`:{let i=n.chance(.45)?`crystal`:`stalagmite`;switch(n.weighted({mites:2.2,tight:r>.1?1.2+r:.4,hole:.95})){case`mites`:this.blockRow(e,i,t,n.chance(.5)?`one`:`both`,this.gapW(r)+.7),s=bt[i].depth;break;case`tight`:this.blockRow(e,i,t,`both`),s=bt[i].depth;break;case`hole`:this.leapRow(e,`hole`,t,n.chance(.4)),c=!0,s=bt.hole.depth}return l()}case`shaft`:switch(n.weighted({spurs:2,slab:.9,drip:r>.08?1+r*.5:.3})){case`spurs`:this.blockRow(e,`spur`,t,n.chance(.6)?`both`:`one`),s=bt.spur.depth;break;case`slab`:this.leapRow(e,`slab`,t,n.chance(.5)),c=!0,s=bt.slab.depth;break;case`drip`:this.movingRow(e,`drip`,t,r>.35&&n.chance(.5)?2:1),s=bt.drip.depth}return l()}return l()}swingLog(e,t){let n=this.rng.sign(),r=Math.max(.4,e.Wfull-.65),i=this.addOb(e.p,`swinglog`,t,0,bt.swinglog.maxW),a=xt.swinglog.lead;i.amp=r,i.freq=2.5,i.phase=n*Math.PI/2-i.freq*a,i.x0=0,i.x=0,this.golden=-n*T(e.Wfull-.75,0,1)}};2*Qe.leapV/Qe.gravity;var Tt=()=>({time:0,distance:0,altitude:0,maxAltitude:0,crystals:0,gems:0,leaps:0,dynos:0,anchors:0,catches:0,nearMisses:0,caves:0,walls:0,bridges:0,shafts:0,glides:0,summits:0,powerups:0,shieldSaves:0,revives:0,caveCrystals:0,zone:0,zoneCrystals:0,zoneFalls:0,zones:[],steer:0,startAltitude:0,cleanSummits:0}),Et={run:1.45,climb:1.15,slide:3.2,shaft:1.1,glide:6},Dt=class{s=13;sPrev=13;x=0;vx=0;tx=0;h=0;vh=0;air=!1;airT=0;speed=0;boost=0;mode=`run`;alive=!0;started=!1;invuln=0;shield=!1;magnet=0;roped=!1;anchor=null;caught=0;leapBuf=0;stepIndex=0;deathCause=null;killer=null;stumble=0;steerHeat=0;spring={x:0,v:0};get top(){return this.h+Qe.bodyH}},Ot=class{opts;path=new pt;gen;player=new Dt;events=[];stats=Tt();frame=lt();time=0;combo=0;comboT=0;pieceId=-1;tutorialShown=new Set;tutorialWait=null;tutorialDone=!1;taught=new Set;tutorialX=0;tutorialOb=null;tutorial;baseY=0;startZone;span;constructor(e){this.opts=e,this.tutorial=e.tutorial&&!e.startZone,this.startZone=e.startZone??0,this.gen=new wt(this.path,{seed:e.seed,tutorial:this.tutorial,startZone:e.startZone});for(let e of this.gen.pieces)this.events.push({t:`piece`,piece:e});this.ensure();let t=this.gen.pieces[0];this.player.s=this.player.sPrev=t.marks.start,this.path.frame(this.player.s,this.frame),this.baseY=0,this.stats.zone=this.startZone,this.stats.startAltitude=this.altitude,this.stats.maxAltitude=this.altitude,this.span=this.gen.spanAt(this.player.s)}ensure(){for(let e of this.gen.ensure(this.player.s+560))this.events.push({t:`piece`,piece:e});for(let e of this.gen.dropBefore(this.player.s-90))this.events.push({t:`unpiece`,piece:e});this.path.trim(this.player.s-90-40)}get altitude(){return this.frame.py-this.baseY}steer(e){let t=this.player;!t.alive||!t.started||t.caught>0||(t.tx+=e,this.clampTarget())}steerTo(e){let t=this.player;!t.alive||!t.started||t.caught>0||(t.tx=e,this.clampTarget())}leap(){let e=this.player;e.alive&&e.started&&(this.tryLeap()||(e.leapBuf=Qe.bufferTime))}bounds(){let e=this.span;return e.wrap?1/0:e.tube?e.w:Math.max(.2,e.w-Qe.halfWidth)}clampTarget(){let e=this.player,t=this.bounds();t!==1/0&&(e.tx=T(e.tx,-t,t))}tryLeap(){let e=this.player;if(e.mode===`glide`)return!0;if(e.caught>0||e.air)return!1;e.air=!0,e.airT=0;let t=e.mode===`climb`||e.mode===`shaft`;return e.vh=t?Qe.dynoV:Qe.leapV,t&&(e.boost=Qe.dynoBoost,this.stats.dynos++),this.stats.leaps++,this.events.push({t:`leap`,mode:e.mode}),(this.tutorialWait===`leap`||this.tutorialWait===`climb`)&&(this.praise(this.tutorialWait,this.tutorialOb?`o:${this.tutorialOb.id}`:this.tutorialWait),this.tutorialWait=null),!0}start(){this.player.started=!0,this.tutorial&&!this.tutorialShown.has(`crystals`)&&(this.tutorialShown.add(`crystals`),this.events.push({t:`tutorial`,step:`crystals`}))}update(e){let t=this.player;if(!t.started){this.path.frame(t.s,this.frame),this.span=this.gen.spanAt(t.s);return}this.time+=e,t.alive&&(this.stats.time+=e),this.span=this.gen.spanAt(t.s);let n=this.span.mode;if(n!==t.mode){let e=t.mode;if(t.mode=n,e===`shaft`){let e=Math.PI*2*tt,n=Math.round(t.x/e)*e;t.x-=n,t.tx-=n,t.spring.x=t.x}(n===`glide`||e===`glide`)&&(t.air=!1,t.h=0,t.vh=0),n===`glide`&&(t.anchor=null),this.events.push({t:`mode`,from:e,to:n});let r={slide:`cave`,shaft:`shaft`,glide:`glide`}[n];this.tutorial&&r&&!this.tutorialShown.has(`m:${n}`)&&(this.tutorialShown.add(`m:${n}`),this.events.push({t:`tutorial`,step:r}))}this.clampTarget();let r=t.alive?this.gen.speedAt(t.s,n)*(t.stumble>0?.84:1):0;if(t.caught>0?(t.caught-=e,r=0,t.speed=0,t.caught<=0&&(t.speed=this.gen.speedAt(t.s,n)*.55)):t.speed===0&&t.alive&&(t.speed=r*.55),t.speed+=(r-t.speed)*A(t.alive?2.6:6,e),t.boost=Math.max(0,t.boost-Qe.boostDecay*e*(t.air?.6:1.6)),n!==`climb`&&n!==`shaft`&&(t.boost=0),t.stumble=Math.max(0,t.stumble-e),t.sPrev=t.s,t.alive&&t.caught<=0&&(t.s+=(t.speed+t.boost)*e),this.stats.distance=t.s-this.gen.pieces[0].s0,this.span.wrap){let n=this.gen.pieceAt(t.s),r=n?.marks.climbEnd??0;if(n?.kind===`shaft`&&t.s>r-11){let n=Math.PI*2*tt,r=Math.round(t.x/n)*n;t.tx+=(r-t.tx)*A(3.2,e)}}let i=t.x;if(t.spring.x=t.x,t.spring.v=t.vx,j(t.spring,t.tx,Qe.steerOmega,1,e),t.x=t.spring.x,t.vx=t.spring.v,this.stats.steer+=Math.abs(t.x-i),t.steerHeat=Math.max(Math.abs(t.vx),t.steerHeat-e*8),t.air&&n!==`glide`&&(t.airT+=e,t.vh-=Qe.gravity*e,t.h+=t.vh*e,t.h<=0)){let e=t.vh<-12;t.h=0,t.vh=0,t.air=!1,this.events.push({t:`land`,mode:n,hard:e})}t.leapBuf>0&&(t.leapBuf-=e,this.tryLeap()&&(t.leapBuf=0)),t.invuln>0&&(t.invuln-=e),t.magnet>0&&(t.magnet-=e,t.magnet<=0&&(t.magnet=0,this.events.push({t:`powerEnd`,kind:`magnet`})));let a=Math.floor(t.s/Et[n]);a!==t.stepIndex&&(t.stepIndex=a,t.alive&&!t.air&&t.caught<=0&&this.events.push({t:`step`,mode:n,foot:a&1})),this.path.frame(t.s,this.frame);let o=this.altitude;this.stats.altitude=o,o>this.stats.maxAltitude&&(this.stats.maxAltitude=o);let s=this.gen.pieceAt(t.s);if(s&&s.id!==this.pieceId){let e=this.gen.pieces.find(e=>e.id===this.pieceId);this.pieceId=s.id,this.events.push({t:`enter`,piece:s}),e&&this.completed(e),this.tutorial&&s.kind===`bridge`&&!this.tutorialShown.has(`bridge`)&&(this.tutorialShown.add(`bridge`),this.events.push({t:`tutorial`,step:`bridge`})),s.kind===`trail`&&s.variant===`meadow`&&(this.stats.zone=s.zone,this.stats.zoneCrystals=0,this.stats.zoneFalls=0,this.events.push({t:`zone`,zone:s.zone}))}if(s&&s.kind===`summit`&&t.sPrev<s.marks.flag&&t.s>=s.marks.flag&&t.alive){this.stats.summits++;let e=this.stats.zoneFalls===0;e&&this.stats.cleanSummits++,this.stats.zones.push({zone:s.zone,crystals:this.stats.zoneCrystals,clean:e}),this.events.push({t:`summit`,zone:s.zone,piece:s,crystals:this.stats.zoneCrystals,clean:e}),this.inTutorial&&(this.tutorialDone=!0,this.events.push({t:`tutorialDone`}))}this.comboT>0&&(this.comboT-=e,this.comboT<=0&&(this.combo=0)),this.updateHazards(e),t.alive&&(this.clip(),this.collide(i),this.pickups(e)),this.ensure()}completed(e){let t=this.stats;e.kind===`cave`?t.caves++:e.kind===`wall`?t.walls++:e.kind===`bridge`?t.bridges++:e.kind===`shaft`?t.shafts++:e.kind===`glide`&&t.glides++}obX(e){return e.amp>0?e.state>=1?e.x0+e.amp*Math.sin(e.freq*e.age+e.phase):e.x0:e.x}updateHazards(e){let t=this.player;for(let n of this.gen.pieces){if(n.s0>t.s+160)break;if(!(n.s1<t.s-20)){for(let r of n.obstacles)r.moving&&(r.state===0&&t.s>=r.trigger&&t.alive&&(r.sInit??=r.s,r.state=1,r.age=0,this.events.push({t:`moving`,ob:r})),r.state>=1&&(r.age+=e,r.s+=r.vs*e,r.amp>0&&(r.x=this.obX(r)))),r.tutorial&&!this.tutorialShown.has(`o:${r.id}`)&&r.s-t.s<(r.moving?34:22)&&r.s>t.s&&r.state!==2&&(this.tutorialShown.add(`o:${r.id}`),this.tutorialWait=r.tutorial,this.tutorialX=t.x,this.tutorialOb=r,this.events.push({t:`tutorial`,step:r.tutorial,ob:r})),!r.passed&&r.s+r.depth/2<t.s-Qe.halfDepth&&r.state!==2&&(r.passed=!0,this.passedOb(r));for(let e of n.anchors)e.tutorial&&!e.clipped&&!this.tutorialShown.has(`a:${e.id}`)&&e.s-t.s<24&&e.s>t.s&&(this.tutorialShown.add(`a:${e.id}`),this.tutorialWait=`anchor`,this.tutorialOb=null,this.tutorialX=t.x,this.events.push({t:`tutorial`,step:`anchor`,anchor:e})),e.tutorial&&this.tutorialWait===`anchor`&&t.s>e.s+1&&(this.tutorialWait=null)}}let n=this.tutorialWait;(n===`steer`&&Math.abs(t.x-this.tutorialX)>1.1||n===`rockfall`&&this.tutorialOb&&Math.abs(ot(t.x,this.tutorialOb.x,this.span))>this.tutorialOb.w+1)&&(this.tutorialWait=null,this.praise(n,this.tutorialOb?`o:${this.tutorialOb.id}`:n)),n&&this.tutorialOb&&t.s>this.tutorialOb.s+2&&(this.tutorialWait=null)}passedOb(e){let t=this.player;if(!t.alive||(this.events.push({t:`passed`,ob:e}),e.tutorial&&this.tutorial&&this.praise(e.tutorial,`o:${e.id}`),e.clear!==`block`))return;let n=this.gen.spanAt(e.s),r=Math.abs(ot(t.x,e.x,n))-(e.w+Qe.halfWidth);r>-.05&&r<.42&&t.steerHeat>2.2&&(this.stats.nearMisses++,this.events.push({t:`near`,ob:e}))}clip(){let e=this.player;for(let t of this.gen.pieces){if(t.s0>e.s+4)break;if(!(t.s1<e.s-4))for(let n of t.anchors){if(n.clipped||n.s>e.s+.6||n.s<e.sPrev-.6||Math.abs(ot(e.x,n.x,this.span))>(n.tutorial?2.6:1.3))continue;n.clipped=!0;let t=!e.roped;e.roped=!0,e.anchor=n,this.stats.anchors++,n.tutorial&&(this.tutorialWait===`anchor`&&(this.tutorialWait=null),this.praise(`anchor`,`a:${n.id}`)),this.events.push({t:`clip`,anchor:n,fresh:t})}}}collide(e){let t=this.player;if(t.invuln>0||t.caught>0)return;let n=Qe.halfDepth,r=Math.min(t.sPrev,t.s)-n,i=t.s+n;for(let a of this.gen.pieces){if(a.s0>i+30)break;if(!(a.s1<r-30))for(let o of a.obstacles){if(o.state===2||o.moving&&o.state===0)continue;let a=o.s-o.depth/2,s=o.s+o.depth/2;if(s<r||a>i)continue;let c=this.span,l=ot(t.x,o.x,c),u=o.w+Qe.halfWidth-Qe.forgive;if(Math.abs(l)>=u)continue;let d=!1;switch(o.clear){case`block`:d=!0;break;case`jump`:d=t.h<o.hTop;break;case`gap`:d=!t.air&&t.h<=.02&&t.s>a+.5&&t.s<s-.45}if(d){if(o.clear===`block`){let r=ot(e,o.x,c);if(t.sPrev+n>a+.15&&t.sPrev-n<s&&Math.abs(r)>=u-.03){let e=Math.sign(r)||1;t.x=o.x-e*u,t.tx=t.x-e*.15,t.vx=-e*3,t.spring.x=t.x,t.spring.v=t.vx,t.stumble=.35,this.combo=0,this.events.push({t:`bump`,ob:o,dir:e});continue}}this.hit(o);return}}}}hit(e){let t=this.player;t.shield?(t.shield=!1,t.invuln=1.2,this.stats.shieldSaves++,e.clear===`gap`?(t.air=!0,t.vh=Qe.leapV):e.state=2,this.events.push({t:`shield`,ob:e})):t.roped?this.catchFall(e):this.die(e)}catchFall(e){let t=this.player;t.roped=!1;let n=t.anchor;t.caught=Qe.catchTime,t.invuln=Qe.invulnAfterCatch,t.leapBuf=0,t.boost=0,t.h=0,t.vh=0,t.air=!1,this.stats.catches++,this.inTutorial||this.stats.zoneFalls++,this.combo=0,e.clear===`gap`&&(t.s=t.sPrev=e.s+e.depth/2+.6),this.clearAround(t.s,4,28),this.events.push({t:`caught`,ob:e,cause:e.clear,mode:t.mode,anchor:n}),this.tutorial&&!this.tutorialShown.has(`caught`)&&(this.tutorialShown.add(`caught`),this.events.push({t:`tutorial`,step:`caught`}))}clearAround(e,t,n){for(let r of this.gen.pieces)if(!(r.s1<e-t-5)){if(r.s0>e+n+60)break;for(let i of r.obstacles){let r=i.s>e-t&&i.s<e+n,a=i.moving&&i.state===1&&i.s>e&&i.s<e+n+40;(r||a)&&(i.state=2)}}}die(e){let t=this.player;t.alive=!1,t.deathCause=e.clear,t.killer=e,t.leapBuf=0,this.combo=0,this.tutorialWait=null,this.events.push({t:`crash`,ob:e,cause:e.clear,mode:t.mode})}pickups(e){let t=this.player,n=t.h+.85,r=t.magnet>0?8.5:0;for(let i of this.gen.pieces){if(i.s0>t.s+20)break;if(!(i.s1<t.s-6))for(let a of i.items){if(a.taken)continue;let o=a.s-t.s;if(o>12||o<-3)continue;let s=ot(t.x,a.x,this.span);r>0&&(a.kind===`crystal`||a.kind===`gem`)&&(o*o+s*s<r*r||a.pull>0)&&(a.pull=Math.min(1,a.pull+e*3.2));let c=t.mode===`glide`;(Math.abs(o)<1.05+(t.speed+t.boost)*e&&Math.abs(s)<(c?1.55:1)&&Math.abs(a.h-n)<(c?1.7:1.25)||a.pull>=1)&&this.take(a,i)}}}take(e,t){let n=this.player;switch(e.taken=!0,e.kind){case`crystal`:this.stats.crystals++,this.stats.zoneCrystals++,(t.kind===`cave`||t.kind===`shaft`)&&this.stats.caveCrystals++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=.75,this.events.push({t:`crystal`,item:e,combo:this.combo});break;case`gem`:this.stats.gems++,this.stats.crystals+=10,this.stats.zoneCrystals+=10,this.events.push({t:`gem`,item:e});break;case`magnet`:n.magnet=11,this.stats.powerups++,this.events.push({t:`power`,kind:`magnet`,item:e});break;case`shield`:n.shield=!0,this.stats.powerups++,this.events.push({t:`power`,kind:`shield`,item:e})}}debugCrash(){if(!this.player.alive)return;let e={id:-1,kind:`boulder`,clear:`block`,s:this.player.s,depth:1,x:this.player.x,w:1,hTop:0,vs:0,trigger:0,moving:!1,state:1,seed:1,pieceId:-1,amp:0,freq:0,phase:0,x0:0,age:0};this.player.roped=!1,this.player.shield=!1,this.die(e)}revive(){let e=this.player,t=e.s;e.killer&&e.killer.id>=0&&(t=Math.max(t,e.killer.s+e.killer.depth/2+.8)),e.s=e.sPrev=t,this.clearAround(t,6,48),e.alive=!0,e.deathCause=null,e.killer=null,e.h=0,e.vh=0,e.air=!1,e.invuln=2.6,e.vx=0,e.spring.v=0,e.speed=this.gen.speedAt(e.s,e.mode)*.6,this.stats.revives++,this.stats.zoneFalls++}praise(e,t){this.taught.has(t)||(this.taught.add(t),this.events.push({t:`taught`,step:e}))}get inTutorial(){return this.tutorial&&!this.tutorialDone}retry(){let e=this.player,t=this.gen.spanAt(e.s),n=e.killer&&e.killer.id>=0?e.killer:null,r=Math.min(e.s,n?n.sInit??n.s:e.s)-15;n?.moving&&(r=Math.min(r,n.trigger-5));let i=Math.max(t.s0+1.5,this.gen.pieces[0].s0+2,r);for(let t of this.gen.pieces)if(!(t.s1<i-2)){if(t.s0>e.s+80)break;for(let e of t.obstacles)e.moving&&e.state===1&&((e.sInit??e.s)>i||e.trigger>=i-1)&&(e.state=0,e.age=0,e.sInit!==void 0&&(e.s=e.sInit),e.amp>0&&(e.x=e.x0)),(e.sInit??e.s)>i&&(e.passed=!1,this.tutorialShown.delete(`o:${e.id}`),this.taught.delete(`o:${e.id}`));for(let e of t.anchors)e.s>i&&!e.clipped&&this.tutorialShown.delete(`a:${e.id}`)}e.s=e.sPrev=i,e.alive=!0,e.deathCause=null,e.killer=null,e.h=0,e.vh=0,e.air=!1,e.airT=0,e.vx=0,e.spring.v=0,e.leapBuf=0,e.boost=0,e.caught=0,e.stumble=0,e.invuln=.3,e.speed=this.gen.speedAt(i,e.mode)*.7,this.tutorialWait=null,this.tutorialOb=null,this.span=this.gen.spanAt(i),this.path.frame(e.s,this.frame)}get zone(){return this.stats.zone}get summitAt(){return _t(this.stats.zone).summitAt}},kt=[{text:`Pine trails in first light, your first cliffs and your first ice cave. The gentlest climb on the mountain.`,features:[`Pine trails`,`First walls`,`Ice caves`]},{text:`Red rock at golden hour, dust on the wind and rope bridges strung across the gorge.`,features:[`Rope bridges`,`Sandstone walls`,`Rolling rocks`]},{text:`The mountain glows from within: more ice caves than anywhere, lit by crystal from below.`,features:[`Ice caves`,`Crystal spires`,`Ice shafts`]},{text:`Ice walls and fresh snow under a violet dusk, with ice falling in the shafts.`,features:[`Ice walls`,`Snowfall`,`Eagles`]},{text:`Night climbs under living light. Eagles hunt the high walls and the trail glows at your feet.`,features:[`Night climb`,`Aurora`,`Eagles`]},{text:`Sunrise above a sea of clouds: long bridges, strong wind and the thinnest air yet.`,features:[`Cloud sea`,`Long bridges`,`High wind`]},{text:`Where the mountain meets the stars. Everything you have learned, all at once.`,features:[`Starfield`,`Steepest walls`,`Every hazard`]}],At=e=>kt[e<kt.length?e:[3,4,5,6][(e-kt.length)%4]],jt=e=>Math.max(5,Math.round(e/5)*5),Mt={climb:{perRun:!0,text:e=>`Climb ${e} m in one climb`,target:e=>jt(110+e*110),value:e=>e.maxAltitude-e.startAltitude},crystalsRun:{perRun:!0,text:e=>`Collect ${e} crystals in one climb`,target:e=>jt(40+e*28),value:e=>e.crystals},crystalsTotal:{perRun:!1,text:e=>`Collect ${e} crystals in total`,target:e=>jt(200+e*150),value:e=>e.crystals},leaps:{perRun:!0,text:e=>`Leap ${e} times in one climb`,target:e=>jt(8+e*5),value:e=>e.leaps},dynos:{perRun:!0,text:e=>`Dyno across ${e} blank slabs in one climb`,target:e=>Math.min(20,2+e),value:e=>e.dynos},anchors:{perRun:!0,text:e=>`Clip ${e} anchors in one climb`,target:e=>Math.min(40,4+e*2),value:e=>e.anchors},caves:{perRun:!0,text:e=>e===1?`Slide through an ice cave`:`Slide through ${e} ice caves in one climb`,target:e=>Math.min(6,1+Math.floor(e/2)),value:e=>e.caves},walls:{perRun:!0,text:e=>`Scale ${e} cliffs in one climb`,target:e=>Math.min(14,2+e),value:e=>e.walls},bridges:{perRun:!1,text:e=>`Cross ${e} rope bridges`,target:e=>Math.min(20,2+e),value:e=>e.bridges},shafts:{perRun:!1,text:e=>e===1?`Climb out of a shaft`:`Climb out of ${e} shafts`,target:e=>Math.min(10,1+Math.floor(e/2)),value:e=>e.shafts},near:{perRun:!0,text:e=>`Pull off ${e} close calls in one climb`,target:e=>Math.min(25,3+e*2),value:e=>e.nearMisses},power:{perRun:!1,text:e=>`Grab ${e} power-ups`,target:e=>Math.min(30,3+e*2),value:e=>e.powerups},summit:{perRun:!0,text:e=>e===1?`Reach a summit`:`Reach ${e} summits in one climb`,target:e=>Math.min(5,1+Math.floor(e/3)),value:e=>e.summits},clean:{perRun:!1,text:e=>e===1?`Reach a summit without a single fall`:`Reach ${e} summits without a fall`,target:e=>Math.min(6,1+Math.floor(e/3)),value:e=>e.cleanSummits,minRank:1},caveCrystals:{perRun:!0,text:e=>`Grab ${e} crystals inside caves in one climb`,target:e=>jt(15+e*8),value:e=>e.caveCrystals},runs:{perRun:!1,text:e=>`Start ${e} climbs`,target:e=>Math.min(15,3+e),value:()=>1}},Nt=Object.keys(Mt),Pt=e=>Mt[e.kind].text(e.target),Ft=(e,t,n)=>{let r=Nt.filter(t=>!n.includes(t)&&(Mt[t].minRank??0)<=e),i=r[(e*7+t*5+Math.floor(Math.random()*r.length))%r.length];return{kind:i,target:Mt[i].target(e),progress:0,done:!1,reward:40+e*20+t*10}},It=(e,t)=>{let n=[];for(let r of e){if(r.done)continue;let e=Mt[r.kind];if(!e.perRun)continue;let i=e.value(t);i>r.progress&&(r.progress=Math.min(r.target,i)),r.progress>=r.target&&(r.done=!0,n.push(r))}return n},Lt=(e,t)=>{let n=[];for(let r of e){if(r.done)continue;let e=Mt[r.kind],i=e.value(t);r.progress=e.perRun?Math.max(r.progress,Math.min(r.target,i)):Math.min(r.target,r.progress+i),r.progress>=r.target&&(r.done=!0,n.push(r))}return n},Rt=[`Rookie`,`Scrambler`,`Trailblazer`,`Crag Runner`,`Wall Walker`,`Ridge Racer`,`Alpinist`,`Summiteer`,`Sky Dancer`,`Peak Legend`,`Mountain Myth`],zt=e=>e<Rt.length?Rt[e]:`Mountain Myth ${e-Rt.length+2}`,Bt=`cliffbound.save.v1`,Vt=()=>({v:1,best:0,crystals:0,totalCrystals:0,runs:0,totalAltitude:0,summits:0,maxZone:0,climber:`pip`,owned:[`pip`],missions:[Ft(0,0,[]),Ft(0,1,[]),Ft(0,2,[])],rank:0,stars:0,daily:{date:``,best:0,streak:0,lastPlayed:``,claimed:``},settings:{sound:!0,haptics:!0,quality:`auto`,reminders:null,stats:!0},notify:{asked:0,lastAsk:``,times:[],lastRun:``},statsSent:{d:``,b:-1},tutorial:!1,seenZones:[0],reviewAsked:``,camp:0,zoneStars:{}}),Ht=async()=>{let e=await Ve.get(Bt),t=Vt();if(!e)return t;try{let n=JSON.parse(e);return{...t,...n,daily:{...t.daily,...n.daily??{}},settings:{...t.settings,...n.settings??{}},notify:{...t.notify,...n.notify??{},times:Array.isArray(n.notify?.times)?n.notify.times.filter(Number.isFinite).slice(-24):[]},statsSent:{...t.statsSent,...n.statsSent??{}},owned:Array.isArray(n.owned)&&n.owned.length?n.owned:t.owned,seenZones:Array.isArray(n.seenZones)?n.seenZones:t.seenZones,zoneStars:n.zoneStars&&typeof n.zoneStars==`object`?n.zoneStars:{},camp:Number.isFinite(n.camp)?Math.max(0,Math.min(n.camp,n.maxZone??0)):0,missions:Array.isArray(n.missions)&&n.missions.length===3&&n.missions.every(e=>e&&e.kind in Mt)?n.missions:t.missions}}catch{return t}},Ut=null,Wt=(e,t=!1)=>{Ut&&clearTimeout(Ut);let n=()=>void Ve.set(Bt,JSON.stringify(e));t?n():Ut=setTimeout(n,120)},Gt=(e,t)=>e.zoneStars[t]??[!1,!1,!1],Kt=()=>qt(Jt(new Date,-1)),qt=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,Jt=(e,t)=>{let n=new Date(e);return n.setDate(n.getDate()+t),n},Yt=`https://cliffbound-stats.mulhimfy.workers.dev`,Xt=25,Zt=2e4,Qt=e=>Math.floor(Math.min(Math.max(0,e),Zt)/Xt)*Xt,$t=(e,t)=>{if(!e.n)return 0;let n=Qt(t),r=0;for(let[t,i]of e.h)t<n&&(r+=i);return r/e.n},en=async(e,t={},n=4500)=>{let r=new AbortController,i=setTimeout(()=>r.abort(),n);try{return await fetch(e,{...t,signal:r.signal})}catch{return null}finally{clearTimeout(i)}},tn=e=>{let t=e;return!!t&&typeof t.d==`string`&&Number.isFinite(t.n)&&Number.isFinite(t.p50)&&Number.isFinite(t.p90)&&Array.isArray(t.h)},nn=async e=>{let t=await en(`${Yt}/v1/daily/${e}`);if(!t?.ok)return null;try{let n=await t.json();return tn(n)&&n.d===e?n:null}catch{return null}},rn=async(e,t,n)=>{let r=Math.max(0,Math.min(Zt,Math.floor(n))),i=Qt(r),a=e.statsSent;if(a.d===t&&a.b>=i)return!0;let o=a.d===t&&a.b>=0?{d:t,m:r,from:a.b}:{d:t,m:r};return(await en(`https://cliffbound-stats.mulhimfy.workers.dev/v1/daily`,{method:`POST`,headers:{"Content-Type":`text/plain`},body:JSON.stringify(o)}))?.ok?(e.statsSent={d:t,b:i},Wt(e),!0):!1},an=class{canvas;ctx;ps=[];dpr=1;running=!1;last=0;onArrive=null;constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.floor(window.innerWidth*this.dpr),this.canvas.height=Math.floor(window.innerHeight*this.dpr)}shards(e,t,n,r=14){for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,a=140+Math.random()*320;this.ps.push({x:e,y:t,vx:Math.cos(r)*a,vy:Math.sin(r)*a-60,life:0,max:.38+Math.random()*.3,size:4+Math.random()*7,rot:Math.random()*6,vr:(Math.random()-.5)*18,color:n[i%n.length],kind:0})}this.start()}confetti(e,t,n=80){let r=[`#ff6a2b`,`#ffc94d`,`#3ff6e1`,`#ff4d8d`,`#8a6bff`,`#ffffff`];for(let i=0;i<n;i++){let n=-Math.PI/2+(Math.random()-.5)*2.2,a=380+Math.random()*520;this.ps.push({x:e,y:t,vx:Math.cos(n)*a,vy:Math.sin(n)*a,life:0,max:1.6+Math.random()*1.2,size:5+Math.random()*6,rot:Math.random()*6,vr:(Math.random()-.5)*14,color:r[i%r.length],kind:1})}this.start()}fly(e,t,n,r,i=10){for(let a=0;a<i;a++){let i=Math.random()*Math.PI*2,o=120+Math.random()*220;this.ps.push({x:e,y:t,vx:Math.cos(i)*o,vy:Math.sin(i)*o,life:-a*.035,max:.9,size:7+Math.random()*4,rot:0,vr:0,color:`#3ff6e1`,kind:2,tx:n,ty:r})}this.start()}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}tick=e=>{let t=this.ctx;if(!t)return;let n=Math.min(.05,(e-this.last)/1e3);this.last=e,t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,this.canvas.width,this.canvas.height);for(let e=this.ps.length-1;e>=0;e--){let r=this.ps[e];if(r.life+=n,r.life<0)continue;let i=r.life/r.max;if(i>=1){r.kind===2&&this.onArrive?.(),this.ps.splice(e,1);continue}if(r.kind===2&&r.tx!==void 0&&r.ty!==void 0){let e=Math.min(1,i*i*2.2);r.vx*=.9,r.vy*=.9,r.x+=r.vx*n,r.y+=r.vy*n,r.x+=(r.tx-r.x)*e*.35,r.y+=(r.ty-r.y)*e*.35}else{let e=r.kind===1?2.2:3.5;r.vx*=Math.exp(-e*n),r.vy=r.vy*Math.exp(-e*n)+(r.kind===1?520:260)*n,r.x+=r.vx*n,r.y+=r.vy*n}r.rot+=r.vr*n;let a=r.kind===1?i>.7?(1-i)/.3:1:1-i*i;t.save(),t.globalAlpha=Math.max(0,a),t.translate(r.x,r.y),t.rotate(r.rot),t.fillStyle=r.color,r.kind===0?(t.beginPath(),t.moveTo(0,-r.size),t.lineTo(r.size*.55,r.size*.4),t.lineTo(-r.size*.45,r.size*.6),t.closePath(),t.shadowColor=r.color,t.shadowBlur=8,t.fill()):r.kind===1?(t.scale(1,Math.cos(r.rot*2)),t.fillRect(-r.size/2,-r.size/3,r.size,r.size*.66)):(t.beginPath(),t.moveTo(0,-r.size),t.lineTo(r.size*.62,0),t.lineTo(0,r.size),t.lineTo(-r.size*.62,0),t.closePath(),t.shadowColor=`#3ff6e1`,t.shadowBlur=12,t.fill()),t.restore()}this.ps.length?requestAnimationFrame(this.tick):(this.running=!1,t.clearRect(0,0,this.canvas.width,this.canvas.height))}},on=(e,t=``)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${t}>${e}</svg>`,I={play:`<svg viewBox="0 0 24 24"><path d="M7 4.8v14.4c0 .8.9 1.3 1.6.9l11.4-7.2c.6-.4.6-1.3 0-1.7L8.6 3.9C7.9 3.5 7 4 7 4.8z" fill="currentColor"/></svg>`,pause:on(`<rect x="6.5" y="5" width="3.5" height="14" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="5" width="3.5" height="14" rx="1.2" fill="currentColor" stroke="none"/>`),gear:on(`<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`),gem:`<svg viewBox="0 0 24 24"><defs><linearGradient id="gq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8fff7"/><stop offset=".5" stop-color="#3ff6e1"/><stop offset="1" stop-color="#14a9b8"/></linearGradient></defs><path d="M12 2.2 19.2 9 12 21.8 4.8 9z" fill="url(#gq)"/><path d="M12 2.2 9 9l3 12.8L15 9z" fill="#fff" opacity=".35"/><path d="M4.8 9h14.4" stroke="#fff" stroke-opacity=".55" stroke-width="1"/></svg>`,gemGold:`<svg viewBox="0 0 24 24"><defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".5" stop-color="#ffc94d"/><stop offset="1" stop-color="#d98a12"/></linearGradient></defs><path d="M12 2.2 19.2 9 12 21.8 4.8 9z" fill="url(#gg)"/><path d="M12 2.2 9 9l3 12.8L15 9z" fill="#fff" opacity=".35"/></svg>`,mountain:on(`<path d="m3 20 6.5-11 3.5 5.5L15.5 11 21 20z"/><path d="m8 11.6 1.5 1.4 1.5-1.2"/>`),flag:on(`<path d="M5 21V4"/><path d="M5 4h11l-2.2 3.5L16 11H5"/>`),target:on(`<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>`),calendar:on(`<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/><path d="m9.5 15 1.8 1.8 3.5-3.6"/>`),flame:`<svg viewBox="0 0 24 24"><path d="M12.6 2.5c.4 3-1.6 4.6-3 6.3C8 10.7 7 12.4 7 14.6 7 18 9.3 21 12.4 21c3.2 0 5.6-2.4 5.6-5.8 0-2.7-1.3-4.4-2.6-5.9-.3 1.3-1 2.3-2 2.6.6-3.6-.3-6.9-.8-9.4z" fill="#ff8a3d"/><path d="M12.3 12.6c-1.4 1.3-2.2 2.4-2.2 3.9 0 1.6 1 2.8 2.4 2.8s2.5-1.2 2.5-2.8c0-1.6-1-2.5-1.9-3.4-.1.6-.4 1-.8 1.1z" fill="#ffd27a"/></svg>`,user:on(`<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5c.9-3.6 3.9-5.6 7.5-5.6s6.6 2 7.5 5.6"/>`),climber:on(`<circle cx="14.5" cy="4.5" r="2"/><path d="m9 21 2.5-6 2.5 2 1 4"/><path d="m11.5 15 1-5 3 2.5 3.5-1"/><path d="m12.5 10-4 1.5L6 9"/>`),lock:on(`<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>`),check:on(`<path d="m5 12.5 4.5 4.5L19 7.5"/>`,`stroke-width="3"`),close:on(`<path d="M6 6l12 12M18 6 6 18"/>`),home:on(`<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>`),retry:on(`<path d="M20 11.5A8 8 0 1 1 17.7 6"/><path d="M20 4v5h-5"/>`),back:on(`<path d="M15 5 8 12l7 7"/>`),soundOn:on(`<path d="M4 9.5h3.5L12 5v14l-4.5-4.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>`),vibrate:on(`<rect x="7.5" y="3.5" width="9" height="17" rx="2"/><path d="M3.5 9v6M20.5 9v6"/>`),sparkle:on(`<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>`),star:`<svg viewBox="0 0 24 24"><path d="m12 2.8 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="currentColor"/></svg>`,trophy:on(`<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>`),shield:`<svg viewBox="0 0 24 24"><path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.4 7.5 10 4.3-1.6 7.5-5.4 7.5-10v-6z" fill="#59b8ff"/><path d="M12 2.5v19.5c4.3-1.6 7.5-5.4 7.5-10v-6z" fill="#fff" opacity=".22"/></svg>`,magnet:`<svg viewBox="0 0 24 24"><path d="M5 4h4.5v8a2.5 2.5 0 0 0 5 0V4H19v8a7 7 0 0 1-14 0z" fill="#ff4d6d"/><path d="M5 4h4.5v3.2H5zM14.5 4H19v3.2h-4.5z" fill="#eef2ff"/></svg>`,wings:`<svg viewBox="0 0 24 24"><path d="M2.5 11.5C6 7 10 5.5 12 5.5s6 1.5 9.5 6c-3-1.2-6.3-1.6-9.5-1.6s-6.5.4-9.5 1.6z" fill="#ffb02e"/><path d="M7 10.2 12 19l5-8.8" stroke="#ffd27a" stroke-width="1.2" fill="none"/><circle cx="12" cy="19" r="1.8" fill="#ff6a2b"/></svg>`,privacy:on(`<path d="M12 3 5 6v5.5c0 4.2 3 7.8 7 9.5 4-1.7 7-5.3 7-9.5V6z"/><path d="m9 12 2 2 4-4"/>`),info:on(`<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>`),hand:`<svg viewBox="0 0 64 64"><defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#dfe6ff"/></linearGradient></defs><circle cx="26" cy="13" r="10" fill="#fff" opacity=".22"/><circle cx="26" cy="13" r="5.5" fill="#fff" opacity=".5"/><path d="M22 13c0-2.2 1.8-4 4-4s4 1.8 4 4v15l2.2-1c1.8-.8 3.8.1 4.5 1.9l.2.6 2-.6c1.9-.5 3.8.6 4.3 2.5l1.6-.2c2-.2 3.7 1.2 3.9 3.2.3 4.7.1 10.4-2.4 14.4-2.3 3.6-6 5.4-11 5.4-6 0-9.3-2.4-12.2-6.8l-6.5-9.9c-1.2-1.8-.7-4.2 1.1-5.4 1.7-1.1 3.9-.8 5.2.7L22 37z" fill="url(#hg)" stroke="#0a1024" stroke-width="2.2" stroke-linejoin="round"/></svg>`,arrow:on(`<path d="M5 12h14M13 6l6 6-6 6"/>`),bell:on(`<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2.2H4.4z"/><path d="M10 21a2.2 2.2 0 0 0 4 0"/>`),chart:on(`<path d="M4 20.5h16"/><path d="M7.5 17v-4.5M12 17V7.5M16.5 17v-7"/>`),rope:on(`<path d="M9.5 4.5a4 4 0 0 1 5 0l3 2.6a2.6 2.6 0 0 1 0 3.9l-3 2.6a4 4 0 0 1-5 0l-3-2.6a2.6 2.6 0 0 1 0-3.9z"/><path d="M12 13.6V21"/><path d="M9 17.5c2 1.2 4 1.2 6 0"/>`)},sn=`<svg viewBox="0 0 140 140" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <linearGradient id="mk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb066"/><stop offset="1" stop-color="#ff4d1f"/></linearGradient>
  </defs>
  <path d="M14 112 58 34l20 34 12-20 36 64z" stroke="#f2f5ff" stroke-width="6"/>
  <path d="M58 34l-8 30 16-8 12 12" stroke="#c2cbea" stroke-width="4"/>
  <path d="M34 112c10-18 22-24 34-34s20-22 24-34" stroke="url(#mk)" stroke-width="6" stroke-dasharray="1 11"/>
  <circle class="sun" cx="104" cy="30" r="9" fill="url(#mk)"/>
</svg>`,cn=(e,t)=>{let n=new Float32Array(e*e),r=t,i=()=>(r=r*16807%2147483647)/2147483647,a=[];for(let e=0;e<9;e++)a.push([1+Math.floor(i()*4),1+Math.floor(i()*4),i()*Math.PI*2,.4+i()*.8]);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let i=0;for(let[n,o,s,c]of a)i+=Math.sin((r*n+t*o*(n%2?1:-1))/e*Math.PI*2+s)*c;n[t*e+r]=i}return n},ln=(e=256,t=14,n=7,r=`rgba(255,255,255,0.55)`)=>{let i=document.createElement(`canvas`);i.width=i.height=e;let a=i.getContext(`2d`);if(!a)return``;let o=cn(64,n),s=1/0,c=-1/0;for(let e of o)s=Math.min(s,e),c=Math.max(c,e);let l=e/64;a.strokeStyle=r,a.lineWidth=1;let u=(e,t)=>o[(t+64)%64*64+(e+64)%64];for(let e=1;e<t;e++){let n=s+(c-s)*e/t;a.globalAlpha=e%5==0?1:.55,a.beginPath();for(let e=0;e<64;e++)for(let t=0;t<64;t++){let r=u(t,e),i=u(t+1,e),o=u(t+1,e+1),s=u(t,e+1),c=[],d=(e,t,r,i,a,o)=>{if(e<n!=t<n){let s=(n-e)/(t-e);c.push([(r+(a-r)*s)*l,(i+(o-i)*s)*l])}};d(r,i,t,e,t+1,e),d(i,o,t+1,e,t+1,e+1),d(o,s,t+1,e+1,t,e+1),d(s,r,t,e+1,t,e);for(let e=0;e+1<c.length;e+=2)a.moveTo(c[e][0],c[e][1]),a.lineTo(c[e+1][0],c[e+1][1])}a.stroke()}return i.toDataURL(`image/png`)},un=[`crystals`,`steer`,`leap`,`anchor`,`rockfall`,`climb`,`cave`,`shaft`],dn=e=>e?e.n>=10?`${M(e.n)} climbers today · half reached ${M(e.p50)} m`:e.n>0?`Only a few climbers so far today: set the height to beat`:`Nobody has climbed it yet today: be the first`:``,fn=[`Reach the summit`,`Collect the crystals`,`No falls`],pn=(e,t=18,n=[])=>[0,1,2].map(r=>`<span class="star ${e[r]?`on`:``} ${n.includes(r)?`fresh`:``}" style="width:${t}px;height:${t}px">${I.star}</span>`).join(``),mn=e=>{let t=document.createElement(`template`);return t.innerHTML=e.trim(),t.content.firstElementChild},hn=(e,t,n,r,i=`rgba(255,255,255,0.14)`)=>{let a=2*Math.PI*e,o=(e+t)*2;return`<svg viewBox="0 0 ${o} ${o}"><circle cx="${o/2}" cy="${o/2}" r="${e}" stroke="${i}" stroke-width="${t}" fill="none"/><circle class="arc" cx="${o/2}" cy="${o/2}" r="${e}" stroke="${r}" stroke-width="${t}" fill="none" stroke-linecap="round" stroke-dasharray="${a}" stroke-dashoffset="${a*(1-n)}"/></svg>`},gn=class{on;root;fx;layer=null;overlay=null;hud=null;hudRefs={};lastAlt=-1;lastCrystals=-1;tapeBase=-1;hintEl=null;toastZone=null;reviveTimer=null;save;dailyStats=null;constructor(e,t,n){this.on=n,this.root=e,this.fx=new an(t),document.documentElement.style.setProperty(`--topo`,`url(${ln(320,16,11)})`),e.addEventListener(`pointerdown`,e=>this.press(e),{passive:!0}),e.addEventListener(`pointermove`,e=>this.glare(e),{passive:!0}),window.addEventListener(`resize`,()=>this.fx.resize())}press(e){let t=e.target.closest(`.btn, .tile, .icon-btn, .ccard, .row-item, .seg button, .chip, .rank`);if(t){if(F.tick(),t.classList.contains(`btn-primary`)||t.classList.contains(`btn-gold`)||t.classList.contains(`btn-crystal`)){let n=t.classList.contains(`btn-gold`)?[`#ffe39a`,`#ffc94d`,`#fff6d8`]:t.classList.contains(`btn-crystal`)?[`#9ffff1`,`#3ff6e1`,`#ffffff`]:[`#ffb066`,`#ff5a1f`,`#ffd27a`,`#ffffff`];this.fx.shards(e.clientX,e.clientY,n,16)}else(t.classList.contains(`tile`)||t.classList.contains(`btn-ghost`))&&this.fx.shards(e.clientX,e.clientY,[`#ffffff`,`#c2cbea`,`#3ff6e1`],8)}}glare(e){let t=e.target.closest(`.holo`);if(!t)return;let n=t.getBoundingClientRect();t.style.setProperty(`--mx`,`${(e.clientX-n.left)/n.width*100}%`),t.style.setProperty(`--my`,`${(e.clientY-n.top)/n.height*100}%`)}bind(e,t){e.querySelectorAll(`[data-act]`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=t[e.dataset.act];r&&r(e)})})}setLayer(e){if(this.layer){let e=this.layer;e.style.transition=`opacity .28s ease, transform .28s ease`,e.style.opacity=`0`,e.style.pointerEvents=`none`,setTimeout(()=>e.remove(),300)}this.layer=e,e&&this.root.appendChild(e)}setOverlay(e){if(this.overlay){let e=this.overlay;e.style.transition=`opacity .22s ease`,e.style.opacity=`0`,e.style.pointerEvents=`none`,setTimeout(()=>e.remove(),240)}this.overlay=e,e&&this.root.appendChild(e),this.layer?.classList.toggle(`under`,!!e&&e.dataset.keep!==`1`)}closeOverlay(){this.setOverlay(null)}get hasOverlay(){return!!this.overlay}static bootSplash(){let e=mn(`<div id="boot">
      <div class="mark">${sn.replace(`<svg`,`<svg class="mark"`)}</div>
      <div class="load"><div class="bar"><i style="transform:scaleX(.08)"></i></div></div>
      <div class="t-label dim">Charting the mountain</div>
    </div>`);return document.body.appendChild(e),e}static bootProgress(e,t){let n=e.querySelector(`.bar i`);n&&(n.style.transform=`scaleX(${Math.max(.08,Math.min(1,t))})`)}static bootDone(e){e.classList.add(`gone`),setTimeout(()=>e.remove(),800)}showHome(e,t=0){this.save=e,this.hud=null,this.setOverlay(null);let n=[0,1,2].map(t=>`<span style="color:${t<e.stars?`var(--gold)`:`rgba(255,255,255,.22)`}">${I.star}</span>`).join(``),r=e.missions.filter(e=>e.done).length,i=e.daily.streak,a=e.daily.lastPlayed!==new Date().toDateString()&&e.daily.claimed!==_n(),o=_t(t),s=e.maxZone>0||t>0?`<button class="campchip glass" data-act="map"><span class="t-label">Start at</span><b>Camp ${t+1} · ${o.name}</b><span class="alt-tag">${M(yt(t))} m</span>${I.arrow}</button>`:``,c=mn(`<div class="screen home">
      <div class="top stagger">
        <button class="rank" data-act="missions" aria-label="Missions and rank">
          <div class="ring">${hn(16,3,e.stars/3,`var(--gold)`)}<b>${e.rank+1}</b>${r?`<span class="dot"></span>`:``}</div>
          <div class="meta"><span class="name">${zt(e.rank)}</span><span class="stars">${n}<span class="mlabel">Missions</span></span></div>
        </button>
        <div class="spacer"></div>
        <div class="chip" data-act="climbers"><span class="gem">${I.gem}</span><span class="t-num" data-ref="cr">${M(e.crystals)}</span></div>
        <button class="icon-btn" data-act="settings" aria-label="Settings">${I.gear}</button>
      </div>
      <div class="logo-wrap">
        <div class="logo-kicker t-label"><i></i>Seven worlds · one mountain<i></i></div>
        <div class="logo"><span class="l1" data-text="${C.mark[0]}">${C.mark[0]}</span><span class="l2 accent" data-text="${C.mark[1]}">${C.mark[1]}</span></div>
        <div class="logo-sub">${C.tagline.map((e,t)=>t===1?`<b>${e}</b>`:e).join(` · `)}</div>
      </div>
      <div class="fill"></div>
      <div class="bottom">
        ${e.best>0?`<div class="best-line"><span class="t-label">Best</span><span class="t-num">${M(e.best)}</span><span class="unit">M</span></div>`:`<div class="best-line"><span class="t-label">Drag to steer · tap to leap</span></div>`}
        ${s}
        <button class="btn btn-primary btn-xl" data-act="play">${I.play}<span>Climb</span></button>
        <div class="nav-row">
          <button class="tile" data-act="climbers">${I.climber}<span class="t-label">Climbers</span></button>
          <button class="tile" data-act="map">${I.mountain}<span class="t-label">Worlds</span></button>
          <button class="tile" data-act="daily">${I.calendar}<span class="t-label">Daily</span>${i>0?`<span class="badge">${I.flame}${i}</span>`:a?`<span class="dot"></span>`:``}</button>
        </div>
      </div>
    </div>`);this.bind(c,{play:()=>this.on.play(),climbers:()=>this.showClimbers(),missions:()=>this.showMissions(),daily:()=>this.showDaily(),settings:()=>this.showSettings(),map:()=>this.showMap()}),this.setLayer(c)}refreshCrystals(e){this.root.querySelectorAll(`[data-ref="cr"]`).forEach(t=>t.textContent=M(e))}showHud(e,t=0){this.setOverlay(null);let n=mn(`<div class="screen hud passthrough">
      <div class="row">
        <div class="lefts">
          <button class="icon-btn tap" data-act="pause" aria-label="Pause">${I.pause}</button>
          <div class="rope" data-ref="rope"><span class="ic">${I.rope}</span><span class="t-label" data-ref="ropet">No rope</span></div>
        </div>
        <div class="chip" data-ref="chip"><span class="gem">${I.gem}</span><span class="t-num" data-ref="cr">0</span></div>
      </div>
      <div class="alt" data-ref="alt">
        <div class="val"><span class="t-num" data-ref="altv">0</span><span class="unit">M</span></div>
        <div class="next"><div class="bar"><i data-ref="nextbar"></i></div><span class="t-label" data-ref="nextlbl">Summit</span></div>
      </div>
      <div class="tape" data-ref="tape"><div class="ticks" data-ref="ticks"></div><div data-ref="lbls"></div><div class="bestmark" data-ref="bestmark"><span>Best</span></div><div class="now"></div></div>
      <div class="warns" data-ref="warns"><i data-l="-1"></i><i data-l="0"></i><i data-l="1"></i></div>
      <div class="powers" data-ref="powers"></div>
      <div class="toast-zone" data-ref="toasts"></div>
    </div>`);this.bind(n,{pause:()=>this.on.pause()}),this.hudRefs={},n.querySelectorAll(`[data-ref]`).forEach(e=>this.hudRefs[e.dataset.ref]=e),this.toastZone=this.hudRefs.toasts,this.hud=n,this.lastAlt=-1,this.lastCrystals=-1,this.tapeBase=-9999,this.setLayer(n),this.hudRefs.bestmark.style.display=e>0?`block`:`none`,this.lastRope=-1,this.setZone(t)}lastRope=-1;zoneNow=0;setZone(e){this.zoneNow=e}updateHud(e){if(!this.hud)return;let t=this.hudRefs,n=Math.max(0,Math.floor(e.altitude));if(n!==this.lastAlt){this.lastAlt=n,t.altv.textContent=M(n),t.alt.classList.toggle(`gold`,e.best>0&&e.altitude>e.best);let r=Math.max(1,e.nextSummit-e.zoneStart);t.nextbar.style.transform=`scaleX(${Math.max(0,Math.min(1,(e.altitude-e.zoneStart)/r))})`,t.nextlbl.textContent=n>=e.nextSummit?`Summit reached`:`Summit ${M(e.nextSummit)} m`}let r=e.caught?2:+!!e.roped;r!==this.lastRope&&(this.lastRope=r,t.rope.classList.toggle(`on`,r===1),t.rope.classList.toggle(`caught`,r===2),t.ropet.textContent=r===2?`Caught!`:r===1?`Clipped`:`No rope`,r===1&&(t.rope.classList.remove(`pop`),t.rope.offsetWidth,t.rope.classList.add(`pop`))),e.crystals!==this.lastCrystals&&(this.lastCrystals>=0&&(t.chip.classList.remove(`bump`),t.chip.offsetWidth,t.chip.classList.add(`bump`)),this.lastCrystals=e.crystals,t.cr.textContent=M(e.crystals));let i=.8,a=t.tape.clientHeight||300,o=e.altitude*i%40;t.ticks.style.transform=`translateY(${o}px)`;let s=Math.floor(e.altitude/50)*50;if(s!==this.tapeBase){this.tapeBase=s;let e=``;for(let t=-4;t<=4;t++){let n=s+t*50;n<0||(e+=`<div class="lbl" data-v="${n}">${n}</div>`)}t.lbls.innerHTML=e}let c=a/2;if(t.lbls.querySelectorAll(`.lbl`).forEach(t=>{let n=Number(t.dataset.v);t.style.top=`${c-(n-e.altitude)*i}px`}),e.best>0){let n=c-(e.best-e.altitude)*i;t.bestmark.style.top=`${Math.max(-20,Math.min(a+20,n))}px`}let l=[];e.magnet>0&&l.push([`magnet`,e.magnet/11,`#ff4d6d`]),e.shield&&l.push([`shield`,1,`#59b8ff`]);let u=l.map(e=>e[0]).join(`,`);t.powers.dataset.key!==u&&(t.powers.dataset.key=u,t.powers.innerHTML=l.map(([e,,t])=>`<div class="power" data-k="${e}">${hn(23,3,1,t)}<span class="ic">${I[e]}</span></div>`).join(``),t.powers.querySelectorAll(`.ic svg`).forEach(e=>e.classList.add(`ic`)));for(let[e,n]of l){let r=t.powers.querySelector(`[data-k="${e}"]`),i=r?.querySelector(`.arc`);if(i){let e=2*Math.PI*23;i.setAttribute(`stroke-dashoffset`,String(e*(1-n)))}r?.classList.toggle(`ending`,n<.22&&e!==`shield`)}}quiet=!1;callout(e,t=``){if(!this.toastZone||this.quiet)return;let n=mn(`<div class="callout ${t}">${e}</div>`);this.toastZone.appendChild(n),setTimeout(()=>n.remove(),1150)}banner(e,t,n){if(!this.hud)return;let r=mn(`<div class="banner"><div class="t-label">${e}</div><div class="name">${t}</div><div class="sub">${n}</div></div>`);this.hud.appendChild(r),setTimeout(()=>r.remove(),3500)}missionToast(e){if(!this.hud)return;let t=mn(`<div class="mtoast glass"><span class="ok">${I.check}</span><span class="txt"><span class="t-label">Mission complete</span><b>${Pt(e)}</b></span><span class="reward">+${e.reward}</span></div>`);this.hud.appendChild(t),setTimeout(()=>t.remove(),3100)}hint(e){if(this.hintEl?.remove(),this.hintEl=null,!e||!this.hud)return;let[t,n,r]={crystals:[`drag`,`Grab the crystals`,`they unlock new climbers`],steer:[`drag`,`Drag to steer`,`slide your thumb · go around the rock`],leap:[`tap`,`Tap to leap`,`over the fallen tree`],anchor:[`ring`,`Steer through the ring`,`it clips your rope · the rope catches one fall`],rockfall:[`drag`,`Falling rock!`,`steer out of its line`],climb:[`tap`,`Tap to dyno`,`leap across the blank slab`],cave:[`drag`,`Ride the ice`,`steer up the walls to dodge`],shaft:[`drag`,`Climb out of the shaft`,`drag to circle the walls · tap to leap`],caught:[`ring`,`Your rope caught you`,`clip the next ring to be safe again`],glide:[`drag`,`Glide to the next mountain`,`drag to steer · land on the meadow`],bridge:[`tap`,`Rope bridge`,`tap to leap the gaps in the planks`]}[e],i=un.indexOf(e),a=mn(`<div class="hint ${t}"><div class="pad">${t===`ring`?`<div class="ringv"><i></i><i></i></div>`:`<div class="hand">${I.hand}</div>${t===`drag`?`<div class="track"></div>`:`<div class="tapring"></div>`}`}</div><div class="cap">${i>=0?`<span class="t-label step">Tutorial · ${i+1}/${un.length}</span>`:``}${n}<small>${r}</small></div></div>`);this.hud.appendChild(a),this.hintEl=a,(e===`caught`||e===`cave`||e===`crystals`||e===`shaft`||e===`glide`||e===`bridge`)&&setTimeout(()=>this.hintEl===a&&this.hint(null),e===`crystals`?2600:3e3)}praise(){this.hint(null),this.callout(`Nice!`,`praise`)}warnMask=0;warn(e){this.hud&&e!==this.warnMask&&(this.warnMask=e,this.hudRefs.warns?.querySelectorAll(`i`).forEach(t=>t.classList.toggle(`on`,!!(e&1<<Number(t.dataset.l)+1))))}danger(e){let t=document.getElementById(`danger`);t&&(t.style.opacity=String(e))}showPause(e){let t=mn(`<div class="screen" data-keep="1">
      <div class="modal-bg"></div>
      <div class="center-col stagger">
        <div class="t-label">Paused</div>
        <div class="t-title" style="font-size:44px">Catch your<br>breath</div>
        <button class="btn btn-primary btn-xl" data-act="resume">${I.play}<span>Resume</span></button>
        <div class="actions" style="justify-content:center">
          <button class="btn btn-ghost" data-act="restart">${I.retry}<span>Restart</span></button>
          <button class="btn btn-ghost" data-act="home">${I.home}<span>Home</span></button>
        </div>
        <div class="actions" style="justify-content:center;gap:18px">
          <button class="icon-btn" data-act="snd" aria-label="Sound" style="opacity:${e.settings.sound?1:.4}">${I.soundOn}</button>
          <button class="icon-btn" data-act="hap" aria-label="Haptics" style="opacity:${e.settings.haptics?1:.4}">${I.vibrate}</button>
        </div>
      </div>
    </div>`);t.style.zIndex=`20`,this.bind(t,{resume:()=>this.on.resume(),restart:()=>this.on.restart(),home:()=>this.on.home(),snd:t=>{this.on.setSetting(`sound`,!e.settings.sound),t.style.opacity=e.settings.sound?`1`:`0.4`},hap:t=>{this.on.setSetting(`haptics`,!e.settings.haptics),t.style.opacity=e.settings.haptics?`1`:`0.4`}}),this.setOverlay(t)}showRevive(e,t,n,r){let i=2*Math.PI*52,a=mn(`<div class="screen revive" data-keep="1">
      <div class="modal-bg"></div>
      <div class="center-col stagger">
        <div class="t-label" style="color:var(--signal-hot)">${n}</div>
        <h3>Second wind?</h3>
        <div class="ring-wrap">${hn(52,6,1,`var(--crystal)`)}<span class="n t-num" data-ref="n">${r}</span></div>
        <button class="btn btn-crystal btn-xl" data-act="revive">${I.retry}<span>Continue</span><span style="display:inline-flex;align-items:center;gap:5px;font-size:18px">${I.gem.replace(`<svg`,`<svg style="width:20px;height:20px"`)}${e}</span></button>
        <div class="t-label dim">You have ${M(t)} crystals</div>
        <button class="linkish" data-act="skip">No thanks</button>
      </div>
    </div>`);a.style.zIndex=`20`,this.bind(a,{revive:()=>this.stopRevive(()=>this.on.revive()),skip:()=>this.stopRevive(()=>this.on.skipRevive())}),this.setOverlay(a);let o=a.querySelector(`.arc`),s=a.querySelector(`[data-ref="n"]`),c=performance.now(),l=()=>{let e=(performance.now()-c)/1e3,t=Math.max(0,1-e/r);o.setAttribute(`stroke-dashoffset`,String(i*(1-t)));let n=Math.ceil(r-e);s.textContent!==String(n)&&n>=0&&(s.textContent=String(Math.max(0,n)),this.on.sound(`tick`)),t<=0?this.stopRevive(()=>this.on.skipRevive()):this.reviveTimer=requestAnimationFrame(l)};this.reviveTimer=requestAnimationFrame(l)}stopRevive(e){this.reviveTimer!==null&&cancelAnimationFrame(this.reviveTimer),this.reviveTimer=null,e()}showResults(e){this.hud=null;let t=e.missions.map(e=>`<div class="mission ${e.done&&!e.justDone?`done`:``}" data-just="${+!!e.justDone}">
          <span class="chk">${I.check}</span>
          <span class="body"><b>${Pt(e)}</b><span class="bar"><i style="transform:scaleX(0)" data-f="${Math.min(1,e.progress/e.target)}"></i></span></span>
          <span class="rw">+${e.reward}${I.gem}</span>
        </div>`).join(``),n=e.best-e.altitude,r=mn(`<div class="screen results">
      <div class="modal-bg" style="background:radial-gradient(120% 80% at 50% 30%, rgba(6,9,24,.25), rgba(4,6,15,.86))"></div>
      <div class="center-col stagger" style="gap:14px">
        <div class="hero">
          <div class="t-label">${e.daily?`Daily climb · you reached`:`You reached`}</div>
          <div class="big"><span class="t-num" data-ref="big">0</span><span class="unit">M</span></div>
          ${e.newBest?`<div class="stamp">New best!</div>`:e.best>0?`<div class="togo">${n<=0?`Your best: <b>${M(e.best)} m</b>`:n<=60?`Only <b>${M(n)} m</b> short of your best!`:`Best <b>${M(e.best)} m</b>`}</div>`:``}
          ${e.rankUp?`<div class="stamp" style="background:linear-gradient(180deg,#b9fff4,#3ff6e1 60%,#12bfb4);transform:rotate(3deg)">Rank up · ${e.rankUp}</div>`:``}
        </div>
        <div class="stats">
          <div class="stat"><span class="t-num" style="color:var(--crystal)">+${M(e.crystals)}</span><span class="t-label">Crystals</span></div>
          <div class="stat"><span class="t-num">${e.summits}</span><span class="t-label">Summits</span></div>
          <div class="stat"><span class="t-num">${e.anchors}</span><span class="t-label">Anchors</span></div>
        </div>
        ${e.daily?`<div class="zonecard glass drank" data-ref="drank" hidden></div>`:`<div class="zonecard glass"><div class="zl"><span class="t-label">${e.newCamp>=0?`Camp ${e.newCamp+1} unlocked`:`World ${e.zone+1}`}</span><b>${e.zoneName}</b></div><div class="zs">${pn(e.zoneStars,22,e.newStars.find(t=>t.zone===e.zone)?.stars??[])}</div></div>`}
        <div class="missions">${t}</div>
        <div class="actions">
          <button class="icon-btn" data-act="home" aria-label="Home" style="width:64px;height:64px">${I.home}</button>
          <button class="btn btn-primary" data-act="again" style="height:68px">${I.retry}<span>Climb again</span></button>
        </div>
      </div>
    </div>`);this.bind(r,{home:()=>this.on.home(),again:()=>e.daily?this.on.daily():this.on.restart()}),this.setOverlay(null),this.setLayer(r);let i=r.querySelector(`[data-ref="big"]`),a=performance.now(),o=900+Math.min(900,e.altitude),s=()=>{let t=Math.min(1,(performance.now()-a)/o),n=1-(1-t)**4;if(i.textContent=M(e.altitude*n),t<1)requestAnimationFrame(s);else if(e.newBest){let e=i.getBoundingClientRect();this.fx.confetti(e.left+e.width/2,e.top+e.height/2,110),this.on.sound(`unlock`),F.success()}};requestAnimationFrame(s),setTimeout(()=>{r.querySelectorAll(`.mission`).forEach((e,t)=>{let n=e.querySelector(`i`);n.style.transform=`scaleX(${n.dataset.f})`,e.dataset.just===`1`&&setTimeout(()=>{e.classList.add(`done`);let t=e.getBoundingClientRect();this.fx.shards(t.right-30,t.top+t.height/2,[`#3dffb0`,`#3ff6e1`,`#ffffff`],18),this.on.sound(`buy`),F.medium()},900+t*260)})},500)}showClimbers(){let e=this.save;this.on.sound(`open`),this.on.cameraMode(`closeup`);let t=Math.max(0,Ye.findIndex(t=>t.id===e.climber)),n=t=>{let n=Xe(t),r=e.owned.includes(t),i=e.climber===t,a=[n.cloak,n.scarf,n.lens,n.jacket].map(e=>`<i style="background:#${e.toString(16).padStart(6,`0`)}"></i>`).join(``),o=i?`<button class="btn btn-ghost" disabled style="opacity:.75">${I.check}<span>Equipped</span></button>`:r?`<button class="btn btn-primary" data-act="equip" data-id="${t}"><span>Equip</span></button>`:`<button class="btn ${e.crystals>=n.price?`btn-crystal`:`btn-ghost`}" data-act="buy" data-id="${t}">${I.lock}<span>${M(n.price)}</span>${I.gem.replace(`<svg`,`<svg style="width:18px;height:18px"`)}</button>`;return`<div class="ccard glass holo" data-id="${t}">
        <div class="sw">${a}</div>
        <h3>${n.name}</h3>
        <p class="t-body">${n.tagline}</p>
        ${r?`<span class="owned">${I.check.replace(`<svg`,`<svg style="width:12px;height:12px"`)} Owned</span>`:`<span class="owned" style="color:var(--frost-3)">${I.lock.replace(`<svg`,`<svg style="width:12px;height:12px"`)} Locked</span>`}
        ${o}
      </div>`},r=mn(`<div class="screen">
      <div class="head-row stagger">
        <button class="icon-btn" data-act="back" aria-label="Back">${I.back}</button>
        <h2>Climbers</h2>
        <div class="chip"><span class="gem">${I.gem}</span><span class="t-num" data-ref="cr">${M(e.crystals)}</span></div>
      </div>
      <div class="sheet"><div class="carousel">${Ye.map(e=>n(e.id)).join(``)}</div></div>
    </div>`);r.style.zIndex=`15`;let i=r.querySelector(`.carousel`),a=()=>this.bind(r,{back:()=>{this.on.sound(`back`),this.on.closeClimbers(),this.on.cameraMode(`home`),this.setOverlay(null),this.showHome(this.save)},equip:e=>{this.on.selectClimber(e.dataset.id),this.on.sound(`toggle`),o(e.dataset.id)},buy:e=>{let t=e.dataset.id;if(this.on.buyClimber(t)){let n=e.getBoundingClientRect();this.fx.confetti(n.left+n.width/2,n.top,70),F.success(),o(t)}else e.animate([{transform:`translateX(0)`},{transform:`translateX(-8px)`},{transform:`translateX(8px)`},{transform:`translateX(0)`}],{duration:260}),F.warning()}}),o=e=>{i.querySelector(`[data-id="${e}"]`),Ye.forEach(e=>{let t=i.querySelector(`.ccard[data-id="${e.id}"]`),r=mn(n(e.id));t.classList.contains(`active`)&&r.classList.add(`active`),t.replaceWith(r)}),this.refreshCrystals(this.save.crystals),a()};a(),this.setOverlay(null),this.setLayer(r);let s=``,c=()=>{let e=i.scrollLeft+i.clientWidth/2,t=null,n=1/0;i.querySelectorAll(`.ccard`).forEach(r=>{let i=Math.abs(r.offsetLeft+r.offsetWidth/2-e);i<n&&(n=i,t=r)}),t&&t.dataset.id!==s&&(s=t.dataset.id,i.querySelectorAll(`.ccard`).forEach(e=>e.classList.toggle(`active`,e===t)),this.on.previewClimber(s),F.tick(),this.on.sound(`tick`))};i.addEventListener(`scroll`,c,{passive:!0}),requestAnimationFrame(()=>{let e=i.children[t];i.scrollLeft=e.offsetLeft+e.offsetWidth/2-i.clientWidth/2,c()})}showMissions(){let e=this.save;this.on.sound(`open`);let t=[0,1,2].map(t=>`<span style="color:${t<e.stars?`var(--gold)`:`rgba(255,255,255,.2)`};width:22px;height:22px;display:inline-block">${I.star}</span>`).join(``),n=e.missions.map(e=>`<div class="mission ${e.done?`done`:``}"><span class="chk">${I.check}</span><span class="body"><b>${Pt(e)}</b><span class="bar"><i style="transform:scaleX(${Math.min(1,e.progress/e.target)})"></i></span><span class="t-label dim">${M(e.progress)} / ${M(e.target)}</span></span><span class="rw">+${e.reward}${I.gem}</span></div>`).join(``),r=mn(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${I.back}</button>
        <h2>Missions</h2>
      </div>
      <div class="center-col stagger" style="justify-content:flex-start;margin-top:22px;gap:14px">
        <div class="glass topo holo panel" style="display:flex;align-items:center;gap:16px;text-align:left">
          <div class="rank" style="padding:0;background:none;box-shadow:none"><div class="ring" style="width:64px;height:64px">${hn(28,4,e.stars/3,`var(--gold)`)}<b style="font-size:24px">${e.rank+1}</b></div></div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <span class="t-label">Rank</span>
            <span class="t-title" style="font-size:24px">${zt(e.rank)}</span>
            <span class="stars" style="gap:4px">${t}</span>
          </div>
        </div>
        <div class="t-body" style="font-size:13.5px;max-width:330px">Each mission pays crystals and a star. Three stars rank you up — and the next missions get bolder.</div>
        <div class="missions">${n}</div>
        <button class="btn btn-primary" data-act="play" style="width:min(100%,400px)">${I.play}<span>Climb</span></button>
      </div>
    </div>`);r.style.zIndex=`15`,this.bind(r,{back:()=>{this.on.sound(`back`),this.setOverlay(null)},play:()=>{this.setOverlay(null),this.on.play()}}),this.setOverlay(r)}showDaily(){let e=this.save;this.on.sound(`open`);let t=new Date().toLocaleDateString(`en-US`,{month:`short`,day:`numeric`}),n=e.daily.date===_n(),r=Math.min(100,30+e.daily.streak*10),i=mn(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${I.back}</button>
        <h2>Daily climb</h2>
      </div>
      <div class="center-col stagger">
        <div class="glass topo holo panel" style="display:flex;flex-direction:column;gap:16px;align-items:center">
          <span class="t-label">${t} · same mountain for everyone</span>
          <div style="display:flex;align-items:center;gap:10px"><span style="width:44px;height:44px;display:inline-block">${I.flame}</span><span class="t-num" style="font-size:52px">${e.daily.streak}</span></div>
          <span class="t-label">Day streak</span>
          <div class="stats" style="width:100%;grid-template-columns:1fr 1fr">
            <div class="stat"><span class="t-num">${n?M(e.daily.best):`—`}</span><span class="t-label">Today's best</span></div>
            <div class="stat"><span class="t-num" style="color:var(--crystal)">+${r}</span><span class="t-label">${e.daily.claimed===_n()?`Claimed`:`First climb bonus`}</span></div>
          </div>
          <div class="dstats t-label" data-ref="dstats" ${dn(this.dailyStats)?``:`hidden`}>${I.chart}<span>${dn(this.dailyStats)}</span></div>
          <p class="t-body" style="margin:0;font-size:13.5px">One hand-picked mountain a day. Climb it every day to grow your streak and your bonus.</p>
        </div>
        <button class="btn btn-gold btn-xl" data-act="go">${I.play}<span>Start daily</span></button>
      </div>
    </div>`);i.style.zIndex=`15`,this.bind(i,{back:()=>{this.on.sound(`back`),this.setOverlay(null)},go:()=>{this.setOverlay(null),this.on.daily()}}),this.setOverlay(i)}showMap(){let e=this.save;this.on.sound(`open`);let t=Math.min(e.camp??0,e.maxZone),n=gt.map((n,r)=>{let i=r<=e.maxZone,a=Gt(e,r),o=n.palette,s=e=>`#${e.toString(16).padStart(6,`0`)}`,c=`background:linear-gradient(180deg, ${s(o.skyTop)} 0%, ${s(o.skyMid)} 55%, ${s(o.horizon)} 100%)`;return`<button class="world ${i?`open`:`locked`} ${r===t?`sel`:``}" data-act="pick" data-z="${r}">
        <span class="art" style="${c}"><svg viewBox="0 0 120 50" preserveAspectRatio="none"><path d="M0 50 L18 26 L28 33 L46 10 L60 28 L72 20 L90 36 L104 18 L120 32 L120 50 Z" fill="${s(o.far2)}"/><path d="M0 50 L24 34 L40 40 L58 22 L76 38 L96 30 L120 42 L120 50 Z" fill="${s(o.rockDark)}"/></svg></span>
        <span class="wtxt"><span class="t-label">Camp ${r+1} · ${M(yt(r))} m</span><b>${n.name}</b><span class="sub">${i?n.subtitle:`Reach the summit before it to unlock`}</span></span>
        <span class="wright">${i?`<span class="stars3">${pn(a,16)}</span>`:`<span class="lk">${I.lock}</span>`}</span>
      </button>`}).reverse().join(``),r=Object.values(e.zoneStars).reduce((e,t)=>e+t.filter(Boolean).length,0),i=mn(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${I.back}</button>
        <h2>Worlds</h2>
        <div class="chip"><span class="gem" style="color:var(--gold)">${I.star}</span><span class="t-num">${r}/${gt.length*3}</span></div>
      </div>
      <div class="center-col" style="justify-content:flex-start;margin-top:10px;gap:10px">
        <div class="t-body" style="font-size:13px;max-width:340px;text-align:center">Every summit unlocks a camp. Start from any camp you have reached. Each world has three stars: <b>${fn.join(` · `)}</b>.</div>
        <div class="worlds">${n}</div>
      </div>
    </div>`);i.style.zIndex=`15`,this.bind(i,{back:()=>{this.on.sound(`back`),this.setOverlay(null),this.showHome(this.save,Math.min(this.save.camp??0,this.save.maxZone))},pick:e=>{this.on.sound(`tap`),F.tick(),this.showWorld(Number(e.dataset.z))}}),this.setOverlay(i)}showWorld(e){let t=this.save,n=_t(e),r=At(e),i=e<=t.maxZone,a=e>0?_t(e-1):null,o=`art/world-${e<7?e:[3,4,5,6][(e-7)%4]}.jpg`,s=mn(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back to worlds">${I.back}</button>
        <h2>World ${String(e+1).padStart(2,`0`)}</h2>
      </div>
      <div class="center-col stagger" style="gap:14px">
        <div class="glass panel wsheet ${i?``:`locked`}">
          <div class="wart"><img src="${o}" alt="" />${i?``:`<span class="wlock">${I.lock}<b>Locked</b></span>`}</div>
          <span class="t-label">Camp ${e+1} · ${M(yt(e))}–${M(n.summitAt)} m</span>
          <h3>${n.name}</h3>
          <p class="t-body">${r.text}</p>
          <div class="wfeat">${r.features.map(e=>`<span>${e}</span>`).join(``)}</div>
          ${i?`<div class="wstars">${pn(Gt(t,e),20)}<span class="t-label">${Gt(t,e).filter(Boolean).length}/3 stars</span></div>`:`<p class="wneed">Reach the ${a?.name} summit at ${M(a?.summitAt??0)} m to unlock it</p>`}
        </div>
        ${i?`<button class="btn btn-primary btn-xl" data-act="go">${I.play}<span>Climb from Camp ${e+1}</span></button>`:`<button class="btn btn-ghost" data-act="back" style="width:min(100%,360px)">Back to worlds</button>`}
      </div>
    </div>`);s.style.zIndex=`16`,this.bind(s,{back:()=>{this.on.sound(`back`),this.showMap()},go:()=>{this.on.selectCamp(e),this.on.sound(`toggle`),F.medium(),this.setOverlay(null),this.showHome(this.save,e)}}),this.setOverlay(s)}showSettings(){let e=this.save;this.on.sound(`open`);let t=e.settings.quality,n=mn(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="head-row stagger" style="position:relative">
        <button class="icon-btn" data-act="back" aria-label="Back">${I.back}</button>
        <h2>Settings</h2>
      </div>
      <div class="center-col" style="justify-content:flex-start;margin-top:14px">
        <div class="glass panel topo" style="text-align:left">
          <div class="list">
            <button class="row-item" data-act="sound">${I.soundOn.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Sound</span><span class="switch ${e.settings.sound?`on`:``}"></span></button>
            <button class="row-item" data-act="haptics">${I.vibrate.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Vibration</span><span class="switch ${e.settings.haptics?`on`:``}"></span></button>
            <div class="row-item">${I.sparkle.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Graphics</span>
              <span class="seg">${[`battery`,`auto`,`high`].map(e=>`<button data-act="q" data-q="${e}" class="${t===e?`on`:``}">${e===`battery`?`Saver`:e===`auto`?`Auto`:`High`}</button>`).join(``)}</span>
            </div>
            ${(()=>{let e=this.on.reminderState();return e===`none`?``:`<button class="row-item" data-act="reminders">${I.bell.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Evening reminders<small>${e===`blocked`?`Allow notifications for Cliffbound in your phone settings`:`One a day at most, around 9 pm`}</small></span><span class="switch ${e===`on`?`on`:``}"></span></button>`})()}
            <button class="row-item" data-act="stats">${I.chart.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Daily climb stats<small>Share your daily height anonymously</small></span><span class="switch ${e.settings.stats?`on`:``}"></span></button>
            <button class="row-item" data-act="tutorial">${I.hand.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Replay the tutorial</span>${I.arrow.replace(`<svg`,`<svg style="width:18px;height:18px;opacity:.6"`)}</button>
            <button class="row-item" data-act="privacy">${I.privacy.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Privacy policy</span>${I.arrow.replace(`<svg`,`<svg style="width:18px;height:18px;opacity:.6"`)}</button>
            <button class="row-item" data-act="support">${I.info.replace(`<svg`,`<svg class="lead"`)}<span class="grow">Help &amp; support</span>${I.arrow.replace(`<svg`,`<svg style="width:18px;height:18px;opacity:.6"`)}</button>
            <button class="row-item" data-act="reset">${I.retry.replace(`<svg`,`<svg class="lead"`)}<span class="grow" style="color:var(--ember)">Reset progress</span></button>
          </div>
        </div>
        <div class="foot t-label dim" data-act="ver">${C.name} ${C.version} · No ads · No tracking · Plays offline</div>
      </div>
    </div>`);n.style.zIndex=`15`,this.bind(n,{back:()=>{this.on.sound(`back`),this.setOverlay(null)},sound:t=>{this.on.setSetting(`sound`,!e.settings.sound),t.querySelector(`.switch`).classList.toggle(`on`,e.settings.sound),this.on.sound(`toggle`)},haptics:t=>{this.on.setSetting(`haptics`,!e.settings.haptics),t.querySelector(`.switch`).classList.toggle(`on`,e.settings.haptics),this.on.sound(`toggle`),F.medium()},q:e=>{this.on.setSetting(`quality`,e.dataset.q),n.querySelectorAll(`.seg button`).forEach(t=>t.classList.toggle(`on`,t===e)),this.on.sound(`toggle`)},tutorial:()=>{this.on.sound(`toggle`),this.setOverlay(null),this.on.replayTutorial()},reminders:e=>{this.on.sound(`toggle`);let t=this.on.reminderState();this.on.setReminders(t!==`on`).then(t=>{e.querySelector(`.switch`).classList.toggle(`on`,t===`on`),e.querySelector(`small`).textContent=t===`blocked`?`Allow notifications for Cliffbound in your phone settings`:`One a day at most, around 9 pm`,t===`on`&&F.success()})},stats:t=>{this.on.setStats(!e.settings.stats),t.querySelector(`.switch`).classList.toggle(`on`,e.settings.stats),this.on.sound(`toggle`)},ver:e=>{let t=Number(e.dataset.n??0)+1;if(e.dataset.n=String(t),clearTimeout(Number(e.dataset.t??0)),e.dataset.t=String(setTimeout(()=>e.dataset.n=`0`,1500)),t<5)return;e.dataset.n=`0`;let n=e.textContent;this.on.previewReminder().then(t=>{e.textContent=t?`Sample reminder in 4 seconds: lock your phone`:`Turn on evening reminders first`,setTimeout(()=>e.textContent=n,3500)})},privacy:()=>this.on.openLink(C.privacyUrl),support:()=>this.on.openLink(C.supportUrl),reset:e=>{e.dataset.confirm===`1`?(this.on.resetProgress(),this.setOverlay(null)):(e.dataset.confirm=`1`,e.querySelector(`.grow`).textContent=`Tap again to erase everything`,this.on.sound(`error`),F.warning())}}),this.setOverlay(n)}setDailyStats(e){this.dailyStats=e;let t=this.root.querySelector(`[data-ref="dstats"]`);if(!t)return;let n=dn(e);t.hidden=!n,t.querySelector(`span`).textContent=n}dailyRank(e,t){let n=this.root.querySelector(`[data-ref="drank"]`);if(!n||!e||e.n<1)return;let r=`Today's daily`,i;if(e.n>=10){let n=Math.floor($t(e,t)*100);r=`Today's daily · ${M(e.n)} climbers`,i=n>=50?`Higher than ${n}% of them`:`Half of them reached ${M(e.p50)} m`}else i=e.n===1?`You are the first climber today`:`You are one of the first ${e.n} climbers`;n.innerHTML=`<div class="zl"><span class="t-label">${r}</span><b>${i}</b></div><div class="zs" style="color:var(--gold);width:26px;height:26px">${I.chart}</div>`,n.hidden=!1,n.animate([{opacity:0,transform:`translateY(8px)`},{opacity:1,transform:`none`}],{duration:420,easing:`cubic-bezier(.2,.8,.2,1)`})}offerReminders(e,t){this.on.sound(`open`);let n=new Date(2e3,0,1,21,0).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}),r=mn(`<div class="screen">
      <div class="modal-bg"></div>
      <div class="center-col stagger">
        <div class="glass topo holo panel offer">
          <span class="t-label">Evening reminders</span>
          <div class="nmock" aria-hidden="true">
            <div class="nm-head"><span class="nm-app">${I.mountain}</span><span>Cliffbound</span><span class="nm-time">${n}</span></div>
            <b>${e.title}</b>
            <span class="nm-body">${e.body}</span>
            <img src="${e.picture}" alt="" />
          </div>
          <p class="t-body" style="margin:0;font-size:13.5px">At most one a day, in the evening: a new daily climb, a streak about to break, a summit within reach. Switch them off any time in Settings.</p>
          <button class="btn btn-gold btn-xl" data-act="yes">${I.bell}<span>Turn on</span></button>
          <button class="btn btn-ghost" data-act="no" style="width:min(100%,360px)">Not now</button>
        </div>
      </div>
    </div>`);r.style.zIndex=`15`;let i=e=>{this.on.sound(e?`unlock`:`back`),this.setOverlay(null),t(e)};this.bind(r,{yes:()=>i(!0),no:()=>i(!1)}),this.setOverlay(r)}flash(e=.5,t=220){let n=document.getElementById(`flash`);n&&n.animate([{opacity:e},{opacity:0}],{duration:t,easing:`ease-out`})}},_n=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`},vn=`attached`,yn=1e3,bn=1001,xn=1002,Sn=1003,Cn=1004,wn=1005,Tn=1006,En=1007,Dn=1008,On=1009,kn=1010,An=1011,jn=1012,Mn=1013,Nn=1014,Pn=1015,Fn=1016,In=1017,Ln=1018,Rn=1020,zn=35902,Bn=35899,Vn=1021,Hn=1022,Un=1023,Wn=1026,Gn=1027,Kn=1028,qn=1029,Jn=1030,Yn=1031,Xn=1033,Zn=33776,Qn=33777,$n=33778,er=33779,tr=35840,nr=35841,rr=35842,ir=35843,ar=36196,or=37492,sr=37496,cr=37488,lr=37489,ur=37490,dr=37491,fr=37808,pr=37809,mr=37810,hr=37811,gr=37812,_r=37813,vr=37814,yr=37815,br=37816,xr=37817,Sr=37818,Cr=37819,wr=37820,Tr=37821,Er=36492,Dr=36494,Or=36495,kr=36283,Ar=36284,jr=36285,Mr=36286,Nr=2300,Pr=2301,Fr=2302,Ir=2303,Lr=2400,Rr=2401,zr=2402,Br=3200,Vr=`srgb`,Hr=`srgb-linear`,Ur=`linear`,Wr=`srgb`,Gr=7680,Kr=35044,qr=35048,Jr=2e3;function Yr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qr(){let e=Zr(`canvas`);return e.style.display=`block`,e}var $r={};function ei(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ti(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ti(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ti(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ni(...e){let t=e.join(` `);t in $r||($r[t]=!0,L(...e))}function ri(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ii={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},oi=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),si=Math.PI/180,ci=180/Math.PI;function li(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(oi[e&255]+oi[e>>8&255]+oi[e>>16&255]+oi[e>>24&255]+`-`+oi[t&255]+oi[t>>8&255]+`-`+oi[t>>16&15|64]+oi[t>>24&255]+`-`+oi[n&63|128]+oi[n>>8&255]+`-`+oi[n>>16&255]+oi[n>>24&255]+oi[r&255]+oi[r>>8&255]+oi[r>>16&255]+oi[r>>24&255]).toLowerCase()}function ui(e,t,n){return Math.max(t,Math.min(n,e))}function di(e,t){return(e%t+t)%t}function fi(e,t,n){return(1-n)*e+n*t}function pi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function mi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ui(this.x,e.x,t.x),this.y=ui(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ui(this.x,e,t),this.y=ui(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ui(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ui(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ui(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_i.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_i.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ui(this.x,e.x,t.x),this.y=ui(this.y,e.y,t.y),this.z=ui(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ui(this.x,e,t),this.y=ui(this.y,e,t),this.z=ui(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ui(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gi.copy(this).projectOnVector(e),this.sub(gi)}reflect(e){return this.sub(gi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ui(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gi=new B,_i=new hi,vi=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ni(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(yi.makeScale(e,t)),this}rotate(e){return ni(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(yi.makeRotation(-e)),this}translate(e,t){return ni(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(yi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yi=new vi,bi=new vi().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xi=new vi().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Si(){let e={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=wi(e.r),e.g=wi(e.g),e.b=wi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ti(e.r),e.g=Ti(e.g),e.b=Ti(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ur:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ni(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ni(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Hr]:{primaries:t,whitePoint:r,transfer:Ur,toXYZ:bi,fromXYZ:xi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vr},outputColorSpaceConfig:{drawingBufferColorSpace:Vr}},[Vr]:{primaries:t,whitePoint:r,transfer:Wr,toXYZ:bi,fromXYZ:xi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vr}}}),e}var Ci=Si();function wi(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ti(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ei,Di=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=Zr(`canvas`)),Ei.width=e.width,Ei.height=e.height;let t=Ei.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Zr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=wi(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(wi(t[e]/255)*255):t[e]=wi(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Oi=0,ki=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oi++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ai(r[t].image)):e.push(Ai(r[t]))}else e=Ai(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ai(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Di.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var ji=0,Mi=new B,Ni=class e extends ai{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=bn,i=bn,a=Tn,o=Dn,s=Un,c=On,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ji++}),this.uuid=li(),this.name=``,this.source=new ki(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mi).x}get height(){return this.source.getSize(Mi).y}get depth(){return this.source.getSize(Mi).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x-=Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case xn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y-=Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case xn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ni.DEFAULT_IMAGE=null,Ni.DEFAULT_MAPPING=300,Ni.DEFAULT_ANISOTROPY=1;var Pi=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ui(this.x,e.x,t.x),this.y=ui(this.y,e.y,t.y),this.z=ui(this.z,e.z,t.z),this.w=ui(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ui(this.x,e,t),this.y=ui(this.y,e,t),this.z=ui(this.z,e,t),this.w=ui(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ui(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fi=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pi(0,0,e,t),this.scissorTest=!1,this.viewport=new Pi(0,0,e,t),this.textures=[];let r=new Ni({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ki(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ii=class extends Fi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Li=class extends Ni{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ri=class extends Ni{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},V=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/zi.setFromMatrixColumn(e,0).length(),i=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vi,e,Hi)}lookAt(e,t,n){let r=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),Ui.crossVectors(n,Gi),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),Ui.crossVectors(n,Gi)),Ui.normalize(),Wi.crossVectors(Gi,Ui),r[0]=Ui.x,r[4]=Wi.x,r[8]=Gi.x,r[1]=Ui.y,r[5]=Wi.y,r[9]=Gi.y,r[2]=Ui.z,r[6]=Wi.z,r[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=zi.set(r[0],r[1],r[2]).length(),o=zi.set(r[4],r[5],r[6]).length(),s=zi.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Bi.copy(this);let c=1/a,l=1/o,u=1/s;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=l,Bi.elements[5]*=l,Bi.elements[6]*=l,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,t.setFromRotationMatrix(Bi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Jr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Jr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zi=new B,Bi=new V,Vi=new B(0,0,0),Hi=new B(1,1,1),Ui=new B,Wi=new B,Gi=new B,Ki=new V,qi=new hi,Ji=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ui(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ui(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ui(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ui(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ui(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ui(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ki.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ki,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qi.setFromEuler(this),this.setFromQuaternion(qi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER=`XYZ`;var Yi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Xi=0,Zi=new B,Qi=new hi,$i=new V,ea=new B,ta=new B,na=new B,ra=new hi,ia=new B(1,0,0),aa=new B(0,1,0),oa=new B(0,0,1),sa={type:`added`},ca={type:`removed`},la={type:`childadded`,child:null},ua={type:`childremoved`,child:null},da=class e extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xi++}),this.uuid=li(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Ji,r=new hi,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new V},normalMatrix:{value:new vi}}),this.matrix=new V,this.matrixWorld=new V,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(ia,e)}rotateY(e){return this.rotateOnAxis(aa,e)}rotateZ(e){return this.rotateOnAxis(oa,e)}translateOnAxis(e,t){return Zi.copy(e).applyQuaternion(this.quaternion),this.position.add(Zi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ia,e)}translateY(e){return this.translateOnAxis(aa,e)}translateZ(e){return this.translateOnAxis(oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ta,ea,this.up):$i.lookAt(ea,ta,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix($i),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sa),la.child=e,this.dispatchEvent(la),la.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ca),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sa),la.child=e,this.dispatchEvent(la),la.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,na),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,ra,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};da.DEFAULT_UP=new B(0,1,0),da.DEFAULT_MATRIX_AUTO_UPDATE=!0,da.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fa=class extends da{constructor(){super(),this.isGroup=!0,this.type=`Group`}},pa={type:`move`},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pa)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ha={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ga={h:0,s:0,l:0},_a={h:0,s:0,l:0};function va(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ci.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ci.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ci.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ci.workingColorSpace){if(e=di(e,1),t=ui(t,0,1),n=ui(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=va(i,r,e+1/3),this.g=va(i,r,e),this.b=va(i,r,e-1/3)}return Ci.colorSpaceToWorking(this,r),this}setStyle(e,t=Vr){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vr){let n=ha[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vr){return Ci.workingToColorSpace(ya.copy(this),e),Math.round(ui(ya.r*255,0,255))*65536+Math.round(ui(ya.g*255,0,255))*256+Math.round(ui(ya.b*255,0,255))}getHexString(e=Vr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ci.workingColorSpace){Ci.workingToColorSpace(ya.copy(this),t);let n=ya.r,r=ya.g,i=ya.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ci.workingColorSpace){return Ci.workingToColorSpace(ya.copy(this),t),e.r=ya.r,e.g=ya.g,e.b=ya.b,e}getStyle(e=Vr){Ci.workingToColorSpace(ya.copy(this),e);let t=ya.r,n=ya.g,r=ya.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ga),this.setHSL(ga.h+e,ga.s+t,ga.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ga),e.getHSL(_a);let n=fi(ga.h,_a.h,t),r=fi(ga.s,_a.s,t),i=fi(ga.l,_a.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ya=new H;H.NAMES=ha;var ba=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xa=class extends da{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sa=new B,Ca=new B,wa=new B,Ta=new B,Ea=new B,Da=new B,Oa=new B,ka=new B,Aa=new B,ja=new B,Ma=new Pi,Na=new Pi,Pa=new Pi,Fa=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sa.subVectors(e,t),r.cross(Sa);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Sa.subVectors(r,t),Ca.subVectors(n,t),wa.subVectors(e,t);let a=Sa.dot(Sa),o=Sa.dot(Ca),s=Sa.dot(wa),c=Ca.dot(Ca),l=Ca.dot(wa),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ta)!==null&&Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ta)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ta.x),s.addScaledVector(a,Ta.y),s.addScaledVector(o,Ta.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ma.setScalar(0),Na.setScalar(0),Pa.setScalar(0),Ma.fromBufferAttribute(e,t),Na.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ma,i.x),a.addScaledVector(Na,i.y),a.addScaledVector(Pa,i.z),a}static isFrontFacing(e,t,n,r){return Sa.subVectors(n,t),Ca.subVectors(e,t),Sa.cross(Ca).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sa.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Sa.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ea.subVectors(r,n),Da.subVectors(i,n),ka.subVectors(e,n);let s=Ea.dot(ka),c=Da.dot(ka);if(s<=0&&c<=0)return t.copy(n);Aa.subVectors(e,r);let l=Ea.dot(Aa),u=Da.dot(Aa);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ea,a);ja.subVectors(e,i);let f=Ea.dot(ja),p=Da.dot(ja);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Da,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Oa.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Oa,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ea,a).addScaledVector(Da,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ia=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ra.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ra.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ra.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ra):Ra.fromBufferAttribute(r,t),Ra.applyMatrix4(e.matrixWorld),this.expandByPoint(Ra);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ra),Ra.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),qa.subVectors(this.max,Ka),Ba.subVectors(e.a,Ka),Va.subVectors(e.b,Ka),Ha.subVectors(e.c,Ka),Ua.subVectors(Va,Ba),Wa.subVectors(Ha,Va),Ga.subVectors(Ba,Ha);let t=[0,-Ua.z,Ua.y,0,-Wa.z,Wa.y,0,-Ga.z,Ga.y,Ua.z,0,-Ua.x,Wa.z,0,-Wa.x,Ga.z,0,-Ga.x,-Ua.y,Ua.x,0,-Wa.y,Wa.x,0,-Ga.y,Ga.x,0];return!Xa(t,Ba,Va,Ha,qa)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Ba,Va,Ha,qa))?!1:(Ja.crossVectors(Ua,Wa),t=[Ja.x,Ja.y,Ja.z],Xa(t,Ba,Va,Ha,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ra).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ra).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},La=[new B,new B,new B,new B,new B,new B,new B,new B],Ra=new B,za=new Ia,Ba=new B,Va=new B,Ha=new B,Ua=new B,Wa=new B,Ga=new B,Ka=new B,qa=new B,Ja=new B,Ya=new B;function Xa(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ya.fromArray(e,a);let o=i.x*Math.abs(Ya.x)+i.y*Math.abs(Ya.y)+i.z*Math.abs(Ya.z),s=t.dot(Ya),c=n.dot(Ya),l=r.dot(Ya);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Za=new B,Qa=new z,$a=0,eo=class extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$a++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Kr,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXYZ(t,Za.x,Za.y,Za.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix4(e),this.setXYZ(t,Za.x,Za.y,Za.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyNormalMatrix(e),this.setXYZ(t,Za.x,Za.y,Za.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.transformDirection(e),this.setXYZ(t,Za.x,Za.y,Za.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),r=mi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),r=mi(r,this.array),i=mi(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},to=class extends eo{constructor(e,t,n){super(new Uint16Array(e),t,n)}},no=class extends eo{constructor(e,t,n){super(new Uint32Array(e),t,n)}},U=class extends eo{constructor(e,t,n){super(new Float32Array(e),t,n)}},ro=new Ia,io=new B,ao=new B,oo=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ro.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(io,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(ao)),this.expandByPoint(io.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},so=0,co=new V,lo=new da,uo=new B,fo=new Ia,po=new Ia,mo=new B,ho=class e extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:so++}),this.uuid=li(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Yr(e)?no:to)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new vi().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return co.makeRotationFromQuaternion(e),this.applyMatrix4(co),this}rotateX(e){return co.makeRotationX(e),this.applyMatrix4(co),this}rotateY(e){return co.makeRotationY(e),this.applyMatrix4(co),this}rotateZ(e){return co.makeRotationZ(e),this.applyMatrix4(co),this}translate(e,t,n){return co.makeTranslation(e,t,n),this.applyMatrix4(co),this}scale(e,t,n){return co.makeScale(e,t,n),this.applyMatrix4(co),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new U(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fo.setFromBufferAttribute(n),this.morphTargetsRelative?(mo.addVectors(this.boundingBox.min,fo.min),this.boundingBox.expandByPoint(mo),mo.addVectors(this.boundingBox.max,fo.max),this.boundingBox.expandByPoint(mo)):(this.boundingBox.expandByPoint(fo.min),this.boundingBox.expandByPoint(fo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(fo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];po.setFromBufferAttribute(n),this.morphTargetsRelative?(mo.addVectors(fo.min,po.min),fo.expandByPoint(mo),mo.addVectors(fo.max,po.max),fo.expandByPoint(mo)):(fo.expandByPoint(po.min),fo.expandByPoint(po.max))}fo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)mo.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(mo));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)mo.fromBufferAttribute(a,t),o&&(uo.fromBufferAttribute(e,t),mo.add(uo)),r=Math.max(r,n.distanceToSquared(mo))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new eo(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new eo(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mo.fromBufferAttribute(e,t),mo.normalize(),e.setXYZ(t,mo.x,mo.y,mo.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new eo(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},go=new B,_o=new B,vo=new vi,yo=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=go.subVectors(n,t).cross(_o.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(go),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vo.getNormalMatrix(e),r=this.coplanarPoint(go).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bo=0,xo=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bo++}),this.uuid=li(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new yo().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},So=new B,Co=new B,wo=new B,To=new B,Eo=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,So)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=So.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(So.copy(this.origin).addScaledVector(this.direction,t),So.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Co.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),To.copy(this.origin).sub(Co);let i=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=To.dot(this.direction),s=-To.dot(wo),c=To.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Co).addScaledVector(wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;So.subVectors(e.center,this.origin);let n=So.dot(this.direction),r=So.dot(So)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,So)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,ce=j-te*M,le=ee-ne*M,ue=ce*se-le*oe,de=ie*le-ae*ce,fe=oe*ae-se*ie;if(r){if(ue<0||de<0||fe<0)return null}else if((ue<0||de<0||fe<0)&&(ue>0||de>0||fe>0))return null;let pe=ue+de+fe;if(pe===0)return null;let me=re*(ue*D+de*A+fe*M);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Do=class extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oo=new V,ko=new Eo,Ao=new oo,jo=new B,Mo=new B,No=new B,Po=new B,Fo=new B,Io=new B,Lo=new B,Ro=new B,zo=class extends da{constructor(e=new ho,t=new Do){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Io.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Fo.fromBufferAttribute(s,e),a?Io.addScaledVector(Fo,r):Io.addScaledVector(Fo.sub(t),r))}t.add(Io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),ko.copy(e.ray).recast(e.near),!(Ao.containsPoint(ko.origin)===!1&&(ko.intersectSphere(Ao,jo)===null||ko.origin.distanceToSquared(jo)>(e.far-e.near)**2))&&(Oo.copy(i).invert(),ko.copy(e.ray).applyMatrix4(Oo),(n.boundingBox===null||ko.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ko)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Vo(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Vo(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Vo(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Vo(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Bo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ro.copy(s),Ro.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ro);return l<n.near||l>n.far?null:{distance:l,point:Ro.clone(),object:e}}function Vo(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Mo),e.getVertexPosition(c,No),e.getVertexPosition(l,Po);let u=Bo(e,t,n,r,Mo,No,Po,Lo);if(u){let e=new B;Fa.getBarycoord(Lo,Mo,No,Po,e),i&&(u.uv=Fa.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Fa.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Fa.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Fa.getNormal(Mo,No,Po,t.normal),u.face=t,u.barycoord=e}return u}var Ho=new Pi,Uo=new Pi,Wo=new Pi,Go=new Pi,Ko=new V,qo=new B,Jo=new oo,Yo=new V,Xo=new Eo,Zo=class extends zo{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=vn,this.bindMatrix=new V,this.bindMatrixInverse=new V,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ia),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oo),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(r),e.ray.intersectsSphere(Jo)!==!1&&(Yo.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(Yo),(this.boundingBox===null||Xo.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Xo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pi,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():L(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Uo.fromBufferAttribute(r.attributes.skinIndex,e),Wo.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ho.copy(t),t.set(0,0,0,0)):(Ho.set(...t,1),t.set(0,0,0)),Ho.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Wo.getComponent(e);if(r!==0){let i=Uo.getComponent(e);Ko.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Go.copy(Ho).applyMatrix4(Ko),r)}}return t.isVector4&&(t.w=Ho.w),t.applyMatrix4(this.bindMatrixInverse)}},Qo=class extends da{constructor(){super(),this.isBone=!0,this.type=`Bone`}},$o=class extends Ni{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Sn,l=Sn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},es=new V,ts=new V,ns=class e{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){L(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new V)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new V;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:ts;es.multiplyMatrices(i,t[r]),es.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $o(t,e,e,Un,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(L(`Skeleton: No bone found with UUID:`,r),i=new Qo),this.bones.push(i),this.boneInverses.push(new V().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},rs=class extends eo{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new V,as=new V,os=[],ss=new Ia,cs=new V,ls=new zo,us=new oo,ds=class extends zo{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,cs)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ia),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),ss.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(ss)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),us.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,is),as.multiplyMatrices(n,is),ls.matrixWorld=as,ls.raycast(e,os);for(let e=0,n=os.length;e<n;e++){let n=os[e];n.instanceId=i,n.object=this,t.push(n)}os.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(r*this.count),r,this.count,Kn,Pn));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new oo,ps=new z(.5,.5),ms=new B,hs=class{constructor(e=new yo,t=new yo,n=new yo,r=new yo,i=new yo,a=new yo){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476+ps.distanceTo(e.center),fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ms.x=r.normal.x>0?e.max.x:e.min.x,ms.y=r.normal.y>0?e.max.y:e.min.y,ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gs=class extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_s=new V,vs=new Eo,ys=new oo,bs=new B,xs=class extends da{constructor(e=new ho,t=new gs){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),ys.radius+=i,e.ray.intersectsSphere(ys)===!1)return;_s.copy(r).invert(),vs.copy(e.ray).applyMatrix4(_s);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);bs.fromBufferAttribute(l,n),Ss(bs,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)bs.fromBufferAttribute(l,a),Ss(bs,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ss(e,t,n,r,i,a,o){let s=vs.distanceSqToPoint(e);if(s<n){let n=new B;vs.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Cs=class extends Ni{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ws=class extends Ni{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ts=class extends Ni{constructor(e,t,n=Nn,r,i,a,o=Sn,s=Sn,c,l=Wn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ki(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Es=class extends Ts{constructor(e,t=Nn,n=301,r,i,a=Sn,o=Sn,s,c=Wn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ds=class extends Ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Os=class e extends ho{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ks=class e extends ho{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class e extends ks{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},js=class e extends ho{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new U(i,3)),this.setAttribute(`normal`,new U(i.slice(),3)),this.setAttribute(`uv`,new U(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ms=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new V;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ui(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ui(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ns=class extends Ms{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ps=class extends Ns{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Fs(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Is=new B,Ls=new B,Rs=new Fs,zs=new Fs,Bs=new Fs,Vs=class extends Ms{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ls.subVectors(r[0],r[1]).add(r[0]),c=Ls);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Is.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Is),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Rs.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),zs.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Bs.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Rs.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),zs.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Bs.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Rs.calc(s),zs.calc(s),Bs.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hs(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Us(e,t){let n=1-e;return n*n*t}function Ws(e,t){return 2*(1-e)*e*t}function Gs(e,t){return e*e*t}function Ks(e,t,n,r){return Us(e,t)+Ws(e,n)+Gs(e,r)}function qs(e,t){let n=1-e;return n*n*n*t}function Js(e,t){let n=1-e;return 3*n*n*e*t}function Ys(e,t){return 3*(1-e)*e*e*t}function Xs(e,t){return e*e*e*t}function Zs(e,t,n,r,i){return qs(e,t)+Js(e,n)+Ys(e,r)+Xs(e,i)}var Qs=class extends Ms{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,r.x,i.x,a.x,o.x),Zs(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$s=class extends Ms{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,r.x,i.x,a.x,o.x),Zs(e,r.y,i.y,a.y,o.y),Zs(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Ms{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Ms{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Ms{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ks(e,r.x,i.x,a.x),Ks(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends Ms{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ks(e,r.x,i.x,a.x),Ks(e,r.y,i.y,a.y),Ks(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=Object.freeze({__proto__:null,ArcCurve:Ps,CatmullRomCurve3:Vs,CubicBezierCurve:Qs,CubicBezierCurve3:$s,EllipseCurve:Ns,LineCurve:ec,LineCurve3:tc,QuadraticBezierCurve:nc,QuadraticBezierCurve3:rc,SplineCurve:class extends Ms{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Hs(o,s.x,c.x,l.x,u.x),Hs(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}}}),ac=class e extends js{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},oc=class e extends js{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},sc=class e extends ho{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},cc=class e extends ho{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},lc=class e extends ho{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},uc=class e extends ho{constructor(e=new rc(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ic[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function dc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(pc(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(pc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function fc(e){let t={};for(let n=0;n<e.length;n++){let r=dc(e[n]);for(let e in r)t[e]=r[e]}return t}function pc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function mc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function hc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ci.workingColorSpace}var gc={clone:dc,merge:fc},_c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yc=class extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_c,this.fragmentShader=vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dc(e.uniforms),this.uniformsGroups=mc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Pi().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new vi().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new V().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bc=class extends yc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},xc=class extends xo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new H(16777215),this.specular=new H(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sc=class extends xo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cc=class extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Br,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wc=class extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ec(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Dc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Oc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lr,endingEnd:Lr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rr:i=e,o=2*t-n;break;case zr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Rr:a=e,s=2*n-t;break;case zr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},kc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ac=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jc=class extends Dc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Pc(n,t,g,y,r);i[p]=Mc(x,o,_,b,m)}return i}};function Mc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Nc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Pc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Mc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Nc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Fc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Tc(t,this.TimeBufferType),this.values=Tc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ec(e.settings)&&(n.settings={inTangents:Tc(e.settings.inTangents,Array),outTangents:Tc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Pr:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break;case Ir:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ec(this.settings)&&(Ic(this.settings.inTangents,e),Ic(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xr(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ec(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ic(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Fc.prototype.ValueTypeName=``,Fc.prototype.TimeBufferType=Float32Array,Fc.prototype.ValueBufferType=Float32Array,Fc.prototype.DefaultInterpolation=Pr;var Lc=class extends Fc{constructor(e,t,n){super(e,t,n)}};Lc.prototype.ValueTypeName=`bool`,Lc.prototype.ValueBufferType=Array,Lc.prototype.DefaultInterpolation=Nr,Lc.prototype.InterpolantFactoryMethodLinear=void 0,Lc.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}};Rc.prototype.ValueTypeName=`color`;var zc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}};zc.prototype.ValueTypeName=`number`;var Bc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)hi.slerpFlat(i,0,a,c-o,a,c,s);return i}},Vc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};Vc.prototype.ValueTypeName=`quaternion`,Vc.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Fc{constructor(e,t,n){super(e,t,n)}};Hc.prototype.ValueTypeName=`string`,Hc.prototype.ValueBufferType=Array,Hc.prototype.DefaultInterpolation=Nr,Hc.prototype.InterpolantFactoryMethodLinear=void 0,Hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends Fc{constructor(e,t,n,r){super(e,t,n,r)}};Uc.prototype.ValueTypeName=`vector`;var Wc=class extends da{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gc=class extends Wc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(da.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kc=new V,qc=new B,Jc=new B,Yc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new V,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Pi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=new B,Zc=new hi,Qc=new B,$c=class extends da{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new V,this.projectionMatrix=new V,this.projectionMatrixInverse=new V,this.coordinateSystem=Jr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,Zc,Qc),Qc.x===1&&Qc.y===1&&Qc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Zc,Qc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xc,Zc,Qc),Qc.x===1&&Qc.y===1&&Qc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Zc,Qc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},el=new B,tl=new z,nl=new z,rl=class extends $c{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(si*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ci*2*Math.atan(Math.tan(si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){el.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(el.x,el.y).multiplyScalar(-e/el.z),el.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(el.x,el.y).multiplyScalar(-e/el.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(si*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},il=class extends Yc{constructor(){super(new rl(90,1,.5,500)),this.isPointLightShadow=!0}},al=class extends Wc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new il}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ol=class extends $c{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sl=class extends Yc{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cl=class extends Wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(da.DEFAULT_UP),this.updateMatrix(),this.target=new da,this.shadow=new sl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ll=class extends ho{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ul=-90,dl=1,fl=class extends da{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rl(ul,dl,e,t);r.layers=this.layers,this.add(r);let i=new rl(ul,dl,e,t);i.layers=this.layers,this.add(i);let a=new rl(ul,dl,e,t);a.layers=this.layers,this.add(a);let o=new rl(ul,dl,e,t);o.layers=this.layers,this.add(o);let s=new rl(ul,dl,e,t);s.layers=this.layers,this.add(s);let c=new rl(ul,dl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pl=class extends rl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ml=`\\[\\]\\.:\\/`,hl=RegExp(`[\\[\\]\\.:\\/]`,`g`),gl=`[^\\[\\]\\.:\\/]`,_l=`[^`+ml.replace(`\\.`,``)+`]`,vl=`((?:WC+[\\/:])*)`.replace(`WC`,gl),yl=`(WCOD+)?`.replace(`WCOD`,_l),bl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,gl),xl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,gl),Sl=RegExp(`^`+vl+yl+bl+xl+`$`),Cl=[`material`,`materials`,`bones`,`map`],wl=class{constructor(e,t,n){let r=n||Tl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(hl,``)}static parseTrackName(e){let t=Sl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Cl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tl.Composite=wl,Tl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Tl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Tl.prototype.GetterByBindingType=[Tl.prototype._getValue_direct,Tl.prototype._getValue_array,Tl.prototype._getValue_arrayElement,Tl.prototype._getValue_toArray],Tl.prototype.SetterByBindingTypeAndVersioning=[[Tl.prototype._setValue_direct,Tl.prototype._setValue_direct_setNeedsUpdate,Tl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tl.prototype._setValue_array,Tl.prototype._setValue_array_setNeedsUpdate,Tl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tl.prototype._setValue_arrayElement,Tl.prototype._setValue_arrayElement_setNeedsUpdate,Tl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tl.prototype._setValue_fromArray,Tl.prototype._setValue_fromArray_setNeedsUpdate,Tl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function El(e,t,n,r){let i=Dl(r);switch(n){case Vn:return e*t;case Kn:return e*t/i.components*i.byteLength;case qn:return e*t/i.components*i.byteLength;case Jn:return e*t*2/i.components*i.byteLength;case Yn:return e*t*2/i.components*i.byteLength;case Hn:return e*t*3/i.components*i.byteLength;case Un:return e*t*4/i.components*i.byteLength;case Xn:return e*t*4/i.components*i.byteLength;case Zn:case Qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $n:case er:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nr:case ir:return Math.max(e,16)*Math.max(t,8)/4;case tr:case rr:return Math.max(e,8)*Math.max(t,8)/2;case ar:case or:case cr:case lr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sr:case ur:case dr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pr:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case mr:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _r:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vr:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case yr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case br:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xr:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Sr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Cr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wr:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Tr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Er:case Dr:case Or:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kr:case Ar:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jr:case Mr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Dl(e){switch(e){case On:case kn:return{byteLength:1,components:1};case jn:case An:case Fn:return{byteLength:2,components:1};case In:case Ln:return{byteLength:2,components:4};case Nn:case Mn:case Pn:return{byteLength:4,components:1};case zn:case Bn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ol(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function kl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Al={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vi},alphaMap:{value:null},alphaMapTransform:{value:new vi},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vi}},envmap:{envMap:{value:null},envMapRotation:{value:new vi},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vi}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vi}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vi},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vi},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vi},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vi}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vi}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vi}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vi},alphaTest:{value:0},uvTransform:{value:new vi}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vi},alphaMap:{value:null},alphaMapTransform:{value:new vi},alphaTest:{value:0}}},jl={basic:{uniforms:fc([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:Al.meshbasic_vert,fragmentShader:Al.meshbasic_frag},lambert:{uniforms:fc([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Al.meshlambert_vert,fragmentShader:Al.meshlambert_frag},phong:{uniforms:fc([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Al.meshphong_vert,fragmentShader:Al.meshphong_frag},standard:{uniforms:fc([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Al.meshphysical_vert,fragmentShader:Al.meshphysical_frag},toon:{uniforms:fc([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:Al.meshtoon_vert,fragmentShader:Al.meshtoon_frag},matcap:{uniforms:fc([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:Al.meshmatcap_vert,fragmentShader:Al.meshmatcap_frag},points:{uniforms:fc([W.points,W.fog]),vertexShader:Al.points_vert,fragmentShader:Al.points_frag},dashed:{uniforms:fc([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Al.linedashed_vert,fragmentShader:Al.linedashed_frag},depth:{uniforms:fc([W.common,W.displacementmap]),vertexShader:Al.depth_vert,fragmentShader:Al.depth_frag},normal:{uniforms:fc([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:Al.meshnormal_vert,fragmentShader:Al.meshnormal_frag},sprite:{uniforms:fc([W.sprite,W.fog]),vertexShader:Al.sprite_vert,fragmentShader:Al.sprite_frag},background:{uniforms:{uvTransform:{value:new vi},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Al.background_vert,fragmentShader:Al.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vi}},vertexShader:Al.backgroundCube_vert,fragmentShader:Al.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Al.cube_vert,fragmentShader:Al.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Al.equirect_vert,fragmentShader:Al.equirect_frag},distance:{uniforms:fc([W.common,W.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Al.distance_vert,fragmentShader:Al.distance_frag},shadow:{uniforms:fc([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Al.shadow_vert,fragmentShader:Al.shadow_frag}};jl.physical={uniforms:fc([jl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vi},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vi},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vi},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vi},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vi},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vi},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vi},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vi},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vi},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vi},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vi},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vi}}]),vertexShader:Al.meshphysical_vert,fragmentShader:Al.meshphysical_frag};var Ml={r:0,b:0,g:0},Nl=new V,Pl=new vi;Pl.set(-1,0,0,0,1,0,0,0,1);function Fl(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new zo(new Os(1,1,1),new yc({name:`BackgroundCubeMaterial`,uniforms:dc(jl.backgroundCube.uniforms),vertexShader:jl.backgroundCube.vertexShader,fragmentShader:jl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pl),l.material.toneMapped=Ci.getTransfer(i.colorSpace)!==Wr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new zo(new sc(2,2),new yc({name:`BackgroundMaterial`,uniforms:dc(jl.background.uniforms),vertexShader:jl.background.vertexShader,fragmentShader:jl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ci.getTransfer(i.colorSpace)!==Wr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ml,hc(e)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Il(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ll(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Rl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function zl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new yo,s=new vi,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Bl=4,Vl=6,Hl=20,Ul=256,Wl=new ol,Gl=new H,Kl=null,ql=0,Jl=0,Yl=!1,Xl=new B,Zl=new B,Ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Xl}=i;Kl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kl,ql,Jl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Fn,format:Un,colorSpace:Hr,depthBuffer:!1},r=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$l(r)),this._blurMaterial=ru(r,e,t),this._ggxMaterial=nu(r,e,t)}return r}_compileMaterial(e){let t=new zo(new ho,e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,n,r,i){let a=new rl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Gl),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zo(new Os,new Do({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Gl),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;tu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;tu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Wl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Bl?n-d+Bl:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,tu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Wl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,tu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Wl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];tu(t,3*l*(r>this._lodMax-Bl?r-this._lodMax+Bl:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Wl)}};function $l(e){let t=[],n=[],r=e,i=e-Bl+1+Vl;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Zl.set(1,r,n):e===1?Zl.set(-n,1,-r):e===2?Zl.set(-n,r,1):e===3?Zl.set(-1,r,-n):e===4?Zl.set(-n,-1,r):Zl.set(n,r,-1),Zl.toArray(l,(e*6+t)*3)}}let u=new ho;u.setAttribute(`position`,new eo(c,3)),u.setAttribute(`outputDirection`,new eo(l,3)),n.push(new zo(u,null)),r>Bl&&r--}return{lodMeshes:n,sizeLods:t}}function eu(e,t,n){let r=new Ii(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function tu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function nu(e,t,n){return new yc({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ul,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ru(e,t,n){return new yc({name:`SphericalGaussianBlur`,defines:{SAMPLES:Hl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function iu(){return new yc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function au(){return new yc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var su=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Os(5,5,5),i=new yc({name:`CubemapFromEquirect`,uniforms:dc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new zo(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Tn),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function cu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new su(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ql(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ql(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function lu(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ni(`WebGLRenderer: `+e+` extension not supported.`),t}}}function uu(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?no:to)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function du(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function fu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function pu(e,t,n){let r=new WeakMap,i=new Pi;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Li(h,p,m,u);g.type=Pn,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function mu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var hu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function gu(e,t,n,r,i,a){let o=new Ii(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ho;l.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new U([0,2,0,0,2,0],2));let u=new bc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new zo(l,u),f=new ol(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Ii(t,n,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new Ii(t,n,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ci.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=hu[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var _u=new Ni,vu=new Ts(1,1),yu=new Li,bu=new Ri,xu=new Cs,Su=[],Cu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function Du(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Su[i];if(a===void 0&&(a=new Float32Array(i),Su[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ou(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ku(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Au(e,t){let n=Cu[t];n===void 0&&(n=new Int32Array(t),Cu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ju(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Mu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ou(n,t))return;e.uniform2fv(this.addr,t),ku(n,t)}}function Nu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ou(n,t))return;e.uniform3fv(this.addr,t),ku(n,t)}}function Pu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ou(n,t))return;e.uniform4fv(this.addr,t),ku(n,t)}}function Fu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ou(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ku(n,t)}else{if(Ou(n,r))return;Eu.set(r),e.uniformMatrix2fv(this.addr,!1,Eu),ku(n,r)}}function Iu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ou(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ku(n,t)}else{if(Ou(n,r))return;Tu.set(r),e.uniformMatrix3fv(this.addr,!1,Tu),ku(n,r)}}function Lu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ou(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ku(n,t)}else{if(Ou(n,r))return;wu.set(r),e.uniformMatrix4fv(this.addr,!1,wu),ku(n,r)}}function Ru(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ou(n,t))return;e.uniform2iv(this.addr,t),ku(n,t)}}function Bu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ou(n,t))return;e.uniform3iv(this.addr,t),ku(n,t)}}function Vu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ou(n,t))return;e.uniform4iv(this.addr,t),ku(n,t)}}function Hu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Uu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ou(n,t))return;e.uniform2uiv(this.addr,t),ku(n,t)}}function Wu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ou(n,t))return;e.uniform3uiv(this.addr,t),ku(n,t)}}function Gu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ou(n,t))return;e.uniform4uiv(this.addr,t),ku(n,t)}}function Ku(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(vu.compareFunction=n.isReversedDepthBuffer()?518:515,a=vu):a=_u,n.setTexture2D(t||a,i)}function qu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||bu,i)}function Ju(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||xu,i)}function Yu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||yu,i)}function Xu(e){switch(e){case 5126:return ju;case 35664:return Mu;case 35665:return Nu;case 35666:return Pu;case 35674:return Fu;case 35675:return Iu;case 35676:return Lu;case 5124:case 35670:return Ru;case 35667:case 35671:return zu;case 35668:case 35672:return Bu;case 35669:case 35673:return Vu;case 5125:return Hu;case 36294:return Uu;case 36295:return Wu;case 36296:return Gu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return Ju;case 36289:case 36303:case 36311:case 36292:return Yu}}function Zu(e,t){e.uniform1fv(this.addr,t)}function Qu(e,t){let n=Du(t,this.size,2);e.uniform2fv(this.addr,n)}function $u(e,t){let n=Du(t,this.size,3);e.uniform3fv(this.addr,n)}function ed(e,t){let n=Du(t,this.size,4);e.uniform4fv(this.addr,n)}function td(e,t){let n=Du(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nd(e,t){let n=Du(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rd(e,t){let n=Du(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function id(e,t){e.uniform1iv(this.addr,t)}function ad(e,t){e.uniform2iv(this.addr,t)}function od(e,t){e.uniform3iv(this.addr,t)}function sd(e,t){e.uniform4iv(this.addr,t)}function cd(e,t){e.uniform1uiv(this.addr,t)}function ld(e,t){e.uniform2uiv(this.addr,t)}function ud(e,t){e.uniform3uiv(this.addr,t)}function dd(e,t){e.uniform4uiv(this.addr,t)}function fd(e,t,n){let r=this.cache,i=t.length,a=Au(n,i);Ou(r,a)||(e.uniform1iv(this.addr,a),ku(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?vu:_u;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function pd(e,t,n){let r=this.cache,i=t.length,a=Au(n,i);Ou(r,a)||(e.uniform1iv(this.addr,a),ku(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||bu,a[e])}function md(e,t,n){let r=this.cache,i=t.length,a=Au(n,i);Ou(r,a)||(e.uniform1iv(this.addr,a),ku(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||xu,a[e])}function hd(e,t,n){let r=this.cache,i=t.length,a=Au(n,i);Ou(r,a)||(e.uniform1iv(this.addr,a),ku(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||yu,a[e])}function gd(e){switch(e){case 5126:return Zu;case 35664:return Qu;case 35665:return $u;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return rd;case 5124:case 35670:return id;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return sd;case 5125:return cd;case 36294:return ld;case 36295:return ud;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return hd}}var _d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xu(t.type)}},vd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gd(t.type)}},yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bd=/(\w+)(\])?(\[|\.)?/g;function xd(e,t){e.seq.push(t),e.map[t.id]=t}function Sd(e,t,n){let r=e.name,i=r.length;for(bd.lastIndex=0;;){let a=bd.exec(r),o=bd.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xd(n,l===void 0?new _d(s,e,t):new vd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new yd(s),xd(n,e)),n=e}}}var Cd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Sd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function wd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Td=37297,Ed=0;function Dd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Od=new vi;function kd(e){Ci._getMatrix(Od,Ci.workingColorSpace,e);let t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(Ci.getTransfer(e)){case Ur:return[t,`LinearTransferOETF`];case Wr:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ad(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Dd(e.getShaderSource(t),r)}return i}function jd(e,t){let n=kd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Md={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Nd(e,t){let n=Md[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pd=new B;function Fd(){return Ci.getLuminanceCoefficients(Pd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pd.x.toFixed(4)}, ${Pd.y.toFixed(4)}, ${Pd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Id(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zd).join(`
`)}function Ld(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zd(e){return e!==``}function Bd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(e){return e.replace(Hd,Gd)}var Wd=new Map;function Gd(e,t){let n=Al[t];if(n===void 0){let e=Wd.get(t);if(e!==void 0)n=Al[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ud(n)}var Kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(e){return e.replace(Kd,Jd)}function Jd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Yd(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Xd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Zd(e){return Xd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Qd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function $d(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Qd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ef={302:`ENVMAP_MODE_REFRACTION`};function tf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ef[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var nf={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function rf(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:nf[e.combine]||`ENVMAP_BLENDING_NONE`}function af(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function of(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Zd(n),l=$d(n),u=tf(n),d=rf(n),f=af(n),p=Id(n),m=Ld(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zd).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zd).join(`
`),_.length>0&&(_+=`
`)):(g=[Yd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zd).join(`
`),_=[Yd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Al.tonemapping_pars_fragment,n.toneMapping===0?``:Nd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Al.colorspace_pars_fragment,jd(`linearToOutputTexel`,n.outputColorSpace),Fd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zd).join(`
`)),o=Ud(o),o=Bd(o,n),o=Vd(o,n),s=Ud(s),s=Bd(s,n),s=Vd(s,n),o=qd(o),s=qd(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=wd(i,i.VERTEX_SHADER,y),S=wd(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ad(i,x,`vertex`),n=Ad(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Cd(i,h),T=Rd(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Td)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ed++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var sf=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lf(e),t.set(e,n)),n}},lf=class{constructor(e){this.id=sf++,this.code=e,this.usedTimes=0}};function uf(e){return e===1030||e===37490||e===36285}function df(e,t,n,r,i,a){let o=new Yi,s=new cf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=jl[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,N=_e&&!!i.iridescenceThicknessMap,Te=ve&&!!i.sheenColorMap,Ee=ve&&!!i.sheenRoughnessMap,De=!!i.specularMap,P=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=ye&&!!i.transmissionMap,Ae=ye&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ci.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&uf(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:N,sheen:ve,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:P,specularIntensityMap:Oe,transmission:ye,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:N&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:P&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Ci.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Ci.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=jl[t];n=gc.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new of(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ff(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function pf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function mf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function hf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||pf),r.length>1&&r.sort(t||mf),i.length>1&&i.sort(t||mf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function gf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new hf,e.set(t,[i])):n>=r.length?(i=new hf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function _f(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function vf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var yf=0;function bf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function xf(e){let t=new _f,n=vf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new V,o=new V;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(bf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=yf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Sf(e){let t=new xf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Cf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Sf(e),t.set(n,[a])):r>=i.length?(a=new Sf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var wf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tf=`uniform sampler2D shadow_pass;
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
}`,Ef=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Df=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Of=new V,kf=new B,Af=new B;function jf(e,t,n){let r=new hs,i=new z,a=new z,o=new Pi,s=new Cc,c=new wc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new yc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:wf,fragmentShader:Tf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ho;m.setAttribute(`position`,new eo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new zo(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ii(i.x,i.y,{format:Jn,type:Fn,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ts(i.x,i.y,Pn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Wn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Sn,d.map.depthTexture.magFilter=Sn}else l.isPointLight?(d.map=new su(i.x),d.map.depthTexture=new Es(i.x,Nn)):(d.map=new Ii(i.x,i.y),d.map.depthTexture=new Ts(i.x,i.y,Nn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Wn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Tn,d.map.depthTexture.magFilter=Tn):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Sn,d.map.depthTexture.magFilter=Sn);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),kf.setFromMatrixPosition(l.matrixWorld),e.position.copy(kf),Af.copy(e.position),Af.add(Ef[t]),e.up.copy(Df[t]),e.lookAt(Af),e.updateMatrixWorld(),n.makeTranslation(-kf.x,-kf.y,-kf.z),Of.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Of,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ii(i.x,i.y,{format:Jn,type:Fn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Mf(e,t){function n(){let t=!1,n=new Pi,r=null,i=new Pi(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ii[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Pi().fromArray(ae),ce=new Pi().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function N(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function ze(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function F(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:N,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:P,texImage2D:Pe,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:Be,uniformBlockBinding:F,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Re,viewport:ze,reset:Ve}}function Nf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new z,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Zr(`canvas`)}function g(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ur:Ci.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&Te(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?fe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?fe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[yn]:e.REPEAT,[bn]:e.CLAMP_TO_EDGE,[xn]:e.MIRRORED_REPEAT},oe={[Sn]:e.NEAREST,[Cn]:e.NEAREST_MIPMAP_NEAREST,[wn]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[En]:e.LINEAR_MIPMAP_NEAREST,[Dn]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ce(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function le(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function de(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ue(n.start,r.width,4),c=ue(t.start,r.width,4);n.start<=i+1&&a===c&&ue(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function fe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=le(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ci.getPrimaries(Ci.workingColorSpace),r=o.colorSpace===``?null:Ci.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Ee(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ce(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Gn,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&de(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=El(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=El(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=De(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=De(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,o,s){if(o.image.length!==6)return;let c=le(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ci.getPrimaries(Ci.workingColorSpace),r=o.colorSpace===``?null:Ci.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ee(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ce(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=De(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,we(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=we(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function _e(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ge(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ge(i.__webglFramebuffer[0],t,0):ge(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),he(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),he(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,i){let a=r.get(t);n!==void 0&&me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&_e(t)}function ye(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&N(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),he(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ce(c,a),me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ce(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&_e(t)}function be(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let xe=[],Se=[];function Ce(t){if(t.samples>0){if(N(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(xe.length=0,Se.length=0,xe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(xe.push(l),Se.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(i.maxSamples,e.samples)}function N(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Te(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ci.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Pf(e,t){function n(n,r=``){let i,a=Ci.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ff=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,If=`
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

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yc({vertexShader:Ff,fragmentShader:If,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zo(new sc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rf=class extends ai{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Lf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new z,C=null,w=null,T=new rl;T.viewport=new Pi;let E=new rl;E.viewport=new Pi;let D=[T,E],O=new pl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ma,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ma,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ma,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Gn:Wn,a=_.stencil?Rn:Nn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ii(d.textureWidth,d.textureHeight,{format:Un,type:On,depthTexture:new Ts(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ii(f.framebufferWidth,f.framebufferHeight,{format:Un,type:On,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let te=new B,ne=new B;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ci*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new rl,o.layers.enable(n),o.viewport=new Pi,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ds,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new Ol;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},zf=new V,Bf=new vi;Bf.set(-1,0,0,0,1,0,0,0,1);function Vf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,hc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(zf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Bf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Hf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Uf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wf=null;function Gf(){return Wf===null&&(Wf=new $o(Uf,16,16,Jn,Fn),Wf.name=`DFG_LUT`,Wf.minFilter=Tn,Wf.magFilter=Tn,Wf.wrapS=bn,Wf.wrapT=bn,Wf.generateMipmaps=!1,Wf.needsUpdate=!0),Wf}var Kf=class{constructor(e={}){let{canvas:t=Qr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Xn,Yn,qn]),g=new Set([On,Nn,jn,Rn,In,Ln]),_=new Uint32Array(4),v=new Int32Array(4),y=new B,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Vr;let j=0,ee=0,M=null,te=-1,ne=null,re=new Pi,ie=new Pi,ae=null,oe=new H(0),se=0,ce=t.width,le=t.height,ue=1,de=null,fe=null,pe=new Pi(0,0,ce,le),me=new Pi(0,0,ce,le),he=!1,ge=new hs,_e=!1,ve=!1,ye=new V,be=new B,xe=new Pi,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function we(){return M===null?ue:1}let N=n;function Te(e,n){return t.getContext(e,n)}let Ee,De,P,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,F,Ve,He,Ue,We,Ge,Ke;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ye,!1),t.addEventListener(`webglcontextrestored`,Xe,!1),t.addEventListener(`webglcontextcreationerror`,Ze,!1),N===null){let t=`webgl2`;if(N=Te(t,e),N===null)throw Te(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ye,!1),t.removeEventListener(`webglcontextrestored`,Xe,!1),t.removeEventListener(`webglcontextcreationerror`,Ze,!1),R(`WebGLRenderer: `+e.message),e}function qe(){Ee=new lu(N),Ee.init(),We=new Pf(N,Ee),De=new Rl(N,Ee,e,We),P=new Mf(N,Ee),De.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),O=N.createFramebuffer(),k=N.createFramebuffer(),A=N.createFramebuffer(),Oe=new fu(N),ke=new ff,Ae=new Nf(N,Ee,P,ke,De,We,Oe),je=new cu(T),Me=new kl(N),Ge=new Il(N,Me),Ne=new uu(N,Me,Oe,Ge),Pe=new mu(N,Ne,Me,Ge,Oe),Ve=new pu(N,De,Ae),ze=new zl(ke),Fe=new df(T,je,Ee,De,Ge,ze),Ie=new Vf(T,ke),Le=new gf,Re=new Cf(Ee),F=new Fl(T,je,P,Pe,p,s),Be=new jf(T,Pe,De),Ke=new Hf(N,Oe,De,P),He=new Ll(N,Ee,Oe),Ue=new du(N,Ee,Oe),Oe.programs=Fe.programs,T.capabilities=De,T.extensions=Ee,T.properties=ke,T.renderLists=Le,T.shadowMap=Be,T.state=P,T.info=Oe}m!==1009&&(w=new gu(m,t.width,t.height,o,r,i));let Je=new Rf(T,N);this.xr=Je,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){Je.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),P.viewport(re.copy(pe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),P.scissor(ie.copy(me).multiplyScalar(ue).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){P.setScissorTest(he=e)},this.setOpaqueSort=function(e){de=e},this.setTransparentSort=function(e){fe=e},this.getClearColor=function(e){return e.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=F.getClearColor(),r=F.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,N.clearBufferiv(N.COLOR,0,v))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ye,!1),t.removeEventListener(`webglcontextrestored`,Xe,!1),t.removeEventListener(`webglcontextcreationerror`,Ze,!1),F.dispose(),Le.dispose(),Re.dispose(),ke.dispose(),je.dispose(),Pe.dispose(),Ge.dispose(),Ke.dispose(),Fe.dispose(),Je.dispose(),Je.removeEventListener(`sessionstart`,it),Je.removeEventListener(`sessionend`,at),ot.stop()};function Ye(e){e.preventDefault(),ei(`WebGLRenderer: Context Lost.`),E=!0}function Xe(){ei(`WebGLRenderer: Context Restored.`),E=!1;let e=Oe.autoReset,t=Be.enabled,n=Be.autoUpdate,r=Be.needsUpdate,i=Be.type;qe(),Oe.autoReset=e,Be.enabled=t,Be.autoUpdate=n,Be.needsUpdate=r,Be.type=i}function Ze(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Qe(e){let t=e.target;t.removeEventListener(`dispose`,Qe),$e(t)}function $e(e){et(e),ke.remove(e)}function et(e){let t=ke.get(e).programs;t!==void 0&&(t.forEach(function(e){Fe.releaseProgram(e)}),e.isShaderMaterial&&Fe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=gt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ne.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ge.setup(i,r,s,n,c);let h,g=He;if(c!==null&&(h=Me.get(c),g=Ue,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*we()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*we()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Ee.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Me.get(c).bytesPerElement:1,o=ke.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function tt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ft(e,t,r),e.side=0,e.needsUpdate=!0,ft(e,t,r),e.side=2):ft(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Re.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=ze.init(this.clippingPlanes,ve),_e===!0&&ze.setGlobalState(this.clippingPlanes,t),D!==null&&Be.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];tt(o,n,t,e),r.add(o)}else tt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=ke.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ee.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let nt=null;function rt(e){nt&&nt(e)}function it(){ot.stop()}function at(){ot.start()}let ot=new Ol;ot.setAnimationLoop(rt),typeof self<`u`&&ot.setContext(self),this.setAnimationLoop=function(e){nt=e,Je.setAnimationLoop(e),e===null?ot.stop():ot.start()},Je.addEventListener(`sessionstart`,it),Je.addEventListener(`sessionend`,at),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Je.enabled===!0&&Je.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(t),t=Je.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Re.get(e,C.length),x.init(t),x.state.textureUnits=Ae.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(ye,Jr,t.reversedDepth),ve=this.localClippingEnabled,_e=ze.init(this.clippingPlanes,ve),b=Le.get(e,S.length),b.init(),S.push(b),Je.enabled===!0&&Je.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&st(e,t,-1/0,T.sortObjects)}st(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(de,fe),Ce=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,Ce&&F.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&ze.beginShadows();let i=x.state.shadowsArray;if(Be.render(i,e,t),_e===!0&&ze.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];lt(n,r,e,a)}Ce&&F.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ct(b,e,n,n.viewport)}}else r.length>0&&lt(n,r,e,t),Ce&&F.render(e),ct(b,e,t)}M!==null&&ee===0&&(Ae.updateMultisampleRenderTarget(M),Ae.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ge.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],Ae.setTextureUnits(x.state.textureUnits),_e===!0&&ze.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function st(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ge)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let i=Pe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,xe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ge))){let i=Pe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),xe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,xe.z,s,t)}}else a.visible&&b.push(e,i,a,n,xe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)st(i[e],t,n,r)}function ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&ze.setGlobalState(T.clippingPlanes,n),r&&P.viewport(re.copy(r)),i.length>0&&ut(i,t,n),a.length>0&&ut(a,t,n),o.length>0&&ut(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function lt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ee.has(`EXT_color_buffer_half_float`)||Ee.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ii(1,1,{generateMipmaps:!0,type:e?Fn:On,minFilter:Dn,samples:Math.max(4,De.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ci.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&F.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&ze.setGlobalState(T.clippingPlanes,r),ut(e,n,r),Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a),Ee.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ut(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&dt(o,t,n,s,l,c)}}function dt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ft(e,t,n){t.isScene!==!0&&(t=Se);let r=ke.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Fe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Fe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=je.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Qe),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return mt(e,s),d}else s.uniforms=Fe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Fe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=ze.uniform),mt(e,s),r.needsLights=vt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function pt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function mt(e,t){let n=ke.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ht(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function gt(e,t,n,r,i){t.isScene!==!0&&(t=Se),Ae.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ci.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=je.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=ke.get(r),y=x.state.lights;if(_e===!0&&(ve===!0||e!==ne)){let t=e===ne&&r.id===te;ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==ze.numPlanes||v.numIntersection!==ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ft(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(P.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=ht(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(N,`projectionMatrix`,e.projectionMatrix),O.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(N,be.setFromMatrixPosition(e.matrixWorld)),De.logarithmicDepthBuffer&&O.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Ae),y.state.directionalShadowMap.length>0&&O.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Ae),y.state.spotShadowMap.length>0&&O.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Ae),y.state.pointShadowMap.length>0&&O.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Ae)),i.isSkinnedMesh){O.setOptional(N,i,`bindMatrix`),O.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(N,`boneTexture`,e.boneTexture,Ae))}i.isBatchedMesh&&(O.setOptional(N,i,`batchingTexture`),O.setValue(N,`batchingTexture`,i._matricesTexture,Ae),O.setOptional(N,i,`batchingIdTexture`),O.setValue(N,`batchingIdTexture`,i._indirectTexture,Ae),O.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(N,`batchingColorTexture`,i._colorsTexture,Ae));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ve.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Gf()),w){if(O.setValue(N,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&_t(k,E),a&&r.fog===!0&&Ie.refreshFogUniforms(k,a),Ie.refreshMaterialUniforms(k,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Cd.upload(N,pt(v),k,Ae)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cd.upload(N,pt(v),k,Ae),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(N,`center`,i.center),O.setValue(N,`modelViewMatrix`,i.modelViewMatrix),O.setValue(N,`normalMatrix`,i.normalMatrix),O.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ke.update(n,S),Ke.bind(n,S)}}return S}function _t(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function vt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=ke.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),ke.get(e.texture).__webglTexture=t,ke.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=ke.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=ke.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,P.viewport(re),P.scissor(ie),P.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)Ae.setupRenderTarget(e);else if(o.__hasExternalTextures)Ae.rebindTextures(e,ke.get(e.texture).__webglTexture,ke.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&ke.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ae.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=ke.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ae.useMultisampledRTT(e)===!1?ke.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(pe).multiplyScalar(ue).floor(),ie.copy(me).multiplyScalar(ue).floor(),ae=he;if(n!==0&&(r=O),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(re),P.scissor(ie),P.setScissorTest(ae),i){let r=ke.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=ke.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=ke.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}te=-1};function yt(e){let t=ke.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=De.textureFormatReadable(e.format),t.__typeReadable=De.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=ke.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=yt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,We.convert(c),We.convert(l),a)}finally{let e=M===null?null:ke.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=ke.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=yt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,We.convert(l),We.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:ke.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ri(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ae.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=We.convert(t.format),_=We.convert(t.type),v;t.isData3DTexture?(Ae.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ae.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Ae.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=ke.get(e),r=ke.get(t),h=ke.get(n.__renderTarget),g=ke.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||ke.has(e)){let n=ke.get(e),r=ke.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,k),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){ke.get(e).__webglFramebuffer===void 0&&Ae.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ae.setTextureCube(e,0):e.isData3DTexture?Ae.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ae.setTexture2DArray(e,0):Ae.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,P.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ci._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ci._getUnpackColorSpace()}},qf=class{perm=new Uint8Array(512);gx=new Float32Array(256);gy=new Float32Array(256);constructor(e){let t=new Uint8Array(256);for(let e=0;e<256;e++)t[e]=e;let n=e>>>0||1,r=()=>(n^=n<<13,n^=n>>>17,n^=n<<5,(n>>>0)/4294967296);for(let e=255;e>0;e--){let n=Math.floor(r()*(e+1)),i=t[e];t[e]=t[n],t[n]=i}for(let e=0;e<512;e++)this.perm[e]=t[e&255];for(let e=0;e<256;e++){let t=r()*Math.PI*2;this.gx[e]=Math.cos(t),this.gy[e]=Math.sin(t)}}n2(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=n&255,s=r&255,c=this.perm,l=c[o+c[s]],u=c[o+1+c[s]],d=c[o+c[s+1]],f=c[o+1+c[s+1]],p=this.gx[l]*i+this.gy[l]*a,m=this.gx[u]*(i-1)+this.gy[u]*a,h=this.gx[d]*i+this.gy[d]*(a-1),g=this.gx[f]*(i-1)+this.gy[f]*(a-1),_=i*i*i*(i*(i*6-15)+10),v=a*a*a*(a*(a*6-15)+10),y=p+(m-p)*_;return(y+(h+(g-h)*_-y)*v)*1.414}fbm(e,t,n=3,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=this.n2(e*o,t*o)*a,c+=a,a*=i,o*=r;return s/c}ridged(e,t,n=3){let r=.5,i=1,a=0;for(let o=0;o<n;o++){let n=1-Math.abs(this.n2(e*i,t*i));a+=n*n*r,r*=.5,i*=2.1}return a}n1(e){return this.n2(e,17.31)}},Jf=`
attribute float aSnow;
attribute float aH;
uniform vec2 uRange;
varying float vSnow;
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vSnow = aSnow;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  vN = normal;
  vH = clamp((wp.y - uRange.x) / (uRange.y - uRange.x), 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Yf=`
uniform vec3 uBase;
uniform vec3 uRockLit;
uniform vec3 uSnow;
uniform vec3 uHaze;
uniform vec3 uSunCol;
uniform vec3 uSunDir;
uniform vec3 uSky;
uniform float uHazeAmt;
varying float vSnow;
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vec3 n = normalize(vN);
  float sun = max(dot(n, uSunDir), 0.0);
  float sky = 0.55 + 0.45 * n.y;
  vec3 rock = mix(uBase, uRockLit, sun * 0.8);
  vec3 col = mix(rock, uSnow * (0.72 + sun * 0.4), vSnow);
  col = col * (0.42 + sun * 0.85) + uSky * sky * 0.18;
  // the side facing the sun glows warm along the crest
  col += uSunCol * pow(sun, 3.0) * 0.25 * (0.4 + vH);
  float haze = clamp(uHazeAmt + pow(1.0 - vH, 1.7) * 0.58, 0.0, 1.0);
  col = mix(col, uHaze, haze);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Xf=`
varying vec2 vXZ;
varying float vDist;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  vec4 mv = viewMatrix * wp;
  vDist = length(mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,Zf=`
uniform vec3 uLow;
uniform vec3 uHigh;
uniform vec3 uFar;
uniform vec3 uSunCol;
uniform float uTime;
varying vec2 vXZ;
varying float vDist;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
void main() {
  vec2 p = vXZ * 0.0035 + vec2(uTime * 0.006, uTime * 0.004);
  float n = vn(p) * 0.5 + vn(p * 2.3 + 7.1) * 0.3 + vn(p * 5.1 - 3.7) * 0.2;
  n = smoothstep(0.28, 0.82, n);
  vec3 col = mix(uLow, uHigh, n);
  col += uSunCol * pow(n, 4.0) * 0.12;
  col = mix(col, uFar, smoothstep(500.0, 3000.0, vDist));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Qf=[{r:1100,yBase:-160,amp:420,haze:.14,snowAt:.8,seed:11},{r:1850,yBase:-120,amp:900,haze:.3,snowAt:.6,seed:23,hero:.15},{r:2900,yBase:-60,amp:1550,haze:.48,snowAt:.5,seed:37,hero:-.9}],$f=360,ep=7,tp=e=>{let t=new qf(e.seed),n=[];for(let r=0;r<$f;r++){let i=r/$f*Math.PI*2,a=Math.cos(i)*2.2,o=Math.sin(i)*2.2,s=a+t.n2(a*.7+1,o*.7)*.45,c=o+t.n2(a*.7,o*.7+5)*.45,l=.5+.5*t.n2(s*.4+3,c*.4+3),u=t.ridged(s+10,c+10,5)**1.7*1.45*(.3+l*.95);if(u+=l*.2,e.hero!==void 0){let t=i-(e.hero+Math.PI/2);t=Math.atan2(Math.sin(t),Math.cos(t)),u+=Math.exp(-t*t*60)*.75}n.push(e.yBase+e.amp*Math.min(1.35,u))}let r=[],i=-3200;for(let a=0;a<ep;a++){let o=a/6,s=[];for(let r=0;r<=$f;r++){let c=r%$f,l=c/$f*Math.PI*2,u=n[c],d=a===6?i:u+(e.yBase-e.amp*.2-u)*o**.8*(a===0?0:1),f=t.n2(c*.11,a*.9)*.6+t.n2(c*.37,a*2.1)*.25,p=e.r*(1+f*.05*o+(a===0?0:o*.06));s.push(new B(Math.sin(l)*p,d,Math.cos(l)*p))}r.push(s)}let a=[],o=[],s=[],c=[],l=e.yBase+e.amp*1.2,u=new B,d=new B,f=new B,p=(e,t,n)=>{let i=r[e][t>0?t-1:359],a=r[e][t<$f?t+1:1],o=r[Math.max(0,e-1)][t],s=r[Math.min(6,e+1)][t];return d.subVectors(a,i),f.subVectors(o,s),n.crossVectors(d,f).normalize(),n.x*r[e][t].x+n.z*r[e][t].z>0&&n.negate(),n},m=(n,d)=>{let f=r[n][d];a.push(f.x,f.y,f.z),p(n,d,u),o.push(u.x,u.y,u.z);let m=(f.y-e.yBase)/e.amp,h=t.n2(d*.21,n*1.3)*.12;s.push(m>e.snowAt+h&&u.y>.08?Math.min(1,(m-e.snowAt-h)*5):0),c.push((f.y-i)/(l-i))};for(let e=0;e<6;e++)for(let t=0;t<$f;t++)m(e,t),m(e+1,t),m(e,t+1),m(e,t+1),m(e+1,t),m(e+1,t+1);let h=new ho;return h.setAttribute(`position`,new U(a,3)),h.setAttribute(`normal`,new U(o,3)),h.setAttribute(`aSnow`,new U(s,1)),h.setAttribute(`aH`,new U(c,1)),h.computeBoundingSphere(),h},np=class{group=new fa;rings=[];mist;mistMat;constructor(){for(let e of Qf){let t=new yc({vertexShader:Jf,fragmentShader:Yf,uniforms:{uBase:{value:new H},uRockLit:{value:new H},uSnow:{value:new H},uHaze:{value:new H},uSunCol:{value:new H},uSky:{value:new H},uSunDir:{value:new B(0,1,0)},uHazeAmt:{value:e.haze},uRange:{value:[e.yBase-e.amp*.2,e.yBase+e.amp]}},side:2}),n=new zo(tp(e),t);n.frustumCulled=!1,n.renderOrder=-5,this.group.add(n),this.rings.push({mesh:n,mat:t,spec:e})}this.mistMat=new yc({vertexShader:Xf,fragmentShader:Zf,uniforms:{uLow:{value:new H},uHigh:{value:new H},uFar:{value:new H},uSunCol:{value:new H},uTime:{value:0}}});let e=new sc(8e3,8e3,1,1);e.rotateX(-Math.PI/2),this.mist=new zo(e,this.mistMat),this.mist.frustumCulled=!1,this.mist.renderOrder=-4,this.group.add(this.mist)}update(e,t,n,r,i){this.group.visible=r<.995;let a=[e.far1,e.far2,e.far3];for(let n=0;n<this.rings.length;n++){let r=this.rings[n];r.mesh.position.set(t.x,0,t.z);let o=r.mat.uniforms;o.uBase.value.copy(a[n]).lerp(e.rockDark,.25-n*.08),o.uRockLit.value.copy(a[n]).lerp(e.sunGlow,.35).lerp(e.rockLight,.2),o.uSnow.value.copy(e.snow).lerp(a[n],.12+n*.1),o.uHaze.value.copy(e.horizon).lerp(e.fog,.5),o.uSunCol.value.copy(e.sunGlow),o.uSky.value.copy(e.hemiSky),o.uSunDir.value.copy(i)}this.mist.position.set(t.x,t.y-260,t.z);let o=this.mistMat.uniforms;o.uLow.value.copy(e.fog).lerp(e.far1,.35),o.uHigh.value.copy(e.cloud),o.uFar.value.copy(e.horizon).lerp(e.fog,.5),o.uSunCol.value.copy(e.sunGlow),o.uTime.value=n}},rp=`
uniform float uTime;
uniform float uAlpha;
varying vec2 vUv;
void main() {
  float edge = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y);
  float sweep = smoothstep(0.12, 0.0, abs(fract(vUv.x * 0.6 - uTime * 0.45) - 0.5) - 0.38);
  vec3 c = mix(vec3(1.0, 0.72, 0.25), vec3(1.0, 0.95, 0.75), sweep);
  gl_FragColor = vec4(c * (0.55 + sweep * 0.8) * edge * uAlpha, 1.0);
}`,ip=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,G=lt(),ap=new B,op=new V,sp=class{group=new fa;ribbon;label;canvas=document.createElement(`canvas`);tex;gateS=-1;searchT=0;best=0;passed=!1;shown=0;gold=new H(16765562);posts=[];rib;constructor(){let e=new Do({color:16765562,fog:!1});for(let t of[-4.3,4.3]){let n=new zo(new ks(.07,.07,3.2,8),e);n.position.set(t,1.6,0),this.group.add(n),this.posts.push(n)}this.ribbon=new yc({vertexShader:ip,fragmentShader:rp,transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:{value:0},uAlpha:{value:1}}});let t=new zo(new sc(8.6,.75),this.ribbon);t.position.set(0,2.95,0),this.group.add(t),this.rib=t,this.canvas.width=512,this.canvas.height=128,this.tex=new ws(this.canvas),this.tex.colorSpace=Vr,this.label=new zo(new sc(4.2,1.05),new Do({map:this.tex,transparent:!0,depthWrite:!1,side:2,fog:!1})),this.label.position.set(0,3.75,0),this.group.add(this.label),this.group.visible=!1,this.group.matrixAutoUpdate=!1}reset(e){this.best=e,this.gateS=-1,this.passed=!1,this.shown=0,this.group.visible=!1;let t=this.canvas.getContext(`2d`);!t||e<=0||(t.clearRect(0,0,512,128),t.font=`900 64px "Archivo Variable", system-ui, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.shadowColor=`rgba(255,180,60,0.9)`,t.shadowBlur=18,t.fillStyle=`#ffe3a0`,t.fillText(`BEST ${Math.floor(e).toLocaleString(`en-US`)} M`,256,66),this.tex.needsUpdate=!0)}update(e,t,n,r,i,a){if(this.best<=0||this.passed){this.group.visible=!1;return}if(this.gateS<0){if(this.searchT-=e,this.searchT<=0){this.searchT=.4;for(let e=n;e<Math.min(t.length,n+320);e+=1)if(t.heightAt(e)-r>=this.best){this.gateS=e;break}}if(this.gateS<0){this.group.visible=!1;return}}if(n>this.gateS+.5){this.passed=!0,this.group.visible=!1,t.frame(this.gateS,G);for(let e of[-3,0,3])ap.set(G.px+G.rx*e+G.ux*2.4,G.py+G.ry*e+G.uy*2.4,G.pz+G.rz*e+G.uz*2.4),a.emit(`confetti`,ap,{count:26,spread:.6,speed:9,color:16765562,color2:16747069,size:.2,life:1.8,gravity:7,drag:1.4}),a.emit(`crystal`,ap,{count:12,spread:.4,speed:6,color:16777215,color2:16765562,size:.4,sizeEnd:.05,life:.7});return}let o=this.gateS-n;if(this.shown+=(+(o<240)-this.shown)*Math.min(1,e*3),this.group.visible=this.shown>.02,!this.group.visible)return;t.frame(this.gateS,G);let s=G.pitch>1.05;s?(op.makeBasis(ap.set(-G.rx,-G.ry,-G.rz),new B(G.fx,G.fy,G.fz),new B(-G.ux,-G.uy,-G.uz)),op.setPosition(G.px+G.ux*.7,G.py+G.uy*.7,G.pz+G.uz*.7),this.rib.position.set(0,0,0),this.label.position.set(0,.95,0)):(op.makeBasis(ap.set(-G.rx,-G.ry,-G.rz),new B(G.ux,G.uy,G.uz),new B(G.fx,G.fy,G.fz)),op.setPosition(G.px,G.py,G.pz),this.rib.position.set(0,2.95,0),this.label.position.set(0,3.75,0));for(let e of this.posts)e.visible=!s;this.group.matrix.copy(op),this.group.matrixWorldNeedsUpdate=!0,this.ribbon.uniforms.uTime.value=i,this.ribbon.uniforms.uAlpha.value=this.shown;for(let e of[-4.3,4.3]){let t=s?.4:3.25;ap.set(G.px+G.rx*e+G.ux*t,G.py+G.ry*e+G.uy*t,G.pz+G.rz*e+G.uz*t),a.glow(ap,2.2,this.gold,.7*this.shown)}}},cp=9,lp=new V,up=new hi,dp=new B,fp=new B,pp=new B(0,1,0),mp=()=>{let e=new ho;return e.setAttribute(`position`,new U([0,0,.18,-1,.05,-.2,0,0,-.1,0,0,.18,0,0,-.1,1,.05,-.2],3)),e.computeVertexNormals(),e},hp=class{mesh;t=30;flock=null;constructor(){let e=new Do({color:2761792,side:2,fog:!0});this.mesh=new ds(mp(),e,cp),this.mesh.instanceMatrix.setUsage(qr),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.visible=!1}update(e,t,n,r,i,a){if(this.mesh.material.color.copy(i),!this.flock){if(this.t-=e,this.mesh.visible=!1,this.t>0||!r)return;let i=Math.random()<.5?-1:1,a=dp.set(n.x,0,n.z).normalize(),o=new B().crossVectors(a,pp).normalize(),s=t.clone().addScaledVector(a,90+Math.random()*60).addScaledVector(o,-i*120).add(new B(0,25+Math.random()*25,0)),c=o.clone().multiplyScalar(i).addScaledVector(a,(Math.random()-.5)*.4).normalize(),l=[],u=5+Math.floor(Math.random()*5);for(let e=0;e<u;e++){let t=Math.ceil(e/2),n=e%2?1:-1;l.push(new B(0,(Math.random()-.5)*1.5,0).addScaledVector(c,-t*3.2).addScaledVector(a,n*t*2.6))}this.flock={start:s,dir:c,offs:l,age:0,speed:11+Math.random()*5}}let o=this.flock;if(o.age+=e,o.age>24||!r)this.flock=null,this.t=12+Math.random()*20;else{this.mesh.visible=!0,this.mesh.count=o.offs.length,up.setFromUnitVectors(new B(0,0,1),o.dir);for(let e=0;e<o.offs.length;e++){let t=Math.sin(a*9+e*1.3);dp.copy(o.start).addScaledVector(o.dir,o.age*o.speed).add(o.offs[e]),dp.y+=Math.sin(a*.8+e)*.8,fp.set(1.1,1+t*.9,1.1),lp.compose(dp,up,fp),this.mesh.setMatrixAt(e,lp)}this.mesh.instanceMatrix.needsUpdate=!0}}};function gp(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var _p=256,vp=(e,t,n)=>{let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,2147483647);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},yp=e=>e*e*e*(e*(e*6-15)+10),bp=(e,t,n,r)=>{let i=e*n,a=t*n,o=Math.floor(i),s=Math.floor(a),c=yp(i-o),l=yp(a-s),u=(o%n+n)%n,d=(s%n+n)%n,f=(u+1)%n,p=(d+1)%n,m=vp(u,d,r),h=vp(f,d,r),g=vp(u,p,r),_=vp(f,p,r);return m+(h-m)*c+(g-m)*l+(m-h-g+_)*c*l},xp=(e,t,n,r,i)=>{let a=0,o=.5,s=0,c=n;for(let n=0;n<r;n++)a+=bp(e,t,c,i+n*17)*o,s+=o,o*=.5,c*=2;return a/s},Sp=null,Cp=()=>{if(Sp)return Sp;let e=new Uint8Array(_p*_p*4),t=[];for(let e=0;e<12;e++)for(let n=0;n<12;n++)t.push((n+.15+vp(n,e,91)*.7)/12,(e+.15+vp(n,e,92)*.7)/12);for(let n=0;n<_p;n++){let r=n/_p;for(let i=0;i<_p;i++){let a=i/_p,o=(n*_p+i)*4,s=xp(a,r,4,5,1),c=a+(xp(a,r,3,3,7)-.5)*.12,l=r+(xp(a,r,3,3,9)-.5)*.12,u=1-Math.abs(xp(c,l,6,3,11)*2-1),d=(Math.max(0,u-.55)/.45)**3,f=bp(a,r,128,23)*.55+bp(a,r,64,29)*.45,p=Math.floor(a*12),m=Math.floor(r*12),h=9,g=9;for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){let i=(p+n+12)%12,o=(m+e+12)%12,s=t[(o*12+i)*2]+Math.floor((p+n)/12),c=t[(o*12+i)*2+1]+Math.floor((m+e)/12),l=s-a,u=c-r,d=Math.sqrt(l*l+u*u)*12;d<h?(g=h,h=d):d<g&&(g=d)}let _=Math.min(1,(g-h)*2.2);e[o]=Math.round(Math.min(1,Math.max(0,s))*255),e[o+1]=Math.round(Math.min(1,d)*255),e[o+2]=Math.round(Math.min(1,Math.max(0,f))*255),e[o+3]=Math.round(_*255)}}return Sp=new $o(e,_p,_p,Un,On),Sp.wrapS=Sp.wrapT=yn,Sp.magFilter=Tn,Sp.minFilter=Dn,Sp.generateMipmaps=!0,Sp.anisotropy=4,Sp.needsUpdate=!0,Sp},K={rock:.1,ground:.3,snow:.5,ice:.7,made:.9},wp=`
attribute vec3 aux;
varying vec3 vColor;
varying vec3 vN;
varying vec3 vW;
varying vec3 vAux;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  #ifdef USE_INSTANCING
    wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  #else
    vN = normalize(mat3(modelMatrix) * normal);
  #endif
  vW = wp.xyz;
  vColor = color;
  vAux = aux;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Tp=`
uniform sampler2D uDetail;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSky;
uniform vec3 uGround;
uniform vec3 uRim;
uniform vec3 uLampPos;
uniform vec3 uLampColor;
uniform float uLamp;
uniform float uGlow;
uniform float uTime;
varying vec3 vColor;
varying vec3 vN;
varying vec3 vW;
varying vec3 vAux;
#include <fog_pars_fragment>

vec4 tri(vec3 p, vec3 w, float k) {
  return texture2D(uDetail, p.zy * k) * w.x + texture2D(uDetail, p.xz * k) * w.y + texture2D(uDetail, p.xy * k) * w.z;
}

// bump from a height's screen-space derivatives (dh, in metres): no tangents, no extra lookups
vec3 bump(vec3 n, vec3 dpx, vec3 dpy, vec2 dh) {
  vec3 r1 = cross(dpy, n);
  vec3 r2 = cross(n, dpx);
  float det = dot(dpx, r1);
  vec3 grad = sign(det) * (dh.x * r1 + dh.y * r2);
  return normalize(abs(det) * n - grad);
}

void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  vec3 w = pow(abs(n), vec3(4.0));
  w /= (w.x + w.y + w.z);
  // cliff joints: mapped on the two vertical world planes and blended by the normal (a coordinate
  // measured along the face's own normal swims with every facet of the mesh: far from the origin
  // a hair of rotation moves it by metres). Looked up here, outside any branch, so the
  // derivatives for their relief are well defined on every GPU
  float ax = pow(abs(n.x), 4.0);
  float az = pow(abs(n.z), 4.0);
  float kx = ax / (ax + az + 1e-5);
  vec4 cx = texture2D(uDetail, vec2(vW.z * 0.064, vW.y * 0.016));
  vec4 cz = texture2D(uDetail, vec2(vW.x * 0.064, vW.y * 0.016) + 0.5);
  float blockShade = mix(cz.r, cx.r, kx);
  // not every joint is open: here and there blocks fuse into bigger slabs
  float open = 0.2 + 0.8 * smoothstep(0.34, 0.62, blockShade);
  float h0 = 1.0 - (1.0 - smoothstep(0.0, 0.3, mix(cz.a, cx.a, kx))) * open;
  vec3 dpx = dFdx(vW);
  vec3 dpy = dFdy(vW);
  vec2 dh0 = vec2(dFdx(h0), dFdy(h0));
  vec4 d1 = tri(vW, w, 0.085);
  vec4 d2 = tri(vW, w, 0.47);
  float type = vAux.y;
  float ao = vAux.x;
  vec3 alb = vColor;
  float steep = 1.0 - smoothstep(0.55, 0.85, abs(n.y));
  vec3 V = normalize(cameraPosition - vW);
  float spec = 0.0;
  if (type < 0.2) {
    // rock: broad mottling, grain; plates on gentle faces, cracks and strata on steep ones
    alb *= 0.74 + 0.5 * d1.r;
    alb *= mix(mix(0.8, 1.04, smoothstep(0.0, 0.6, d2.a)), 1.0, steep * 0.8);
    // a crack network on gentle rock only: on cliffs it would read as dried mud
    alb *= 1.0 - (0.36 * d2.g + 0.26 * d1.g) * 0.3 * (1.0 - steep);
    alb *= 0.9 + 0.2 * d2.b;
    // cliffs: jointed blocks (tall, irregular, grooved joints the sun picks out), dark water
    // streaks running down, pale bands of harder rock
    if (steep > 0.01) {
      float dist = length(cameraPosition - vW);
      n = bump(n, dpx, dpy, dh0 * 0.055 * steep * (1.0 - smoothstep(22.0, 55.0, dist)));
      alb *= 1.0 - (1.0 - h0) * 0.3 * steep;
      // each block a slightly different shade
      alb *= 1.0 + (0.5 - blockShade) * 0.4 * steep;
      float streak = mix(texture2D(uDetail, vec2(vW.x * 0.21, vW.y * 0.0085) + 0.5).r, texture2D(uDetail, vec2(vW.z * 0.21, vW.y * 0.0085)).r, kx);
      float band = texture2D(uDetail, vec2((vW.x + vW.z) * 0.002 + 0.37, vW.y * 0.06 + 0.37)).r;
      alb *= 1.0 - smoothstep(0.5, 0.76, streak) * 0.42 * steep;
      alb = mix(alb, alb * 1.14, smoothstep(0.45, 0.7, band) * 0.6 * steep);
    }
    // lichen and weathering on gentler faces
    alb = mix(alb, alb * vec3(0.92, 1.0, 0.86), smoothstep(0.62, 0.8, d1.a) * (1.0 - steep) * 0.6);
  } else if (type < 0.4) {
    // turf / scree: patches of drier and lusher ground, stones showing through
    float patchK = smoothstep(0.35, 0.7, d1.r);
    alb *= mix(vec3(1.08, 1.04, 0.86), vec3(0.86, 0.95, 0.9), patchK);
    alb *= 0.82 + 0.3 * d2.b;
    alb = mix(alb, alb * 0.68, smoothstep(0.82, 0.95, d2.a) * 0.6);
  } else if (type < 0.6) {
    // snow: soft drifts, crisp sparkle where the sun hits
    alb *= 0.93 + 0.1 * d1.r;
    float sp = smoothstep(0.86, 0.98, d2.b) * max(dot(n, uSunDir), 0.0);
    spec = sp * 0.9;
  } else if (type < 0.8) {
    // ice: veined, deep, glassy at grazing angles
    alb *= 0.84 + 0.26 * d1.r;
    alb = mix(alb, alb * vec3(0.7, 0.86, 1.05), d2.g * 0.7);
    float fr = pow(1.0 - max(dot(n, V), 0.0), 3.0);
    spec = pow(max(dot(reflect(-uSunDir, n), V), 0.0), 40.0) * 0.8;
    // glassy at grazing angles: it mirrors the sky it can see (not inside a cave)
    alb += fr * 0.32 * mix(uSky, vec3(0.6, 0.8, 1.0) * length(uSky), 0.5) * ao * ao;
  } else {
    // wood, rope, metal, cloth: a little grain only
    alb *= 0.9 + 0.2 * d2.b;
  }
  float ndl = dot(n, uSunDir);
  float diff = clamp((ndl + 0.18) / 1.18, 0.0, 1.0);
  vec3 hemi = mix(uGround, uSky, n.y * 0.5 + 0.5);
  // occluded surfaces (cave and shaft walls, deep cracks) get little direct sun
  float sunVis = mix(0.12, 1.0, smoothstep(0.2, 0.8, ao));
  vec3 col = alb * (uSunColor * diff * sunVis + hemi * ao);
  // back-light rim: ridges and silhouettes glow against the sky
  float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0) * (0.35 + 0.65 * max(dot(-V, uSunDir), 0.0));
  col += uRim * rim * 0.42 * ao;
  col += uSunColor * spec * sunVis;
  // headlamp in caves
  if (uLamp > 0.001) {
    vec3 L = uLampPos - vW;
    float d = length(L);
    float att = uLamp / (1.0 + d * d * 0.07);
    col += alb * uLampColor * att * max(dot(n, L / d), 0.0);
  }
  col += vColor * vAux.z * uGlow;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,Ep={uDetail:{value:null},uSunDir:{value:new B(.3,.8,.5).normalize()},uSunColor:{value:new H(1,1,1)},uSky:{value:new H(.6,.7,.9)},uGround:{value:new H(.3,.25,.3)},uRim:{value:new H(1,.8,.6)},uLampPos:{value:new B},uLampColor:{value:new H(1,.92,.75)},uLamp:{value:0},uGlow:{value:1.4},uTime:{value:0}},Dp=null,Op=()=>Dp||(Ep.uDetail.value=Cp(),Dp=new yc({vertexShader:wp,fragmentShader:Tp,uniforms:gc.merge([W.fog,{}]),vertexColors:!0,fog:!0,side:2}),Object.assign(Dp.uniforms,Ep),Dp),kp=new B,Ap=new B,jp=new B,Mp=new B,Np=new vi,Pp=class{P=new Float32Array(4608);N=new Float32Array(4608);C=new Float32Array(4608);A=new Float32Array(4608);S=null;W=null;v=0;bone=0;ao=1;surf=K.rock;glow=0;get triCount(){return this.v/3}withSkin(){return this.S=new Uint16Array(this.P.length/3*4),this.W=new Float32Array(this.P.length/3*4),this}grow(){let e=this.P.length*2,t=t=>{let n=new Float32Array(e);return n.set(t),n};if(this.P=t(this.P),this.N=t(this.N),this.C=t(this.C),this.A=t(this.A),this.S&&this.W){let t=new Uint16Array(e/3*4);t.set(this.S),this.S=t;let n=new Float32Array(e/3*4);n.set(this.W),this.W=n}}ensure(){return(this.v+3)*3>this.P.length&&this.grow(),this.v*3}aux(e,t,n,r){let i=this.A;i[e]=t,i[e+1]=this.surf,i[e+2]=this.glow,i[e+3]=n,i[e+4]=this.surf,i[e+5]=this.glow,i[e+6]=r,i[e+7]=this.surf,i[e+8]=this.glow}skin(){if(this.S&&this.W)for(let e=0;e<3;e++){let t=(this.v+e)*4;this.S[t]=this.bone,this.W[t]=1,this.S[t+1]=this.S[t+2]=this.S[t+3]=0,this.W[t+1]=this.W[t+2]=this.W[t+3]=0}}put(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){let h=this.ensure(),g=this.P,_=this.N,v=this.C;g[h]=e,g[h+1]=t,g[h+2]=n,g[h+3]=r,g[h+4]=i,g[h+5]=a,g[h+6]=o,g[h+7]=s,g[h+8]=c;for(let e=0;e<9;e+=3)_[h+e]=l,_[h+e+1]=u,_[h+e+2]=d,v[h+e]=f,v[h+e+1]=p,v[h+e+2]=m;this.aux(h,this.ao,this.ao,this.ao),this.skin(),this.v+=3}flat(e,t,n,r,i,a,o,s,c,l,u,d){let f=r-e,p=i-t,m=a-n,h=o-e,g=s-t,_=c-n,v=p*_-m*g,y=m*h-f*_,b=f*g-p*h,x=Math.sqrt(v*v+y*y+b*b);x<1e-10||(v/=x,y/=x,b/=x,this.put(e,t,n,r,i,a,o,s,c,v,y,b,l,u,d))}tri(e,t,n,r){this.flat(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z,r.r,r.g,r.b)}triN(e,t,n,r,i,a,o){this.put(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z,0,0,0,o.r,o.g,o.b);let s=(this.v-3)*3,c=this.N;c[s]=r.x,c[s+1]=r.y,c[s+2]=r.z,c[s+3]=i.x,c[s+4]=i.y,c[s+5]=i.z,c[s+6]=a.x,c[s+7]=a.y,c[s+8]=a.z}triNC(e,t,n,r,i,a,o,s,c,l=this.ao,u=this.ao,d=this.ao){let f=this.ensure(),p=this.P,m=this.N,h=this.C;p[f]=e.x,p[f+1]=e.y,p[f+2]=e.z,p[f+3]=t.x,p[f+4]=t.y,p[f+5]=t.z,p[f+6]=n.x,p[f+7]=n.y,p[f+8]=n.z,m[f]=r.x,m[f+1]=r.y,m[f+2]=r.z,m[f+3]=i.x,m[f+4]=i.y,m[f+5]=i.z,m[f+6]=a.x,m[f+7]=a.y,m[f+8]=a.z,h[f]=o.r,h[f+1]=o.g,h[f+2]=o.b,h[f+3]=s.r,h[f+4]=s.g,h[f+5]=s.b,h[f+6]=c.r,h[f+7]=c.g,h[f+8]=c.b,this.aux(f,l,u,d),this.skin(),this.v+=3}t9(e,t,n,r,i,a,o,s,c,l){this.flat(e,t,n,r,i,a,o,s,c,l.r,l.g,l.b)}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}stamp(e,t,n){let r=e.pos,i=t.elements,a=Fp,o=e.nrm;o&&Np.getNormalMatrix(t);let s=this.ao;for(let t=0,c=0;t<r.length;t+=9,c++){let l=r[t],u=r[t+1],d=r[t+2],f=r[t+3],p=r[t+4],m=r[t+5],h=r[t+6],g=r[t+7],_=r[t+8],v=i[0]*l+i[4]*u+i[8]*d+i[12],y=i[1]*l+i[5]*u+i[9]*d+i[13],b=i[2]*l+i[6]*u+i[10]*d+i[14],x=i[0]*f+i[4]*p+i[8]*m+i[12],S=i[1]*f+i[5]*p+i[9]*m+i[13],C=i[2]*f+i[6]*p+i[10]*m+i[14],w=i[0]*h+i[4]*g+i[8]*_+i[12],T=i[1]*h+i[5]*g+i[9]*_+i[13],E=i[2]*h+i[6]*g+i[10]*_+i[14],D=x-v,O=S-y,k=C-b,A=w-v,j=T-y,ee=E-b,M=O*ee-k*j,te=k*A-D*ee,ne=D*j-O*A,re=Math.sqrt(M*M+te*te+ne*ne);if(!(re<1e-10)){if(M/=re,te/=re,ne/=re,this.ao=s*(e.ao?e.ao[c]:1),n(e.slot[c],e.shade[c],te,a),o){kp.set(v,y,b),Ap.set(x,S,C),jp.set(w,T,E);let e=t,n=Mp.set(o[e],o[e+1],o[e+2]).applyMatrix3(Np).normalize().clone(),r=Mp.set(o[e+3],o[e+4],o[e+5]).applyMatrix3(Np).normalize().clone(),i=Mp.set(o[e+6],o[e+7],o[e+8]).applyMatrix3(Np).normalize().clone();this.triN(kp,Ap,jp,n,r,i,a)}else this.put(v,y,b,x,S,C,w,T,E,M,te,ne,a.r,a.g,a.b)}}this.ao=s}build(){let e=new ho,t=this.v*3;return e.setAttribute(`position`,new U(this.P.slice(0,t),3)),e.setAttribute(`normal`,new U(this.N.slice(0,t),3)),e.setAttribute(`color`,new U(this.C.slice(0,t),3)),e.setAttribute(`aux`,new U(this.A.slice(0,t),3)),this.S&&this.W&&(e.setAttribute(`skinIndex`,new to(this.S.slice(0,this.v*4),4)),e.setAttribute(`skinWeight`,new U(this.W.slice(0,this.v*4),4))),e.computeBoundingSphere(),e}},Fp=new H,Ip=class{p=[];s=[];sh=[];nr=[];oc=[];smooth;slot=0;constructor(e=!1){this.smooth=e}tri(e,t,n,r=1,i,a,o,s=1){this.p.push(e.x,e.y,e.z,t.x,t.y,t.z,n.x,n.y,n.z),this.s.push(this.slot),this.sh.push(r),this.oc.push(s),this.smooth&&(i&&a&&o?this.nr.push(i.x,i.y,i.z,a.x,a.y,a.z,o.x,o.y,o.z):(Mp.subVectors(t,e).cross(jp.subVectors(n,e)).normalize(),this.nr.push(Mp.x,Mp.y,Mp.z,Mp.x,Mp.y,Mp.z,Mp.x,Mp.y,Mp.z)))}add(e,t,n,r=0,i=1,a){let o=e.index?e.toNonIndexed():e;this.smooth&&!o.getAttribute(`normal`)&&o.computeVertexNormals();let s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=new vi().getNormalMatrix(t),u=i*9301+49297,d=new B,f=new B,p=new B;for(let e=0;e<s.count;e+=3){kp.fromBufferAttribute(s,e).applyMatrix4(t),Ap.fromBufferAttribute(s,e+1).applyMatrix4(t),jp.fromBufferAttribute(s,e+2).applyMatrix4(t),u=(u*9301+49297)%233280;let i=u/233280;this.slot=n;let o=a?a((kp.y+Ap.y+jp.y)/3):1;this.smooth&&c?(d.fromBufferAttribute(c,e).applyMatrix3(l).normalize(),f.fromBufferAttribute(c,e+1).applyMatrix3(l).normalize(),p.fromBufferAttribute(c,e+2).applyMatrix3(l).normalize(),this.tri(kp,Ap,jp,1+(i-.5)*2*r,d,f,p,o)):this.tri(kp,Ap,jp,1+(i-.5)*2*r,void 0,void 0,void 0,o)}o!==e&&o.dispose()}build(){return{pos:new Float32Array(this.p),slot:new Uint8Array(this.s),shade:new Float32Array(this.sh),nrm:this.smooth?new Float32Array(this.nr):void 0,ao:new Float32Array(this.oc)}}},Lp=(e,t,n,r=1.6)=>{e.deleteAttribute(`normal`),e.deleteAttribute(`uv`);let i=gp(e,1e-4);e.dispose();let a=i.getAttribute(`position`),o=new B,s=new B,c=n*.137%10;for(let e=0;e<a.count;e++){o.fromBufferAttribute(a,e),s.copy(o).normalize();let n=Math.sin(o.x*r+c)*Math.cos(o.y*r*1.3+c*2)*.5+Math.sin(o.z*r*2.1+o.x*.7+c*3)*.3+Math.sin((o.x+o.y+o.z)*r*3.3+c)*.2;o.addScaledVector(s,n*t),a.setXYZ(e,o.x,o.y,o.z)}return i.computeVertexNormals(),i},q={rock:0,rockDark:1,rockLight:2,foliage:3,foliageDark:4,wood:5,snow:6,accent:7,ground:8,white:9,red:10,woodDark:11,metal:12,orange:13,cloth:14,hazard:15,bark:16,flower:17,ice:18},J=(e=0,t=0,n=0,r=0,i=0,a=0,o=1,s=1,c=1)=>{let l=new hi().setFromAxisAngle(new B(1,0,0),r);return l.multiply(new hi().setFromAxisAngle(new B(0,1,0),i)),l.multiply(new hi().setFromAxisAngle(new B(0,0,1),a)),new V().compose(new B(e,t,n),l,new B(o,s,c))},Rp=null,zp=(e,t=!0)=>{let n=new Ip(t);return e(n),n.build()},Bp=e=>t=>.55+.45*Math.min(1,Math.max(0,t/e)),Vp=(e,t,n,r)=>{let i=new As(e,t,n,2,!0),a=i.getAttribute(`position`),o=new B;for(let e=0;e<a.count;e++){if(o.fromBufferAttribute(a,e),o.y<0){let e=Math.atan2(o.z,o.x),n=1+Math.sin(e*3+r)*.08+Math.sin(e*7+r*2)*.05;o.x*=n,o.z*=n,o.y-=Math.abs(Math.sin(e*4+r))*t*.08}a.setXYZ(e,o.x,o.y,o.z)}return i.computeVertexNormals(),i},Hp=(e,t,n,r)=>Lp(new ac(e,t),n,r),Up=()=>{if(Rp)return Rp;let e={},t=(e,t)=>zp(n=>{n.add(new ks(.09,.2,1.4*t,7),J(0,.7*t,0),q.bark,.08,1,Bp(1));for(let r=0;r<5;r++){let i=r/4,a=(1.35-i*.95)*(.9+r%2*.08),o=(1.25-i*.45)*t,s=(.9+r*.78)*t+o*.5;n.add(Vp(a,o,9,r*1.7+(e?3:0)),J(0,s,0,0,r*.7),r<2?q.foliageDark:q.foliage,.07,r+3,()=>.62+i*.38),e&&n.add(Vp(a*.86,o*.32,9,r*2.1),J(0,s+o*.36,0,0,r*.7+.2),q.snow,.03,r+9)}});e.pine=t(!1,1),e.pineTall=t(!1,1.35),e.pineSnow=t(!0,1),e.juniper=zp(e=>{e.add(new ks(.08,.22,1.7,6),J(.1,.85,0,0,0,-.22),q.bark,.1,1,Bp(1.2)),e.add(new ks(.05,.1,1.1,5),J(.5,1.55,0,0,0,-.95),q.bark,.1,2),e.add(Hp(.85,2,.18,3),J(.15,2,0,0,0,0,1.25,.62,1.1),q.foliage,.12,2,()=>.85),e.add(Hp(.6,2,.15,5),J(1,1.82,.1,0,0,0,1.15,.6,1),q.foliageDark,.12,4,()=>.8)}),e.shrub=zp(e=>{e.add(Hp(.55,2,.16,9),J(0,.3,0,0,0,0,1.25,.7,1.1),q.foliage,.12,1,Bp(.6)),e.add(Hp(.38,2,.12,11),J(.45,.22,.2,0,0,0,1,.75,1),q.foliageDark,.12,2,Bp(.5))}),e.tuft=zp(e=>{for(let t=0;t<7;t++){let n=t*2.4;e.add(new As(.035,.42+t%3*.12,3),J(Math.cos(n)*.1,.2,Math.sin(n)*.1,Math.cos(n)*.35,0,Math.sin(n)*.35),t%2?q.foliage:q.foliageDark,.15,t,()=>.75)}},!1),e.flowers=zp(e=>{for(let t=0;t<5;t++){let n=t*1.9,r=.12+t%2*.1;e.add(new ks(.012,.012,.28,3),J(Math.cos(n)*r,.14,Math.sin(n)*r),q.foliage,.1,t),e.add(new ac(.045,0),J(Math.cos(n)*r,.3,Math.sin(n)*r),q.flower,.15,t)}},!1);for(let t=0;t<4;t++)e[`rock${t}`]=zp(e=>{e.add(Hp(1,2,.32,17+t*13),J(0,.38,0,0,t,0,1.15,.72,1),t%2?q.rock:q.rockLight,.05,t+1,Bp(.7))});return e.slabRock=zp(e=>{e.add(Hp(1,2,.18,61),J(0,.25,0,0,.4,.08,1.6,.42,1.1),q.rockLight,.05,1,Bp(.4))}),e.spire=zp(e=>{e.add(Lp(new ks(.3,1.25,5,9,6),.32,41,1.1),J(0,2.5,0),q.rock,.06,4,Bp(5)),e.add(Lp(new ks(.12,.38,1.4,7,3),.1,43),J(.05,5.6,0),q.rockLight,.06,5)}),e.crystal=zp(e=>{for(let[t,n,r,i,a,o,s,c]of[[0,0,0,0,0,0,.32,1.6],[.32,0,.1,.35,0,-.45,.22,1.05],[-.28,0,-.05,-.2,0,.5,.24,1.15],[.05,0,.32,.5,0,.1,.18,.8]])e.add(new oc(1,0),J(t,n+c*.5,r,i,a,o,s,c,s),q.accent,.22,Math.round(c*10))},!1),e.iceSpike=zp(e=>{e.add(Lp(new As(.35,2.4,7,3),.05,3),J(0,1.2,0),q.ice,.1),e.add(Lp(new As(.22,1.4,6,2),.04,5),J(.35,.7,.1,0,0,-.35),q.ice,.1,2),e.add(Lp(new As(.2,1.1,6,2),.04,7),J(-.3,.55,-.1,0,0,.4),q.ice,.1,3)}),e.stalagmite=zp(e=>{e.add(Lp(new As(.5,2.2,8,4),.1,51,2.2),J(0,1.1,0),q.rockDark,.06,3,Bp(2)),e.add(Lp(new As(.3,1.2,7,3),.06,53,2.2),J(.5,.6,.2),q.rock,.06,4,Bp(1))}),e.stalactite=zp(e=>{e.add(Lp(new As(.42,1.8,8,4),.08,61,2.2),J(0,-.9,0,Math.PI,0,0),q.rockDark,.06,3)}),e.icicle=zp(e=>{for(let t=0;t<4;t++)e.add(Lp(new As(.12+t%2*.06,.9+t%3*.4,6,2),.02,t),J(-.45+t*.3,-.45-t%3*.2,0,Math.PI,0,0),q.ice,.08,t)}),e.mushroom=zp(e=>{e.add(new ks(.05,.07,.38,6),J(0,.19,0),q.white,.08),e.add(new cc(.24,9,5,0,Math.PI*2,0,Math.PI/2),J(0,.36,0,0,0,0,1,.55,1),q.accent,.08)}),e.hold=zp(e=>{e.add(Hp(.15,1,.05,71),J(0,.03,0,0,0,0,1.3,.42,.9),q.white,.06,1,()=>1)}),e.cairn=zp(e=>{[[0,.18,0,.62,.28],[.05,.5,.02,.48,.24],[-.03,.78,-.02,.36,.2],[.02,1,.01,.25,.16],[0,1.16,0,.15,.12]].forEach(([t,n,r,i,a],o)=>e.add(Hp(1,1,.1,81+o),J(t,n,r,0,o,0,i,a,i*.9),o%2?q.rockLight:q.rock,.06,o,Bp(1.2)))}),e.tent=zp(e=>{let t=new cc(1.25,16,8,0,Math.PI*2,0,Math.PI/2);e.add(t,J(0,0,0,0,0,0,1.25,.82,1),q.orange,.04,2,()=>.9),e.add(new cc(.62,10,6,0,Math.PI,0,Math.PI/2),J(0,0,1.15,0,-Math.PI/2,0,1,.9,.7),q.woodDark,.04,3,()=>.7);for(let t of[.4,2,3.6,5.2])e.add(new ks(.008,.008,1.3,3),J(Math.cos(t)*1.55,.35,Math.sin(t)*1.1,Math.sin(t)*.9,0,-Math.cos(t)*.9),q.white,0)}),e.log=zp(e=>{e.add(new ks(.16,.18,1.5,9),J(0,.17,0,0,0,Math.PI/2),q.bark,.08,1,()=>.8)}),e.pack=zp(e=>{e.add(new cc(.34,10,8),J(0,.38,0,-.2,0,0,1,1.25,.72),q.red,.04,1,Bp(.7)),e.add(new ks(.13,.13,.62,9),J(0,.86,-.08,0,0,Math.PI/2),q.cloth,.05,2),e.add(new lc(.18,.05,6,14),J(.05,.35,.24,.1,.2,0),q.white,.05,3)}),e.post=zp(e=>{e.add(new ks(.13,.17,1,7),J(0,.5,0),q.wood,.08,1)}),e.beam=zp(e=>{e.add(new Os(1,.3,.3),J(0,0,0),q.wood,.08,1)},!1),e.plank=zp(e=>{e.add(new Os(1,.1,.32),J(0,-.05,0),q.wood,.16,1)},!1),e.lantern=zp(e=>{e.add(new ks(.1,.1,.24,8),J(0,0,0),q.accent,.04,1),e.add(new As(.16,.12,8),J(0,.18,0),q.metal,.04,2)}),e.flagPole=zp(e=>{e.add(new ks(.05,.07,6,7),J(0,3,0),q.metal,.04,1),e.add(new cc(.11,8,6),J(0,6.05,0),q.accent,0,2)}),e.marker=zp(e=>{e.add(new ks(.08,.1,1.4,7),J(0,.7,0),q.wood,.06,1,Bp(1.4)),e.add(new ks(.085,.085,.2,7),J(0,1.18,0),q.red,0,2)}),e.shrine=zp(e=>{e.add(Hp(1,2,.16,5),J(0,.45,0,0,0,0,1.3,.55,1.1),q.rock,.05,1,Bp(.9)),e.add(Hp(1,2,.14,7),J(.05,1.05,0,0,.6,0,.95,.45,.85),q.rockLight,.05,2,Bp(1.6)),e.add(new Os(1.4,.16,1),J(0,1.45,0,0,.3,0),q.rockLight,.05,3)}),e.frame=zp(e=>{for(let t of[-1,1])e.add(new ks(.17,.2,4.6,7),J(t*4.1,2.3,0,0,0,t*-.05),q.wood,.08,2,Bp(4.6));e.add(new ks(.2,.2,8.8,7),J(0,4.6,0,0,0,Math.PI/2),q.woodDark,.08,3)}),Rp=e,e},Wp=(e,t,n)=>Math.sqrt(e*e+t*t+n*n),Gp=(e,t,n)=>{if(n<=0)return Math.min(e,t);let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25},Kp=(e,t,n)=>-Gp(-e,-t,n),qp=(e,t,n,r)=>{let i=t-e.a[0],a=n-e.a[1],o=r-e.a[2];if(e.rot){let t=e.rot,n=t[0]*i+t[1]*a+t[2]*o,r=t[3]*i+t[4]*a+t[5]*o,s=t[6]*i+t[7]*a+t[8]*o;i=n,a=r,o=s}switch(e.kind){case`ellipsoid`:{let t=e.r,n=Wp(i/t[0],a/t[1],o/t[2]),r=Wp(i/(t[0]*t[0]),a/(t[1]*t[1]),o/(t[2]*t[2]));return r>1e-9?n*(n-1)/r:-Math.min(t[0],t[1],t[2])}case`cone`:{let t=e.b,n=t[0]-e.a[0],r=t[1]-e.a[1],s=t[2]-e.a[2],c=n*n+r*r+s*s,l=e.ra-e.rb,u=c-l*l,d=1/c,f=i*n+a*r+o*s,p=f-c,m=i*c-n*f,h=a*c-r*f,g=o*c-s*f,_=m*m+h*h+g*g,v=f*f*c,y=p*p*c,b=Math.sign(l)*l*l*_;return Math.sign(p)*u*y>b?Math.sqrt(_+y)*d-e.rb:Math.sign(f)*u*v<b?Math.sqrt(_+v)*d-e.ra:(Math.sqrt(_*u*d)+f*l)*d-e.ra}case`box`:{let t=e.r,n=e.ra??0,r=Math.abs(i)-t[0]+n,s=Math.abs(a)-t[1]+n,c=Math.abs(o)-t[2]+n;return Wp(Math.max(r,0),Math.max(s,0),Math.max(c,0))+Math.min(Math.max(r,Math.max(s,c)),0)-n}case`torus`:{let t=Math.sqrt(i*i+o*o)-e.ra;return Math.sqrt(t*t+a*a)-e.rb}}},Jp=e=>{let t=e.k+.02,n,r;switch(e.kind){case`ellipsoid`:case`box`:{let t=Math.max(...e.r)*(e.rot?1.42:1);n=[e.a[0]-t,e.a[1]-t,e.a[2]-t],r=[e.a[0]+t,e.a[1]+t,e.a[2]+t],e.rot||(n=[e.a[0]-e.r[0],e.a[1]-e.r[1],e.a[2]-e.r[2]],r=[e.a[0]+e.r[0],e.a[1]+e.r[1],e.a[2]+e.r[2]]);break}case`cone`:{let t=Math.max(e.ra,e.rb),i=e.b;n=[Math.min(e.a[0],i[0])-t,Math.min(e.a[1],i[1])-t,Math.min(e.a[2],i[2])-t],r=[Math.max(e.a[0],i[0])+t,Math.max(e.a[1],i[1])+t,Math.max(e.a[2],i[2])+t];break}case`torus`:{let t=e.ra+e.rb;n=[e.a[0]-t,e.a[1]-t,e.a[2]-t],r=[e.a[0]+t,e.a[1]+t,e.a[2]+t];break}}e.lo=[n[0]-t,n[1]-t,n[2]-t],e.hi=[r[0]+t,r[1]+t,r[2]+t]},Yp=class{prims=[];add(e){return Jp(e),this.prims.push(e),this}dist(e,t,n){let r=1,i=!1;for(let a of this.prims){if(a.sub||e<a.lo[0]||t<a.lo[1]||n<a.lo[2]||e>a.hi[0]||t>a.hi[1]||n>a.hi[2])continue;let o=qp(a,e,t,n);r=i?Gp(r,o,a.k):o,i=!0}if(!i)return .05;for(let i of this.prims)i.sub&&(e<i.lo[0]||t<i.lo[1]||n<i.lo[2]||e>i.hi[0]||t>i.hi[1]||n>i.hi[2]||(r=Kp(r,-qp(i,e,t,n),i.k)));return r}distRow(e,t,n,r,i,a,o){let s=[],c=[];for(let n of this.prims)e<n.lo[1]||t<n.lo[2]||e>n.hi[1]||t>n.hi[2]||(n.sub?c:s).push(n);for(let l=0;l<i;l++){let i=n+l*r,u=1,d=!1;for(let n of s){if(i<n.lo[0]||i>n.hi[0])continue;let r=qp(n,i,e,t);u=d?Gp(u,r,n.k):r,d=!0}if(!d)a[o+l]=.05;else{for(let n of c)i<n.lo[0]||i>n.hi[0]||(u=Kp(u,-qp(n,i,e,t),n.k));a[o+l]=u}}}nearest(e,t,n){let r=null,i=null,a=1/0,o=1/0;for(let s of this.prims){if(s.sub||e<s.lo[0]-.08||t<s.lo[1]-.08||n<s.lo[2]-.08||e>s.hi[0]+.08||t>s.hi[1]+.08||n>s.hi[2]+.08)continue;let c=Math.abs(qp(s,e,t,n));c<a?(i=r,o=a,r=s,a=c):c<o&&(i=s,o=c)}return{p1:r,d1:a,p2:i,d2:o}}},Xp=(e,t,n,r)=>{let i=Math.ceil((n[0]-t[0])/r)+1,a=Math.ceil((n[1]-t[1])/r)+1,o=Math.ceil((n[2]-t[2])/r)+1,s=i*a,c=new Float32Array(i*a*o);for(let n=0;n<o;n++){let o=t[2]+n*r;for(let l=0;l<a;l++)e.distRow(t[1]+l*r,o,t[0],r,i,c,n*s+l*i)}let l=[0,1,i,i+1,s,s+1,s+i,s+i+1],u=[0,2,4,6,0,1,4,5,0,1,2,3],d=[1,3,5,7,2,3,6,7,4,5,6,7],f=[0,1,0,1,0,1,0,1],p=[0,0,1,1,0,0,1,1],m=[0,0,0,0,1,1,1,1],h=i-1,g=a-1,_=new Int32Array(h*g*(o-1)).fill(-1),v=65536,y=new Float32Array(v*3),b=new Float32Array(v*3),x=0,S=new Float32Array(8);for(let e=0;e<o-1;e++)for(let n=0;n<a-1;n++){let a=e*s+n*i;for(let o=0;o<i-1;o++){let i=a+o,s=0;for(let e=0;e<8;e++){let t=c[i+l[e]];S[e]=t,t<0&&s++}if(s===0||s===8)continue;let C=0,w=0,T=0,E=0;for(let e=0;e<12;e++){let t=S[u[e]],n=S[d[e]];if(t<0==n<0)continue;let r=t/(t-n),i=u[e],a=d[e];C+=f[i]+(f[a]-f[i])*r,w+=p[i]+(p[a]-p[i])*r,T+=m[i]+(m[a]-m[i])*r,E++}if(x>=v){v*=2;let e=new Float32Array(v*3);e.set(y),y=e;let t=new Float32Array(v*3);t.set(b),b=t}let D=C/E,O=w/E,k=T/E;y[x*3]=t[0]+(o+D)*r,y[x*3+1]=t[1]+(n+O)*r,y[x*3+2]=t[2]+(e+k)*r;let A=(S[1]-S[0])*(1-O)*(1-k)+(S[3]-S[2])*O*(1-k)+(S[5]-S[4])*(1-O)*k+(S[7]-S[6])*O*k,j=(S[2]-S[0])*(1-D)*(1-k)+(S[3]-S[1])*D*(1-k)+(S[6]-S[4])*(1-D)*k+(S[7]-S[5])*D*k,ee=(S[4]-S[0])*(1-D)*(1-O)+(S[5]-S[1])*D*(1-O)+(S[6]-S[2])*(1-D)*O+(S[7]-S[3])*D*O,M=Math.sqrt(A*A+j*j+ee*ee)||1;b[x*3]=A/M,b[x*3+1]=j/M,b[x*3+2]=ee/M,_[(e*g+n)*h+o]=x++}}let C=1<<17,w=new Uint32Array(C),T=0,E=(e,t,n)=>(n*g+t)*h+e,D=(e,t,n,r,i)=>{if(!(e<0||t<0||n<0||r<0)){if(T+6>C){C*=2;let e=new Uint32Array(C);e.set(w),w=e}i?(w[T++]=e,w[T++]=n,w[T++]=t,w[T++]=e,w[T++]=r,w[T++]=n):(w[T++]=e,w[T++]=t,w[T++]=n,w[T++]=e,w[T++]=n,w[T++]=r)}};for(let e=1;e<o-1;e++)for(let t=1;t<a-1;t++)for(let n=1;n<i-1;n++){let r=e*s+t*i+n,a=c[r]<0;a!==c[r+1]<0&&D(_[E(n,t-1,e-1)],_[E(n,t,e-1)],_[E(n,t,e)],_[E(n,t-1,e)],!a),a!==c[r+i]<0&&D(_[E(n-1,t,e-1)],_[E(n-1,t,e)],_[E(n,t,e)],_[E(n,t,e-1)],!a),a!==c[r+s]<0&&D(_[E(n-1,t-1,e)],_[E(n,t-1,e)],_[E(n,t,e)],_[E(n-1,t,e)],!a)}return{positions:y.slice(0,x*3),normals:b.slice(0,x*3),indices:w.slice(0,T)}},Y={root:0,hips:1,spine:2,chest:3,neck:4,head:5,upperArmL:6,foreArmL:7,handL:8,upperArmR:9,foreArmR:10,handR:11,thighL:12,shinL:13,footL:14,thighR:15,shinR:16,footR:17},Zp=18,Qp=[[-1,0,0,0],[0,0,.94,0],[1,0,1.08,-.005],[2,0,1.27,-.01],[3,0,1.46,0],[4,0,1.54,.005],[3,.19,1.405,-.01],[6,.255,1.14,-.012],[7,.31,.895,.002],[3,-.19,1.405,-.01],[9,-.255,1.14,-.012],[10,-.31,.895,.002],[1,.098,.915,0],[12,.104,.5,.014],[13,.108,.09,-.008],[1,-.098,.915,0],[15,-.104,.5,.014],[16,-.108,.09,-.008]],$p=[0,.09,.08,.08,.05,.05,.075,.055,.045,.075,.055,.045,.085,.065,.05,.085,.065,.05],em={cloak:0,trim:1,jacket:2,trousers:3,boots:4,gloves:5,mask:6,harness:7,pack:8,wrap:9},tm=.235,nm=null,rm=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},im=.0145,am=e=>{im=e,nm=null},om=()=>{if(nm)return nm;let e=new Yp,t=e=>[Qp[e][1],Qp[e][2],Qp[e][3]];e.add({kind:`ellipsoid`,a:[0,1.588,-.004],r:[.09,.106,.088],k:.02,mat:em.mask,bone:Y.head}),e.add({kind:`ellipsoid`,a:[0,1.606,-.008],r:[.121,.14,.133],k:.03,mat:em.cloak,bone:Y.head}),e.add({kind:`cone`,a:[0,1.68,-.07],b:[0,1.585,-.215],ra:.074,rb:.01,k:.05,mat:em.cloak,bone:Y.head}),e.add({kind:`ellipsoid`,a:[0,1.672,.082],r:[.098,.03,.052],k:.03,mat:em.cloak,bone:Y.head}),e.add({kind:`ellipsoid`,a:[0,1.572,.124],r:[.077,.088,.066],k:.026,sub:!0,mat:em.cloak,bone:Y.head}),e.add({kind:`cone`,a:[0,1.43,0],b:[0,1.53,.005],ra:.054,rb:.048,k:.02,mat:em.wrap,bone:Y.neck}),e.add({kind:`cone`,a:[0,1.53,-.07],b:[0,1.39,-.11],ra:.098,rb:.122,k:.045,mat:em.cloak,bone:Y.neck}),e.add({kind:`ellipsoid`,a:[0,1.285,0],r:[.168,.168,.112],k:.05,mat:em.jacket,bone:Y.chest}),e.add({kind:`ellipsoid`,a:[0,1.105,.004],r:[.134,.115,.094],k:.06,mat:em.jacket,bone:Y.spine}),e.add({kind:`ellipsoid`,a:[0,.94,0],r:[.145,.1,.102],k:.05,mat:em.trousers,bone:Y.hips}),e.add({kind:`cone`,a:[0,1.37,-.088],b:[0,1.13,-.124],ra:.122,rb:.104,k:.05,mat:em.cloak,bone:Y.chest}),e.add({kind:`box`,a:[0,1.05,-.135],r:[.098,.07,.05],ra:.03,k:.025,mat:em.pack,bone:Y.spine});for(let[n,r,i,a]of[[Y.upperArmL,Y.foreArmL,Y.handL,1],[Y.upperArmR,Y.foreArmR,Y.handR,-1]]){let o=t(n),s=t(r),c=t(i);e.add({kind:`ellipsoid`,a:[a*.19,1.418,-.006],r:[.084,.043,.088],k:.022,mat:em.trim,bone:n}),e.add({kind:`cone`,a:o,b:s,ra:.056,rb:.046,k:.03,mat:em.jacket,bone:n}),e.add({kind:`cone`,a:s,b:c,ra:.049,rb:.04,k:.022,mat:em.gloves,bone:r}),e.add({kind:`cone`,a:[c[0]+a*.006,c[1]-.02,c[2]+.006],b:[c[0]+a*.016,c[1]-.07,c[2]+.018],ra:.037,rb:.036,k:.016,mat:em.gloves,bone:i})}for(let[n,r,i,a]of[[Y.thighL,Y.shinL,Y.footL,1],[Y.thighR,Y.shinR,Y.footR,-1]]){let o=t(n),s=t(r),c=t(i);e.add({kind:`cone`,a:o,b:s,ra:.094,rb:.066,k:.04,mat:em.trousers,bone:n}),e.add({kind:`cone`,a:s,b:[c[0],c[1]+.07,c[2]],ra:.064,rb:.051,k:.03,mat:em.trousers,bone:r}),e.add({kind:`ellipsoid`,a:[s[0],s[1]+.012,s[2]+.05],r:[.047,.056,.03],k:.016,mat:em.trim,bone:r}),e.add({kind:`cone`,a:[c[0],c[1]+.11,c[2]],b:[c[0],c[1]-.02,c[2]+.006],ra:.062,rb:.067,k:.03,mat:em.boots,bone:i}),e.add({kind:`box`,a:[c[0]+a*.002,.046,c[2]+.058],r:[.06,.046,.118],ra:.036,k:.03,mat:em.boots,bone:i})}let n=Xp(e,[-.4,-.005,-.25],[.4,1.78,.21],im),r=n.positions.length/3,i=new Uint16Array(r*4),a=new Float32Array(r*4),o=new Uint8Array(r),s=new Uint8Array(r),c=new Float32Array(r),l=new Uint8Array(r),u=new Float32Array(r),d=new Float32Array(r),f=Qp.map(()=>[]);Qp.forEach(([e],t)=>e>=0&&f[e].push(t));for(let t=0;t<r;t++){let r=n.positions[t*3],p=n.positions[t*3+1],m=n.positions[t*3+2],{p1:h,d1:g,p2:_,d2:v}=e.nearest(r,p,m),y=h.bone,b=y,x=0,S=e=>Math.hypot(r-Qp[e][1],p-Qp[e][2],m-Qp[e][3]),C=Qp[y][0];if(C>0){let e=1-S(y)/$p[y];e>0&&(x=.5*rm(0,1,e),b=C)}for(let e of f[y]){let t=1-S(e)/$p[e];t>0&&.5*rm(0,1,t)>x&&(x=.5*rm(0,1,t),b=e)}i[t*4]=y,i[t*4+1]=b,a[t*4]=1-x,a[t*4+1]=x,o[t]=h.mat,s[t]=_?_.mat:h.mat,c[t]=_&&_.mat!==h.mat?.5*(1-rm(0,.012,v-g)):0;let w=0,T=em.harness,E=y===Y.chest||y===Y.spine||y===Y.hips;if(E&&h.mat===em.jacket){let e=Math.abs(Math.abs(r)-.07+(p-1.25)*.05);m>.02&&p>1.05&&p<1.4&&(w=Math.max(w,1-rm(.008,.014,e))),m>.03&&(w=Math.max(w,1-rm(.007,.012,Math.abs(p-1.262))))}if(E&&h.mat!==em.cloak&&h.mat!==em.pack&&(w=Math.max(w,1-rm(.016,.022,Math.abs(p-1)))),h.mat===em.trousers&&(y===Y.thighL||y===Y.thighR)&&(w=Math.max(w,1-rm(.007,.012,Math.abs(p-(.86-Math.abs(r)*.1))))),h.mat===em.gloves&&(y===Y.foreArmL||y===Y.foreArmR)){let e=p-Qp[y][2],t=Math.abs((e/.042%1+1)%1-.5);w=Math.max(w,(1-rm(.12,.2,t))*.8),T=em.trim}if(h.mat===em.cloak&&y===Y.head&&m>.05){let e=r/.077,t=(p-1.572)/.088,n=(m-.124)/.066;w=Math.max(w,1-rm(1.12,1.3,Math.sqrt(e*e+t*t+n*n))),T=em.trim}if(h.mat===em.cloak&&y===Y.chest&&(w=Math.max(w,1-rm(1.14,1.17,p)),T=em.trim),h.mat===em.boots&&p<.014&&(w=1,T=em.mask),l[t]=T,u[t]=w,d[t]=1,h.mat===em.cloak){let e=Math.sin(r*61+Math.sin(p*23)*1.6)*.5+Math.sin(m*47+r*19)*.5;d[t]=.9+e*.08}if(y===Y.head&&m>-.02){let e=r/.077,n=(p-1.572)/.088,i=1-rm(.8,1.15,e*e+n*n),a=1-rm(.08,.125,m);d[t]*=1-i*a*.88}if(h.mat===em.wrap){let e=(p*.9+r*.55)/.024;d[t]=.78+.22*rm(.15,.55,Math.abs((e%1+1)%1-.5)*2)}}let p=new ho;return p.setAttribute(`position`,new U(n.positions,3)),p.setAttribute(`normal`,new U(n.normals,3)),p.setAttribute(`color`,new U(new Float32Array(r*3),3)),p.setAttribute(`skinIndex`,new to(i,4)),p.setAttribute(`skinWeight`,new U(a,4)),p.setIndex(new eo(n.indices,1)),p.computeBoundingSphere(),nm={geo:p,regA:o,regB:s,mixAB:c,band:l,bandAmt:u,shade:d},nm},sm=e=>new H().setHex(e),cm={x:.073,y:1.571,h:.081,z:.106},lm=(e,t,n)=>{let r=Math.min(1,e*e+t*t),i=Math.max(0,-t),a=Math.exp(-(((t-.44)/.16)**2))*(1-e*e);return n.set(e*cm.x*(1-.13*i**2.2),cm.y+t*cm.h,cm.z-e*e*.046-Math.max(0,t)**2*.018-i**2*.022-Math.abs(e)*.006+a*.005-r**3*.02)},um=()=>{let e=new B,t=new B,n=new B,r=[],i=[];lm(0,0,e),r.push(e.x,e.y,e.z);for(let t=1;t<=14;t++)for(let n=0;n<48;n++){let i=n/48*Math.PI*2;lm(t/14*Math.cos(i),t/14*Math.sin(i),e),r.push(e.x,e.y,e.z)}let a=(e,t)=>e===0?0:1+(e-1)*48+(t%48+48)%48;for(let e=0;e<48;e++)i.push(0,a(1,e),a(1,e+1));for(let e=1;e<14;e++)for(let t=0;t<48;t++)i.push(a(e,t),a(e+1,t),a(e,t+1),a(e,t+1),a(e+1,t),a(e+1,t+1));let o=new ho;o.setAttribute(`position`,new U(r,3)),o.setIndex(i),o.computeVertexNormals();let s=[1,1,1];for(let e=1;e<=14;e++){let t=1-.96*rm(.35,1,e/14)**1.2;for(let e=0;e<48;e++)s.push(t,t,t)}o.setAttribute(`color`,new U(s,3));let c=(r,i)=>{let a=.78,o=[],s=[],c=[],l=[];for(let l=0;l<=40;l++){let u=-.78+2*a*l/40,d=r*Math.sqrt(Math.max(0,1-(Math.abs(u)/a)**3));for(let r=0;r<=6;r++){let a=.2+(r/6-.5)*2*d;lm(u,a,e),lm(u+.001,a,t).sub(e),lm(u,a+.001,n).sub(e);let f=t.cross(n).normalize();o.push(e.x+f.x*i,e.y+f.y*i,e.z+f.z*i),s.push(f.x,f.y,f.z),c.push(l/40,r/6)}}for(let e=0;e<40;e++)for(let t=0;t<6;t++){let n=e*7+t;l.push(n,n+6+1,n+1,n+1,n+6+1,n+6+2)}let u=new ho;return u.setAttribute(`position`,new U(o,3)),u.setAttribute(`normal`,new U(s,3)),u.setAttribute(`uv`,new U(c,2)),u.setIndex(l),u};return{plate:o,visor:c(.06,.0016),halo:c(.2,.0024)}},dm=e=>[sm(e.cloak),sm(e.trim),sm(e.jacket),sm(e.trousers),sm(e.boots),sm(e.gloves),sm(e.mask),sm(e.harness),sm(e.pack),sm(e.mask).lerp(sm(e.trim),.3).multiplyScalar(1.9)],fm=()=>{let e=new Sc({vertexColors:!0}),t={uRim:{value:new H(1,.85,.7)},uRimAmt:{value:.3}};return e.onBeforeCompile=e=>{e.uniforms.uRim=t.uRim,e.uniforms.uRimAmt=t.uRimAmt,e.fragmentShader=`uniform vec3 uRim;\nuniform float uRimAmt;\n${e.fragmentShader}`.replace(`#include <opaque_fragment>`,`{ float rimK = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.5);
         outgoingLight += uRim * rimK * uRimAmt; }
       #include <opaque_fragment>`)},e.rim=t,e},pm=57,X=(e,t,n,r=0,i=0)=>{e[t*3]=n,e[t*3+1]=r,e[t*3+2]=i},mm=54,hm=(e,t,n,r)=>{e[mm]=t,e[55]=n,e[56]=r},gm=e=>e.fill(0),_m=(e,t,n)=>{let r=Math.sin(t),i=Math.cos(t),a=T(n/14,.65,1.25);gm(e),X(e,Y.hips,0,r*.14,0),X(e,Y.spine,.14*a,-r*.1,0),X(e,Y.chest,.08*a,-r*.12,0),X(e,Y.head,-.16*a,r*.06,0),X(e,Y.thighL,-r*.95*a,0,.03),X(e,Y.thighR,r*.95*a,0,-.03),X(e,Y.shinL,Math.max(0,Math.sin(t-1.25))*1.45*a+.14),X(e,Y.shinR,Math.max(0,Math.sin(t+Math.PI-1.25))*1.45*a+.14),X(e,Y.footL,-.15+Math.max(0,-r)*.35),X(e,Y.footR,-.15+Math.max(0,r)*.35),X(e,Y.upperArmL,r*.85*a,0,.1),X(e,Y.upperArmR,-r*.85*a,0,-.1),X(e,Y.foreArmL,-1.25-Math.max(0,r)*.2),X(e,Y.foreArmR,-1.25-Math.max(0,-r)*.2),hm(e,0,Math.abs(i)*.07*a-.035,0)},vm=(e,t)=>{let n=T(t/10,-1,1),r=T(.55+n*.55,0,1);gm(e),X(e,Y.spine,.16,0,0),X(e,Y.chest,.08,0,0),X(e,Y.head,-.12,0,0),X(e,Y.thighL,-1.25*r-.15,0,.06),X(e,Y.thighR,-.55*r-.05,0,-.06),X(e,Y.shinL,1.7*r+.2),X(e,Y.shinR,1.15*r+.3),X(e,Y.upperArmL,-2.25+n*.3,0,.42),X(e,Y.upperArmR,-1.85+n*.3,0,-.42),X(e,Y.foreArmL,-.4),X(e,Y.foreArmR,-.6),hm(e,0,.05,0)},ym=(e,t)=>{let n=Math.sin(t),r=.5+.5*n,i=.5-.5*n;gm(e),X(e,Y.hips,.04,0,n*.12),X(e,Y.spine,.08,0,-n*.06),X(e,Y.chest,.06,0,-n*.06),X(e,Y.head,-.5,n*.16,0),X(e,Y.upperArmL,-2.45-.5*r,0,.28),X(e,Y.upperArmR,-2.45-.5*i,0,-.28),X(e,Y.foreArmL,-1*(1-r)-.12),X(e,Y.foreArmR,-1*(1-i)-.12),X(e,Y.handL,-.3*r),X(e,Y.handR,-.3*i),X(e,Y.thighL,-.35-.95*i,0,.38),X(e,Y.thighR,-.35-.95*r,0,-.38),X(e,Y.shinL,.4+1.35*i),X(e,Y.shinR,.4+1.35*r),X(e,Y.footL,-.3),X(e,Y.footR,-.3),hm(e,n*.07,-.04+Math.abs(Math.cos(t))*.05,.07)},bm=(e,t,n)=>{let r=T(t/8,-1,1);gm(e),X(e,Y.hips,-.06,0,0),X(e,Y.spine,-.12,0,0),X(e,Y.chest,-.06,0,0),X(e,Y.head,-.75,0,0),X(e,Y.upperArmL,-3.02,0,.16+r*.08),X(e,Y.upperArmR,-3.02,0,-.16-r*.08),X(e,Y.foreArmL,-.05),X(e,Y.foreArmR,-.05),X(e,Y.thighL,.25-r*.45-n*.2,0,.12),X(e,Y.thighR,.05-r*.3,0,-.12),X(e,Y.shinL,.45),X(e,Y.shinR,.8),X(e,Y.footL,.4),X(e,Y.footR,.4),hm(e,0,.06,-.05)},xm=(e,t,n)=>{let r=Math.sin(t*3.1)*.05;gm(e),X(e,Y.hips,.1,.35,-n*.2),X(e,Y.spine,.32,-.15,-n*.25),X(e,Y.chest,.12,-.12,-n*.12),X(e,Y.head,-.42,-.1,n*.15),X(e,Y.thighL,-1.05+r,0,.32),X(e,Y.thighR,-.65-r,0,-.38),X(e,Y.shinL,1.45),X(e,Y.shinR,1.05),X(e,Y.footL,-.35),X(e,Y.footR,-.2),X(e,Y.upperArmL,-.55,0,1.15+n*.3),X(e,Y.upperArmR,-.35,0,-1.2+n*.3),X(e,Y.foreArmL,-.45),X(e,Y.foreArmR,-.4),hm(e,0,-.28+r*.3,0)},Sm=(e,t,n)=>{let r=Math.sin(t*1.7)*.06;gm(e),X(e,Y.hips,-.1,0,r-n*.15),X(e,Y.spine,-.14,0,-n*.12),X(e,Y.head,-.2,n*.2,0),X(e,Y.upperArmL,-2.45-n*.3,0,.5),X(e,Y.upperArmR,-2.45+n*.3,0,-.5),X(e,Y.foreArmL,-.75),X(e,Y.foreArmR,-.75),X(e,Y.thighL,-1.15,0,.06),X(e,Y.thighR,-1.05,0,-.06),X(e,Y.shinL,.95+r),X(e,Y.shinR,1.05-r),X(e,Y.footL,.25),X(e,Y.footR,.25),hm(e,0,0,0)},Cm=(e,t)=>{let n=Math.sin(t*4.2)*.18;gm(e),X(e,Y.hips,.15,0,n),X(e,Y.spine,-.2,0,-n*.5),X(e,Y.chest,-.1,0,0),X(e,Y.head,-.55,n,0),X(e,Y.upperArmR,-2.85,0,-.12),X(e,Y.foreArmR,-.35),X(e,Y.upperArmL,-.8+n,0,.9),X(e,Y.foreArmL,-.5),X(e,Y.thighL,-.35+n,0,.12),X(e,Y.thighR,-.15-n,0,-.12),X(e,Y.shinL,.65),X(e,Y.shinR,.45),hm(e,0,-.1,0)},wm=(e,t)=>{let n=Math.sin(t*1.9)*.025,r=Math.sin(t*.37)*.5+Math.sin(t*.91)*.15;gm(e),X(e,Y.hips,0,Math.sin(t*.3)*.05,Math.sin(t*.5)*.03),X(e,Y.spine,.03+n,0,0),X(e,Y.chest,n,0,0),X(e,Y.head,-.1+Math.sin(t*.6)*.06,r,0),X(e,Y.upperArmL,.08,0,.12+n),X(e,Y.foreArmL,-.35),X(e,Y.upperArmR,-.25,0,-.2),X(e,Y.foreArmR,-1.45),X(e,Y.thighL,-.04,0,.06),X(e,Y.thighR,.06,0,-.04),X(e,Y.shinL,.08),X(e,Y.shinR,.05),hm(e,0,n*.4,0)},Tm=(e,t)=>{let n=Math.sin(t*9)*.2;gm(e),X(e,Y.spine,-.15,0,0),X(e,Y.chest,-.1,0,0),X(e,Y.head,-.4,0,0),X(e,Y.upperArmL,-2.8,0,.6+n),X(e,Y.upperArmR,-2.95,0,-.35-n),X(e,Y.foreArmL,-.25),X(e,Y.foreArmR,-.6),X(e,Y.thighL,-.08,0,.12),X(e,Y.thighR,.1,0,-.12),X(e,Y.shinL,.2),X(e,Y.shinR,.2)},Em=(e,t)=>{gm(e),X(e,Y.hips,Math.sin(t*9)*.5,0,Math.cos(t*7)*.3),X(e,Y.spine,.3,0,0),X(e,Y.head,-.4,0,0),X(e,Y.upperArmL,-2.2+Math.sin(t*13)*.8,0,1),X(e,Y.upperArmR,-1.6+Math.cos(t*11)*.8,0,-1),X(e,Y.foreArmL,-.4),X(e,Y.foreArmR,-.6),X(e,Y.thighL,-.8+Math.sin(t*10)*.6,0,.4),X(e,Y.thighR,-.3+Math.cos(t*12)*.6,0,-.4),X(e,Y.shinL,.9),X(e,Y.shinR,1.2)},Dm=(e,t)=>{let n=Math.sin(t*2.1)*.15;gm(e),X(e,Y.hips,n*.5,0,0),X(e,Y.head,-.25,Math.sin(t*.8)*.4,0),X(e,Y.upperArmL,-2.65,0,.42),X(e,Y.upperArmR,-2.65,0,-.42),X(e,Y.foreArmL,-.25),X(e,Y.foreArmR,-.25),X(e,Y.thighL,-.15+n,0,.1),X(e,Y.thighR,.1-n,0,-.1),X(e,Y.shinL,.35),X(e,Y.shinR,.25)},Om=(e,t)=>{let n=Math.sin(t*2.4)*.12;gm(e),X(e,Y.hips,-.15,0,n*.4),X(e,Y.spine,.25,0,n),X(e,Y.head,.15,n*2,n),X(e,Y.thighL,-1.5,0,.35),X(e,Y.thighR,-1.45,0,-.35),X(e,Y.shinL,.3),X(e,Y.shinR,.45),X(e,Y.upperArmL,.4,0,.6),X(e,Y.upperArmR,.4,0,-.6),X(e,Y.foreArmL,-.2),X(e,Y.foreArmR,-.2),hm(e,0,-.5,0)},km=new B,Am=new B,jm=new B,Mm=class{mesh;n;pos=[];prev=[];geo;posAttr;inited=!1;constructor(e,t){this.n=e,this.geo=new ho,this.posAttr=new eo(new Float32Array(e*2*3),3),this.geo.setAttribute(`position`,this.posAttr),this.geo.setAttribute(`color`,new eo(new Float32Array(e*2*3),3));let n=[];for(let t=0;t<e-1;t++){let e=t*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}this.geo.setIndex(n),this.mesh=new zo(this.geo,t),this.mesh.frustumCulled=!1;for(let t=0;t<e;t++)this.pos.push(new B),this.prev.push(new B)}},Nm=class extends Mm{seg=.105;constructor(){super(10,new Sc({vertexColors:!0,side:2}))}setColors(e,t){let n=sm(e),r=sm(t),i=this.geo.getAttribute(`color`);for(let e=0;e<this.n;e++){let t=e>this.n-4?r:n;i.setXYZ(e*2,t.r,t.g,t.b),i.setXYZ(e*2+1,t.r*.82,t.g*.82,t.b*.82)}i.needsUpdate=!0}reset(e,t){for(let n=0;n<this.n;n++)this.pos[n].copy(e).addScaledVector(t,n*this.seg),this.prev[n].copy(this.pos[n]);this.inited=!0}update(e,t,n,r,i,a){this.inited||this.reset(t,a);let o=Math.min(e,1/30)/2;for(let e=0;e<2;e++){this.pos[0].copy(t);for(let e=1;e<this.n;e++){let t=this.pos[e],a=this.prev[e];km.subVectors(t,a).multiplyScalar(.9),a.copy(t);let s=Math.sin(i*15-e*.85)*2.4*(e/this.n);t.add(km),t.x+=(r.x+n.x*s)*o*o*60,t.y+=(r.y-9.8+n.y*s+Math.cos(i*12-e)*1.2)*o*o*60,t.z+=(r.z+n.z*s)*o*o*60}for(let e=0;e<3;e++){this.pos[0].copy(t);for(let e=0;e<this.n-1;e++){let t=this.pos[e],n=this.pos[e+1];km.subVectors(n,t);let r=km.length()||1e-4;n.copy(t).addScaledVector(km,this.seg/r)}}}for(let e=0;e<this.n;e++){let t=this.pos[e],r=Math.sin(i*9-e*.7)*.5,a=.078*(1-.55*(e/(this.n-1))**1.5);this.posAttr.setXYZ(e*2,t.x+n.x*a,t.y+n.y*a+r*.02,t.z+n.z*a),this.posAttr.setXYZ(e*2+1,t.x-n.x*a,t.y-n.y*a-r*.02,t.z-n.z*a)}this.posAttr.needsUpdate=!0,this.geo.computeVertexNormals()}},Pm=class extends Mm{len=1;visible=0;constructor(){super(28,new Do({vertexColors:!0,side:2}));let e=this.geo.getAttribute(`color`),t=sm(14267470),n=sm(13187370);for(let r=0;r<this.n;r++){let i=(r>>1)%2?t:n;e.setXYZ(r*2,i.r,i.g,i.b),e.setXYZ(r*2+1,i.r*.75,i.g*.75,i.b*.75)}e.needsUpdate=!0,this.mesh.visible=!1,this.mesh.renderOrder=2}update(e,t,n,r,i){if(this.mesh.visible=this.visible>.02,!this.mesh.visible){this.inited=!1;return}let a=t.distanceTo(n),o=1.04+(1-r)*.06;if(this.len=Math.max(.5,a*o+(1-r)*.6),!this.inited){for(let e=0;e<this.n;e++)this.pos[e].lerpVectors(t,n,e/(this.n-1)),this.prev[e].copy(this.pos[e]);this.inited=!0}let s=this.len/(this.n-1),c=Math.min(e,1/30);for(let e=1;e<this.n-1;e++){let t=this.pos[e],n=this.prev[e];km.subVectors(t,n).multiplyScalar(.92),n.copy(t),t.add(km),t.y-=9.8*c*c}for(let e=0;e<6;e++){this.pos[0].copy(t),this.pos[this.n-1].copy(n);for(let e=0;e<this.n-1;e++){let t=this.pos[e],n=this.pos[e+1];km.subVectors(n,t);let r=km.length()||1e-4,i=(r-s)/r,a=e===0?0:.5,o=e+1===this.n-1?0:.5,c=a+o||1;t.addScaledVector(km,i*a/c),n.addScaledVector(km,-i*o/c)}}let l=.022*Math.min(1,this.visible*1.5);for(let e=0;e<this.n;e++){let t=this.pos[e],n=this.pos[Math.min(this.n-1,e+1)],r=this.pos[Math.max(0,e-1)];Am.subVectors(n,r).normalize(),jm.subVectors(i,t).normalize(),km.crossVectors(Am,jm).normalize().multiplyScalar(l),this.posAttr.setXYZ(e*2,t.x+km.x,t.y+km.y,t.z+km.z),this.posAttr.setXYZ(e*2+1,t.x-km.x,t.y-km.y,t.z-km.z)}this.posAttr.needsUpdate=!0,this.geo.computeBoundingSphere()}},Fm=(e,t,n,r)=>{let i=new Pp,a=t=>{let n=(t-.5)*2.1;return new B(Math.sin(n)*e*.5,Math.cos(n)*e*.32,0)};for(let e=0;e<n;e++){let o=e/n,s=(e+1)/n,c=a(o),l=a(s),u=sm(r[e%r.length]),d=e=>e.clone().add(new B(0,.08,t*.5)),f=e=>e.clone().add(new B(0,-.02,-t*.5)),p=d(c),m=d(l),h=f(c),g=f(l);i.quad(p,m,g,h,u);let _=u.clone().multiplyScalar(.72),v=new B(0,-.12,0);i.quad(p.clone().add(v),h.clone().add(v),g.clone().add(v),m.clone().add(v),_),i.quad(p,p.clone().add(v),m.clone().add(v),m,_)}return i.build()},Im=(e,t,n,r)=>{let i=new Pp;for(let a=0;a<n;a++){let o=a/n*Math.PI*2,s=(a+1)/n*Math.PI*2,c=sm(r[a%r.length]);for(let n=0;n<5;n++){let r=n/5*(Math.PI/2),a=(n+1)/5*(Math.PI/2),l=(n,r)=>new B(Math.cos(n)*Math.sin(r)*e,Math.cos(r)*t,Math.sin(n)*Math.sin(r)*e);i.quad(l(o,r),l(s,r),l(s,a),l(o,a),c.clone().multiplyScalar(1-n*.05))}}return i.build()},Lm=(e,t)=>{let n=new Pp,r=sm(15921126);for(let i of e){let e=new B().subVectors(t,i).normalize(),a=new B().crossVectors(e,new B(0,0,1)).normalize().multiplyScalar(.01);n.quad(i.clone().add(a),t.clone().add(a),t.clone().sub(a),i.clone().sub(a),r)}return n.build()},Rm=`
uniform float uTime;
uniform vec3 uColor;
uniform float uOpacity;
varying vec3 vN;
varying vec3 vV;
varying vec3 vP;
void main() {
  float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
  float scan = 0.5 + 0.5 * sin(vP.y * 26.0 - uTime * 6.0);
  float rune = 0.5 + 0.5 * sin(vP.x * 32.0) * sin(vP.z * 32.0 + uTime);
  float a = (f * 0.9 + scan * 0.08 + rune * 0.05) * uOpacity;
  gl_FragColor = vec4(uColor * a, 1.0);
}`,zm=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vP;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalMatrix * normal;
  vV = -mv.xyz;
  vP = position;
  gl_Position = projectionMatrix * mv;
}`,Bm=class{group=new fa;inner=new fa;body;bones=[];scarf=new Nm;rope=new Pm;glider=new fa;chute=new fa;shield;lamp;lenses;lensMat=new yc({uniforms:{uColor:{value:new H(6289636)}},vertexShader:`
      varying vec3 vN;
      varying vec3 vV;
      varying vec2 vUv;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        vUv = uv;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying vec3 vN;
      varying vec3 vV;
      varying vec2 vUv;
      void main() {
        float d = abs(vUv.y - 0.5) * 2.0;
        float core = exp(-d * d * 4.5);
        float ends = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
        vec3 c = mix(vec3(0.01, 0.013, 0.02), uColor * 1.2, core * (0.25 + 0.75 * ends));
        // a glassy sheen where the sky catches it
        vec3 r = reflect(-normalize(vV), normalize(vN));
        c += vec3(0.85) * pow(max(dot(r, normalize(vec3(-0.4, 0.8, 0.45))), 0.0), 16.0) * 0.3;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`});haloMat=new yc({uniforms:{uColor:{value:new H(6289636)}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying vec2 vUv;
      void main() {
        float d = abs(vUv.y - 0.5) * 2.0;
        float ends = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.65, vUv.x);
        gl_FragColor = vec4(uColor * exp(-d * d * 3.2) * ends * 0.16, 1.0);
        #include <colorspace_fragment>
      }`});maskMat=new xc({color:1250328,specular:1053206,shininess:14,vertexColors:!0});gearMat=new Sc({vertexColors:!0});gliderMat=new Sc({vertexColors:!0,side:2});shieldMat;pose=new Float32Array(pm);target=new Float32Array(pm);material=fm();climber;chuteOpen=0;gliderOpen=0;shieldOn=0;constructor(e){this.group.add(this.inner),this.scarf.mesh.renderOrder=1;for(let e=0;e<Zp;e++){let[t,n,r,i]=Qp[e],a=new Qo;if(t>=0){let[,e,o,s]=Qp[t];a.position.set(n-e,r-o,i-s)}else a.position.set(n,r,i);this.bones.push(a),t>=0&&this.bones[t].add(a)}let t=new Zo(om().geo,this.material);t.add(this.bones[0]),t.updateMatrixWorld(!0),t.bind(new ns(this.bones)),t.frustumCulled=!1,this.body=t,this.inner.add(t);let n=um(),r=new zo(n.plate,this.maskMat);this.lenses=new zo(n.visor,this.lensMat),r.add(this.lenses);let i=new zo(n.halo,this.haloMat);i.renderOrder=2,r.add(i),this.bones[Y.head].add(r),r.position.set(-Qp[Y.head][1],-Qp[Y.head][2],-Qp[Y.head][3]);let a=new Pp,o=sm(12765910),s=sm(3811874),c=sm(14696751);(e=>{let t=new ks(.014,.016,.62,6);t.applyMatrix4(J(e*.03,0,0,0,0,e*.55)),Vm(a,t,s);let n=new Os(.2,.03,.028);n.applyMatrix4(J(e*.03-Math.sin(e*.55)*.31,Math.cos(e*.55)*.31,0,0,0,.65)),Vm(a,n,o)})(1);let l=new lc(.105,.026,6,18);l.applyMatrix4(J(0,.17,-.02,Math.PI/2-.2,0,0,1,1,.75)),Vm(a,l,c);let u=new zo(a.build(),this.gearMat);this.bones[Y.chest].add(u),u.position.set(0,1.17-Qp[Y.chest][2],-.2-Qp[Y.chest][3]);let d=new Pp;for(let e of[-1,1]){let t=new lc(.022,.006,4,10);t.applyMatrix4(J(e*.152,-.04,.05,0,Math.PI/2+e*.4,0,1,1.5,1)),Vm(d,t,o)}let f=new zo(d.build(),this.gearMat);this.bones[Y.hips].add(f),f.position.set(0,1-Qp[Y.hips][2],0);let p=new zo(Fm(4.4,1.25,11,[14178090,15918799]),this.gliderMat);p.position.y=3.4;let m=new zo(Lm([-2,-1,0,1,2].map(e=>new B(e,3.4+Math.cos(e/2.2*1.05)*1.4-.2,0)),new B(0,1.25,0)),new Do({vertexColors:!0,side:2}));this.glider.add(p,m),this.glider.visible=!1;let h=new zo(Im(1.45,.95,12,[14696751,16052198]),new Sc({vertexColors:!0,side:2}));h.position.y=2.75;let g=[];for(let e=0;e<8;e++)g.push(new B(Math.cos(e/8*Math.PI*2)*1.4,2.8,Math.sin(e/8*Math.PI*2)*1.4));let _=new zo(Lm(g,new B(0,1.25,0)),new Do({vertexColors:!0,side:2}));this.chute.add(h,_),this.chute.visible=!1,this.group.add(this.glider,this.chute),this.shieldMat=new yc({vertexShader:zm,fragmentShader:Rm,transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uColor:{value:new H(7334399)},uOpacity:{value:0}}}),this.shield=new zo(new ac(1.15,3),this.shieldMat),this.shield.position.y=.88,this.shield.visible=!1,this.group.add(this.shield),this.lamp=new zo(new cc(.022,8,6),new Do({color:16774084})),this.lamp.visible=!1,this.bones[Y.head].add(this.lamp),this.lamp.position.set(0,1.655-Qp[Y.head][2],.118-Qp[Y.head][3]),this.setClimber(e)}setClimber(e){this.climber=e;let t=om(),n=dm(e),r=this.body.geometry.getAttribute(`color`),i=new H;for(let e=0;e<t.regA.length;e++){i.copy(n[t.regA[e]]).lerp(n[t.regB[e]],t.mixAB[e]).lerp(n[t.band[e]],t.bandAmt[e]);let a=t.shade[e];r.setXYZ(e,i.r*a,i.g*a,i.b*a)}r.needsUpdate=!0,this.scarf.setColors(e.scarf,e.scarf2),this.lensMat.uniforms.uColor.value.setHex(e.lens),this.maskMat.color.setHex(e.mask),this.haloMat.uniforms.uColor.value.setHex(e.lens);let a=this.glider.children[0].geometry.getAttribute(`color`),o=sm(e.cloak),s=sm(e.scarf);for(let e=0;e<a.count;e++){let t=Math.floor(e/18)%2?s:o,n=e%18<6?1:.72;a.setXYZ(e,t.r*n,t.g*n,t.b*n)}a.needsUpdate=!0}get rimUniforms(){return this.material.rim}neckWorld(e){return this.bones[Y.chest].updateWorldMatrix(!0,!1),e.set(0,.17,-.04).applyMatrix4(this.bones[Y.chest].matrixWorld)}headWorld(e){return this.bones[Y.head].updateWorldMatrix(!0,!1),e.set(0,.06,0).applyMatrix4(this.bones[Y.head].matrixWorld)}handWorld(e,t){let n=this.bones[e?Y.handL:Y.handR];return n.updateWorldMatrix(!0,!1),t.set(0,-.07,.01).applyMatrix4(n.matrixWorld)}footWorld(e,t){let n=this.bones[e?Y.footL:Y.footR];return n.updateWorldMatrix(!0,!1),t.set(0,-.06,.04).applyMatrix4(n.matrixWorld)}harnessWorld(e){return this.bones[Y.hips].updateWorldMatrix(!0,!1),e.set(0,.05,.11).applyMatrix4(this.bones[Y.hips].matrixWorld)}animate(e,t){let n=this.target,r=t.time;t.alive?t.caught>0?Cm(n,r):t.idle?t.celebrate>0?Tm(n,r):wm(n,r):t.mode===`glide`?Sm(n,r,t.lean):t.mode===`slide`?t.air?vm(n,t.vh):xm(n,r,t.lean):t.mode===`climb`||t.mode===`shaft`?t.air?bm(n,t.vh,t.boost):ym(n,t.phase):t.celebrate>0?Tm(n,r):t.air?vm(n,t.vh):_m(n,t.phase,t.speed):t.chute?Dm(n,r):t.dazed?Om(n,r):Em(n,r),n[Y.upperArmL*3+2]-=tm,n[Y.upperArmR*3+2]+=tm,t.mode===`run`?(n[Y.spine*3+2]+=-t.lean*.3,n[Y.hips*3+2]+=-t.lean*.12):(t.mode===`climb`||t.mode===`shaft`)&&(n[Y.hips*3+2]+=-t.lean*.25,n[mm]+=-t.lean*.12),t.land>0&&t.alive&&(n[55]-=t.land*.12,n[Y.thighL*3]-=t.land*.35,n[Y.thighR*3]-=t.land*.35,n[Y.shinL*3]+=t.land*.6,n[Y.shinR*3]+=t.land*.6);let i=A(t.alive?18:10,e),a=this.pose;for(let e=0;e<pm;e++)a[e]+=(n[e]-a[e])*i;for(let e=1;e<Zp;e++)this.bones[e].rotation.set(a[e*3],a[e*3+1],a[e*3+2]);this.inner.position.set(a[mm],a[55],a[56]),this.gliderOpen+=((t.mode===`glide`&&t.alive?1:0)-this.gliderOpen)*A(5,e),this.glider.visible=this.gliderOpen>.02,this.glider.scale.set(Math.max(.01,this.gliderOpen),Math.max(.01,.4+this.gliderOpen*.6),Math.max(.01,this.gliderOpen)),this.glider.rotation.z=Math.sin(r*1.7)*.05-t.lean*.28,this.chuteOpen+=(+!!t.chute-this.chuteOpen)*A(5,e),this.chute.visible=this.chuteOpen>.02,this.chute.scale.set(Math.max(.01,this.chuteOpen),Math.max(.01,this.chuteOpen*(.8+Math.sin(r*7)*.04)),Math.max(.01,this.chuteOpen)),this.chute.rotation.z=Math.sin(r*2.1)*.12,this.shield.visible=this.shieldOn>.01,this.shieldMat.uniforms.uOpacity.value=this.shieldOn,this.shieldMat.uniforms.uTime.value=r,this.shield.rotation.y=r*.6,this.lensMat.uniforms.uColor.value.setHex(this.climber.lens).multiplyScalar(.92+Math.sin(r*2.3)*.08)}updateScarf(e,t,n,r,i){this.neckWorld(km),this.scarf.update(e,Am.copy(km),n,t,i,r)}resetScarf(e){this.neckWorld(km),this.scarf.reset(km,e)}},Vm=(e,t,n)=>{let r=t.index?t.toNonIndexed():t,i=r.getAttribute(`position`);for(let t=0;t<i.count;t+=3)e.tri(new B().fromBufferAttribute(i,t),new B().fromBufferAttribute(i,t+1),new B().fromBufferAttribute(i,t+2),n);r!==t&&r.dispose(),t.dispose()},Hm=`
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
  float dz = -mvPosition.z;
  // particles right in front of the lens would become huge blurry blobs: fade them out
  vAlpha *= smoothstep(1.2, 4.0, dz);
  gl_PointSize = clamp(aSize * uScale / max(0.1, dz), 0.0, uScale * 0.12);
  #include <fog_vertex>
}`,Um=`
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
}`,Wm=`
attribute vec3 iPos;
attribute vec4 iCol;
attribute float iSize;
varying vec2 vUv;
varying vec4 vCol;
void main() {
  vUv = position.xy;
  vCol = iCol;
  vec4 mv = viewMatrix * vec4(iPos, 1.0);
  vCol.a *= smoothstep(1.5, 5.0, -mv.z);
  // slid towards the camera along its own sight line (same place and size on screen), so the
  // rock it sits on can't slice it with a hard edge
  float z0 = max(0.01, -mv.z);
  float k = max(0.3, z0 - iSize * 0.75) / z0;
  mv.xyz *= k;
  mv.xy += position.xy * iSize * k;
  gl_Position = projectionMatrix * mv;
}`,Gm=`
varying vec2 vUv;
varying vec4 vCol;
void main() {
  float d = length(vUv) * 2.0;
  float a = exp(-d * d * 3.2) + exp(-d * d * 28.0) * 0.8;
  a *= smoothstep(1.0, 0.75, d);
  gl_FragColor = vec4(vCol.rgb * a * vCol.a, 1.0);
  #include <colorspace_fragment>
}`,Km=(e,t)=>{let n=new ho,r=new Float32Array(e*3),i=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),s=new Float32Array(e),c=(e,t)=>new eo(e,t).setUsage(qr);n.setAttribute(`position`,c(r,3)),n.setAttribute(`color`,c(i,3)),n.setAttribute(`aSize`,c(a,1)),n.setAttribute(`aAlpha`,c(o,1)),n.setAttribute(`aShape`,c(s,1)),n.setDrawRange(0,0);let l=new yc({vertexShader:Hm,fragmentShader:Um,transparent:!0,depthWrite:!1,blending:t?2:1,fog:!0,uniforms:{uScale:{value:400},fogColor:{value:new H},fogNear:{value:1},fogFar:{value:1e3}}}),u=new xs(n,l);return u.frustumCulled=!1,u.renderOrder=t?6:5,{max:e,count:0,pos:r,vel:new Float32Array(e*3),col:i,size:a,alpha:o,shape:s,life:new Float32Array(e),maxLife:new Float32Array(e),s0:new Float32Array(e),s1:new Float32Array(e),grav:new Float32Array(e),drag:new Float32Array(e),a0:new Float32Array(e),geo:n,points:u,mat:l}},qm=new H,Jm=new H,Ym=new B,Xm=class{soft=Km(1400,!1);add=Km(1400,!0);glowGeo;glowPos;glowCol;glowSize;glowCount=0;glowMax=600;glowMesh;rnd=1;constructor(e){e.add(this.soft.points,this.add.points);let t=new ll,n=new sc(1,1);t.index=n.index,t.setAttribute(`position`,n.getAttribute(`position`)),this.glowPos=new Float32Array(this.glowMax*3),this.glowCol=new Float32Array(this.glowMax*4),this.glowSize=new Float32Array(this.glowMax),t.setAttribute(`iPos`,new rs(this.glowPos,3).setUsage(qr)),t.setAttribute(`iCol`,new rs(this.glowCol,4).setUsage(qr)),t.setAttribute(`iSize`,new rs(this.glowSize,1).setUsage(qr)),t.instanceCount=0,this.glowGeo=t;let r=new yc({vertexShader:Wm,fragmentShader:Gm,transparent:!0,depthWrite:!1,blending:2});this.glowMesh=new zo(t,r),this.glowMesh.frustumCulled=!1,this.glowMesh.renderOrder=7,e.add(this.glowMesh)}r(){return this.rnd=this.rnd*16807%2147483647,this.rnd/2147483647}setView(e,t,n,r,i){let a=e/(2*Math.tan(t*Math.PI/180/2));for(let e of[this.soft,this.add])e.mat.uniforms.uScale.value=a,e.mat.uniforms.fogColor.value.copy(n),e.mat.uniforms.fogNear.value=r,e.mat.uniforms.fogFar.value=i*1.4}emit(e,t,n={}){let r=e===`spark`||e===`crystal`||e===`ember`||e===`mote`||e===`star`||e===`speed`?this.add:this.soft,i=n.count??8,a=n.spread??.3,o=n.speed??2,s=n.cone??1;qm.set(n.color??16777215),Jm.set(n.color2??n.color??16777215);for(let c=0;c<i;c++){r.count>=r.max&&this.kill(r,0);let i=r.count++,c=i*3;r.pos[c]=t.x+(this.r()-.5)*a*2,r.pos[c+1]=t.y+(this.r()-.5)*a*2,r.pos[c+2]=t.z+(this.r()-.5)*a*2,Ym.set(this.r()*2-1,this.r()*2-1,this.r()*2-1).normalize(),n.dir&&Ym.multiplyScalar(s).add(n.dir).normalize();let l=o*(.45+this.r()*.75);r.vel[c]=Ym.x*l,r.vel[c+1]=Ym.y*l,r.vel[c+2]=Ym.z*l;let u=this.r();r.col[c]=qm.r+(Jm.r-qm.r)*u,r.col[c+1]=qm.g+(Jm.g-qm.g)*u,r.col[c+2]=qm.b+(Jm.b-qm.b)*u;let d=(n.life??.8)*(.7+this.r()*.6);r.life[i]=d,r.maxLife[i]=d;let f=(n.size??.3)*(.7+this.r()*.6);r.s0[i]=f,r.s1[i]=n.sizeEnd===void 0?f:n.sizeEnd*(.7+this.r()*.6),r.grav[i]=n.gravity??0,r.drag[i]=n.drag??1.5,r.shape[i]=e===`debris`||e===`confetti`?1:e===`star`||e===`crystal`?2:0,r.alpha[i]=1,r.a0[i]=n.alpha??1,r.size[i]=f}}kill(e,t){let n=--e.count;if(t===n)return;let r=t*3,i=n*3;for(let t of[e.pos,e.vel,e.col])t[r]=t[i],t[r+1]=t[i+1],t[r+2]=t[i+2];for(let r of[e.size,e.alpha,e.shape,e.life,e.maxLife,e.s0,e.s1,e.grav,e.drag,e.a0])r[t]=r[n]}glow(e,t,n,r=1){if(this.glowCount>=this.glowMax||r<=.003)return;let i=this.glowCount++;this.glowPos[i*3]=e.x,this.glowPos[i*3+1]=e.y,this.glowPos[i*3+2]=e.z,this.glowCol[i*4]=n.r,this.glowCol[i*4+1]=n.g,this.glowCol[i*4+2]=n.b,this.glowCol[i*4+3]=r,this.glowSize[i]=t}update(e){for(let t of[this.soft,this.add]){for(let n=t.count-1;n>=0;n--){if(t.life[n]-=e,t.life[n]<=0){this.kill(t,n);continue}let r=n*3,i=Math.exp(-t.drag[n]*e);t.vel[r]*=i,t.vel[r+1]=t.vel[r+1]*i-t.grav[n]*e,t.vel[r+2]*=i,t.pos[r]+=t.vel[r]*e,t.pos[r+1]+=t.vel[r+1]*e,t.pos[r+2]+=t.vel[r+2]*e;let a=1-t.life[n]/t.maxLife[n];t.size[n]=t.s0[n]+(t.s1[n]-t.s0[n])*a,t.alpha[n]=(a<.15?a/.15:1-((a-.15)/.85)**1.6)*t.a0[n]}let n=t.geo;n.setDrawRange(0,t.count),t.points.visible=t.count>0;for(let e of[`position`,`color`,`aSize`,`aAlpha`,`aShape`]){let r=n.getAttribute(e);r.needsUpdate=!0,r.clearUpdateRanges(),r.addUpdateRange(0,t.count*r.itemSize)}}let t=this.glowGeo;t.instanceCount=this.glowCount,this.glowMesh.visible=this.glowCount>0;for(let e of[`iPos`,`iCol`,`iSize`]){let n=t.getAttribute(e);n.needsUpdate=!0,n.clearUpdateRanges(),n.addUpdateRange(0,this.glowCount*n.itemSize)}this.glowCount=0}clear(){this.soft.count=0,this.add.count=0}get particleCount(){return this.soft.count+this.add.count}attachTo(e){}},Zm=()=>({pos:new B,right:new B,up:new B,fwd:new B}),Qm=lt(),$m=(e,t,n,r,i,a,o=Qm)=>{if(e.frame(t,o),a.fwd.set(o.fx,o.fy,o.fz),i>0){let e=n/i,t=Math.sin(e),s=Math.cos(e),c=o.rx*t-o.ux*s,l=o.ry*t-o.uy*s,u=o.rz*t-o.uz*s,d=i-r;a.pos.set(o.px+o.ux*i+c*d,o.py+o.uy*i+l*d,o.pz+o.uz*i+u*d),a.up.set(-c,-l,-u),a.right.set(o.rx*s+o.ux*t,o.ry*s+o.uy*t,o.rz*s+o.uz*t)}else a.pos.set(o.px+o.rx*n+o.ux*r,o.py+o.ry*n+o.uy*r,o.pz+o.rz*n+o.uz*r),a.up.set(o.ux,o.uy,o.uz),a.right.set(o.rx,o.ry,o.rz);return a},eh=(e,t,n,r,i,a,o=Qm)=>{if(e.frame(t,o),i>0){let e=n/i,t=Math.sin(e),s=Math.cos(e),c=i-r;return a.set(o.px+o.ux*i+(o.rx*t-o.ux*s)*c,o.py+o.uy*i+(o.ry*t-o.uy*s)*c,o.pz+o.uz*i+(o.rz*t-o.uz*s)*c)}return a.set(o.px+o.rx*n+o.ux*r,o.py+o.ry*n+o.uy*r,o.pz+o.rz*n+o.uz*r)},th=new B,nh=new V,rh=new hi,ih=new hi,ah=new B,oh=new B,sh=new B,ch=new B,lh=new B,uh=Zm(),dh=new H(4191969),fh=new H(3135999),ph=new H(16763213),mh=new H(6289636),hh=new H(16763213),gh={magnet:new H(16731501),shield:new H(5880063)},_h=(e,t,n,r,i=.08)=>{let a=t.index?t.toNonIndexed():t,o=a.getAttribute(`position`),s=new H().setHex(r),c=new H;for(let t=0;t<o.count;t+=3)sh.fromBufferAttribute(o,t).applyMatrix4(n),ch.fromBufferAttribute(o,t+1).applyMatrix4(n),lh.fromBufferAttribute(o,t+2).applyMatrix4(n),c.copy(s).multiplyScalar(1+(t*7919%100/100-.5)*i*2),e.tri(sh,ch,lh,c);a!==t&&a.dispose(),t.dispose()},vh=()=>{let e=new Pp;return _h(e,new oc(.3,0),J(0,0,0,0,0,0,.75,1.25,.75),4191969,.18),e.build()},yh=e=>{let t=new Pp;if(e===`magnet`){_h(t,new lc(.34,.12,8,14,Math.PI),J(0,.05,0,0,0,Math.PI),16731501);for(let e of[-.34,.34])_h(t,new Os(.25,.22,.25),J(e,.16,0),15659775)}else _h(t,new cc(.36,12,8),J(0,0,0,0,0,0,1,1.15,.45),5880063),_h(t,new lc(.4,.06,6,18),J(0,0,0),16763213),_h(t,new oc(.12,0),J(0,0,.18),16777215);return t.build()},bh=e=>{let t=new Pp;return t.surf=K.made,e?(_h(t,new ks(.09,.12,1.25,8),J(0,.62,0),6964784),_h(t,new As(.11,.14,8),J(0,1.32,0),4861984),_h(t,new Os(.06,.18,.04),J(0,1.15,.1),12042448)):(_h(t,new Os(.16,.24,.05),J(0,.03,0,-Math.PI/2),12042448),_h(t,new ks(.035,.035,.08,6),J(0,.06,.05),9410472)),t.build()},xh=class{group=new fa;crystals;gems;powers=new Map;powerGeos={};powerMat=new Sc({vertexColors:!0,emissive:2236962});crystalMat=new Sc({vertexColors:!0,emissive:new H(1019782),emissiveIntensity:1});gemMat=new Sc({color:16763213,emissive:new H(10119696)});max=700;ringMats={};ringGeo=new lc(.62,.035,4,24);anchors=new Map;anchorPost=bh(!0);anchorBolt=bh(!1);anchorRingGeo=new lc(.34,.045,8,28);anchorRingMat=new Do({color:mh});anchorRingSpent=new Do({color:hh});constructor(e){this.crystals=new ds(vh(),this.crystalMat,this.max),this.crystals.instanceMatrix.setUsage(qr),this.crystals.frustumCulled=!1,this.crystals.count=0,this.gems=new ds(new oc(.42,0),this.gemMat,32),this.gems.instanceMatrix.setUsage(qr),this.gems.frustumCulled=!1,this.gems.count=0,this.group.add(this.crystals,this.gems);for(let e of[`magnet`,`shield`])this.powerGeos[e]=yh(e);e.add(this.group)}itemPos(e,t,n,r,i,a){let o=Math.sin(r*3+t.id*.7)*.12;return $m(e,t.s,t.x,t.h+o,n.tube??0,uh),a.copy(uh.pos),t.pull>0&&a.lerp(i,t.pull*t.pull),a}anchorPos(e,t,n,r){let i=n.mode===`run`||n.mode===`glide`;return $m(e,t.s,t.x,i?1.32:.35,n.tube??0,uh),r.copy(uh.pos)}clearAnchors(){for(let e of this.anchors.values())this.group.remove(e.mesh);this.anchors.clear()}update(e,t,n,r,i,a,o,s){let c=0,l=0,u=new Set,d=new Set;for(let f of t){if(f.s0>r+180)break;if(!(f.s1<r-10)){for(let t of f.items){if(t.taken)continue;let d=t.s-r;if(d<-6||d>180)continue;let f=n(t.s);if(this.itemPos(e,t,f,i,a,th),t.kind===`crystal`){if(c>=this.max)continue;rh.setFromAxisAngle(oh.set(0,1,0),i*2.2+t.id);let e=1-t.pull*.4;nh.compose(th,rh,ah.set(e,e,e)),this.crystals.setMatrixAt(c++,nh),s>0&&d<90&&o.glow(th,1.05,fh,.26*(1-Math.max(0,d-60)/30))}else if(t.kind===`gem`){if(l>=32)continue;rh.setFromAxisAngle(oh.set(0,1,0),i*3),nh.compose(th,rh,ah.set(1,1.3,1)),this.gems.setMatrixAt(l++,nh),o.glow(th,2.4,ph,.55)}else{u.add(t.id);let e=this.powers.get(t.id);e||(e=new zo(this.powerGeos[t.kind],this.powerMat),this.ringMats[t.kind]??=new Sc({color:gh[t.kind],emissive:gh[t.kind],emissiveIntensity:.6}),e.add(new zo(this.ringGeo,this.ringMats[t.kind])),this.group.add(e),this.powers.set(t.id,e)),e.position.copy(th),e.rotation.set(0,i*2.4,0),e.scale.setScalar(1.35+Math.sin(i*5)*.06),e.children[0].rotation.set(Math.PI/2+Math.sin(i*2)*.3,0,i*1.5),o.glow(th,3.4,gh[t.kind],.6)}}for(let t of f.anchors){let a=t.s-r;if(a<-12||a>190)continue;d.add(t.id);let c=n(t.s),l=c.mode===`run`||c.mode===`glide`,u=this.anchors.get(t.id);if(!u){let e=new zo(l?this.anchorPost:this.anchorBolt,Op()),n=new zo(this.anchorRingGeo,this.anchorRingMat);e.add(n),e.matrixAutoUpdate=!1,this.group.add(e),u={mesh:e,ring:n,glowT:0},this.anchors.set(t.id,u)}$m(e,t.s,t.x,0,c.tube??0,uh),nh.makeBasis(sh.copy(uh.right).negate(),uh.up,uh.fwd),nh.setPosition(uh.pos),u.mesh.matrix.copy(nh),u.mesh.matrixWorldNeedsUpdate=!0,u.ring.position.set(0,l?1.32:.35,l?0:.12);let f=t.clipped?.85:1+Math.sin(i*5+t.id)*.08;if(u.ring.scale.setScalar(f*(t.tutorial?1.5:1)),ih.setFromAxisAngle(oh.set(0,1,0),t.clipped?0:Math.sin(i*1.6+t.id)*.25),u.ring.quaternion.copy(ih),u.ring.material=t.clipped?this.anchorRingSpent:this.anchorRingMat,!t.clipped&&s>0){this.anchorPos(e,t,c,th);let n=.25+.75*O(4,18,a);o.glow(th,(t.tutorial?3.4:2.3)*(.6+.4*n),mh,(.62+Math.sin(i*5+t.id)*.12)*n),l&&a>6&&o.glow(th.addScaledVector(uh.up,2.2),2.6,mh,.22)}}}}for(let[e,t]of this.powers)u.has(e)||(this.group.remove(t),this.powers.delete(e));for(let[e,t]of this.anchors)d.has(e)||(this.group.remove(t.mesh),this.anchors.delete(e));this.crystals.count=c,this.crystals.visible=c>0,this.crystals.instanceMatrix.needsUpdate=!0,this.gems.count=l,this.gems.visible=l>0,this.gems.instanceMatrix.needsUpdate=!0}},Sh=new Set([`sunElev`,`sunAzim`,`hemiIntensity`,`sunIntensity`,`stars`,`aurora`,`snowCover`]),Ch=new Map,wh=e=>{let t=Ch.get(e);if(t)return t;let n=_t(e).palette,r={};for(let e of Object.keys(n))r[e]=Sh.has(e)?n[e]:new H().setHex(n[e]);return t=r,Ch.set(e,t),t},Th=e=>{let t={};for(let n of Object.keys(e)){let r=e[n];t[n]=typeof r==`number`?r:r.clone()}return t},Eh=(e,t,n,r)=>{for(let i of Object.keys(e)){let a=e[i],o=t[i];typeof a==`number`?r[i]=a+(o-a)*n:r[i].copy(a).lerp(o,n)}return r},Dh=new H(8015411),Oh=new H(5058850),kh=new H(9410472),Ah=new H(16756782),jh=new H(14205850),Mh=[3108829,16052714,14696762,3912554,16106818].map(e=>new H(e)),Nh=[-60,-42,-30,-21,-14.5,-10,-7,-5.2,-4,-3.2,-2.2,-1.1,0,1.1,2.2,3.2,4,5.2,7,10,14.5,21,30,42,60],Ph=Nh.length,Fh=new yc({transparent:!0,depthWrite:!1,side:2,fog:!0,uniforms:{uTime:{value:0},uTint:{value:new H(14218495)},fogColor:{value:new H},fogNear:{value:1},fogFar:{value:1e3}},vertexShader:`
    varying vec2 vUv;
    #include <fog_pars_vertex>
    void main() {
      vUv = uv;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
    }`,fragmentShader:`
    uniform float uTime;
    uniform vec3 uTint;
    varying vec2 vUv;
    #include <fog_pars_fragment>
    float h(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5); }
    float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main() {
      vec2 q = vec2(vUv.x * 7.0, vUv.y * 0.9 - uTime * 2.6);
      float streak = n(q) * 0.6 + n(q * vec2(2.3, 1.7) + 3.1) * 0.4;
      // ragged, wandering edges and sheets that thin and thicken as they fall: water, not a
      // painted stripe
      float wob = n(vec2(vUv.y * 1.3 - uTime * 1.1, 4.2)) * 0.24;
      float edge = smoothstep(wob, 0.3 + wob, vUv.x) * smoothstep(1.0 - wob * 0.7, 0.7 - wob * 0.7, vUv.x);
      float sheet = 0.5 + 0.5 * smoothstep(0.25, 0.7, n(vec2(vUv.x * 2.5, vUv.y * 0.35 - uTime * 1.6) + 7.0));
      float a = edge * sheet * (0.36 + streak * 0.56);
      vec3 col = mix(uTint * 0.72, vec3(1.0), smoothstep(0.55, 0.9, streak));
      gl_FragColor = vec4(col, a * 0.8);
      #include <colorspace_fragment>
      #include <fog_fragment>
    }`}),Z=lt(),Ih=lt(),Lh=new B,Rh=new B,zh=new B,Bh=new B,Vh=new B,Hh=new V,Uh=new hi,Wh=new B(0,1,0),Gh=(e,t,n,r,i)=>eh(e,t,n,r,0,i,Z),Kh=(e,t,n,r,i,a,o,s=a)=>(Gh(e,t,n,r,Lh),Uh.setFromAxisAngle(Wh,i+Z.yaw),o.compose(Lh,Uh,Rh.set(a,s,a))),qh=(e,t,n,r,i,a,o,s,c,l=0)=>{e.frame(t,Z);let u=Z.ux,d=Z.uy,f=Z.uz,p=Z.rx,m=Z.ry,h=Z.rz;if(l>0){let e=n/l,t=Math.sin(e),i=Math.cos(e),a=Z.rx*t-Z.ux*i,o=Z.ry*t-Z.uy*i,s=Z.rz*t-Z.uz*i,c=l-r;Lh.set(Z.px+Z.ux*l+a*c,Z.py+Z.uy*l+o*c,Z.pz+Z.uz*l+s*c),u=-a,d=-o,f=-s,p=Z.rx*i+Z.ux*t,m=Z.ry*i+Z.uy*t,h=Z.rz*i+Z.uz*t}else Lh.set(Z.px+Z.rx*n+Z.ux*r,Z.py+Z.ry*n+Z.uy*r,Z.pz+Z.rz*n+Z.uz*r);return s.makeBasis(Rh.set(-p,-m,-h),zh.set(u,d,f),Bh.set(Z.fx,Z.fy,Z.fz)),c&&s.multiply(Hh.makeRotationFromQuaternion(c)),s.scale(Vh.set(i,a,o)),s.setPosition(Lh),s},Jh={[q.rock]:K.rock,[q.rockDark]:K.rock,[q.rockLight]:K.rock,[q.foliage]:K.ground,[q.foliageDark]:K.ground,[q.wood]:K.made,[q.bark]:K.made,[q.snow]:K.snow,[q.accent]:K.made,[q.ground]:K.ground,[q.white]:K.made,[q.red]:K.made,[q.woodDark]:K.made,[q.metal]:K.made,[q.orange]:K.made,[q.cloth]:K.made,[q.hazard]:K.made,[q.flower]:K.made,[q.ice]:K.ice},Yh=class{pal;snowCover;rng;noise;grass;slots;gb=null;constructor(e,t){this.pal=wh(e),this.snowCover=this.pal.snowCover,this.rng=new mt(t),this.noise=new qf(t);let n=_t(e).flora;this.grass=n===`pine`||n===`crystal`||n===`juniper`;let r=this.pal;this.slots=[],this.slots[q.rock]=r.rock,this.slots[q.rockDark]=r.rockDark,this.slots[q.rockLight]=r.rockLight,this.slots[q.foliage]=r.foliage,this.slots[q.foliageDark]=r.foliageDark,this.slots[q.wood]=Dh,this.slots[q.bark]=new H(5979950).lerp(r.rockDark,.25),this.slots[q.snow]=r.snow,this.slots[q.accent]=r.accent,this.slots[q.ground]=r.ground,this.slots[q.white]=new H(15659766).lerp(r.snow,.3),this.slots[q.red]=new H(12729132),this.slots[q.woodDark]=Oh,this.slots[q.metal]=kh,this.slots[q.orange]=new H(15231530),this.slots[q.cloth]=new H(3103400),this.slots[q.hazard]=Ah,this.slots[q.flower]=new H(n===`juniper`?16761405:n===`crystal`?12160255:16118015),this.slots[q.ice]=new H(13035263).lerp(r.snow,.3)}paint=(e,t,n,r)=>{r.copy(this.slots[e]??this.pal.rock).multiplyScalar(t);let i=Jh[e]??K.rock;return this.snowCover>0&&n>.55&&(e===q.rock||e===q.rockLight||e===q.foliage||e===q.foliageDark)&&this.rng.next()<this.snowCover*.9&&(r.copy(this.pal.snow).multiplyScalar(.95+t*.05),i=K.snow),this.gb&&(this.gb.surf=i,this.gb.glow=+(e===q.accent)),r};strata(e,t){let n=this.pal,r=Math.sin(e*.42+this.noise.n1(e*.06)*2.6);return t.copy(n.rock),r>.5?t.lerp(n.rockLight,.45+(r-.5)*.6):r<-.55&&t.lerp(n.rockDark,.4+(-r-.55)*.5),t}ground(e,t,n,r,i){let a=this.pal,o=this.noise.n2(n*.03+r*.01,r*.045),s=this.noise.n2(n*.11,r*.13+7);return this.snowCover>0&&e>.62-this.snowCover*.25+o*.12&&(this.snowCover>.55||s>.1)?(i.copy(a.snow).multiplyScalar(.94+s*.05),e<.8&&i.lerp(a.rockLight,.12),K.snow):e>.78&&this.grass?(i.copy(a.ground).lerp(a.groundDark,T(.28+o*.4,0,.75)),K.ground):e>.62?(i.copy(a.groundDark).lerp(a.rock,.45+s*.25),this.grass&&i.lerp(a.ground,T(.2+o*.3,0,.4)),K.ground):(this.strata(t,i),K.rock)}trail(e,t,n){let r=this.pal,i=this.noise.n2(e*.08,t*.4);return n.copy(r.rockLight).lerp(r.groundDark,.42+i*.12),this.snowCover>.5&&n.lerp(r.snow,.6),n.multiplyScalar(1-.06*Math.exp(-t*t*.8)),n}};function*Xh(e,t){let n=[],r=t.sa;for(n.push(r);r<t.sb-1e-4;){let i=e.pitchAt(r),a=e.pitchAt(Math.min(t.sb,r+1)),o=Math.abs(a-i),s=t.step??(o>.05?.42:1.3);r=Math.min(t.sb,r+s),n.push(r)}let i=n.length,a=t.xs.length,o=new Float32Array(i*a*3),s=new Float32Array(i*3);for(let r=0;r<i;r++){r%24==23&&(yield);let i=n[r];e.frame(i,Z),s[r*3]=Z.ux,s[r*3+1]=Z.uy,s[r*3+2]=Z.uz;for(let e=0;e<a;e++){let n=t.xs[e],s=t.h(i,e,n),c=(r*a+e)*3;t.worldUp?(o[c]=Z.px+Z.rx*n,o[c+1]=Z.py+Z.ry*n+s,o[c+2]=Z.pz+Z.rz*n):(o[c]=Z.px+Z.rx*n+Z.ux*s,o[c+1]=Z.py+Z.ry*n+Z.uy*s,o[c+2]=Z.pz+Z.rz*n+Z.uz*s)}}yield;let c=new Float32Array(i*a*3),l=new Float32Array(i*a*3),u=new Float32Array(i*a),d=new Float32Array(i*a),f=new H;for(let e=0;e<i;e++){e%24==23&&(yield);let r=Math.max(0,e-1),p=Math.min(i-1,e+1);for(let i=0;i<a;i++){let m=Math.max(0,i-1),h=Math.min(a-1,i+1),g=(p*a+i)*3,_=(r*a+i)*3,v=(e*a+h)*3,y=(e*a+m)*3,b=o[g]-o[_],x=o[g+1]-o[_+1],S=o[g+2]-o[_+2],C=o[v]-o[y],w=o[v+1]-o[y+1],T=o[v+2]-o[y+2],E=x*T-S*w,D=S*C-b*T,O=b*w-x*C,k=Math.hypot(E,D,O)||1;E/=k,D/=k,O/=k,E*s[e*3]+D*s[e*3+1]+O*s[e*3+2]<0&&(E=-E,D=-D,O=-O);let A=(e*a+i)*3;c[A]=E,c[A+1]=D,c[A+2]=O;let j=t.xs[i],ee=t.h(n[e],i,j);d[e*a+i]=t.paint(n[e],i,j,ee,D,o[A+1],f),l[A]=f.r,l[A+1]=f.g,l[A+2]=f.b,u[e*a+i]=t.ao?t.ao(n[e],i,j,ee):1}}return{ns:i,nx:a,P:o,N:c,C:l,O:u,surf:d,s:Float32Array.from(n)}}var Zh=new B,Qh=new B,$h=new B,eg=new B,tg=new B,ng=new B,rg=new B,ig=new B,ag=new H,og=new H,sg=new H,cg=new H;function*lg(e,t,n){let{ns:r,nx:i,P:a,N:o,C:s,O:c,surf:l}=t,u=(e,t,n,r,c)=>{let l=(e*i+t)*3;n.set(a[l],a[l+1],a[l+2]),r.set(o[l],o[l+1],o[l+2]),c.setRGB(s[l],s[l+1],s[l+2])};for(let a=0;a<r-1;a++){a%16==15&&(yield);for(let r=0;r<i-1;r++){if(n?.(t.s[a],r))continue;u(a,r,Zh,tg,ag),u(a,r+1,Qh,ng,og),u(a+1,r+1,$h,rg,sg),u(a+1,r,eg,ig,cg);let o=l[a*i+r],s=l[a*i+r+1],d=l[(a+1)*i+r+1],f=l[(a+1)*i+r];e.surf=o===s||o===d?o:s===d?s:f,e.glow=0;let p=c[a*i+r],m=c[a*i+r+1],h=c[(a+1)*i+r+1],g=c[(a+1)*i+r];e.triNC(Zh,Qh,$h,tg,ng,rg,ag,og,sg,p,m,h),e.triNC(Zh,$h,eg,tg,rg,ig,ag,sg,cg,p,h,g)}}}function*ug(e,t,n){let r=yield*Xh(t,n);return yield*lg(e,r,n.skip),r}function*dg(e,t,n,r,i,a,o,s=()=>1,c){let l=a.noise,u=a.pal,d=[];for(let e=n;e<r;e+=1.1)d.push(e);d.push(r);let f=d.length,p=new Float32Array(f*23*3),m=new Float32Array(f*3);for(let e=0;e<f;e++){e%30==29&&(yield),t.frame(d[e],Z);let n=Z.px+Z.ux*i,r=Z.py+Z.uy*i,a=Z.pz+Z.uz*i;m[e*3]=n,m[e*3+1]=r,m[e*3+2]=a;for(let t=0;t<=22;t++){let o=t%22/22*Math.PI*2-Math.PI,s=O(.9,2.4,Math.abs(o)),c=l.n2(d[e]*.07,t%22*.9)*(.08+s*.75)+l.n2(d[e]*.21+9,t%22*2.3)*.12*s,u=i*(1+c*.18)+(s>0?c*.3:0),f=Math.sin(o),m=Math.cos(o),h=Z.rx*f-Z.ux*m,g=Z.ry*f-Z.uy*m,_=Z.rz*f-Z.uz*m,v=(e*23+t)*3;p[v]=n+h*u,p[v+1]=r+g*u,p[v+2]=a+_*u}}yield,new H;let h=new H(2055582),g=new H(12117759),_=new H(13203263),v=(e,t,n,r)=>{let i=t%22/22*Math.PI*2-Math.PI,a=l.n2(d[e]*.05,t%22*.5),s=Math.sin(d[e]*.21+t%22*.31+a*3);return o===`ice`?(r.copy(h).lerp(g,.12+a*.26+s*.12),s>.82&&r.lerp(u.rockDark,.45),Math.abs(i)<.9&&r.lerp(new H(14085887),.14)):o===`crystal`?(r.copy(u.rockDark).lerp(new H(2760800),.5).lerp(u.rock,.2+a*.25),s>.7&&r.lerp(u.accent,.25)):r.copy(_).lerp(u.rockDark,.3+s*.25+a*.15),r},y=(e,t,n,r,i)=>{let a=(e*23+t)*3;n.set(p[a],p[a+1],p[a+2]),r.set(m[e*3]-p[a],m[e*3+1]-p[a+1],m[e*3+2]-p[a+2]).normalize(),v(e,t,r.y,i)};for(let t=0;t<f-1;t++){t%14==13&&(yield);for(let n=0;n<22;n++){let r=n/22*Math.PI*2-Math.PI+Math.PI/22;if(c?.(d[t],r))continue;y(t,n,Zh,tg,ag),y(t,n+1,Qh,ng,og),y(t+1,n+1,$h,rg,sg),y(t+1,n,eg,ig,cg),e.surf=o===`ice`?K.ice:K.rock,e.glow=o===`ice`?.26:o===`crystal`?.06:0;let i=(.6+.4*(1-O(1.4,3.1,Math.abs(r))))*s(d[t]);e.triNC(Zh,Qh,$h,tg,ng,rg,ag,og,sg,i,i,i),e.triNC(Zh,$h,eg,tg,rg,ig,ag,sg,cg,i,i,i)}}}var fg=(e,t,n,r,i,a)=>{t.frame(n,Ih);let o=a.noise,s=[1,1.25,1.8,3,5,8,12],c=s.map(()=>[]),l=Ih.px+Ih.ux*r,u=Ih.py+Ih.uy*r,d=Ih.pz+Ih.uz*r;for(let e=0;e<=22;e++){let t=e%22/22*Math.PI*2-Math.PI,a=Math.sin(t),f=Math.cos(t);for(let t=0;t<s.length;t++){let p=s[t],m=f>.3,h=r*p*(1+o.n2(e*.6,t*1.3+n*.01)*.12*(p-1));m&&p>1.25&&(h=r*(1.25+(p-1.25)*.35));let g=t===0?0:-i*(.4+(p-1)*(m?.2:1.1)+Math.abs(o.n2(e*1.3,t*2.1))*p*.6),_=Ih.rx*a-Ih.ux*f,v=Ih.ry*a-Ih.uy*f,y=Ih.rz*a-Ih.uz*f;c[t].push(new B(l+_*h+Ih.fx*g,u+v*h+Ih.fy*g,d+y*h+Ih.fz*g))}}let f=new H,p=new B(Ih.fx,Ih.fy,Ih.fz).multiplyScalar(-i);for(let t=0;t<s.length-1;t++)for(let n=0;n<22;n++){let r=c[t][n],i=c[t][n+1],o=c[t+1][n+1],s=c[t+1][n];Rh.subVectors(i,r),zh.subVectors(o,r),Bh.crossVectors(Rh,zh),a.strata((r.y+o.y)*.5,f),t===0&&f.multiplyScalar(.55),e.surf=K.rock,e.glow=0,e.ao=t===0?.55:t===1?.8:1,Bh.dot(p)>=0?e.quad(r,i,o,s,f):e.quad(r,s,o,i,f)}e.ao=1},pg=(e,t,n,r,i,a,o=60)=>{let s=[],c=[];t.frame(n,Ih);for(let e=0;e<Ph;e++){let t=Nh[e],l=r(t);s.push(new B(Ih.px+Ih.rx*t+Ih.ux*l,Ih.py+Ih.ry*t+Ih.uy*l,Ih.pz+Ih.rz*t+Ih.uz*l));let u=o+Math.abs(i.noise.n2(e*.8,n))*o*.6,d=-a*(3+Math.abs(i.noise.n2(e,n*.3))*6);c.push(new B(Ih.px+Ih.rx*t*.85+Ih.fx*d,Ih.py+l-u+Ih.fy*d,Ih.pz+Ih.rz*t*.85+Ih.fz*d))}let l=new B(Ih.fx,Ih.fy,Ih.fz).multiplyScalar(a),u=new H;e.surf=K.rock,e.glow=0;for(let t=0;t<Ph-1;t++){let n=s[t],r=s[t+1],a=c[t+1],o=c[t];Rh.subVectors(r,n),zh.subVectors(o,n),Bh.crossVectors(Rh,zh),i.strata((n.y+o.y)/2,u),e.ao=.85,Bh.dot(l)>=0?e.quad(n,r,a,o,u):e.quad(n,o,a,r,u)}e.ao=1},mg=3.2,hg=e=>{switch(e){case`ledgeL`:case`ledgeR`:{let t=e===`ledgeL`?-1:1;return e=>{let n=Math.abs(e);if(n<=2.6)return 0;let r=n-2.6;return Math.sign(e)===t?r*1.6+r*r*.012:-(r*.35+r*r*.02)}}case`forest`:return e=>{let t=Math.abs(e);if(t<=mg)return 0;let n=t-mg;return-(n*.12+n*n*.006)};case`meadow`:return e=>{let t=Math.abs(e);if(t<=4.4)return 0;let n=t-4.4;return e<0?n*.18+n*n*.004:-(n*.05+n*n*.01)};case`plateau`:return e=>{let t=Math.abs(e);if(t<=7)return 0;let n=t-7;return-(n*.25+n*n*.03)};case`wall`:return e=>{let t=Math.abs(e);if(t<=4.6)return 0;let n=t-4.6;return-Math.min(30,n*.3+n*n*.085)};case`buttress`:return e=>{let t=Math.abs(e);if(t<=4.6)return 0;let n=t-4.6;return n*.62-n*n*.012};default:return e=>{let t=Math.abs(e);if(t<=mg)return-t*t*.004;let n=t-mg;return-(.04+n*.22+n*n*.024)}}},gg=(e,t=mg)=>{let n=Math.abs(e);return n<=t?0:Math.min(1,(n-t)/5)*(.7+(n-t)*.12)};function*_g(e,t,n){let r=new Pp,i=[],a=new Yh(e.zone,e.seed);a.gb=r;let o=new mt(e.seed^40503),s=a.noise,c=a.pal,l=Up(),u=_t(e.zone).flora,d={piece:e,group:new fa,glows:i,dispose:()=>void 0},f=[],{s0:p,s1:m}=e,h=(e,t)=>r.stamp(e,t,a.paint),g=(e,t,n=1)=>(s.n2(e*.035,t*.05)*3.2+s.n2(e*.12,t*.17+9)*.9)*gg(t)*n,_=(e,n,i,o=mg,s=1,c)=>ug(r,t,{sa:e,sb:n,xs:Nh,h:(e,t,n)=>i(n)+g(e,n,s)*+(Math.abs(n)>o)+(c?c(e,n):0),paint:(e,t,n,r,i,s,c)=>Math.abs(n)<=o+.05?(a.trail(e,n,c),a.snowCover>.5?K.snow:K.ground):a.ground(i,s,e,n,c),ao:(e,t,n,r)=>Math.abs(n)>o&&Math.abs(n)<o+2.5&&r>-.5?.82:1});switch(e.kind){case`camp`:case`summit`:{let n=hg(`plateau`),s=hg(`crest`),f=t=>e.kind===`camp`?1-O(m-14,m,t):Math.min(O(p,p+12,t),1-O(m-6,m,t));yield*ug(r,t,{sa:p,sb:m,xs:Nh,h:(e,t,r)=>D(s(r),n(r),f(e))+g(e,r)*(Math.abs(r)>7?1:.15),paint:(t,n,r,i,o,s,l)=>{if(Math.abs(r)<=3.2)return a.trail(t,r,l),K.ground;let u=a.ground(o,s,t,r,l);return e.kind===`summit`&&o>.7?(l.lerp(c.snow,.7),K.snow):u}});let _=e=>n(e)-.06;if(e.kind===`camp`){let o=e.marks.start;h(l.tent,Kh(t,o-4,-5.6,_(-5.6),.6,1.1,Hh)),h(l.pack,Kh(t,o-1.4,-3.9,_(-3.9),-.4,1,Hh));for(let e=0;e<4;e++)h(l.log,Kh(t,o+.6,4.6,_(4.6),e/4*Math.PI,.6,Hh));h(l.cairn,Kh(t,o-7,5.4,_(5.4),0,1.2,Hh)),h(l.flagPole,Kh(t,o+10,5,_(5),0,.72,Hh)),h(l.marker,Kh(t,o+14,-3.9,_(-3.9),0,1,Hh)),d.fire={s:o+.6,x:4.6,h:_(4.6)+.2},d.flag={s:o+10,x:5,h:_(5)+4.3},i.push({s:o+.6,x:4.6,h:_(4.6)+.7,tube:0,size:4.6,color:new H(16751165),flicker:1}),pg(r,t,p+.5,e=>D(s(e),n(e),1),a,-1,50)}else{let n=e.marks.flag;h(l.shrine,Kh(t,n-1,4.6,_(4.6),.3,1.2,Hh)),h(l.flagPole,Kh(t,n,4.6,_(4.6)+1.5,0,.9,Hh)),h(l.cairn,Kh(t,n+3,-5,_(-5),.4,1.4,Hh)),h(l.cairn,Kh(t,n-8,6,_(6),1.2,.9,Hh)),d.flag={s:n,x:4.6,h:_(4.6)+1.5+5.4},i.push({s:n,x:4.6,h:_(4.6)+7.2,tube:0,size:3.2,color:c.accent.clone(),flicker:0}),Eg(r,t,n,4.6,_(4.6)+6.6,n-8,6,_(6)+1.1,o),Eg(r,t,n,4.6,_(4.6)+6.6,n+10,7.5,_(7.5)+.8,o),Eg(r,t,n+3,-5,_(-5)+1.3,n+15,-7.5,_(-7.5)+.6,o),pg(r,t,m-.3,e=>s(e)*.2,a,1,90)}yield*yg(t,r,a,o,u,p+2,m-2,.45,e=>n(e),e.kind===`summit`);break}case`trail`:{let i=e.variant,s=i===`ledgeL`||i===`ledgeR`?i:i===`forest`?`forest`:i===`meadow`?`meadow`:`crest`,c=hg(s),l=hg(`crest`),d=s===`meadow`?4.4:s.startsWith(`ledge`)?2.6:mg,f=e=>Math.min(O(p,p+12,e),1-O(m-12,m,e));yield*ug(r,t,{sa:p,sb:m,xs:Nh,h:(e,t,n)=>{let r=f(e);return D(l(n),c(n),r)+g(e,n)*+(Math.abs(n)>Math.min(d,mg))},paint:(e,t,n,r,i,o,s)=>Math.abs(n)<=D(mg,d,f(e))+.05?(a.trail(e,n,s),a.snowCover>.5?K.snow:K.ground):a.ground(i,o,e,n,s),ao:(e,t,n,r)=>Math.abs(n)>d&&r>1?.78:Math.abs(n)>d&&Math.abs(n)<d+2?.86:1}),i===`meadow`&&n===`glide`&&pg(r,t,p+.3,l,a,-1,80);let h=s===`forest`?1.7:s===`meadow`?1.1:1;yield*yg(t,r,a,o,u,p+3,m-3,h,c,!1,s===`meadow`),yield*bg(t,r,a,o,p+2,m-2,c,d),s.startsWith(`ledge`)&&(yield*xg(t,r,a,o,p,m,s===`ledgeL`?-1:1));break}case`wall`:{let n=e.variant,_=hg(n===`buttress`?`buttress`:`wall`),v=hg(`crest`),y=e.marks.climbStart,b=e.marks.climbEnd,x=n===`ice`,S=(e,n)=>{let r=O(.42,1.25,t.pitchAt(e)),i=D(v(n),_(n),r),a=Math.abs(n);if(i+=g(e,n)*(1-r)+(s.n2(e*.05,n*.09)*2.4+s.n2(e*.19,n*.3)*.6)*gg(n,4.6)*r,a<4.6&&(i+=s.n2(e*.3,n*.4)*.06*r),r>.5&&a>7){let t=Math.max(0,Math.sin(e*.38+s.n1(e*.05)*3));i+=t*t*1.4}return i};yield*ug(r,t,{sa:p,sb:m,xs:Nh,h:(e,t,n)=>S(e,n),paint:(e,n,r,i,o,l,u)=>O(.42,1.25,t.pitchAt(e))<.5?Math.abs(r)<=mg?(a.trail(e,r,u),K.ground):a.ground(o,l,e,r,u):x&&Math.abs(r)<12?(u.copy(c.snow).lerp(new H(10474495),.3+s.n2(e*.05,r*.2)*.2),K.ice):(a.strata(l,u),a.snowCover>0&&o>.45?(u.lerp(c.snow,a.snowCover),K.snow):(Math.abs(r)<4.6&&u.lerp(c.rockLight,.12),K.rock)),ao:(e,r,i)=>O(.42,1.25,t.pitchAt(e))>.5&&Math.abs(i)>4.6&&Math.abs(i)<9&&n===`buttress`?.72:1});for(let e=0;e<(b-y)*.5;e++){e%12==11&&(yield);let n=o.range(y,b),r=o.sign()*o.range(5.4,16),a=_(r)+.05,s=o.next();(u===`crystal`||u===`cosmic`||u===`glow`)&&s<.22?(qh(t,n,r,a,.75,.75,.75,Hh,Uh.setFromAxisAngle(Rh.set(1,0,0),-.6)),h(l.crystal,Hh),i.push({s:n,x:r,h:a+.6,tube:0,size:3.2,color:c.accent.clone(),flicker:.3})):(u===`frost`||u===`glow`)&&s<.4?(qh(t,n,r,a,1.2,1.2,1.2,Hh,Uh.setFromAxisAngle(Rh.set(1,0,0),Math.PI/2)),h(l.icicle,Hh)):s<.5?(qh(t,n,r,a,1.5,1.5,1.5,Hh,Uh.setFromAxisAngle(Rh.set(1,0,0),-1.2)),h(l.tuft,Hh)):s<.62&&u!==`cosmic`&&u!==`cloud`?(Kh(t,n,r,a+.3,o.range(0,6),o.range(.35,.6),Hh),h(u===`frost`||u===`glow`?l.pineSnow:u===`juniper`?l.juniper:l.pine,Hh)):(qh(t,n,r,a,o.range(.4,1.1),o.range(.4,.8),o.range(.4,1),Hh,Uh.setFromAxisAngle(Rh.set(1,0,0),-1.4)),h(l[`rock${o.int(0,3)}`],Hh))}if((u===`pine`||u===`crystal`||u===`juniper`)&&n!==`ice`&&o.chance(.55)&&b-y>24){let e=o.sign()*o.range(5.4,6.6);d.falls=[{s:y+1,x:e,h:S(y+1,e)+.3}],f.push(vg(t,y-2,b+1.5,e,(e,t)=>S(e,t)+.22,o.range(1.3,2)))}yield*yg(t,r,a,o,u,b+3,m-1,.6,v,!1);break}case`cave`:{let n=3.4,s=e.marks.mouth,d=e.marks.exit,f=hg(`crest`),v=u===`juniper`?`rock`:u===`crystal`||u===`cosmic`?`crystal`:`ice`;yield*ug(r,t,{sa:p,sb:s+.8,xs:Nh,h:(e,t,n)=>f(n)*(1-O(p,s,e)*.6)+g(e,n)+O(s-10,s,e)*Math.max(0,Math.abs(n)-4)*1.2,paint:(e,t,n,r,i,o,s)=>Math.abs(n)<=mg?(a.trail(e,n,s),K.ground):a.ground(i,o,e,n,s)}),yield*dg(r,t,s,e.variant===`shaft`?m+.01:d+.6,n,a,v,t=>1-.66*O(s+1,s+12,t)*(e.variant===`shaft`?1:1-.55*O(d-10,d-1,t))),fg(r,t,s,n,1,a),yield,e.variant!==`shaft`&&(fg(r,t,d,n,-1,a),yield*_(d-.6,m,f),yield*yg(t,r,a,o,u,d+2,m-1,.7,f,!1));let y=s+6,b=(e.variant===`shaft`?m:d)-3;for(let e=0;e<(b-y)*.32;e++){e%10==9&&(yield);let r=o.range(y,b),a=o.sign()*o.range(2.05,2.9)*n;o.next()<.55?(qh(t,r,a,0,.6,.7,.6,Hh,void 0,n),h(v===`ice`?l.iceSpike:l.crystal,Hh),(v===`crystal`||o.chance(.4))&&i.push({s:r,x:a,h:1,tube:n,size:1.4,color:c.accent.clone(),flicker:.2})):(qh(t,r,o.range(-.6,.6)*n+Math.PI*n*o.sign(),0,o.range(.5,.9),o.range(.5,1),.6,Hh,void 0,n),h(l.stalactite,Hh))}for(let e=y;e<b;e+=o.range(9,14))i.push({s:e,x:o.sign()*n*2.6,h:.9,tube:n,size:1.7,color:v===`ice`?new H(10479359):v===`rock`?new H(16761466):c.accent.clone(),flicker:.4});break}case`shaft`:{let n=e.marks.climbEnd,i=u===`juniper`?`rock`:u===`crystal`||u===`cosmic`?`crystal`:`ice`;yield*dg(r,t,p,n+.6,3.4,a,i,e=>.34+.46*O(n-14,n,e));let s=hg(`crest`),c=hg(`buttress`);yield*ug(r,t,{sa:n-1,sb:m,xs:Nh,h:(e,n,r)=>{let i=O(.42,1.25,t.pitchAt(e));return D(s(r),c(r)*.6,i)+g(e,r)*(1-i)},paint:(e,n,r,i,o,s,c)=>Math.abs(r)<=mg&&t.pitchAt(e)<.5?(a.trail(e,r,c),K.ground):a.ground(o,s,e,r,c)}),yield*yg(t,r,a,o,u,n+4,m-1,.5,s,!1);break}case`bridge`:yield*Dg(e,t,r,a,o,n);break;case`glide`:{let e=hg(`meadow`),n=hg(`crest`),i=m-30;yield*ug(r,t,{sa:i,sb:m,xs:Nh,h:(t,r,a)=>D(n(a),e(a),O(i,i+18,t))+g(t,a),paint:(e,t,n,r,i,o,s)=>Math.abs(n)<=4.4?(a.trail(e,n,s),K.ground):a.ground(i,o,e,n,s)}),pg(r,t,i+.2,n,a,-1,90),yield*yg(t,r,a,o,u,i+4,m-1,.9,e,!1,!0);break}}e.kind!==`cave`&&e.kind!==`shaft`&&(yield*Cg(e,t,r,a,o));let v=Op(),y=new zo(r.build(),v);y.matrixAutoUpdate=!1,d.group.add(y);for(let e of f)d.group.add(e);return d.dispose=()=>{y.geometry.dispose();for(let e of f)e.geometry.dispose()},d}var vg=(e,t,n,r,i,a)=>{let o=[],s=[],c=[],l=Math.max(2,Math.ceil((n-t)/1.5));for(let u=0;u<=l;u++){let d=t+(n-t)*u/l;for(let t of[0,1]){let c=r+(t-.5)*a,l=Gh(e,d,c,i(d,c)+Math.sin(d*.7+t)*.08,Lh);o.push(l.x,l.y,l.z),s.push(t,(n-d)/6)}if(u<l){let e=u*2;c.push(e,e+1,e+2,e+1,e+3,e+2)}}let u=new ho;u.setAttribute(`position`,new U(o,3)),u.setAttribute(`uv`,new U(s,2)),u.setIndex(c),u.computeBoundingSphere();let d=new zo(u,Fh);return d.renderOrder=3,d.matrixAutoUpdate=!1,d};function*yg(e,t,n,r,i,a,o,s,c,l,u=!1){let d=Up(),f=o-a;if(f<=0)return;let p=Math.floor(f*.85*s),m=new V,h=u?5:4.2;for(let s=0;s<p;s++){s%8==7&&(yield);let u=r.range(a,o),f=r.sign()*(h+r.next()**1.35*26),p=c(f)+n.noise.n2(u*.035,f*.05)*3.2*gg(f)-.12;if(Math.abs(c(f+.5)-c(f-.5))>1.4)continue;let g=r.next(),_=Math.abs(f)<8,v=null,y=1;if(l)v=g<.55?d[`rock${r.int(0,3)}`]:g<.75?d.cairn:d.tuft,y=g<.55?r.range(.3,1.1):r.range(.6,1.1);else switch(i){case`pine`:v=g<.42?r.chance(.4)?d.pineTall:d.pine:g<.55?d.shrub:g<.72?d[`rock${r.int(0,3)}`]:g<.86?d.flowers:d.tuft,y=g<.42?r.range(.8,1.7):r.range(.5,1.2);break;case`juniper`:v=g<.26?d.juniper:g<.46?d.spire:g<.78?d[`rock${r.int(0,3)}`]:g<.9?d.shrub:d.flowers,y=g<.26?r.range(.8,1.4):g<.46?r.range(.6,1.5):r.range(.4,1.4);break;case`crystal`:v=g<.16?d.crystal:g<.45?d.pine:g<.6?d.mushroom:g<.82?d[`rock${r.int(0,3)}`]:d.flowers,y=g<.16?r.range(.6,1.4):r.range(.5,1.3);break;case`frost`:v=g<.45?d.pineSnow:g<.6?d.iceSpike:d[`rock${r.int(0,3)}`],y=r.range(.6,1.5);break;case`glow`:v=g<.18?d.crystal:g<.55?d.pineSnow:g<.7?d.iceSpike:d[`rock${r.int(0,3)}`],y=r.range(.6,1.4);break;case`cloud`:v=g<.3?d.cairn:g<.75?d[`rock${r.int(0,3)}`]:d.slabRock,y=r.range(.5,1.3);break;case`cosmic`:v=g<.3?d.crystal:g<.55?d.spire:d[`rock${r.int(0,3)}`],y=g<.3?r.range(.8,2):r.range(.4,1.2)}v&&(_&&(v===d.pine||v===d.pineTall||v===d.pineSnow||v===d.spire||v===d.juniper)&&(y*=.7),Kh(e,u,f,p,r.range(0,Math.PI*2),y,m),t.ao=1,t.stamp(v,m,n.paint))}}function*bg(e,t,n,r,i,a,o,s){let c=Up(),l=new V,u=0;for(let d=i;d<a;d+=r.range(.9,2.1)){++u%14==0&&(yield);let i=r.sign()*r.range(s+.45,s+2.6),a=o(i)-.05;r.next()<.55?(Kh(e,d,i,a,r.range(0,6.28),r.range(.6,1.3),l),t.stamp(c.tuft,l,n.paint)):(Kh(e,d,i,a,r.range(0,6.28),r.range(.12,.3),l,r.range(.08,.24)),t.stamp(c[`rock${r.int(0,3)}`],l,n.paint))}}function*xg(e,t,n,r,i,a,o){let s=Up(),c=new V,l=hg(o<0?`ledgeL`:`ledgeR`);for(let u=i+4;u<a-4;u+=r.range(5,9)){yield;let i=o*r.range(3.2,4.4);Kh(e,u,i,l(i)-.2,r.range(0,6.28),r.range(.5,1.1),c,r.range(.4,.9)),t.stamp(s[`rock${r.int(0,3)}`],c,n.paint)}}var Sg=-1e9;function*Cg(e,t,n,r,i){e.s0<Sg-400&&(Sg=-1e9),r.pal;for(let a=e.s0+10;a<e.s1;a+=16){if(a-Sg<95)continue;if(!i.chance(.7)){Sg=a-40;continue}Sg=a;let o=i.sign(),s=i.range(78,190);t.frame(a,Ih);let c=Ih.px+Ih.rx*o*s,l=Ih.pz+Ih.rz*o*s,u=Ih.py-i.range(160,260),d=i.range(220,420)*(e.kind===`summit`?.7:1),f=i.range(26,46),p=!0;for(let e=Math.max(t.start,a-420);e<Math.min(t.length,a+520);e+=6)if(t.frame(e,Z),Math.hypot(Z.px-c,Z.pz-l)<f*1.5+22&&Z.py>u-20){p=!1;break}p&&(yield,Tg(n,c,u,l,f,d,r,i.next()*1e3))}}var wg=new H,Tg=(e,t,n,r,i,a,o,s)=>{let c=o.noise,l=o.pal,u=[];for(let e=0;e<=12;e++){let o=e/12,l=[],d=n+a*o,f=(1-o)**.85*(1+.18*Math.sin(o*7+s));for(let n=0;n<=14;n++){let a=n%14/14*Math.PI*2,u=1+c.n2(Math.cos(a)*1.3+s,o*3.1)*.32+c.n2(Math.sin(a)*2.7,o*6+s)*.12,p=Math.max(.6,i*f*u+(e===12?0:1.5));l.push(new B(t+Math.cos(a)*p,d+(e===12?c.n2(s,3)*8:0),r+Math.sin(a)*p))}u.push(l)}let d=1-Math.min(.85,o.snowCover*.6+.18);for(let t=0;t<12;t++)for(let n=0;n<14;n++){let r=u[t][n],i=u[t][n+1],a=u[t+1][n+1],s=u[t+1][n],c=(t+.5)/12;Rh.subVectors(i,r),zh.subVectors(s,r),Bh.crossVectors(zh,Rh).normalize();let f=Math.max(0,Bh.y);o.strata(r.y,wg);let p=K.rock;(c>d&&f>.12||f>.55&&o.snowCover>.2)&&(wg.copy(l.snow).multiplyScalar(.93+f*.07),p=K.snow),e.surf=p,e.glow=0,e.ao=.75+c*.25,e.quad(r,s,a,i,wg)}e.ao=1};function Eg(e,t,n,r,i,a,o,s,c){let l=Gh(t,n,r,i,new B),u=Gh(t,a,o,s,new B),d=new H(15327952),f=new B;e.surf=K.made,e.glow=0;for(let t=0;t<=14;t++){let n=t/14,r=l.clone().lerp(u,n);if(r.y-=Math.sin(n*Math.PI)*.9,t>0){let n=new B(0,-.03,0);e.quad(f,r,r.clone().add(n),f.clone().add(n),d);let i=f.clone().lerp(r,.5),a=Mh[(t+Math.floor(c.next()*2))%5],o=f.clone().lerp(r,.15),s=f.clone().lerp(r,.85),l=i.clone().add(new B(0,-.55,0));e.tri(o,s,l,a),e.tri(o,l,s,a)}f.copy(r)}}function*Dg(e,t,n,r,i,a){let o=Up(),s=new V,{s0:c,s1:l}=e,u=e.marks.deckStart,d=e.marks.deckEnd,f=hg(`crest`);for(let[e,i,a,o]of[[c,u+.4,u+.4,1],[d-.4,l,d-.4,-1]])yield*ug(n,t,{sa:e,sb:i,xs:Nh,h:(e,t,n)=>f(n)+r.noise.n2(e*.05,n*.05)*3*gg(n),paint:(e,t,n,i,a,o,s)=>Math.abs(n)<=2.2?(r.trail(e,n,s),K.ground):r.ground(a,o,e,n,s)}),pg(n,t,a,f,r,o,120);let p=e.obstacles.filter(e=>e.kind===`plankgap`),m=1.75,h=0;n.surf=K.made,n.glow=0;for(let e=u;e<d;e+=.42){++h%14==0&&(yield);for(let r=0;r<5;r++){let a=-1.75+2*m*r/5,c=-1.75+2*m*(r+1)/5,l=(a+c)/2;if(p.some(t=>Math.abs(e-t.s)<t.depth/2&&l>t.x-t.w&&l<t.x+t.w))continue;let u=new hi().setFromAxisAngle(new B(0,1,0),i.range(-.03,.03));qh(t,e,l+i.range(-.02,.02),0,(c-a)*1.02,1,1+i.range(-.1,.1),s,u);let d=(i.chance(.2)?Oh:Dh).clone().multiplyScalar(.86+i.next()*.26);n.stamp(o.plank,s,(e,t,r,i)=>(n.surf=K.made,n.glow=0,i.copy(d).multiplyScalar(t)))}}for(let e of[-1.85,1.85])jg(n,t,u,d,e,-.2,.22,.28,Oh);for(let e of[-2.05,2.05]){yield,kg(n,t,u,d,e,1.1,.5,jh),yield;for(let r=u+1.4;r<d-1;r+=1.6)Ag(n,Gh(t,r,e,1.1-Og(r,u,d,.5),new B),Gh(t,r,e*.92,0,new B),.03,jh);for(let i of[u-.6,d+.6])Kh(t,i,e,-.2,0,1,s,1.6),n.stamp(o.post,s,r.paint);yield,Eg(n,t,u+1,e,1.35,(u+d)/2,e,1.5,i),yield,Eg(n,t,(u+d)/2,e,1.5,d-1,e,1.35,i)}for(let i of e.obstacles.filter(e=>e.kind===`swinglog`)){for(let e of[-2.25,2.25])Kh(t,i.s,e,-.2,0,1,s,5.2),n.stamp(o.post,s,r.paint);jg(n,t,i.s-.2,i.s+.2,0,5,4.9,.28,Oh,!0)}}var Og=(e,t,n,r)=>Math.sin(T((e-t)/(n-t),0,1)*Math.PI)*r;function kg(e,t,n,r,i,a,o,s){let c=Gh(t,n,i,a,new B);for(let l=n+1;l<=r+.01;l+=1){let u=Gh(t,Math.min(l,r),i,a-Og(l,n,r,o),new B);Ag(e,c,u,.045,s),c=u}}function Ag(e,t,n,r,i){let a=new B().subVectors(n,t).normalize(),o=new B().crossVectors(a,Math.abs(a.y)>.9?new B(1,0,0):new B(0,1,0)).normalize().multiplyScalar(r),s=new B().crossVectors(o,a).normalize().multiplyScalar(r),c=[o.clone().add(s),o.clone().sub(s),o.clone().negate().sub(s),o.clone().negate().add(s)],l=i.clone().multiplyScalar(.72);e.surf=K.made,e.glow=0;for(let r=0;r<4;r++){let a=(r+1)%4;e.quad(t.clone().add(c[r]),n.clone().add(c[r]),n.clone().add(c[a]),t.clone().add(c[a]),r%2?l:i)}}function jg(e,t,n,r,i,a,o,s,c,l=!1){let u=new V,d=Up(),f=(t,n,r,i)=>(e.surf=K.made,e.glow=0,i.copy(c).multiplyScalar(n));if(l)qh(t,(n+r)/2,i,a,o,1,1,u),e.stamp(d.beam,u,f);else for(let c=n;c<r;c+=2){let n=Math.min(2,r-c);qh(t,c+n/2,i,a,1,1,1,u,new hi().setFromAxisAngle(new B(0,1,0),Math.PI/2)),u.scale(new B(n,s/.3,o/.3)),e.stamp(d.beam,u,f)}}var Mg=()=>{Sg=-1e9},Ng=lt(),Pg=new B,Fg=new B,Ig=new B,Lg=new B,Rg=new V,zg=new V,Bg=new hi,Vg=(e,t,n,r,i=K.rock,a=0,o=!0)=>{let s=t.index?t.toNonIndexed():t;o&&!s.getAttribute(`normal`)&&s.computeVertexNormals();let c=s.getAttribute(`position`),l=s.getAttribute(`normal`),u=typeof r==`number`?new H().setHex(r):r,d=new V().copy(n).invert().transpose(),f=new B,p=new B,m=new B;e.surf=i,e.glow=a;for(let t=0;t<c.count;t+=3)Fg.fromBufferAttribute(c,t).applyMatrix4(n),Ig.fromBufferAttribute(c,t+1).applyMatrix4(n),Lg.fromBufferAttribute(c,t+2).applyMatrix4(n),e.ao=Math.min(1,.55+(Fg.y+Ig.y+Lg.y)/3*.4),o&&l?(f.fromBufferAttribute(l,t).transformDirection(d),p.fromBufferAttribute(l,t+1).transformDirection(d),m.fromBufferAttribute(l,t+2).transformDirection(d),e.triN(Fg,Ig,Lg,f,p,m,u)):e.tri(Fg,Ig,Lg,u);e.ao=1,s!==t&&s.dispose(),t.dispose()},Hg=new H(460814),Ug=new H(1317680),Wg=new H(12576511),Gg=new H(4030404),Kg=(e,t,n=.28)=>Lp(new ac(e,2),n*e,t),qg=new H(11880191),Jg=new H(15004671),Yg=e=>{let t=_t(e).flora;return t===`juniper`?`rock`:t===`crystal`||t===`cosmic`?`crystal`:`ice`},Xg=e=>{let t=wh(e),n=Yg(e);return n===`rock`?t.rockDark.clone().multiplyScalar(.75):t.rockDark.clone().lerp(new H(1448229),n===`ice`?.55:.4)},Zg=(e,t,n,r)=>{let i=new Pp,a=wh(n),o=a.rock.clone().lerp(a.rockDark,.2),s=a.rockLight.clone().lerp(a.rock,.3),c=a.snowCover>.3;switch(e){case`boulder`:{let e=Math.max(1,Math.round(t/1.05));for(let n=0;n<e;n++){let l=-t+2*t*(n+.5)/e,u=t/e*1.02;Vg(i,Kg(1,r+n*7),J(l,u*.72,0,0,r+n,0,u,u*.92,u*.95),n%2?s:o),c&&Vg(i,Kg(1,r+n*3,.12),J(l,u*1.42,0,0,n,0,u*.75,u*.25,u*.7),a.snow,K.snow)}break}case`roller`:case`rockfall`:{let t=e===`roller`?1:.72;Vg(i,Kg(t,r,.3),J(0,0,0,0,r,0),o),Vg(i,Kg(t*.45,r+5,.3),J(t*.55,t*.4,-t*.2,0,r,0),s);break}case`log`:{let e=t*2+.2;Vg(i,new ks(.34,.38,e,12,4),J(0,.36,0,0,0,Math.PI/2),new H(6176555),K.made);for(let t of[-1,1])Vg(i,new ks(.3,.3,.04,12),J(t*e/2,.36,0,0,0,Math.PI/2),new H(14266490),K.made);for(let t=0;t<Math.round(e/1.4);t++)Vg(i,new ks(.05,.09,.55,6),J(-e/2+.7+t*1.4,.72,.05,.4,0,.6-t%2*1.2),Oh,K.made);c&&Vg(i,new ks(.2,.22,e*.92,10,1,!1,0,Math.PI),J(0,.6,0,0,0,Math.PI/2,1,1,1.4),a.snow,K.snow);break}case`crevasse`:case`hole`:{let n=e===`hole`?3.1:3,o=t*2,s=c||e===`hole`;Vg(i,new sc(o,n),J(0,.01,0,-Math.PI/2),Hg,K.made,0,!1);for(let e of[-1,1]){Vg(i,new sc(o,6,6,3),J(0,-3,e*n/2,0,e<0?0:Math.PI),s?Gg.clone().multiplyScalar(.45):Ug,s?K.ice:K.rock);for(let t=0;t<Math.max(3,Math.round(o/.55));t++){let c=-o/2+.25+t*.55;Vg(i,Kg(.26,r+t*3+e,.25),J(c,.03,e*n/2+e*.04,0,t,0,1.2,.35,.85),s?Wg:a.groundDark,s?K.ice:K.ground)}}break}case`roof`:case`spur`:{let a=Math.max(1,Math.round(t/1.1)),c=e===`spur`?Xg(n):null;for(let l=0;l<a;l++){let u=-t+2*t*(l+.5)/a,d=t/a*1.05;Vg(i,Kg(1,r+l*11,.3),J(u,d*.5,.15,0,r+l,0,d,d*1.05,d*1.2),c?l%2?c.clone().multiplyScalar(1.25):c:l%2?s:o),e===`roof`?Vg(i,Kg(1,r+l*5,.22),J(u,d*1.1,.7,.4,l,0,d*.95,d*.45,d*.8),o.clone().multiplyScalar(.85)):Yg(n)===`ice`&&Vg(i,Kg(1,r+l*5,.16),J(u,d*.95,.75,.3,l,0,d*.8,d*.3,d*.55),Jg,K.snow)}break}case`icicle`:{let e=Math.max(2,Math.round(t/.32));Vg(i,Kg(1,r,.15),J(0,.35,.5,0,0,0,t,.45,.6),Wg,K.ice);for(let n=0;n<e;n++){let r=-t+.2+n*(2*t-.4)/(e-1),a=.9+n*37%7*.12;Vg(i,new As(.13+n%2*.05,a,7),J(r,.45,.5-a/2,-Math.PI/2),Wg,K.ice)}break}case`slab`:{let e=t+.12,n=new H(1910328).lerp(a.rockDark,.25),o=(t,n)=>{let i=t/44*Math.PI*2,a=Math.cos(i),o=Math.sin(i),s=(Math.abs(a)**6+Math.abs(o)**6)**(-1/6),c=1+(Math.sin(t*2.7+r)*.5+Math.sin(t*5.3+r*1.7)*.5)*.05;return n.set(a*s*e*c,.035,o*s*1.6800000000000002*c)},s=new B(0,.04,0),c=new B(0,1,0);i.surf=K.ice,i.glow=0;for(let e=0;e<44;e++)o(e,Fg),o(e+1,Ig),i.triN(s,Ig,Fg,c,c,c,n);for(let e=0;e<44;e+=2)o(e,Lg),Vg(i,Kg(.11,r+e,.3),J(Lg.x,.05,Lg.z,0,e,0,1.4,.45,1.1),Jg,K.snow);for(let t=0;t<3;t++)Vg(i,new sc(.14,3.2*.7),J(-e*.55+t*e*.55,.045,0,-Math.PI/2),new H(4085880),K.ice);break}case`eagle`:case`bird`:{let t=e===`eagle`?new H(4861984):new H(1908524),n=e===`eagle`?1:.7;Vg(i,new cc(.28*n,10,8),J(0,0,0,0,0,0,1,.75,1.9),t,K.made),Vg(i,new cc(.16*n,10,8),J(0,.1*n,.5*n),e===`eagle`?new H(15920352):t,K.made),Vg(i,new As(.06*n,.2*n,6),J(0,.07*n,.7*n,Math.PI/2),new H(16756782),K.made),Vg(i,new As(.22*n,.5*n,6),J(0,0,-.62*n,-Math.PI/2,0,0,1,1,.35),t.clone().multiplyScalar(.8),K.made);break}case`stalagmite`:{let e=Math.max(1,Math.round(t/.8)),a=Xg(n),o=Yg(n)===`ice`;for(let n=0;n<e;n++){let s=-t+2*t*(n+.5)/e,c=t/e*.95,l=1.55+(r+n*7)%5*.12;Vg(i,Lp(new ks(c*.38,c,l,11,6),.09*c,r+n,2.2),J(s,l/2,0,0,n,0),n%2?a.clone().multiplyScalar(1.2):a),Vg(i,Kg(c*.42,r+n*3,.2),J(s,l,0,0,n,0,1,.8,1),o?Jg:a.clone().multiplyScalar(1.35),o?K.ice:K.rock)}break}case`crystal`:{let e=Math.max(1,Math.round(t/.7));for(let a=0;a<e;a++){let o=-t+2*t*(a+.5)/e,s=t/e*.62;Vg(i,Kg(s*.75,r+a,.25),J(o,.1,0,0,a,0,1,.45,1),Xg(n));for(let e=0;e<3;e++)Vg(i,new oc(1,0),J(o+(e-1)*s*.5,s*(1.4-e*.2),(e-1)*.2,0,e,(e-1)*.35,s*.55,s*(2.1-e*.4),s*.55),qg,K.made,.55,!1)}break}case`drip`:{let e=Xg(n);Vg(i,Kg(.62,r,.3),J(0,.45,0,0,r,0,1,.8,1.25),e),Vg(i,Kg(.4,r+3,.25),J(.2,.8,-.3,.4,0,0,1,.7,1),Jg,K.ice),Vg(i,Lp(new As(.3,1,8,3),.04,r,3),J(-.15,.4,.75,Math.PI/2),Gg,K.ice);break}case`plankgap`:for(let e of[-1,1]){Vg(i,new Os(t*2,.06,.1),J(0,-.04,e*1.35),Oh,K.made,0,!1);for(let n=0;n<3;n++)Vg(i,new Os(.3,.06,.4),J(-t+.4+n*t*.7,-.08-n*.1,e*1.5,e*.5,0,.2),Dh,K.made,0,!1)}break;case`swinglog`:Vg(i,new ks(.32,.32,t*2,12),J(0,0,0,0,0,Math.PI/2),new H(6176555),K.made);for(let e of[-1,1])Vg(i,new ks(.29,.29,.03,12),J(e*t*2/2,0,0,0,0,Math.PI/2),new H(14266490),K.made);for(let e of[-.45,.45])Vg(i,new ks(.025,.025,4.2,4),J(e*t*2*.5,2.1,0),jh,K.made)}return i.build()},Qg=class{group=new fa;live=new Map;geoCache=new Map;topZone=0;wingGeo;constructor(e){e.add(this.group);let t=new Pp;Vg(t,new Os(1.15,.04,.5),J(.62,0,0),new H(4007960),K.made,0,!1),Vg(t,new Os(.5,.03,.42),J(1.25,.01,-.05),new H(15327952),K.made,0,!1),this.wingGeo=t.build()}geo(e,t){let n=Math.round(e.w*4)/4,r=`${e.kind}:${n}:${t}:${e.seed%3}`,i=this.geoCache.get(r);return i||(i=Zg(e.kind,Math.max(.3,n),t,e.seed%3+11),this.geoCache.set(r,i)),i}add(e,t,n){if(this.live.has(e.id))return;if(t>this.topZone){this.topZone=t;let e=new Set([...this.live.values()].map(e=>e.mesh.geometry));for(let[n,r]of this.geoCache)Number(n.split(`:`)[2])<t-1&&!e.has(r)&&(r.dispose(),this.geoCache.delete(n))}let r=new zo(this.geo(e,t),Op());r.matrixAutoUpdate=!1;let i={ob:e,mesh:r,t:0,tube:n.tube??0};if(e.kind===`eagle`||e.kind===`bird`){i.wings=[new zo(this.wingGeo,Op()),new zo(this.wingGeo,Op())];let t=e.kind===`eagle`?1:.7;for(let e of i.wings)e.scale.setScalar(t),r.add(e);i.wings[1].scale.x=-t}this.group.add(r),this.live.set(e.id,i)}remove(e){let t=this.live.get(e);t&&(this.group.remove(t.mesh),this.live.delete(e))}clear(){this.group.clear(),this.live.clear()}smash(e,t){let n=this.live.get(e);n&&(n.smash={v:t.clone().multiplyScalar(9).add(new B(0,7,0)),spin:8,t:0})}get count(){return this.live.size}update(e,t,n,r,i){for(let r of this.live.values()){let a=r.ob;if(r.t+=e,a.state===2&&!r.smash&&a.kind!==`plankgap`&&a.kind!==`crevasse`&&a.kind!==`hole`&&a.kind!==`slab`){r.mesh.visible=!1;continue}let o=a.s-n;if(o>200||o<-30){r.mesh.visible=!1;continue}r.mesh.visible=!0;let s=a.s,c=i(a),l=0,u=Bg.identity();switch(a.kind){case`rockfall`:case`drip`:l=(a.kind===`drip`?.4:.7)+Math.abs(Math.sin(r.t*5.5))*(a.state>=1?.8:0),a.kind===`rockfall`&&u.setFromAxisAngle(Pg.set(1,0,0),a.state>=1?-r.t*7:0);break;case`roller`:l=1,u.setFromAxisAngle(Pg.set(1,0,0),a.state>=1?-r.t*8:0);break;case`eagle`:if(l=1.2+Math.sin(r.t*3)*.12,c+=Math.sin(r.t*2.4+a.seed)*.35,u.setFromAxisAngle(Pg.set(0,1,0),Math.PI),r.wings){let e=Math.sin(r.t*9)*.6;r.wings[0].rotation.z=e,r.wings[1].rotation.z=-e}break;case`bird`:if(l=.9+Math.sin(r.t*2.2+a.seed)*.3,u.setFromAxisAngle(Pg.set(0,1,0),Math.PI),r.wings){let e=Math.sin(r.t*7+a.seed)*.7;r.wings[0].rotation.z=e,r.wings[1].rotation.z=-e}break;case`swinglog`:{l=.95;let e=a.state>=1?a.amp*a.freq*Math.cos(a.freq*a.age+a.phase):0;u.setFromAxisAngle(Pg.set(0,0,1),-e*.12);break}case`roof`:l=.05}if(r.smash){r.smash.t+=e,r.smash.v.y-=22*e,r.mesh.matrix.elements[12]+=r.smash.v.x*e,r.mesh.matrix.elements[13]+=r.smash.v.y*e,r.mesh.matrix.elements[14]+=r.smash.v.z*e,r.mesh.matrixWorldNeedsUpdate=!0,r.smash.t>1.4&&(r.mesh.visible=!1);continue}t.frame(s,Ng);let d=r.tube,f=Ng.ux,p=Ng.uy,m=Ng.uz,h=Ng.rx,g=Ng.ry,_=Ng.rz;if(d>0){let e=c/d,t=Math.sin(e),n=Math.cos(e),r=Ng.rx*t-Ng.ux*n,i=Ng.ry*t-Ng.uy*n,a=Ng.rz*t-Ng.uz*n,o=d-l;Pg.set(Ng.px+Ng.ux*d+r*o,Ng.py+Ng.uy*d+i*o,Ng.pz+Ng.uz*d+a*o),f=-r,p=-i,m=-a,h=Ng.rx*n+Ng.ux*t,g=Ng.ry*n+Ng.uy*t,_=Ng.rz*n+Ng.uz*t}else Pg.set(Ng.px+Ng.rx*c+Ng.ux*l,Ng.py+Ng.ry*c+Ng.uy*l,Ng.pz+Ng.rz*c+Ng.uz*l);Rg.makeBasis(Fg.set(-h,-g,-_),Ig.set(f,p,m),Lg.set(Ng.fx,Ng.fy,Ng.fz)),Rg.multiply(zg.makeRotationFromQuaternion(u)),Rg.setPosition(Pg),r.mesh.matrix.copy(Rg),r.mesh.matrixWorldNeedsUpdate=!0}}forEach(e){for(let t of this.live.values())e(t.ob,t.mesh)}},$g=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,e_=`
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
}`,t_=`
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
}`,n_=`
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = smoothstep(0.5, 0.0, d);
  a = a * a;
  gl_FragColor = vec4(vec3(1.0, 0.97, 0.92) * a * vA, 1.0);
}`,r_=`
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
}`,i_=`
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
}`,a_=class{group=new fa;sky;stars;aurora;auroraMesh;sunDir=new B(0,.3,1).normalize();constructor(){this.sky=new yc({vertexShader:$g,fragmentShader:e_,side:1,depthWrite:!1,uniforms:{uTop:{value:new H},uMid:{value:new H},uHorizon:{value:new H},uFog:{value:new H},uSun:{value:new H},uGlow:{value:new H},uSunDir:{value:this.sunDir},uSunSize:{value:9e-4},uCave:{value:0},uTime:{value:0},uCloud:{value:new H},uClouds:{value:1}}});let e=new zo(new cc(2600,32,16),this.sky);e.renderOrder=-10,e.frustumCulled=!1,this.group.add(e);let t=1400,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t),a=7,o=()=>(a=a*16807%2147483647)/2147483647;for(let e=0;e<t;e++){let t=o()*2-1,a=o()*Math.PI*2,s=Math.abs(t)*.95+.02,c=Math.sqrt(1-s*s);n[e*3]=Math.cos(a)*c*2400,n[e*3+1]=s*2400,n[e*3+2]=Math.sin(a)*c*2400;let l=o();r[e]=l>.985?5.5:l>.9?3.4:2+o(),i[e]=o()}let s=new ho;s.setAttribute(`position`,new U(n,3)),s.setAttribute(`aSize`,new U(r,1)),s.setAttribute(`aPhase`,new U(i,1)),this.stars=new yc({vertexShader:t_,fragmentShader:n_,transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:0},uPx:{value:1}}});let c=new xs(s,this.stars);c.renderOrder=-9,c.frustumCulled=!1,this.group.add(c);let l=new ho,u=[],d=[],f=[],p=[{r:1500,a0:-.9,a1:.7,y0:260,h:620},{r:1750,a0:.2,a1:1.6,y0:380,h:520},{r:1300,a0:-2.2,a1:-.7,y0:300,h:480}],m=0;for(let e of p){for(let t=0;t<=64;t++){let n=t/64,r=e.a0+(e.a1-e.a0)*n,i=Math.sin(r)*e.r,a=Math.cos(r)*e.r,o=Math.sin(n*7)*60;if(u.push(i,e.y0+o,a,i,e.y0+e.h+o,a),d.push(n,0,n,1),t<64){let e=m+t*2;f.push(e,e+1,e+2,e+1,e+3,e+2)}}m+=130}l.setAttribute(`position`,new U(u,3)),l.setAttribute(`uv`,new U(d,2)),l.setIndex(f),this.aurora=new yc({vertexShader:r_,fragmentShader:i_,transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:0},uA:{value:new H(3014576)},uB:{value:new H(10120191)}}}),this.auroraMesh=new zo(l,this.aurora),this.auroraMesh.renderOrder=-8,this.auroraMesh.frustumCulled=!1,this.group.add(this.auroraMesh)}update(e,t,n,r,i,a=1){this.stars.uniforms.uPx.value=a,this.group.position.copy(t);let o=this.sky.uniforms;o.uTop.value.copy(e.skyTop),o.uMid.value.copy(e.skyMid),o.uHorizon.value.copy(e.horizon),o.uFog.value.copy(e.fog),o.uSun.value.copy(e.sun),o.uGlow.value.copy(e.sunGlow),o.uCave.value=r,o.uTime.value=n,o.uCloud.value.copy(e.cloud),o.uClouds.value=1-e.stars*.6;let s=e.sunAzim+i;this.sunDir.set(Math.sin(s)*Math.cos(e.sunElev),Math.sin(e.sunElev),Math.cos(s)*Math.cos(e.sunElev)).normalize(),this.stars.uniforms.uTime.value=n,this.stars.uniforms.uOpacity.value=e.stars*(1-r),this.aurora.uniforms.uTime.value=n,this.aurora.uniforms.uOpacity.value=e.aurora*(1-r)*.9,this.auroraMesh.visible=e.aurora>.01&&r<.99,this.auroraMesh.rotation.y=i}},Q=lt(),o_=lt(),s_=lt(),$=new B,c_=new B,l_=new B,u_=new V,d_=new hi,f_=new hi,p_=new H,m_=new B(0,1,0),h_=Zm(),g_=Zm(),__=Zm(),v_=(e,t,n,r,i)=>{let a=r*r,o=2*r;t.x+=(a*(n.x-e.x)-o*t.x)*i,t.y+=(a*(n.y-e.y)-o*t.y)*i,t.z+=(a*(n.z-e.z)-o*t.z)*i,e.addScaledVector(t,i)},y_=(()=>{let e={};try{let t=new URLSearchParams(location.search).get(`cam`);if(t)for(let n of t.split(`;`)){let[t,r]=n.split(`:`);t&&r&&(e[t]=r.split(`,`).map(Number))}}catch{}return e})(),b_=()=>({pos:new B,target:new B,up:new B(0,1,0),fov:64}),x_=class{renderer;scene=new xa;camera=new rl(64,1,.1,7e3);sky=new a_;backdrop=new np;fx;obstacles;items;character;bestGate=new sp;birds=new hp;pieces=new Map;buildQueue=[];hemi=new Gc(16777215,4473924,1.5);key=new cl(16777215,2);rim=new cl(16777215,1);lamp=new al(16773328,0,34,1.4);fog=new ba(16777215,80,560);pal=Th(wh(0));cave=0;camP=new B;camV=new B;tgtP=new B;tgtV=new B;camUp=new B(0,1,0);shotA=b_();shotB=b_();camMode=`run`;camPrev=`run`;camBlend=1;snapCam=!0;trauma=0;fovKick=0;roll=0;death=null;catchT=0;catchDrop=0;catchDropV=0;ropeVis=0;ropeAnchor=new B;ropeAnchorId=-1;homeT=0;charPos=new B;charQuat=new hi;lean=0;curve=0;celebrate=0;landT=0;quality={maxDpr:2,particles:1};dpr=1.5;frameEma=16;slowFor=0;fastFor=0;adaptive=!0;homeClose=!1;time=0;body=new B;weatherAcc=0;sprayAcc=0;trailAcc=0;climberData;constructor(e,t){this.renderer=new Kf({canvas:e,antialias:!0,powerPreference:`high-performance`,stencil:!1,alpha:!1}),this.renderer.outputColorSpace=Vr,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.dpr),this.scene.fog=this.fog,this.scene.add(this.sky.group,this.backdrop.group),this.scene.add(this.hemi,this.key,this.key.target,this.rim,this.rim.target,this.lamp),this.fx=new Xm(this.scene),this.obstacles=new Qg(this.scene),this.items=new xh(this.scene),this.climberData=Xe(t),this.character=new Bm(this.climberData),this.scene.add(this.character.group,this.character.scarf.mesh,this.character.rope.mesh,this.bestGate.group,this.birds.mesh),Op()}setClimber(e){this.climberData=Xe(e),this.character.setClimber(this.climberData)}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setQuality(e){this.quality=e,this.dpr=this.adaptive?Math.min(this.dpr,e.maxDpr):e.maxDpr,this.renderer.setPixelRatio(this.dpr)}get pixelRatio(){return this.dpr}reset(){for(let e of this.pieces.values())this.scene.remove(e.group),e.dispose();this.pieces.clear(),this.buildQueue.length=0,this.job=null,this.obstacles.clear(),this.items.clearAnchors(),this.fx.clear(),this.death=null,this.snapCam=!0,this.trauma=0,this.catchT=0,this.ropeVis=0,this.ropeAnchorId=-1,this.character.chuteOpen=0,this.character.gliderOpen=0,this.character.shieldOn=0,Mg()}buildStats={};job=null;startJob(e,t){let n=t.gen.pieces.find(t=>t.s1===e.s0);this.job={piece:e,gen:_g(e,t.path,n?.kind??null),ms:0,slices:0}}pump(e,t){let n=performance.now();for(;performance.now()-n<t;){if(!this.job){let t=this.buildQueue.shift();if(!t)return;this.startJob(t,e)}let t=this.job,n=performance.now(),r=t.gen.next();t.ms+=performance.now()-n,t.slices++,r.done&&(this.job=null,this.attachPiece(t.piece,r.value,t.ms,t.slices,e))}}attachPiece(e,t,n,r,i){let a=this.buildStats[e.kind]??={n:0,total:0,max:0,tris:0};a.n++,a.total+=n,a.max=Math.max(a.max,n/Math.max(1,r)),a.tris+=t.group.children.reduce((e,t)=>e+(t.geometry?.attributes.position.count??0)/3,0),this.pieces.set(e.id,t),this.scene.add(t.group);for(let t of e.obstacles)this.obstacles.add(t,e.zone,i.gen.spanAt(t.s))}flushBuilds(e){this.pump(e,1e9)}onEvent(e,t){let n=t.player;switch(e.t){case`piece`:this.buildQueue.push(e.piece);break;case`unpiece`:{let t=this.buildQueue.indexOf(e.piece);t>=0&&this.buildQueue.splice(t,1),this.job?.piece===e.piece&&(this.job=null);let n=this.pieces.get(e.piece.id);n&&(this.scene.remove(n.group),n.dispose(),this.pieces.delete(e.piece.id));for(let t of e.piece.obstacles)this.obstacles.remove(t.id);break}case`leap`:this.fovKick+=e.mode===`climb`||e.mode===`shaft`?3.2:2.2,this.footDust(t,10,1.6);break;case`land`:this.footDust(t,e.hard?18:10,e.hard?3:2),this.trauma=Math.min(1,this.trauma+(e.hard?.16:.05)),this.landT=1;break;case`step`:this.stepFx(t,e.mode,e.foot);break;case`crystal`:this.items.itemPos(t.path,e.item,t.gen.spanAt(e.item.s),this.time,this.body,$),this.fx.emit(`crystal`,$,{count:7,spread:.12,speed:3.4,color:dh,color2:16777215,size:.34,sizeEnd:.05,life:.45,drag:4});break;case`gem`:this.items.itemPos(t.path,e.item,t.gen.spanAt(e.item.s),this.time,this.body,$),this.fx.emit(`crystal`,$,{count:26,spread:.2,speed:6,color:ph,color2:16777215,size:.5,sizeEnd:.05,life:.7,drag:3}),this.trauma=Math.min(1,this.trauma+.1);break;case`power`:this.fx.emit(`crystal`,this.body,{count:34,spread:.3,speed:7,color:gh[e.kind],color2:16777215,size:.55,sizeEnd:.05,life:.8,drag:2.5}),this.fovKick+=4;break;case`shield`:this.trauma=Math.min(1,this.trauma+.45),this.fx.emit(`crystal`,this.body,{count:40,spread:.6,speed:9,color:gh.shield,color2:16777215,size:.5,sizeEnd:.05,life:.7}),t.path.frame(n.s,Q),this.obstacles.smash(e.ob.id,$.set(Q.fx,Q.fy,Q.fz)),this.debris(l_.copy(this.body),22,1.4);break;case`bump`:this.trauma=Math.min(1,this.trauma+.28),this.debris(l_.copy(this.body),8,.8);break;case`clip`:{let n=t.gen.spanAt(e.anchor.s);this.items.anchorPos(t.path,e.anchor,n,$),this.ropeAnchor.copy($),this.ropeAnchorId=e.anchor.id,this.fx.emit(`crystal`,$,{count:22,spread:.15,speed:4.5,color:mh,color2:16777215,size:.36,sizeEnd:.04,life:.55,drag:3.5}),this.fx.emit(`spark`,$,{count:10,spread:.05,speed:3,color:16777215,color2:mh,size:.12,life:.3,gravity:6}),this.fovKick+=1.5;break}case`caught`:this.catchT=1,this.catchDropV=e.mode===`climb`||e.mode===`shaft`?-7:-3,this.trauma=Math.min(1,this.trauma+.65),this.debris(l_.copy(this.body),16,1),this.fx.emit(`dust`,this.body,{count:14,spread:.5,speed:2.2,color:this.pal.rockLight,color2:this.pal.fog,size:.8,sizeEnd:1.8,life:.9,drag:2.5});break;case`near`:this.fovKick+=3.5;for(let e=0;e<6;e++)this.speedLine(t,1.6);break;case`crash`:this.startDeath(t,e.cause,e.mode);break;case`summit`:this.celebrate=2.4,this.confetti(this.body,90)}}celebrateNow(){this.confetti(this.body,120)}stepFx(e,t,n){if(this.quality.particles<=0)return;let r=this.pal;t===`run`?(this.character.footWorld(n===0,$),p_.copy(r.ground).lerp(r.fog,.55).lerp(r.rockLight,.25),this.fx.emit(`dust`,$,{count:2,spread:.1,speed:.7,dir:c_.set(0,1,0),color:p_,color2:r.fog,size:.26,sizeEnd:.62,life:.5,drag:3,alpha:.36}),r.snowCover>.5&&this.fx.emit(`dust`,$,{count:2,spread:.08,speed:1.2,color:r.snow,size:.18,sizeEnd:.3,life:.5,gravity:4})):(t===`climb`||t===`shaft`)&&(this.character.handWorld(n===0,$),this.fx.emit(`debris`,$,{count:3,spread:.08,speed:1.2,dir:c_.set(0,-1,0),color:r.rock,color2:r.rockLight,size:.08,life:.9,gravity:14,drag:.5}),this.fx.emit(`dust`,$,{count:2,spread:.06,speed:.4,color:16184042,size:.22,sizeEnd:.55,life:.6,drag:2,alpha:.5}))}footDust(e,t,n){if(this.quality.particles<=0)return;let r=e.player,i=e.span;$m(e.path,r.s,r.x,0,i.tube??0,h_);let a=this.pal;r.mode===`climb`||r.mode===`shaft`?this.fx.emit(`debris`,this.body,{count:t,spread:.3,speed:n,color:a.rock,color2:a.rockLight,size:.12,life:1,gravity:14}):r.mode===`slide`?this.fx.emit(`spark`,h_.pos,{count:t,spread:.3,speed:n*2,dir:h_.up,cone:2,color:15136511,color2:a.accent,size:.12,life:.5,gravity:6}):(p_.copy(a.ground).lerp(a.fog,.5).lerp(a.rockLight,.3),this.fx.emit(`dust`,h_.pos,{count:t,spread:.35,speed:n,dir:h_.up,cone:2.5,color:p_,color2:a.fog,size:.45,sizeEnd:1.15,life:.65,drag:3.2,alpha:.48}))}debris(e,t,n){this.fx.emit(`debris`,e,{count:t,spread:.4,speed:7,color:this.pal.rock,color2:this.pal.rockLight,size:.2*n,life:1.2,gravity:18,drag:.6}),this.fx.emit(`dust`,e,{count:Math.ceil(t*.6),spread:.5,speed:2.5,color:this.pal.rockLight,color2:this.pal.fog,size:.9*n,sizeEnd:2.2*n,life:1,drag:2.5})}confetti(e,t){let n=[16738859,16763213,4191969,16731533,9202943,16777215];for(let r=0;r<n.length;r++)this.fx.emit(`confetti`,$.copy(e).add(c_.set(0,1.4,0)),{count:Math.ceil(t/n.length),spread:.4,speed:9,dir:l_.set(0,1,0),cone:1.4,color:n[r],size:.2,life:2.2,gravity:7,drag:1.4})}speedLine(e,t){let n=this.camera.position,r=c_.copy(this.tgtP).sub(n).normalize(),i=Math.random()*Math.PI*2,a=2.2+Math.random()*2.5,o=l_.crossVectors(r,this.camUp).normalize(),s=new B().crossVectors(o,r);$.copy(n).addScaledVector(r,7+Math.random()*6).addScaledVector(o,Math.cos(i)*a).addScaledVector(s,Math.sin(i)*a*1.4),this.fx.emit(`speed`,$,{count:1,spread:0,speed:40*t,dir:r.clone().negate(),cone:0,color:16777215,size:.09,life:.3,drag:0})}startDeath(e,t,n){let r=e.player;e.path.frame(r.s,Q);let i=$.set(Q.fx,Q.fy,Q.fz),a=c_.set(Q.ux,Q.uy,Q.uz),o=t===`gap`||n===`climb`||n===`glide`,s=new B;o?t===`gap`?s.copy(i).multiplyScalar(4).addScaledVector(a,1.5):s.copy(a).multiplyScalar(4.5).add(l_.set(0,2,0)):s.copy(i).multiplyScalar(-3.5).addScaledVector(a,7),(n===`slide`||n===`shaft`)&&s.copy(i).multiplyScalar(n===`slide`?6:-2).addScaledVector(m_,n===`shaft`?-1:3),this.death={pos:this.charPos.clone(),vel:s,spin:new B(Math.random()*6-3,Math.random()*4-2,Math.random()*8-4),rot:this.charQuat.clone(),kind:o&&n!==`shaft`?`fall`:`tumble`,t:0,settled:!1,camAnchor:this.camP.clone()},this.trauma=1,this.debris(l_.copy(this.body),26,1.3)}revived(){this.death=null,this.character.chuteOpen=0,this.fovKick+=6}updatePalette(e,t){let n=e.player,r=e.gen.pieceAt(n.s),i=wh(r?.zone??0),a=i,o=0;r&&r.kind===`glide`&&r.zone>0&&(i=wh(r.zone-1),a=wh(r.zone),o=O(r.s0+20,r.s1-30,n.s)),Eh(i,a,o,this.pal);let s=0;if(r&&r.kind===`cave`){let e=r.variant===`shaft`?r.s1+30:r.marks.exit;s=O(r.marks.mouth-1,r.marks.mouth+9,n.s)*(1-O(e-5,e+2,n.s))}else r&&r.kind===`shaft`&&(s=1-O(r.marks.climbEnd-7,r.marks.climbEnd+3,n.s));this.cave=this.snapCam?s:this.cave+(s-this.cave)*A(4,t)}frame(e,t,n,r){this.time+=r;let i=this.time;this.pump(t,n===`home`?6:3),this.updatePalette(t,r);let a=this.pal,o=this.cave,s=t.player,c=t.span.tube??0;p_.copy(a.rockDark).multiplyScalar(.12),this.fog.color.copy(a.fog).lerp(p_,o),this.fog.near=D(80,6,o),this.fog.far=D(700,80,o),this.hemi.color.copy(a.hemiSky),this.hemi.groundColor.copy(a.hemiGround),this.hemi.intensity=a.hemiIntensity*(1-o*.4),this.key.color.copy(a.sun).lerp(a.hemiSky,.3+o*.4),this.key.intensity=a.sunIntensity*(1-o*.5),this.rim.color.copy(a.sunGlow),this.rim.intensity=a.sunIntensity*.75*(1-o),this.lamp.intensity=o*30,t.path.frame(s.s,Q);let l=s.mode,u=l===`shaft`||l===`climb`?O(.42,1.25,Q.pitch):0;this.catchT>0?(this.catchT=Math.max(0,this.catchT-r/1.1),this.catchDropV+=(-70*this.catchDrop-7*this.catchDropV)*r,this.catchDrop+=this.catchDropV*r):(this.catchDrop+=(0-this.catchDrop)*A(8,r),this.catchDropV=0);let d=s.h+(l===`slide`?.04:0);$m(t.path,s.s,s.x,d,c,h_);let f=$.copy(h_.pos);f.addScaledVector(h_.up,.3*u),u>.5?f.addScaledVector(h_.fwd,this.catchDrop*.6):f.addScaledVector(h_.up,Math.min(0,this.catchDrop)*.1),u_.makeBasis(c_.copy(h_.right).negate(),h_.up,h_.fwd),d_.setFromRotationMatrix(u_),u_.makeBasis(c_.copy(h_.right).negate(),h_.fwd,l_.copy(h_.up).negate()),f_.setFromRotationMatrix(u_),d_.slerp(f_,u);let p=T(-s.vx/8,-1,1);this.lean+=(p-this.lean)*A(10,r),t.path.frame(s.s+6,o_);let m=o_.yaw-Q.yaw;m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2),this.curve+=(T(m*4,-1,1)-this.curve)*A(4,r);let h=this.lean*(l===`glide`?.35:l===`slide`?.22:.14);d_.multiply(new hi().setFromAxisAngle(new B(0,0,1),h)),this.death?this.updateDeath(r,t):(this.charPos.copy(f),this.charQuat.copy(d_)),this.character.group.position.copy(this.charPos),this.character.group.quaternion.copy(this.charQuat),this.body.set(0,l===`slide`?.6:.88,0).applyQuaternion(this.charQuat).add(this.charPos),this.celebrate>0&&(this.celebrate-=r),this.landT=Math.max(0,this.landT-r*5);let g={mode:l,air:s.air,vh:s.vh,phase:s.s/Et[l]*Math.PI,speed:s.speed,lean:this.lean,idle:n===`home`||!s.started,alive:s.alive,falling:!!this.death&&this.death.kind===`fall`,chute:!!this.death&&this.death.kind===`fall`&&this.death.t>.42,dazed:!!this.death&&this.death.settled,celebrate:n===`home`?0:this.celebrate,time:i,curve:this.curve,caught:+(s.caught>0),land:this.landT,boost:T(s.boost/8,0,1)};this.character.animate(r,g),this.character.shieldOn+=((s.shield||s.invuln>.3&&s.alive?s.shield?1:.4+.4*Math.sin(i*30):0)-this.character.shieldOn)*A(8,r),this.character.lamp.visible=o>.2,this.character.group.updateMatrixWorld(!0);let _=this.character.rimUniforms;_.uRim.value.copy(a.sunGlow).lerp(a.hemiSky,.3),_.uRimAmt.value=.42+o*.2;let v=c_.copy(h_.fwd).multiplyScalar(s.alive&&s.started?s.speed+s.boost:0);this.death&&v.copy(this.death.vel);let y=l_.copy(v).multiplyScalar(-1.1).add(new B(Math.sin(i*.7)*3+2,1.5,Math.cos(i*.5)*2)),b=new B(1,0,0).applyQuaternion(this.charQuat),x=new B(0,0,-1).applyQuaternion(this.charQuat);this.snapCam&&this.character.resetScarf(x),this.character.updateScarf(r,y,b,x,i),this.updateCamera(r,t,n);let S=s.mode===`climb`||s.mode===`shaft`,C=!!s.anchor&&(!S||s.anchor.pieceId===t.gen.pieceAt(s.s)?.id),w=s.alive&&n!==`home`&&!!s.anchor&&s.mode!==`glide`&&s.mode!==`slide`&&(s.caught>0||s.roped&&C);s.anchor&&s.anchor.id!==this.ropeAnchorId&&(this.items.anchorPos(t.path,s.anchor,t.gen.spanAt(s.anchor.s),this.ropeAnchor),this.ropeAnchorId=s.anchor.id);let E=s.caught>0||S||!s.anchor?1:1-O(26,40,Math.abs(s.s-s.anchor.s)),k=w?E:0;this.ropeVis+=(k-this.ropeVis)*A(k>this.ropeVis?10:3,r),this.character.rope.visible=this.ropeVis,this.ropeVis>.02?(this.character.harnessWorld($),this.character.rope.update(r,$,this.ropeAnchor,+(s.caught>0),this.camera.position)):this.character.rope.update(r,$,this.ropeAnchor,0,this.camera.position);for(let e of this.pieces.values()){let n=e.piece;if(!(n.s1<s.s-30||n.s0>s.s+220)){for(let n of e.glows){if(n.s<s.s-20||n.s>s.s+200)continue;$m(t.path,n.s,n.x,n.h,n.tube,__,o_);let e=n.flicker>0?1-n.flicker*.25*(.5+.5*Math.sin(i*13+n.s)*Math.sin(i*7.3+n.x)):1;this.fx.glow(__.pos,n.size,n.color,(.55+o*.35)*e)}if(e.falls)for(let n of e.falls)Math.abs(n.s-s.s)>120||Math.random()>r*14*this.quality.particles||($m(t.path,n.s,n.x+(Math.random()-.5)*2,n.h+.4,0,__,o_),this.fx.emit(`dust`,__.pos,{count:1,spread:.5,speed:1.4,dir:__.up,cone:1.5,color:15924223,color2:a.fog,size:.9,sizeEnd:2.4,life:1.4,drag:1.6,alpha:.42}));e.fire&&n.s0<=s.s+60&&($m(t.path,e.fire.s,e.fire.x,e.fire.h,0,__,o_),Math.random()<r*26&&this.fx.emit(`ember`,__.pos,{count:1,spread:.25,speed:1.4,dir:c_.set(0,1,0),cone:.3,color:16757575,color2:16734751,size:.13,life:1.4,gravity:-1.2,drag:.6}),Math.random()<r*18&&this.fx.emit(`smoke`,__.pos.add(c_.set(0,.6,0)),{count:1,spread:.15,speed:.7,dir:c_.set(.2,1,0),cone:.2,color:16754784,color2:16765600,size:.5,sizeEnd:.05,life:.6,gravity:-2}))}}if(this.items.update(t.path,t.gen.pieces,e=>t.gen.spanAt(e),s.s,i,this.body,this.fx,this.quality.particles),this.obstacles.update(r,t.path,s.s,i,e=>t.obX(e)),this.hazardFx(t,r),(n===`play`||n===`dead`)&&this.bestGate.update(r,t.path,s.s,0,i,this.fx),this.weather(t,r,n),s.alive&&s.started&&n===`play`&&this.quality.particles>0){if(l===`slide`&&!s.air)for(this.sprayAcc+=r*26;this.sprayAcc>1;)--this.sprayAcc,$m(t.path,s.s-.2,s.x+(Math.random()-.5)*.6,.05,c,__),this.fx.emit(`spark`,__.pos,{count:1,spread:.12,speed:3.2,dir:c_.copy(__.up).addScaledVector(__.fwd,-1.2),cone:.8,color:15924223,color2:a.accent,size:.1,life:.45,gravity:5,drag:1.4});for(this.trailAcc+=r*10;this.trailAcc>1;)--this.trailAcc,this.character.neckWorld($),this.fx.emit(`mote`,$,{count:1,spread:.12,speed:.4,color:this.climberData.trail,size:.1,sizeEnd:.02,life:.6,drag:2});let e=s.speed+s.boost;(e>20||l===`glide`||l===`slide`)&&Math.random()<r*(l===`glide`?18:l===`slide`?14:(e-19)*2.2)&&this.speedLine(t,1)}{let e=t.gen.pieceAt(s.s)?.zone??0,n=e===0||e===1||e===2||e===5;p_.copy(a.rockDark).lerp(a.fog,.35),this.birds.update(r,this.camera.position,$.set(0,0,-1).applyQuaternion(this.camera.quaternion),n&&o<.2,p_,i)}this.sky.update(a,this.camera.position,i,o,0,this.dpr),this.backdrop.update(a,this.camera.position,i,o,this.sky.sunDir),this.key.position.copy(this.charPos).add($.set(-.85,.75,.45).applyQuaternion(this.camera.quaternion).multiplyScalar(40)),this.key.target.position.copy(this.charPos),this.rim.position.copy(this.charPos).addScaledVector(this.sky.sunDir,40),this.rim.target.position.copy(this.charPos),this.lamp.position.copy(this.charPos).add($.set(0,2,2.4).applyQuaternion(this.charQuat));let j=Ep;j.uSunDir.value.copy(this.sky.sunDir),j.uSunColor.value.copy(a.sun).multiplyScalar(a.sunIntensity*.42*(1-o*.92)),j.uSky.value.copy(a.hemiSky).multiplyScalar(a.hemiIntensity*.55*(1-o*.75)),j.uGround.value.copy(a.hemiGround).multiplyScalar(a.hemiIntensity*.5*(1-o*.6)),j.uRim.value.copy(a.sunGlow).multiplyScalar(1-o*.8),j.uLampPos.value.copy(this.lamp.position),j.uLamp.value=o*1.15,j.uGlow.value=1.15+o*.9,j.uTime.value=i,Fh.uniforms.uTime.value=i,Fh.uniforms.uTint.value.copy(a.horizon).lerp(new H(14218495),.6),this.fx.setView(this.renderer.domElement.height,this.camera.fov,this.fog.color,this.fog.near,this.fog.far),this.fx.update(r),this.renderer.render(this.scene,this.camera)}hazardFx(e,t){let n=e.player;this.obstacles.forEach((r,i)=>{if(!i.visible)return;let a=r.s-n.s;if(!(a<-10||a>120)){if((r.kind===`rockfall`||r.kind===`roller`||r.kind===`drip`)&&r.state===1){if($.setFromMatrixPosition(i.matrix),Math.random()<t*24&&this.fx.emit(`dust`,$,{count:1,spread:.5,speed:1,color:r.kind===`drip`?15267583:this.pal.rockLight,size:.8,sizeEnd:1.8,life:.9,drag:2}),Math.random()<t*12&&this.fx.emit(`debris`,$,{count:1,spread:.6,speed:2,color:r.kind===`drip`?14217471:this.pal.rock,size:.14,life:1,gravity:10}),a>4&&a<60&&Math.random()<t*20){let t=e.gen.spanAt(n.s+6);$m(e.path,n.s+Math.min(a,14),r.x,.1,t.tube??0,__),this.fx.glow(__.pos,1.6,new H(16738859),.5)}}else if(r.kind===`eagle`&&r.state===1)$.setFromMatrixPosition(i.matrix),Math.random()<t*10&&this.fx.emit(`dust`,$,{count:1,spread:.3,speed:.6,color:16052198,size:.3,sizeEnd:.05,life:.5,drag:2});else if(r.kind===`slab`&&a<70&&a>0&&Math.random()<t*3){let t=e.gen.spanAt(r.s);$m(e.path,r.s+(Math.random()-.5)*2.5,r.x+(Math.random()-.5)*r.w*1.6,.1,t.tube??0,__),this.fx.emit(`star`,__.pos,{count:1,speed:.1,color:16777215,color2:12576511,size:.25,sizeEnd:.02,life:.7,drag:1})}}})}weather(e,t,n){if(this.quality.particles<=0)return;let r=_t(e.gen.pieceAt(e.player.s)?.zone??0),i=this.camera.position,a=l_.set(0,0,-1).applyQuaternion(this.camera.quaternion),o=0,s=this.cave>.5?`cave`:r.weather;switch(s){case`pollen`:case`dust`:case`motes`:o=14;break;case`snow`:o=60;break;case`stars`:o=30;break;case`wind`:o=22;break;case`cosmic`:o=20;break;case`cave`:o=16}for(this.weatherAcc+=t*o*this.quality.particles*(n===`home`?.7:1);this.weatherAcc>1;){--this.weatherAcc;let e=4+Math.random()*26;switch($.copy(i).addScaledVector(a,e).add(c_.set((Math.random()-.5)*e*1.3,(Math.random()-.4)*e*1.2,(Math.random()-.5)*e*1.3)),s){case`pollen`:this.fx.emit(`mote`,$,{count:1,speed:.3,color:16773560,size:.09,life:3.2,drag:.2,gravity:-.05});break;case`dust`:this.fx.emit(`dust`,$,{count:1,speed:1.2,dir:c_.set(1,.1,0),cone:.4,color:this.pal.groundDark,color2:this.pal.fog,size:.4,sizeEnd:1.2,life:2.6,drag:.1});break;case`motes`:this.fx.emit(`mote`,$,{count:1,speed:.25,color:this.pal.accent,color2:16777215,size:.12,life:3,drag:.2,gravity:-.15});break;case`snow`:case`stars`:this.fx.emit(`dust`,$,{count:1,speed:1.1,dir:c_.set(.6,-1,.2),cone:.4,color:16777215,size:.11,life:4,drag:.15,gravity:.7});break;case`wind`:this.fx.emit(`speed`,$,{count:1,speed:26,dir:c_.set(1,.05,.3),cone:.05,color:16777215,size:.06,life:.45,drag:0});break;case`cosmic`:this.fx.emit(`star`,$,{count:1,speed:.2,color:this.pal.accent,color2:16777215,size:.25,sizeEnd:.02,life:2,drag:.2});break;case`cave`:this.fx.emit(`mote`,$,{count:1,speed:.15,color:13627135,size:.07,life:2.5,drag:.3})}}}updateDeath(e,t){let n=this.death;if(n.t+=e,n.kind===`fall`){n.t<.42?n.vel.y-=18*e:(n.vel.multiplyScalar(Math.exp(-3*e)),n.vel.y+=(-2.2-n.vel.y)*A(3,e),n.vel.x+=Math.sin(n.t*1.3)*.6*e),n.pos.addScaledVector(n.vel,e);let r=n.t<.42?1:Math.exp(-(n.t-.42)*5);d_.setFromAxisAngle($.copy(n.spin).normalize(),n.spin.length()*e*r),n.rot.premultiply(d_),n.t>.42&&(t.path.frame(t.player.s,o_),u_.lookAt($.set(0,0,0),c_.set(-o_.fx,0,-o_.fz).normalize(),m_),f_.setFromRotationMatrix(u_),n.rot.slerp(f_,A(3,e)))}else if(n.settled)t.path.frame(t.player.s,o_),u_.lookAt($.set(0,0,0),c_.set(-o_.fx,0,-o_.fz).normalize(),m_),f_.setFromRotationMatrix(u_),n.rot.slerp(f_,A(8,e)),Math.random()<e*4&&(this.character.headWorld($),this.fx.emit(`star`,$.add(c_.set(0,.25,0)),{count:1,spread:.3,speed:.6,color:16765803,color2:16777215,size:.28,sizeEnd:.05,life:.9,drag:1,gravity:-.5}));else{n.vel.y-=22*e,n.pos.addScaledVector(n.vel,e),d_.setFromAxisAngle($.copy(n.spin).normalize(),n.spin.length()*e),n.rot.premultiply(d_);let r=t.span;$m(t.path,t.player.s,t.player.x,0,r.tube??0,__);let i=__.pos.y;n.pos.y<=i&&n.vel.y<0&&t.player.mode!==`shaft`&&(n.pos.y=i,n.t>.5||Math.abs(n.vel.y)<3?(n.settled=!0,this.trauma=Math.min(1,this.trauma+.3),this.fx.emit(`dust`,n.pos,{count:14,spread:.6,speed:2.4,color:this.pal.groundDark,color2:this.pal.ground,size:.7,sizeEnd:1.6,life:.9,drag:2.8})):(n.vel.y*=-.35,n.vel.x*=.5,n.vel.z*=.5))}this.charPos.copy(n.pos),this.charQuat.copy(n.rot)}shot(e,t,n){let r=t.player,i=t.path,a=t.span.tube??0;switch(n.up.set(0,1,0),e){case`home`:if(i.frame(r.s,Q),this.homeClose){let e=.45+Math.sin(this.homeT*.4)*.22;n.pos.set(Q.px,Q.py,Q.pz).addScaledVector(l_.set(Q.rx,Q.ry,Q.rz),Math.sin(e)*3.6).addScaledVector(l_.set(Q.fx,Q.fy,Q.fz),Math.cos(e)*3.6).add(l_.set(0,1.25,0)),n.target.set(Q.px,Q.py+.95,Q.pz),n.fov=50}else{let e=Math.sin(this.homeT*.11)*.55+.35;n.pos.set(Q.px,Q.py,Q.pz).addScaledVector(l_.set(Q.rx,Q.ry,Q.rz),Math.sin(e)*5.2).addScaledVector(l_.set(Q.fx,Q.fy,Q.fz),-Math.cos(e)*5.6).add(l_.set(0,2.2,0)),i.frame(r.s+7,o_),n.target.set(o_.px,o_.py+1.55,o_.pz).lerp(new B(Q.px,Q.py+1.1,Q.pz),.6),n.fov=58}return n;case`slide`:{let e=y_.slide??[5.6,.92,1.95,9,.85,1.45,.88,72];return $m(i,r.s-e[0],r.x*e[1],e[2],a,g_),n.pos.copy(g_.pos),$m(i,r.s+e[3],r.x*e[4],e[5],a,__),n.target.copy(__.pos),n.up.copy(m_).lerp(g_.up,e[6]).normalize(),n.fov=e[7],n}case`shaft`:{let e=y_.shaft??[1.6,2,2.5,2.8,80];i.frame(r.s-e[0],Q);let t=r.x/a,o=Q.rx*Math.sin(t)-Q.ux*Math.cos(t),s=Q.ry*Math.sin(t)-Q.uy*Math.cos(t),c=Q.rz*Math.sin(t)-Q.uz*Math.cos(t);n.pos.set(Q.px+Q.ux*a-o*e[1],Q.py+Q.uy*a-s*e[1],Q.pz+Q.uz*a-c*e[1]),i.frame(r.s+e[2],o_),n.target.set(o_.px+o_.ux*a+o*e[3],o_.py+o_.uy*a+s*e[3],o_.pz+o_.uz*a+c*e[3]),n.up.set(-o,-s,-c);let l=O(.6,1.3,Q.pitch);return n.up.lerp(m_,1-l).normalize(),n.fov=e[4],n}default:{let a=e===`climb`?{back:1.8,up:8,ahead:3.9,lookUp:0,follow:.85,look:.85,fov:80}:e===`glide`?{back:7.6,up:3.4,ahead:12,lookUp:.8,follow:.6,look:.5,fov:66}:{back:5.8,up:2.75,ahead:8.5,lookUp:1.15,follow:.55,look:.3,fov:62},o=y_[e];o&&([a.back,a.up,a.ahead,a.lookUp,a.follow,a.look,a.fov]=o);let s=Math.max(0,r.h)*.35;i.frame(r.s-a.back,Q);let c=l_.set(Q.px+Q.rx*r.x*a.follow+Q.ux*(a.up+s),Q.py+Q.ry*r.x*a.follow+Q.uy*(a.up+s),Q.pz+Q.rz*r.x*a.follow+Q.uz*(a.up+s)),l=Q.pitch;i.frame(r.s,o_);let u=T((l-o_.pitch)/.5,0,1);if(n.pos.copy(c),u>0){let e=new B(o_.px-o_.fx*a.back+o_.rx*r.x*a.follow+o_.ux*(a.up+s),o_.py-o_.fy*a.back+o_.ry*r.x*a.follow+o_.uy*(a.up+s),o_.pz-o_.fz*a.back+o_.rz*r.x*a.follow+o_.uz*(a.up+s));n.pos.lerp(e,u)}if(i.frame(r.s+a.ahead,Q),n.target.set(Q.px+Q.rx*r.x*a.look+Q.ux*(a.lookUp+s),Q.py+Q.ry*r.x*a.look+Q.uy*(a.lookUp+s),Q.pz+Q.rz*r.x*a.look+Q.uz*(a.lookUp+s)),n.fov=a.fov+T((r.speed+r.boost-13)/14,0,1)*7,e===`climb`){let e=t.gen.pieceAt(r.s);if(e&&e.kind===`wall`){i.frame(e.marks.climbStart,s_);let t=s_.py+2.2;n.pos.y<t&&(n.target.y+=(t-n.pos.y)*.5,n.pos.y=t)}}let d=O(.5,1.2,o_.pitch);return d>0&&n.up.set(D(0,o_.ux,d),D(1,o_.uy,d),D(0,o_.uz,d)).normalize(),n}}}updateCamera(e,t,n){let r=t.player,i=this.camera,a=n===`home`||!r.started?`home`:r.mode;a!==this.camMode&&(this.camPrev=this.camMode,this.camMode=a,this.camBlend=0),this.snapCam&&(this.camBlend=1),a===`home`&&(this.homeT+=e);let o=this.camMode===`shaft`||this.camPrev===`shaft`?1.6:this.camMode===`slide`||this.camPrev===`slide`?2.2:2.8;this.camBlend=Math.min(1,this.camBlend+e*o);let s=this.shot(this.camMode,t,this.shotA),c=s.pos,l=s.target,u=s.up,d=s.fov;if(this.camBlend<1&&this.camPrev!==this.camMode){let e=this.shot(this.camPrev,t,this.shotB),n=O(0,1,this.camBlend);c=$.copy(e.pos).lerp(s.pos,n),l=c_.copy(e.target).lerp(s.target,n),u=new B().copy(e.up).lerp(s.up,n).normalize(),d=D(e.fov,s.fov,n)}if(this.death){let e=this.death;c=$.copy(e.camAnchor),e.kind===`fall`&&(c.y=Math.min(e.camAnchor.y,e.pos.y+6)),l=c_.copy(e.pos).add(l_.set(0,.8,0)),d=58}if(this.snapCam)this.camP.copy(c),this.tgtP.copy(l),this.camUp.copy(u),this.camV.set(0,0,0),this.tgtV.set(0,0,0),this.snapCam=!1;else{let t=n===`home`?this.homeClose?4.5:2.2:this.death?3:this.camMode===`shaft`?7:9;v_(this.camP,this.camV,c,t,e),v_(this.tgtP,this.tgtV,l,t*1.4,e),this.camUp.lerp(u,A(this.camMode===`shaft`?5:3,e)).normalize()}this.trauma=Math.max(0,this.trauma-e*1.7);let f=this.trauma*this.trauma;if(i.position.copy(this.camP),f>0){let e=this.time*37;i.position.x+=(Math.sin(e*1.1)+Math.sin(e*2.3)*.5)*f*.3,i.position.y+=(Math.sin(e*1.7+1)+Math.sin(e*3.1)*.5)*f*.3,i.position.z+=Math.sin(e*1.3+2)*f*.24}i.up.copy(this.camUp),i.lookAt(this.tgtP);let p=n===`play`&&r.alive&&r.mode!==`shaft`?-this.lean*(r.mode===`glide`?.06:.03):0;this.roll+=(p-this.roll)*A(6,e),i.rotateZ(this.roll+(f>0?Math.sin(this.time*41)*f*.03:0)),this.fovKick*=Math.exp(-e*4),i.fov+=(d+this.fovKick-i.fov)*A(5,e),i.updateProjectionMatrix()}snapCamera(){this.snapCam=!0}adapt(e){if(!this.adaptive)return;this.frameEma+=(e-this.frameEma)*.05,this.frameEma>19.5?(this.slowFor+=e,this.fastFor=0):this.frameEma<13?(this.fastFor+=e,this.slowFor=0):(this.slowFor=0,this.fastFor=0);let t=Math.min(window.devicePixelRatio||1,this.quality.maxDpr);this.slowFor>1200&&this.dpr>.8?(this.dpr=Math.max(.8,this.dpr-.15),this.renderer.setPixelRatio(this.dpr),this.slowFor=0,this.frameEma=16):this.fastFor>5e3&&this.dpr<t&&(this.dpr=Math.min(t,this.dpr+.1),this.renderer.setPixelRatio(this.dpr),this.fastFor=0)}project(e,t,n){return $.copy(e).project(this.camera),{x:($.x*.5+.5)*t,y:(-$.y*.5+.5)*n,behind:$.z>1}}},S_=se(`Reminders`),C_={available:Ie,async status(){if(!Ie)return`denied`;try{return(await S_.status()).display}catch{return`denied`}},async request(){if(!Ie)return`denied`;try{return(await S_.request()).display}catch{return`denied`}},openSettings(){Ie&&S_.openSettings().catch(()=>void 0)},async schedule(e){if(!Ie)return 0;try{return(await S_.schedule({items:e})).scheduled}catch{return 0}},cancelAll(){Ie&&S_.cancelAll().catch(()=>void 0)},async pending(){if(!Ie)return[];try{return(await S_.pending()).items}catch{return[]}},onTap(e){Ie&&S_.addListener(`tap`,t=>e(t.route)).catch(()=>void 0)}},w_=1260,T_=1230,E_=1080,D_=1335,O_=100,k_=[0,1,2,3,5,7,10,14,21,30],A_={0:[`streak`,`daily`,`summit`,`mission`],1:[`streak`,`daily`,`summit`,`mission`],2:[`summit`,`stars`,`climber`,`mission`,`daily`],3:[`daily`,`summit`,`climber`],5:[`climber`,`stars`,`mission`,`summit`,`daily`],7:[`comeback`,`summit`,`daily`],10:[`daily`,`summit`,`comeback`],14:[`summit`,`comeback`,`daily`],21:[`daily`,`comeback`],30:[`comeback`,`daily`]},j_=e=>`art/world-${e<7?e:[3,4,5,6][(e-7)%4]}.jpg`,M_=e=>{let t=e<100?10:10**(String(Math.floor(e)).length-2);return`${M(Math.floor(e/t)*t)}+`},N_=e=>Math.min(100,30+(e-1)*10),P_=(e,t)=>{let n=t.filter(e=>e>=1050&&e<=1380).sort((e,t)=>e-t),r;return r=n.length>=4?Math.max(E_,Math.min(D_,n[Math.floor(n.length/2)]-20)):e.getDay()===0||e.getDay()===6?T_:w_,r+ee(qt(e))%13-6},F_=(e,t,n,r)=>{let i={},a=qt(e),o=qt(Jt(e,t)),s=qt(Jt(e,-1)),c=n.daily,l=n.settings.stats;if(t===0&&c.date===s&&c.streak>=2?i.streak={kind:`streak`,title:`Your ${c.streak}-day streak ends at midnight`,body:`Climb today's mountain to make it ${c.streak+1}: +${N_(c.streak+1)} crystals.`,picture:`art/streak.jpg`,route:`daily`}:t===1&&c.date===a&&c.streak>=2&&(i.streak={kind:`streak`,title:`Day ${c.streak+1} of your streak is up`,body:`A new mountain, the same for everyone. +${N_(c.streak+1)} crystals for your first climb.`,picture:`art/streak.jpg`,route:`daily`}),t!==0||c.date!==a){let e=t===0&&l&&r&&r.d===o&&r.n>=10&&r.p50>=25?r:null,n=[[`Today's daily climb is up`,`One mountain, the same for everyone. Set the height to beat.`],[`A new mountain is up`,`Today's daily climb is open until midnight. How high can you get?`],[`The daily climb has reset`,`New route, new crystals, and a bonus for your first climb.`]][ee(o)%3];i.daily={kind:`daily`,title:e?`${M_(e.n)} climbers took today's daily`:n[0],body:e?`Half of them reached ${M(e.p50)} m. Can you beat them?`:n[1],picture:`art/daily.jpg`,route:`daily`,live:l?{url:`${Yt}/v1/daily/${o}`,min:10,title:`{n} climbers took today's daily`,body:`Half of them reached {p50} m. Can you beat them?`}:void 0}}let u=n.maxZone,d=_t(u),f=Math.ceil(d.summitAt-n.best);f>0&&(i.summit=u===0?{kind:`summit`,title:`The first summit is ${M(f)} m away`,body:`Reach ${M(d.summitAt)} m in the ${d.name} to unlock Camp 2.`,picture:j_(0),route:`camp:0`}:{kind:`summit`,title:`You reached Camp ${u+1}: ${d.name}`,body:`Its summit is ${M(f)} m above your best. Finish World ${u+1} tonight.`,picture:j_(u),route:`camp:${u}`}),i.comeback=n.runs>0?f>0?{kind:`comeback`,title:`Your rope is still clipped at ${M(n.best)} m`,body:`The ${d.name} summit is ${M(f)} m above you. Pick up the climb.`,picture:j_(u),route:`camp:${u}`}:{kind:`comeback`,title:`${d.name} is waiting`,body:`Your camp is right where you left it. Pick up the climb.`,picture:j_(u),route:`camp:${u}`}:{kind:`comeback`,title:`The Dawn Foothills are waiting`,body:`Drag to steer, tap to leap: the first summit is 150 m up.`,picture:j_(0),route:`camp:0`};for(let e=0;e<u;e++){let t=Gt(n,e),r=t.filter(e=>!e).length;if(!r)continue;let a=_t(e),o=[t[1]?``:`collect ${a.crystalGoal} crystals there in one climb`,!t[2]||!t[0]?`reach its summit without a fall`:``].filter(Boolean).join(` and `);i.stars={kind:`stars`,title:`${r} ${r===1?`star`:`stars`} left in ${a.name}`,body:`${o[0].toUpperCase()}${o.slice(1)}.`,picture:j_(e),route:`camp:${e}`};break}let p=n.missions.find(e=>!e.done);if(p){let e=3-n.stars;i.mission={kind:`mission`,title:e===1?`One mission from ${zt(n.rank+1)}`:`${e} missions to your next rank`,body:`${Pt(p)}: +${M(p.reward)} crystals.`,picture:`art/missions.jpg`,route:`missions`}}let m=Ye.filter(e=>!n.owned.includes(e.id)).sort((e,t)=>e.price-t.price)[0];return m&&(n.crystals>=m.price?i.climber={kind:`climber`,title:`${m.name} is ready to unlock`,body:`You have ${M(n.crystals)} crystals. ${m.tagline}`,picture:`art/climber-${m.id}.jpg`,route:`climbers`}:n.crystals>=m.price*.7&&(i.climber={kind:`climber`,title:`${M(m.price-n.crystals)} crystals from ${m.name}`,body:`${m.tagline} A few more climbs.`,picture:`art/climber-${m.id}.jpg`,route:`climbers`})),i},I_=(e,t,n)=>{let r=[],i=qt(e),a=e.getHours()*60+e.getMinutes(),o=null;for(let s of k_){let c=Jt(e,s),l=P_(c,t.notify.times),u=F_(e,s,t,n);if(s===0&&(l<a+10||t.notify.lastRun===i&&!u.streak))continue;let d=(A_[s]??[`daily`]).map(e=>u[e]).find(e=>!!e&&e.kind!==o)??Object.values(u).find(e=>!!e&&e.kind!==o);d&&(o=d.kind,r.push({id:100+s,day:qt(c),minute:l,window:O_,channel:d.kind===`daily`||d.kind===`streak`?`daily`:`progress`,title:d.title,body:d.body,picture:d.picture,route:d.route,...d.live?{live:d.live}:{}}))}return r},L_=(e,t)=>Math.round((Date.parse(`${t}T12:00:00`)-Date.parse(`${e}T12:00:00`))/864e5),R_=class{save;stats=null;permission=`prompt`;statsAt=0;onStats=()=>void 0;constructor(e,t){this.save=e,C_.onTap(t)}get available(){return C_.available}get enabled(){return this.save.settings.reminders!==!1&&this.permission===`granted`}async start(){await this.refreshStats(!0),await this.replan()}async refreshStats(e=!1){if(!this.save.settings.stats)return this.stats=null,null;if(!e&&performance.now()-this.statsAt<6e5&&this.stats?.d===qt(new Date))return this.stats;this.statsAt=performance.now();let t=await nn(qt(new Date));return t&&(this.stats=t),this.onStats(this.stats),this.stats}async replan(){return C_.available?(this.permission=await C_.status(),this.enabled?C_.schedule(I_(new Date,this.save,this.stats)):(C_.cancelAll(),0)):0}async shouldOffer(){if(!C_.available||this.save.settings.reminders!==null||(this.permission=await C_.status(),this.permission!==`prompt`))return!1;let e=this.save.notify;return this.save.runs>=2&&e.asked<3&&(!e.lastAsk||L_(e.lastAsk,qt(new Date))>=3)}async choose(e){let t=this.save.notify;return e?(this.permission=await C_.status(),this.permission===`prompt`&&(this.permission=await C_.request()),this.permission===`granted`?this.save.settings.reminders=!0:(t.asked++,t.lastAsk=qt(new Date)),Wt(this.save,!0),await this.replan(),this.permission):(t.asked++,t.lastAsk=qt(new Date),this.save.settings.reminders=this.save.settings.reminders!==!0&&null,Wt(this.save,!0),await this.replan(),this.permission)}disable(){this.save.settings.reminders=!1,Wt(this.save,!0),C_.cancelAll()}openSystemSettings(){C_.openSettings()}async refreshPermission(){return this.permission=await C_.status(),this.permission}sample(){let e=new Date;return e.setHours(12,0,0,0),I_(e,{...this.save,notify:{...this.save.notify,lastRun:``}},this.stats)[0]??null}async preview(){if(await this.refreshPermission()!==`granted`)return 0;let e=this.sample();if(!e)return 0;let t={id:99,at:Date.now()+4e3,window:10,test:!0,channel:e.channel,title:e.title,body:e.body,picture:e.picture,route:e.route,...e.live?{live:e.live}:{}};return C_.schedule([t,...this.enabled?I_(new Date,this.save,this.stats):[]])}noteStart(){let e=new Date;this.save.notify.times=[...this.save.notify.times,e.getHours()*60+e.getMinutes()].slice(-24)}noteFinish(){this.save.notify.lastRun=qt(new Date)}},z_=new URLSearchParams(location.search),B_={boulder:`Ran into a boulder`,log:`Tripped on a fallen tree`,crevasse:`Lost in a crevasse`,roller:`Flattened by a rolling rock`,roof:`Hit an overhang`,slab:`No holds on the slab`,rockfall:`Hit by falling rock`,eagle:`The eagle had other plans`,icicle:`Snagged on the icicles`,stalagmite:`Wiped out on a stalagmite`,crystal:`Shattered a crystal`,hole:`Fell through the ice`,spur:`Clipped a rock spur`,drip:`Hit by falling ice`,plankgap:`Missing planks`,swinglog:`Swinging log got you`,bird:`Tangled with a bird`},V_=class{save;world;view;ui;input;notifier;phase=`home`;last=performance.now();timeScale=1;hitStop=0;slow={scale:1,t:0};daily=!1;revives=0;bestAtStart=0;passedBest=!1;missionTick=0;liveDone=[];bot=null;announced=new Set;homeCam=`home`;bonus=0;camp=0;newStars=[];frames=0;fpsAcc=0;fpsN=0;fps=0;dangerV=0;ambT=3;shotMode=!1;dripT=1;shownSteps=new Set;replayTut=!1;constructor(e,t,n,r){this.save=r,this.view=new x_(e,r.climber),this.applyQuality(r.settings.quality),S.setEnabled(r.settings.sound&&z_.get(`mute`)!==`1`),F.enabled=r.settings.haptics,this.camp=Math.min(r.camp??0,r.maxZone),this.notifier=new R_(r,e=>this.route(e)),this.ui=new gn(t,n,{play:()=>this.play(!1),daily:()=>this.play(!0),pause:()=>this.pause(),resume:()=>this.resume(),restart:()=>this.play(this.daily),home:()=>this.goHome(),revive:()=>this.doRevive(),skipRevive:()=>this.finishRun(),buyClimber:e=>this.buyClimber(e),selectClimber:e=>this.selectClimber(e),previewClimber:e=>this.view.setClimber(e),closeClimbers:()=>this.view.setClimber(this.save.climber),setSetting:(e,t)=>this.setSetting(e,t),resetProgress:()=>this.resetProgress(),openLink:e=>qe(e),sound:e=>S.play(e,{vol:e===`tick`?.5:.8,vary:.02}),cameraMode:e=>this.homeCam=e,selectCamp:e=>this.selectCamp(e),replayTutorial:()=>this.replayTutorial(),reminderState:()=>this.reminderState(),setReminders:e=>this.setReminders(e),setStats:e=>this.setStats(e),previewReminder:()=>this.notifier.preview().then(e=>e>0)}),this.input=new te(e.parentElement),this.input.onSteer=e=>this.steer(e),this.input.onLeap=()=>this.leap(),this.resize(),window.addEventListener(`resize`,()=>this.resize()),Ge({pause:()=>{this.phase===`play`&&this.pause(),S.suspend(),this.notifier.replan()},resume:()=>{S.resume(),this.notifier.refreshStats().then(()=>this.notifier.replan())},back:()=>this.back()});let i=()=>{S.unlock(),window.removeEventListener(`pointerdown`,i)};window.addEventListener(`pointerdown`,i),window.addEventListener(`pointerdown`,()=>S.resume(),{passive:!0}),z_.get(`crystals`)&&(this.save.crystals=Number(z_.get(`crystals`))),z_.get(`best`)&&(this.save.best=Number(z_.get(`best`))),z_.get(`zone`)&&(this.camp=Number(z_.get(`zone`)),this.save.maxZone=Math.max(this.save.maxZone,this.camp)),this.newWorld(!1),this.ui.showHome(this.save,this.camp),this.notifier.onStats=e=>this.ui.setDailyStats(e),z_.get(`shot`)!==`1`&&z_.get(`autoplay`)!==`1`&&this.notifier.start(),window.__game=this,z_.get(`autoplay`)===`1`&&(this.bot=new ct(.08)),requestAnimationFrame(this.loop),(z_.get(`play`)===`1`||z_.get(`daily`)===`1`)&&setTimeout(()=>this.play(z_.get(`daily`)===`1`),60);let a=z_.get(`ui`);a===`climbers`&&setTimeout(()=>this.ui.showClimbers(),80),a===`missions`&&setTimeout(()=>this.ui.showMissions(),80),a===`settings`&&setTimeout(()=>this.ui.showSettings(),80),a===`daily`&&setTimeout(()=>this.ui.showDaily(),80),a===`map`&&setTimeout(()=>this.ui.showMap(),80),z_.get(`hud`)===`0`&&(document.getElementById(`ui`).style.display=`none`),z_.get(`shot`)===`1`&&(this.view.adaptive=!1,this.view.setQuality({maxDpr:window.devicePixelRatio||1,particles:1}),this.shotMode=!0,this.ui.quiet=!0)}resize(){this.view.resize(window.innerWidth,window.innerHeight)}applyQuality(e){let t=window.devicePixelRatio||1;e===`battery`?this.view.setQuality({maxDpr:Math.min(t,1.15),particles:.5}):e===`high`?this.view.setQuality({maxDpr:Math.min(t,2.5),particles:1}):this.view.setQuality({maxDpr:Math.min(t,2),particles:1}),this.view.adaptive=e!==`high`}seedFor(e){let t=z_.get(`seed`);return t?Number(t)>>>0:e?ee(`cliffbound-daily-${_n()}`):Math.random()*4294967296>>>0}newWorld(e){let t=z_.has(`tutorial`)?z_.get(`tutorial`)===`1`:!e&&this.camp===0&&(!this.save.tutorial||this.replayTut);this.world=new Ot({seed:this.seedFor(e),tutorial:t,startZone:e?0:this.camp}),this.view.reset();for(let e of this.world.events)this.view.onEvent(e,this.world);this.world.events.length=0,this.view.flushBuilds(this.world),this.view.snapCamera(),this.announced.clear()}play(e){if(S.unlock(),(this.phase!==`home`||this.daily!==e||this.world.player.started)&&this.newWorld(e),this.daily=e,this.phase=`play`,this.revives=0,this.bestAtStart=e?this.save.daily.date===_n()?this.save.daily.best:0:this.save.best,this.passedBest=!1,this.liveDone=[],this.bonus=0,this.newStars=[],this.shownSteps.clear(),this.replayTut=!1,this.world.start(),this.bot||this.notifier.noteStart(),this.view.bestGate.reset(this.bestAtStart),this.ui.showHud(this.bestAtStart,this.world.stats.zone),this.homeCam=`home`,this.view.setClimber(this.save.climber),H_(``),We(!0),S.play(`whoosh`,{vol:.6}),F.medium(),this.world.stats.zone>0){let e=_t(this.world.stats.zone);this.ui.banner(`Camp ${this.world.stats.zone+1}`,e.name,e.subtitle)}else this.world.tutorial&&this.ui.banner(`Tutorial`,`Learn the moves`,`falls are free until the first summit`);let t=Number(z_.get(`ff`)??0);t>0&&this.fastForward(t),z_.get(`crash`)===`1`&&setTimeout(()=>this.world.debugCrash(),400)}fastForward(e){let t=this.world,n=new ct(.05),r=t.player.s+e,i=0;for(;t.player.s<r&&t.player.alive&&i++<2e5;){let e=n.think(t,1/60);e.steerTo!==null&&t.steerTo(e.steerTo),e.leap&&t.leap(),t.tutorialWait=null,t.update(1/60);for(let e of t.events)(e.t===`piece`||e.t===`unpiece`)&&this.view.onEvent(e,t);t.events.length=0}this.shotMode&&(t.player.shield=!1,t.player.magnet=0,t.player.invuln=0),this.view.flushBuilds(t),this.view.snapCamera(),this.ui.hint(null)}get steerGain(){return 6.4/Math.max(240,window.innerWidth*.5)}steer(e){this.phase===`play`&&this.world.steer(e*this.steerGain)}leap(){this.phase===`play`&&this.world.leap()}pause(){this.phase===`play`&&(this.phase=`paused`,this.ui.showPause(this.save),H_(`dim`),S.play(`back`,{vol:.6}),We(!1))}resume(){this.phase===`paused`&&(this.phase=`play`,this.ui.closeOverlay(),H_(``),S.play(`tap`,{vol:.6}),We(!0),this.last=performance.now())}goHome(){let e=this.phase===`results`;this.phase=`home`,this.homeCam=`home`,this.newWorld(!1),this.daily=!1,this.ui.closeOverlay(),this.ui.showHome(this.save,this.camp),H_(``),We(!1),S.play(`back`,{vol:.7}),e&&this.maybeOfferReminders()}async maybeOfferReminders(){if(this.bot||this.shotMode||!await this.notifier.shouldOffer()||this.phase!==`home`||this.ui.hasOverlay)return;let e=this.notifier.sample();e&&this.ui.offerReminders(e,e=>void this.notifier.choose(e))}route(e){if(this.phase!==`play`&&this.phase!==`paused`&&this.phase!==`dying`&&this.phase!==`revive`){if(this.phase===`results`&&this.goHome(),this.ui.hasOverlay&&(this.ui.closeOverlay(),this.ui.showHome(this.save,this.camp),this.view.setClimber(this.save.climber),this.homeCam=`home`),e===`daily`)this.ui.showDaily();else if(e===`climbers`)this.ui.showClimbers();else if(e===`missions`)this.ui.showMissions();else if(e.startsWith(`camp:`)){let t=Math.max(0,Math.min(Number(e.slice(5))||0,this.save.maxZone));t!==this.camp&&this.selectCamp(t),this.ui.showHome(this.save,this.camp)}}}reminderState(){let e=this.notifier;return e.available?e.enabled?`on`:this.save.settings.reminders===!0&&e.permission===`denied`?`blocked`:`off`:`none`}async setReminders(e){return e?await this.notifier.refreshPermission()===`denied`?(this.save.settings.reminders=!0,Wt(this.save,!0),this.notifier.openSystemSettings(),`blocked`):await this.notifier.choose(!0)===`granted`?`on`:`off`:(this.notifier.disable(),`off`)}setStats(e){this.save.settings.stats=e,Wt(this.save),this.notifier.refreshStats(!0).then(()=>this.notifier.replan())}selectCamp(e){e>this.save.maxZone||(this.camp=e,this.save.camp=e,Wt(this.save),this.newWorld(!1))}replayTutorial(){this.camp=0,this.save.camp=0,Wt(this.save,!0),this.replayTut=!0,this.ui.closeOverlay(),this.newWorld(!1),this.ui.showHome(this.save,this.camp),this.play(!1)}back(){if(this.ui.hasOverlay&&this.phase===`home`)this.ui.closeOverlay(),this.ui.showHome(this.save,this.camp),this.view.setClimber(this.save.climber),this.homeCam=`home`;else switch(this.phase){case`play`:this.pause();break;case`paused`:this.resume();break;case`results`:this.goHome();break;case`revive`:this.finishRun();break;case`home`:Je()}}setSetting(e,t){let n=this.save.settings;e===`sound`?(n.sound=t,S.setEnabled(n.sound)):e===`haptics`?(n.haptics=t,F.enabled=n.haptics):(n.quality=t,this.applyQuality(n.quality)),Wt(this.save)}resetProgress(){let e=Vt();e.settings=this.save.settings,Object.assign(this.save,e),Wt(this.save,!0),this.camp=0,this.view.setClimber(this.save.climber),this.goHome()}buyClimber(e){let t=Xe(e);return this.save.owned.includes(e)?!0:this.save.crystals<t.price?(S.play(`error`,{vol:.7}),!1):(this.save.crystals-=t.price,this.save.owned.push(e),this.save.climber=e,this.view.setClimber(e),this.view.celebrateNow(),S.play(`unlock`,{vol:.9}),Wt(this.save,!0),!0)}selectClimber(e){this.save.owned.includes(e)&&(this.save.climber=e,this.view.setClimber(e),Wt(this.save))}doRevive(){let e=at[this.revives]??9999;if(this.save.crystals<e)return this.finishRun();this.save.crystals-=e,this.revives++,this.world.revive(),this.view.revived(),this.phase=`play`,this.ui.closeOverlay(),this.ui.flash(.6,400),H_(``),S.play(`revive`,{vol:.9}),F.success(),Wt(this.save)}finishRun(){if(this.phase===`results`)return;this.phase=`results`,We(!1);let e=this.world.stats,t=this.save,n=Math.floor(e.maxAltitude);t.runs++,t.totalAltitude+=Math.max(0,n-Math.floor(yt(this.world.startZone))),t.crystals+=e.crystals,t.totalCrystals+=e.crystals,t.summits+=e.summits,t.maxZone=Math.max(t.maxZone,e.zone),!t.tutorial&&this.world.tutorial&&(t.tutorial=!0),this.bot||this.notifier.noteFinish();let r=!1;if(this.daily){let e=_n();if(t.daily.date!==e&&(t.daily.streak=t.daily.date===Kt()?t.daily.streak+1:1,t.daily.date=e,t.daily.best=0),n>t.daily.best&&(t.daily.best=n,r=this.bestAtStart>0),t.daily.claimed!==e){t.daily.claimed=e;let n=Math.min(100,30+(t.daily.streak-1)*10);t.crystals+=n,this.bonus+=n}n>t.best&&(t.best=n)}else n>t.best&&(r=t.best>0||n>30,t.best=n);let i=Lt(t.missions,e);for(let e of i)t.crystals+=e.reward,this.bonus+=e.reward;let a=t.missions.map(e=>({...e,justDone:i.includes(e)||this.liveDone.includes(e.kind)})),o=t.missions.filter(e=>e.done).length,s=null;for(t.stars+=i.length+this.liveDone.length;t.stars>=3;)t.stars-=3,t.rank++,t.crystals+=100+t.rank*50,this.bonus+=100+t.rank*50,s=zt(t.rank);if(o){let e=t.missions.filter(e=>!e.done).map(e=>e.kind);t.missions=t.missions.map((n,r)=>{if(!n.done)return n;let i=Ft(t.rank,r,e);return e.push(i.kind),i})}Wt(t,!0);let c=_t(e.zone);this.ui.showResults({altitude:n,best:this.daily?t.daily.best:t.best,newBest:r,crystals:e.crystals+this.bonus,summits:e.summits,zoneName:c.name,zone:e.zone,zoneStars:Gt(t,e.zone),newStars:this.newStars,newCamp:e.summits>0&&!this.daily?e.zone:-1,missions:a,rankUp:s,daily:this.daily,dailyBest:t.daily.best,totalCrystals:t.crystals,catches:e.catches,anchors:e.anchors}),H_(`blur`);let l=!this.bot&&!z_.has(`seed`)&&!z_.has(`ff`);this.daily&&l&&t.settings.stats?rn(t,_n(),t.daily.best).then(()=>this.notifier.refreshStats(!0)).then(e=>(this.phase===`results`&&this.ui.dailyRank(e,n),this.notifier.replan())):this.notifier.replan(),s&&setTimeout(()=>S.play(`summit`,{vol:.8}),1200),(r||e.summits>0)&&t.runs>=3&&t.reviewAsked!==C.version&&!this.bot&&(t.reviewAsked=C.version,Wt(t),setTimeout(()=>Ke(),2600))}handle(e){let t=this.world,n=t.player,r=T(n.x/4,-.8,.8);switch(this.view.onEvent(e,t),e.t){case`leap`:S.play(e.mode===`climb`||e.mode===`shaft`?`dyno`:`jump`,{vol:.6,pan:r}),F.light();break;case`land`:S.play(e.mode===`slide`?`iceLand`:`land`,{vol:e.hard?.8:.5,pan:r}),e.hard?F.medium():F.light();break;case`step`:{let i=t.gen.pieceAt(n.s),a=this.view.pal;if(e.mode===`climb`||e.mode===`shaft`)S.play(`grab`,{vol:.42,pan:r+(e.foot?.15:-.15)});else if(e.mode===`run`){let t=i?.kind===`bridge`&&n.s>i.marks.deckStart&&n.s<i.marks.deckEnd;S.play(t?`stepWood`:a.snowCover>.5?`stepSnow`:`step`,{vol:.32,pan:r+(e.foot?.12:-.12)})}break}case`crystal`:S.crystal(e.combo,r),e.combo>0&&e.combo%10==0&&(this.ui.callout(`×${e.combo}`,`crystal small`),F.light());break;case`gem`:S.play(`gem`,{vol:.8,pan:r}),F.medium(),this.ui.callout(`+10`,`gold`);break;case`power`:S.play(`power`,{vol:.85}),F.medium(),this.ui.callout(e.kind===`magnet`?`Magnet`:`Amulet`,e.kind===`shield`?`crystal`:`gold`);break;case`shield`:S.play(`shield`,{vol:.9}),F.heavy(),this.ui.flash(.45,260),this.ui.callout(`Amulet saved you`,`crystal`),this.slowMo(.35,.45);break;case`bump`:S.play(`bump`,{vol:.75,pan:r}),F.medium(),this.dangerV=.6;break;case`clip`:S.play(`clip`,{vol:.85,pan:r}),F.light(),e.fresh&&this.ui.callout(`Clipped in`,`anchor small`);break;case`caught`:S.play(`catch`,{vol:1,pan:r,wet:e.mode===`shaft`||e.mode===`slide`?.6:.1}),F.heavy(),setTimeout(()=>F.medium(),140),this.hitStop=.07,this.slowMo(.32,.75),this.ui.flash(.32,220),this.ui.callout(`The rope caught you!`,`anchor`),this.dangerV=.9;break;case`near`:S.play(`near`,{vol:.7,pan:-r}),F.light(),this.ui.callout(`Close call`,`small`),this.slowMo(.55,.18);break;case`crash`:this.crash(e.ob,e.cause);break;case`mode`:e.to===`slide`&&S.play(`whoosh`,{vol:.7,wet:.6}),e.to===`glide`&&(S.play(`whoosh`,{vol:.8}),S.play(`chute`,{vol:.6,delay:.1})),e.from===`glide`&&S.play(`land`,{vol:.7}),e.to===`shaft`&&S.play(`grab`,{vol:.6,wet:.7});break;case`enter`:e.piece.kind===`bridge`&&S.play(`creak`,{vol:.6}),e.piece.kind===`cave`&&S.play(`whoosh`,{vol:.5,wet:.6});break;case`summit`:{let t=_t(e.zone);S.play(`summit`,{vol:.95}),F.success(),this.ui.banner(`Summit reached`,t.name,`Camp ${e.zone+2} unlocked`),this.ui.fx.confetti(window.innerWidth/2,window.innerHeight*.45,90),this.awardStars(e.zone,e.crystals,e.clean);break}case`zone`:{let t=_t(e.zone);S.play(`zone`,{vol:.85}),F.medium(),this.ui.banner(`World ${String(e.zone+1).padStart(2,`0`)}`,t.name,t.subtitle),this.ui.setZone(e.zone),this.save.seenZones.includes(e.zone)||this.save.seenZones.push(e.zone),!this.daily&&e.zone>this.save.maxZone&&(this.save.maxZone=e.zone,Wt(this.save));break}case`moving`:(e.ob.kind===`rockfall`||e.ob.kind===`roller`)&&S.play(`rumble`,{vol:.8,pan:this.obPan(e.ob)}),e.ob.kind===`drip`&&S.play(`crumble`,{vol:.6,pan:this.obPan(e.ob),wet:.6}),e.ob.kind===`eagle`&&S.play(`eagle`,{vol:.85,pan:this.obPan(e.ob)}),e.ob.kind===`swinglog`&&S.play(`creak`,{vol:.7,pan:this.obPan(e.ob)}),F.light();break;case`tutorial`:if(this.shownSteps.has(e.step))break;if(this.shownSteps.add(e.step),e.step===`crystals`){setTimeout(()=>this.phase===`play`&&this.ui.hint(`crystals`),2600);break}this.ui.hint(e.step),S.play(`tick`,{vol:.6});break;case`taught`:this.ui.praise(),F.success(),S.play(`tick`,{vol:.8,vary:.04});break;case`tutorialDone`:{let e=!this.save.tutorial;this.save.tutorial=!0,e&&(this.save.crystals+=50,this.bonus+=50,this.ui.refreshCrystals(this.save.crystals)),Wt(this.save,!0),setTimeout(()=>this.ui.banner(`Tutorial complete`,`You know every move`,e?`+50 crystals · from here on, falls count`:`from here on, falls count`),3600);break}case`passed`:e.ob.tutorial&&this.ui.hint(null)}}awardStars(e,t,n){if(this.daily)return;let r=this.save,i=(r.zoneStars[e]??[!1,!1,!1]).slice(),a=[!0,t>=_t(e).crystalGoal,n],o=[];for(let e=0;e<3;e++)a[e]&&!i[e]&&(i[e]=!0,o.push(e));if(r.zoneStars[e]=i,o.length){let t=o.length*50;r.crystals+=t,this.bonus+=t,this.newStars.push({zone:e,stars:o})}r.maxZone=Math.max(r.maxZone,e+1),Wt(r)}obPan(e){return T((e.x-this.world.player.x)/4,-.8,.8)}slowMo(e,t){this.slow={scale:e,t}}crash(e,t){let n=this.world,r=t===`gap`||n.player.mode===`climb`||n.player.mode===`glide`;S.play(`crash`,{vol:1,pan:this.obPan(e),wet:n.player.mode===`slide`||n.player.mode===`shaft`?.6:.2}),r&&S.play(`whistle`,{vol:.5,delay:.25}),F.heavy(),setTimeout(()=>F.error(),120),this.hitStop=.09,this.slowMo(.3,.8),this.ui.flash(.35,200),this.phase=`dying`,this.ui.hint(null),n.tutorialWait=null,n.inTutorial&&!this.bot?setTimeout(()=>{this.phase===`dying`&&(this.ui.flash(.85,520),n.retry(),this.view.revived(),this.view.snapCamera(),this.shownSteps.clear(),this.phase=`play`,this.ui.callout(`Try again`,`retry`),F.light())},950):(r&&setTimeout(()=>S.play(`chute`,{vol:.7}),520),setTimeout(()=>{if(this.phase!==`dying`)return;let t=at[this.revives];t!==void 0&&this.save.crystals>=t&&!this.bot?(this.phase=`revive`,H_(`dim`),this.ui.showRevive(t,this.save.crystals,B_[e.kind]??`Wiped out`,5)):this.finishRun()},1250))}loop=e=>{requestAnimationFrame(this.loop);let t=Math.min(.05,Math.max(0,(e-this.last)/1e3));this.last=e,this.frames++,this.fpsAcc+=t,this.fpsN++,this.fpsAcc>1&&(this.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0,window.__fps=this.fps),this.view.adapt(t*1e3);let n=this.world,r=n.player,i=1;this.slow.t>0&&(this.slow.t-=t,i=this.slow.scale),n.tutorialWait&&(i=Math.min(i,.12)),this.timeScale+=(i-this.timeScale)*A(this.slow.t>0||n.tutorialWait?14:5,t);let a=t*this.timeScale;if(this.hitStop>0&&(this.hitStop-=t,a=0),this.phase===`play`||this.phase===`dying`){if(this.bot&&this.phase===`play`){let e=this.bot.think(n,a);e.steerTo!==null&&n.steerTo(e.steerTo),e.leap&&n.leap(),n.tutorialWait&&=null}this.input.axis!==0&&this.phase===`play`&&n.steer(this.input.axis*7.5*t*(n.span.wrap?tt/3.4:1));let e=a;for(;e>1e-6;){let t=Math.min(e,1/60);n.update(t),e-=t}for(let e of n.events)this.handle(e);n.events.length=0,this.phase===`play`&&this.runChecks(t)}else if(this.phase===`home`){n.update(0);for(let e of n.events)this.view.onEvent(e,n);n.events.length=0}let o=this.phase===`home`?`home`:this.phase===`paused`?`paused`:r.alive?`play`:`dead`;if(this.view.homeClose=this.homeCam===`closeup`,this.view.frame(a,n,o,t),this.phase===`play`||this.phase===`dying`){let e=n.gen.pieceAt(r.s),t=Math.max(n.stats.zone,e?.kind===`glide`?e.zone:0),i=_t(t);this.ui.updateHud({altitude:n.altitude,best:this.bestAtStart,crystals:n.stats.crystals,nextSummit:i.summitAt,zoneStart:yt(t),magnet:r.magnet,shield:r.shield,roped:r.roped,caught:r.caught>0})}this.dangerV=Math.max(0,this.dangerV-t*2.5),this.ui.danger(this.dangerV),this.ambientOneShots(t);let s=n.gen.pieceAt(r.s),c=s?.kind===`cave`?T((r.s-s.marks.mouth)/8,0,1)*T(((s.variant===`shaft`?s.s1+30:s.marks.exit)-r.s)/10,0,1):s?.kind===`shaft`?T((s.marks.climbEnd-r.s)/14,0,1):0;if(S.ambience({altitude:Math.max(0,n.altitude),speed:r.started?r.speed+r.boost:0,cave:c,mode:r.mode,glide:r.mode===`glide`&&r.alive,slide:r.mode===`slide`&&r.alive&&!r.air,magnet:r.magnet>0,home:this.phase===`home`,dead:!r.alive,fire:+(this.phase===`home`),zone:n.stats.zone}),this.frames===3&&(window.__ready=!0,Ue()),window.__frames=this.frames,this.frames%10==0||this.frames===3){let e=this.view.renderer.info.render;window.__stats={calls:e.calls,tris:e.triangles,geos:this.view.renderer.info.memory.geometries,particles:this.view.fx.particleCount}}};ambientOneShots(e){let t=this.world,n=t.player,r=t.gen.pieceAt(n.s),i=r?.kind===`cave`&&n.s>r.marks.mouth+6||r?.kind===`shaft`,a=r?.zone??0;this.ambT-=e,this.ambT<=0&&(this.ambT=3.5+Math.random()*6,!i&&(a===0||a===2||a===1&&Math.random()<.4)&&this.phase!==`results`&&S.play(`chirp`,{vol:.28+Math.random()*.14,pan:Math.random()*1.6-.8,vary:.12,delay:Math.random()*.3})),i&&this.phase===`play`&&(this.dripT-=e,this.dripT<=0&&(this.dripT=.9+Math.random()*2.6,S.play(`drip`,{vol:.32+Math.random()*.2,pan:Math.random()*1.6-.8,wet:1,vary:.15})))}runChecks(e){let t=this.world,n=t.stats;if(!this.passedBest&&this.bestAtStart>0&&n.maxAltitude>this.bestAtStart&&(this.passedBest=!0,S.play(`best`,{vol:.95}),F.success(),this.ui.callout(`New best!`,`gold`),this.ui.fx.confetti(window.innerWidth/2,window.innerHeight*.3,70),this.view.celebrateNow()),this.missionTick-=e,this.missionTick<=0&&!this.shotMode){this.missionTick=.4;for(let e of It(this.save.missions,n))this.liveDone.push(e.kind),this.save.crystals+=e.reward,this.bonus+=e.reward,this.ui.missionToast(e),S.play(`mission`,{vol:.85}),F.success()}let r=0,i=t.span;for(let e of t.gen.pieces){if(e.s0>t.player.s+90)break;for(let n of e.obstacles){let e=n.s-t.player.s;if(n.moving&&n.state===1&&n.vs<0&&e>0&&e<70){let e=i.wrap?(n.x-t.player.x)/(Math.PI*tt)*4:n.x-t.player.x;r|=e<-1.2?1:e>1.2?4:2}this.announced.has(n.id)||n.kind===`slab`&&e<30&&e>0&&this.announced.add(n.id)}}this.ui.warn(r)}},H_=e=>{let t=document.getElementById(`gl`);t&&(t.classList.remove(`dim`,`blur`),e&&t.classList.add(e))};(async()=>{let e=new URLSearchParams(location.search).get(`studio`);if(e){let{runStudio:t}=await Ee(async()=>{let{runStudio:e}=await import(`./studio-Ci3Fqm2g.js`);return{runStudio:e}},[],import.meta.url);t(e,new URLSearchParams(location.search).get(`climber`)??`pip`);return}let t=gn.bootSplash();gn.bootProgress(t,.2),await He();let[n]=await Promise.all([Ht(),document.fonts?.ready??Promise.resolve()]);gn.bootProgress(t,.55),await new Promise(e=>requestAnimationFrame(()=>setTimeout(e,30)));let r=new V_(document.getElementById(`gl`),document.getElementById(`ui`),document.getElementById(`fx2d`),n);gn.bootProgress(t,1);let i=()=>{r.frames>=3?setTimeout(()=>gn.bootDone(t),250):requestAnimationFrame(i)};i()})();export{ce as A,yc as C,Xe as D,B as E,be as O,xa as S,uc as T,Sc as _,Op as a,hi as b,Kf as c,H as d,cl as f,zo as g,Gc as h,K as i,xe as k,ho as l,ba as m,am as n,Ep as o,U as p,Pp as r,qf as s,Bm as t,Vs as u,rl as v,cc as w,Vr as x,sc as y};