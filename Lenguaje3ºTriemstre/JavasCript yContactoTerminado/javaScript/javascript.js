/*Declaramos e inicializamos las variables q contiene los parrafos a mostrar segun
la elecion q se haga en la funcion q les sigue*/
	var parrafoP0 = "Pez de agua dulce.";
	var parrafoP1="El pez betta (Betta Splendens) es también conocido como pez luchador de Siam." + 
	",  son también populares en Tailandia, Vietnam, Camboya y Laos.";  
	var parrafoP2="El guppy (Poecilia reticulata) también conocido como lebistes o pez millón,"; 
	var parrafoP3="El pez Ángel o pez Escalar, Pterophyllun scalare, es un pez de la familia de los cíclidos de agua dulce y caliente."; 
	var parrafoP4="Como son peces agresivos no pueden vivir en conjunto con otros de su misma especie ya que tienden a pelear.";
	var parrafoP5="Son bastante pacíficos, aunque hay que tener cuidado con sus acompañantes, ya que tienden a morder sus grandes y coloridas colas.";
	var parrafoP6="Son muy apreciados, porque poseen un comportamiento muy pacífico. ";
	var reset =" ";
	var parrarfoOpcion="Por favor elija una opcion";

/*Script para el select */
	function miFuncion (){		
/*En la variable opcion almacenaremos la id del select, cuando se eliga una opcion 
esta varible se igualara a los value de la opcion selecionada*/		
		var opcion = document.getElementById("opcionElegida").value;

//mediante un if podemos hacer que muestre los diferentes parrafos segun eleccion

if (opcion == "opcion") {
	document.getElementById("parrafoElegirOpcion").innerHTML = parrarfoOpcion;
	document.getElementById("parrafo").innerHTML = reset;
	document.getElementById("parrafo0").innerHTML = reset;
	document.getElementById("parrafo1").innerHTML = reset;
}

if (opcion == "Betta blanco") {
	document.getElementById("parrafoElegirOpcion").innerHTML = reset;
	document.getElementById("parrafo").innerHTML = parrafoP1;
	document.getElementById("parrafo0").innerHTML = parrafoP0;
	document.getElementById("parrafo1").innerHTML = parrafoP4;
}
if (opcion == "Guppy multicolor") {
	document.getElementById("parrafoElegirOpcion").innerHTML = reset;
	document.getElementById("parrafo0").innerHTML = parrafoP0;
	document.getElementById("parrafo").innerHTML = reset;
	document.getElementById("parrafo").innerHTML = parrafoP2;
	document.getElementById("parrafo1").innerHTML = reset;
	document.getElementById("parrafo1").innerHTML = parrafoP5;


}
if (opcion == "Escalar blanco") {
	document.getElementById("parrafoElegirOpcion").innerHTML = reset;
	document.getElementById("parrafo0").innerHTML = parrafoP0;
	document.getElementById("parrafo").innerHTML = reset;
	document.getElementById("parrafo").innerHTML = parrafoP3;
	document.getElementById("parrafo1").innerHTML = reset;
	document.getElementById("parrafo1").innerHTML = parrafoP6;
}		
	/*Salida de ventana por pantalla*/
	alert("Has selecionado " + opcion);			
}



/*Script de imagen oculta*/

function mostrar(id){

	var objeto = document.getElementById(id)

        objeto.style.display = "block";

}


function ocultar(id){

    var objeto = document.getElementById(id)

        objeto.style.display = "none";

}

/*Funcion para cambiar el color de del body mediante un imput
Lo que hacemos es almacenar en una variable el valor de la opcion elegida, y luego aplicamos dicho valor en el body 
con el document.body.style...*/ 
	function colorChangue(){
		var selectValue=document.getElementById("seleccion").value;
		document.body.style.backgroundColor=selectValue;
	}

//Todos los elementos a los que les vamos a cambiar el fontSize
const elementsList = document.getElementsByTagName('p');


function getElementFontSize(element){
  //getComputedStyle nos devuelve las propiedades css de cada párrafo(elemento)
  const elementFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(elementFontSize);  //Devolvemos el total de pixeles
}

function cambiarTexto(operador) {
   for(let element of elementsList) {
     //Obtener el total de pixel de cada párrafo.
     const currentSize = getElementFontSize(element);
     
     //Restar o sumar, dependiendo del operador.
     const newFontSize = (operador === '+' ? (currentSize + 1) : (currentSize - 1)) + 'px';
     //Aplicarle al parrafo actual el tamaño anterior 1px más.
     element.style.fontSize = newFontSize
   }
}

/*Funcion para cambiar color de texto*/
/*Asigamos diferentes variables para cada parrafo que vayamos a cambiar por medio del id, finalmente
con style.color =opcion aplicamos la opcion elegida en el select*/
function color(opcion) {
  var parrafo1=document.getElementById('parrafo1');
 var parrafo=document.getElementById('parrafo');

 parrafo1.style.color=opcion;
 parrafo.style.color=opcion;


}



/*function cambiarColor(opcion){/*Pasamos el select valu por aqui por medio de thisvalue
	var colorLetra=document.getElemntById('parrafoP0');/*Asignamos la variable colorLetra como la id del parrafo
	colorLetra.style.color=opcion;/*mediante este metodo cambiamos colorLetra al value del la seleccion elegida*/

//}