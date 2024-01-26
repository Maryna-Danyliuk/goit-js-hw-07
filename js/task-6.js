function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

boxes.style.display = "flex";
boxes.style.gap = '15px';
boxes.style.marginTop = '15px';
boxes.style.flexWrap = 'wrap';

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  while(boxes.firstChild){
   boxes.removeChild(boxes.firstChild)
  }
 }

function createBox(amount){
  destroyBoxes();
  amount = input.value;
  if (amount > 0, amount <= 100){
  for  (let i = 1; i <= amount; i++) {
    console.log("Hello" + i);
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('box');
    itemDiv.style.width = `${30 + i * 10}px`;
    itemDiv.style.height = `${30 + i * 10}px`;
    itemDiv.style.background = getRandomHexColor();
   boxes.appendChild(itemDiv);
  };
  };
}
function createBoxes(){
 createBox()
input.value = ""
}





