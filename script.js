'use strict';
const sketchpad = document.getElementById('sketchpad');
const resetBtn = document.getElementById('reset');
const sketchpadSizeRange = document.getElementById('size');
const colorPicker = document.getElementById('color');
const randomBtn = document.getElementById('random');
const shadingBtn = document.getElementById('shading');
let currentColor = setColorPickerColor;

createGrid();

sketchpadSizeRange.addEventListener('input', createGrid);
randomBtn.addEventListener('click', () => currentColor = setRandomColor);
colorPicker.addEventListener('click', () => currentColor = setColorPickerColor);
shadingBtn.addEventListener('click', () => currentColor = setShade);
resetBtn.addEventListener('click', resetSketch);

function createGrid() {
  while(sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.firstChild);
  }

  const size = sketchpadSizeRange.value;
  for(let i=0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j=0; j < size; j++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.setAttribute('hsl', '100');
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
  this.style.backgroundColor = currentColor(this);
}

function setColorPickerColor() {
  return colorPicker.value;
}

function setRandomColor(element) {
  const getRandom255 = () => Math.floor(Math.random() * 256);

  element.setAttribute('hsl', '100');
  return `rgb(${getRandom255()}, ${getRandom255()}, ${getRandom255()})`;
}

function resetSketch() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.style.backgroundColor = 'white')
}

function setShade(element) {
  const hsl = element.getAttribute('hsl');
  
  if (hsl) {
    hsl = hsl > 0 ? hsl - 10 : hsl;
    element.setAttribute('hsl', hsl);
    return `hsl(0, 0%, ${hsl}%)`;
  } else if (hsl !=0) {
    hsl = 90;
    element.setAttribute('hsl', hsl);
    return `hsl(0, 0%, 90%)`;
  } else {
    element.setAttribute('hsl', '100');
  }
}