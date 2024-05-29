import React, { useState, useMemo, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { BreadcrumbOtros } from "@/Components/BreadCrumb";
import ProfileOtroHeader from "@/Components/ProfileOtroHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ArticuloExposicion from "@/Components/ArticuloExposicion";
import Encabezado from "@/Components/Encabezado";

const Show = ({ auth, usuario, articulos }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = articulos.per_page; // Número de elementos por página definido en el controlador

    // Ordenar los artículos por fecha de creación de más nuevo a más antiguo
    const sortedArticulos = useMemo(() => {
        return articulos.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }, [articulos.data]);

    const filteredArticulos = useMemo(() => {
        return sortedArticulos.filter(articulo =>
            articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, sortedArticulos]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredArticulos.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
        >
            <div className="p-10 bg-opacity-10">
                <div className="ml-20 pt-40">
                    <BreadcrumbOtros nombre={usuario.name} />
                </div>
                <div className="p-10 bg-opacity-10">
                    <ProfileOtroHeader user={usuario} />
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-koulen text-white ml-10">
                            Articulos de {usuario.name}
                        </h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Buscar artículos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="ml-10 mt-4 px-4 py-2 border rounded-md"
                        />
                    </div>
                    {currentItems.length > 0 ? (
                        <ArticuloExposicion articulos={{ data: currentItems }} />
                    ) : (
                        <p className="text-center text-gray-500">No se han encontrado Resultados</p>
                    )}
                    {/* Paginación */}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: Math.ceil(filteredArticulos.length / itemsPerPage) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-black text-white'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
