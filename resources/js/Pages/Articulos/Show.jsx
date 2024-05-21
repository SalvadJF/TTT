import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ArticuloExposicion from '@/Components/ArticuloExposicion';
import Encabezado from '@/Components/Encabezado';
import Boton from '@/Components/Botones';
import { BreadcrumbArticulosShow } from '@/Components/BreadCrumb';
import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export default function Show({ auth, articulo, categorias, etiquetas, comentarios, user }) {
    useEffect(() => {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = async function () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);

            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

            // Cargar el modelo desde la ruta absoluta
            await BABYLON.SceneLoader.ImportMeshAsync("", "/img/modelos/", articulo.modelo, scene);

            return scene;
        };

        var scenePromise = createScene();

        scenePromise.then(scene => {
            engine.runRenderLoop(function () {
                scene.render();
            });
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });

        // Cleanup on component unmount
        return () => {
            scenePromise.then(scene => {
                scene.dispose();
            });
            engine.dispose();
        };
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articulos</h2>}
        >
            <Head title="Articulos" />
            <div className="ml-20 pt-40">
                <BreadcrumbArticulosShow articulo={articulo} />
            </div>

            <canvas id="renderCanvas" style={{ width: '100%', height: '100vh' }}></canvas>
        </AuthenticatedLayout>
    );
}
