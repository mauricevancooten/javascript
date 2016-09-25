var amount = document.querySelector('.inches'),
    button = document.querySelector('button'),
    total = document.querySelector('.total');

function convertToCentimetres(inches) {
    var result = inches / .39370079;
    return result;
}

button.addEventListener('click', function() {
    total.innerHTML = Math.round(convertToCentimetres(amount.value) * 10) / 10 + ' cm'
});
