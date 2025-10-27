const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
const validLength = 10;

const formatPhoneNumber = (value) => {
  const numbersOnly = value.replace(/\D/g, '');

  if (numbersOnly.length === 0) return '';
  if (numbersOnly.length <= 3) return numbersOnly;
  if (numbersOnly.length <= 6)
    return `+(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;
  return `+(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(
    3,
    6
  )}-${numbersOnly.slice(6, validLength)}`;
};

const updateValidationState = (input) => {
  const value = input.value.replace(/\D/g, '');
  const isValid = value.length === validLength || value.length === 0;

  input.setAttribute(`aria-invalid`, !isValid);
  input.classList.toggle('valid', value.length === validLength);

  if (!isValid && value.length > 0) {
    input.classList.add('shake');
    phoneError.textContent = `Please enter a valid ${validLength}-digit phone number`;
    setTimeout(() => input.classList.remove('shake'), 300);
  } else {
    phoneError.textContent = '';
  }
};

phoneInput.addEventListener('input', () => {
  phoneInput.value = formatPhoneNumber(phoneInput.value);
  updateValidationState(phoneInput);
});
