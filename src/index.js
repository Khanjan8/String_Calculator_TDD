import { add } from './calculator.js';

const input = document.getElementById('inputString');
const button = document.getElementById('calculateBtn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  try {
    const output = add(input.value);
    result.textContent = `Result: ${output}`;
  } catch (e) {
    result.textContent = `Error: ${e.message}`;
  }
});
