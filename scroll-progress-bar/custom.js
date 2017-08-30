'use strict'

const scrollBar = document.getElementById('scroll-bar')
const body = document.querySelector('body')
const height = body.scrollHeight
let percentage = 0

scrollBar.style.width = ((window.innerHeight / height)) * 100 + '%'

window.addEventListener('scroll', () => {
  percentage = ((this.pageYOffset + this.innerHeight) / height) * 100
  scrollBar.style.width = `${percentage}%`
})
