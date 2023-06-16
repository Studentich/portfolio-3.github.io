//Меню бургер

var burgerMenu = document.querySelector('.header__menu');
var nav = document.querySelector('.nav');
if (burgerMenu) {
   burgerMenu.addEventListener("click", function(e){
      document.body.classList.toggle('lock');
      burgerMenu.classList.toggle('active');
      nav.classList.toggle('active');
   })
}
