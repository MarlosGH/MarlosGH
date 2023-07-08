const openButtonMenu = document.querySelector(".fa-bars")
openButtonMenu.addEventListener("click", function(){
  const nav = document.querySelector(".nav")
  nav.style.display = "block"
  document.querySelector(".header-").style.display = "none"
  const closeButtonMenu = document.querySelector(".fa-x")
  closeButtonMenu.addEventListener("click", (e)=>{
    nav.style.display = "none"
    document.querySelector(".header-").style.display = "block"
  })

})

