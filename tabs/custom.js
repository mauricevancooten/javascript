var content, tabLink, tabId

content = document.querySelectorAll('.content')
tabLink = document.querySelectorAll('.tab')

content.forEach(function(el, i) {
  if (i > 0) {
    el.classList.add('hide-text')
  }
})

tabLink.forEach(function(el, i) {
  if (i == 0) {
    tabLink[0].classList.add('active')
  }
  el.addEventListener('click', function(e) {
    e.preventDefault()
    tabLink.forEach(function(el){
        el.classList.remove('active')
    })
    this.classList.add('active')
    content.forEach(function(el){
        el.classList.add('hide-text')
    })
    tabId = this.getAttribute('href')
    // console.log(tabId)
    document.querySelector(tabId).classList.remove('hide-text')
  })
});
