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
/*
while (i < 20) {
    console.log(i);
    scope = {
        x: i,
        z: 2
    }
    d = math.derivative(expression, 'x').evaluate(scope);
    i = i + math.abs(1/d);
}
    */