var content, tabLink, tabId

content = document.querySelectorAll('.content')
tabLink = document.querySelectorAll('.tab')
  // Hide all content except the first
content.forEach(function(el, i) {
    if (i > 0) {
      el.classList.add('hide-text')
    }
  })
  // Loop through tabLink array
tabLink.forEach(function(el, i) {
  // Set first tab to active state
  if (i == 0) {
    tabLink[0].classList.add('active')
  }
  el.addEventListener('click', function(e) {
    e.preventDefault()
    tabLink.forEach(function(el) {
        el.classList.remove('active')
      })
      // Add active state for tab clicked on
    this.classList.add('active')
    content.forEach(function(el) {
        el.classList.add('hide-text')
      })
      // Get the href value of the clicked item
    tabId = this.getAttribute('href')
    tabId = document.querySelector(tabId)
    tabId.classList.remove('hide-text')
  })
});
