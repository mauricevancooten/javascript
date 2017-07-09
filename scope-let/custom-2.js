'use strict'

{
  const circle = document.querySelector('.example')
  const orangeButton = document.querySelector('.orange-button')
  let colour = 'orange'

  orangeButton.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })
}
