$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },

        400:{
            items:1.5,
            nav:false
        },

        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true
        }
    }
})
});

/*Colocando las flechas al carousel*/
window.addEventListener("load", function(){
    var next = document.getElementsByClassName("owl-next");
    var prev = document.getElementsByClassName("owl-prev");

    for (var i = 0; i < next.length; i++) {
        next[i].innerHTML = "";
        next[i].classList.add("fa");
        next[i].classList.add("fa-angle-right");

        prev[i].innerHTML = "";
        prev[i].classList.add("fa");
        prev[i].classList.add("fa-angle-left");
    }
});

/*Mostar el producto y su descripcion*/
var array_img_carousel = document.getElementsByClassName("item");

for(var i=0; i<array_img_carousel.length; i++){
    array_img_carousel[i].addEventListener("click",function(){
    console.log(this);
    var src = this.firstElementChild.getAttribute("src");
    console.log(src);
    sessionStorage.setItem("url-img", src);
    window.location = "index.html";
    });
}

