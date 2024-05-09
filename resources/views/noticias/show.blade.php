<x-app-layout>
    <div class="bg-light-gray">
        {{-- El Breadcrum para saber donde estamos --}}
        <nav class="flex pl-10 pt-10" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="{{ route('home') }}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                  <a href="{{ route('noticias.index') }}" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Noticias</a>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{ $noticia->titulo }}</a>
                </div>
              </li>
            </ol>
        </nav>
    </div>

    {{-- Titulo de la noticia --}}
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{{ $noticia->titulo }}</h1>
            <di>
        <di>
    <section>


    {{-- Informacion de la Noticia --}}

    <div>
        <div>
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                @if ($noticia->imagenes)
                    @if ($noticia->imagenes->isNotEmpty())
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
                            src="{{ asset($noticia->imagenes->first()->url) }}" 
                            alt="Imagen de la noticia">
                    @else
                        <p>No hay imagen disponible para esta noticia.</p>
                    @endif
                @else
                    <p>No hay imagen disponible para esta noticia.</p>
                @endif

                <div class="flex flex-col justify-between p-4 leading-normal">
                    <ul class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        @foreach($noticia->categorias as $categoria)
                            <li>{{ $categoria->nombre }}</li>
                        @endforeach
                    </ul>
                        @if($noticia->etiquetas->count() > 0)
                        <ul>
                            @foreach($noticia->etiquetas as $etiqueta)
                                <li>{{ $etiqueta->nombre }}</li>
                            @endforeach
                        </ul>
                    @else
                        <p>No hay etiquetas asociadas a esta noticia.</p>
                    @endif
                        <ul>
                        <li> {{ $noticia->created_at}} </li>
                    </ul>
                </div>
                <div>
                    {{ $noticia->contenido}}
                    <div>
        </div>
        <div>

        <div>


</x-app-layout>
