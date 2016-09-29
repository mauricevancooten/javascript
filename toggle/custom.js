var button = document.querySelector('.show'),
text = document.querySelector('.enquiries');

text.classList.add('hide-text');



button.addEventListener('click', function(){
	text.style.transition = '1s';					
	text.classList.toggle('hide-text');

});