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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()}`;
        return formattedDate;
    };

    const filteredArticulos = useMemo(() => {
        const searchTermLower = searchTerm.toLowerCase();
        return articulos.data.filter((articulo) => {
            return (
                articulo.id.toString().includes(searchTermLower) ||
                articulo.nombre.toLowerCase().includes(searchTermLower) ||
                articulo.tipo.toLowerCase().includes(searchTermLower) ||
                articulo.user.name.toLowerCase().includes(searchTermLower) ||
                formatDate(articulo.created_at).includes(searchTermLower)
            );
        });
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
                className="px-4 py-2 border rounded-md ml-4  text-white outline-none focus:border-opacity-0 bg-red-900 mb-4"
            />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {filteredArticulos.length === 0 ? (
                    <div className="text-center font-koulen py-4 text-gray-700 dark:text-gray-400">
                        No hay resultados
                    </div>
                ) : (
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 ">
                    <thead className="text-sm font-koulen text-gray-700 uppercase bg-red-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID del Articulo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Titulo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Autor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de Creacion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Likes
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((articulo) => (
                            <tr
                                className="border-b hover:bg-blue-100 text-center"
                                key={articulo.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {articulo.id}
                                </th>
                                <td className="px-6 py-4 ">
                                    <a
                                        href={`/articulos/${articulo.id}`}
                                        className="text-blue-600"
                                    >
                                        {articulo.nombre}
                                    </a>
                                </td>
                                <td className="px-6 py-4 ">{articulo.tipo}</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <a
                                        href={`/usuarios/${articulo.user_id}`}
                                        className="text-blue-600"
                                    >
                                        {articulo.user.name}
                                    </a>
                                </th>

                                <td className="px-6 py-4 ">
                                    {formatDate(articulo.created_at)}
                                </td>
                                <td className="px-6 py-4 ">
                                    {articulo.contadores[0].cantidad}
                                </td>

                                <td className="px-6 py-4  text-center">
                                    <div className="flex justify-center space-x-2">
                                        <div className="relative group inline-block">
                                            <CambiarImagenYModeloModal
                                                articuloId={articulo.id}
                                            />
                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Cambiar Archivos
                                            </span>
                                        </div>
                                        <div className="relative group inline-block">
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
                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Editar Articulo
                                            </span>
                                        </div>
                                        <div className="relative group inline-block">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleShowDeleteModal(
                                                        articulo
                                                    )
                                                }
                                                className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-400 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                <img
                                                    src="/img/iconos/trash.svg"
                                                    alt="Icono Borrar"
                                                    className="w-4 h-4"
                                                />
                                            </button>
                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Borrar Artículo
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
