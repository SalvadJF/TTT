<x-app-layout>
    <div id="fondo">
    <form method="POST" action="{{ route('noticias.update', ['noticia' => $noticia->id]) }}" enctype="multipart/form-data" class="p-20">
        @csrf
        @method('PUT')

        <!-- Titulo -->
        <div>
            <label for="titulo" :value="'Nombre de la noticia'" />
            <input id="titulo" class="block mt-1 w-full" type="text" name="titulo" :value="old('titulo', $noticia->titulo)" required autofocus />
        </div>

        <!-- Contenido -->
        <div class="mt-4">
            <label for="contenido" :value="'Descripción de la noticia'" />
            <textarea id="contenido" class="block mt-1 w-full" name="contenido" :value="old('contenido', $noticia->contenido)" required ></textarea>
        </div>

        <!-- Imagen -->
        <div class="mt-4">
            <label for="imagen" :value="'Imagen de la noticia'" />
            <input id="imagen" class="block mt-1 w-full" type="file" name="imagen" :value="old('imagen')" />
        </div>

        <div class="flex items-center justify-end mt-">
            <a href="{{ url()->previous() }}">
                <x-secondary-button class="m-4">
                    Volver
                </x-secondary-button>
            </a>
            <x-primary-button class="ms-4">
                Editar
            </x-primary-button>
        </div>
    </form>
</div>
</x-app-layout>
