 var content = document.querySelectorAll('.content'),
     tabLink = document.querySelectorAll('.tab');

 for (var i = 1; i < content.length; i++) {
     content[i].classList.add('hide-text');
 }

 for (var i = 0; i < tabLink.length; i++) {
     tabLink[0].classList.add('active');
     tabLink[i].addEventListener('click', function(e) {
         e.preventDefault();
         for (var i = 0; i < tabLink.length; i++) {
             tabLink[i].classList.remove('active');
         }
         this.classList.add('active');
         for (var i = 0; i < content.length; i++) {
             content[i].classList.add('hide-text');   
         }
         var tabId = this.getAttribute('href');
         // console.log(tabId);
         document.querySelector(tabId).classList.remove('hide-text');
     });
 };
