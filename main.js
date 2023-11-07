document.addEventListener("DOMContentLoaded", function() {

let header = document.querySelector(".header-media");
let relleno = document.querySelector(".relleno")
let faBars = document.querySelector(".fa-bars")
let nav = document.querySelector(".nav")
let navAbierto = false;
let abriendoNav = false;

document.querySelector(".fa-bars").addEventListener("click", abrir)
document.querySelector(".fa-x").addEventListener("click", cerrar)

function abrir(e){
    abriendoNav = true;
    e.target.style.animation = "none";
    void e.target.offsetWidth;
    e.target.style.animation = "rotate 4s linear";
    relleno.style.animation = "fadeOutUp 3s";
    header.style.animation = "fadeOutUp 3s";
    nav.style.animation= "normal fadeInLeft 1s"
    
    setTimeout(function(){
        relleno.classList.add("shadow-")
        header.classList.add("shadow-")
        nav.style.display = "block"
        relleno.classList.remove("visible")
        header.classList.remove("visible")
        navAbierto = true;
        abriendoNav = false;
    },2000)
}
function cerrar(e){
    cerrandoNav = true;
    nav.style.animation = "normal fadeOutLeft 2s"
    relleno.style.animation = "none";
    header.style.animation = "none";
    header.style.animation = "fadeInDown 2s"
    relleno.style.animation = "fadeInDown 2s"
    relleno.classList.remove("shadow-")
    header.classList.remove("shadow-")
    relleno.classList.add("visible")
    header.classList.add("visible")
    
    setTimeout( function(){
        nav.style.display = "none"
        nav.style.animation = "none"
        navAbierto = false;
    }, 2000);
}

document.querySelector("body").addEventListener("click", (e)=>{
    if(nav.style.display = "block" && navAbierto)cerrar();
})

});
