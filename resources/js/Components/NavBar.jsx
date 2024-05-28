import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';

export default function NavBar({ user, className = '', children, ...props }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 h-32 w-full fixed top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <ApplicationLogo className="w-20 h-20" />
                    </Link>
                    <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
                        <div className=" sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="font-koulen flex text-sm bg-cyan-100 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                                id="user-menu-button"
                                            >
                                                <span className="sr-only">Abrir Menu</span>
                                                {user?.avatar ? (
                                                    <img className="w-12 h-12 rounded-full" src={user.avatar} alt="user" />
                                                ) : (
                                                    <img className="w-12 h-12 rounded-full" src="/img/users/avatar.png" alt="user" />
                                                )}
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/profile">Mi Perfil</Dropdown.Link>
                                        {user?.admin && (
                                            <Dropdown.Link href={route('admin.index')}>Menu Admin</Dropdown.Link>
                                        )}
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Cerrar sesión
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
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
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
