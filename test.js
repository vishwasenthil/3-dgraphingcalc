const text1 = document.getElementById('text1');

let expression = "x^2 * z";
let currentX = 3
let currentZ = 3;
let scope = {
    x: currentX,
    z: currentZ
}
let d = 0;

text1.innerHTML = d + "";

let i = 1;

const getCurvature = (expression, scope, currentY) => {
    let dx = 0.001;
    let dxScope = {
        x : scope.x + dx,
        y : currentY,
        z : scope.z
    };

    let firstDerivativeExpression = math.derivative(expression, 'x');
    
    let firstDerivativeAtX = firstDerivativeExpression.evaluate(scope); //derivative respect to x
    //second derivative is found with approximation

    let firstDerivativeAtDx = firstDerivativeExpression.evaluate(dxScope);
    let secondDerivative = (firstDerivativeAtDx - firstDerivativeAtX) / dx;
    console.log(scope);
    let curvature = Math.abs(secondDerivative) / (Math.pow(1 + Math.pow(firstDerivativeAtX,2),1.5)); 
    return curvature;
}


while (i < 4) {
    //console.log(i);
    scope = {
        x: i,
        z: 2
    }
    let y = math.evaluate(expression, scope);
    let curvature = getCurvature(expression, scope, y);
    console.log(curvature);
    i = i + 0.005/curvature;
}
