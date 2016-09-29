var button = document.createElement('button'),
    more = document.querySelector('.more'),
    height = more.clientHeight,
    visible = false;

// console.log(height);
more.style.maxHeight = 0;

button.classList.add('show-more');
button.innerHTML = 'Read more...';
more.parentNode.insertBefore(button, more.nextSibling);

var buttonShow = document.querySelector('.show-more');

buttonShow.addEventListener('click', function() {

    if (!visible) {
        button.innerHTML = 'Show less...';
        more.style.transition = 1 + 's';
        more.style.maxHeight = height + 'px';
    } else {
        button.innerHTML = 'Read more...';
        more.style.maxHeight = 0;
    }

    visible = !visible;

});
