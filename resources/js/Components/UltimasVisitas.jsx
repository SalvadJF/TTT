import { getVisitedArticulos } from "@/Utils/cookieUtils";
import { Link } from '@inertiajs/react';

const UltimasVisitas = () => {
    const visitedArticulos = getVisitedArticulos();

    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-koulen text-xl text-gray-800 dark:text-white mb-4 text-center">Últimas Visitas</h3>
            {visitedArticulos.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300 text-center font-koulen">
                    No se encontraron artículos visitados.
                </p>
            ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Imagen
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitedArticulos.map((articulo, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center">
                                            <img src={articulo.imagen} alt="Imagen Articulo" className="w-20 h-20" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <Link href={`/articulos/${articulo.id}`} className="text-blue-600">
                                            {articulo.nombre}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(articulo.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UltimasVisitas;
