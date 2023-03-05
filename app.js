//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
	if(menu_visible==false){
		menu.style.display = "block";
		menu_visible = true;
	}
	else{
		menu.style.display = "none";
		menu_visible = false;
	}
}

//ocultar menu una vez seleccionada una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; links.length;x++){
	links[x].onclick = function(){
		menu.style.display = "none";
		menu_visible = false;
	}
}

//Modo oscuro/claro
function activarModoOscuro(){
	let main_body = document.body;
	main_body.classList.toggle("dark-mode");
}
