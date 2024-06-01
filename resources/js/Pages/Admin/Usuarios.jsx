import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BreadcrumbAdminShows } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import Encabezado from '@/Components/Encabezado';
import UsuariosTable from '@/Components/UsuariosTable';

export default function Usuarios ({
    auth,
    admin,
    usuarios,
}) {
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>}
    >
        <Head title="Admin" />

        <div class=" ml-20 pt-40">
            <BreadcrumbAdminShows  shows="Usuarios" ruta={route('admin.usuarios')} />
        </div>

        <AdminHeader admin={admin} />

        <div className=" ml-20">
            <Encabezado texto="Usuarios en la Base de datos" />
        </div>

        <UsuariosTable usuarios={usuarios} />

    </AuthenticatedLayout>
    )
}
