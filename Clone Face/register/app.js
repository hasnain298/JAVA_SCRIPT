// console.log("Js Is Running!");


// let firstName = document.getElementById("fn")
// let lastName = document.getElementById("ln")
// let day = document.getElementById("day");
// let month = document.getElementById("month");
// let year = document.getElementById("year");
// let email = document.getElementById("mb");
// let password = document.getElementById("np");
// let signupBtn = document.getElementById("signUp-btn");
// let gender = document.getElementsByName("gender");


// // console.log(firstName.value)

// const sweety = (error, title, message) => {
//   Swal.fire({
//     icon: error,
//     title: title,
//     text: message,
//   });
// };

// const signupHandler = () => {

// // Input value empty condition 
// if(firstName.value.trim() === "" || lastName.value.trim() === "" || day.value.trim() === "" || month.value.trim() === "" || year.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" ){
//  return sweety("error" , "Invalid Credentials" , "Please Enter All feilds")
//     }
// // password requirements
// if(password.value.length < 8){
//       return  sweety("error" , "Invalid Password" , "Password must be 8 chracters long")
//     }

// let userObj = {
//      firstName : firstName.value,
//     lastName : lastName.value,
//     day : day.value,
//     month : month.value,
//     year : year.value,
//     email : email.value,
//     password : password.value,
//     gender : gender.value

// }
//     console.log(userObj)

//     for(let i = 0; i < gender.length; i++){
//         // console.log(gender[i].value);
//         if(gender[i].checked){
//         userObj.gender = gender[i].value
//         }
//     }


// sweety("success" , "Successfully Signup" , "Your Account has been register")    
//   window.location.href = "";



//   let usersFromDB = JSON.parse(localStorage.getItem("users")) || [];
//   usersFromDB.push(userObj);
//   localStorage.setItem("users" ,JSON.stringify(usersFromDB))


// firstName.value = ""
// lastName.value = ""
// day.value = ""
// month.value = ""
// year.value = ""
// email.value = ""
// password.value = ""
// gender.value = ""




// }


// signupBtn.addEventListener("click", signupHandler)

















let firstName = document.getElementById("fn");
let lastName = document.getElementById("ln");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let email = document.getElementById("mb");
let password = document.getElementById("np");
let gender = document.getElementsByName("gender");
let registerBtn = document.getElementById("signUp-btn");

// const alert = (icon , title , message) => {
//      Swal.fire({
//     icon: icon,
//     title: title,
//     text: message,
//    });
// }

const registerHandler = () => {

if(firstName.value.trim() === "" || lastName.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || day.value.trim === "" || year.value.trim() === "" || gender.checked === ""){
   return alert("error" , "Invalid Credentials" , "Please Enter All Feilds")
}


if(password.value.length < 8){
    return alert("error" , "Invalid Password" , "Password Must be 8 Chracters Long!")
}

let userObj = {
firstName : firstName.value,
lastName : lastName.value,
day : day.value,
month : month.value,
year : year.value,
email : email.value,
password : password.value,
gender : gender.value

}


for(let  i =0; i < gender.length; i++){
    if(gender[i].checked){
        userObj.gender = gender[i].value
    }
}
console.log(userObj)

alert("success" ,"Congratulations" , "Successfully Regiter")



let usersFromDB = JSON.parse(localStorage.getItem("users"));
if(usersFromDB === null){
    usersFromDB = []
}
usersFromDB.push(userObj);
localStorage.setItem("users" , JSON.stringify(usersFromDB));


firstName.value = ""
lastName.value = ""
day.value = ""
month.value = ""
year.value = ""
email.value = ""
password.value = ""
gender.value = ""

window.location.href = "index2.html"


}









registerBtn.addEventListener(`click`, registerHandler)


