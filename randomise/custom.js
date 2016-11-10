var button, box, randomRad, randomHex, randomDeg

button = document.querySelector('.randomise')
box = document.querySelector('.box')

button.addEventListener('click', function() {
  // Random number within range of 50 / 360
  randomRad = Math.floor(Math.random() * 50)
  randomDeg = Math.floor(Math.random() * 360)
    // (16777215 == ffffff in decimal)
  randomHex = Math.floor(Math.random() * 16777215).toString(16)
  box.style.cssText = 'border-radius:' + randomRad + '%; transform: rotate(' + randomDeg + 'deg); background-color: #' + randomHex + ';'
})
