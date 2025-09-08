const show_popup_btn = document.querySelector('.show-dialog-btn');
const popup_window = document.querySelector('.dialogPopup');
const close_btn = document.querySelector('.closeDialog');

show_popup_btn.addEventListener('click', () => {
  popup_window.style.setProperty('display', 'block');
});

close_btn.addEventListener('click', () => {
  popup_window.style.setProperty('display', 'none');
});
