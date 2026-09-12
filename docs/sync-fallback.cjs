// Keep the authored no-JavaScript document aligned with the default Indonesian copy.
const fs=require('node:fs');
const {chromium}=require('C:/Users/idenr/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const live=await browser.newPage();await live.goto('http://127.0.0.1:4173');await live.evaluate(()=>window.applyPortfolioLanguage('id'));await live.waitForTimeout(100);
 const content=await live.evaluate(()=>({
  entries:[...document.querySelectorAll('[data-i18n],[data-i18n-html],[data-v5],[data-i18n-alt],[data-i18n-aria]')].map(el=>({attrs:[...el.attributes].filter(a=>a.name.startsWith('data-i18n')||a.name==='data-v5').map(a=>[a.name,a.value]),html:el.innerHTML,alt:el.getAttribute('alt'),aria:el.getAttribute('aria-label')})),
  title:document.title,description:document.querySelector('meta[name=description]').content,closing:document.querySelector('.closing h2').innerHTML
 }));
 const raw=await browser.newPage({javaScriptEnabled:false});await raw.goto('http://127.0.0.1:4173');
 await raw.evaluate(content=>{
  for(const e of content.entries)for(const [name,value] of e.attrs){document.querySelectorAll(`[${name}="${value}"]`).forEach(el=>{if(name==='data-i18n-alt')el.alt=e.alt;else if(name==='data-i18n-aria')el.setAttribute('aria-label',e.aria);else el.innerHTML=e.html;});}
  document.title=content.title;document.querySelector('meta[name=description]').content=content.description;
  document.querySelector('.closing h2').innerHTML=content.closing;
  document.querySelector('.closing-art').remove();
  document.querySelectorAll('.float-sticker').forEach(el=>el.remove());
  document.querySelector('.image-dialog img').removeAttribute('src');
 },content);
 fs.writeFileSync('index.html','<!DOCTYPE html>\n'+await raw.locator('html').evaluate(el=>el.outerHTML)+'\n');await browser.close();
})();
