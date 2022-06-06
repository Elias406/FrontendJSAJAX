//Define las variables que necesites
Pasados = '';
var EventoPasado = [];
function cargarDatos() {
	$.ajax({
		url: './info.json',
	}).done(function (respuesta) {
		var cantidad = respuesta.eventos;
		var fechaActual = respuesta.fechaActual;
		for (var i = 0; i < cantidad.length; i++) {
			if (cantidad[i].fecha < fechaActual) {
				EventoPasado.push(cantidad[i]);
			}
		}
		var ordenadoPas = EventoPasado.sort((a, b) => {
			if (a.fecha < b.fecha) {
				return 1;
			}
			if (a.fecha == b.fecha) {
				return 0;
			}
			return -1;
		});
		for (var j = 0; j < ordenadoPas.length; j++) {
			Pasados += `
            <div class="card border-dark mb-3 col-lg-12" >
              <div class="card-body text-dark">
                <h5 class="card-title" id="titulo" style= "color: blue"><a href='detalle.html?id=${ordenadoPas[j].id}'>${ordenadoPas[j].nombre}</a>
                <h6 class="card-subtitle mb-2 text-muted" id="fecha">${ordenadoPas[j].fecha}</h6>
                <p class="card-textrtsW" id="descripcion">${ordenadoPas[j].descripcion}</p>
              </div>
            </div>
          `;
		}

		$('#pasados').html(Pasados);
	});
}
$(document).ready(function () {
	//Carga los datos que estan en el JSON (info.json) usando AJAX
	//Guarda el resultado en variables
	cargarDatos();
	//Selecciona los eventos que sean anteriores a la fecha actual del JSON
	//Ordena los eventos segun la fecha (los mas recientes primero)
	//Crea un string que contenga el HTML que describe el detalle del evento
	//Recorre el arreglo y concatena el HTML para cada evento
	//Modifica el DOM agregando el html generado
});
