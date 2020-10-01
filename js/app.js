( () =>
{
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let pass = document.querySelector(".pass");
    let passwordError = document.querySelector(".password-error");
    let classEmail = document.querySelector(".email");
    let emailValid = document.querySelector(".fa-check");
    let emailError = document.querySelector(".email-error");
    let btnSubmit = document.querySelector("#btn-submit");
    let emailnotmatch = document.querySelector(".email-not-match");
    let passwordnotmatch = document.querySelector(".password-not-match");
    let loginSuccessfully = document.querySelector(".login-successfully");
    let validEmail = "example@gmail.com";
    let validPassword = "password";

    email.addEventListener('keyup', () => {
        if(validateemail()) {
            classEmail.style.border = "2px solid green";
            emailValid.style.display = "block";
            emailError.style.display = "none";

        }
        else {
            classEmail.style.border = "2px solid red";
            emailValid.style.display = "none";
            emailError.style.display = "block";
        }
    });
    password.addEventListener('keypress', () => {
        if(validatepassword()) {
            pass.style.border = "2px solid green";
            passwordError.style.display = "none";
        }
        else {
            pass.style.border = "2px solid red";
            passwordError.style.display = "block";
        }
    });

    function validateemail() {
        let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(reg.test(email.value)) {
            return true;
        }
        else {
            return false;
        }
    }

    function validatepassword (){
        if(password.value.length > 6) {
            return true;
        }
        else {
            return false;
        }
    }

    btnSubmit.addEventListener('click', () => {
        if(email.value == validEmail && password.value == validPassword) {
            loginSuccessfully.style.display = "block";
            emailnotmatch.style.display = "none";
            passwordnotmatch.style.display = "none";

        }
        else if (email.value != "" && email.value != validEmail) {
            emailnotmatch.style.display = "block";
            loginSuccessfully.style.display = "none";
            passwordnotmatch.style.display = "none";
        }
        else if (password.value!= "" && password.value != validEmail) {
            passwordnotmatch.style.display = "block";
            emailnotmatch.style.display = "none";
            loginSuccessfully.style.display = "none";
        }
    });

})();
