<x-app-layout>
    <form method="POST" action="{{ route('articulos.store') }}" enctype="multipart/form-data" class="p-20">
        @csrf
        @method('PUT')

        <!-- Titulo -->
        <div>
            <label for="nombre" :value="'Nombre del articulo'" />
            <input id="titulo" class="block mt-1 w-full" type="text" name="nombre" required autofocus />
        </div>

        <!-- Contenido -->
        <div class="mt-4">
            <label for="descripcion" :value="'Descripción del articulo'" />
            <textarea id="descripcion" class="block mt-1 w-full" name="descripcion" required ></textarea>
        </div>

        <!-- Tipo -->
        <div class="mt-4">
            <label for="tipo" :value="'Tipo del articulo'" />
            <select name="tipo" id="">
                <option value="modelo_3D">Modelo 3D</option>
                <option value="textura">Textura</option>
            </select>
        </div>


        <!-- Imagen -->
        <div class="mt-4">
            <label for="imagen" :value="'Imagen del Articulo'" />
            <input id="imagen" class="block mt-1 w-full" type="file" name="imagen" />
        </div>

        <!-- Modelo -->
        <div class="mt-4">
            <label for="modelo" :value="'Modelo del Articulo'" />
            <input id="modelo" class="block mt-1 w-full" type="file" name="modelo" />
        </div>

        <div class="flex items-center justify-end mt-">
            <a href="{{ url()->previous() }}">
                <x-secondary-button class="m-4">
                    Volver
                </x-secondary-button>
            </a>
            <x-primary-button class="ms-4">
                Crear
            </x-primary-button>
        </div>
    </form>
</x-app-layout>
