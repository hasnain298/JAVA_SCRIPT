console.log("Chal gya bhai!");;

let formSubmit = document.getElementById("formSubmit")
let firsttName = document.getElementById("firsttName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")




const signupHandler = () => {
    // console.log("hn bhai",event.target);
    event.preventDefault()
    // if(firsttName.ariaValueMax.trim() === "" )
}


formSubmit.addEventListener("submit" , signupHandler)