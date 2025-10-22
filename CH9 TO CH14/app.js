// CH9 STARTS HERE 
// Q NO 1 PROBLEM NO 1

// let city = prompt("Enter Your City");

// if (city == "karachi" && city == "Karachi"){
//     alert("Welcome to the City of Lights")
// }
// else{
//   alert("Please enter karachi")
// }
// QNO1 ENDS HERE 



// QNO2 PROBLEM NO 2

// let gender = prompt("Enter Your Gender");
// if (gender == "male"){
//     alert("Good Morning! Sir");
// }
// else if (gender == "female"){
//     alert("Good morning! Madam");

// }
// else{
//     alert("Please Enter a Valid gender like male or female ")
// }

// QNO2 ENDS HERE 




// QNO3 PROBLEM NO 3
// let signal = prompt("Enter a Traffic color");

// if (signal == "green"){
//     alert("Let's Go");
// }
// else if(signal == "yellow"){
//     alert("Please wait! for green signal");
// }
// else if ( signal ==  "red"){
//     alert("Must Stop!");
// }
// else{
//     alert("Please Enter a Valid color");
// }

// QNO3 ENDS HERE 



// QNO4 PROBLEM NO 4    

// let fuelInCar = prompt("Enter your Fuel in Litre");
// if (fuelInCar < 0.25 ){
    
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Thank you! Go Away")
// }

// QNO4 ENDS HERE 



// QNO5 PROBLEM NO 5

// let a = 4;
// if (++a === 5){
//     alert("Given condition for the variable is true")
// // } 

// // var b = 82;
// // if(b++ === 83){
// //     alert("The given condition is true")

// // }
// // else{
// //     alert("The given condition is false");
// // }


// // let c = 12;
// // if(c++ === 13){
// //     alert("Condition 1 is True")
// // }
// // if (c ===13){
// //     alert("Condition 2 is True");
// // }
// // if (++c < 14){
// //     alert("Condition 3 is True")
// // }
// // if (c === 14){
// //     alert("Condition 4 is True")
// // }




// // let materialCost = 2000;
// // let labourCost = 2000;
// // let totalCost = materialCost + labourCost;
// // if (totalCost === materialCost + labourCost );{
// //     alert("The Cost is Equal")
// // }


// // if (true){
// //     alert("True")
// // }
// // if (false){
// //     alert("False")
// // }



// // if ("car" < "cat"){
// //     alert("Car is Smaller Than Cat")
// // }




// // QNO5 ENDS HERE 

// QNO6 STARTS HERE 

// let sub1 = +prompt("Enter Your Number");
// let sub2 = +prompt("Enter Your Number");
// let sub3 = +prompt("Enter Your Number");
// let totalMarks = 300;
// let obtainedMarks = sub1 + sub2 + sub3;
// document.writeln("<h2>TOTAL MARKS</h2>" , totalMarks);
// document.writeln("<h2>OBTAINED MARKS</h2>"  , obtainedMarks);
// document.writeln("<h2>PERCENTAGE</h2>" , obtainedMarks / totalMarks * 100 , "%");



// if (obtainedMarks >= 270){
//     console.log(" A+ GRADE");
// }
// if(obtainedMarks <270 && obtainedMarks >= 210){
//     console.log("A GRADE");
// }
// if (obtainedMarks < 210 && obtainedMarks >=160){
//     console.log("B GRADE");
// }
// if (obtainedMarks < 160 && obtainedMarks >=130){
//     console.log("C GRADE");
// }
// else if (obtainedMarks < 130 && obtainedMarks >= 80 ){
//     console.log("FAIL")
// }






// QNO6 ENDS HERE 

// document.writeln("<p>Total Marks</p>" , totalMarks);
// document.writeln("<p>Obtained Marks</p>" , obtainedMarks);
// document.writeln(perc)

// // document.writeln(` <table border="2px">
// //     <tr>
//     <th>Percentage</th>
//     <th>Grade</th>
//     <th>Remarks</th>
// </tr>
// <td>Greater Than Or Equal to 80</td>
// <td>A-ONE</td>
// <td>Exellence</td>
// <tr>
// <td>Greater Than Or Equal to 70</td>
// <td>A</td>
// <td>Good</td>
// </tr>
// <tr>
// <td>Greater Than Or Equal to 60</td>
// <td>B</td>
// <td>You Need To Improve</td>
// </tr>
// <tr>
// <td>Less Than  60</td>
// <td>F</td>
// <td>Fail</td>
// </tr>


// </table>
// `)


// QNO 7 PROBLEM 7

// let secretNumber = 7;
// let userAnswer = prompt("Guess the Secret Number");
// if (userAnswer == 7){
//     alert("Bingo! Correct Answer");
// }
// else{
//     alert("Close Enough to secret Number");
// }

// Qno7 ENDS HERE 

// QNO8 STARTS HERE 

// let userNum = prompt("Enter Your Number");
// if (userNum % 3 == 0){
//     console.log( userNum , "Your Number Is Divisible by 3");
// }
// else{
//     console.log("Your Number Is Not Divisble by 3")
// }

// QNO 8 ENDS HERE 

// QNO9 STARTS HERE 

// let userNum = prompt("Enter Your Number");
// if (userNum % 2 == 0){
//     console.log( userNum , "Your Number Is Divisible by 2");
// }
// else{
//     console.log("Your Number Is Not Divisble by 2")
// }

