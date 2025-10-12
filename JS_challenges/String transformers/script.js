const userInputText = document.getElementById('input-user-text');

const lowerCasetext = document.getElementById('transformer-to-lowercase-text');
const upperCasetext = document.getElementById('transformer-to-uppercase-text');
const camelCasetext = document.getElementById('transformer-to-camelcase-text');
const pascalrCasetext = document.getElementById(
  'transformer-to-pascalcase-text'
);
const snakeCasetext = document.getElementById('transformer-to-snakecase-text');
const kebabCasetext = document.getElementById('transformer-to-kebabcase-text');
const trimCasetext = document.getElementById('transformer-to-trimcase-text');

userInputText.addEventListener('input', (event) => {
  event.preventDefault();

  lowerCasetext.innerText = userInputText.value.toLowerCase();
  upperCasetext.innerText = userInputText.value.toUpperCase();

  camelCasetext.innerText = transformToCamelCaseFunction(userInputText.value);
});

// function transformToLowerCaseFunction(text) {
//   text.toLowerCase();
// }
// function transformToUpperCaseFunction(text) {
//   text.tra;
// }

function transformToCamelCaseFunction(text) {
  const wordsArray = text.trim().split(' ');
  let resultText = '';

  wordsArray.forEach((word, index) => {
    if (index === 0) {
      resultText += word.toLowerCase();
    } else {
      resultText += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return resultText;
}

// function transformToPascalCaseFunction(text) {
//   text.tra;
// }
// function transformTSnakeCaseFunction(text) {
//   text.tra;
// }
// function transformToKebabCaseFunction(text) {
//   text.tra;
// }
// function transformToTrimCaseFunction(text) {
//   text.tra;
// }
