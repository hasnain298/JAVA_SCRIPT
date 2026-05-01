console.log("Js Is Running!");

// if(1===1){
//     console.log(true)
// }
function emailHandler(){
let email = document.getElementById("email");
console.log(email.value)
 let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 if(regex.test(email.value)){
    Swal.fire({
  icon: "success",
  title: "Successfully...",
  text: "Maza Aya bhai!",
});
    console.log("Valid Email")
 }else{
    console.log("Invalid Email")
 }

 window.location.href = "https://github.com"

}