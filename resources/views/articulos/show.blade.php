<x-app-layout>
    <div>
        {{-- El Breadcrum para saber donde estamos --}}
        <nav class="flex pl-10 pt-10" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="{{ route('home') }}" class=" font-koulen inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="{{ route('noticias.index') }}" class=" font-koulen ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Noticias</a>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="" class=" font-koulen ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{ $articulo->nombre }}</a>
                </div>
              </li>
            </ol>
        </nav>
    </div>
    <div class="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-5">
        {{-- Modelo 3D --}}
        <div class="w-full md:w-2/3">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <canvas id="renderCanvas" class="w-full h-full"></canvas> 
                <script>
                    var canvas = document.getElementById("renderCanvas");
                    var engine = new BABYLON.Engine(canvas, true);
                    var scene;
                
                    var createScene = function () {
                        var scene = new BABYLON.Scene(engine);
                
                        // Ajustar la posición de la cámara
                        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 100, BABYLON.Vector3.Zero(), scene);
                        camera.attachControl(canvas, true);
                
                        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
                
                        // Cargar el modelo STL localmente
                        var modeloURL = "{{ $articulo->modelo_url }}";
                        BABYLON.SceneLoader.ImportMesh("", "", modeloURL, scene, function (newMeshes) {
                            // Opcional: Ajustar el target de la cámara si es necesario
                            // camera.target = newMeshes[0].position;
                        });
                
                        return scene;
                    };
                
                    scene = createScene();
                
                    engine.runRenderLoop(function () {
                        scene.render();
                    });
                
                    window.addEventListener("resize", function () {
                        engine.resize();
                    });
                </script>
                
            </div>
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal w-full md:w-2/5">
            <div class="w-full mb-5">
                <div class="bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
                    @if ($articulo->usuario)
                <div class="flex items-center mb-4">
                    <img src="{{ $articulo->usuario->avatarURL }}" alt="Avatar del usuario" class="w-12 h-12 rounded-full mr-2">
                    <span>{{ $articulo->usuario->name }}</span>
                </div>
                @else
                    <p>No se pudo encontrar al usuario asociado a este articulo.</p>
                @endif

                </div>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $articulo->nombre }}</h5>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <ul class="mb-2">
                    @if ($articulo->categorias->count() > 0)
                        @foreach($articulo->categorias as $categoria)
                            <li>{{ $categoria->nombre }}</li>
                        @endforeach
                    @else
                        <li>Sin Categorias</li>
                    @endif
                </ul>
                <ul class="mb-2">
                    @if($articulo->etiquetas->count() > 0)
                        @foreach($noticia->etiquetas as $etiqueta)
                            <li>{{ $etiqueta->nombre }}</li>
                        @endforeach
                    @else
                        <li>Sin etiquetas</li>
                    @endif
                </ul>
                <ul>
                    <li>Creada en {{ $articulo->created_at }}</li>
                </ul>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $articulo->descripcion }}</p>
        </div>
    </div>

    {{-- Funcionalidades De Comentarios --}}
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-5">
        {{-- Comentarios --}}
        <div class="w-full mb-4">
            <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-full">
                @foreach($articulo->comentarios as $comentario)
                <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                    <li class="flex items-start">
                        <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="{{ $comentario->user->avatar_url }}" alt="Usuario {{ $comentario->user->name }}"/>
                        <div class="text-gray-600 dark:text-gray-400">
                            <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">{{ $comentario->user->name }}</span> comentó a <span class="font-medium text-gray-900 dark:text-white">{{ $articulo->nombre }}</span> en <span class="font-medium text-gray-900 dark:text-white">{{ $comentario->created_at }}</span></div>
                            <div class="text-sm font-normal">{{ $comentario->contenido }}</div>
                        </div>
                    </li>
                </ol>
                @endforeach
            </div>
        </div>
    
        {{-- Formulario para agregar comentario --}}
        <div class="w-full">
            <form class="max-w-full mx-auto" method="POST" action="{{ route('comentarios.store') }}">
                @csrf
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¡Comenta!</label>
                <input type="hidden" name="comentable_type" value="App\Models\Articulo">
                <input type="hidden" name="comentable_id" value="{{ $articulo->id }}">
                <textarea id="contenido" name="contenido" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deja tu comentario"></textarea>
                <button type="submit" class=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar Comentario</button>
            </form>
        </div>
    </div>
    

<div>

</x-app-layout>
