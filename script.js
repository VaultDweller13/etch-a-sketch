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

  let size = sketchpadSizeRange.value;
  for(let i=0; i < size; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', `row`);

    for(let j=0; j < size; j++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'cell');
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
  element.setAttribute('hsl', '100');
  return `rgb(${getRandom255()}, ${getRandom255()}, ${getRandom255()})`;

  function getRandom255() {
    return Math.floor(Math.random() * 256);
  }
}

function resetSketch() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.style.backgroundColor = 'white')
}

function setShade(element) {
  // console.log(element);
  let hsl = element.getAttribute('hsl');
  
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