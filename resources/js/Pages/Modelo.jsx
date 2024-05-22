import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import * as BABYLON from 'babylonjs';

export default function Modelo({ auth }) {
    useEffect(() => {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = function () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);

            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

            var box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

            return scene;
        };

        var scene = createScene();

        engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });

        // Cleanup on component unmount
        return () => {
            engine.dispose();
        };
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <canvas id="renderCanvas" style={{ width: '100%', height: '100vh' }}></canvas>
        </AuthenticatedLayout>
    );
}
