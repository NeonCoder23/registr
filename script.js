let signin = document.querySelector("#signinBtn")
let signup = document.querySelector("#signupBtn")
let nameField = document.querySelector("#nameField")
let title = document.querySelector("#title")


signin.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerText = "Sign In";
    signup.classList.add("disable")
    signin.classList.remove("disable")
}
signup.onclick = function () {
    nameField.style.maxHeight = "65px";
    title.innerText = "Sign Up";
    signin.classList.add("disable")
    signup.classList.remove("disable")
}