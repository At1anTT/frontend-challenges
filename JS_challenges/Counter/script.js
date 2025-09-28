const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const currentValue = document.getElementById('current-value');
const resetButton = document.querySelector('.reset-button');
let stepInput = document.querySelector('input[name="step-size"]');

incrementButton.addEventListener('click', () => {
  console.log(currentValue.innerHTML);
  const stepValue = Number(stepInput.value);
  currentValue.innerHTML = Number(currentValue.innerHTML) + stepValue;
});

decrementButton.addEventListener('click', () => {
  const stepValue = Number(stepInput.value);
  currentValue.innerHTML = Number(currentValue.innerHTML) - stepValue;
});

resetButton.addEventListener('click', () => {
  currentValue.innerHTML = 0;
});

document.addEventListener('keydown', (event) => {
  const stepValue = Number(stepInput.value);
  const key = event.key;

  if (key === '+' || key === '=') {
    currentValue.innerHTML = Number(currentValue.innerHTML) + stepValue;
  } else if (key === '-') {
    currentValue.innerHTML = Number(currentValue.innerHTML) - stepValue;
  } else if (key === 'PageUp') {
    stepInput += 1;
  } else if (key === 'PageDown') {
    stepInput -= 1;
  }
});
