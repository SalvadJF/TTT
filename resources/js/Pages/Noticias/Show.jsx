import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Encabezado from "@/Components/Encabezado";
import { BreadcrumbNoticiasShow } from "@/Components/BreadCrumb";

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

      <div class=" ml-20 pt-40">
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
            <h5 className="mt-4 text-lg font-bold">Tipo</h5>
            <p className="mb-4">{noticia.tipo}</p>
            <h5 className="mt-4 text-lg font-bold">Etiquetas</h5>
            <ul className="mb-4 text-white">
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
            <p className="mt-5 text-xl font-lato">{noticia.resumen}</p>
            <p className="mt-5 text-xl font-lato">{noticia.contenido}</p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
