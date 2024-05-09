<x-app-layout>
    <div class="bg-light-gray">
    {{-- El Breadcrum para saber donde estamos --}}
    <nav class="flex m-10" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="{{ route('home') }}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </a>
          </li>
        </ol>
    </nav>


        <div class="">
            {{-- Presentacion de pagina --}}
            <div class="flex justify-center">
                <div class="w-full mx-auto sm:px-6 lg:px-8">
                    <div class="inline-flex items-center justify-between w-full p-5 text-gray-500  rounded-lg cursor-pointer dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:text-gray-400 dark:bg-gray-800">
                        <div class="w-1/5 m-5 fill-current">
                            <x-logo/>
                        </div>
                        <div class="flex-1">
                            <h1 class="font-size">Trazos, Texturas y Tecnología 3D</h1>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Ultimas Noticias --}}

            <div class="flex flex-col items-center justify-center mt-5">
                <h1 class="mb-5 text-3xl font-bold">Últimas Noticias</h1>
                <div class="flex flex-wrap gap-5 justify-center">
                @foreach($ultimasNoticias as $noticia)
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            {{-- Imagen de la Noticia --}}
                            <a href="#">
                                <img class="rounded-t-lg" src="" alt="" />
                            </a>
                            <div class="p-5">
                                {{-- Título de la noticia --}}
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $noticia->titulo }}</h5>
                                {{-- Contenido de la noticia --}}
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $noticia->contenido }}</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Leer más
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                @endforeach
                </div>

                    <!-- Botón de "Lea más Noticias" -->
                    <button type="button" class="py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Lea más Noticias
                    </button>

            </div>

            {{-- Ultimas Aportaciones --}}
            <div class="flex flex-col items-center justify-center mt-5">
                <h1 class="mb-5 text-3xl font-bold">Últimas Aportaciones</h1>
                <div class="flex flex-wrap gap-5 justify-center">
                    @foreach($ultimosArticulos as $articulo)
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {{-- Imagen del Articulo --}}
                        <a href="#">
                            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            {{-- Titulo del Articulo --}}
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $articulo->nombre }}</h5>
                                {{-- Autor del Articulo --}}
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $articulo->user->name }}</h5>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div>
                    <button type="button" class="py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Ver mas Modelos
                    </button>
                    <button type="button" class="py-2.5 px-5 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Sube los tuyos
                    </button>
                </div>

            </div>
        </div>
    </div>

    </x-app-layout>

