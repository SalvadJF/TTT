import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BreadcrumbPerfilOtros } from "@/Components/BreadCrumb";

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
            <Head title="Factura" />
            <div className="ml-20 pt-40">
            <BreadcrumbPerfilOtros nombre={`Factura Nº ${factura.id}`} />
            </div>

            <div className="max-w-screen-md mx-auto p-4 md:p-8">
                <div className="bg-gray-800 rounded-lg shadow-xl p-4 md:p-8 lg:p-12">
                    <div className="text-center mb-4 md:mb-8">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-koulen text-white">
                            Factura Nº {factura.id}
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <div className="text-white text-center">
                            <img
                                src={`${factura.articulo.imagen}`}
                                className="m-auto"
                                style={{ maxWidth: "100%" }}
                                alt="Imagen del artículo"
                            />
                        </div>
                        <div className="text-white text-center">
                            <ul>
                                <li className="font-koulen p-2">
                                    Numero de Factura: {factura.id}
                                </li>
                                <li className="font-koulen p-2">
                                    Fecha de Emision: {new Date(factura.created_at).toLocaleDateString()}
                                </li>
                                <li className="font-koulen p-2">
                                    Precio de Compra: {factura.precio_venta} €
                                </li>
                                <li className="font-koulen p-2">
                                    Comprador: {factura.user.name}
                                </li>
                            </ul>
                        </div>
                        <div className="text-white text-center">
                            <a
                                href={`/img/modelos/${factura.articulo.modelo}`}
                                className="bg-red-800 hover:bg-red-900 text-white font-koulen py-2 md:py-3 px-3 md:px-4 rounded inline-block"
                                download
                            >
                                Descargar Modelo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
