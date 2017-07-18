'use strict'

const galleryPrice = document.querySelector('.price')
const galleryPercentage = document.querySelector('.percent')
const galleryCommission = document.querySelector('.commission')
const artistsTotal = document.querySelector('.total')
const btn = document.querySelector('.calc')

function commissionCalc(price, percent) {
  const total = price * (percent / 100)
  return total
}

btn.addEventListener('click', function () {
  const commission = commissionCalc(galleryPrice.value, galleryPercentage.value)
  galleryCommission.innerHTML = Math.round(commission * 100) / 100
  const artistsPrice = galleryPrice.value - commission
  artistsTotal.innerHTML = artistsPrice.toFixed(2)
})
