'use strict'

const tabContent = document.getElementById('tabs').querySelectorAll('div')
const tabButton = document.querySelector('#tabs').childNodes[1].querySelectorAll('a')

// Hide all tabContent except the first
for (let i = 0; i < tabContent.length; i++) {
  if (i > 0) {
    tabContent[i].classList.add('hide-text')
  }
}

// Loop through tabButton array
for (let i = 0; i < tabButton.length; i++) {
  // Set first tab to active class
  tabButton[0].classList.add('active')
  tabButton[i].addEventListener('click', activeTab)
}

function activeTab(e) {
  e.preventDefault()
  // Remove active class on all tabs
  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].classList.remove('active')
  }
  // Add active class for tab clicked on
  this.classList.add('active')
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add('hide-text')
  }
  // Get the href value of the clicked item
  let tabId = this.getAttribute('href')
  tabId = document.querySelector(tabId)
  tabId.classList.remove('hide-text')
}
