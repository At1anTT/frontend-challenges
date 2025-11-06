const horisontalPositionEl = document.getElementById(
  'horisontal-position-selector'
);
const verticalPositionEl = document.getElementById(
  'vertical-position-selector'
);
const toastTypeEl = document.getElementById('type-selector');
const toastMessageEl = document.getElementById('toast-message-input');
const showToastButtonEl = document.getElementById('show-toast');
const durationEl = document.getElementById('range-input');
const durationOpEl = document.getElementById('duration-output');

const leftTopContainer = document.querySelector('.tc-left-top');
const leftBottomContainer = document.querySelector('.tc-left-bottom');
const rightTopContainer = document.querySelector('.tc-right-top');
const rightBottomContainer = document.querySelector('.tc-right-bottom');


const toastTemplate = document.getElementById('toast-template');

toastMessageEl.addEventListener('input', handleShowToastButton);
showToastButtonEl.addEventListener('click', displayToast);

function handleShowToastButton() {
  showToastButtonEl.disabled = toastMessageEl.value.length === 0;
}

function displayToast(e) {
  e.prevent
  const message = toastMessageEl.value;
  const type = toastTypeEl.value;
  const horisontalPosition = horisontalPositionEl.value;
  const verticalPosition = verticalPositionEl.value;
  const duration = +durationEl.value * 1000;
  showToast(message, type, duration, horisontalPosition, verticalPosition);
}

function showToast(
  message,
  type,
  duration,
  horisontalPosition,
  verticalPosition
) {
  if (horisontalPosition === 'Left') {
    if (verticalPosition === 'Top') {
      leftTopContainer.prepend(
        createToast(message, type, duration, horisontalPosition)
      );
    } else {
      leftBottomContainer.append(
        createToast(message, type, duration, horisontalPosition)
      );
    }
  } else {
    if (verticalPosition === 'top') {
      rightTopContainer.prepend(
        createToast(message, type, duration, horisontalPosition)
      );
    } else {
      rightBottomContainer.append(
        createToast(message, type, duration, horisontalPosition)
      );
    }
  }
}

function createToast(message, type, duration, horisontalPosition) {
  const toast = toastTemplate.content.cloneNode(true);
  toast.querySelector('.toast-message').textContent = message;
  toast.querySelector('.toast').classList.add(type);
  toast.querySelector('.remove').addEventListener('click', removeToast);
  const toastEl = toast.querySelector('.toast');

  setTimeout(removeToast, duration);

  async function removeToast() {
    toastEl.classList.add(
      horisontalPosition === 'left' ? 'fade-out-left' : 'fade-out-right'
    );
    await new Promise((resolve) => setTimeout(resolve, 100));
    toastEl.remove();
  }

  return toast;
}

durationEl.addEventListener('input', () => {
  durationOpEl.textContent = durationEl.value;
});
