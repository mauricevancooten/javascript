'use strict'

const path = document.querySelector('.line')
const length = path.getTotalLength()
const html = document.querySelector('html')
const height = html.clientHeight
const scrollHeight = html.scrollHeight

path.style.strokeDasharray = length
path.style.strokeDashoffset = length

window.addEventListener('scroll', function() {
  const percentage = this.pageYOffset / (scrollHeight - height)
  const draw = length * percentage;
  path.style.strokeDashoffset = length - draw;
})
