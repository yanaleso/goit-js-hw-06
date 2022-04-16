function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

let amount = 0;

input.addEventListener('input', (event) => {
  amount = event.currentTarget.value;
});

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   let boxSize = 30;
//   let boxArr = [];

//   for (let i = 0; i <= amount; i += 1) {
//     const box = document.createElement("div");
  
//     boxSize += 10;
    
//     box.style.width = "`${boxSize}px`";
//     box.style.height = "`${boxSize}px`";
//     box.style.backgroundColor = getRandomHexColor();
//     boxArr.push(box);
// }

//   boxes.append(...boxArr);
// }

function createBoxes(amount) {
  
  const box = document.createElement("div");
    
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
    
  boxes.append(box);
}

function destroyBoxes() {
  const boxesElements = boxes.querySelector('div');
  boxesElements.remove();
}