// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
Proximos = '';
var EventoProximo = [];
function cargarDatos() {
	$.ajax({
		url: './info.json',
	}).done(function (respuesta) {
		var cantidad = respuesta.eventos;
		var fechaActual = respuesta.fechaActual;
		for (var i = 0; i < cantidad.length; i++) {
			if (cantidad[i].fecha > fechaActual) {
				EventoProximo.push(cantidad[i]);
			}
		}
		var ordenadoProx = EventoProximo.sort((a, b) => {
			if (a.fecha > b.fecha) {
				return 1;
			}
			if (a.fecha == b.fecha) {
				return 0;
			}
			return -1;
		});
		for (var j = 0; j < ordenadoProx.length; j++) {
			Proximos += `
            <div class="card border-dark mb-3 col-lg-12" >
              <div class="card-body text-dark">
                <h5 class="card-title" id="titulo" style= "color: blue"><a href='detalle.html?id=${ordenadoProx[j].id}'>${ordenadoProx[j].nombre}</a>
                <h6 class="card-subtitle mb-2 text-muted" id="fecha">${ordenadoProx[j].fecha}</h6>
                <p class="card-textrtsW" id="descripcion">${ordenadoProx[j].descripcion}</p>
              </div>
            </div>
          `;
		}

		$('#proximos').html(Proximos);
	});
}
$(document).ready(function () {
	//Carga los datos que estan en el JSON (info.json) usando AJAX
	cargarDatos();
	//Guarda el resultado en variables
	//Selecciona los eventos que sean posteriores a la fecha actual del JSON
	//Ordena los eventos segun la fecha (los mas cercanos primero)
	//Crea un string que contenga el HTML que describe el detalle del evento
	//Recorre el arreglo y concatena el HTML para cada evento
	//Modifica el DOM agregando el html generado dentro del div con id=evento
});
