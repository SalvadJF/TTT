<x-app-layout>
    <div id="fondo">
        {{-- El Breadcrum para saber donde estamos --}}
        <nav class="flex pl-10 pt-10" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="{{ route('home') }}" class="font-koulen inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-white dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <a href="" class="font-koulen ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-white dark:hover:text-white">{{ $usuario->name }}</a>
                    </div>
                </li>
            </ol>
        </nav>
    
        {{-- Informacion del Usuario --}}

        <div class="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
            <img class="text-white w-20 h-20 rounded-full" src="{{ $usuario->avatar_url }}" alt="imagen del Administrador">
            <div class="font-medium text-white">
                <div class="font-koulen">{{$usuario->name}}</div>
            </div>
        </div>

    {{-- Articulos del Usuario --}} 
    <div class="text-left w-full">
            <h1 class="mb-5 pl-5 text-2xl font-koulen text-white">Articulos de {{ $usuario->name }}</h1>
        </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center mt-5 p-10">
       
        @foreach($articulos as $articulo)
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {{-- Imagen del Articulo --}}
                    <a href="{{ route('articulos.show', ['articulo' => $articulo]) }}">
                        @if ($articulo->imagen)
                        <img class="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src="{{ asset($articulo->imagen_url) }}"
                            alt="Imagen de la noticia">
                    @else
                        <p class="w-full md:w-48 text-center">No hay imagen disponible para este articulo.</p>
                    @endif
                    </a>
                    <div class="p-5">
                        {{-- Título de la noticia --}}
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $articulo->nombre }}</h5>
                        {{-- Contenido de la noticia --}}
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $articulo->descripcion }}</p>
                        <a href="{{ route('articulos.show', ['articulo' => $articulo]) }}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Leer más
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
        @endforeach
        </div>
        <div class="mt-5 p-5">
            {{ $articulos->links() }}
        </div>
    <div>
    </div>
</x-app-layout>