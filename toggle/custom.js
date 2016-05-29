var button = document.querySelector('.show'),
text = document.querySelector('.enquiries');

text.classList.add('hide-text');

button.addEventListener('click', function(){
						
	text.classList.toggle('hide-text');

});