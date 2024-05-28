import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Encabezado from "@/Components/Encabezado";
import { BreadcrumbNoticiasShow } from "@/Components/BreadCrumb";
import { BotonTipo, BotonEtiqueta } from "@/Components/Botones";

export default function Show({ auth, noticia, etiquetas }) {
    // Función para insertar saltos de línea después de cada punto
    const formatText = (text) => {
        return text
            .split(".")
            .map((sentence, index, array) =>
                index < array.length - 1 ? sentence + ".\n" : sentence
            )
            .join("");
    };

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

            <div className="ml-20 pt-40">
                <BreadcrumbNoticiasShow noticia={noticia.titulo} />
            </div>

            <div className="flex flex-col items-center p-5 sm:p-10 lg:p-20 w-full">
                <div className="w-full max-w-[1500px]">
                    <div className="w-full h-auto flex justify-center items-center mb-2">
                        <img
                            src={noticia.imagen}
                            className="max-h-[40vh] w-full object-cover rounded-lg shadow-lg"
                            alt={noticia.titulo}
                        />
                    </div>
                    <div className="p-5 sm:p-10 bg-gray-900 text-white rounded-lg shadow-lg">
                        <Encabezado texto={noticia.titulo} />
                        <BotonTipo
                            texto={noticia.tipo}
                            className="mb-4 text-sm"
                        />
                        <div className="mb-4 text-white flex flex-row flex-wrap justify-left items-center">
                            <h5 className=" text-lg font-koulen">
                                Etiquetas
                            </h5>
                            {etiquetas.length > 0 ? (
                                etiquetas.map((etiqueta) => (
                                    <BotonEtiqueta
                                        key={etiqueta.id}
                                        texto={etiqueta.nombre}
                                        className="m-2"
                                    />
                                ))
                            ) : (
                                <li>Sin etiquetas</li>
                            )}
                        </div>

                        <p
                            className="mt-5 text-xl font-lato"
                            style={{ whiteSpace: "pre-line" }}
                        >
                            {formatText(noticia.resumen)}
                        </p>
                        <p
                            className="mt-5 text-xl font-lato"
                            style={{ whiteSpace: "pre-line" }}
                        >
                            {formatText(noticia.contenido)}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
