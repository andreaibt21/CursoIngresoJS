/*
Andrea Briceño

2.	Para el departamento de Construcción:

A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo 
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  
de un terreno circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de 
cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de 
cada uno para las medidas que nos ingresen.

*/

function Rectangulo () 
{

    let largo; 
    let ancho; 
    let perimetro;
    let totalDeAlambre;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    largo = largo * 2;
    ancho = ancho * 2;

    perimetro = largo + ancho; 
    totalDeAlambre = perimetro * 3 ;

    alert("La cantidad de alambre a comprar es: " + totalDeAlambre)


}
function Circulo () 
{
	//2 pi x r 
    let radio;
    let totalDeAlambre;
    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    perimetro = 2 * 3.14 * radio;
    totalDeAlambre = perimetro * 3;

    alert("La cantidad de alambre a comprar es: " + totalDeAlambre)

}
function Materiales () 
{
    let largo; 
    let ancho; 
    let area;
    let cemento;
    let cal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 2;

    alert("para el contrapiso de "+ area + "m2 se necesitan comprar " + cemento +" de cemento y " + cal + " de cal")
}