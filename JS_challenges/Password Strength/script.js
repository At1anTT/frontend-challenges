const passwordInput = document.getElementById('password-input');
const progressBarFill = document.getElementById('progress-bar-fill');

const loverCaseIndicator = document.getElementById('lowercase-indicator');
const upperCaseIndicator = document.getElementById('uppercase-indicator');
const numberIndicator = document.getElementById('number-indicator');
const symbolsIndicator = document.getElementById('symbol-indicator');

passwordInput.addEventListener('input', changeSecurityPassword);

function changeSecurityPassword(event) {
  let percentOfSecurity = 0;
  let lenOfPassowrd = this.value.length;

  if (checkDigitInString(this.value)) {
    numberIndicator.classList.add('criteries-done');
    percentOfSecurity += 15;
  }
  if (checkLovwerCaseLetterInString(this.value)) {
    loverCaseIndicator.classList.add('criteries-done');
    percentOfSecurity += 15;
  }
  if (checkUpperCaseLetterInString(this.value)) {
    upperCaseIndicator.classList.add('criteries-done');
    percentOfSecurity += 15;
  }
  if (checkSpecialSymbolsInString(this.value)) {
    symbolsIndicator.classList.add('criteries-done');
    percentOfSecurity += 15;
  }

  if (lenOfPassowrd > 4) {
    percentOfSecurity += 15;
  }
  if (lenOfPassowrd > 8) {
    percentOfSecurity += 15;
  }

  if (lenOfPassowrd > 15) {
    percentOfSecurity += 15;
  }

  if (lenOfPassowrd >= 4) {
    // Если значение percentOfSecurity выше определенного уровня подстраивать цвет
    console.log(percentOfSecurity);
    progressBarFill.style.width = String(percentOfSecurity) + '%';
  } else {
    percentOfSecurity = 0;
    progressBarFill.style.width = '0%';
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
  const regex = /[^a-zA-Z0-9]/;

  return regex.test(str);
}
