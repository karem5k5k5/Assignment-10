const userNameWelcome = document.getElementById("userNameWelcome");
const user = JSON.parse(localStorage.getItem("logedInUser"));

userNameWelcome.textContent = `${user.Name}!`;
