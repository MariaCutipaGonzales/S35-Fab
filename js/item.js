var div_img_carrito = document.getElementById("img-carrito");
var url = sessionStorage.getItem("url-img");
div_img_carrito.firstElementChild.setAttribute("src",url);