var box = document.querySelector('.example'),
    open = document.querySelector('.show'),
    close = document.querySelector('.hide');

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

  open.addEventListener('click', function() {
    slideOut(box);
  });

  close.addEventListener('click', function() {
    slideIn(box);
  });