from pathlib import Path
import re
root=Path(__file__).resolve().parent.parent
p=root/'index.html';s=p.read_text(encoding='utf8')
study='''<section class="notebook-study" aria-labelledby="study-title">
<div class="study-copy"><p class="eyebrow" data-i18n="study.label">LIVE STUDY / THIS PORTFOLIO</p><h3 id="study-title" data-i18n="study.title">Same words. Different rhythm.</h3><p data-i18n="study.body">An interactive typography study built for this portfolio. Change the arrangement and see how the reading order shifts.</p><div class="study-controls" role="group" aria-labelledby="study-title"><button type="button" data-arrangement="stack" aria-pressed="true" data-i18n="study.stack">Stack</button><button type="button" data-arrangement="spread" aria-pressed="false" data-i18n="study.spread">Spread</button></div></div>
<div><div class="type-study" data-layout="stack"><span data-i18n="study.one">INFORMATION</span><span data-i18n="study.two">INTO</span><span data-i18n="study.three">ACTION</span></div><p class="study-caption" data-i18n="study.caption">A layout experiment, open to iteration.</p></div>
</section>'''
s=s.replace('<section class="signal-journey"',study+'\n<section class="signal-journey"')
for name in ['rajawali','skd','rafflesia','pkm']:
    pos=s.index(f'id="{name}"');end=s.index('</article>',pos)
    chunk=s[pos:end]
    chunk=chunk.replace('<div class="project-actions">',f'<div class="project-actions"><button type="button" class="text-btn image-trigger" data-inspect="{name}" data-i18n="image.inspect">Inspect image ↗</button>')
    s=s[:pos]+chunk+s[end:]
s=s.replace('</main>','''</main>
<dialog class="image-dialog" aria-labelledby="image-dialog-title"><div class="image-dialog-bar"><h2 id="image-dialog-title" data-i18n="image.title">Project image</h2><button type="button" data-i18n="image.close">Close image</button></div><img src="assets/img/mockup-rajawali.webp" alt="" loading="lazy"/></dialog>''')
s=s.replace('<script defer src="assets/js/immersive.js?v=5"></script>','<script defer src="assets/js/immersive.js?v=5"></script>\n<script defer src="assets/js/editorial.js?v=6"></script>')
s=s.replace('.case-note[hidden]{display:grid!important}', '.case-note[hidden]{display:grid!important}.image-trigger,.study-controls{display:none!important}')
p.write_text(s,encoding='utf8')
# Stop unnecessary pointer trail allocation and invisible cursor work.
p=root/'assets/js/main.js';s=p.read_text(encoding='utf8');a=s.index("if (matchMedia('(pointer:fine)').matches)");b=s.index("document.querySelectorAll('.detail-trigger')",a);s=s[:a]+s[b:];s=s.replace("!matchMedia('(prefers-reduced-motion: reduce)').matches", "!matchMedia('(prefers-reduced-motion: reduce)').matches && !doc.classList.contains('motion-paused')");p.write_text(s,encoding='utf8')
p=root/'assets/js/immersive.js';s=p.read_text(encoding='utf8');s=s.replace('  document.body.append(trailCanvas);','  // Trail stays detached: no decorative pointer particles in the editorial edition.')
s=s.replace("    if(Math.hypot(event.clientX-px,event.clientY-py)>10){","    if(false){ // Retired pixel trail; preserved geometry is not allocated per pointer move.")
s=s.replace("    trailCanvas.width=Math.round(w*dpr);trailCanvas.height=Math.round(h*dpr);tc?.setTransform(dpr,0,0,dpr,0,0);",'')
s=s.replace("length:w<700?200:440", "length:w<700?140:280")
p.write_text(s,encoding='utf8')
