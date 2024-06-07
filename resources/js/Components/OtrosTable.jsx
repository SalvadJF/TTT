import React, { useState, useMemo } from "react";
import { useForm } from "@inertiajs/react";

export default function OtrosTable({ categorias, etiquetas }) {
    const { delete: handleDelete, put } = useForm();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [newName, setNewName] = useState("");

    const todos = useMemo(() => {
        const mergedData = [...categorias, ...etiquetas];
        return mergedData.filter((item) =>
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [categorias, etiquetas, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = todos.slice(indexOfFirstItem, indexOfLastItem);

    const handleShowDeleteModal = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (itemToDelete) {
            const routeName = categorias.includes(itemToDelete)
                ? "categorias.destroy"
                : "etiquetas.destroy";
            handleDelete(route(routeName, itemToDelete.id));
            setShowDeleteModal(false);
        }
    };

    const handleShowEditModal = (item) => {
        setItemToEdit(item);
        setNewName(item.nombre);
        setShowEditModal(true);
    };

    const handleConfirmEdit = () => {
        if (itemToEdit) {
            const routeName = categorias.includes(itemToEdit)
                ? "categorias.update"
                : "etiquetas.update";
            put(route(routeName, itemToEdit.id), { nombre: newName });
            setShowEditModal(false);
        }
    };

    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
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
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Tipo</th>
                            <th scope="col" className="px-6 py-3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr className="border-b hover:bg-blue-100 text-center" key={item.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.id}
                                </th>
                                <td className="px-6 py-4">{item.nombre}</td>
                                <td className="px-6 py-4">{categorias.includes(item) ? 'Categoría' : 'Etiqueta'}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center space-x-2">
                                        <div className="relative group inline-block">
                                            <button
                                                onClick={() => handleShowEditModal(item)}
                                                className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                <img src="/img/iconos/edit.svg" alt="Icono Editar" className="w-4 h-4" />
                                            </button>
                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Editar
                                            </span>
                                        </div>
                                        <div className="relative group inline-block">
                                            <button
                                                type="button"
                                                onClick={() => handleShowDeleteModal(item)}
                                                className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-400 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" />
                                            </button>
                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Borrar
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Paginación */}
                <div className="flex justify-center mt-4 mb-4">
                    {Array.from({ length: Math.ceil(todos.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
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
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres borrar este elemento?</p>
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
            {/* Modal de Edición */}
            {showEditModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">Editar Nombre</p>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="px-4 py-2 border rounded-md mb-4"
                        />
                        <div className="flex justify-center">
                            <button
                                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={() => handleConfirmEdit()}
                            >
                                Guardar
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                                onClick={() => setShowEditModal(false)}
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