// QNO 9 ENDS HERE 



// let tempreature = prompt("Enter Tempreature of Your Area");
// if (tempreature > 40){
//     alert("It's too HOT!")
// }
// else if (tempreature > 30){
//     alert("The Weather Is Normal Today");
// }
// else if (tempreature > 20){
//     alert("Today's Weather Is Cool");
// }
// else if (tempreature > 10){
//     alert("OMG! Today Weather Is So Cool")
// }

// QNO 11 STARTS HERE 


// let firstNumber = +prompt("Enter First Number" , 10);
// let operation = prompt("Enter Your Operation" ,"+" , "-" , "/" , "%" , "*")
// let secondNumber = +prompt("Enter Second Number" , 5);
// let result = firstNumber + secondNumber ;
// let result2 = firstNumber - secondNumber;
// let result3 = firstNumber / secondNumber;
// let result4 = firstNumber % secondNumber;
// let result5 = firstNumber * secondNumber;

// if (result == firstNumber + secondNumber){
//     console.log(result)
// }
// if (result2 == firstNumber - secondNumber){
//     console.log(result2);
// }
// if (result == firstNumber / secondNumber){
//     console.log(result3)
// }
// if (result == firstNumber % secondNumber){
//     console.log(result4)
// }
// if (result == firstNumber * secondNumber){
//     console.log(result5)
// }

// if(result == firstNumber + secondNumber) {
//    let num1 = +prompt("Enter your number");
//    let opt = prompt("Enter Operation" , )
//    let num2 = +prompt("Enter your number");
//    let result = num1 - num2;
//    if (num1 - num2 == result);
//    console.log( "Answer of Substraction ===>", result)

// }

// QNO11 ENDS HERE 




// practise

// let lang = prompt("Enter Your Language" ,"javascript" );

// if(lang == "javascript") {
//     let locate = prompt("Enter your city", "karachi")
//     if(locate == "karachi") {
//     let exp = +prompt("Enter your experience",2)
//     if(exp  >= 2 ) {
//         console.log("You are hired")
//     }else {
//         console.log("jaou bary hoky aou")
//     }
//     }else {
//         console.log("Karachi ajaou")
//     }
    
//     }else {
//         console.log("Javascript seekh ke aou")
//     }
    
//     if(lang == "javascript" && locate == "karachi" && exp >= 2){ 
//         console.log("you are elegible")
//     }

// CH9 TO CH11 ENDS HERE 


// CH12 TO CH13 STARTS HERE ====>


// QNO1 NOT SUBMITTED 
// Becuase out of mind 




// QNO2 STARTS HERE 



// let integer1 = +prompt("Enter First Number");
// let integer2 = +prompt("Enter Second Number");
// if (integer1 > integer2){
//     console.log(" First Number is Greater Than Second One ");
// }
// else if (integer2 > integer1){
//     console.log("Second Number Is Greater Than First Number");
// }
// else if (integer1 = integer2){
//     console.log("Both Numbers Are Equal!")
// }
// else{
//     console.log("That's Not the Condition I Give to you!")
// }

// QNO2 ENDS HERE 






// QNO3 STARTS HERE 

// let numberChecker = +prompt("Enter Your Number");

// if (numberChecker < 0){
//     console.log("The Number is Negative!");
// }
// else if (numberChecker > 0){
//     console.log("The Number Is Positive");
// }
// else if (numberChecker === 0){
//     console.log("The Number Is Zero");
// }
// else{
//     console.group("Please Enter A Number!");
// }

// QNO3 ENDS HERE 


// QNO4 STARTS HERE 

// let chr = prompt("Enter your letter");
// if (chr === "a"){
//     console.log("True");
// }
// else if (chr === "e"){
//     console.log("True");
// }
// else if (chr === "i"){
//     console.log("True");
// }
// else if(chr === "o"){
//     console.log("True");
// }
// else if (chr === "u"){
//     console.log("True")
// }
// else {
//     console.log("False");
// }

// QNO4 ENDS HERE 



// QNO5 STARTS HERE 


// let correctPassword = "js";
// let userPassword = prompt("Enter Or Guess Password");
// if (correctPassword == userPassword){
//     alert("Correct! The Password You Entered Mathches The Original Password");
// }
// if (userPassword === ""){
//     alert("Please Enter Password!")
// }
// else if (correctPassword !== userPassword){
//     alert("Incorrect Password!")
// }

// QNO5 ENDS HERE 



// QNO6 STARTS HERE 

// var greeting;
// greeting = "Good Day!"
//  var hours = 13;
// if (hours <  18){
//     console.log(greeting)
// }
// else{
//     console.log("Good Evening!")
// }


// QNO6 ENDS HERE 



// QNO7 STARTS HERE 


// let time = +prompt("Enter hours in 24-Hours Format" , 1900);
// if (time >=  1000 &  time < 1200){
//   console.log("Good Morning!")
// }
// if (time > 1200 & time <1700){
//     console.log("Good Afternoon!");
// }
// if (time > 1700 & time < 2100){
//     console.group("Good Evening!");
// }
// if (time > 2100 & time <= 2359 ){
//     console.log("Good Night!");
// }

// QNO 7 ENDS HERE 