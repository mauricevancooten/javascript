'use strict'

var menu, close, drawer, nav, html

drawer = document.querySelector('.sticky')
nav = document.querySelector('nav')
html = document.querySelector('html')

// Create link elements, set attributes, classes and content
menu = document.createElement('a')
close = document.createElement('a')
menu.setAttribute('href','#')
close.setAttribute('href','#')
menu.classList.add('menu')
close.classList.add('close')
menu.innerHTML = '<span>Menu</span>'
close.innerHTML = '<span>Close</span>'

// Append links before drawer and nav
drawer.parentNode.insertBefore(menu, drawer)
nav.parentNode.insertBefore(close, nav)

menu = document.querySelector('.menu')
close = document.querySelector('.close')

drawer.style.width = 0

menu.addEventListener('click', function(e) {
	e.preventDefault()
  drawer.style.width = '250px'
})

close.addEventListener('click', function(e) {
	e.preventDefault(e)
  drawer.style.width = 0
})

html.classList.add('js')
