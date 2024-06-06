import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BreadcrumbOtros } from "@/Components/BreadCrumb";
import React, { useState, useMemo } from "react";
import ProfileHeader from "@/Components/ProfileHeader";
import Acordeon from "@/Components/Acordeon";
import ArticulosTableUser from "@/Components/ArticulosTableUser";
import FacturasTableUser from "@/Components/FacturasTableUser";
import UltimasVisitas from "@/Components/UltimasVisitas";
;

export default function Index({ auth, user, articulos, facturas }) {
    const [openAccordion, setOpenAccordion] = useState("usuarios");

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
                <BreadcrumbOtros nombre="Mi perfil" />
            </div>
            <div className="p-10 bg-opacity-10">
                <div
                    id="accordion-color"
                    data-accordion="collapse"
                    data-active-classes="bg-blue-900 dark:bg-blue-900 text-white p-7 font-koulen"
                >
                    <ProfileHeader user={auth.user} />
                    <Acordeon
                        title="Mis Articulos"
                        isOpen={openAccordion === "usuarios"}
                        onToggle={() => toggleAccordion("usuarios")}
                    >
                        <div>
                            <div>
                                <a
                                    href="/articulos/create"
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-koulen rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                    Crear Articulo
                                </a>
                            </div>

                            <ArticulosTableUser articulos={articulos} />
                        </div>

                    </Acordeon>
                    <Acordeon
                        title="Mis Albaranes"
                        isOpen={openAccordion === "facturas"}
                        onToggle={() => toggleAccordion("facturas")}
                    >
                    <FacturasTableUser facturas={facturas} />
                    </Acordeon>
                    <Acordeon
                        title="Mi Informacion"
                        isOpen={openAccordion === "informacion"}
                        onToggle={() => toggleAccordion("informacion")}
                    >
                        <div>
                            <a
                                href={`/profile/${user}/edit`}
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-koulen rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Modificar Mis datos
                            </a>
                        </div>
                    </Acordeon>
                    <Acordeon
                        title="Ultimas Visitas"
                        isOpen={openAccordion === "visitas"}
                        onToggle={() => toggleAccordion("visitas")}
                    >
                        <div>
                            <UltimasVisitas />
                        </div>
                    </Acordeon>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
