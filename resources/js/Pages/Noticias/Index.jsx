import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import NoticiasExposicion from '@/Components/NoticiaExposicion';
import Encabezado from '@/Components/Encabezado';
import Boton from '@/Components/Botones';
import { BreadcrumbNoticias } from '@/Components/BreadCrumb';
import React, { useState, useMemo } from 'react';

export default function Index({ auth, noticias }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4); // Número de elementos por página

    const filteredNoticias = useMemo(() => {
        let filtered = noticias.data;
        if (searchTerm) {
            filtered = filtered.filter(noticia =>
                Object.values(noticia).some(value =>
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
        return filtered;
    }, [searchTerm, noticias.data]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNoticias.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
        >
            <Head title="Noticias" />
            <div className="ml-20 pt-40">
                <BreadcrumbNoticias />
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

            <div>
                <NoticiasExposicion noticias={{ data: currentItems }} />
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredNoticias.length / itemsPerPage) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
