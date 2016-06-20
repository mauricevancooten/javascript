var menu = document.querySelector('.hamburger'),
  close = document.querySelector('.close'),
  nav = document.querySelector('nav');

nav.style.width = 0;

function slideOut(el) {
  var width = 0;

  function slide() {
    if (width < 250) {
      width += 10;
    }
    el.style.width = width + 'px';
    // console.log(el.style.width);
    if (width < 250) {
      requestAnimationFrame(slide);
    } else {
      cancelAnimationFrame(slide);
    }
  }
  requestAnimationFrame(slide);
};

function slideIn(el) {
  var width = 250;

  function slide() {
    if (width > 0) {
      width -= 10;
    }
    el.style.width = width + 'px';
    // console.log(el.style.width);
    if (width > 0) {
      requestAnimationFrame(slide);
    } else {
      cancelAnimationFrame(slide);
    }
  }
  requestAnimationFrame(slide);
};

menu.addEventListener('click', function() {
  slideOut(nav);
});

close.addEventListener('click', function() {
  slideIn(nav);
});
