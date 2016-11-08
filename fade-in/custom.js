var el = document.querySelector('header'),
  el2 = document.querySelector('.wrapper'),
  el3 = document.querySelector('footer');

el.style.cssText = 'opacity: 0; transition: 1s';
el2.style.cssText = 'opacity: 0; transition: 1s';
el3.style.cssText = 'opacity: 0; transition: 1s';

setTimeout(function() {
  el.style.opacity = 1;
}, 800);

setTimeout(function() {
  el2.style.opacity = 1;
}, 1600);

setTimeout(function() {
  el3.style.opacity = 1;
}, 2400);
