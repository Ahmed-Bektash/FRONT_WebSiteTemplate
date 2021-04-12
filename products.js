const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const ProductCards = document.querySelectorAll('.product-card');

menu.addEventListener('click',()=>{
menu.classList.toggle('isActive');
menuLinks.classList.toggle('active');
});




/************************Products************************************/



ProductCardsArr = Array.prototype.slice.call(ProductCards); //convert node list to an array
   
ProductCardsArr.forEach(card => {
    
    card.addEventListener('mouseover',(e)=>{
        e.stopPropagation();
        AddProductInfo(e);
    });

    card.addEventListener('click',(e)=>{
        
        e.stopPropagation();
        AddProductInfo(e);
    });
    // card.addEventListener('mouseout',(e)=>{
    //     e.stopPropagation();
    //     RemoveProductInfo(e);
        
    // });

}); 

function AddProductInfo(e){
  try{ const targetClass = e.target.nextElementSibling.classList[0];
   const target=e.target.nextElementSibling;
//    console.log(e.target.classList[0]);
   //console.log(e.target.parentNode.nextElementSibling.classList[0]);
if(targetClass=='product' ){
    target.classList.add('active');
    // console.log(target.classList);
   setTimeout(()=>{
        target.classList.remove('active'); 
    },2000);
   
    
}
if((e.target.tagName == 'H3') || (e.target.tagName == 'H4') || (e.target.tagName == 'P')){
    e.target.parentNode.classList.add('active');
    setTimeout(()=>{
        e.target.parentNode.classList.remove('active'); 
    },2000);
}
}catch(e){
    //do nothing
} 

}

// function RemoveProductInfo(e){
//     try{ const targetClass = e.target.nextElementSibling.classList[0];
//         const target=e.target.nextElementSibling;
//         // console.log(e.target.classList[0]);
//         //console.log(e.target.parentNode.nextElementSibling.classList[0]);
//      if(targetClass=='product'){
//          target.classList.remove('active');
//          // console.log(target.classList);
//      //    setTimeout(()=>{
//      //         target.classList.remove('active'); 
//      //     },2000);
         
//      }}catch(e){
//          //do nothing
//      }
     
//  }