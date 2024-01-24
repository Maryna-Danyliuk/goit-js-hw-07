const nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');
nameInput.addEventListener
 ('input', (event) => {
    let textName = event.currentTarget.value;
    if (textName.trim() !== ''){  
          nameOutput.textContent = event.currentTarget.value;}
else{
    nameOutput.textContent = "Anonymous"
}
  });
  const greeting = document.querySelector('h2');
greetingt.classList.add('greeting');

