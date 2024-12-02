const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signUp = document.getElementById("signUp");

const users = JSON.parse(localStorage.getItem("usersData")) || [];

const passwordRegex = /^(?=.*[&\-_#$@]).{8,}$/;

const message = document.getElementById("passwordMessage");

const signUpMessage = document.getElementById("signUpMessage");

signUp.addEventListener("click" , function(e){
    e.preventDefault();
    if (users.find(newUser => newUser.Email === email.value)){
        message.innerHTML = "this email is already existed";
        signUpMessage.innerHTML = "";
        clearData();
    } else {
        if (passwordRegex.test(password.value)){
            const newUser = {
                Name : userName.value , Email : email.value , Password : password.value
            };
            users.push(newUser);
            localStorage.setItem("usersData" , JSON.stringify(users));
            signUpMessage.innerHTML = "Signed Up Successfully"
            message.innerHTML = "";
            clearData();
        } else {
            message.innerHTML = "Password should contain at least 8 characters and 1 symbol (@,#,$,-,_,&)";
            signUpMessage.innerHTML = "";
        }
    }
})

function clearData(){
    userName.value = "";
    email.value = "";
    password.value = "";
}

