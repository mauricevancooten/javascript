var button = document.querySelector('.show-more'),
more = document.querySelector('.more'),
visible = false;

more.classList.add('hide-text');

button.addEventListener('click', function () {

	more.classList.toggle('hide-text');

	if (!visible) {
		button.innerHTML = 'Show less...';
	} else {
		button.innerHTML = 'Read more...';
	}

	visible = !visible;

});