import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BreadcrumbAdmin } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import  AcordeonAdmin from '@/Components/AcordeonAdmin';


export default function Index ({
    auth,
    admin,
    usuariosCount,
    ultimoUsuario,
    noticiasCount,
    ultimaNoticia,
    articulosCount,
    ultimoArticulo,
    comentariosCount,
    ultimoComentario,
    facturasCount,
    ultimaFactura,
    otrosCount,
    ultimosOtros

}) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articulos</h2>}
        >
            <Head title="Admin" />

            <div className="ml-20 pt-40">
                <BreadcrumbAdmin />
            </div>

            <AdminHeader admin={admin} />

            <div id="accordion-color" data-accordion="collapse">
                <AcordeonAdmin
                    title="Usuarios"
                    count={usuariosCount}
                    createdAt={ultimoUsuario ? formatDate(ultimoUsuario.created_at) : 'No hay usuarios'}
                    linkText="Usuarios DB"
                    nombre={ultimoUsuario.name}
                    linkHref={route('admin.usuarios')}
                />
                <AcordeonAdmin
                    title="Articulos"
                    count={articulosCount}
                    createdAt={ultimoArticulo ? formatDate(ultimoArticulo.created_at) : 'No hay artículos'}
                    linkText="Artículos DB"
                    nombre={ultimoArticulo.nombre}
                    linkHref={route('admin.articulos')}
                />
                <AcordeonAdmin
                    title="Noticias"
                    count={noticiasCount}
                    createdAt={ultimaNoticia ? formatDate(ultimaNoticia.created_at) : 'No hay noticias'}
                    linkText="Noticias DB"
                    nombre={ultimaNoticia.titulo}
                    linkHref={route('admin.noticias')}
                >
                    <a href="noticias/create" className="font-koulen text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Crear Nueva Noticia</a>
                </AcordeonAdmin>
                <AcordeonAdmin
                    title="Comentarios"
                    count={comentariosCount}
                    createdAt={ultimoComentario ? formatDate(ultimoComentario.created_at) : 'No hay comentarios'}
                    linkText="Comentarios DB"
                    nombre={ultimoComentario.user.name}
                    linkHref={route('admin.comentarios')}
                />
                <AcordeonAdmin
                    title="Categorias y Etiquetas"
                    count={otrosCount}
                    createdAt={ultimosOtros ? formatDate(ultimosOtros.created_at) : 'No hay Otros elementos'}
                    linkText="Otros Elementos DB"
                    nombre={ultimosOtros.nombre}
                    linkHref={route('admin.otros')}
                />
                <AcordeonAdmin
                    title="Albaranes"
                    count={facturasCount}
                    createdAt={ultimaFactura ? formatDate(ultimaFactura.created_at) : 'No hay albaranes'}
                    linkText="Albaranes DB"
                    nombre={ultimaFactura.id}
                    linkHref={route('admin.facturas')}
                />
            </div>
        </AuthenticatedLayout>
    );
}
