'use strict'

const inputInches = document.querySelector('.inches')
const btn = document.querySelector('.calc')
const total = document.querySelector('.total')

function convertToCentimetres(inches) {
  const result = inches / .39370079
  return result
}

btn.addEventListener('click', function() {
  var centimetres = convertToCentimetres(inputInches.value)
  centimetres = Math.round(centimetres * 10) / 10
  total.innerHTML = centimetres + ' cm'
})
