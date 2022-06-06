// Hemos omitido los acentos en los comentarios por compatibilidad
var detalles = '';
function obtenerParametros(url) {
	let params = new URLSearchParams(window.location.search);
	return params.get(url);
}
function cargarDatos() {
	$.ajax({
		url: './info.json',
	}).done(function (respuesta) {
		var idParametros = obtenerParametros('id');
		var eventos = respuesta.eventos;
		var evento = eventos.filter((persona) => {
			return persona.id == idParametros;
		});

		detalles = `
				<div class="card border-dark mb-3 col-lg-12 style="max-width: 18rem; ">
					<div class="card-body text-dark">
						<h5 class="card-title" id="titulo" style= "color: blue">${evento[0].nombre}</h5>
						<h6 class="card-subtitle mb-2 text-muted" id="fecha">${evento[0].fecha} - ${evento[0].lugar}</h6>
						<p class="card-textrtsW" id="descripcion">${evento[0].descripcion}</p>
            <p class="card-textrtsW" id="invitados">Invitados: ${evento[0].invitados}</p>
            <p class="card-textrtsW" id="precio">Precio: ${evento[0].precio}</p>
					</div>
				</div>
			`;

		$('#evento').html(detalles);
	});
}

$(document).ready(function () {
	//Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
	//Carga los datos que estan en el JSON (info.json) usando AJAX
	//Guarda el resultado en una variable
	cargarDatos();
	//Busca el elemento en el arreglo
	//Crea un string que contenga el HTML que describe el detalle del evento
	//Modifica el DOM agregando el html generado dentro del div con id=evento
});
