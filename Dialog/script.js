const show_popup_btn = document.querySelector(".show-dialog-btn");
const popup_window = document.querySelector(".dialogPopup");
const close_btn = document.querySelectorAll(".closeDialog");

show_popup_btn.addEventListener("click", () => {
  popup_window.showModal();
});

close_btn.forEach((event) =>
  event.addEventListener("click", () => {
    popup_window.close();
  })
);
