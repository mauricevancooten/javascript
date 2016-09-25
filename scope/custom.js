var circle = document.querySelector('.example'),
    redButton = document.querySelector('.red-button'),
    orangeButton = document.querySelector('.orange-button');;

(function() {

    var colour = 'crimson';

    redButton.addEventListener('click', function() {
        circle.style.backgroundColor = colour;
    });

})();

(function() {

    var colour = 'orange';

    orangeButton.addEventListener('click', function() {
        circle.style.backgroundColor = colour;
    });

})();
