import React, { useState, useMemo } from "react";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import Borrar from "@/Components/Borrar";
import CambiarImagenModal from "./CambiarImagenModal";

export default function NoticiasTable({ noticias }) {
    const { delete: handleDelete } = useForm();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [noticiaToDelete, setNoticiaToDelete] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()}`;
        return formattedDate;
    };

    const filteredNoticias = useMemo(() => {
        return noticias.data.filter((noticia) => {
            const searchInLower = searchTerm.toLowerCase();
            return (
                noticia.id.toString().includes(searchInLower) ||
                noticia.titulo.toLowerCase().includes(searchInLower) ||
                noticia.usuario.name.toLowerCase().includes(searchInLower) ||
                noticia.resumen.toLowerCase().includes(searchInLower) ||
                formatDate(noticia.created_at).includes(searchInLower)
            );
        });
    }, [noticias.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNoticias.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const handleShowDeleteModal = (noticia) => {
        setNoticiaToDelete(noticia);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (noticiaToDelete) {
            handleDelete(route("noticias.destroy", noticiaToDelete.id));
            setShowDeleteModal(false);
        }
    };

    return (
        <div
            className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
        >
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-md ml-4  text-white outline-none focus:border-opacity-0 bg-red-900 mb-4"
            />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {filteredNoticias.length === 0 ? (
                    <div className="text-center font-koulen py-4 text-gray-700 dark:text-gray-400">
                        No hay resultados
                    </div>
                ) : (
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 ">
                    <thead className="text-sm font-koulen text-gray-700 uppercase bg-red-300 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID de la Noticia
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Titulo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Resumen
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Autor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de Creacion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((noticia) => (
                            <tr
                                className="border-b hover:bg-blue-100"
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
                                        {noticia.resumen}
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        href={`/usuarios/${noticia.user_id}`}
                                        className="text-blue-600"
                                    >
                                        {noticia.usuario.name}
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(noticia.created_at)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center space-x-2">
                                        <div className="relative group inline-block">
                                        <CambiarImagenModal
                                            noticiaId={noticia.id}
                                        />
                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Cambiar Archivos
                                            </span>
                                        </div>
                                        <div className="relative group inline-block">
                                        <a
                                            href={`/noticias/${noticia.id}/edit`}
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <img
                                                src="/img/iconos/edit.svg"
                                                alt="Icono Editar"
                                                className="w-4 h-4"
                                                style={{ minWidth: "12px", minHeight: "12px" }}
                                            />
                                        </a>
                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Editar Noticia
                                            </span>
                                        </div>
                                        <div className="relative group inline-block">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleShowDeleteModal(noticia)
                                            }
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"

                                        >
                                            <img
                                                src="/img/iconos/trash.svg"
                                                alt="Icono Borrar"
                                                className="w-4 h-4"
                                                style={{ minWidth: "12px", minHeight: "12px" }}
                                            />
                                        </button>
                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Borrar Noticia
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
                {/* Paginación */}
                <div className="flex justify-center mt-4 mb-4">
                    {Array.from({
                        length: Math.ceil(
                            filteredNoticias.length / itemsPerPage
                        ),
                    }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 mx-1 rounded-md ${
                                currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            {/* Modal de Confirmación de Borrado */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">
                            ¿Estás seguro de que quieres borrar esta noticia?
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                onClick={() => handleConfirmDelete()}
                            >
                                Borrar
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
