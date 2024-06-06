import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BreadcrumbAdminShows } from '@/Components/BreadCrumb';
import AdminHeader from '@/Components/AdminHeader';
import FacturasTable from '@/Components/FacturasTable';
import Encabezado from '@/Components/Encabezado';

export default function Articulos ({
    auth,
    admin,
    facturas,
}) {
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Albaranes</h2>}
    >
        <Head title="Admin" />

        <div class=" ml-20 pt-40">
            <BreadcrumbAdminShows shows="Albaranes" ruta={route('admin.facturas')} />
        </div>

        <AdminHeader admin={admin} />

        <div class=" ml-20">
            <Encabezado texto="Albaranes en la Base de datos" />
        </div>

        <FacturasTable facturas={facturas} />


    </AuthenticatedLayout>
);
}

