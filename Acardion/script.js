const accordionButtons = document.querySelectorAll('.accordion-button');
let isMultiplieOpenCheckBox = document.getElementById('multiple-open-checkbox');

function openInsideMenu(event) {
  const elementMenu = event.target.closest('.accordion-item');
  const insideMenu = elementMenu.querySelector('.accordion-panel');
  const arrowImage = elementMenu.querySelector('.accordion-arrow');
  insideMenu.classList.toggle('open');
  arrowImage.classList.toggle('open');
}

function closeAllMenu() {
  accordionButtons.forEach((buttons) => {
    const elementMenu = buttons.closest('.accordion-item');
    const insideMenu = elementMenu.querySelector('.accordion-panel');
    const arrowImage = elementMenu.querySelector('.accordion-arrow');
    insideMenu.classList.remove('open');
    arrowImage.classList.remove('open');
  });
}

isMultiplieOpenCheckBox.addEventListener('change', closeAllMenu);

accordionButtons.forEach((buttons) => {
  buttons.addEventListener('click', openInsideMenu);
});
