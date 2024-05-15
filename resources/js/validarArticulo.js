function validateForm(event) {
    const nombre = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');
    const tipo = document.getElementById('tipo');
    const imagen = document.getElementById('imagen');
    const modelo = document.getElementById('modelo');

    if (!nombre.value || !descripcion.value || !tipo.value || !imagen.value || !modelo.value) {
        event.preventDefault();
        alert("Por favor, complete todos los campos.");
        return false;
    }

    const imagenExtension = imagen.value.split('.').pop().toLowerCase();
    if (!['jpg', 'jpeg', 'png'].includes(imagenExtension)) {
        event.preventDefault();
        alert("El archivo de imagen debe tener una extensión válida (jpg, jpeg, png).");
        return false;
    }

    const modeloExtension = modelo.value.split('.').pop().toLowerCase();
    if (modeloExtension !== 'stl') {
        event.preventDefault();
        alert("El archivo de modelo debe tener una extensión válida (.stl).");
        return false;
    }

    return true;
}
