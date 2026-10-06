/* Medusa Heads — shared navbar behaviour (mobile menu + flow dropdown) */
(function(){
  var nav=document.querySelector('.site-nav');if(!nav)return;
  var burger=nav.querySelector('.sn-burger'),links=nav.querySelector('.sn-links');
  var drop=nav.querySelector('.sn-drop'),dropBtn=nav.querySelector('.sn-dropbtn');

  function closeAll(){
    nav.classList.remove('open');
    if(burger)burger.setAttribute('aria-expanded','false');
    if(drop){drop.classList.remove('open');dropBtn.setAttribute('aria-expanded','false');}
  }
  if(burger){
    burger.addEventListener('click',function(){
      var open=!nav.classList.contains('open');
      nav.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',String(open));
      if(!open&&drop){drop.classList.remove('open');dropBtn.setAttribute('aria-expanded','false');}
    });
  }
  if(dropBtn){
    dropBtn.addEventListener('click',function(e){
      e.stopPropagation();
      var open=!drop.classList.contains('open');
      drop.classList.toggle('open',open);
      dropBtn.setAttribute('aria-expanded',String(open));
    });
  }
  document.addEventListener('click',function(e){if(!nav.contains(e.target))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
  window.addEventListener('resize',function(){if(window.innerWidth>900)closeAll();});
})();
