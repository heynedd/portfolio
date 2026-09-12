// Optional static QA: node check-source.mjs (Node.js 18+).
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
const html = fs.readFileSync('index.html', 'utf8');
const names = ['main','v3','motion','immersive','editorial'];
const scripts = names.map(name => fs.readFileSync(`assets/js/${name}.js`, 'utf8'));
scripts.forEach((code,i) => new vm.Script(code,{filename:names[i]+'.js'}));
const ctx = vm.createContext({});
vm.runInContext(scripts[0].slice(scripts[0].indexOf('const translations ='),scripts[0].indexOf('function safeStorageGet'))+';this.dict=translations;',ctx);
for (const lang of ['en','id']) {
  const match = scripts[1].match(new RegExp('Object.assign\\(translations\\.'+lang+', (\\{[\\s\\S]*?\\n    \\})\\);'));
  Object.assign(ctx.dict[lang],vm.runInNewContext('('+match[1]+')'));
  const start = scripts[2].indexOf(`const ${lang} = {`)+`const ${lang} = `.length;
  const end = scripts[2].indexOf('\n  };', start)+4;
  Object.assign(ctx.dict[lang],vm.runInNewContext('('+scripts[2].slice(start,end)+')'));
}
const editorialStart=scripts[4].indexOf('const copy = ')+13;
const editorialEnd=scripts[4].indexOf('\n  Object.assign',editorialStart);
const editorial=vm.runInNewContext('('+scripts[4].slice(editorialStart,editorialEnd).trim().replace(/;$/,'')+')');
for(const lang of ['en','id']) Object.assign(ctx.dict[lang],editorial[lang]);
const keys=[...html.matchAll(/data-i18n(?:-html|-aria|-alt)?="([^"]+)"/g)].map(m=>m[1]);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const errors=[];
const v5start=scripts[3].indexOf('const texts = ')+14;
const v5end=scripts[3].indexOf('\n  function localize()',v5start);
const v5dict=vm.runInNewContext('('+scripts[3].slice(v5start,v5end).trim().replace(/;$/,'')+')');
for(const m of html.matchAll(/data-v5="([^"]+)"/g))for(const lang of ['en','id'])if(!v5dict[lang][m[1]])errors.push(`Missing immersive ${lang}: ${m[1]}`);
for (const lang of ['en','id']) for (const key of keys) if (!(key in ctx.dict[lang])) errors.push(`Missing ${lang}: ${key}`);
for (const [i,id] of ids.entries()) if (ids.indexOf(id)!==i) errors.push(`Duplicate id: ${id}`);
for (const m of html.matchAll(/href="#([^"]+)"/g)) if(!ids.includes(m[1])) errors.push(`Missing anchor: ${m[1]}`);
for (const m of html.matchAll(/(?:src|href)="(assets\/[^"?]+)/g)) if(!fs.existsSync(m[1])) errors.push(`Missing file: ${m[1]}`);
for(const m of html.matchAll(/srcset="([^"]+)"/g)) for(const candidate of m[1].split(',')) {
  const file=candidate.trim().split(/\s+/)[0];
  if(!fs.existsSync(file)) errors.push(`Missing responsive image: ${file}`);
}
console.log(JSON.stringify({scriptsChecked:scripts.length,translationAttributes:keys.length,ids:ids.length,errors},null,2));
process.exitCode=errors.length?1:0;
