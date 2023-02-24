window.onload = function(){
    let openMenu = document.querySelector(".open-menu");
    let menu = document.querySelector(".menu");
    let closeMenu = document.querySelector(".close-menu");
    let openMenuOne = document.querySelector(".open-menu-1");
    let openMenuTwo = document.querySelector(".open-menu-2");
    let arrowOne = document.querySelector(".arrow-1");
    let arrowTwo = document.querySelector(".arrow-2");
    let menuOne = document.querySelector(".menu-1"); 
    let menuTwo = document.querySelector(".menu-2");
    let mainBody = document.querySelector(".main-body"); 
    let image = document.querySelector(".image");
    let first = document.querySelector(".first");
    
    if(window.matchMedia("(min-width:1024px)").matches){
        image.setAttribute("src","images/image-hero-desktop.png");
    }

    openMenuOne.addEventListener("click",()=>{
        menuOne.classList.toggle("show-menu-1");
        arrowOne.classList.toggle("arrowup");
    })
    openMenuTwo.addEventListener("click",()=>{
        menuTwo.classList.toggle("show-menu-2");
        arrowTwo.classList.toggle("arrowup");
    })
    openMenu.addEventListener("click",()=>{
        menu.style.width = "65%";  
        mainBody.style.filter = "brightness(0.3)";
        mainBody.style.backgroundColor = "rgba(0,0,0,0.7)";
        closeMenu.style.transform = "rotateZ(360deg)";  
              
    })
    closeMenu.addEventListener("click",()=>{
        menu.style.width = "0%";
        mainBody.style.backgroundColor = "white";
        mainBody.style.filter = "brightness(1)";
        closeMenu.style.transform = "rotateZ(0deg)";  
    })
    
    
    //click outside menu to close menu
    document.addEventListener("click",(e)=>{
         if(window.matchMedia("(min-width:1024px)").matches){
             return
         }
        let menuOpen = e.target.matches("[data-open-menu]")
        if(!menuOpen && e.target.closest("[data-menu]") == null){
        menu.style.width = "0%";
        mainBody.style.backgroundColor = "white";
        mainBody.style.filter = "brightness(1)";
        closeMenu.style.transform = "rotateZ(0deg)"; 
        }
    }) 
    
    }
    