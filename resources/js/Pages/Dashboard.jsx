import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NoticiasIndex from "@/Components/NoticiasIndex";
import ArticuloLista from "@/Components/ArticuloLista";
import Encabezado from "@/Components/Encabezado";
import { Breadcrumbs } from "@/Components/BreadCrumb";
import Carrusel from "@/Components/Carrusel";
import { BotonPrincipal } from "@/Components/Botones";

export default function Dashboard({ auth, noticias, articulos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div class=" ml-20 pt-40">
                <Breadcrumbs />
            </div>

            <Carrusel />
            <div>
                <div class="flex flex-col items-center justify-center  p-10">
                    <Encabezado texto="Novedades" />
                    <NoticiasIndex noticias={noticias} />
                    <BotonPrincipal ruta="/noticias" texto="Leer mas" />
                </div>
            </div>

            <div>
                <div class="flex flex-col items-center justify-center  p-10">
                    <Encabezado texto="Ultimas Aportaciones" />
                    <ArticuloLista articulos={articulos} />
                    <BotonPrincipal ruta="/articulos" texto="Ver Galeria" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
