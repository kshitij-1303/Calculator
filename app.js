const display = document.getElementById('display');
const equal = document.querySelector("#done");

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
  const result = Math.sqrt(value);
  display.value = result;
}

function logarithm() {
  const value = parseFloat(display.value);
  const result = Math.log(value);
  display.value = result;
}

equal.addEventListener('click', () => {
  try {
    console.log('display.value:', display.value);
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    console.error('Error:', e);
    alert('Invalid expression');
  }
}

)