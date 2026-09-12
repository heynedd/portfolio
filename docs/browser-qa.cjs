const {chromium}=require('C:/Users/idenr/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const results={errors:[],widths:[],interactions:[],images:[],performance:{}};
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',e=>results.errors.push(e.message));
 page.on('response',r=>{if(r.url().startsWith('http://127.0.0.1')&&r.status()>=400)results.errors.push(r.status()+' '+r.url());});
 await page.goto('http://127.0.0.1:4173');await page.waitForTimeout(900);
 await page.evaluate(()=>document.fonts.ready);
 for(const width of [1440,1280,1024,768,390]){
  await page.setViewportSize({width,height:width===390?844:1000});
  for(const lang of ['id','en']){
   await page.evaluate(lang=>{window.applyPortfolioLanguage(lang);scrollTo({top:0,behavior:'instant'});},lang);await page.waitForTimeout(200);
   const measure=await page.evaluate(()=>({lang:document.documentElement.lang,viewport:innerWidth,body:document.documentElement.scrollWidth,headline:document.querySelector('h1').getBoundingClientRect().toJSON(),overflow:[...document.querySelectorAll('main *')].filter(el=>{const r=el.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+2||r.left< -2)&&!el.closest('.scene-sky,.signal-stage,.ticker,.closing-art,.type-study');}).slice(0,15).map(el=>el.tagName+'.'+el.className)}));
   results.widths.push({width,...measure});
   await page.screenshot({path:`docs/qa-${width}-${lang}.png`});
  }
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.evaluate(()=>window.applyPortfolioLanguage('en'));
 for(const id of ['rajawali','skd','rafflesia','pkm']){
  const button=page.locator(`[data-project="${id}-detail"]`);
  await button.click();await page.waitForTimeout(350);
  if(await page.locator(`#${id}-detail`).isVisible() && await button.getAttribute('aria-expanded')==='true')results.interactions.push(id+' detail opens');else results.errors.push(id+' failed open');
  await button.click();
  await page.locator(`[data-inspect="${id}"]`).click();
  await page.locator('.image-dialog img').evaluate(img=>img.decode());
  results.interactions.push(id+' image: '+await page.locator('.image-dialog').isVisible());
  await page.keyboard.press('Escape');
  if(await page.locator(`[data-inspect="${id}"]`).evaluate(el=>el===document.activeElement))results.interactions.push(id+' focus restored');else results.errors.push(id+' focus not restored');
 }
 await page.locator('[data-arrangement="spread"]').click();
 results.interactions.push('study spread: '+await page.locator('.type-study').getAttribute('data-layout'));
 await page.locator('.notebook-study').screenshot({path:'docs/qa-study.png'});
 await page.locator('[data-arrangement="stack"]').click();
 await page.locator('.motion-toggle').click();
 results.interactions.push('motion paused: '+await page.locator('html').getAttribute('class'));
 const staticStories=await page.locator('.signal-story').evaluateAll(els=>els.every(el=>el.getAttribute('aria-hidden')==='false'&&getComputedStyle(el).opacity==='1'));
 if(!staticStories)results.errors.push('paused stories not fully exposed');
 await page.reload();
 results.interactions.push('pause persists: '+await page.locator('.motion-toggle').getAttribute('aria-pressed'));
 await page.locator('.motion-toggle').click();
 for(const target of ['work','journey','experience','contact']){
  await page.locator(`.nav-links a[href="#${target}"]`).click();await page.waitForTimeout(1100);
  results.interactions.push(target+' navigation: '+new URL(page.url()).hash);
 }
 for(const id of ['rajawali','skd','rafflesia','pkm']){await page.locator('#'+id).scrollIntoViewIfNeeded();await page.waitForTimeout(850);await page.locator('#'+id).screenshot({path:`docs/qa-project-${id}.png`});}
 await page.locator('#contact').scrollIntoViewIfNeeded();await page.waitForTimeout(850);await page.screenshot({path:'docs/qa-contact.png'});
 await page.evaluate(()=>{const s=document.querySelector('.signal-journey');scrollTo({top:s.offsetTop+(s.offsetHeight-innerHeight)*.48,behavior:'instant'});});await page.waitForTimeout(1000);await page.screenshot({path:'docs/qa-tunnel.png'});
 results.images=await page.locator('main img').evaluateAll(imgs=>imgs.filter(i=>getComputedStyle(i).display!=='none').map(i=>({src:i.currentSrc,loaded:i.complete&&i.naturalWidth>0,width:i.naturalWidth,height:i.naturalHeight})));
 results.performance=await page.evaluate(()=>({resources:performance.getEntriesByType('resource').filter(r=>r.name.startsWith(location.origin)).map(r=>({url:r.name.split('/').pop(),bytes:r.transferSize})),domElements:document.querySelectorAll('*').length}));
 await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(250);
 results.interactions.push('OS reduced motion: '+await page.locator('.motion-toggle').isDisabled());
 if(!await page.locator('.signal-story').evaluateAll(els=>els.every(el=>getComputedStyle(el).opacity==='1')))results.errors.push('reduced motion hides stories');
 await page.setViewportSize({width:390,height:844});await page.locator('.signal-journey').screenshot({path:'docs/qa-reduced-mobile.png'});
 const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await nojs.goto('http://127.0.0.1:4173');
 results.interactions.push('no-JS portrait: '+await nojs.locator('.portrait-wrap').isVisible());
 results.interactions.push('no-JS notes: '+await nojs.locator('#rajawali-detail').isVisible());
 results.interactions.push('no-JS overflow: '+await nojs.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 const keyboard=await browser.newPage();await keyboard.goto('http://127.0.0.1:4173');await keyboard.keyboard.press('Tab');results.interactions.push('keyboard skip link: '+await keyboard.locator('.skip-link').evaluate(el=>el===document.activeElement));
 fs.writeFileSync('docs/qa-results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1});
