var el = document.querySelector('h1'),
button = document.querySelector('.show');

el.classList.add('hide-text');

button.addEventListener('click', function(){

	el.classList.remove('hide-text');

});  	