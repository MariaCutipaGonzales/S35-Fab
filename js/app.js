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
        300:{
            items:2,
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

var array_img_carousel = document.getElementsByClassName("item");
console.log(array_img_carousel);

for(var i=0; i<array_img_carousel.lenght;i++){
    array_img_carousel[i].addEventListener("click", function(){
     console.log("hola");
    });
}