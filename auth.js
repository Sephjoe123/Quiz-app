const registrationBox = document.querySelector(".registration-box")
const loginBox = document.querySelector(".login-box")
const signUp = document.querySelector(".signup")

signUp.addEventListener("click", () =>{
    registrationBox.style.display = "block";
    loginBox.style.display = "none"
})
