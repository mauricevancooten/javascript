'use strict'

const artistsPrice = document.querySelector('.price')
const galleryPercentage = document.querySelector('.percent')
const galleryCommission = document.querySelector('.commission')
const galleryTotal = document.querySelector('.total')
const btn = document.querySelector('.calc')

function commissionCalc(price) {
  const total = price * (1 + ((galleryPercentage.value / (1 - galleryPercentage.value / 100)) / 100))
  return total
}

btn.addEventListener('click', function() {
  const galleryPrice = commissionCalc(artistsPrice.value)
  const commission = Math.round((galleryPrice - artistsPrice.value) * 100) / 100
  galleryCommission.innerHTML = commission.toFixed(2)
  galleryTotal.innerHTML = galleryPrice.toFixed(2)
})
