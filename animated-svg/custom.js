var el, cross, visible

el = document.querySelector('.turn')
cross = document.querySelector('#cross')
visible = true

cross.addEventListener('click', function(){
	if ( visible ) {
		el.classList.remove('turn-2')
		el.classList.add('turn')
		el.classList.remove('is-paused')
	} else {
		el.classList.remove('turn')
		el.classList.add('turn-2')
	}
	visible = !visible				  
})