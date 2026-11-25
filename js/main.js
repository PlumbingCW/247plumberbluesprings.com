(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  if(t&&d&&o){
    var open=function(){d.classList.add('open');o.classList.add('visible');t.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';};
    var close=function(){d.classList.remove('open');o.classList.remove('visible');t.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';};
    t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?close():open();});
    if(c)c.addEventListener('click',close);
    o.addEventListener('click',close);
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
    window.addEventListener('resize',function(){if(window.innerWidth>768)close();});
  }
  var f=document.getElementById('float-call'),ft=document.querySelector('.site-footer');
  if(f&&ft&&'IntersectionObserver' in window){
    new IntersectionObserver(function(e){f.classList.toggle('hide',e[0].isIntersecting);}).observe(ft);
  }
})();
