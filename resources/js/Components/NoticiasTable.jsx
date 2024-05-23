import React, { useState, useMemo } from "react";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function NoticiasTable({ noticias }) {
    const { delete: handleDelete } = useForm();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const filteredNoticias = useMemo(() => {
        return noticias.data.filter(noticia =>
            noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [noticias.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNoticias.slice(indexOfFirstItem, indexOfLastItem);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    return (
        <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
        >
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-md mb-4"
            />
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
                            Autor
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
                    {currentItems.map((noticia) => (
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
                                    {noticia.titulo}
                                </a>
                            </td>
                            <td className="px-6 py-4">
                                <a
                                    href={`/noticias/${noticia.id}`}
                                    className="text-blue-600"
                                >
                                    {noticia.usuario.name}
                                </a>
                            </td>
                            <td className="px-6 py-4">{formatDate(noticia.created_at)}</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href={`/noticias/${noticia.id}/edit`}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-2"
                                >
                                    Editar
                                </a>
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
            {/* Paginación */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredNoticias.length / itemsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
