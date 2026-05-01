console.log("Js Is Running!")
let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("loginBtn");



const loginHandler = () => {
// console.log("js is running!")
let emailVal = email.value
let passwordVal = password.value

//  if (emailVal.trim() === "" || passwordVal.trim() === "") {
//     return 

// }

// get previous data from user 
let users = JSON.parse(localStorage.getItem("users"));
console.log(users);
let isAccountexits = false
for(let i =0; i < users.length; i++){
   let usersfromDb = users[i]
   if(usersfromDb?.email === emailVal){
isAccountexits = true;
}
if(usersfromDb?.password === passwordVal ){
    localStorage.setItem("users", JSON.stringify(users))
    alert("successfully creted account")
    window.location.href = "index3.html"
}else{
    alert("Invalid Credentials")
}

break;

}


}


login.addEventListener("click" , loginHandler)





