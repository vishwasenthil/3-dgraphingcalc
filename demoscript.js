const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const createScene = function() {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(5, 5, 5), scene);
    
    camera.attachControl(canvas, true);
    //Refer to https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs for customized camera input
    const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(-1, -1, -2));
 
    light.intensity = 1;
    let colors = [];
    colors[0] = BABYLON.Color3.Blue();
    colors[1] = BABYLON.Color3.Green();
    colors[2] = BABYLON.Color3.Yellow();
    colors[3] = BABYLON.Color3.Red();
    colors[4] = BABYLON.Color3.Magenta();
    colors[5] = BABYLON.Color3.Teal();
    const box = BABYLON.MeshBuilder.CreateBox('box', {size:3, faceColors:colors}, scene);
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
