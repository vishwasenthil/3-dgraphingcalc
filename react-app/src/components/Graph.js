import * as BABYLON from "@babylonjs/core";
import SceneComponent from "babylonjs-hook";
import {useContext} from "react";

import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

import "./css/GraphStyles.css";
 
let camera;
let currentGraph;
let lastRadius;
let myScene;

const onSceneReady = (scene) => {
  myScene = scene;
  const canvas = scene.getEngine().getRenderingCanvas();
  //Custom Camera or switch back and forth between Universal and ArcRotate
  //const camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(5, 5, 5), scene);
  camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  lastRadius = camera.radius;
  //Refer to https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs for customized camera input
  
  //const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(-1, -1, -2));
  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(-1,-1, -2)); //this light looks better?
  light.intensity = 1;

  const axes = new BABYLON.AxesViewer(scene, 10); //customize axes directions for x,y,z and add axis label?
};

let textInput = document.getElementById("textInput");
textInput.onInput = () => recreateMesh(textInput.value, camera.radius);

//removes currently old graph and creates a new graph based on new informations
export const recreateMesh = (expression, radius) => {
    if(currentGraph != null) currentGraph.dispose();
    try {
        let parameters = sampleParameters(radius);
        generateMeshFromFunction(expression, parameters[0], parameters[1]);
    }    
    catch(error) {
        //error statement if needed. display something to let user know of what to do?
    }
}

//parameter - radius of camera
//return value - [range, step] for sampling of the mesh
const sampleParameters = (currentRadius) => {
    let absoluteRadius = Math.abs(currentRadius); //resolves issues with negative radius
    return [absoluteRadius * 3, absoluteRadius * 0.05];
    //modify these values (maybe nonlinear function could do) to make the graph look nicer
}

/* FUTURE SPRINT PLANS FOR IMPLICIT FUNCTION MESH GENERATION
    Nerdamer - Library that can handle implicit function solving
    Marching Cubes Algiorhtm OR add distinct surface detecting algorithm on current method
*/
//
const generateMeshFromFunction = (expression, range, step) => {
    const paths = [];

    for (let currentZ = -1 * range; currentZ < range; currentZ = currentZ + step) {
        const path = [];
        for (let currentX = -1 * range; currentX < range; currentX = currentX + step) {
            let scope = {
                x: currentX,
                z: currentZ
            }
            let y = evaluate(expression, scope); 
            
            path.push(new BABYLON.Vector3(currentX, y, currentZ))
        }
        //const line = BABYLON.MeshBuilder.CreateLines('line', {points:path}, scene); //uncomment this line if you want to see the lines of ribbon
        paths.push(path);
    }
    
    let graphOptions = {
        pathArray: paths,
        updatable: true,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }

    currentGraph = BABYLON.MeshBuilder.CreateRibbon("ribbon", graphOptions, myScene);
}

const resizeThreshold = 30;

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  scene.render();
};
/*
const resizeGraph = () => {
  if (Math.abs(lastRadius - camera.radius) > resizeThreshold) {
      lastRadius = camera.radius;
      recreateMesh(textInput.value, lastRadius);
  }
}
*/

//const resizeInterval = setInterval(resizeGraph, 5000);

function Graph() {
    return(
        <div>
            <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="renderCanvas" />
        </div>
    );
}

export default Graph;