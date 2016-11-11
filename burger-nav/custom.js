var nav, navList, link

nav = document.querySelector('.burger-nav')
navList = nav.firstElementChild
link = document.createElement('a')

nav.appendChild(link)
link.setAttribute('href', '#')
link.classList.add('burger')
link.innerHTML = '<span>Menu</span>'

link = document.querySelector('.burger')

navList.classList.add('hide-text')

link.addEventListener('click', function(e) {
  e.preventDefault()
  navList.classList.toggle('hide-text')
});
