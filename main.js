let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let addToCartBtn =document.querySelector('.input__button');
let cartNotification = document.querySelector('.header__cart--notification');

let iconCart = document.querySelector('.header__cart__icon');
let cartModalEmpty = document.querySelector('.cart-modal__price-empty');
let cartModal = document.querySelector('.cart-modal');
let cartModalCheck = document.querySelector ('.cart-modal__checkout-container');
let priceModal = document.querySelector('.cart-modal__price');
let iconDelete = document.querySelector('.cart-modal__icon-delete')

let userInputNumber = 0;

///////////////// menu plegable //////////////////
const menuIcon = document.querySelector('.header__menu');
const menuMovile = document.querySelector('.modal-navbar__background');
const menuClose =document.querySelector('.modal-navbar__close-icon');

menuIcon.addEventListener('click', ()=>{
    menuMovile.style.display = 'block'
})

menuClose.addEventListener('click', ()=>{
    menuMovile.style.display = 'none'
})


/////////////// fin ///////////////
//Cantidad de compra//
minusBtn.addEventListener('click', ()=>{
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }else{
        userInputNumber--;
    }
    userInput.value = userInputNumber;
});

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});
//fin//

//Boton confirmar compra//
addToCartBtn.addEventListener('click', ()=>{
    if(userInputNumber > 0){
        cartNotification.innerText = userInputNumber;
        cartNotification.style.display = 'block'
        priceModal.innerHTML = `$125 x ${userInputNumber} <span class="cart-modal__tootal-price">$${userInputNumber*125}.00</span>`
        userInputNumber = 0;
        userInput.value = userInputNumber;
    }

    if(cartNotification.innerHTML == 0){
        cartModalEmpty.style.display= 'block'
        cartModalCheck.style.display= 'none'
    }else{
        cartModalEmpty.style.display= 'none'
        cartModalCheck.style.display= 'block'
    }
});
//fin//

/////////////////////////////////// carrito - modal ///////////////////////////////////
iconCart.addEventListener('click',()=>{
    cartModal.classList.toggle('block');

});

 iconDelete.addEventListener('click', ()=>{
    priceModal.innerText = 'You cart is empty.'
    cartNotification.innerText = 0
    cartNotification.style.display = 'none'
 })
/////////////////////////////////// class="cart-modal__tootal-price" ///////////////////////////////////

/////////////////////////////////// slider ///////////////////////////////////
let imgContMovil = document.querySelector('.gallery__imag-container__movil');
const previusImg = document.querySelector('.gallery__previus__movil');
const nextImg = document.querySelector('.gallery__next__movil');
let i = 1;
let rotar =true;

nextImg.onclick = sliderModal;
previusImg.onclick = sliderModal;

/////////////////////////////////// slider fin /////////////////////////////////// 

const viewImg = document.querySelector('.modal-gallery');
let imgCont = document.querySelector('.galerry__imag-container');
let closeImg = document.querySelector('.modal-gallery__close');
let previus = document.querySelector ('.modal-gallery__previus')
let next = document.querySelector ('.modal-gallery__next')
let viewBc = document.querySelector('.modal-galerry__imag-container')

imgCont.addEventListener('click', ()=>{
    viewImg.style.display = 'block' ;
})

closeImg.addEventListener('click', ()=>{
    viewImg.style.display = 'none'
})

previus.onclick = sliderDesktop;
next.onclick = sliderDesktop;

////////////////////////// fin ////////////////////////

//////////////////// cambio de imagen /////////////////
let galeryThumbnails =document.querySelectorAll('.gallery__thumbnail');

galeryThumbnails = [...galeryThumbnails];
galeryThumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click', event=>{
        imgCont.style.backgroundImage = `url(./images/image-product-${event.target.id}.jpg)`;
    })
})

let bcThumbnails =document.querySelectorAll('.modal-gallery__thumbnail');

bcThumbnails = [...bcThumbnails];
bcThumbnails.forEach(bcThumbnail =>{
    bcThumbnail.addEventListener('click', event=>{
        viewBc.style.backgroundImage = `url(./images/image-product-${event.target.id.slice(-1)}.jpg)`;
    })
})

/////////////////funciones/////////////
function sliderModal (){
       if(rotar){
        i ++;
       }else{
        i --;
      }
    if(i == 4|| i ==1){
          rotar= !rotar;
      }  
      imgContMovil.style.backgroundImage = `url(./images/image-product-${i}.jpg)`;
}

function sliderDesktop (){
    if(rotar){
        i ++;
       }else{
        i --;
      }
    if(i == 4|| i ==1){
          rotar= !rotar;
      }  
      viewBc.style.backgroundImage = `url(./images/image-product-${i}.jpg)`;
}