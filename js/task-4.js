const registerForm = document.querySelector('.login-form');
const btnLogin = document.querySelector('button')
console.log(btnLogin);
btnLogin.addEventListener('click', onBtnSubmit );
// function onBtnSubmit (){
//     console.log('Hello BaBy!')
// }
function onBtnSubmit (event){
event.preventDefault();


const {email, password} = event.currentTarget.elements;
if(!email.value.trim() || !password.value.trim()){
return alert('All form fields must be filled in')
}
else{
    const accountsObj = {
        email: email.value,
        password: password.value,
    };
    console.log(email.value);
    event.currentTarget.reset();
 }

}