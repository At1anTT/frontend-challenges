const randomNumber = parseInt(100 * Math.random());

let atemptArray = [];
let attemptCounter = 0;
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const guessesField = document.querySelector('.guesses-field');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (attemptCounter >= 3) {
    console.log('Your lose');
    submitBtn.disabled = true;
    resetBtn.disabled = false;
  }

  console.log(`Your ${attemptCounter.toString()} attemp`);

  const userNumberTxt = document.getElementsByTagName('input')[0].value;
  console.log(randomNumber);
  const userNumber = parseInt(userNumberTxt);
  atemptArray.push(userNumber);
  console.log('');

  if (randomNumber === userNumber) {
    console.log('You win');
    guessesField.innerHTML = `<p>You are won!</p>`;
    resetBtn.disabled = true;
    submitBtn.disabled = false;
    return;
  } else if (randomNumber <= userNumber) {
    responseText = `It's too big!`;
  } else {
    responseText = `It's too low!`;
  }
  guessesField.innerHTML = `<p>
      It's too big! Your atemp is: ${userNumberTxt} <br /> Your guesses
      ${atemptArray.join(', ')}
    </p>`;
  attemptCounter += 1;
});

resetBtn.addEventListener('click', () => {
  location.reload();
  resetBtn.disabled = true;
});
