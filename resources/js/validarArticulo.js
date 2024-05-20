$(document).ready(function() {
    $('#articuloForm').submit(function(event) {
        var nombre = $('#nombre').val();
        var descripcion = $('#descripcion').val();
        var tipo = $('#tipo').val();
        var imagen = $('#imagen').val();
        var modelo = $('#modelo').val();
        var categorias = $('input[name="categorias[]"]:checked').length;
        var etiquetas = $('input[name="etiquetas[]"]:checked').length;

        var errors = [];

        if (nombre.trim() === '') {
            errors.push('El nombre del artículo es requerido.');
        }

        if (descripcion.trim() === '') {
            errors.push('La descripción del artículo es requerida.');
        }

        if (tipo.trim() === '') {
            errors.push('El tipo del artículo es requerido.');
        }

        if (imagen === '' && modelo === '') {
            errors.push('Debe subir al menos una imagen o un modelo del artículo.');
        }

        if (categorias < 1) {
            errors.push('Debe seleccionar al menos una categoría.');
        }

        if (categorias > 3) {
            errors.push('Solo puede seleccionar hasta tres categorías.');
        }

        if (etiquetas < 1) {
            errors.push('Debe seleccionar al menos una etiqueta.');
        }

        if (etiquetas > 3) {
            errors.push('Solo puede seleccionar hasta tres etiquetas.');
        }

        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join('\n'));
        }
    });
});
