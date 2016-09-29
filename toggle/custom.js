var button = document.querySelector('.show'),
text = document.querySelector('.enquiries');


text.style.height = 0;





button.addEventListener('click', function(){
	text.style.transition = '1s';					
	text.classList.toggle('hide-text');

});