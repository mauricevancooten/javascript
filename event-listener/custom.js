'use strict'

const el = document.querySelector('h1')
const btn = document.querySelector('.show')

el.classList.add('hide-text')
el.style.transition = '1s'

// Listens for click event before triggering script
btn.addEventListener('click', function() {
  el.classList.remove('hide-text')
})
