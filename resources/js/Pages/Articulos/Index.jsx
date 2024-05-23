import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ArticuloExposicion from '@/Components/ArticuloExposicion';
import Encabezado from '@/Components/Encabezado';
import  Boton  from '@/Components/Botones';
import { BreadcrumbArticulos } from '@/Components/BreadCrumb';
import React, { useState, useMemo } from 'react';

export default function Index({ auth, articulos }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Número de elementos por página

    const filteredArticulos = useMemo(() => {
        let filtered = articulos.data;
        if (searchTerm) {
            filtered = filtered.filter(articulo =>
                Object.values(articulo).some(value =>
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
        if (filterType === 'Modelo_3D') {
            filtered = filtered.filter(articulo => articulo.tipo === 'Modelo_3D');
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articulos</h2>}
        >
            <Head title="Articulos" />
            <div className="ml-20 pt-40">
                <BreadcrumbArticulos />
            </div>

            <div className="my-4">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                />
            </div>

            <div className="my-4">
                <button
                    onClick={() => setFilterType('all')}
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Todos
                </button>
                <button
                    onClick={() => setFilterType('3D')}
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === '3D' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Modelo 3D
                </button>
                <button
                    onClick={() => setFilterType('Textura')}
                    className={`px-4 py-2 rounded-md ${filterType === 'Textura' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Textura
                </button>
            </div>

            <div>
                <ArticuloExposicion articulos={{ data: currentItems }} />
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
