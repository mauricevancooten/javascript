'use strict'

;(function() { // IIFE

  var circle, redButton, colour

  circle = document.querySelector('.example')
  redButton = document.querySelector('.red-button')

  colour = 'crimson'

  redButton.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })

})()
