'use strict'

const scrollBar = document.querySelector('.scroll-bar')
const body = document.querySelector('body')
const height = body.clientHeight
var percentage = 0

scrollBar.style.width = ((window.innerHeight / height)) * 100 + "%"

window.addEventListener('scroll', function() {
  percentage = ((this.pageYOffset + this.innerHeight) / height) * 100
  scrollBar.style.width = percentage + "%"
})
