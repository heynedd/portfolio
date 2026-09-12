/* V5. Perspective particle tunnel, scroll-driven portal and floating typography.
   No wheel interception, no backend and no third-party animation runtime. */
(() => {
  'use strict';
  const root = document.documentElement;
  const hero = document.querySelector('.hero');
  const sculpture = document.querySelector('.flow-sculpture');
  const section = document.querySelector('.signal-journey');
  const stage = document.querySelector('.signal-stage');
  const canvas = document.querySelector('.warp-canvas');
  const ctx = canvas.getContext('2d');
  const portal = document.querySelector('.portal-arrow');
  const introduction = document.querySelector('.signal-intro');
  const stories = [...document.querySelectorAll('.signal-story')];
  const storyWrap = document.querySelector('.signal-stories');
  const track = document.querySelector('.signal-progress i');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const texts = {
    id: {
      role:'Administrasi bertemu<br>komunikasi digital.', small:'Informasi tertata.<br>Konten terarah.',
      intro:'Saya Iden, lulusan Ilmu Komunikasi yang menghubungkan administrasi, konten, dan pelaporan untuk mendukung komunikasi digital.',
      hero1:'IDE JADI',hero2:'BENTUK.',hero3:'INFORMASI',hero4:'JADI ARAH.',
      scroll:'GULIR UNTUK MELIHAT ALURNYA ↓',bridgeLabel:'INFORMASI → KOMUNIKASI',
      bridgeTitle:'Konten yang terlihat baik dimulai dari pekerjaan yang tertata.',
      bridgeBody:'Dari pendataan dan dokumen, ke materi visual dan publikasi, lalu kembali ke laporan. Saya tertarik pada hubungan di antaranya—agar informasi siap dipakai, pesan jelas, dan hasil bisa dievaluasi.',bridgeLink:'Lihat pengalaman saya ↗',
      portalLabel:'DARI INFORMASI KE AKSI',portalTitle:'TATA.<br>KEMAS.<br>JANGKAU.',
      story1:'Semua dimulai<br>dari yang tertata.',story1body:'Dokumen, data, dan koordinasi menjadi dasar kerja yang jelas.',
      story2:'Informasi punya<br>cerita untuk dibagi.',story2body:'Mengemas pesan menjadi konten yang relevan untuk audiens.',
      story3:'Pesan yang jelas.<br>Arah yang tepat.',story3body:'Mendukung komunikasi produk dan distribusi melalui kanal digital.',
      story4:'Baca hasilnya.<br>Perbaiki langkahnya.',story4body:'Monitoring dan laporan menghubungkan hasil dengan keputusan berikutnya.',
      signalFooter:'SATU ALUR. EMPAT PERAN.',skipScene:'Lanjut ke pengalaman ↓'
    },
    en: {
      role:'Administration meets<br>digital communication.',small:'Clear systems.<br>Purposeful content.',
      intro:'I’m Iden, a Communication Science graduate connecting administration, content, and reporting to support digital communication.',
      hero1:'GIVE IDEAS',hero2:'A FORM.',hero3:'GIVE DETAILS',hero4:'A PURPOSE.',
      scroll:'SCROLL TO FOLLOW THE FLOW ↓',bridgeLabel:'INFORMATION → COMMUNICATION',
      bridgeTitle:'Good content starts with the work you don’t see.',
      bridgeBody:'From data and documents to visuals and publication, then back to reporting. I work across these connections to keep information useful, messages clear, and results ready to evaluate.',bridgeLink:'Explore my experience ↗',
      portalLabel:'FROM INFORMATION TO ACTION',portalTitle:'ORGANIZE.<br>CREATE.<br>CONNECT.',
      story1:'It starts<br>with structure.',story1body:'Documents, data, and coordination build a clear foundation for work.',
      story2:'Information has<br>a story to tell.',story2body:'Shaping messages into content that connects with an audience.',
      story3:'Clear message.<br>Purposeful direction.',story3body:'Supporting product communication and distribution through digital channels.',
      story4:'Read the results.<br>Refine the next step.',story4body:'Monitoring and reports connect outcomes with the next decision.',
      signalFooter:'ONE FLOW. FOUR ROLES.',skipScene:'Continue to experience ↓'
    }
  };
  function localize() {
    const language = root.lang === 'id' ? 'id' : 'en';
    document.querySelectorAll('[data-v5]').forEach(el => {
      const value = texts[language][el.dataset.v5];
      if (value) el.innerHTML = value; // Trusted, static dictionaries only.
    });
    const h = document.querySelector('.closing h2');
    h.removeAttribute('data-i18n-html');
    h.innerHTML = language === 'id' ? 'Ide bagus?<br>Mari beri arah.' : 'A good idea?<br>Let’s give it direction.';
  }
  // The visitor's saved language still wins; new visits start in Indonesian.
  let preferred = null;
  try { preferred = localStorage.getItem('iden-immersive-language'); } catch (_) {}
  window.applyPortfolioLanguage(preferred === 'en' ? 'en' : 'id');
  localize();
  new MutationObserver(() => {
    localize();
    try { localStorage.setItem('iden-immersive-language', root.lang); } catch (_) {}
  }).observe(root,{attributes:true,attributeFilter:['lang']});

  const clock = document.querySelector('.local-clock');
  function setClock() { clock.textContent = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Jakarta'}).format(new Date())+' WIB'; }
  setClock(); setInterval(setClock,60000);
  if (!ctx) { root.classList.add('no-canvas'); return; }
  root.classList.remove('no-canvas');

  const colors = ['#72bfff','#4187ff','#c4d6ff','#a595ff','#d4e4ff'];
  let w=0,h=0,dpr=1,stars=[],frame=0,last=0,elapsed=0;
  let mx=.5,my=.5,sx=.5,sy=.5;
  let portalProgress=0,heroVisible=true,tunnelVisible=false;
  const enabled = () => !reduced.matches && !root.classList.contains('motion-paused');
  const clamp = (x,a=0,b=1) => Math.max(a,Math.min(b,x));
  function resize() {
    w=innerWidth; h=innerHeight; dpr=Math.min(devicePixelRatio||1,w<700?1.25:1.6);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);

    let seed=123456;
    function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
    stars=Array.from({length:w<700?140:280},(_,i)=>({angle:random()*Math.PI*2,radius:.10+random()*.90,z:.12+random()*2.8,color:colors[i%colors.length],width:.5+random()*1.25}));
    layout();requestFrame();
  }
  function layout() {
    const bounds=section.getBoundingClientRect();
    portalProgress=clamp(-bounds.top/Math.max(1,bounds.height-h));
    tunnelVisible=bounds.top<h && bounds.bottom>0;
    const hb=hero.getBoundingClientRect();heroVisible=hb.bottom>0 && hb.top<h;
    const progress=portalProgress;
    const entry=clamp((progress-.025)/.12);
    const fade=clamp((progress-.12)/.035);
    portal.style.transform=`rotate(${-18+entry*42}deg) scale(${1+Math.pow(entry,2.4)*36})`;
    portal.style.opacity=String(1-fade);
    introduction.style.opacity=String(1-clamp(progress/.105));
    introduction.style.transform=`scale(${1+progress*2})`;
    canvas.style.opacity=String(clamp((progress-.075)/.07));
    storyWrap.style.opacity=String(clamp((progress-.14)/.04));
    stage.classList.toggle('entered',progress>.13);
    const active=Math.min(3,Math.floor(clamp((progress-.16)/.83)*4));
    stories.forEach((el,i)=>{
      el.classList.toggle('active',i===active);
      el.setAttribute('aria-hidden',enabled()?String(i!==active):'false');
    });
    track.style.transform=`scaleX(${progress})`;
  }
  function drawTunnel(dt) {
    ctx.fillStyle='#020711';ctx.fillRect(0,0,w,h);
    const cx=w*(.5+(sx-.5)*.045),cy=h*(.5+(sy-.5)*.045);
    const focal=Math.min(w,h)*.60;
    const speed=.32+portalProgress*.65;
    const twirl=elapsed*.028;
    for (const star of stars) {
      star.z-=dt*speed;
      if(star.z<.055)star.z=2.9;
      const a=star.angle+twirl;
      const near=focal*star.radius/star.z;
      const far=focal*star.radius/(star.z+.055+speed*.04);
      const x=cx+Math.cos(a)*near, y=cy+Math.sin(a)*near;
      const tx=cx+Math.cos(a)*far,ty=cy+Math.sin(a)*far;
      ctx.globalAlpha=clamp((2.9-star.z)/1.9,.08,.9);
      ctx.strokeStyle=star.color;ctx.lineWidth=star.width*(.55+clamp(1/star.z,0,2)*.65);
      ctx.beginPath();ctx.moveTo(tx,ty);ctx.lineTo(x,y);ctx.stroke();
    }
    ctx.globalAlpha=1;
    const vignette=ctx.createRadialGradient(cx,cy,0,cx,cy,Math.min(w,h)*.48);
    vignette.addColorStop(0,'rgba(2,7,17,1)');vignette.addColorStop(.3,'rgba(2,7,17,.7)');vignette.addColorStop(1,'rgba(2,7,17,0)');
    ctx.fillStyle=vignette;ctx.fillRect(0,0,w,h);
  }
  function drawHero() {
    sculpture.style.transform=`translate3d(${(sx-.5)*32}px,${Math.sin(elapsed*.6)*17+(sy-.5)*18}px,0) rotateX(${(sy-.5)*-9}deg) rotateY(${(sx-.5)*12}deg) rotateZ(${-8+Math.sin(elapsed*.32)*3}deg)`;
  }
  function tick(now) {
    frame=0;
    if(!enabled()||document.hidden)return;
    const dt=Math.min(.05,last?(now-last)/1000:.016);last=now;elapsed+=dt;
    sx+=(mx-sx)*.075;sy+=(my-sy)*.075;
    if(heroVisible)drawHero();
    if(tunnelVisible)drawTunnel(dt);
    if(heroVisible||tunnelVisible)frame=requestAnimationFrame(tick);
  }
  function requestFrame(){if(!frame && enabled() && !document.hidden)frame=requestAnimationFrame(tick);}
  addEventListener('pointermove',event=>{
    if(!fine.matches||!enabled())return;
    mx=event.clientX/w;my=event.clientY/h;
    requestFrame();
  },{passive:true});
  addEventListener('scroll',()=>{layout();requestFrame();},{passive:true});
  addEventListener('resize',resize,{passive:true});
  document.addEventListener('visibilitychange',()=>{last=0;requestFrame();});
  function motionChanged(){
    last=0;
    if(!enabled()){cancelAnimationFrame(frame);frame=0;}
    layout();requestFrame();
  }
  new MutationObserver(motionChanged).observe(root,{attributes:true,attributeFilter:['class']});
  reduced.addEventListener('change',motionChanged);
  resize();
})();
