<x-app-layout>

    @section('content')
        <canvas id="renderCanvas"></canvas>
        <script>
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
        </script>
</x-app-layout>
