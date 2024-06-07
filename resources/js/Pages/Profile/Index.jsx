import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BreadcrumbOtros } from "@/Components/BreadCrumb";
import React, { useState, useMemo } from "react";
import ProfileHeader from "@/Components/ProfileHeader";
import Acordeon from "@/Components/Acordeon";
import ArticulosTableUser from "@/Components/ArticulosTableUser";
import FacturasTableUser from "@/Components/FacturasTableUser";
import UltimasVisitas from "@/Components/UltimasVisitas";
import { BotonTipoRuta } from "@/Components/Botones";
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
                        <BotonTipoRuta ruta="/articulos/create" texto="Crear Articulo" />
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
