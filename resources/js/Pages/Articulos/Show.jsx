import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ArticuloExposicion from "@/Components/ArticuloExposicion";
import Encabezado from "@/Components/Encabezado";
import Boton from "@/Components/Botones";
import { BreadcrumbArticulosShow } from "@/Components/BreadCrumb";
import ComentariosArticulo from "./Partials/ComentariosArticulo";
import { useEffect } from "react";
import { useState } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";


export default function Show({
    auth,
    articulo,
    categorias,
    etiquetas,
    comentarios,
    user,
    contadorLikes
}) {

    const [likes, setLikes] = useState(contadorLikes.cantidad);

    const handleLikeClick = async () => {
        try {
            const response = await axios.post(`/articulos/${articulo.id}/incrementarLikes`);
            setLikes(response.data.likes);
        } catch (error) {
            console.error("Error al incrementar los likes:", error);
        }
    };

    useEffect(() => {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = async function () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera(
                "Camera",
                Math.PI / 2,
                Math.PI / 4,
                100,
                BABYLON.Vector3.Zero(),
                scene
            );
            camera.attachControl(canvas, true);

            var light = new BABYLON.HemisphericLight(
                "light",
                new BABYLON.Vector3(0, 1, 0),
                scene
            );

            // Cargar el modelo desde la ruta absoluta
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

        // Cleanup on component unmount
        return () => {
            scenePromise.then((scene) => {
                scene.dispose();
            });
            engine.dispose();
        };
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Articulos
                </h2>
            }
        >
            <Head title="Articulos" />
            <div className="ml-20 pt-40">
                <BreadcrumbArticulosShow articulo={articulo} />
            </div>
            <div class="flex flex-col items-center w-full shadow md:flex-row p-5 m-3 div-oscuro">
                <div class="w-full md:w-2/3">
                    <canvas
                        id="renderCanvas"
                        style={{ width: "100%", height: "70%" }}
                    ></canvas>
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal w-full md:w-2/5 text-center">
                    <div class="w-full mb-5">
                        <div className="rounded-lg shadow md:max-w-xl p-4">
                            {user ? (
                                <div className="flex items-center m-auto justify-center">
                                    <img
                                        src={user.avatar}
                                        alt="Avatar del usuario"
                                        className="w-12 h-12 rounded-full ml-3"
                                    />
                                    <span className="font-koulen ml-3 text-white">
                                        {user.name}
                                    </span>
                                </div>
                            ) : (
                                <p className="text-white">
                                    No se pudo encontrar al usuario asociado a
                                    este articulo.
                                </p>
                            )}
                        </div>
                    </div>
                    <h5 className="p-4 mb-2 text-2xl font-koulen tracking-tight text-white">
                        {articulo.nombre}
                    </h5>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <ul className="mb-2 text-white">
                            {categorias.length > 0 ? (
                                categorias.map((categoria) => (
                                    <li
                                        key={categoria.id}
                                        className="font-koulen"
                                    >
                                        {categoria.nombre}
                                    </li>
                                ))
                            ) : (
                                <li>Sin Categorias</li>
                            )}
                        </ul>
                        <ul className="mb-2 text-white">
                            {etiquetas.length > 0 ? (
                                etiquetas.map((etiqueta) => (
                                    <li
                                        key={etiqueta.id}
                                        className="font-koulen"
                                    >
                                        {etiqueta.nombre}
                                    </li>
                                ))
                            ) : (
                                <li>Sin etiquetas</li>
                            )}
                        </ul>
                        <ul className="text-white">
                            <li className="font-lato">
                                Creada en <b>{articulo.created_at}</b>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center w-full shadow md:flex-row p-5 m-3 justify-center">
                        <ul className="text-center">
                            <li className="mb-3 font-lato text-white">
                                {articulo.descripcion}
                            </li>
                                <div>
                                <button onClick={handleLikeClick}>Like</button>
                                <p>Likes: {likes}</p>
                                </div>
                            <a href="">
                                <li className="font-lato p-2 mt-2 bg-red-700 w-full w-1/3 text-center rounded-lg text-white text-sm">
                                    Comprar
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full p-5">
            <ComentariosArticulo comentarios={comentarios} articulo={articulo} user={user} />
            </div>
        </AuthenticatedLayout>
    );
}
