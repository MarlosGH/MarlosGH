document.getElementById("buttonVerInfo").addEventListener("click", function() {
    let sobreMiSection = document.getElementById("sobre-mi");
    sobreMiSection.scrollIntoView({ behavior: "smooth" });
});
let header = document.querySelector(".header-media");
let relleno = document.querySelector(".relleno")
document.querySelector(".fa-bars").addEventListener("click", (e)=>{
    e.target.style.animation = "none";
    void e.target.offsetWidth;
    e.target.style.animation = "rotate 2s linear";
    e.target.style.translate = "0 -30px"
    relleno.style.animation = "desaparecer 2s";
    header.style.animation = "desaparecer 2s";
    document.querySelector(".nav").style.animation= "normal fadeInLeft 1s"
    setInterval(function(){
        relleno.classList.add("shadow-")
        header.classList.add("shadow-")
        header.style.animation = "none"
        relleno.style.animation = "none"
        document.querySelector(".nav").style.display = "block"
    },2000)
})

