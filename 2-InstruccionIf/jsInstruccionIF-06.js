// ANDREA BRICEÑO

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	

	if (edad > 12 && edad < 18 )
	{ 
		alert("Es adolescente")
	}

    if(edad > 17 )
	{
		alert ("Es mayor de edad")
	} 
	if(edad < 13 )
	{
		alert( "Es menor de edad")
	}



	/*
		if(edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad>18)
		{
			alert("es mayor");
		}
		else
		{
			alert("adolescente");
		}
	}

	*/

}//FIN DE LA FUNCIÓN