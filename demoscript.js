const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const createScene = function() {
    const scene = new BABYLON.Scene(engine);
    /*
    const camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(5, 5, 5), scene);
    */

    let camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
    
    camera.attachControl(canvas, true);
    //Refer to https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs for customized camera input
    const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(-1, -1, -2));
 
    light.intensity = 1;
    const box = BABYLON.MeshBuilder.CreateBox('box', {size:3}, scene);
    const axes = new BABYLON.AxesViewer(scene, 10);
    return scene;
}
const scene = createScene();
let box = scene.getMeshById('box');
engine.runRenderLoop(function () {
    scene.render();
    box.rotation.x += 0.02;
    box.rotation.y += 0.03;
});

window.addEventListener("resize", function() {
    engine.resize();
});
