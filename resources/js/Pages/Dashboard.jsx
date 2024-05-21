import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NoticiaLista from '@/Components/NoticiaLista';
import ArticuloLista from '@/Components/ArticuloLista';
import Encabezado from '@/Components/Encabezado';
import  Boton  from '@/Components/Botones';
import { Breadcrumbs } from '@/Components/BreadCrumb';

export default function Dashboard({ auth, noticias, articulos, }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div class=" ml-20 pt-40">
                <Breadcrumbs />
            </div>


            <div>
                <div class="flex flex-col items-center justify-center  p-10">
                <Encabezado texto="Novedades" />
                <NoticiaLista noticias={noticias} />

            </div>

            <Boton ruta="/noticias" texto="Leer mas" />

            </div>

            <div>
                <div class="flex flex-col items-center justify-center  p-10">
                <Encabezado texto="Ultimas Aportaciones" />
                <ArticuloLista articulos={articulos} />
                </div>
            <Boton ruta="/articulos" texto="Ver Galeria" />
            </div>

        </AuthenticatedLayout>
    );
}
