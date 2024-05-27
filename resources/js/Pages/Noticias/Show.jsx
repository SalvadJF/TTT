import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Encabezado from "@/Components/Encabezado";
import { useEffect } from "react";

export default function Show({ auth, noticia, etiquetas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Noticia
                </h2>
            }
        >
            <Head title="noticia" />
            <div className="p-40">
                <div className="w-full h-80 flex justify-center items-center">
                    <img
                        src={noticia.imagen}
                        className="m-auto max-h-40vh"
                        style={{ maxWidth: "100%" }}
                    />
                </div>

                <div className="p-10">
                    <Encabezado texto={noticia.titulo} />
                    <h5>Tipo</h5>
                    <p>{noticia.tipo}</p>
                    <h5>Etiquetas</h5>
                    <ul className="mb-2 text-white">
                        {etiquetas.length > 0 ? (
                            etiquetas.map((etiqueta) => (
                                <li key={etiqueta.id} className="font-koulen">
                                    {etiqueta.nombre}
                                </li>
                            ))
                        ) : (
                            <li>Sin etiquetas</li>
                        )}
                    </ul>

                    <p className="mt-5 text-2xl">{noticia.contenido}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
