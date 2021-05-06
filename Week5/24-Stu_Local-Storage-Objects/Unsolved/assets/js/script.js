var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var formObj = {
    firsName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: signUpButton.value
  };
  // TODO: Set new submission to local storage 
  var formObjString = JSON.stringify(formObj);
  localStorage.setItem('Form-Object', formObjString);
});
