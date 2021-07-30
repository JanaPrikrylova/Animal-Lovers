// -------------------- Navigation ---------------------

const btnElm = document.querySelector(".navigation__btn");
const navElm = document.querySelector("nav");
const aElm = document.querySelectorAll("a");

const navigation = () => {
  navElm.classList.toggle("nav-closed");
}

btnElm.addEventListener('click', navigation);

for(let i = 0; i < aElm.length; i++) {
  aElm[i].addEventListener("click", navigation);
}

// ------------------- Header - photos -------------------

const homeElm = document.querySelector(".home");
const imgElm = document.querySelectorAll(".gallery__photo");
const homeNameElm = document.querySelector(".home__name-2");

imgElm[0].addEventListener("click", () => {
  homeElm.style.backgroundImage = "url(images/lion.jpg)";
  homeNameElm.textContent = "Lion";
})

imgElm[1].addEventListener("click", () => {
  homeElm.style.backgroundImage = "url(images/zebra.jpg)";
  homeNameElm.textContent = "Zebra";
})

imgElm[2].addEventListener("click", () => {
  homeElm.style.backgroundImage = "url(images/tyger.jpg)";
  homeNameElm.textContent = "Tyger";
})

// ----------------------------------------------------

let span = document.getElementsByClassName('species__span');
let product = document.getElementsByClassName('species__item');
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 60;

// Mobile_view	

let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
 {
  movePer = 53;
  maxMove = 225;
 }


 let mob_view1 = window.matchMedia("(max-width: 360px)");
 if (mob_view1.matches)

  {
    movePer = 105;
    maxMove = 600;
  }

let right_mover = ()=>{
  l = l + movePer;
  if (product == 1){l = 0; }
  for(const i of product)
  {
    if (l > maxMove){l = l - movePer;}
    i.style.left = '-' + l + '%';
  }

}
let left_mover = ()=>{
  l = l - movePer;
  if (l<=0){l = 0;}
  for(const i of product){
    if (product_page>1){
      i.style.left = '-' + l + '%';
    }
  }
}
span[1].onclick = ()=>{right_mover();}
span[0].onclick = ()=>{left_mover();}