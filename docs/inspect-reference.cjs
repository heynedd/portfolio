const { chromium } = require('C:/Users/idenr/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage();
 await page.goto('http://127.0.0.1:4173');
 await page.setContent('<video muted preload="auto" src="http://127.0.0.1:4173/__reference.mp4"></video>');
 await page.waitForFunction(()=>document.querySelector('video').readyState>=2);
 const info=await page.evaluate(()=>{const v=document.querySelector('video');return {duration:v.duration,width:v.videoWidth,height:v.videoHeight}});
 console.log(info);
 const frames=await page.evaluate(async()=>{
  const v=document.querySelector('video'), c=document.createElement('canvas');c.width=640;c.height=Math.round(640*v.videoHeight/v.videoWidth);const ctx=c.getContext('2d'),out=[];
  for(let i=0;i<16;i++){v.currentTime=Math.min(v.duration-.1,.1+i*v.duration/16);await new Promise(r=>v.addEventListener('seeked',r,{once:true}));ctx.drawImage(v,0,0,c.width,c.height);out.push(c.toDataURL('image/jpeg',.85).split(',')[1]);}return out;
 });
 frames.forEach((f,i)=>fs.writeFileSync(`docs/reference-${String(i).padStart(2,'0')}.jpg`,Buffer.from(f,'base64')));
 fs.writeFileSync('docs/reference-info.json',JSON.stringify(info));await browser.close();
})();
