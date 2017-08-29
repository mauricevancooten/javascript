'use strict'

{
  const circle = document.getElementById('circle')
  const orangeBtn = document.getElementById('orange-btn')
  let colour = 'orange'

  orangeBtn.addEventListener('click', function() {
    circle.style.backgroundColor = colour
  })
}
