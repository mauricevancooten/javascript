'use strict'

window.onload = function() {
  
var slideShow, div, prev, next, width, height, count

slideShow = document.querySelector('.slide-show')
div = slideShow.querySelectorAll('div')

// Set the minimum width (slideshow width) and transition to each div

width = slideShow.clientWidth

for (var i; i < div.length; i++) {
  div[i].style.cssText = 'min-width:' + width + 'px;'
}

// Set the height of the slideshow to the height of the first div

height = div[0].clientHeight
slideShow.style.height = height + 'px'

// Set divs in a row

count = 0;

for (var i = 0; i < div.length; i++) {
  div[i].style.left = (i * width) - ((count) * width) + 'px'
}

// Prev, next buttons

prev = document.createElement('a'),
  next = document.createElement('a')
prev.innerHTML = '< prev'
next.innerHTML = 'next >'
prev.classList.add('prev')
next.classList.add('nxt')
prev.setAttribute('href', '#')
next.setAttribute('href', '#')
slideShow.appendChild(prev)
slideShow.appendChild(next)

activeLinks()

next.addEventListener('click', function(e) {
  e.preventDefault
  if (count < (div.length - 1)) {
    count += 1;
    for (var i = 0; i < div.length; i++) {
      div[i].style.cssText = 'left:' + ((i * width) - ((count) * width)) + 'px; transition: 1s;'
    }
  }
  activeLinks()
})

prev.addEventListener('click', function(e) {
  e.preventDefault
  if (count > 0) {
    count -= 1;
    for (var i = 0; i < div.length; i++) {
      // div[i].style.left = (i * width) - ((count) * width) + 'px'
      div[i].style.cssText = 'left:' + ((i * width) - ((count) * width)) + 'px; transition:1s;'
    }
  }
  activeLinks()
})

// Check for prev or next image

function activeLinks() {
  // Disable prev button if on first slide
  if (count == 0) {
    prev.style.opacity = .5
    prev.removeAttribute('href', '#')
  } else {
    prev.setAttribute('href', '#')
    prev.style.opacity = 1
  }
  // Disable next button if on last slide
  if (count == (div.length - 1)) {
    next.style.opacity = .5
    next.removeAttribute('href', '#')
  } else {
    next.setAttribute('href', '#')
    next.style.opacity = 1
  }
}

// Maintain responsive design on window resize

window.addEventListener('resize', function(e) {
  e.preventDefault
    // Recalculate width
  width = slideShow.clientWidth
    // Resize each div
  for (var i = 0; i < div.length; i++) {
    div[i].cssText = 'transition: 1s; min-width:' + width + 'px;'
      // Wait for width before resetting height
    setTimeout(function() {
        height = div[0].clientHeight
        slideShow.style.height = height + 'px'
      }, 1000)
      // Wait for height before resetting width
    setTimeout(function() {
      width = slideShow.clientWidth
      div[1].style.left = width + 'px'
       for (var i = 0; i < div.length; i++) {
        div[i].style.left = (i * width) - ((count) * width) + 'px'
      }
    }, 1500)
  }
})

}