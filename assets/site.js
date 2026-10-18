/* Medusa Heads — shared navbar behaviour (mobile menu + dropdowns) */
(function(){
  var nav=document.querySelector('.site-nav');if(!nav)return;
  var burger=nav.querySelector('.sn-burger');
  var drops=[].slice.call(nav.querySelectorAll('.sn-drop'));

  function setDrop(drop,open){
    drop.classList.toggle('open',open);
    drop.querySelector('.sn-dropbtn').setAttribute('aria-expanded',String(open));
  }
  function closeDrops(except){drops.forEach(function(d){if(d!==except)setDrop(d,false);});}
  function closeAll(){
    nav.classList.remove('open');
    if(burger)burger.setAttribute('aria-expanded','false');
    closeDrops();
  }
  if(burger){
    burger.addEventListener('click',function(){
      var open=!nav.classList.contains('open');
      nav.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',String(open));
      if(!open)closeDrops();
    });
  }
  drops.forEach(function(drop){
    drop.querySelector('.sn-dropbtn').addEventListener('click',function(e){
      e.stopPropagation();
      closeDrops(drop);
      setDrop(drop,!drop.classList.contains('open'));
    });
  });
  document.addEventListener('click',function(e){if(!nav.contains(e.target))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
  window.addEventListener('resize',function(){if(window.innerWidth>900)closeAll();});
})();
