var accordion = document.querySelectorAll('.accordion'),
    content = document.querySelector('.content'),
    allContent = document.querySelectorAll('.content');

for (var i = 0; i < allContent.length; i++) {
    allContent[i].style.maxHeight = 0;
}

for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.maxHeight = 0;
        }
        for (var i = 0; i < accordion.length; i++) {
            accordion[i].classList.remove('active');
        }
        this.classList.add('active');
        this.nextElementSibling.style.maxHeight = '1000px';
    });
};
