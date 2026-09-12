const fs=require('node:fs');
const {chromium}=require('C:/Users/idenr/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://127.0.0.1:4173');await p.waitForTimeout(700);await p.locator('.lang').click();await p.waitForTimeout(100);if(await p.locator('html').getAttribute('lang')!=='en')errors.push('Language button failed');await p.reload();if(await p.locator('html').getAttribute('lang')!=='en')errors.push('Language not saved');await p.screenshot({path:'docs/final-desktop.png'});
await p.evaluate(()=>{const s=document.querySelector('.signal-journey');scrollTo({top:s.offsetTop+(s.offsetHeight-innerHeight)*.48,behavior:'instant'});});await p.waitForTimeout(500);console.log('Tunnel current link:',await p.locator('.nav-links a[aria-current]').textContent());
await p.setViewportSize({width:390,height:844});await p.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await p.waitForTimeout(500);await p.screenshot({path:'docs/final-mobile.png'});
await p.locator('[data-inspect="rajawali"]').click();await p.locator('.image-dialog img').evaluate(img=>img.decode());await p.screenshot({path:'docs/final-mobile-image.png'});await p.keyboard.press('Escape');
await p.locator('#rajawali').scrollIntoViewIfNeeded();await p.waitForTimeout(800);await p.screenshot({path:'docs/final-mobile-project.png'});
for(const width of [320,390,768,1024,1280,1440]){await p.setViewportSize({width,height:900});if(!await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))errors.push('Overflow '+width);}
const n=await b.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await n.goto('http://127.0.0.1:4173');const nojsTitle=await n.locator('h1').innerText();if(!nojsTitle.includes('IDE JADI'))errors.push('Stale no-JS headline');
fs.writeFileSync('docs/final-check.json',JSON.stringify({errors,nojsTitle,languageButton:true,mobileDialog:true,checkedWidths:[320,390,768,1024,1280,1440]},null,2));console.log({errors,nojsTitle});await b.close();
})().catch(e=>{console.error(e);process.exitCode=1});
