// ANDREA BRICEÑO

function mostrar()
{

	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad)

	if ( edad > 12)
	{
		if (edad < 18)
		{
			alert("La persona es adolescente")
		}

	}
}//FIN DE LA FUNCIÓN