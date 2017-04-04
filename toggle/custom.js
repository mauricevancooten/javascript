var button, text

link = document.querySelector('.show')
text = document.querySelector('.enquiries')

text.classList.add('hide-text')

link.addEventListener('click', function(e){
	e.preventDefault() // Prevent default behaviour
	text.style.transition = '1s'					
	text.classList.toggle('hide-text')
})