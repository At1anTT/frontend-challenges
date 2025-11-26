// 16 47

let colorStyle = `rgb(1, 1, 1)`;

let tableBody = document.getElementById('table-body');

function createTable(row = 16, column = 47) {
  let tablePattern = document.createDocumentFragment();
  for (let i = 0; i < row; i++) {
    let rowElement = document.createElement('tr');
    for (let j = 0; j < column; j++) {
      let cell = document.createElement('td');
      rowElement.appendChild(cell);
    }
    tablePattern.appendChild(rowElement);
  }
  tablePattern.id = 'empty-table';
  tableBody.appendChild(tablePattern);
  tableBody.appendChild(createColorRow());
}

function createColorRow(column = 47) {
  let row = document.createElement('tr');
  row.id = 'color-row';

  for (let i = 0; i < column; i++) {
    let cell = document.createElement('td');
    cell.style.backgroundColor = `rgb(${256 * Math.random()},
      ${256 * Math.random()},
      ${256 * Math.random()})`;

    cell.setAttribute('data-index', String(i));
    row.appendChild(cell);
  }
  return row;
}

createTable();

const colorRow = document.getElementById('color-row');

function setColorConstant(event) {
  if (event.target.tagName === 'TD') {
    colorStyle = event.target.style.backgroundColor;
  }
  // console.log(colorStyle);
}

colorRow.addEventListener('click', (event) => setColorConstant(event));

tableBody.addEventListener('click', (event) => {
  event.target.style.backgroundColor = colorStyle;
});
