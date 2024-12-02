const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const login = document.getElementById("login");
const users = JSON.parse(localStorage.getItem("usersData"));


login.addEventListener("click" , function(e){
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)){
        message.innerHTML = "";
        window.location.href = "./html/home.html";
        const user = users.find(newUser => newUser.Email === email.value && newUser.Password === password.value);
        localStorage.setItem("logedInUser" , JSON.stringify(user));
    } else {
        message.innerHTML = "Invalid email or password"
    }
})

function validateEmail(mail){
    if (users.find(newUser => newUser.Email === mail.value)){
        return true;
    } else {
        return false;
    }
}

function validatePassword(pass){
    if (users.find(newUser => newUser.Password === pass.value)){
        return true;
    } else {
        return false;
    }
}


