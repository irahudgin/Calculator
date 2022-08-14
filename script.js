function add(x) {
  return x;
}

function subtract(x) {
  return x;
}

function multiply(x) {
  return x;
}

function divide(x) {
  return x;
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

function clearScreen(e) {
  screenDisplay.textContent = "";
}

const screenDisplay = document.querySelector("#calculatorScreenText");

const numButtons = document.querySelectorAll(".numberButton");
numButtons.forEach((button) => {
  button.addEventListener("click", numberInput);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearScreen);

const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let operator = e.target.id;
    let firstNumber = parseInt(screenDisplay.textContent);
  });
});
