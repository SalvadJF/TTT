import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function NoticiasTable({ noticias }) {
    const { delete: handleDelete } = useForm();

    return (
        <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
        >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID de la Noticia
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Titulo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha de Creacion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {noticias.data.map((noticia) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={noticia.id}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {noticia.id}
                            </th>
                            <td className="px-6 py-4">
                                <a
                                    href={`/noticias/${noticia.id}`}
                                    className="text-blue-600"
                                >
                                    {noticia.nombre}
                                </a>
                            </td>
                            <td className="px-6 py-4">{noticia.created_at}</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href={`/noticias/${noticia.id}/edit`}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-2"
                                >
                                    Editar
                                </a>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleDelete(
                                            route(
                                                "noticias.destroy",
                                                noticia.id
                                            )
                                        )
                                    }
                                    className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-5 p-5">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex items-center -space-x-px">
                        {noticias.links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.url || "#"}
                                    className={`px-3 py-2 leading-tight ${
                                        link.active
                                            ? "text-blue-600"
                                            : "text-gray-500"
                                    } ${link.url ? "hover:bg-gray-200" : ""}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
