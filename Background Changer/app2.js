let  colorsArr = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#808080",
    "#C0C0C0",
    "#00FFFF",
    "#FF69B4",
  ];

function changeColor(){
// let colorArr = ["red" , "green" , "blue" , "orange"];
let randomNum = Math.floor(Math.random() * colorsArr.length);
document.body.style.backgroundColor = colorsArr[randomNum];
 let a = document.getElementById("hash2");
 a.innerHTML = colorsArr[randomNum];

}  