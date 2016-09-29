var open = document.createElement('button'),
    close = document.createElement('button'),
    modal = document.querySelector('.overlay'),
    modalContent = document.querySelector('.overlay-content'),
    html = document.querySelector('html');

open.classList.add('.show');
open.innerHTML = 'Open';
close.classList.add('.close');
close.innerHTML = 'Close';

modalContent.appendChild(close);
modal.parentNode.insertBefore(open, modal);

html.classList.add('js');
modal.classList.add('hide-text');

close.addEventListener('click', function() {

    modal.classList.add('hide-text');

});

open.addEventListener('click', function() {

    modal.classList.remove("hide-text");

});
