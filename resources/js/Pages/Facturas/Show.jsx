import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Encabezado from "@/Components/Encabezado";

export default function Show({ auth, factura }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Factura
                </h2>
            }
        >
            <Head title="Articulos" />
            <div className="p-40">
                <div className="w-full h-1/2 flex justify-center div-oscuro">
                    <img
                        src={`/${factura.articulo.imagen}`}
                        className="m-auto"
                        style={{ maxWidth: "30%" }}
                        alt="Imagen del artículo"
                    />
                </div>

                <div className="p-40 div-oscuro justify-center text-center">
                    <Encabezado texto={factura.articulo.nombre} />
                    <h5>Datos</h5>
                    <ul className="mb-2 text-white">
                        <li className="font-koulen">
                            Numero de Factura: {factura.id}
                        </li>
                        <li className="font-koulen">
                            Fecha de Emision: {new Date(factura.created_at).toLocaleDateString()}
                        </li>
                        <li className="font-koulen">
                            Precio de Compra: {factura.precio_venta}
                        </li>
                        <li className="font-koulen">
                            Autor: {factura.user.name}
                        </li>
                    </ul>
                    <a
                        href={`/img/modelos/${factura.articulo.modelo}`}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        download
                    >
                        Descargar Modelo
                    </a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
