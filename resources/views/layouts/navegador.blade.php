<nav class="bg-white border-gray-200 dark:bg-gray-900 h-20 sticky top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="{{ route('home') }}" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="{{ asset('img/LogoMono.svg') }}" alt="Logo" class="w-20 h-24">
        </a>

        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button"
                class="font-koulen flex text-sm bg-cyan-100 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom">
                <span class="sr-only">Abrir Menu</span>
                @if(Auth::user()->avatar)
                    <img class="w-8 h-8 rounded-full" src="{{ Auth::user()->avatarUrl }}" alt="user">
                @else
                    <img class="w-8 h-8 rounded-full" src="/img/users/avatar.png" alt="user">
                @endif
            </button>
            <!-- Dropdown menu -->
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown">
                <div class="px-4 py-3">
                    <div class="font-lato">{{ Auth::user()->name }}</div>
                    <div class="font-lato">{{ Auth::user()->email }}</div>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="{{ route('profile.edit') }}"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Mi
                            perfil</a>
                    </li>
                    @if (Auth::check() && Auth::user()->isAdmin())
                    <li>
                        <a href="{{ route('admin.index') }}"
                            class=" font-lato block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Panel de Admin</a>
                    </li>
                    @endif
                    {{--
                    <li>

                        <!-- Authentication -->
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <a href="{{ route('logout') }}"
                                class="font-lato block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                onclick="event.preventDefault();
              this.closest('form').submit();">
                                {{ __('Salir') }}</a>
                    </li> --}}
                </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul
                class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li class="font-koulen">
                    <x-nav-link :href="route('noticias.index')" :active="request()->routeIs('noticias.index')">
                        {{ __('Noticias') }}
                    </x-nav-link>
                </li>
                <li class="font-koulen">
                    <x-nav-link :href="route('articulos.index')" :active="request()->routeIs('articulos.index')">
                        {{ __('Articulos') }}
                    </x-nav-link>
                </li>
                <li class="font-koulen">
                    <x-nav-link :href="route('nosotros')" :active="request()->routeIs('nosotros')">
                        {{ __('Nosotros') }}
                    </x-nav-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
