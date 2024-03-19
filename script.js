// Declare global letiables
let numRows = 0;
let numCols = 0;
let colorSelected = document.getElementById("selectedColorId").value;

let grid = document.getElementById("grid");

// Add a row
function addR() {
  let newRow = grid.insertRow(-1);
  let cellCounter = grid.rows[0].cells.length;
  for (let i = 0; i < cellCounter; i++) {
    newRow.insertCell(i);
  }
  // Event listener if this cell is ever clicked
  newRow.querySelectorAll("td").forEach((cell) => {
    cell.addEventListener("click", function () {
      colorCell(cell);
    });
  });
}

// Add a column
function addC() {
  let rowCounter = grid.rows.length;
  for (let i = 0; i < rowCounter; i++) {
    grid.rows[i].insertCell(-1);
  }
  // Event listener if this cell is ever clicked
  grid.querySelectorAll("tr").forEach((row) => {
    var lastCell = row.cells[row.cells.length - 1];
    lastCell.addEventListener("click", function () {
      colorCell(lastCell);
    });
  });
}

// Remove a row
function removeR() {
  grid.deleteRow(-1);
}

// Remove a column
function removeC() {
  let rowCount = grid.rows.length;
  for (let i = 0; i < rowCount; i++) {
    grid.rows[i].deleteCell(-1);
  }
}

// Set global color
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU() {
  let cells = grid.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].style.backgroundColor == "") {
      cells[i].style.backgroundColor = colorSelected;
    }
  }
}

// Fill all cells
function fillAll() {
  let cells = grid.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = colorSelected;
  }
}

// Clear all cells
function clearAll() {
  let cells = grid.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "";
  }
}

// Colors a specific cell
function colorCell(cell) {
  cell.style.backgroundColor = colorSelected;
}
