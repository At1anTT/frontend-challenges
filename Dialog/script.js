const show_popup_btn = document.querySelector(".show-dialog-btn");
const popup_window = document.querySelector(".popup-container");
const close_btn = document.querySelector(".close-popup");

show_popup_btn.addEventListener("click", () => {
  popup_window.style.setProperty("display", "block");
});

close_btn.addEventListener("click", () => {
  popup_window.style.setProperty("display", "none");
});
