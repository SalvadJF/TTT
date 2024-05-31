import React, { useState, useMemo } from "react";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import CambiarImagenYModeloModal from "./CambiarImagenYModeloModal";

export default function ArticulosTable({ articulos }) {
    const { delete: handleDelete } = useForm();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [articuloToDelete, setArticuloToDelete] = useState(null);

    const filteredArticulos = useMemo(() => {
        return articulos.data.filter((articulo) =>
            articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [articulos.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredArticulos.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()}`;
        return formattedDate;
    };

    const handleShowDeleteModal = (articulo) => {
        setArticuloToDelete(articulo);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (articuloToDelete) {
            handleDelete(route("articulos.destroy", articuloToDelete.id));
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
                className="px-4 py-2 border rounded-md mb-4"
            />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID del Articulo
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
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((articulo) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={articulo.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {articulo.id}
                                </th>
                                <td className="px-6 py-4">
                                    <a
                                        href={`/articulos/${articulo.id}`}
                                        className="text-blue-600"
                                    >
                                        {articulo.nombre}
                                    </a>
                                </td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {articulo.user.name}
                                </th>
                                <td className="px-6 py-4">
                                    {formatDate(articulo.created_at)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center space-x-2">
                                        <CambiarImagenYModeloModal
                                            articuloId={articulo.id}
                                        />
                                        <a
                                            href={`/articulos/${articulo.id}/edit`}
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <img
                                                src="/img/iconos/edit.svg"
                                                alt="Icono Editar"
                                                className="w-4 h-4"
                                            />
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleShowDeleteModal(articulo)
                                            }
                                            className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-400 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <img
                                                src="/img/iconos/trash.svg"
                                                alt="Icono Borrar"
                                                className="w-4 h-4"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Paginación */}
                <div className="flex justify-center mt-4 mb-4">
                    {Array.from({
                        length: Math.ceil(
                            filteredArticulos.length / itemsPerPage
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
                            ¿Estás seguro de que quieres borrar este artículo?
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
