// script.js

let currentInput = '0'; // The initial value on the display

// Update the display
function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

// Clear the display
function clearDisplay() {
    currentInput = '0';
    updateDisplay(currentInput);
}

// Append numbers or operators to the current input
function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay(currentInput);
}

// Calculate the result of the current input
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay(currentInput);
}
