console.log("Js Is Running!");

var email = document.getElementById("email");
var pawssword = document.getElementById("pass");


function inputError1(message){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Please Enter a Valid Email!</a>'
      });
}

function inputError2(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Please Enter a Password!</a>'
      });
}






function submitHandler(e){
console.log(email.value);
console.log(pawssword.value);
e.preventDefault();




if(email.value.trim() === ""){
inputError1()
return
}if(pawssword.value.trim() === ""){
 inputError2()   
 return
}if(pawssword.value.length <8){
  console.log(pawssword.value.length)
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Password Must Be 8 Chracters Long!",
    footer: '<a href="#">Your Password Is Too Short!!!</a>'
  });
  return
}



Swal.fire({
    title: "Congratulations!",
    icon: "success",
    draggable: true
  });


setTimeout(function (){
window.location.href = "dashboard.html"

},1000)


}



