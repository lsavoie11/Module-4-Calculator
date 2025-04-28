let currentValue = "";
let previousValue = "";
let operator = "";

const display = document.getElementById("display");

function appendValue(value) {
  currentValue += value;
  updateDisplay(currentValue);
}

function setOperator(op) {
  if (currentValue === "") return;
  if (previousValue !== "") {
    calculate();
  }
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  if (previousValue === "" || currentValue === "" || operator === "") return;

  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      return;
  }

  currentValue = result.toString();
  operator = "";
  previousValue = "";
  updateDisplay(currentValue);
}

function clearDisplay() {
  currentValue = "";
  previousValue = "";
  operator = "";
  updateDisplay("");
}

function updateDisplay(value) {
  display.value = value;
}
