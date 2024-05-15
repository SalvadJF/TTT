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
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <a href="{{ route('admin.noticias') }}" class="font-koulen ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-white dark:hover:text-white">Noticias Base de datos</a>
                    </div>
                </li>
            </ol>
        </nav>

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
</x-app-layout>