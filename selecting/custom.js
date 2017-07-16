'use strict'

// Get element by tag name
document.querySelector('h1').style.backgroundColor = 'pink'
  // Get element by id
document.querySelector('#foo').style.backgroundColor = 'pink'
  // Get element by class name
document.querySelector('.bar').style.backgroundColor = 'pink'
  // Apply multiple CSS statements at once
document.querySelector('.quux').style.cssText = 'background: pink; color: red;'
  // Apply a class
document.querySelector('.baz').classList.add('foo')
  // Selecting a specific element within multiple elements
const p = document.querySelectorAll('p')
p[4].style.color = 'red'
  // Selecting multiple elements
const h2 = document.querySelectorAll('h2')
for (var i = 0; i < h2.length; i++) {
  h2[i].style.color = '#cccccc'
}
