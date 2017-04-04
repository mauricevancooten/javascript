'use strict'

var accordion, content

accordion = document.querySelectorAll('.accordion')
content = document.querySelectorAll('.content')

for (var i = 0; i < content.length; i++) {
  content[i].style.maxHeight = 0
}

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    for (var i = 0; i < content.length; i++) {
      content[i].style.maxHeight = 0
    }
    for (var i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove('active')
    }
    this.classList.add('active')
    this.nextElementSibling.style.maxHeight = '1000px'
  })
}
