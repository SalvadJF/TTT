import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function NavBar({ user, className = '', children, ...props }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 h-32  w-full fixed top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <ApplicationLogo className="w-20 h-20" />
                    </Link>
                    <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="font-koulen flex text-sm bg-cyan-100 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={showUserDropdown}
                            onClick={() => setShowUserDropdown(!showUserDropdown)}
                        >
                            <span className="sr-only">Abrir Menu</span>
                            {user?.avatarUrl ? (
                                <img className="w-8 h-8 rounded-full" src={user.avatar} alt="user" />
                            ) : (
                                <img className="w-8 h-8 rounded-full" src="/img/users/avatar.png" alt="user" />
                            )}
                        </button>
                        {showUserDropdown && (
                            <div className="z-50 absolute mt-10 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <div className="font-lato">{user?.name}</div>
                                    <div className="font-lato">{user?.email}</div>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link
                                            href={route('profile.edit')}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Mi perfil
                                        </Link>
                                    </li>
                                    {user?.isAdmin && (
                                        <li>
                                            <Link
                                                href={route('admin.index')}
                                                className="font-lato block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Panel de Admin
                                            </Link>
                                        </li>
                                    )}
                                    <li>
                                        <form method="POST" action={route('logout')}>
                                            <button
                                                type="submit"
                                                className="w-full text-left font-lato block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Salir
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded={showingNavigationDropdown}
                            onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${showingNavigationDropdown ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="font-koulen">
                                <NavLink href="/noticias">Noticias</NavLink>
                            </li>
                            <li className="font-koulen">
                                <NavLink href="/articulos">Artículos</NavLink>
                            </li>
                            <li className="font-koulen">
                                <NavLink href="/nosotros">Nosotros</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
