import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BreadcrumbAdminShows } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import ArticulosTable from '@/Components/ArticulosTable';
import Encabezado from '@/Components/Encabezado';

export default function Articulos ({
    auth,
    admin,
    articulos,
}) {
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articulos</h2>}
    >
        <Head title="Admin" />

        <div class=" ml-20 pt-40">
            <BreadcrumbAdminShows shows="Articulos" ruta={route('admin.articulos')} />
        </div>

        <AdminHeader admin={admin} />

        <div class=" ml-20">
            <Encabezado texto="Articulos en la Base de datos" />
        </div>

        <ArticulosTable articulos={articulos} />


    </AuthenticatedLayout>
);
}

