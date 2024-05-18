<x-app-layout>
    <div id="fondo">
    <form method="POST" action="{{ route('articulos.update', ['articulo' => $articulo->id]) }}" enctype="multipart/form-data" class="p-20">
        @csrf
        @method('PUT')

        <!-- Nombre -->
        <div>
            <label for="nombre" :value="'Nombre del artículo'" />
            <input id="nombre" class="block mt-1 w-full" type="text" name="nombre" :value="old('nombre', $articulo->nombre)" required autofocus />
        </div>

        <!-- Descripción -->
        <div class="mt-4">
            <label for="descripcion" :value="'Descripción del artículo'" />
            <textarea id="descripcion" class="block mt-1 w-full" name="descripcion" required>{{ old('descripcion', $articulo->descripcion) }}</textarea>
        </div>

        <!-- Tipo -->
        <div class="mt-4">
            <label for="tipo" :value="'Tipo del artículo'" />
            <select name="tipo" id="tipo">
                <option value="Modelo_3d" @if($articulo->tipo == 'Modelo_3d') selected @endif>Modelo 3D</option>
                <option value="Textura" @if($articulo->tipo == 'Textura') selected @endif>Textura</option>
            </select>
        </div>

        <!-- Imagen -->
        <div class="mt-4">
            <label for="imagen" :value="'Imagen del artículo'" />
            <input id="imagen" class="block mt-1 w-full" type="file" name="imagen" />
        </div>

        <!-- Modelo -->
        <div class="mt-4">
            <label for="modelo" :value="'Modelo del Artículo'" />
            <input id="modelo" class="block mt-1 w-full" type="file" name="modelo" />
        </div>


        <div class="flex items-center justify-end mt-4">
            <a href="{{ url()->previous() }}">
                <button type="button" class="m-4">Volver</button>
            </a>
            <button type="submit" class="ms-4">Editar</button>
        </div>
    </form>
    <div>
</x-app-layout>
