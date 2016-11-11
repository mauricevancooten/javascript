var nav, offset

nav = document.querySelector('.top')
offset = nav.offsetTop
// On scroll trigger script
window.addEventListener('scroll', function() {
	// When element has reached the top of the window trigger script
  if (this.pageYOffset >= offset) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
  // console.log(this.pageYOffset)
})
