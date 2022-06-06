// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

// var nombreE = respuesta.nombre;
// var fechaE = respuesta.fecha;
// var descripcionE = respuesta.descripcion;

var Pasados = '';
var Proximos = '';
var EventoProx = [];
var EventoPasados = [];
function cargarDatos() {
	$.ajax({
		url: './info.json',
	}).done(function (respuesta) {
		var cont_proximo = 0;
		var cont_pasado = 0;
		var cantidad = respuesta.eventos;
		var fechaActual = respuesta.fechaActual;

		for (var i = 0; i < cantidad.length; i++) {
			if (cantidad[i].fecha > fechaActual) {
				EventoProx.push(cantidad[i]);
			} else {
				EventoPasados.push(cantidad[i]);
			}
		}

		var ordeEventoActual = EventoProx.sort((a, b) => {
			if (a.fecha > b.fecha) {
				return 1;
			}
			if (a.fecha == b.fecha) {
				return 0;
			}
			return -1;
		});
		for (var j = 0; j < ordeEventoActual.length; j++) {
			if (cont_proximo < 2) {
				Proximos += `
				<div class="card border-dark mb-3 col-lg-6 style="max-width: 18rem; ">
					<div class="card-body text-dark">
						<h5 class="card-title" id="titulo" style= "color: blue"><a href='detalle.html?id=${ordeEventoActual[j].id}'>${ordeEventoActual[j].nombre}</a></h5>
						<h6 class="card-subtitle mb-2 text-muted" id="fecha">${ordeEventoActual[j].fecha}</h6>
						<p class="card-textrtsW" id="descripcion">${ordeEventoActual[j].descripcion}</p>
					</div>
				</div>
			`;
			}
			cont_proximo++;
		}
		$('#proximos').html(Proximos);

		var ordenadoPas = EventoPasados.sort((a, b) => {
			if (a.fecha < b.fecha) {
				return 1;
			}
			if (a.fecha == b.fecha) {
				return 0;
			}
			return -1;
		});

		for (var j = 0; j < ordenadoPas.length; j++) {
			if (cont_pasado < 2) {
				Pasados += `
				<div class="card border-dark mb-3 col-lg-6 style="max-width: 18rem; ">
					<div class="card-body text-dark">
						<h5 class="card-title" id="titulo" style= "color: blue"><a href='detalle.html?id=${ordenadoPas[j].id}'><h5>${ordenadoPas[j].nombre}</h5></a></h5>
						<h6 class="card-subtitle mb-2 text-muted" id="fecha">${ordenadoPas[j].fecha}</h6>
						<p class="card-textrtsW" id="descripcion">${ordenadoPas[j].descripcion}</p>
					</div>
				</div>
			`;
			}
			cont_pasado++;
		}

		$('#pasados').html(Pasados);
	});
}
$(document).ready(function () {
	//Carga los datos que estan en el JSON (info.json) usando AJAX

	cargarDatos();

	//Guarda el resultado en variables
	//Clasifica los eventos segun la fecha actual del JSON
	//Ordena los eventos segun la fecha (los mas cercanos primero)
	//Extrae solo dos eventos
	//Ordena los eventos segun la fecha (los mas cercanos primero)
	//Extrae solo dos eventos
	//Crea un string que contenga el HTML que describe el detalle del evento
	//Recorre el arreglo y concatena el HTML para cada evento
	//Modifica el DOM agregando el html generado
	//Crea un string que contenga el HTML que describe el detalle del evento
	//Recorre el arreglo y concatena el HTML para cada evento
	//Modifica el DOM agregando el html generado
});
