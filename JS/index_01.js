//              Menu Mobile 

let BtnMobile = document.querySelector('.btnMenu');
let divMenuMobile = document.querySelector('.mobileMenu');

BtnMobile.addEventListener('click',function(){
    BtnMobile.classList.toggle("menu");
    divMenuMobile.classList.toggle("hidden")
    divMenuMobile.classList.toggle("show");
});

BtnMobile.addEventListener('toch',function(){
    BtnMobile.classList.toggle("menu");
    divMenuMobile.classList.toggle("hidden")
    divMenuMobile.classList.toggle("show");
});
