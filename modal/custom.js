'use strict'

const modal = document.querySelector('.overlay')
const modalContent = document.querySelector('.overlay-content')
const html = document.querySelector('html')

// Add js class to html element for accessibility (see CSS)
html.classList.add('js')

// Create button elements
var open = document.createElement('a')
var close = document.createElement('a')

// Add classes and text to buttons
open.classList.add('show')
open.setAttribute('href', '#')
open.innerHTML = 'Open'
close.classList.add('close')
close.setAttribute('href', '#')
close.innerHTML = 'Close'

// Insert close buton inside .overlay-content element
modalContent.appendChild(close)
// Insert open button before .overlay element
modal.parentNode.insertBefore(open, modal)

open = document.querySelector('.show')
close = document.querySelector('.close')

modal.classList.add('hide-text')

open.addEventListener('click', function(e) {
  e.preventDefault
  modal.classList.remove("hide-text")
});

close.addEventListener('click', function(e) {
  e.preventDefault
  modal.classList.add('hide-text')
});
