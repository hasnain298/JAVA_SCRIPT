console.log("Js Is Running!");



let passwordPara = document.getElementById("password")
let button = document.querySelector("button")

function generateRandomPass(){
    let value = "2676^^$@%@*@(@*diohxhduibhuh&&@&*(!";
    let pass = "";
    
    for(let i= 0; i < 12; i++){
        let randomNum = Math.floor(Math.random() * value.length)
        pass += value[randomNum]
      
    }
    passwordPara.innerText = `YOUR PASSWORD IS   ${pass} `
}

generateRandomPass()










































//Password Generator
// let passwordPara = document.getElementById("password");
// let button = document.querySelector("button")

// function createPass() {
//     let passArray = ["a", "b", "d", "g", "z", "x", "w", "q", "l", 1, 3, 7, 6, 2, 3, 7, "!", "@", "%", "#", ",", "/"];

//     let pass = "";
//     for (let i = 1; i <= 12; i++) {

//         pass += passArray[Math.floor(Math.random() * passArray.length)];

//     }
//     passwordPara.innerText = `The password is ==> ${pass} and the lenght is ${pass.length}`;
// }





























// let value = "2676^^$@%@*@(@*diohxhduibhuh&&@&*(!";
// let pass = "";

// for(let i= 0; i < 12; i++){
//     let randomNum = Math.floor(Math.random() * value.length)
//     pass += value[randomNum]
  
// }
// console.log(pass);
