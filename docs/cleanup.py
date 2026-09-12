from pathlib import Path
import re
root=Path(__file__).resolve().parent.parent
p=root/'assets/js/immersive.js';s=p.read_text(encoding='utf8')
a=s.index("  const trailCanvas =");b=s.index("  const colors =",a)
s=s[:a]+s[b:]
s=s.replace('sx=.5,sy=.5,px=0,py=0','sx=.5,sy=.5')
a=s.index('    floats.forEach');b=s.index('  function tick',a)
s=s[:a]+'  }\n'+s[b:]
s=s.replace('    if(points.length)drawTrail(dt);\n','').replace('heroVisible||tunnelVisible||points.length','heroVisible||tunnelVisible')
a=s.index('    coords.textContent=');b=s.index('    requestFrame();',a);s=s[:a]+s[b:]
s=s.replace('points.length=0;tc?.clearRect(0,0,w,h);','')
s=s.replace('const colors = [\'#72efff\',\'#4187ff\',\'#c7ff2b\',\'#a595ff\',\'#d4ffff\'];',"const colors = ['#72bfff','#4187ff','#c4d6ff','#a595ff','#d4e4ff'];")
p.write_text(s,encoding='utf8')
# Remove the hover badge and pointer tilt handlers; images aren't false clickable surfaces.
p=root/'assets/js/motion.js';s=p.read_text(encoding='utf8');a=s.index("  const cues =");b=s.index('  const moving =',a);s=s[:a]+s[b:]
s=re.sub(r'^.*cues\..*\n','',s,flags=re.M)
a=s.index('  moving.forEach(media =>');b=s.index("  addEventListener('scroll'",a);s=s[:a]+s[b:]
p.write_text(s,encoding='utf8')
# Check the new dictionary and script along with the retained V5 checks.
p=root/'check-source.mjs';s=p.read_text(encoding='utf8').replace("['main','v3','motion','immersive']","['main','v3','motion','immersive','editorial']")
marker='const keys=[...html.matchAll'
idx=s.index(marker)
s=s[:idx]+"const editorialStart=scripts[4].indexOf('const copy = ')+13;\nconst editorialEnd=scripts[4].indexOf('\\n  Object.assign',editorialStart);\nconst editorial=vm.runInNewContext('('+scripts[4].slice(editorialStart,editorialEnd).trim().replace(/;$/,'')+')');\nfor(const lang of ['en','id']) Object.assign(ctx.dict[lang],editorial[lang]);\n"+s[idx:]
p.write_text(s,encoding='utf8')
