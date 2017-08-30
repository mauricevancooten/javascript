'use strict'

const el = document.querySelector('h1')
const btn = document.getElementById('show')
const height = el.scrollHeight

el.style.cssText = 'overflow: hidden; transition: 1s; max-height: 0;'

// Listens for click event before triggering script
btn.addEventListener('click', () => {
  el.style.cssText = `overflow: hidden; transition: 1s; max-height: ${height}px;`
})
