import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import Encabezado from '@/Components/Encabezado';
import ComentariosTable from '@/Components/ComentariosTable';

export default function Comentarios ({
    auth,
    admin,
    comentarios,
}) {
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Comentarios</h2>}
    >
        <Head title="Admin" />

        <div class=" ml-20 pt-40">
            <Breadcrumbs />
        </div>

        <AdminHeader admin={admin} />

        <Encabezado texto="Comentarios en la Base de datos" />

        <ComentariosTable comentarios={comentarios} />

    </AuthenticatedLayout>
    )
}
