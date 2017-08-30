'use strict'

let link,
  visible

const more = document.getElementById('more')

// Hide content with CSS & Add border to accommodate any padding or margins
more.style.cssText = 'max-height:0; overflow:hidden;'

link = document.createElement('a')
link.setAttribute('href', '#')
link.classList.add('show-more')
link.innerHTML = 'Read more...'
// Insert button after .more element
more.parentNode.insertBefore(link, more.nextSibling)

link = document.querySelector('.show-more');

visible = false

link.addEventListener('click', (e) => {
  //  Get height of .more element
  const height = more.scrollHeight
  e.preventDefault
  // If visible is set to false
  if (!visible) {
    link.innerHTML = 'Show less...'
    more.style.cssText = `transition:1s; overflow:hidden; max-height:${height}px;`
  } else {
    link.innerHTML = 'Read more...'
    more.style.maxHeight = 0
  }
  // Alternate between false & true
  visible = !visible
})
