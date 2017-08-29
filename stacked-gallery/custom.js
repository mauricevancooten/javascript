'use strict'

const image = document.getElementById('gallery').querySelectorAll('img')
let count = 0;

for (let i = 0; i < image.length; i++) {
	image[i].addEventListener('click', toFront)
}

function toFront() {
	count++
	this.style.zIndex = count
}
