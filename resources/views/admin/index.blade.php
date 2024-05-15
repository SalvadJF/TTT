<x-app-layout>
    <div id="fondoUser">
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
                    <a href="{{ route('admin.index') }}" class="font-koulen ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-white dark:hover:text-white">Panel de Admin</a>
                </div>
            </li>
        </ol>
    </nav>


    <div class="flex items-center gap-4 m-20 p-10 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg">
        <img class="text-white w-20 h-20 rounded-full" src="{{ $admin->avatar_url }}" alt="imagen del Administrador">
        <div class="font-medium text-white">
            <div class="font-koulen">{{$admin->name}}</div>
            <div class="font-lato text-sm text-gray-100 dark:text-gray-400">Bienvenido Administrador</div>
        </div>
    </div>



<div class="p-10 bg-opacity-10">
    <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-900 dark:bg-blue-900 text-white m-5">
        <h2 id="accordion-color-heading-usuarios">
            <button type="button" class="text-center flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-usuarios" aria-expanded="true" aria-controls="accordion-color-body-usuarios">
                <span>Usuarios</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 60>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        <div id="accordion-color-body-usuarios" class="hidden" aria-labelledby="accordion-color-heading-usuarios">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                <p class="mb-5 text-white dark:text-gray-400">Numero actual de usuarios {{ $usuarios->count() }}</p>
                <p class="mb-5 text-white dark:text-gray-400">Ultimo usuario creado {{ $ultimoUsuario->created_at }}</p>
                <a href="{{ route('admin.usuarios') }}" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Usuarios DB</a>
            </div>
        </div>
        <h2 id="accordion-color-heading-articulos">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-articulos" aria-expanded="true" aria-controls="accordion-color-body-articulos">
                <span>Articulos</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        <div id="accordion-color-body-articulos" class="hidden" aria-labelledby="accordion-color-heading-articulos">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                <p class="mb-5 text-white dark:text-gray-400">Numero actual de articulos {{ $articulos->count() }}</p>
                <p class="mb-5 text-white dark:text-gray-400">Ultimo articulo creado {{ $ultimoArticulo->created_at }}</p>
                <a href="{{ route('admin.articulos') }}" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Articulos DB</a>
            </div>
        </div>
        <h2 id="accordion-color-heading-noticias">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-noticias" aria-expanded="true" aria-controls="accordion-color-body-noticias">
                <span>Noticias</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        <div id="accordion-color-body-noticias" class="hidden" aria-labelledby="accordion-color-heading-noticias">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                <p class="mb-5 text-white dark:text-gray-400">Número actual de noticias {{ $noticias->count() }}</p>
                <p class="mb-5 text-white dark:text-gray-400">Última noticia creada {{ $ultimaNoticia->created_at }}</p>
                <a href="{{ route('admin.noticias') }}" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Noticias DB</a>
            </div>
        </div>
        <h2 id="accordion-color-heading-comentarios">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-comentarios" aria-expanded="true" aria-controls="accordion-color-body-comentarios">
                <span>Comentarios</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        <div id="accordion-color-body-comentarios" class="hidden" aria-labelledby="accordion-color-heading-comentarios">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                <p class="mb-5 text-white dark:text-gray-400">Número actual de comentarios {{ $comentarios->count() }}</p>
                <p class="mb-5 text-white dark:text-gray-400">Último comentario creado {{ $ultimoComentario->created_at }}</p>
                <a href="{{ route('admin.comentarios') }}" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Comentarios DB</a>
            </div>
        </div>
    </div>
</div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
        const accordionItems = document.querySelectorAll('[data-accordion-target]');

        accordionItems.forEach(item => {
            item.addEventListener('click', function () {
                const target = document.querySelector(this.getAttribute('data-accordion-target'));

                if (target) {
                    const isOpen = target.classList.contains('hidden');
                    accordionItems.forEach(item => {
                        const otherTarget = document.querySelector(item.getAttribute('data-accordion-target'));
                        if (otherTarget && otherTarget !== target) {
                            otherTarget.classList.add('hidden');
                        }
                    });

                    if (isOpen) {
                        target.classList.remove('hidden');
                    } else {
                        target.classList.add('hidden');
                    }
                }
            });
        });
    });
    </script>
    </div>
</x-app-layout>





