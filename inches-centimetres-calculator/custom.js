'use strict'

var inputInches, button, total, centimetres

inputInches = document.querySelector('.inches')
button = document.querySelector('.calc')
total = document.querySelector('.total')

function convertToCentimetres(inches) {
  var result = inches / .39370079
  return result
}

button.addEventListener('click', function() {
  centimetres = convertToCentimetres(inputInches.value)
  centimetres = Math.round(centimetres * 10) / 10
  total.innerHTML = centimetres + ' cm'
})
