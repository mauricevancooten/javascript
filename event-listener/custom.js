var el, button

el = document.querySelector('h1')
button = document.querySelector('.show')

el.classList.add('hide-text')
el.style.transition = '1s'

// Listens for click event before triggering script
button.addEventListener('click', function() {
  el.classList.remove('hide-text')
})
