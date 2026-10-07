const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
const menu=document.querySelector('.hamburger'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open'); if(nav.classList.contains('open')){nav.style.display='flex';nav.style.position='absolute';nav.style.top='72px';nav.style.right='20px';nav.style.flexDirection='column';nav.style.background='#f7f6f2';nav.style.padding='18px';nav.style.border='1px solid #ddd'}else nav.style.display='none'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.style.display='none'}));

const experienceTabs=document.querySelectorAll('.experience-tab');
experienceTabs.forEach(tab=>tab.addEventListener('click',()=>{
  experienceTabs.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});
  tab.classList.add('active');
  tab.setAttribute('aria-selected','true');
  document.querySelectorAll('.experience-panel').forEach(panel=>{panel.hidden=panel.id!==tab.getAttribute('aria-controls')});
}));
