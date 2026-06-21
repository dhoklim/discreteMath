hljs.highlightAll();
function T(h){ h.parentElement.classList.toggle('open'); }
function PT(el){ el.parentElement.classList.toggle('open'); }
const srch=document.getElementById('search');
const nls=document.querySelectorAll('.nav-link');
const cps=document.querySelectorAll('.concept');
if(srch){
  srch.addEventListener('input',function(){
    const q=this.value.trim().toLowerCase();
    cps.forEach(c=>{
      const ok=!q||c.querySelector('.ct').textContent.toLowerCase().includes(q)||
                 (c.querySelector('.cb')||{}).textContent?.toLowerCase().includes(q);
      c.style.display=ok?'':'none';
      if(ok&&q)c.classList.add('open');else if(!q)c.classList.remove('open');
    });
    nls.forEach(a=>a.classList.toggle('hid',q&&!a.textContent.toLowerCase().includes(q)));
  });
}
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){
  nls.forEach(a=>a.classList.toggle('active',a.getAttribute('href').endsWith('#'+e.target.id)));}
})},{rootMargin:'-30% 0px -65% 0px'});
cps.forEach(c=>{if(c.id)obs.observe(c);});
