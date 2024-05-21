import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NoticiaLista from '@/Components/NoticiaLista';
import ArticuloLista from '@/Components/ArticuloLista';
import Encabezado from '@/Components/Encabezado';
import  Boton  from '@/Components/Botones';

export default function Dashboard({ auth, noticias, articulos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
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
