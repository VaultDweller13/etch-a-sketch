'use strict';
const sketchpad = document.querySelector('#sketchpad');
const resetBtn = document.querySelector('#reset');
const sketchpadSizeRange = document.querySelector('#size');

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
  this.classList.add('black-colored');
}

function resetSketch() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.setAttribute('class', 'cell'))
}

function setColorChangeListener() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
}