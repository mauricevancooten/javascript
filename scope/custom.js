'use strict'

{
  const circle = document.getElementById('circle')
  const redBtn = document.getElementById('red-btn')
  let colour = 'crimson'

  redBtn.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })
}
