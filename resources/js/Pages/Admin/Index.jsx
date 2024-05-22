import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';

function AccordionItem({title, count, createdAt, linkText, linkHref}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div class="border-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
            <h2 id={`accordion-color-heading-${title}`}>
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3" onClick={handleClick} aria-expanded={isOpen} aria-controls={`accordion-color-body-${title}`}>
                    <span>{title}</span>
                    <svg data-accordion-icon class={`w-3 h-3 rotate-${isOpen ? '0' : '180'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id={`accordion-color-body-${title}`} class={`${isOpen ? '' : 'hidden'} gap-3`}>
                <p class="mb-5 text-white dark:text-gray-400">Numero actual de {title.toLowerCase()} {count}</p>
                <p class="mb-5 text-white dark:text-gray-400">Ultimo {title.toLowerCase()} creado {createdAt}</p>
                <a href={linkHref} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{linkText}</a>
            </div>
        </div>
    );
}

export default function Index ({
    auth,
    admin,
    usuarios,
    ultimoUsuario,
    noticias,
    ultimaNoticia,
    articulos,
    ultimoArticulo,
    comentarios,
    ultimoComentario,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articulos</h2>}
        >
            <Head title="Admin" />

            <div class=" ml-20 pt-40">
                <Breadcrumbs />
            </div>

            <AdminHeader admin={admin} />

            <div id="accordion-color" data-accordion="collapse">
                <AccordionItem title="Usuarios" count={usuarios.count} createdAt={ultimoUsuario.created_at} linkText="Usuarios DB" linkHref={route('admin.usuarios')} />
                <AccordionItem title="Articulos" count={articulos.count} createdAt={ultimoArticulo.created_at} linkText="Articulos DB" linkHref={route('admin.articulos')} />
                <AccordionItem title="Noticias" count={noticias.count} createdAt={ultimaNoticia.created_at} linkText="Noticias DB" linkHref={route('admin.noticias')} />
                <AccordionItem title="Comentarios" count={comentarios.count} createdAt={ultimoComentario.created_at} linkText="Comentarios DB" linkHref={route('admin.comentarios')} />
            </div>
        </AuthenticatedLayout>
        )
    }
