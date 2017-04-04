'use strict'

var box, open, close, opacity

box = document.querySelector('.example')
open = document.querySelector('.show')
close = document.querySelector('.hide')

box.style.opacity = 0
  // Fade in function
function fadeIn(el) {
  opacity = 0

  function fade() {
    if (opacity < .9) {
      opacity += .1
    }

    el.style.opacity = opacity
    console.log(el.style.opacity)
    if (opacity < .9) {
      requestAnimationFrame(fade)
    } else {
      cancelAnimationFrame(fade)
    }

  }
  requestAnimationFrame(fade)
}
// Fade out function
function fadeOut(el) {
  opacity = 1

  function fade() {
    if (opacity > .1) {
      opacity -= .1
    }

    el.style.opacity = opacity
    console.log(el.style.opacity)
    if (opacity > .1) {
      requestAnimationFrame(fade)
    } else {
      cancelAnimationFrame(fade)
    }

  }
  requestAnimationFrame(fade)
}

open.addEventListener('click', function() {
  fadeIn(box)
})

close.addEventListener('click', function() {
  fadeOut(box)
})
