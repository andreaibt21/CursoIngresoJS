/*
ANDREA BRICEÑO 

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

TP1
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;


    alert("La suma de los tres precios es: " + suma)
}
function Promedio () 
{

    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los tres precios es: " + promedio)
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let sumaDePrecios;
    let aumento;
    let resultado;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;
    aumento = (sumaDePrecios * 21 ) / 100;

    resultado = sumaDePrecios + aumento;

    alert("Precio final con 21% de iva: " + resultado)
}