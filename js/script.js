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
    const inputA = document.getElementById("firstNumber").value;
    const inputB = document.getElementById("secondNumber").value;  
    
    let a = parseFloat(inputA);
    let b = parseFloat(InputB);

    sum.innerHTML = calculateSum(a, b);
    square.innerHTML = calculateSquare(a);
    percentage.innerHTML = calculatePercentage(a, b);


}

console.log(`Soma de ${a} e ${b} é ${sum(a, b)}`);
console.log(`O quadrado de ${a} é ${square(a)}`);
console.log(`${a} é ${percentage(a, b)}% de ${b}`);