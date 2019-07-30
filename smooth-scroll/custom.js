'use strict'

const anchorLinks = document.querySelector('nav').querySelectorAll('a')

for (let i = 0; i < anchorLinks.length; i++) {
	anchorLinks[i].addEventListener('click', smoothScroll)
}

function smoothScroll(e) {
	e.preventDefault()
	const anchor = this.getAttribute('href')
	const dest = document.querySelector(anchor)
	window.scroll({ top: dest.offsetTop, behavior: 'smooth' })
}
