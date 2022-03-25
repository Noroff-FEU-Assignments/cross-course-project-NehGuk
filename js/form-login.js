const formContainer = document.querySelector("#form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const loginButton = document.querySelector("#login");

function validateForm() {
    event.preventDefault();

    if(validateEmail(email.value) === true ) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    if(password.value.length >= 8 && password.value.length <= 20 ) {
        passwordError.style.display = "none";
    }
    else {
        passwordError.style.display = "block";
    }

}

formContainer.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

