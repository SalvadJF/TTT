import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NoticiasLista from '@/Components/NoticiaLista';
import { BreadcrumbNoticias } from '@/Components/BreadCrumb';
import React, { useState, useMemo , useEffect } from 'react';

export default function Index({ auth, noticias }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterType]);

    const filteredNoticias = useMemo(() => {
        let filtered = noticias.data;
        if (searchTerm) {
            filtered = filtered.filter(noticia =>
                Object.values(noticia).some(value =>
                    value &&
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
        if (filterType !== 'all') {
            filtered = filtered.filter(noticia => noticia.tipo === filterType);
        }
        return filtered;
    }, [searchTerm, filterType, noticias.data]);

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

            <div className="flex my-4 p-4">
                <button
                    onClick={() => setFilterType('all')}
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Todos
                </button>
                <button
                    onClick={() => setFilterType('Noticia')}
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === 'Noticia' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Noticias
                </button>
                <button
                    onClick={() => setFilterType('Entrevista')}
                    className={`px-4 py-2 mr-2 rounded-md ${filterType === 'Entrevista' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Entrevistas
                </button>
                <button
                    onClick={() => setFilterType('Informacion')}
                    className={`px-4 py-2 rounded-md ${filterType === 'Informacion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Información
                </button>
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-md ml-4"
                />
            </div>

            <div className='w-full flex justify-center'>
                {currentItems.length > 0 ? (
                    <NoticiasLista noticias={{ data: currentItems }} />
                ) : (
                    <p className="text-center text-gray-500">No se han encontrado Resultados</p>
                )}
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredNoticias.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
