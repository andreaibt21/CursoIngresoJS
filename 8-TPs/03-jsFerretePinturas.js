/*
ANDREA BRICEÑO 

3.Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let centigrados;
    temperatura = document.getElementById("txtIdTemperatura").value;
    
    temperatura = parseInt(temperatura);
    centigrados =  (temperatura - 32 ) / 18; 

  alert( temperatura + " Fahrenheit son" + centigrados + " centígrados")
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let fahrenheit;

    temperatura = document.getElementById("txtIdTemperatura").value;
    
    temperatura = parseInt(temperatura);

	fahrenheit = (temperatura * 1.8 ) + 32;

    alert( temperatura + "centígrados son "+ fahrenheit +" Fahrenheit ")
}
