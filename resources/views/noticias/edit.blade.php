<x-app-layout>
    <div id="fondo">
    <form method="POST" action="{{ route('noticias.update', ['noticia' => $noticia->id]) }}" enctype="multipart/form-data" class="max-w-sm mx-auto">
        @csrf
        @method('PUT')

        <div class="mb-5 pt-5 pb-5">
            <label for="titulo" :value="'Titulo de la noticia'"
                class="font-koulen block mb-2 text-sm font-medium text-white ">Titulo de la noticia</label>
            <input type="text" id="titulo"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="titulo" required autofocus value="{{ old('nombre', $noticia->titulo) }}"/>
        </div>
        <div class="mb-5 pt-5 pb-5">
            <label for="contenido" class="font-koulen block mb-2 text-sm font-medium text-white">Contenido de la
                Noticia</label>
            <textarea id="contenido" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Describe tu Producto..." name="contenido" required>{{ old('descripcion', $noticia->contenido) }}</textarea>
        </div>

        <div class="mb-5 pt-5 pb-5">
            <label for="categorias" class="font-koulen block mb-2 text-sm font-medium text-white">Categorías</label>
            <div>
                @foreach ($categorias as $categoria)
                    <div>
                        <input type="checkbox" id="categoria_{{ $categoria->id }}" name="categorias[]" value="{{ $categoria->id }}" class="mr-2" @if($noticia->categorias->contains($categoria->id)) checked @endif>
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
                        <input type="checkbox" id="etiqueta_{{ $etiqueta->id }}" name="etiquetas[]" value="{{ $etiqueta->id }}" class="mr-2" @if($noticia->etiquetas->contains($etiqueta->id)) checked @endif>
                        <label for="etiqueta_{{ $etiqueta->id }}" class="text-white">{{ $etiqueta->nombre }}</label>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="mb-5 pt-5 pb-5">
            <label for="imagen" :value="'Imagen de la Noticia'"
                class="font-koulen block mb-2 text-sm font-medium text-white">Importe la nueva imagen de
                Presentacion del articulo</label>
            <input id="imagen" type="file" name="imagen" accept="image/*"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
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
                Editar
            </button>
        </div>
    </form>

</div>
</x-app-layout>
