var el = document.querySelector('h1'),
button = document.querySelector('.show');


el.classList.add('hide-text');
el.style.transition = '1s';

button.addEventListener('click', function(){

	el.classList.remove('hide-text');

});  	