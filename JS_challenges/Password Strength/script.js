const passwordInput = document.getElementById('password-input');
const progressBarFill = document.getElementById('progress-bar-fill');

const loverCaseIndicator = document.getElementById('lowercase-indicator');
const upperCaseIndicator = document.getElementById('uppercase-indicator');
const numberIndicator = document.getElementById('number-indicator');
const symbolsIndicator = document.getElementById('symbol-indicator');

passwordInput.addEventListener('input', changeSecurityPassword);

function changeSecurityPassword(event) {
  console.log(String(event.currentTarget.value));

  if (checkDigitInString(this.value)) {
    numberIndicator.classList.add('criteries-done');
  }
  if (checkLovwerCaseLetterInString(this.value)) {
    loverCaseIndicator.classList.add('criteries-done');
  }
  if (checkUpperCaseLetterInString(this.value)) {
    upperCaseIndicator.classList.add('criteries-done');
  }
  if (checkSpecialSymbolsInString(this.value)) {
    symbolsIndicator.classList.add('criteries-done');
  }
}

function checkDigitInString(str) {
  const regex = /\d/;
  return regex.test(str);
}

function checkLovwerCaseLetterInString(str) {
  const regex = /[a-z]/;
  return regex.test(str);
}

function checkUpperCaseLetterInString(str) {
  const regex = /[A-Z]/;
  return regex.test(str);
}
function checkSpecialSymbolsInString(str) {
  const regex = /[^a-zA-Z0-9] /;
  return regex.test(str);
}
