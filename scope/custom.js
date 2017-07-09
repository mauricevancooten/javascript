'use strict'

;(function() { // IIFE

  const circle = document.querySelector('.example')
  const redButton = document.querySelector('.red-button')

  var colour = 'crimson'

  redButton.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })

})()
