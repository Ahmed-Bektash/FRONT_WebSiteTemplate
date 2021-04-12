const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const cards = document.querySelectorAll('.card');
const PersonImgs= document.querySelectorAll('.person-img-container');
const persons = document.querySelectorAll('.person');


menu.addEventListener('click',()=>{
    menu.classList.toggle('isActive');
    menuLinks.classList.toggle('active');
    });
    
    /********first card!! *************/
    cards[0].addEventListener('mouseover',()=>{
        PersonImgs[0].classList.add('img-active');
        persons[0].classList.add('person-active');
        cards[0].classList.add('card-active');
        });
    
    cards[0].addEventListener('mouseout',()=>{
    
        
            PersonImgs[0].classList.remove('img-active');
            persons[0].classList.remove('person-active');
            cards[0].classList.remove('card-active');
         
        
    
    });
    
    /**************Second Card*************** */
    cards[1].addEventListener('mouseover',()=>{
        PersonImgs[1].classList.add('img-active');
        persons[1].classList.add('person-active');
        cards[1].classList.add('card-active');
        });
    
    cards[1].addEventListener('mouseout',()=>{
        
            PersonImgs[1].classList.remove('img-active');
        persons[1].classList.remove('person-active');
        cards[1].classList.remove('card-active');
        
    
    });
    
    
    /******************Third Card******************* */
    // cards[2].addEventListener('mouseover',()=>{
    //     PersonImgs[2].classList.add('img-active');
    //     persons[2].classList.add('person-active');
    //     cards[2].classList.add('card-active');
    //     });
    
    // cards[2].addEventListener('mouseout',()=>{
    // PersonImgs[2].classList.remove('img-active');
    // persons[2].classList.remove('person-active');
    // cards[2].classList.remove('card-active');
    // });
    