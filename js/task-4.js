const registerForm = document.querySelector('.login-form');
const email = registerForm.firstElementChild.firstElementChild;
const password = registerForm.firstElementChild.nextElementSibling.firstElementChild;
const btnLogin = document.querySelector('button')

 registerForm.addEventListener('submit', onFormSubmit );



function onFormSubmit (event){
event.preventDefault();
const userForm = event.target;
const email = userForm.elements.email.value;
const password = userForm.elements.password.value;


if(!email.trim() || !password.trim()){
 alert('All form fields must be filled in')
}
else{
    const user = {
        email: email,
        password: password,
    };
    console.log(user);
    event.currentTarget.reset();
 }

}



