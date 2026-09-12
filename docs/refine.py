from pathlib import Path
from PIL import Image
import re

root=Path(__file__).resolve().parent.parent
out=root/'assets/optimized';out.mkdir(exist_ok=True)
manifest=[]
for p in (root/'assets/img').iterdir():
    if p.name=='profile.jpg': continue
    im=Image.open(p)
    widths=[640,1200] if p.stem=='flow' else [640]
    for width in widths:
        width=min(width,im.width)
        dest=out/f'{p.stem}-{width}.webp'
        resized=im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS)
        resized.save(dest,quality=86,method=6)
        manifest.append(f'| {dest.name} | {p.name} | Same section, responsive derivative | {resized.width}×{resized.height} | WebP | Inherited source | {dest.stat().st_size:,} bytes |')
with (root/'docs/IMAGE_MANIFEST.md').open('a',encoding='utf8') as f:f.write('\n'+'\n'.join(manifest)+'\n')

p=root/'index.html';s=p.read_text(encoding='utf8')
s=s.replace('<link href="assets/css/immersive.css?v=5" rel="stylesheet"/>','<link href="assets/css/immersive.css?v=5" rel="stylesheet"/>\n<link href="assets/css/editorial.css?v=6" rel="stylesheet"/>')
s=s.replace('<meta content="#f5f5f2" name="theme-color"/>','<meta content="#f5f5f2" name="theme-color"/>')
# Preserve portrait in semantic HTML rather than relying on a runtime relocation.
portrait=re.search(r'<figure class="portrait-wrap[\s\S]*?</figure>',s).group()
s=s.replace(portrait,'').replace('<div class="portrait-slot"></div>','<div class="portrait-slot">'+portrait+'</div>')
s=s.replace('height="1600" src="assets/img/profile.jpg" width="1200"','height="900" src="assets/img/profile.jpg" width="600" loading="lazy"').replace('decoding="async" fetchpriority="high" height="900"','decoding="async" height="900"')
s=s.replace('src="assets/img/flow.png"','src="assets/optimized/flow-1200.webp" srcset="assets/optimized/flow-640.webp 640w, assets/optimized/flow-1200.webp 1200w" sizes="(max-width: 700px) 95vw, 60vw"')
for name in ['rajawali','rafflesia','skd','pkm']:
    w,h=(1122,1402) if name in ['rajawali','rafflesia'] else (1448,1086)
    pattern=r'<img[^>]*src="assets/img/mockup-'+name+r'.webp"[^>]*/>'
    tag=re.search(pattern,s).group()
    new=re.sub(r'height="\d+"',f'height="{h}"',tag)
    new=re.sub(r'width="\d+"',f'width="{w}"',new)
    new=new.replace('/>',f' srcset="assets/optimized/mockup-{name}-640.webp 640w, assets/img/mockup-{name}.webp {w}w" sizes="(max-width: 700px) 90vw, 60vw"/>')
    if 'loading=' not in new:new=new.replace('<img ','<img loading="lazy" decoding="async" ')
    s=s.replace(tag,new)
s=s.replace('<div class="hero-topline">','<div class="hero-topline"><span class="hero-index">IDEN RIDWAN MULYANA<br>PORTFOLIO / 2026</span>')
s=s.replace('<div class="scene-sky" aria-hidden="true">','<div class="scene-sky" aria-hidden="true"><span class="visual-index">FIG. 01 — IDEAS IN MOTION</span>')
s=s.replace('<noscript><style>','<noscript><style>.case-note[hidden]{display:grid!important}')
p.write_text(s,encoding='utf8')
# Remove only unreachable legacy animation code, preserving translations and API.
p=root/'assets/js/v3.js';s=p.read_text(encoding='utf8');s=s[:s.index('  return; // V4')]+ '})();\n';p.write_text(s,encoding='utf8')
p=root/'assets/js/main.js';s=p.read_text(encoding='utf8');a=s.index('function initMotion()');b=s.index('applyLanguage(lang);',a);s=s[:a]+s[b:];p.write_text(s,encoding='utf8')
p=root/'assets/js/immersive.js';s=p.read_text(encoding='utf8');s=s.replace("hero1:'RAPI DI',hero2:'BALIK LAYAR.',hero3:'BERDAMPAK',hero4:'DI DEPAN.'","hero1:'IDE JADI',hero2:'BENTUK.',hero3:'INFORMASI',hero4:'JADI ARAH.'");s=s.replace("hero1:'ORDER BEHIND',hero2:'THE SCENES.',hero3:'IMPACT',hero4:'UP FRONT.'","hero1:'GIVE IDEAS',hero2:'A FORM.',hero3:'GIVE DETAILS',hero4:'A PURPOSE.'")
s=s.replace("  const portrait = document.querySelector('.portrait-wrap');\n  document.querySelector('.portrait-slot').append(portrait);",'')
p.write_text(s,encoding='utf8')
