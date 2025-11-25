// 16 47

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
  tableBody.appendChild(tablePattern);
  tableBody.appendChild(createColorRow());
}

function createColorRow(column = 47) {
  let row = document.createElement('tr');
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
