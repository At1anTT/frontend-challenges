const passwordInput = document.getElementById('password-input');
const progressBar = document.getElementById('progress-bar-fill');

const lcEl = document.getElementById('lowercase-indicator');
const ucEl = document.getElementById('uppercase-indicator');
const numEl = document.getElementById('number-indicator');
const symEl = document.getElementById('symbol-indicator');

const charsEl = document.getElementById('chars');
const strengthEl = document.getElementById('srtength');

const passwordStengths = [
  { difficulty: 'Weak', color: 'red' },
  { difficulty: 'Medium', color: 'orange' },
  { difficulty: 'Strong', color: 'green' },
];

const hasNumber = /\d/;
const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasSpecial = /[^A-Za-z0-9]/;

function getPasswordStrength(strength) {
  if (strength > 8) {
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
