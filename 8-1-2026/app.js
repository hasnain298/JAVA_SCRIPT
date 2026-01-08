console.log("Js Is running!");



function fn(e){
let emailInput = document.getElementById("email");
console.log(emailInput.value)
let regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
if(regex.test(emailInput)){
    console.log("Valid Email")
}
else{
    console.log("Invalid Email")
}
e.preventDefault()
}