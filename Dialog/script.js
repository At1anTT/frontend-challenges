const showPopupButton = document.querySelector('.show-dialog-btn');
const dialogPopup = document.querySelector('.dialogPopup');
const closeButtons = document.querySelectorAll('.closeDialog');

showPopupButton.addEventListener('click', () => {
  dialogPopup.showModal();
});

closeButtons.forEach((event) => {
  event.addEventListener('click', (event) => {
    event.stopPropagation();
    dialogPopup.close();
  });
});

function closeOnBackDropClick({ currentTarget, target }) {
  console.log(currentTarget);
  console.log(target);
  const dialog = currentTarget;
  const isClickedOnBackDrop = target === dialog;
  if (isClickedOnBackDrop) {
    dialogPopup.close();
  }
}

dialogPopup.addEventListener('click', closeOnBackDropClick);
