var open, close, modal, modalContent, html

modal = document.querySelector('.overlay')
modalContent = document.querySelector('.overlay-content')
html = document.querySelector('html')
// Create button elements
open = document.createElement('button')
close = document.createElement('button')

// Add classes and text to buttons
open.classList.add('.show')
open.innerHTML = 'Open'
close.classList.add('.close')
close.innerHTML = 'Close'

// Insert close buton inside .overlay-content element
modalContent.appendChild(close)
// Insert open button after .overlay element
modal.parentNode.insertBefore(open, modal) 
// Add js class to html element for accessibility (see CSS)
html.classList.add('js')

modal.classList.add('hide-text')

close.addEventListener('click', function() {
  modal.classList.add('hide-text')
});

open.addEventListener('click', function() {
  modal.classList.remove("hide-text")
});
