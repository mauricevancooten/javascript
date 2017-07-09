'use strict'

{
  const circle = document.querySelector('.example')
  const redButton = document.querySelector('.red-button')
  let colour = 'crimson'

  redButton.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })
}
