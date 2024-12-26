const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let isResult = false;
function validateOperators(input) {
  const consecutiveOperators = /[+\-*\/]{2,}/;
  return !consecutiveOperators.test(input);
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

function handleInput(value) {
  if (isResult && !isOperator(value)) {
    display.value = value;
    isResult = false;
  } else if (isResult && isOperator(value)) {
    isResult = false;
  }

  const currentDisplay = display.value;
  if (isOperator(value)) {
    if (!validateOperators(currentDisplay + value)) {
      return;
    }
  }
  display.value += value;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      display.value = eval(display.value);
      isResult = true;
    } else if (btn.id === "ac") {
      display.value = "";
      isResult = false;
    } else if (btn.id === "borrar") {
      if (!isResult) {
        display.value = display.value.slice(0, -1);
      }
    } else {
      handleInput(btn.id);
    }
  });
});

document.addEventListener('keydown', (event) => {
  // Numbers 0-9
  if (/^[0-9]$/.test(event.key)) {
    handleInput(event.key);
  }
  // Operators
  else if (['+', '-', '*', '/'].includes(event.key)) {
    handleInput(event.key);
  }
  // Enter key acts as equals
  else if (event.key === 'Enter') {
    display.value = eval(display.value);
    isResult = true;
  }
  // Backspace acts as delete
  else if (event.key === 'Backspace' && !isResult) {
    display.value = display.value.slice(0, -1);
  }
  // Escape acts as clear
  else if (event.key === 'Escape') {
    display.value = '';
    isResult = false;
  }
});
