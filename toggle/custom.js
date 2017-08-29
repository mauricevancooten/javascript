'use strict'

const link = document.getElementById('show')
const content = document.querySelector('.enquiries')

content.classList.add('hide-text')

link.addEventListener('click', (e) => {
	e.preventDefault() // Prevent default behaviour
	content.classList.toggle('hide-text')
})
