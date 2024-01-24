function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color')
btnChangeColor.addEventListener('click', onButtonClick);
function onButtonClick(){
  let color = getRandomHexColor();
  body.style.background = color;
  btnChangeColor.style.background = color;
}