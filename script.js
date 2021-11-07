'use strict';
const sketchpad = document.getElementById('sketchpad');
const resetBtn = document.getElementById('reset');
const sketchpadSizeRange = document.getElementById('size');
const colorPicker = document.getElementById('color');
const randomBtn = document.getElementById('random');
let currentColor = setColorPickerColor;

createGrid();

sketchpadSizeRange.addEventListener('input', createGrid);
randomBtn.addEventListener('click', () => currentColor = setRandomColor);
colorPicker.addEventListener('click', () => currentColor = setColorPickerColor);
resetBtn.addEventListener('click', resetSketch);

function createGrid() {
  while(sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }

  let size = sketchpadSizeRange.value;
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

function setColorChangeListener() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.addEventListener('mouseenter', setColor));
}

function setColor() {
  this.style.backgroundColor = currentColor();
}

function setColorPickerColor() {
  return colorPicker.value;
}

function setRandomColor() {
  return `rgb(${getRandom255()}, ${getRandom255()}, ${getRandom255()})`;

  function getRandom255() {
    return Math.floor(Math.random() * 256);
  }
}

function resetSketch() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.style.backgroundColor = 'white')
}