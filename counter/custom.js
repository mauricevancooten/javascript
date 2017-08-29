'use strict'

const counter = document.getElementById('counter')
let count = 0;

setInterval( () => {
  if ( count <= 1200) {
    counter.innerHTML = count
    count++;
  }
}, .01);
