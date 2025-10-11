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
  camelCasetext.innerText = userInputText.value.toCamelCase();
});

// function transformToLowerCaseFunction(text) {
//   text.toLowerCase();
// }
// function transformToUpperCaseFunction(text) {
//   text.tra;
// }
// function transformToCamelCaseFunction(text) {
//   text.tra;
// }
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
