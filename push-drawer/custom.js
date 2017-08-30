'use strict'

const drawer = document.querySelector('.sticky')
const nav = document.querySelector('nav')
const html = document.querySelector('html')
const main = document.getElementById('main')

// Create link elements, set attributes, classes and content
let menu = document.createElement('a')
let close = document.createElement('a')
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

menu.addEventListener('click', (e) => {
	e.preventDefault()
  drawer.style.width = '250px'
  main.style.cssText = 'transition: 1s; margin-right: 250px; opacity: .1;'
})

close.addEventListener('click', (e) => {
	e.preventDefault(e)
  drawer.style.width = 0
  main.style.cssText = 'transition: 1s; margin-right: 0; opacity: 1;'
})

html.classList.add('js')
