<x-app-layout>
    <div id="fondo">
        <form id="articuloForm" method="POST" action="{{ route('articulos.update', ['articulo' => $articulo->id]) }}"
            enctype="multipart/form-data" class="max-w-sm mx-auto">
            @csrf
            @method('PUT')
            <div class="mb-5 pt-5 pb-5">
                <label for="nombre" :value="'Nombre del articulo'"
                    class="font-koulen block mb-2 text-sm font-medium text-white ">Nombre del Articulo</label>
                <input type="text" id="titulo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="nombre"  autofocus value="{{ old('nombre', $articulo->nombre) }}">
            </div>
            <div class="mb-5 pt-5 pb-5">
                <label for="descripcion" class="font-koulen block mb-2 text-sm font-medium text-white">Descripcion del
                    Articulo</label>
                <textarea id="descripcion" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe tu Producto..." name="descripcion" >{{ old('descripcion', $articulo->descripcion) }}</textarea>
            </div>
            <div class="mb-5 pt-5 pb-5">
                <label for="tipo" class="font-koulen block mb-2 text-sm font-medium text-white">Seleciona el
                    tipo de Articulo</label>
                <select name="tipo" id="tipo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Modelo_3d" @if ($articulo->tipo == 'Modelo_3d') selected @endif>Modelo 3D</option>
                    <option value="Textura" @if ($articulo->tipo == 'Textura') selected @endif>Textura</option>
                </select>
            </div>

            <div class="mb-5 pt-5 pb-5">
                <label for="categorias" class="font-koulen block mb-2 text-sm font-medium text-white">Categorías</label>
                <div>
                    @foreach ($categorias as $categoria)
                        <div>
                            <input type="checkbox" id="categoria_{{ $categoria->id }}" name="categorias[]" value="{{ $categoria->id }}" class="mr-2" @if($articulo->categorias->contains($categoria->id)) checked @endif>
                            <label for="categoria_{{ $categoria->id }}" class="text-white">{{ $categoria->nombre }}</label>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="mb-5 pt-5 pb-5">
                <label for="etiquetas" class="font-koulen block mb-2 text-sm font-medium text-white">Etiquetas</label>
                <div>
                    @foreach ($etiquetas as $etiqueta)
                        <div>
                            <input type="checkbox" id="etiqueta_{{ $etiqueta->id }}" name="etiquetas[]" value="{{ $etiqueta->id }}" class="mr-2" @if($articulo->etiquetas->contains($etiqueta->id)) checked @endif>
                            <label for="etiqueta_{{ $etiqueta->id }}" class="text-white">{{ $etiqueta->nombre }}</label>
                        </div>
                    @endforeach
                </div>
            </div>


            <div class="mb-5 pt-5 pb-5">
                <label for="imagen" :value="'Imagen del Articulo'"
                    class="font-koulen block mb-2 text-sm font-medium text-white">Importe la nueva imagen de
                    Presentacion del articulo</label>
                <input id="imagen" type="file" name="imagen" accept="image/*"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
            </div>
            <div class="mb-5 pt-5 pb-5">
                <label for="modelo" :value="'Modelo del Articulo'"
                    class="font-koulen block mb-2 text-sm font-medium text-white">Importe el nuevo modelo del
                    articulo</label>
                <input id="modelo" type="file" name="modelo" accept=".stl"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
            </div>

            <div id="errorContainer" class="text-red-500"></div>

            <div class="flex items-center justify-center p-4 space-x-4">
                <a href="{{ url()->previous() }}">
                    <button
                        class="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Volver
                    </button>
                </a>
                <button type="submit"
                    class="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Editar
                </button>
            </div>
        </form>

    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#articuloForm').submit(function(event) {
                // Limpiar mensajes de error anteriores
                $('.error-message').remove();

                var nombre = $('#nombre').val().trim();
                var descripcion = $('#descripcion').val().trim();
                var tipo = $('#tipo').val();
                var categorias = $('input[name="categorias[]"]:checked').length;
                var etiquetas = $('input[name="etiquetas[]"]:checked').length;

                var errors = [];

                if (nombre === '') {
                    errors.push('El nombre del artículo es requerido.');
                }

                if (descripcion === '') {
                    errors.push('La descripción del artículo es requerida.');
                }

                if (tipo === '') {
                    errors.push('El tipo del artículo es requerido.');
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
                    var errorMessage = '<div class="error-message text-red-500">Por favor, corrija los siguientes errores:</div>';
                    errorMessage += '<ul class="error-list">';
                    errors.forEach(function(error) {
                        errorMessage += '<li>' + error + '</li>';
                    });
                    errorMessage += '</ul>';
                    $('#errorContainer').html(errorMessage);
                }
            });
        });
    </script>


</x-app-layout>
