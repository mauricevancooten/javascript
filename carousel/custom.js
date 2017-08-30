'use strict'

window.onload = () => {

  const slideShow = document.getElementById('slide-show')
  const div = slideShow.querySelectorAll('div')

  // Set the minimum width (slideshow width) and transition to each div

  let width = slideShow.clientWidth

  for (let i; i < div.length; i++) {
    div[i].style.cssText = `min-width: ${width}px;`
  }

  // Set the height of the slideshow to the height of the first div

  let height = div[0].clientHeight
  slideShow.style.height = `${height}px`

  // Set divs in a row

  let count = 0;

  for (let i = 0; i < div.length; i++) {
    div[i].style.left = `${ (i * width) - ((count) * width)}px`
  }

  // Prev, next buttons

  let prev = document.createElement('a')
  let next = document.createElement('a')
  prev.innerHTML = '< prev'
  next.innerHTML = 'next >'
  prev.classList.add('prev')
  next.classList.add('nxt')
  prev.setAttribute('href', '#')
  next.setAttribute('href', '#')
  slideShow.appendChild(prev)
  slideShow.appendChild(next)

  activeLinks()

  next.addEventListener('click', (e) => {
    e.preventDefault()
    if (count < (div.length - 1)) {
      count += 1;
      for (let i = 0; i < div.length; i++) {
        div[i].style.cssText = `left: ${ (i * width) - ((count) * width)}px; transition: 1s;`
      }
    }
    activeLinks()
  })

  prev.addEventListener('click', (e) => {
    e.preventDefault()
    if (count > 0) {
      count -= 1;
      for (let i = 0; i < div.length; i++) {
        div[i].style.cssText = `left: ${ (i * width) - ((count) * width)}px; transition:1s;`
      }
    }
    activeLinks()
  })

  // Check for prev or next image

  function activeLinks() {
    // Disable prev button if on first slide
    if (count === 0) {
      prev.style.opacity = .5
      prev.removeAttribute('href', '#')
    } else {
      prev.setAttribute('href', '#')
      prev.style.opacity = 1
    }
    // Disable next button if on last slide
    if (count === (div.length - 1)) {
      next.style.opacity = .5
      next.removeAttribute('href', '#')
    } else {
      next.setAttribute('href', '#')
      next.style.opacity = 1
    }
  }

  // Maintain responsive design on window resize

  window.addEventListener('resize', (e) => {
    e.preventDefault
    // Recalculate width
    width = slideShow.clientWidth
    // Resize each div
    for (let i = 0; i < div.length; i++) {
      div[i].cssText = `transition: 1s; min-width: ${width}px`
      // Wait for width before resetting height
      setTimeout(() => {
        height = div[0].clientHeight
        slideShow.style.height = `${height}px`
      }, 1000)
      // Wait for height before resetting width
      setTimeout(() => {
        width = slideShow.clientWidth
        div[1].style.left = `${width}px`
        for (let i = 0; i < div.length; i++) {
          div[i].style.left = `${ (i * width) - ((count) * width)}px`
        }
      }, 1500)
    }
  })

}
