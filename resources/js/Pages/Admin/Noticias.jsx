import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import Encabezado from '@/Components/Encabezado';
import NoticiasTable from '@/Components/NoticiasTable';


export default function Noticias ({
    auth,
    admin,
    noticias,
}) {
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
    >
        <Head title="Admin" />

        <div class=" ml-20 pt-40">
            <Breadcrumbs />
        </div>

        <AdminHeader admin={admin} />

        <div class=" ml-20">
            <Encabezado texto="Noticias en la Base de datos" />
        </div>

        <NoticiasTable noticias={noticias} />

    </AuthenticatedLayout>
);
}

