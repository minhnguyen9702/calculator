function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        add(a, b);
    } if (operator == "-") {
        subtract(a, b);
    } if (operator == "*") {
        multiply(a, b);
    } if (operator == "/") {
        divide(a, b);
    }
};

let displayValue = ""
let operator = ""
let firstNumber = ""
let secondNumber = ""

const clearNum = document.querySelector("#clear")
clearNum.addEventListener('click', function(e) {
    displayValue = ""
    operator = ""
    firstNumber = ""
    secondNumber = ""
    bigDisplay.textContent = displayValue
    smallDisplay.textContent = displayValue
});

const bigDisplay = document.querySelector(".big.display")
const smallDisplay = document.querySelector(".small.display")


const nums = document.querySelectorAll(".num")
nums.forEach(num => num.addEventListener('click', function(e) {
    if (num.textContent != 0 || displayValue != "") {
        displayValue = displayValue + num.textContent
        bigDisplay.textContent = displayValue
    }
}));

const ops = document.querySelectorAll(".op")
ops.forEach(op => op.addEventListener('click', function(e) {
    if (firstNumber == "") {
        firstNumber = displayValue
        displayValue = ""
        bigDisplay.textContent = displayValue
        operator = op.textContent
        smallDisplay.textContent = firstNumber + operator
    }
}));

const equals = document.querySelectorAll("#equals")