const passwordInput = document.getElementById('password-input');
const progressBarFill = document.getElementById('progress-bar-fill');

const loverCaseIndicator = document.getElementById('lowercase-indicator');
const upperCaseIndicator = document.getElementById('uppercase-indicator');
const numberIndicator = document.getElementById('number-indicator');
const symbolsIndicator = document.getElementById('symbol-indicator');

const lenPassStr = document.getElementById('chars');
const securityLevelText = document.getElementById('stength');

const passwordStengths = [
  { difficulty: 'Weak', color: 'red' },
  { difficulty: 'Medium', color: 'orange' },
  { difficulty: 'Strong', color: 'green' },
];

const hasNumber = /\d/;
const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasSpecial = /[^A_Za-z0-9]/;

function getPasswordStrength(strength) {
  if (strength > 0) {
    return passwordStengths[2];
  }

  if (strength > 5) {
    return passwordStengths[1];
  }

  return passwordStengths[0];
}

function getPasswordScore(text) {
  let score = 0;
  if (text.length > 3) {
    score = Math.min(6, Math.floor(text.length / 3));
    score +=
      hasNumber.test(text) +
      hasUpperCase.test(text) +
      hasLowerCase.test(text) +
      hasSpecial.test(text);
  }
  return score;
}

function updateUI(strength, score, length, indicators) {
  strengthEl.textContent = strength.difficulty;
  progressBar.style.backgroundColor = strength.color;
  progressBar.style.width = score * 10 + '%';
  lcEl.className = indicators.lc;
  ucEl.className = indicators.uc;
  numEl.className = indicators.num;
  symEl.className = indicators.sym;
  charsEl.textContent = length;
}

passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  const score = getPasswordScore(passwordInput.value);
  const strength = getPasswordStrength(score);
  const [lc, uc, num, sym] = [
    hasLowerCase.test(password),
    hasUpperCase.test(password),
    hasNumber.test(password),
    hasSpecial.test(password),
  ];

  updateUI(strength, score, password.length, { lc, uc, num, sym });
});
