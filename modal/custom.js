var open = document.querySelector('.show'),
close = document.querySelector('.hide'),
modal = document.querySelector('.overlay'),
html = document.querySelector('html');	
					
html.classList.add('js');
modal.classList.add('hide-text');

close.addEventListener('click', function(){

	modal.classList.add('hide-text');
					
});

open.addEventListener('click', function(){
					
	modal.classList.remove("hide-text");
					
});