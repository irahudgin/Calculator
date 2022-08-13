function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  if (operator === "add") {
    return add(x, y);
  } else if (operator === "subtract") {
    return subtract(x, y);
  } else if (operator === "divide") {
    return divide(x, y);
  } else if (operator === "multiply") {
    return multiply(x, y);
  }
}

function numberInput(e) {
  console.log(e);
  console.log(this);
  let display = document.querySelector("#calculatorScreenText");
  display.textContent += this.id;
}

function clearScreen(e) {
  let display = document.querySelector("#calculatorScreenText");
  display.textContent = "";
}

const numButtons = document.querySelectorAll(".numberButton");
numButtons.forEach((button) => {
  button.addEventListener("click", numberInput);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearScreen);
