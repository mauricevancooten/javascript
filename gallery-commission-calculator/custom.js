'use strict'

const galleryPrice = document.getElementById('price')
const galleryPercentage = document.getElementById('percent')
const galleryCommission = document.getElementById('commission')
const artistsTotal = document.getElementById('total')
const btn = document.getElementById('calc')

function commissionCalc(price, percent) {
  const total = price * (percent / 100)
  return total
}

btn.addEventListener('click', () => {
  const commission = commissionCalc(galleryPrice.value, galleryPercentage.value)
  galleryCommission.innerHTML = Math.round(commission * 100) / 100
  const artistsPrice = galleryPrice.value - commission
  artistsTotal.innerHTML = artistsPrice.toFixed(2)
})
