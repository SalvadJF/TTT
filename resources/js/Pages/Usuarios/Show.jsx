import React, { useState, useMemo } from "react";
import { Link } from "@inertiajs/react";
import { Breadcrumbs } from "@/Components/BreadCrumb";
import ProfileHeader from "@/Components/ProfileHeader";

const Show = ({ usuario, articulos }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Número de elementos por página

    const filteredArticulos = useMemo(() => {
        return articulos.filter((articulo) =>
            articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, articulos]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = () => currentPage * itemsPerPage;
    const indexOfFirstItem = () => indexOfLastItem() - itemsPerPage;
    const currentItems = () => {
        return filteredArticulos.slice(
            indexOfFirstItem(),
            indexOfLastItem()
        );
    };

    return (
        <div className="p-10 bg-opacity-10">
            <div className="ml-20 pt-40">
                <Breadcrumbs />
            </div>
            <div className="p-10 bg-opacity-10">
                <ProfileHeader user={usuario} />
                <div>
                    <input
                        type="text"
                        placeholder="Buscar artículos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-4 px-4 py-2 border rounded-md"
                    />
                </div>
                {currentItems().map((articulo) => (
                    <div
                        key={articulo.id}
                        className="mt-4 p-2 bg-white dark:bg-gray-800 mb-2 rounded-md shadow-md"
                    >
                        <Link
                            href={`/articulos/${articulo.id}`}
                            className="text-blue-600 dark:text-blue-400"
                        >
                            {articulo.nombre}
                        </Link>
                    </div>
                ))}
                {/* Paginación */}
                <div className="flex justify-center mt-4">
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
        </div>
    );
};

export default Show;
