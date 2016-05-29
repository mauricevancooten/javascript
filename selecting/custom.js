// Get element by tag name

document.querySelector('h1').style.backgroundColor = 'pink';

// Get element by id

document.querySelector('#foo').style.backgroundColor = 'pink';

// Get element by class name

document.querySelector('.bar').style.backgroundColor = 'pink';

// Apply multiple CSS statements at once

document.querySelector('.quux').style.cssText = 'background: pink; color: red;';

// Apply a class

document.querySelector('.baz').classList.add("foo");	