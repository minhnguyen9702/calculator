function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } if (operator == "-") {
        return subtract(a, b);
    } if (operator == "*") {
        return multiply(a, b);
    } if (operator == "/") {
        return divide(a, b);
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

const deleteNum = document.querySelector("#delete")
deleteNum.addEventListener('click', function(e) {
    displayValue = displayValue.slice(0, -1)
    bigDisplay.textContent = displayValue
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
    if (operator == "") {
        firstNumber = displayValue
        displayValue = ""
        bigDisplay.textContent = displayValue

        operator = op.textContent
        smallDisplay.textContent = firstNumber + operator
    } else {
        secondNumber = displayValue
        firstNumber = operate(operator, firstNumber, secondNumber)
        operator = op.textContent
        smallDisplay.textContent = firstNumber + operator

        displayValue = ""
        bigDisplay.textContent = displayValue
    }
}));

const equals = document.querySelector("#equals")
equals.addEventListener("click", function(e) {
    secondNumber = displayValue
    smallDisplay.textContent = firstNumber + operator + secondNumber + "="
    bigDisplay.textContent = operate(operator, firstNumber, secondNumber)
});