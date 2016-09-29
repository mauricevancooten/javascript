var button = document.querySelector('.show'),
text = document.querySelector('.enquiries');

text.classList.add('hide-text');
text.style.transition = '1s';

button.addEventListener('click', function(){
						
	text.classList.toggle('hide-text');

});