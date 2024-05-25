import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Breadcrumbs } from "@/Components/BreadCrumb";
import React, { useState, useMemo } from "react";
import ProfileHeader from "@/Components/ProfileHeader";
import Acordeon  from "@/Components/Acordeon";

export default function Index({
    auth,
    user,
    articulos,
    comentarios,
    facturas,
}) {
    const [openAccordion, setOpenAccordion] = useState("usuarios");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Número de elementos por página

    const filteredArticulos = useMemo(() => {
        return articulos.filter((articulo) =>
            articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, articulos]);

    const filteredComentarios = useMemo(() => {
        return comentarios.filter((comentario) =>
            comentario.contenido
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, comentarios]);

    const filteredFacturas = useMemo(() => {
        return facturas.filter((factura) =>
            factura.id.toString().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, facturas]);

    const paginate = (pageNumber, category) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = () => currentPage * itemsPerPage;
    const indexOfFirstItem = () => indexOfLastItem() - itemsPerPage;
    const currentItems = (category) => {
        if (category === "articulos") {
            return filteredArticulos.slice(
                indexOfFirstItem(),
                indexOfLastItem()
            );
        } else if (category === "comentarios") {
            return filteredComentarios.slice(
                indexOfFirstItem(),
                indexOfLastItem()
            );
        } else if (category === "facturas") {
            return filteredFacturas.slice(
                indexOfFirstItem(),
                indexOfLastItem()
            );
        }
    };

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? "" : id);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mi perfil
                </h2>
            }
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
                    <ProfileHeader admin={auth.user} />
                    <Acordeon
                        title="Mis Articulos"
                        isOpen={openAccordion === "usuarios"}
                        onToggle={() => toggleAccordion("usuarios")}
                    >
                        <div>
                            <div>
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
                        {currentItems("articulos").map((articulo) => (
                            <div
                                key={articulo.id}
                                className="mt-4 p-2 bg-white dark:bg-gray-800 mb-2 rounded-md shadow-md"
                            >
                                <Link
                                    href={`/articulos/${articulo.id}`}
                                    className="text-blue-600 dark:text-blue-400"
                                >
                                    Articulo {articulo.id}
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
                                    onClick={() =>
                                        paginate(index + 1, "articulos")
                                    }
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
                    </Acordeon>
                    <Acordeon
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
                        {currentItems("comentarios").map((comentario) => (
                            <div
                                key={comentario.id}
                                className="mt-4 p-2 bg-white dark:bg-gray-800 mb-2 rounded-md shadow-md"
                            >
                                <Link
                                    href={`/comentarios/${comentario.id}`}
                                    className="text-blue-600 dark:text-blue-400"
                                >
                                    Comentario {comentario.id}
                                </Link>
                            </div>
                        ))}
                        {/* Paginación */}
                        <div className="flex justify-center mt-4">
                            {Array.from({
                                length: Math.ceil(
                                    filteredComentarios.length / itemsPerPage
                                ),
                            }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        paginate(index + 1, "comentarios")
                                    }
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
                    </Acordeon>
                    <Acordeon
                        title="Mis Facturas"
                        isOpen={openAccordion === "facturas"}
                        onToggle={() => toggleAccordion("facturas")}
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
                        {currentItems("facturas").map((factura) => (
                            <div
                                key={factura.id}
                                className="mt-4 p-2 bg-white dark:bg-gray-800 mb-2 rounded-md shadow-md"
                            >
                                <Link
                                    href={`/facturas/${factura.id}`}
                                    className="text-blue-600 dark:text-blue-400"
                                >
                                    Factura {factura.id}
                                </Link>
                            </div>
                        ))}
                        {/* Paginación */}
                        <div className="flex justify-center mt-4">
                            {Array.from({
                                length: Math.ceil(
                                    filteredFacturas.length / itemsPerPage
                                ),
                            }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        paginate(index + 1, "facturas")
                                    }
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
                    </Acordeon>
                    <Acordeon
                        title="Mi Informacion"
                        isOpen={openAccordion === "informacion"}
                        onToggle={() => toggleAccordion("informacion")}
                    >
                        <div>
                            <a
                                href={`/profile/${user}/edit`}
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Modificar Mis datos
                            </a>
                        </div>
                    </Acordeon>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
