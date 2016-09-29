var button = document.querySelector('.show-more'),
more = document.querySelector('.more'),
visible = false;

more.style.maxHeight = 0;

button.addEventListener('click', function () {

	more.classList.toggle('hide-text');

	if (!visible) {
		button.innerHTML = 'Show less...';
		more.style.maxHeight = 500 + 'px';
	} else {
		button.innerHTML = 'Read more...';
		more.style.maxHeight = 0;
	}

	visible = !visible;

});