var nav = document.querySelector('.nav-collapse'),
  navList = nav.firstElementChild,
  link = document.createElement('a');

nav.appendChild(link);
link.classList.add('hamburger');
link.innerHTML = '<span>Menu</span>';

var hamburger = document.querySelector('.hamburger');

navList.classList.add('accessibly-hidden');

hamburger.addEventListener('click', function(e) {

  e.preventDefault();
  navList.classList.toggle('accessibly-hidden');

});
