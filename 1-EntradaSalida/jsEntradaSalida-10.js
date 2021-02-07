/*
Andrea Briceño 

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Ejercicio 10 bis

*/
function mostrarAumento()
{
	let importe; 
	let resultado; 
	let descuento; 
	let porcentaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	porcentaje = prompt("Inserte un porcentaje")

	descuento = (importe * porcentaje) / 100;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;


}
