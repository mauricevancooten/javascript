'use strict'

const nav = document.getElementById('mobile-nav')
const style = document.createElement('style')
const head = document.querySelector('head')
const menuButton = document.querySelector('.menu')
let link = document.createElement('a')

head.appendChild(style)

// Insert link after nav
nav.parentNode.insertBefore(link, nav.nextSibling)
link.setAttribute('href', '#')
link.classList.add('menu')
link.innerHTML = '<span>Menu</span>'

link = document.querySelector('.menu')

function resetNav() {
  // If menu icon is visible
  if (window.getComputedStyle(link, null).getPropertyValue("display") !== "none") {
    const height = nav.scrollHeight
    style.innerHTML = `.open { max-height: ${height}px; overflow: hidden;}`
    nav.classList.add('hide-text')
  } else {
    nav.classList.remove('hide-text')
  }
}

resetNav()

window.addEventListener('resize', (e) => {
  e.preventDefault
  resetNav()
})

link.addEventListener('click', (e) => {
  e.preventDefault()
  nav.style.transition = '1s'
  nav.classList.toggle('open')
})
