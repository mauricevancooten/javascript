'use strict'

const modal = document.getElementById('overlay')
const modalContent = document.getElementById('overlay-content')
const html = document.querySelector('html')

html.classList.add('js')

// Create link elements
let open = document.createElement('a')
let close = document.createElement('a')

// Add classes attributes and text to links
open.classList.add('show')
open.setAttribute('href','#')
open.innerHTML = 'Open'
close.classList.add('close')
close.setAttribute('href','#')
close.innerHTML = 'Close'

// Insert close button inside .overlay-content element
modalContent.appendChild(close)
// Insert open button before .overlay elements
modal.parentNode.insertBefore(open, modal)

open = document.querySelector('.show')
close = document.querySelector('.close')

modal.classList.add('hide-text')

open.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('hide-text')
})

close.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.add('hide-text')
})
