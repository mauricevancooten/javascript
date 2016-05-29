var menu = document.querySelector('.top');

window.addEventListener('scroll', function () {

	if ( this.pageYOffset >= 112) {

		menu.classList.add('sticky');

	} else {

		menu.classList.remove('sticky');

	}

	console.log(this.pageYOffset);

});