/*
Andrea Briceño 

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

EJERCICIO 9 bis
*/
function mostrarAumento()
{
	let sueldo ;
	let resultado ;
	let aumento; 
	let porcentaje; 

	sueldo = document.getElementById("txtIdSueldo").value;
 	sueldo = parseInt(sueldo);
	
	porcentaje = prompt("Inserte un porcentaje:")

	aumento = (sueldo * porcentaje) / 100;
	resultado = aumento + sueldo ;

	document.getElementById("txtIdResultado").value = resultado
	
}
