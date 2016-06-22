var el = document.querySelector('header'),
  el2 = document.querySelector('.wrapper'),
  el3 = document.querySelector('footer');

setTimeout(function() {
  el.classList.remove('is-paused');
}, 800);

setTimeout(function() {
  el2.classList.remove('is-paused');
}, 1600);

setTimeout(function() {
  el3.classList.remove('is-paused');
}, 2400);
