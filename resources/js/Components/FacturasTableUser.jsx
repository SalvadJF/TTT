import React, { useState, useMemo } from "react";
import { useForm } from "@inertiajs/react";

export default function FacturasTable({ facturas }) {
    const { delete: handleDelete } = useForm();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [facturaToDelete, setFacturaToDelete] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    const filteredFacturas = useMemo(() => {
        return facturas.filter(factura =>
            factura.id.toString().includes(searchTerm.toLowerCase()) ||
            factura.articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            factura.articulo.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            factura.precio_venta.toString().includes(searchTerm.toLowerCase()) ||
            formatDate(factura.created_at).includes(searchTerm.toLowerCase())
        );
    }, [facturas.data, searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredFacturas.slice(indexOfFirstItem, indexOfLastItem);


    const handleShowDeleteModal = (factura) => {
        setFacturaToDelete(factura);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (facturaToDelete) {
            handleDelete(route("facturas.destroy", facturaToDelete.id));
            setShowDeleteModal(false);
        }
    };

    return (
        <div className="m-5 p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 border rounded-md ml-4  text-white outline-none focus:border-opacity-0 bg-red-900 mb-4" />
            {filteredFacturas.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300 text-center font-koulen">No se encontraron albaranes.</p>
            ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm font-koulen text-gray-700 uppercase bg-red-300 text-center">
                            <tr>
                                <th scope="col" className="px-6 py-3">Numero de albaran</th>
                                <th scope="col" className="px-6 py-3">Articulo</th>
                                <th scope="col" className="px-6 py-3">Vendedor</th>
                                <th scope="col" className="px-6 py-3">Precio de Compra</th>
                                <th scope="col" className="px-6 py-3">Fecha de compra</th>
                                <th scope="col" className="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((factura) => (
                                <tr
                                className="border-b hover:bg-blue-100 text-center"
                                key={factura.id}>
                                    <td className="px-6 py-4">
                                        <a href={`/facturas/${factura.id}`} className="text-blue-600">Albaran Nº {factura.id}</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={`/articulos/${factura.articulo.id}`} className="text-blue-600">{factura.articulo.nombre}</a>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{factura.articulo.user.name}</th>
                                    <td className="px-6 py-4">{factura.precio_venta}€</td>
                                    <td className="px-6 py-4">{formatDate(factura.created_at)}</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="relative group inline-block">
                                            <button type="button" onClick={() => handleShowDeleteModal(factura)} className="inline-flex items-center px-3 py-2 text-sm font-semibold border border-transparent rounded-lg gap-x-2 bg-no-aprobada text-neutro-4 hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                                                <img src="/img/iconos/trash.svg" alt="Icono Borrar" className="w-4 h-4" />
                                            </button>
                                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-black text-white text-xs rounded-md">
                                                Borrar Albaran
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Paginación */}
                    <div className="flex justify-center mt-4 mb-4">
                        {Array.from({ length: Math.ceil(filteredFacturas.length / itemsPerPage) }).map((_, index) => (
                            <button key={index} onClick={() => paginate(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{index + 1}</button>
                        ))}
                    </div>
                </div>
            )}
            {/* Modal de Confirmación de Borrado */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-4">¿Estás seguro de que quieres borrar esta albaran?</p>
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
