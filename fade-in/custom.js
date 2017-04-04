'use strict'

var header, wrapper, footer

header = document.querySelector('header')
wrapper = document.querySelector('.wrapper')
footer = document.querySelector('footer')

header.style.cssText = 'opacity: 0; transition: 1s'
wrapper.style.cssText = 'opacity: 0; transition: 1s'
footer.style.cssText = 'opacity: 0; transition: 1s'
// Trigger script after 800 miliseconds
setTimeout(function() {
  header.style.opacity = 1
}, 800)

setTimeout(function() {
  wrapper.style.opacity = 1
}, 1600)

setTimeout(function() {
  footer.style.opacity = 1
}, 2400)
