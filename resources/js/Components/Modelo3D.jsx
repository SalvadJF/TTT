import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export default function Modelo3D({ modeloURL }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const engine = new BABYLON.Engine(canvas, true);
        let scene;

        const createScene = () => {
            scene = new BABYLON.Scene(engine);

            // Ajustar la posición de la cámara
            const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 100, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);

            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

            // Cargar el modelo STL desde la URL proporcionada
            BABYLON.SceneLoader.ImportMesh("", "", modeloURL, scene, (newMeshes) => {
                // Opcional: Ajustar el target de la cámara si es necesario
                // camera.target = newMeshes[0].position;
            }, null, (scene, message, exception) => {
                console.error("Error loading model:", message, exception);
            });

            return scene;
        };

        scene = createScene();

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });

        const handleResize = () => {
            engine.resize();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to run when the component unmounts
        return () => {
            engine.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, [modeloURL]);

    return (
        <div className="w-full md:w-2/3">
            <div className="flex flex-col items-center rounded-lg shadow w-full">
                <canvas ref={canvasRef} className="w-full h-full"></canvas>
            </div>
        </div>
    );
}
