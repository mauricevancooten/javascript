'use strict'

var content, tabLink, tabId

content = document.querySelectorAll('.content')
tabLink = document.querySelectorAll('.tab')
  // Hide all content except the first
for (var i = 0; i < content.length; i++) {
  if (i > 0) {
    content[i].classList.add('hide-text')
  }
}
// Loop through tabLink array
for (var i = 0; i < tabLink.length; i++) {
  // Set first tab to active state
  tabLink[0].classList.add('active')

  tabLink[i].addEventListener('click', function(e) {
    e.preventDefault()
    for (var i = 0; i < tabLink.length; i++) {
      tabLink[i].classList.remove('active')
    }
    // Add active state for tab clicked on
    this.classList.add('active')
    for (var i = 0; i < content.length; i++) {
      content[i].classList.add('hide-text')
    }
    // Get the href value of the clicked item
    tabId = this.getAttribute('href')
    tabId = document.querySelector(tabId)
    tabId.classList.remove('hide-text')
  })
}
