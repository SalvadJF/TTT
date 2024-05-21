import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { BreadcrumbArticulos } from '@/Components/BreadCrumb';
import Modelo3D from '@/Components/Modelo3D';
import ArticulosLista from '@/Components/ArticulosLista';

export default function Index({ auth, articulos }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="hiden font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <BreadcrumbArticulos />
            <ArticulosLista articulos={articulos} />
        </AuthenticatedLayout>
    );
}
