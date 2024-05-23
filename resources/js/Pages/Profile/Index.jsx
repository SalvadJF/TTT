import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Breadcrumbs } from '@/Components/BreadCrumb';
import React, { useState, useMemo } from 'react';


export default function Index({ auth, user, articulos, comentarios }) {
    const [openAccordion, setOpenAccordion] = useState("usuarios");
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Número de elementos por página

    const filteredArticulos = useMemo(() => {
        let filtered = articulos.filter(articulo =>
            articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filtered;
    }, [searchTerm, articulos]);

    const filteredComentarios = useMemo(() => {
        let filtered = comentarios.filter(comentario =>
            comentario.contenido.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filtered;
    }, [searchTerm, comentarios]);

    const paginate = (pageNumber, category) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = (category) => currentPage * itemsPerPage;
    const indexOfFirstItem = (category) => indexOfLastItem() - itemsPerPage;
    const currentItems = (category) => {
        if (category === "articulos") {
            return filteredArticulos.slice(indexOfFirstItem(), indexOfLastItem());
        } else if (category === "comentarios") {
            return filteredComentarios.slice(indexOfFirstItem(), indexOfLastItem());
        }
    };


    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? "" : id);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mi perfil</h2>}
        >
            <Head title="Mi perfil" />

            <div className="ml-20 pt-40">
                <Breadcrumbs />
            </div>

            <div className="p-10 bg-opacity-10">
                <div
                    id="accordion-color"
                    data-accordion="collapse"
                    data-active-classes="bg-blue-900 dark:bg-blue-900 text-white p-7 font-koulen"
                >
                    <AccordionItem
                        title="Mis Articulos"
                        isOpen={openAccordion === "usuarios"}
                        onToggle={() => toggleAccordion("usuarios")}
                    >
                        <div>
                        <div >
                            <a
                                href="/articulos/create"
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Crear Articulo
                            </a>
                        </div>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="mt-4 px-4 py-2 border rounded-md"
                            />
                        </div>
                        {currentItems("articulos").map(articulo => (
                            <div key={articulo.id} className="mt-4 p-2 bg-white dark:bg-gray-800 mb-2 rounded-md shadow-md">
                                <Link href={`/articulos/${articulo.id}`} className="text-blue-600 dark:text-blue-400">
                                    Articulo {articulo.id}
                                </Link>
                            </div>
                        ))}
                        {/* Paginación */}
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: Math.ceil(filteredArticulos.length / itemsPerPage) }).map((_, index) => (
                                <button key={index} onClick={() => paginate(index + 1, "articulos")} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        title="Mis Comentarios"
                        isOpen={openAccordion === "comentarios"}
                        onToggle={() => toggleAccordion("comentarios")}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="mt-4 px-4 py-2 border rounded-md"
                            />
                        </div>
                        {currentItems("comentarios").map(comentario => (
                            <div key={comentario.id} className="mt-4 p-2 bg-white dark:bg-gray-800 mb-2 rounded-md shadow-md">
                                <Link href={`/comentarios/${comentario.id}`} className="text-blue-600 dark:text-blue-400">
                                    Comentario {comentario.id}
                                </Link>
                            </div>
                        ))}
                        {/* Paginación */}
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: Math.ceil(filteredComentarios.length / itemsPerPage) }).map((_, index) => (
                                <button key={index} onClick={() => paginate(index + 1, "comentarios")} className={`px-3 py-1 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        title="Mi Informacion"
                        linkText="Modificar Mis datos"
                        linkHref={`/profile/${user}/edit`}
                        isOpen={openAccordion === "informacion"}
                        onToggle={() => toggleAccordion("informacion")}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function AccordionItem({ title, isOpen, onToggle, children }) {
    return (
        <div>
            <h2 id={`accordion-color-heading-${title}`}>
                <button
                    type="button"
                    className={`text-center flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-800 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-700 dark:hover:bg-gray-800 gap-3 ${
                        isOpen ? "bg-blue-900 dark:bg-blue-900" : ""
                    }`}
                    data-accordion-target={`#accordion-color-body-${title}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-color-body-${title}`}
                    onClick={onToggle}
                >
                    <span>{title}</span>
                </button>
            </h2>
            <div
                id={`accordion-color-body-${title}`}
                className={`${isOpen ? "" : "hidden"}`}
                aria-labelledby={`accordion-color-heading-${title}`}
            >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-opacity-10 bg-white bg-blur-md bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-saturate-150">
                    {children}
                </div>
            </div>
        </div>
    );
}
