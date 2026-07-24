console.log("Chal gya bhai!");;
import { sweety } from "../DummyData/dummyData.js";

// Variables ===>
let formSubmit = document.getElementById("formSubmit")
let firstName = document.getElementById("firsttName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let users = JSON.parse(localStorage.getItem("users") ) || []
console.log(users);

// Functions ===>
const signupHandler = (event) => {
    // console.log("hn bhai",event.target);
    event.preventDefault()
    if(firstName.value.trim() === "" || lastName.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confirmPassword.value.trim() === "") {
        return sweety("error" , "Oops!" , "Please Fill All Feilds")
    }

    if(password.value.length < 8 || confirmPassword.value.length < 8) {
        return sweety("error" , "Oops!" , "Password at least 8 Chracters long!")
      }
      if(!emailRegex.test(email.value)) {
        return sweety("error" , "Oops!" , "Please Enter a Valid Email!")
      }
    if(password.value != confirmPassword.value) {
        return sweety("error" , "Error!" , "Password Doesn't Match!")
    }


    let userObj = {
        firstName : firstName.value,
        lastName : lastName.value,
        email : email.value,
        password : password.value,
        confirmPassword : confirmPassword.value
    }
    users.push(userObj)
    localStorage.setItem("users" , JSON.stringify(users))
 
 
    sweety("success" , "Congratulations" , "Successfully SignUp!")

   
setTimeout(() => {
    window.location.href = "login.html"
}, 1500);

formSubmit.reset()
}


formSubmit.addEventListener("submit" , signupHandler)