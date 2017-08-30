'use strict'

const gallery = document.querySelector('.gallery')

window.addEventListener('scroll', () => {
  if (isAnyPartOfElementInViewport(gallery)) {
    gallery.classList.remove('is-paused')
  }
})

// Is any part of element in view port? https://gist.github.com/davidtheclark/5515733

function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth)
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)
    return (vertInView && horInView)
}
