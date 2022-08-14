function add(x) {
  let finalNum = x[0] + x[1];
  return finalNum.toString();
}

function subtract(x) {
  let finalNum = x[0] - x[1];
  return finalNum.toString();
}

function multiply(x) {
  let finalNum = x[0] * x[1];
  return finalNum.toString();
}

function divide(x) {
  let finalNum = x[0] / x[1];
  return finalNum.toString();
}

function operate(operator, x) {
  if (operator === "add") {
    return add(x);
  } else if (operator === "subtract") {
    return subtract(x);
  } else if (operator === "divide") {
    return divide(x);
  } else if (operator === "multiply") {
    return multiply(x);
  }
}

function numberInput(e) {
  screenDisplay.textContent += this.id;
}

function clear() {
  screenDisplay.textContent = "";
}

const screenDisplay = document.querySelector("#calculatorScreenText");
const equalsButton = document.querySelector("#equals");

const numButtons = document.querySelectorAll(".numberButton");
numButtons.forEach((button) => {
  button.addEventListener("click", numberInput);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    var numbersToOperate = [];
    var operator = e.target.id;
    numbersToOperate[0] = parseInt(screenDisplay.textContent); // add preliminary screen display number to array as first number
    clear();
    equalsButton.addEventListener("click", () => {
      numbersToOperate.push(parseInt(screenDisplay.textContent)); // adds secondary number to array when equals is pressed
      screenDisplay.textContent = operate(operator, numbersToOperate);
      numbersToOperate.length = 0;
    });
  });
});
