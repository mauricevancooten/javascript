'use strict'

const inputInches = document.getElementById('inches')
const btn = document.getElementById('calc')
const total = document.getElementById('total')

function convertToCentimetres(inches) {
  const result = inches / .39370079
  return result
}

btn.addEventListener('click', () => {
  let centimetres = convertToCentimetres(inputInches.value)
  centimetres = Math.round(centimetres * 10) / 10
  total.innerHTML = `${centimetres} cm`
})
