'use strict'

var anchorLinks, dest, anchor
anchorLinks = document.querySelector('nav').querySelectorAll('a')

for (var i = 0; i < anchorLinks.length; i++) {
	anchorLinks[i].addEventListener('click', function () {
		anchor = this.getAttribute('href')
		dest = document.querySelector(anchor)
		window.scroll({ top: dest.offsetTop, behavior: 'smooth' })
	})
}
