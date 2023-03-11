const sum = document.getElementById("sum");
const square = document.getElementById("square");
const percentage = document.getElementById("percentage");

sum.innerHTML = 0;
square.innerHTML = 0;
percentage.innerHTML = 0;

function calculateSum(a, b) {
    return a + b;
}

function calculateSquare(a) {
    return Math.sqrt(a).toFixed(2);
}

function calculatePercentage(a, b) {
    return ((a * 100)/b).toFixed(0);
}

function calculate() {
    const inputA = document.getElementById("firstNumber");
    const inputB = document.getElementById("secondNumber");     
}