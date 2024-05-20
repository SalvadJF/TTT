
    $(document).ready(function() {
        $('#noticiaForm').submit(function(event) {
            var titulo = $('#titulo').val().trim();
            var contenido = $('#contenido').val().trim();
            var categorias = $('input[name="categorias[]"]:checked').length;
            var etiquetas = $('input[name="etiquetas[]"]:checked').length;

            var errors = [];

            if (titulo === '') {
                errors.push('El título de la noticia es requerido.');
            }

            if (contenido === '') {
                errors.push('El contenido de la noticia es requerido.');
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
                var errorMessage = "Por favor, corrija los siguientes errores:\n\n";
                errorMessage += errors.join('\n');
                alert(errorMessage);
            }
        });
    });

