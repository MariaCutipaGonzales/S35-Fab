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

array_img_carousel[1].addEventListener("click",function(){
    console.log(this);
    var src = this.firstElementChild.getAttribute("src");
    console.log(src);
    sessionStorage.setItem("url-img", src);
    window.location = "item.html";
    
});
/*for(var i=0; i<array_img_carousel.lenght;i++){
    array_img_carousel[i].onclick = function(){
     console.log("hola");
    };
}*/

