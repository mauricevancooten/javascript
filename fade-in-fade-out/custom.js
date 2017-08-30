'use strict'

const box = document.getElementById('box')
const open = document.getElementById('open')
const close = document.getElementById('close')

let opacity

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

open.addEventListener('click', () => {
  fadeIn(box)
})

close.addEventListener('click', () => {
  fadeOut(box)
})
