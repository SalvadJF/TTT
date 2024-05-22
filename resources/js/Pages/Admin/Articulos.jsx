import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/Components/BreadCrumb';
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
            <Breadcrumbs />
        </div>

        <AdminHeader admin={admin} />

        <Encabezado texto="Articulos en la Base de datos" />

        <ArticulosTable articulos={articulos} />


    </AuthenticatedLayout>
);
}

