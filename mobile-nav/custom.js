var nav, navList, link

nav = document.querySelector('.mobile-nav')
link = document.createElement('a')

// Insert link after nav
nav.parentNode.insertBefore(link, nav.nextSibling)
link.setAttribute('href', '#')
link.classList.add('menu')
link.innerHTML = '<span>Menu</span>'

link = document.querySelector('.menu')

nav.classList.add('hide-text')

link.addEventListener('click', function(e) {
  e.preventDefault()
  nav.classList.toggle('hide-text')
});
