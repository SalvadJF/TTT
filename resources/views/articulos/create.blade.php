<x-app-layout>
    <div id="fondo">

        <form id="articuloForm" method="POST" action="{{ route('articulos.store') }}" enctype="multipart/form-data" class="max-w-sm mx-auto">
            @csrf
            <div class="mb-5 pt-5 pb-5">
                <label for="nombre" :value="'Nombre del articulo'"
                    class="font-koulen block mb-2 text-sm font-medium text-white ">Nombre del Articulo</label>
                <input type="text" id="titulo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="nombre" required autofocus />
            </div>
            <div class="mb-5 pt-5 pb-5">
                <label for="descripcion"
                    class="font-koulen block mb-2 text-sm font-medium text-white">Descripcion del
                    Articulo</label>
                <textarea id="descripcion" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe tu Producto..." name="descripcion" required></textarea>
            </div>
            <div class="mb-5 pt-5 pb-5">
                <label for="tipo" class="font-koulen block mb-2 text-sm font-medium text-white">Seleciona el
                    tipo de Articulo</label>
                <select name="tipo" id="tipo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Modelo_3d">Modelo 3D</option>
                    <option value="Textura">Textura</option>
                </select>
            </div>

            <div class="mb-5 pt-5 pb-5">
                <label for="categorias" class="font-koulen block mb-2 text-sm font-medium text-white">Selecciona Categorías</label>
                <div>
                    @foreach($categorias as $categoria)
                        <div>
                            <input type="checkbox" id="categoria_{{ $categoria->id }}" name="categorias[]" value="{{ $categoria->id }}" class="mr-2">
                            <label for="categoria_{{ $categoria->id }}" class="text-white">{{ $categoria->nombre }}</label>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="mb-5 pt-5 pb-5">
                <label for="etiquetas" class="font-koulen block mb-2 text-sm font-medium text-white">Selecciona Etiquetas</label>
                <div>
                    @foreach($etiquetas as $etiqueta)
                        <div>
                            <input type="checkbox" id="etiqueta_{{ $etiqueta->id }}" name="etiquetas[]" value="{{ $etiqueta->id }}" class="mr-2">
                            <label for="etiqueta_{{ $etiqueta->id }}" class="text-white">{{ $etiqueta->nombre }}</label>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="mb-5 pt-5 pb-5">
                <label for="imagen" :value="'Imagen del Articulo'"
                    class="font-koulen block mb-2 text-sm font-medium text-white">Importe la imagen de
                    Presentacion del articulo</label>
                <input id="imagen" type="file" name="imagen" accept="image/*" required
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
            </div>
            <div class="mb-5 pt-5 pb-5">
                <label for="modelo" :value="'Modelo del Articulo'"
                    class="font-koulen block mb-2 text-sm font-medium text-white">Importe del modelo del
                    articulo</label>
                <input id="modelo" type="file" name="modelo" accept=".stl" required
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                    <div class="mt-1 text-sm text-gray-200" >Tamaño maximo 50mb</div>
                    <div class="mt-1 text-sm text-gray-200" >Formatos validos : stl</div>
            </div>

            <div class="flex items-center justify-center p-4 space-x-4">
                <a href="{{ url()->previous() }}">
                    <button
                        class="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Volver
                    </button>
                </a>
                <button type="submit"
                    class="font-koulen text-white bg-red-900 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Crear
                </button>
            </div>
        </form>

    </div>




</x-app-layout>
