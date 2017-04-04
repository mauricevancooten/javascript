'use strict'

var button, content

button = document.querySelector('.show')
content = document.querySelector('.enquiries')

content.classList.add('hide-text')

button.addEventListener('click', function(e){
	e.preventDefault() // Prevent default behaviour
	content.style.transition = '1s'					
	content.classList.toggle('hide-text')
})