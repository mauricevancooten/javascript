var inputInches, button, total, result

inputInches = document.querySelector('.inches')
button = document.querySelector('button')
total = document.querySelector('.total')

function convertToCentimetres(inches) {
  result = inches / .39370079
  return result
}

button.addEventListener('click', function() {
  result = convertToCentimetres(inputInches.value)
  result = Math.round(result * 10) / 10
  total.innerHTML = result + ' cm'
})
