var scrollBar = document.querySelector('.scroll-bar'),
  body = document.querySelector('body'),
  height = body.clientHeight,
  percentage = 0;

scrollBar.style.width = percentage + "%"

window.addEventListener('scroll', function() {

  percentage = ((this.pageYOffset + this.innerHeight) / height) * 100

  scrollBar.style.width = percentage + "%"

});
