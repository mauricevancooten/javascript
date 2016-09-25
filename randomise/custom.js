var button = document.querySelector('.randomise'),
box = document.querySelector('.example');


button.addEventListener('click', function () {
	var random = Math.floor(Math.random() * 256);
	box.style.backgroundColor = 'rgba(255,'+ random + ','+ random + ',.8)'
});