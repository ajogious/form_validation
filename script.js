const userName = document.getElementById('username');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('conemail');
const password = document.getElementById('pwd');
const confirmPwd = document.getElementById('cpwd');
const btn = document.getElementById('btn');
form = document.querySelector('form');
//-------------------- function calling  -----------------------
function validateInput(){
   if(userName.value === ""){
      let parent = userName.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'Username can not be empty'
      userName.style.border = "2px solid red";
   }else{
      let parent = userName.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'hidden';
      messageElem.innerHTML = '';
      userName.style.border = "3px solid green";
   }
   if(email.value === ""){
      let parent = email.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'Email can not be empty'
      email.style.border = "2px solid red";
   }else{
      let parent = email.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'hidden';
      messageElem.innerHTML = '';
      email.style.border = "3px solid green";
   }
   if(confirmEmail.value === ""){
      let parent = confirmEmail.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'Confirm email can not be empty';
      confirmEmail.style.border = "2px solid red";
   }else if (confirmEmail.value !== email.value){
      let parent = confirmEmail.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'Email not match'
   }
   else{
      let parent = confirmEmail.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'hidden';
      messageElem.innerHTML = '';
      confirmEmail.style.border = "3px solid green";
   }
   if(password.value === ""){
      let parent = password.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'Password can not be empty'
      password.style.border = "2px solid red";
   }else{
      let parent = password.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'hidden';
      messageElem.innerHTML = '';
      password.style.border = "3px solid green";
   }
   if(confirmPwd.value === ""){
      let parent = confirmPwd.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'Password can not be empty';
      confirmPwd.style.border = "2px solid red";
   }else if (confirmPwd.value !== password.value){
      let parent = confirmPwd.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'visible';
      messageElem.innerHTML = 'confirm password not match'
   }
   else{
      let parent = confirmPwd.parentElement;
      let messageElem = parent.querySelector('small');
      messageElem.style.visibility = 'hidden';
      messageElem.innerHTML = '';
      confirmPwd.style.border = "3px solid green";
   }
}
// Need more work on the function!!!!
btn.addEventListener('click', function(e){
   e.preventDefault();
   validateInput();
})
