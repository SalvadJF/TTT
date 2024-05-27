import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ArticuloExposicion from '@/Components/ArticuloExposicion';
import Encabezado from '@/Components/Encabezado';
import Boton from '@/Components/Botones';
import { BreadcrumbArticulos } from '@/Components/BreadCrumb';
import React, { useState, useMemo, useEffect } from 'react';

export default function Index({ auth, articulos }) {


    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Número de elementos por página

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterType]);

    const filteredArticulos = useMemo(() => {
        let filtered = articulos.data;
        if (searchTerm) {
            filtered = filtered.filter(articulo =>
                Object.values(articulo).some(value =>
                    value &&
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
        if (filterType === 'Modelo_3d') {
            filtered = filtered.filter(articulo => articulo.tipo === 'Modelo_3d');
        } else if (filterType === 'Textura') {
            filtered = filtered.filter(articulo => articulo.tipo === 'Textura');
        }
        return filtered;
    }, [searchTerm, filterType, articulos.data]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredArticulos.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Artículos</h2>}
        >
            <Head title="Artículos" />
            <div className="ml-20 pt-40">
                <BreadcrumbArticulos />
            </div>

            <div className="flex my-4 p-4">
                <button
                    onClick={() => setFilterType('all')}
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Todos
                </button>
                <button
                    onClick={() => setFilterType('Modelo_3d')} // Cambiar '3D' a 'Modelo_3d'
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === 'Modelo_3d' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Modelo 3D
                </button>
                <button
                    onClick={() => setFilterType('Textura')}
                    className={`px-4 py-2 rounded-md ${filterType === 'Textura' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Textura
                </button>
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-md ml-4"
                />
            </div>

            <div>
                {currentItems.length > 0 ? (
                    <ArticuloExposicion articulos={{ data: currentItems }} />
                ) : (
                    <p className="text-center text-gray-500">No se han encontrado Resultados</p>
                )}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredArticulos.length / itemsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
