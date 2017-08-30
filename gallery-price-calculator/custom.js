'use strict'

const artistsPrice = document.getElementById('price')
const galleryPercentage = document.getElementById('percent')
const galleryCommission = document.getElementById('commission')
const galleryTotal = document.getElementById('total')
const btn = document.getElementById('calc')

function commissionCalc(price, percent) {
  const total = price * (1 + ( percent / (1 - percent / 100) / 100))
  return total
}

btn.addEventListener('click', () => {
  const galleryPrice = commissionCalc(artistsPrice.value, galleryPercentage.value)
  const commission = Math.round((galleryPrice - artistsPrice.value) * 100) / 100
  galleryCommission.innerHTML = commission.toFixed(2)
  galleryTotal.innerHTML = galleryPrice.toFixed(2)
})
