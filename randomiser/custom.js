'use strict'

const btn = document.getElementById('randomiser')
const box = document.getElementById('box')

btn.addEventListener('click', () => {
  // Random number within range of 50
  const randomRad = Math.floor(Math.random() * 50)
  // Random number within range of 360
  const randomDeg = Math.floor(Math.random() * 360)
  // (16777215 == ffffff in decimal)
  const randomHex = Math.floor(Math.random() * 16777215).toString(16)
  // Add CSS
  box.style.cssText = `border-radius: ${randomRad}%; transform: rotate(${randomDeg}deg); background-color: #${randomHex};`
})
