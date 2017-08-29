'use strict'

const accordion = document.getElementsByClassName('accordion')
const content = document.getElementsByClassName('content')

// Loop through .content blocks and set max height to hide.
for (let i = 0; i < content.length; i++) {
  content[i].style.maxHeight = 0
}

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', showAccordion)
}

function showAccordion() {
  // Check to see if content is open ( maxHeight === 1000px)
  if (this.nextElementSibling.style.maxHeight === '1000px') {
    // Loop through .content blocks and set max height to hide.
    for (let i = 0; i < content.length; i++) {
      content[i].style.maxHeight = 0
    }
    // Removes active class of each accordion button
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove('active')
    }
  } else { // Else if content is closed (maxHeight !== 1000px)
    // Loop through .content blocks and set max height to hide.
    for (let i = 0; i < content.length; i++) {
      content[i].style.maxHeight = 0
    }
    // Removes active class of each accordion button
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove('active')
    }
    // Adds active class to accordion button clicked on (this)
    this.classList.add('active')
    // Opens (sibling), content beneat through max-height CSS
    this.nextElementSibling.style.maxHeight = '1000px'
  } // End if else
}
