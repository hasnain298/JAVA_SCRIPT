console.log("Js Is Running ");


// function colorOs(){
//    var arr = ["blue" , "red" , "green" , "purple" , "orange" , "grey" , "pink"];
//    var color = Math.floor(Math.random() * arr.length[arr]);
// //    console.log(color)
// document.body.style.backgroundColor = arr[color]

// }

let  colorsArr = [
    "Red",
    "Green",
    "Blue",
    "Orange",
    "Yellow",
    "Indigo",
    "Black",
    "White",
    "Purple",
    "hotpink",
  ];

function changeColor(){
// let colorArr = ["red" , "green" , "blue" , "orange"];
let randomNum = Math.floor(Math.random() * colorsArr.length);
document.body.style.backgroundColor = colorsArr[randomNum];
 let a = document.getElementById("hash");
 a.innerHTML = colorsArr[randomNum];

}  

