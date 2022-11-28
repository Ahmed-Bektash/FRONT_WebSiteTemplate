const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const cards = document.querySelectorAll('.card');
const PersonImgs= document.querySelectorAll('.person-img-container');
const persons = document.querySelectorAll('.person');


menu.addEventListener('click',()=>{
    menu.classList.toggle('isActive');
    menuLinks.classList.toggle('active');
    });
    
cards.forEach((card,index) => {

    card.addEventListener('mouseover',()=>{
        PersonImgs[index].classList.add('img-active');
        persons[index].classList.add('person-active');
        card.classList.add('card-active');
        });
    
    card.addEventListener('mouseout',()=>{
        PersonImgs[index].classList.remove('img-active');
        persons[index].classList.remove('person-active');
        card.classList.remove('card-active');
    });

})
    