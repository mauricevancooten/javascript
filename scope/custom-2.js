'use strict'

;(function() { // IIFE

  const circle = document.querySelector('.example')
  const orangeButton = document.querySelector('.orange-button')

  var colour = 'orange'

  orangeButton.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })

})()
