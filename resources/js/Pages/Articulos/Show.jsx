import { setCookie, getCookie, eraseCookie, addArticuloToCookie } from "@/Utils/cookieUtils";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ArticuloExposicion from "@/Components/ArticuloExposicion";
import Encabezado from "@/Components/Encabezado";
import { BreadcrumbArticulosShow } from "@/Components/BreadCrumb";
import ComentariosArticulo from "./Partials/ComentariosArticulo";
import { useEffect, useState } from "react";
import axios from "axios";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import SimuladorCompra from './Partials/SimularCompra';
import LikeBoton from "@/Components/LikeBoton";
import { BotonEtiqueta, BotonCategoria, BotonPrincipal } from "@/Components/Botones";
import LicenciaCC from "@/Components/LicenciaCC";

export default function Show({
    auth,
    articulo,
    categorias,
    etiquetas,
    comentarios,
    user,
    contadorLikes,
    comprado,
    facturaId
}) {
    const [mostrarModalCompra, setMostrarModalCompra] = useState(false);

    useEffect(() => {
        addArticuloToCookie({ id: articulo.id, nombre: articulo.nombre, created_at: articulo.created_at, imagen: articulo.imagen });

        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = async function () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera(
                "Camera",
                Math.PI / 3,
                Math.PI / 3,
                150,
                BABYLON.Vector3.Zero(),
                scene
            );
            camera.attachControl(canvas, true);

            var light = new BABYLON.HemisphericLight(
                "light",
                new BABYLON.Vector3(0, 1, 0),
                scene
            );

            await BABYLON.SceneLoader.ImportMeshAsync(
                "",
                "/img/modelos/",
                articulo.modelo,
                scene
            );

            return scene;
        };

        var scenePromise = createScene();

        scenePromise.then((scene) => {
            engine.runRenderLoop(function () {
                scene.render();
            });
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });

        return () => {
            scenePromise.then((scene) => {
                scene.dispose();
            });
            engine.dispose();
        };
    }, [articulo.modelo]);

    const handleCompraClick = () => {
        if (parseFloat(articulo.precio) === 0) {
            window.location.href = `/img/modelos/${articulo.modelo}`;
        } else {
            setMostrarModalCompra(true);
        }
    };

    const handleCerrarModalCompra = () => {
        setMostrarModalCompra(false);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const formatText = (text) => {
        return text.split(".").map((sentence, index, array) =>
            index < array.length - 1 ? sentence + ".\n" : sentence
        ).join("");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Artículos
                </h2>
            }
        >
            <Head title="Artículos" />
            <div className="ml-20 pt-40">
                <BreadcrumbArticulosShow articulo={articulo} />
            </div>
            <div className="flex flex-col md:flex-row items-center w-full shadow p-5 m-3 div-oscuro">
                <div className="w-full md:w-2/3">
                    <canvas
                        id="renderCanvas"
                        style={{ width: "100%", height: "70%" }}
                    ></canvas>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/5 text-center">
                    <div className="flex items-center justify-center md:justify-center mb-4 md:mb-0">
                        <h1 className="text-white font-koulen">{articulo.nombre}</h1>
                        <div className="ml-3 pb-1 text-white">
                            <LikeBoton articuloId={articulo.id} initialLikes={contadorLikes.cantidad}  aria-label="Me gusta"/>
                        </div>
                    </div>
                    {user ? (
                        <div className="flex items-center justify-center md:justify-center mb-4 md:mb-0">
                            <a href={route("usuarios.show", user.id)}>
                            <img
                                src={user.avatar}
                                alt="Avatar del usuario"
                                className="w-16 h-16 rounded-full ml-3"
                            />
                            <span className="font-koulen ml-3 text-white">
                                {user.name}
                            </span>
                            </a>
                        </div>
                    ) : (
                        <p className="text-white">
                            No se pudo encontrar al usuario asociado a este artículo.
                        </p>
                    )}
                    <p className="text-white">Creada en <b>{formatDate(articulo.created_at)}</b></p>
                    <div className="flex flex-col justify-between mb-4">
                        <div className="text-white mb-2">
                            <h6 className="font-koulen">Categorías</h6>
                            <div className="flex flex-wrap justify-center">
                                {categorias.length > 0 ? (
                                    categorias.map((categoria) => (
                                        <BotonCategoria
                                            key={categoria.id}
                                            texto={categoria.nombre}
                                            className="m-1"
                                            aria-label={`Categoría: ${categoria.nombre}`}
                                        />
                                    ))
                                ) : (
                                    <span>Sin categorías</span>
                                )}
                            </div>
                        </div>
                        <div className="text-white">
                            <h6 className="font-koulen">Etiquetas</h6>
                            <div className="flex flex-wrap justify-center">
                                {etiquetas.length > 0 ? (
                                    etiquetas.map((etiqueta) => (
                                        <BotonEtiqueta
                                            key={etiqueta.id}
                                            texto={etiqueta.nombre}
                                            className="m-1"
                                            aria-label={`Etiqueta: ${etiqueta.nombre}`}
                                        />
                                    ))
                                ) : (
                                    <span>Sin etiquetas</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-4">
                    <LicenciaCC licencia={articulo.licencia} />
                    </div>
                    <p className="text-white">{formatText(articulo.descripcion)}</p>
                    <div className="text-white text-2xl mb-2">
                        {parseFloat(articulo.precio) === 0 ? "Gratis" : `Precio ${articulo.precio}€`}
                    </div>

                    <div className="flex flex-col items-center shadow md:flex-row p-5 m-3 justify-center text-2xl">
                        {auth.user.id === articulo.user_id ? (
                            <button
                                disabled
                                className="font-koulen py-3 px-5 mt-2 bg-red-800 hover:bg-red-900 w-1/2 text-center rounded-lg text-white text-sm"
                                title="Este artículo te pertenece"
                            >
                               Este artículo te pertenece
                            </button>
                        ) : comprado ? (
                            <button
                                onClick={() => window.location.href = `/facturas/${facturaId}`}
                                className="font-koulen py-3 px-5 mt-2 bg-red-800 hover:bg-red-900 w-2/3 text-center rounded-lg text-white text-sm"
                            >
                                Ya has comprado este artículo
                            </button>
                        ) : (
                            <button onClick={handleCompraClick}
                            className="font-koulen py-3 px-5 mt-2 bg-red-800 hover:bg-red-900 w-full text-center rounded-lg text-white text-lg"
                            aria-label={parseFloat(articulo.precio) === 0 ? "Descargar" : "Comprar"}>
                                {parseFloat(articulo.precio) === 0 ? "Descargar" : "Comprar"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full p-5">
                <ComentariosArticulo comentarios={comentarios} articulo={articulo} user={user} />
            </div>
            {mostrarModalCompra && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                    <div className="z-50 bg-white p-8 max-w-lg rounded-lg shadow-lg">
                        <SimuladorCompra
                            articuloId={articulo.id}
                            articuloPrecio={articulo.precio}
                            monedero={user.monedero}
                            modelo={articulo.modelo}
                            onClose={handleCerrarModalCompra}
                        />
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
