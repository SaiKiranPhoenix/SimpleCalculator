const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const eqButton = document.querySelector(".eqButton");
const clearButton = document.querySelector(".clearButton");

let currentInput = "";
let operator = "";
let firstOperand = null;

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

opButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput !== "") {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else {
                compute();
            }
            operator = button.textContent;
            currentInput = "";
        }
    });
});

eqButton.addEventListener("click", () => {
    if (currentInput !== "") {
        compute();
        operator = "";
    }
});

clearButton.addEventListener("click", () => {
    clear();
});

function compute() {
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
        case "+":
            currentInput = firstOperand + secondOperand;
            break;
        case "-":
            currentInput = firstOperand - secondOperand;
            break;
        case "*":
            currentInput = firstOperand * secondOperand;
            break;
        case "/":
            if(secondOperand==0)
            {
                window.alert("Division cannot be performed");
            }
            currentInput = firstOperand / secondOperand;
            break;
    }
    display.textContent = currentInput;
    firstOperand = currentInput;
    currentInput = "";
}

function clear() {
    currentInput = "";
    operator = "";
    firstOperand = null;
    display.textContent = "0";
}
