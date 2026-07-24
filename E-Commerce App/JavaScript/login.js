import { sweety } from "../DummyData/dummyData.js";

console.log("Js Is Running!");

let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

let form = document.querySelector(".form")
let email = document.getElementById("email")
let password = document.getElementById("password")
let isUser = false
const loginHandler = () => {
    console.log(event);
    event.preventDefault()

    if(email.value.trim() === "" || password.value.trim() === "") {
     return    sweety("error" , "Oops!" , "Please Fill All Feilds!")
 
    }
    
    if(email.value.trim() && password.value.trim()) {

        users.forEach((user) => {
            // console.log(user);
            if(user.email === email.value && user.password === password.value){
                isUser = true;
                localStorage.setItem("isUser" , JSON.parse(isUser))
            }else{
                sweety("error" ,"Error", "Account Not Found" )
            }
            
        });
        
        
//     for(let i = 0; i < users.length; i++){
    //         if(users[i].email === email.value && users[i].password === password.value) {
    //             console.log("milgya user");
    //             break;
                
    //         }else{
    //             console.log("nhi mila");
                
    //         }
    //     }
    // }

    // sweety("success" , "Congratulations!" , "Login Successfully!")

    // setTimeout(() => {
    //     window.location.href = "/index.html"
    // }, 1500);

    if(isUser){
        sweety("success" , "Congratulations!" , "Login Successfully!")

         setTimeout(() => {
             window.location.href = "/index.html"
         }, 1500); 
    }
}
}

form.addEventListener("submit" , loginHandler)