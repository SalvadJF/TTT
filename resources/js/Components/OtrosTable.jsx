import React, { useState, useMemo } from "react";
import { useForm } from "@inertiajs/react";
import CrearCategoriaModal from "./CrearCategoriaModal";
import CrearEtiquetaModal from "./CrearEtiquetaModal";
import EditarEtiquetaModal from "./EditarEtiquetaModal";
import EditarCategoriaModal from "./EditarCategoriaModal";
import { BotonTipoModal } from "./Botones";

export default function OtrosTable({ categorias, etiquetas }) {
    const { delete: handleDelete, put } = useForm();
    const [searchTermCategorias, setSearchTermCategorias] = useState("");
    const [searchTermEtiquetas, setSearchTermEtiquetas] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [showCrearCategoriaModal, setShowCrearCategoriaModal] = useState(false);
    const [showCrearEtiquetaModal, setShowCrearEtiquetaModal] = useState(false);
    const [showEditCategoriaModal, setShowEditCategoriaModal] = useState(false);
    const [showEditEtiquetaModal, setShowEditEtiquetaModal] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);

    const filteredCategorias = useMemo(() => {
        return categorias.filter((item) =>
            item.nombre.toLowerCase().includes(searchTermCategorias.toLowerCase())
        );
    }, [categorias, searchTermCategorias]);

    const filteredEtiquetas = useMemo(() => {
        return etiquetas.filter((item) =>
            item.nombre.toLowerCase().includes(searchTermEtiquetas.toLowerCase())
        );
    }, [etiquetas, searchTermEtiquetas]);

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

    const handleShowCrearCategoriaModal = () => {
        setShowCrearCategoriaModal(true);
    };

    const handleShowCrearEtiquetaModal = () => {
        setShowCrearEtiquetaModal(true);
    };

    const handleShowEditCategoriaModal = (item) => {
        setItemToEdit(item);
        setShowEditCategoriaModal(true);
    };

    const handleShowEditEtiquetaModal = (item) => {
        setItemToEdit(item);
        setShowEditEtiquetaModal(true);
    };


    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <div className="flex">
                {/* Categorías */}
                <div className="w-1/2 pr-2">
                    <BotonTipoModal
                        texto="Crear Categoría"
                        onClick={handleShowCrearCategoriaModal}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    />
                    <input
                        type="text"
                        placeholder="Buscar Categorías..."
                        value={searchTermCategorias}
                        onChange={(e) => setSearchTermCategorias(e.target.value)}
                        className="px-4 py-2 border rounded-md mb-4 w-full"
                    />
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Nombre</th>
                                    <th scope="col" className="px-6 py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCategorias.map((item) => (
                                    <tr className="border-b hover:bg-blue-100 text-center" key={`categoria-${item.id}`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.id}
                                        </th>
                                        <td className="px-6 py-4">{item.nombre}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <div className="relative group inline-block">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleShowEditCategoriaModal(item)}
                                                        className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                                                    >
                                                        <img src="/img/iconos/edit.svg" alt="Icono Editar" className="w-4 h-4" />
                                                    </button>
                                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                        Editar Categoría
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
                    </div>
                </div>
                {/* Etiquetas */}
                <div className="w-1/2 pl-2">
                    <BotonTipoModal
                        texto="Crear Etiqueta"
                        onClick={handleShowCrearEtiquetaModal}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    />
                    <input
                        type="text"
                        placeholder="Buscar Etiquetas..."
                        value={searchTermEtiquetas}
                        onChange={(e) => setSearchTermEtiquetas(e.target.value)}
                        className="px-4 py-2 border rounded-md mb-4 w-full"
                    />
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                    <th scope="col" className="px-6 py-3">
                                    ID</th>
                                    <th scope="col" className="px-6 py-3">Nombre</th>
                                    <th scope="col" className="px-6 py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEtiquetas.map((item) => (
                                    <tr className="border-b hover:bg-blue-100 text-center" key={`etiqueta-${item.id}`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.id}
                                        </th>
                                        <td className="px-6 py-4">{item.nombre}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <div className="relative group inline-block">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleShowEditEtiquetaModal(item)}
                                                        className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none"
                                                    >
                                                        <img src="/img/iconos/edit.svg" alt="Icono Editar" className="w-4 h-4" />
                                                    </button>
                                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                        Editar Etiqueta
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
                    </div>
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
            {/* Modal de Crear Categoría */}
            {showCrearCategoriaModal && (
                <CrearCategoriaModal onClose={() => setShowCrearCategoriaModal(false)} />
            )}
            {/* Modal de Crear Etiqueta */}
            {showCrearEtiquetaModal && (
                <CrearEtiquetaModal onClose={() => setShowCrearEtiquetaModal(false)} />
            )}
            {/* Modal de Editar Categoría */}
            {showEditCategoriaModal && itemToEdit && (
                <EditarCategoriaModal
                    categoria={itemToEdit}
                    onClose={() => setShowEditCategoriaModal(false)}
                />
            )}
            {/* Modal de Editar Etiqueta */}
            {showEditEtiquetaModal && itemToEdit && (
                <EditarEtiquetaModal
                    etiqueta={itemToEdit}
                    onClose={() => setShowEditEtiquetaModal(false)}
                />
            )}
        </div>
    );
}

