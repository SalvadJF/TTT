import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BreadcrumbAdminShows } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import OtrosTable from '@/Components/OtrosTable';
import Encabezado from '@/Components/Encabezado';

export default function Otros ({
    auth,
    admin,
    etiquetas,
    categorias
}) {
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Otros</h2>}
    >
        <Head title="Admin" />

        <div className=" ml-20 pt-40">
            <BreadcrumbAdminShows shows="Otros" ruta={route('admin.otros')} />
        </div>

        <AdminHeader admin={admin} />

        <div className=" ml-20">
            <Encabezado texto="Otros elementos en la Base de datos" />
        </div>

        <OtrosTable etiquetas={etiquetas} categorias={categorias} />


    </AuthenticatedLayout>
);
}
