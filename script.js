function toggleForm() {
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

function signup() {
    const name = document.getElementById('signupNameField').value;
    const email = document.getElementById('signupEmailField').value;
    const phone = document.getElementById('signupPhoneField').value;
    const password = document.getElementById('signupPasswordField').value;
    const recaptchaResponse = grecaptcha.getResponse();
    
    if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA.');
        return;
    }
    
    // Add your signup logic here
    if (name && email && phone && password) {
        alert('Signup successful')
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const email = document.getElementById('loginEmailField').value;
    const password = document.getElementById('loginPasswordField').value;
    
    // Add your login logic here
    alert('Login successful!');
}

function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}