<x-app-layout>
    {{-- El Breadcrum para saber donde estamos --}}
    <nav class="flex pl-10 pt-10" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a href="{{ route('home') }}" class="font-koulen inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
              <a href="{{ route('admin.index') }}" class="font-koulen ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Panel de Admin</a>
            </div>
          </li>
        </ol>
    </nav>

    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li class="me-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Usuarios</button>
            </li>
            <li class="me-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Noticias</button>
            </li>
            <li class="me-2" role="presentation">
                <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Articulos</button>
            </li>
        </ul>
    </div>
    <div id="default-tab-content">
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Usuarios en la base de datos
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID del Usuario
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de Creacion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($usuarios as $usuario)
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $usuario->id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ $usuario->name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ $usuario->email }}
                            </td>
                            <td class="px-6 py-4">
                                {{ $usuario->created_at }}
                            </td>
                            <td>
                                <form action="{{ route('usuarios.destroy', ['usuario' => $usuario]) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <x-primary-button class="bg-red-500">
                                        Borrar
                                    </x-primary-button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="mt-5 p-5">
                    {{ $usuarios->links() }}
                </div>
            </div>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Noticias en la base de datos
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID de la Noticia
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Titulo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Autor
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha de Creacion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($noticias as $noticia)
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $noticia->id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ $noticia->titulo }}
                            </td>
                            @if ($noticia->usuario == null)
                                <td class="px-6 py-4">
                                    Sin autor
                                </td>
                            @else
                                <td class="px-6 py-4">
                                    {{ $noticia->usuario->name }}
                                </td>
                            @endif
                            <td class="px-6 py-4">
                                {{ $noticia->created_at }}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="{{ route('noticias.edit', $noticia) }}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline m-2">Editar</a>
                            </td>
                            <td>
                                <form action="{{ route('noticias.destroy', ['noticia' => $noticia]) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <x-primary-button class="bg-red-500">
                                        Borrar
                                    </x-primary-button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="mt-5 p-5">
                    {{ $noticias->links() }}
                </div>
            </div>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Articulos en la base de datos
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID del Articulo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Titulo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Autor
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fecha de Creacion
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($articulos as $articulo)
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $articulo->id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ $articulo->nombre }}
                        </td>
                        @if ($articulo->user == null)
                                <td class="px-6 py-4">
                                    Sin autor
                                </td>
                            @else
                                <td class="px-6 py-4">
                                    {{ $articulo->user->name }}
                                </td>
                            @endif
                        <td class="px-6 py-4">
                            {{ $articulo->created_at }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="{{ route('articulos.edit', $articulo) }}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline m-2">Editar</a>
                        </td>
                        <td>
                            <form action="{{ route('articulos.destroy', ['articulo' => $articulo]) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <x-primary-button class="bg-red-500">
                                    Borrar
                                </x-primary-button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="mt-5 p-5">
                {{ $articulos->links() }}
            </div>
        </div>
    </div>
</x-app-layout>





