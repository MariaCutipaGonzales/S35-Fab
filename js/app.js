$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
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

