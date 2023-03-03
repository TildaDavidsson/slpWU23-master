let layer = document.querySelector(".fade-layer").addEventListener("click",showMenu)
let button = document.querySelector(".menu-button").addEventListener("click",showMenu)


function showMenu(){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
} 