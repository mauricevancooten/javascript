'use strict'

const loader = document.getElementById('loader')

setTimeout( () => {
  loader.style.cssText = 'transition: 1s; opacity:0;'
}, 3000)
