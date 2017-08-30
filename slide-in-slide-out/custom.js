'use strict'

const box = document.getElementById('box')
const open = document.getElementById('open')
const close = document.getElementById('close')

let  width
// Slide out function
function slideOut(el) {
  width = 0

  function slide() {
    if (width < 250) {
      width += 10
    }
    el.style.width = width + 'px'
      // console.log(el.style.width)
    if (width < 250) {
      requestAnimationFrame(slide)
    } else {
      cancelAnimationFrame(slide)
    }

  }
  requestAnimationFrame(slide)
};
// Slide in function
function slideIn(el) {
  width = 250;

  function slide() {
    if (width > 0) {
      width -= 10
    }
    el.style.width = width + 'px'
      // console.log(el.style.width)
    if (width > 0) {
      requestAnimationFrame(slide)
    } else {
      cancelAnimationFrame(slide)
    }
  }
  requestAnimationFrame(slide)
}

open.addEventListener('click', () => {
  slideOut(box)
})

close.addEventListener('click', () => {
  slideIn(box);
})
