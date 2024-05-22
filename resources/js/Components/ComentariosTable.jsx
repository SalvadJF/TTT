import { useForm } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";

export default function ComentariosTable({ comentarios }) {
    const { delete: handleDelete } = useForm();

    return (
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID del Comentario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lugar
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Autor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contenido
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha de Creacion
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {comentarios.data.map((comentario) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={comentario.id}
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {comentario.id}
                            </th>
                            <td className="px-6 py-4">
                                {comentario.comentable_type}
                            </td>
                            <td className="px-6 py-4">
                                {comentario.user_id}
                            </td>
                            <td className="px-6 py-4">
                                {comentario.contenido}
                            </td>
                            <td className="px-6 py-4">
                                {comentario.created_at}
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleDelete(
                                            route(
                                                "comentarios.destroy",
                                                comentario.id
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
                        {comentarios.links.map((link, index) => (
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
