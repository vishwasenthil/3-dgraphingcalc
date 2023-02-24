const canvas = document.getElementById(`renderCanvas`);
const engine = new BABYLON.Engine(canvas, true);

let createScene = function() {
    let scene = new BABYLON.scene(engine);
    scene.clearColor = new BABYLON.color3.black;
    return scene;
};

let sceneToRender = createScene();

engine.runRenderLoop(function() {
    sceneToRender.render();
});
