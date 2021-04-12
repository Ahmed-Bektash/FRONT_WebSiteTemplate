const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const ProductCards = document.querySelectorAll('.product-card');

menu.addEventListener('click',()=>{
menu.classList.toggle('isActive');
menuLinks.classList.toggle('active');
});

