<x-app-layout>
        <div id="fondoArticulo">
            <form id="articuloForm" method="POST" action="{{ route('articulos.store') }}" enctype="multipart/form-data" class="p-20">
                @csrf
                <!-- Titulo -->
                <div>
                    <label for="nombre" :value="'Nombre del articulo'" />
                    <input id="titulo" class="block mt-1 w-full" type="text" name="nombre" required autofocus />
                </div>

                <!-- Contenido -->
                <div class="mt-4">
                    <label for="descripcion" :value="'Descripción del articulo'" />
                    <textarea id="descripcion" class="block mt-1 w-full" name="descripcion" required></textarea>
                </div>

                <!-- Tipo -->
                <div class="mt-4">
                    <label for="tipo" :value="'Tipo del articulo'" />
                    <select name="tipo" id="tipo" required>
                        <option value="Modelo_3d">Modelo 3D</option>
                        <option value="Textura">Textura</option>
                    </select>
                </div>

                <!-- Imagen -->
                <div class="mt-4">
                    <label for="imagen" :value="'Imagen del Articulo'" />
                    <input id="imagen" class="block mt-1 w-full" type="file" name="imagen" accept="image/*" required />
                </div>

                <!-- Modelo -->
                <div class="mt-4">
                    <label for="modelo" :value="'Modelo del Articulo'" />
                    <input id="modelo" class="block mt-1 w-full" type="file" name="modelo" accept=".stl" required />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <a href="{{ url()->previous() }}">
                        <x-secondary-button class="m-4">
                            Volver
                        </x-secondary-button>
                    </a>
                    <button type="submit" class="ms-4" onclick="validateForm(event)">
                        Crear
                    </button>
                </div>
            </form>
        </div>
</x-app-layout>

