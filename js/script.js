var buttonPrev = document.querySelector(".btn_prev"),
    buttonNext = document.querySelector(".btn_next"),
    sliderImages = document.querySelectorAll(".slider img"),
    i = 0;

var link_log = document.querySelector(".header-feedback_link"),
    popup = document.querySelector(".modal-content"),
    closer = popup.querySelector(".modal-content-close");

buttonNext.addEventListener("click",function() {  
    sliderImages[i].className = "";
    i++;    
    if (i >=sliderImages.length) {
        i = 0;
    }
    sliderImages[i].className = "show";
});

buttonPrev.addEventListener("click",function() {  
    sliderImages[i].className = "";
    i--;    
    if (i < 0) {
        i = sliderImages.length - 1;
    }
    sliderImages[i].className = "show";
});

//------------------------------------//

link_log.addEventListener("click", function (event) {
	event.preventDefault();
    popup.classList.add("modal-content-show");
});

closer.addEventListener("click", function (event) {
	event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});


//------------------------------------//

var overlay = document.querySelector(".modal-overlay");

link_log.addEventListener("click", function (event) {
	event.preventDefault();
    overlay.classList.add("modal-overlay-show");
});

//------------------------------------//

var mobileMenu = document.querySelector(".menu-mobile"),
    menuList = document.querySelector(".menu-list");

mobileMenu.addEventListener("click", function (event) {
	event.preventDefault();
    menuList.classList.toggle("menu-show_js");
});