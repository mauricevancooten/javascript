var image, count

image = document.querySelector('.gallery').querySelectorAll('img')
count = 0;

for (var i = 0; i < image.length; i++) {
	image[i].addEventListener('click', function () {
		count++
		this.style.zIndex = count
	})
}
