function validateArticuloForm() {

    // Your validation logic here
    $(document).ready(function() {
    $('#articuloForm').validate({
      rules: {
        titulo: {
          required: true,
          maxlength: 255
        },
        contenido: {
          required: true,
          maxlength: 65535
        },
        tipo: {
          required: true,
          invalue: ['Modelo_3d', 'Textura']
        },
        imagen: {
          accept: 'image/jpeg,image/png,image/gif',
          extension: 'jpg,jpeg,png,gif'
        },
        modelo: {
          accept: 'application/octet-stream'
        },
        categorias: {
          required: true,
          minlength: 1,
          maxlength: 3,
          checkbox: true
        },
        etiquetas: {
          required: true,
          minlength: 1,
          maxlength: 3,
          checkbox: true
        }
      },
      messages: {
        titulo: {
          required: "El título es obligatorio",
          maxlength: "El título no puede tener más de 255 caracteres"
        },
        contenido: {
          required: "El contenido es obligatorio",
          maxlength: "El contenido no puede tener más de 65535 caracteres"
        },
        tipo: {
          required: "El tipo es obligatorio",
          invalue: "El tipo debe ser Modelo_3d o Textura"
        },
        imagen: {
          accept: "Solo se permiten archivos de imagen (jpg, jpeg, png, gif)",
          extension: "Solo se permiten archivos de imagen (jpg, jpeg, png, gif)"
        },
        modelo: {
          accept: "Solo se permiten archivos de modelo (3d)"
        },
        categorias: {
          required: "Se debe seleccionar al menos una categoría",
          minlength: "Se debe seleccionar al menos una categoría",
          maxlength: "Se pueden seleccionar como máximo 3 categorías",
          checkbox: "Se debe seleccionar al menos una categoría"
        },
        etiquetas: {
          required: "Se debe seleccionar al menos una etiqueta",
          minlength: "Se debe seleccionar al menos una etiqueta",
          maxlength: "Se pueden seleccionar como máximo 3 etiquetas",
          checkbox: "Se debe seleccionar al menos una etiqueta"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });

    // Custom validation method for "invalue"
    jQuery.validator.addMethod("invalue", function(value, element, params) {
      return jQuery.inArray(value, params) !== -1;
    }, "El valor debe estar en el conjunto especificado");
  });

}



