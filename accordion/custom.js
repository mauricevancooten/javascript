var accordion, content

accordion = document.querySelectorAll('.accordion')
content = document.querySelectorAll('.content')

content.forEach(function(el) {
  el.style.maxHeight = 0
})

accordion.forEach(function(el) {
  el.addEventListener('click', function() {
    content.forEach(function(el) {
      el.style.maxHeight = 0
    })
    content.forEach(function(el) {
      el.classList.remove('active')
    })
    this.classList.add('active')
    this.nextElementSibling.style.maxHeight = '1000px'
  })
})
