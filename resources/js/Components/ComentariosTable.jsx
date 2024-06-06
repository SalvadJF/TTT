import React, { useState, useMemo } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ComentariosTable({ comentarios }) {
    const { delete: handleDelete } = useForm();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [comentarioToDelete, setComentarioToDelete] = useState(null);

    const filteredComentarios = useMemo(() => {
        return comentarios.data.filter(comentario =>
            comentario.contenido.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [comentarios.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredComentarios.slice(indexOfFirstItem, indexOfLastItem);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const getComentableName = (comentario) => {
        if (comentario.comentable_type === "App\\Models\\Articulo" && comentario.comentable) {
            return (
                <Link href={`/articulos/${comentario.comentable_id}`} className="text-blue-500 hover:underline">
                    {comentario.comentable.nombre}
                </Link>
            );
        } else if (comentario.comentable_type === "App\\Models\\Noticia" && comentario.comentable) {
            return (
                <Link href={`/noticias/${comentario.comentable_id}`} className="text-blue-500 hover:underline">
                    {comentario.comentable.titulo}
                </Link>
            );
        } else {
            return "Desconocido";
        }
    };

    const handleDeleteClick = (comentario) => {
        setComentarioToDelete(comentario);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        handleDelete(route("comentarios.destroy", comentarioToDelete.id));
        setShowDeleteModal(false);
    };

    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
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
                        <th scope="col" className="px-6 py-3">ID del Comentario</th>
                        <th scope="col" className="px-6 py-3">Lugar</th>
                        <th scope="col" className="px-6 py-3">Autor</th>
                        <th scope="col" className="px-6 py-3">Contenido</th>
                        <th scope="col" className="px-6 py-3">Fecha de Creacion</th>
                        <th scope="col" className="px-6 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((comentario) => (
                        <tr
                        className="border-b hover:bg-blue-100 text-center"
                        key={comentario.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {comentario.id}
                            </th>
                            <td className="px-6 py-4">
                                {getComentableName(comentario)}
                            </td>
                            <td className="px-6 py-4">
                                    <a
                                        href={`/usuarios/${comentario.user_id}`}
                                        className="text-blue-600"
                                    >
                                {comentario.user.name}
                                    </a>
                            </td>
                            <td className="px-6 py-4">
                                {comentario.contenido}
                            </td>
                            <td className="px-6 py-4">
                                {formatDate(comentario.created_at)}
                            </td>
                            <td>
                            <div className="relative group inline-block">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteClick(comentario)}
                                    className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" />
                                </button>
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Borrar Comentario
                                            </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4 mb-4">
                {Array.from({ length: Math.ceil(filteredComentarios.length / itemsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres borrar este comentario?</p>
                        <div className="flex justify-center">
                            <button className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => handleConfirmDelete()}>Borrar</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
