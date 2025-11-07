const rowsEl = document.querySelector('#rows');
const columnsEl = document.querySelector('#columns');
const tableBodyEl = document.querySelector('.table-body');

let rows = +rowsEl.value;
let columns = +columnsEl.value;

function createMatrix(rows, columns) {
  const matrix = Array.from(Array(rows), () => []);

  let count = 1;
  let direction = 1;
  let rowIndex = 0;
  let columnIndex = 0;

  while (columnIndex < columns) {
    while (rowIndex >= 0 && rowIndex < rows) {
      matrix[rowIndex][columnIndex] = count++;
      rowIndex += direction;
    }

    direction *= -1;
    rowIndex += direction;
    columnIndex += 1;
  }
  return matrix;
}



