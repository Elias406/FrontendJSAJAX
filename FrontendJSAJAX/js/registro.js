// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(e) {
	//Expresion regular del correo
	if (e.nombres.value.trim().length <= 2) {
		(document.getElementById('errornombres').innerText =
			'El campo es obligatorio'),
			e.nombres.focus(),
			!1;
		return false;
	}

	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(e.email.value)) {
		(document.getElementById('errorEmail').innerText = 'Campo Inválido'),
			e.email.focus(),
			!1;
		return false;
	}

	if (
		e.contrasena.value.trim().length == 0 &&
		e.contrasena.value.trim().length < 7
	) {
		(document.getElementById('errorContrasena').innerText =
			'Debe tener al menos 7 caracteres'),
			!1;
		return false;
	}

	if (e.contrasena.value != e.confirmacion.value) {
		(document.getElementById('errorConfirmacion').innerText =
			'No coinciden las cotraseñas'),
			!1;
		return false;
	}
	if (e.tipo.value == -1) {
		(document.getElementById('errorTipo').innerText =
			'Este campo es obligatorio'),
			!1;
		return false;
	}

	if (!e.acepto.checked) {
		(document.getElementById('errorAcepto').innerText =
			'Debe aceptar los terminos de la empresa'),
			!1;
		return false;
	}
	return true;
}
