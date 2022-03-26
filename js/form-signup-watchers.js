const formContainer = document.querySelector("#form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password-error");


function validateForm(event) {
    event.preventDefault();
    let validationPassed = true;

    if(fullName.value.length >= 1) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
        validationPassed = false;
    }

    if(validateEmail(email.value) === true ) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if(password.value.length >= 8 && password.value.length <= 20) {
        passwordError.style.display = "none";
    }
    else {
        passwordError.style.display = "block";
        validationPassed = false;
    }

/*     if(confirmPassword.value === password.value) {
        confirmPasswordError.style.dysplay = "none";
    }
    else {
        confirmPasswordError.style.dysplay = "block";
        validationPassed = false;
    } */

    if(validationPassed === true) {
        document.location.href = "/my-account-watcher.html";
    }

}

formContainer.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}