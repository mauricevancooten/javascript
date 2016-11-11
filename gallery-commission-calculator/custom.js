var price, commission, galleryFee, total, button, galleryPrice, galleryCommission

price = document.querySelector('.price')
commission = document.querySelector('.commission')
galleryFee = document.querySelector('.gallery-fee')
total = document.querySelector('.total')
button = document.querySelector('.calculate')
  // Calculate the gallery commission
function galleryCommission(artWorkPrice) {
  var total = artWorkPrice * (commission.value / 100)
  return total
}
// Calculate the total including the gallery commission
function galleryTotal(artWorkPrice) {
  var total = artWorkPrice * (1 + (commission.value / 100))
  return total
}

button.addEventListener('click', function() {
  galleryCommission = galleryCommission(price.value)
  galleryCommission = Math.round(galleryCommission * 10) / 10 // Rounding
  galleryCommission = galleryCommission.toFixed(2) // Two decimal places
  galleryFee.innerHTML = galleryCommission
  galleryPrice = galleryTotal(price.value)
  galleryPrice = Math.round(galleryPrice * 10) / 10
  galleryPrice = galleryPrice.toFixed(2)
  total.innerHTML = galleryPrice
  console.log(galleryPrice)
})
