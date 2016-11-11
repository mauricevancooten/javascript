var menu, close, nav
menu = document.querySelector('.hamburger')
close = document.querySelector('.close')
nav = document.querySelector('nav')

nav.style.width = 0

menu.addEventListener('click', function() {
  nav.style.width = 250 + 'px'
})

close.addEventListener('click', function() {
  nav.style.width = 0
})
