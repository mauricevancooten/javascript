'use strict'

;(function() { // IIFE

  var circle, orangeButton

  circle = document.querySelector('.example')
  orangeButton = document.querySelector('.orange-button')

  var colour = 'orange'

  orangeButton.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })

})()
