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

