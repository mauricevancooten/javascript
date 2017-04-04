var button, more, height, visible

more = document.querySelector('.more')
  //  Get height of .more element
height = more.clientHeight
  // Hide content with CSS
more.style.cssText = 'max-height:0; overflow:hidden;'

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
