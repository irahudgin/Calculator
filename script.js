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
  if ((x[0] && x[1]) === 0) {
    return "Dont do that";
  }
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
  if (operatorClearToggle == true) {
    screenDisplay.textContent = "";
    operatorClearToggle = false;
  }
  screenDisplay.textContent += this.id;
}

function clear() {
  screenDisplay.textContent = "";
  if (Boolean(numbersToOperate[0])) {
    // If there is data in the array, clear it, and the operator for a full clear
    numbersToOperate.length = 0;
    operator = "";
  }
}

function screenClear(e) {
  console.log(e);
  if (e.target.className === "numberButton") {
    // If a new number button is pressed, clear screen and show new number
    screenDisplay.textContent = "";
    window.removeEventListener("mousedown", screenClear);
  } else {
    return;
  }
}

function keyLimits(e) {
  if (e.key >= 0 && e.key <= 9) {
    if (operatorClearToggle == true) {
      screenDisplay.textContent = "";
      operatorClearToggle = false;
    }
    document.getElementById(`${e.key}`).click();
  } else if (e.key == "/") {
    document.getElementById("divide").click();
  } else if (e.key == "*") {
    document.getElementById("multiply").click();
  } else if (e.key == "+") {
    document.getElementById("add").click();
  } else if (e.key == "-") {
    document.getElementById("subtract").click();
  } else if (e.key == "c") {
    document.getElementById("clear").click();
  } else if (e.key == "Backspace") {
    document.getElementById("backspace").click();
  } else if (e.key == "=") {
    document.getElementById("equals").click();
  } else {
    return;
  }
}

function operatorButtonClick(e) {
  if (Boolean(numbersToOperate[0])) {
    numbersToOperate[1] = parseFloat(screenDisplay.textContent);
    screenDisplay.textContent = operate(operator, numbersToOperate);
    numbersToOperate[0] = parseFloat(screenDisplay.textContent);
    operator = e.target.id;
    operatorClearToggle = true;
    // add a way for the number buttons to clear the screen like last time with the forEach loop
  } else {
    operator = e.target.id;
    numbersToOperate[0] = parseFloat(screenDisplay.textContent); // add preliminary screen display number to array as first number
    screenDisplay.textContent = "";
  }
}

const screenDisplay = document.querySelector("#calculatorScreenText");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backSpace = document.querySelector("#backspace");

const numButtons = document.querySelectorAll(".numberButton");
numButtons.forEach((button) => {
  button.addEventListener("click", numberInput);
});

clearButton.addEventListener("click", clear);

backSpace.addEventListener("click", () => {
  let screenDisplayBS = screenDisplay.textContent;
  screenDisplay.textContent = screenDisplayBS.slice(
    0,
    screenDisplayBS.length - 1
  );
});

var operatorClearToggle = false;
var operator = "";
var numbersToOperate = [];
const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", operatorButtonClick);
});

equalsButton.addEventListener("click", () => {
  numbersToOperate[1] = parseFloat(screenDisplay.textContent);
  screenDisplay.textContent = operate(operator, numbersToOperate);
  numbersToOperate.length = 0;
  window.addEventListener("mousedown", screenClear);
});

window.addEventListener("keydown", (e) => keyLimits(e));
