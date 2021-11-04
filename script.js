'use strict';
const sketchpad = document.getElementById('sketchpad');
const resetBtn = document.getElementById('reset');
const sketchpadSizeRange = document.getElementById('size');
const colorPicker = document.getElementById('color');

createGrid();
setColorChangeListener();

sketchpadSizeRange.addEventListener('input', createGrid);
resetBtn.addEventListener('click', resetSketch);

function createGrid() {
  while(sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }

  let size = sketchpadSizeRange.value;
  console.log(size);
  for(let i=0; i < size; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', `row`);

    for(let j=0; j < size; j++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'cell');
      row.appendChild(div)
    }
    sketchpad.appendChild(row);
  }

  setColorChangeListener();
}

function changeColor(e) {
  this.style.backgroundColor = colorPicker.value;
}

function resetSketch() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.style.backgroundColor = 'white')
}

function setColorChangeListener() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
}

