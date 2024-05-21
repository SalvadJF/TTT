import React from 'react';
import { Link } from '@inertiajs/react';

export default function NavBar({ auth, className = '', children, ...props }) {
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 h-20 sticky top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <Link href={route('dashboard')} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={asset('img/LogoMono.svg')} alt="Logo" className="w-20 h-24" />
                    </Link>

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="font-koulen flex text-sm bg-cyan-100 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <span className="sr-only">Abrir Menu</span>
                            {auth.user.avatar ? (
                                <img className="w-8 h-8 rounded-full" src={auth.user.avatarUrl} alt="user" />
                            ) : (
                                <img className="w-8 h-8 rounded-full" src="/img/users/avatar.png" alt="user" />
                            )}
                        </button>
                        {/* Dropdown menu */}
                        <div
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown"
                        >
                            <div className="px-4 py-3">
                                <div className="font-lato">{auth.user.name}</div>
                                <div className="font-lato">{auth.user.email}</div>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <Link
                                        href={route('profile.index')}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Mi perfil
                                    </Link>
                                </li>
                                {auth.check && auth.user.isAdmin() && (
                                    <li>
                                        <Link
                                            href={route('admin.index')}
                                            className=" font-lato block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Panel de Admin
                                        </Link>
                                    </li>
                                )}
                                {/*
                                    <li>
                                        <!-- Authentication -->
                                        <form method="POST" action="{{ route('logout') }}">
                                            @csrf
                                            <a
                                                href="{{ route('logout') }}"
                                                className="font-lato block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                onClick="event.preventDefault();
              this.closest('form').submit();"
                                            >
                                                {{ __('Salir') }}
                                            </a>
                                    </li>
                                */}
                            </ul>
                        </div>
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="font-koulen">
                                <Link href={route('noticias.index')} active={request().routeIs('noticias.index')}>
                                    Noticias
                                </Link>
                            </li>
                            <li className="font-koulen">
                                <Link
                                    href={route('articulos.index')}
                                    active={request().routeIs('articulos.index')}
                                >
                                    Articulos
                                </Link>
                            </li>
                            <li className="font-koulen">
                                <Link href={route('nosotros')} active={request().routeIs('nosotros')}>
                                    Nosotros
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
