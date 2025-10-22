

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
  pascalrCasetext.innerText = transformToPascalCaseFunction(
    userInputText.value
  );
  snakeCasetext.innerText = transformTSnakeCaseFunction(userInputText.value);
  kebabCasetext.innerText = transformToKebabCaseFunction(userInputText.value);
  trimCasetext.innerText = transformToTrimCaseFunction(userInputText.value);
});

function textSplitter(text) {
  const wordsArray = text.trim().split(' ');
  if (text === '') return '';

  return wordsArray;
}

function transformToCamelCaseFunction(text) {
  let resultText = '';

  textSplitter(text).forEach((word, index) => {
    if (index === 0) {
      resultText += word.toLowerCase();
    } else {
      resultText += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return resultText;
}

function transformToPascalCaseFunction(text) {
  let resultText = '';

  textSplitter(text).forEach((word) => {
    resultText += word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return resultText;
}

function transformTSnakeCaseFunction(text) {
  let resultText = '';
  const wordsArray = textSplitter(text);

  wordsArray.forEach((word, index) => {
    resultText += word.toLowerCase();
    if (wordsArray.length > 1 && index < wordsArray.length - 1) {
      resultText += '_';
    }
  });
  return resultText;
}
function transformToKebabCaseFunction(text) {
  let resultText = '';
  const wordsArray = textSplitter(text);

  wordsArray.forEach((word, index) => {
    resultText += word.toLowerCase();
    if (wordsArray.length > 1 && index < wordsArray.length - 1) {
      resultText += '-';
    }
  });
  return resultText;
}

function transformToTrimCaseFunction(text) {
  let resultText = '';

  textSplitter(text).forEach((word) => {
    resultText += word.toLowerCase();
  });

  return resultText;
}
