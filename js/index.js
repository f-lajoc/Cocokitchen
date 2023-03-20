const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const contAiner = document.querySelector(".container");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show(){
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
  contAiner.style.zIndex = "-10";
  
}

function close(){
 mainMenu.style.top = "-100%";
 contAiner.style.zIndex = "10";
 }
