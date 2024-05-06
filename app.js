const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function appendConstant(constant) {
  if (constant === 'e') {
    display.value += Math.E;
  }
}

function clearDisplay() {
  display.value = '';
}

function delLastChar() {
  display.value = display.value.slice(0, -1);
}

function factorial() {
  const value = parseFloat(display.value);
  if (isNaN(value) || value < 0 || !Number.isInteger(value)) {
    alert('Invalid input for factorial');
    return;
  }
  const result = calculateFactorial(value);
  display.value = result;
}

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

function squareRoot() {
  const value = parseFloat(display.value);
  if (isNaN(value) || value < 0) {
    alert('Invalid input for square root');
    return;
  }
  const result = Math.sqrt(value);
  display.value = result;
}

function logarithm() {
  const value = parseFloat(display.value);
  if (isNaN(value) || value <= 0) {
    alert('Invalid input for logarithm');
    return;
  }
  const result = Math.log(value);
  display.value = result;
}

function evaluate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    alert('Invalid expression');
  }
}