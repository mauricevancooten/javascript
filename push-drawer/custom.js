var menu, close, nav
menu = document.querySelector('.hamburger')
close = document.querySelector('.close')
nav = document.querySelector('nav')
main = document.querySelector('#main')

nav.style.width = 0

menu.addEventListener('click', function() {
	nav.style.width = '250px'
	main.style.transition = '1s'
  main.style.marginRight = '250px'
  main.style.opacity = .1
})

close.addEventListener('click', function() {
	nav.style.width = 0
  main.style.marginRight = 0
  main.style.opacity = 1
})
