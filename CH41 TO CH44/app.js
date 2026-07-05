console.log("Js Is Running!");

// Problem No 1

var str = "my name is hasnain".split("");
var vowel = "aeiou".split("");
var count = 0;

function countAllVowels() {
    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i].toLowerCase();

<<<<<<< HEAD
        for (var j = 0; j < vowel.length; j++) {
            if (currentChar === vowel[j]) {
                count++; 
                break; 
            }
        }
    }
    
    console.log("Total number of vowels found: " + count); 
}
=======
//         for (var j = 0; j < vowel.length; j++) {
//             if (currentChar === vowel[j]) {
//                 count++; 
//                 break; 
//             }
//         }
//     }

//     console.log("Total number of vowels found: " + count); 
// }
>>>>>>> a2758f347e892e9e577ea00cfd7018a17117d820

countAllVowels(); 


// Problem No 2
// function removeVowels(){
// let str = "my name is hasnain";
// console.log(str)
// let newStr = str.replace(/[aeiou]/g , '');
// return newStr



// }

// console.log(removeVowels());


// Pronblem No 3
// function changeQuantities() {
//     let user = document.getElementById("inp");
//     let changeInKm = user.value * 1000
//     console.log("Value In Meters", Math.round(changeInKm), "meters");
//     let changeInFeet = user.value * 3280.84;
//     console.log("Value In Feet", Math.round(changeInFeet), "feet");
//     let changeInInches = user.value * 39370.1;
//     console.log("Value In Inches", Math.round(changeInInches), "inches");
//     let changesInCentimeters = user.value * 100000;
//     console.log("Value In Centimeter", Math.round(changesInCentimeters), "centimeter");




// }

// changeQuantities()

// function overTimeCalc(){

// let userWorkHours = prompt("How Many Hours You Work?");
// if(userWorkHours == 40 || userWorkHours < 40){
//     console.log("You Have No OverTime Becuase You Didn't Work More Than 40 Hours")
// }
// else{
// console.log("Your OverTime Is Submitted")
// }


// let OverTime = prompt("Enter Your OverTime Hous!");
// if(OverTime <=0 || OverTime == ''){
//     console.log("Enter Valid Hours")
// }else if(OverTime >0 || OverTime<=10){
//     console.log("Your Overtime Payment is  --->" , 12 * OverTime + "Rs")
// }


// }
// overTimeCalc()















































