'use strict'

const el = document.querySelector('.turn')
const cross = document.getElementById('cross')
let visible = true

cross.addEventListener('click', () => {
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
