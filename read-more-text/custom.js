'use strict'

var button, more, height, visible

more = document.querySelector('.more')

  // Hide content with CSS & Add border to accommodate any padding or margins
more.style.cssText = 'max-height:0; overflow:hidden; border:1px solid transparent;'
  //  Get height of .more element
height = more.scrollHeight

button = document.createElement('button')
button.classList.add('show-more')
button.innerHTML = 'Read more...'
  // Insert button after .more element
more.parentNode.insertBefore(button, more.nextSibling)

button = document.querySelector('.show-more');

visible = false

button.addEventListener('click', function() {
  // If visible is set to false
  if (!visible) {
    button.innerHTML = 'Show less...'
    more.style.transition = 1 + 's'
    more.style.maxHeight = height + 'px'
  } else {
    button.innerHTML = 'Read more...'
    more.style.maxHeight = 0
  }
  // Alternate between false & true
  visible = !visible
})
