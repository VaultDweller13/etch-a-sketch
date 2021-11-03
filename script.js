'use strict';
const sketchpad = document.querySelector('#sketchpad');

createGrid(16);

const gridCells = document.querySelectorAll('.cell');

gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));

function createGrid(size) {
  for(let i=0; i < size; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', `row`);

    for(let j=0; j < size; j++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'cell');
      // div.textContent = `${i}x${j}`;
      row.appendChild(div)
    }
    sketchpad.appendChild(row);
  }
}

function changeColor(e) {
  this.classList.add('black-colored');
}