import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ArticuloExposicion from "@/Components/ArticuloExposicion";
import Encabezado from "@/Components/Encabezado";
import Boton from "@/Components/Botones";
import { useEffect } from "react";

export default function Show({
    auth,
    noticia,
    categorias,
    etiquetas,
    user,
}){
  return (
    <AuthenticatedLayout
    user={auth.user}
    header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Articulos
        </h2>
    }
>
    <Head title="Articulos" />
    <div className="p-40">

        <div className='w-full h-1/2 flex justify-center div-oscuro'>

            <img src={noticia.imagen} className="m-auto" style={{ maxWidth: '100%' }}></img>

        </div>

        <div className="p-40 div-oscuro">

            <Encabezado texto={noticia.titulo} />

            <p className="mt-5 text-2xl">{noticia.contenido}</p>

        </div>

    </div>
    </AuthenticatedLayout>
  );
}


