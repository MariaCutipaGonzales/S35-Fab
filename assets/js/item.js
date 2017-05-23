window.addEventListener("load", function(){
	/*obtneer  src con localStorage*/
	var divImgCarrito = document.getElementById("img-carrito");
	var url = sessionStorage.getItem("url-img");
	divImgCarrito.firstElementChild.setAttribute("src",url);

	/*obtener src dando click*/
	var agregarCarrito = document.getElementById("agregar");
	agregarCarrito.addEventListener("click", function(){
		var src = document.getElementById("img-local").getAttribute("src");
		console.log(src);
		var imgBag = document.getElementById("img-carrito-min").firstElementChild;
		imgBag.setAttribute("src", src);
	});
});