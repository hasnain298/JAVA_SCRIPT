console.log("JS IS RUNNING---> ");

// Problem No 1

// function toFindDate(){
//     let today = new Date();
//     console.log(today)

// }

// toFindDate();


// Problem No 2
// function fullName (){
//     let firstName = prompt("Enter First Name");
//     let lastName = prompt("Enter Last Name");
//     let fullName = firstName + " " + lastName;
//     console.log(fullName) 
// }


// fullName();


// Problem No 3

// function sumOfTwoNumbers (){
//     let n1 = +prompt("Enter First Number");
//     let n2 = +prompt("Enter Second Number")
//     let answer = n1 + n2;
//     console.log(answer)

// }

// sumOfTwoNumbers();



// Problem No 4
// function calculator (n1 , n2){
// let p = n1 + n2;
// return p;
// }

// console.log(calculator(12,32));



// Problem No 5
// function square (number){
// return number * number
// }
// console.log(square(5))

// Problem No 6

// function factorial(){
// var n = +prompt("Enter The Number For Factorial");
// if(n ===0){
//     console.log("Factorial of 0 : " , 1)
// }
// if(n <= -1 || n <= -99){
//     console.log("Ivalid Input Must be a Non-Negative Integer!")
// }
// let result = 1;
// for(let i = 1; i <=n; i++){
//     result = result *  i;
//     // console.log("Factorial Of ",result)
   
// } 

// return  result
// }
// console.log(factorial())




// Problem No 7
// function count(){
// let userFirstNum = +prompt("Enter First Number");
// let userSecondNum = +prompt("Enter Second Number");

// if(userFirstNum >= 0 && userSecondNum <= 100000){
//     for(let i = userFirstNum; i <= userSecondNum; i++){
//         console.log(i)
//     }
// }else if(userFirstNum !== 0 && userSecondNum !== 100000){
//     console.log("Please Enter A Number or a Positive Number")
// }
// }
// count()
// Problem No 10

// function main(){
// function nested(base , per){
// let squareOfHyp = base * base + per * per;


// return squareOfHyp
// }




// console.log(nested(12,32))
// }

// main()













// Problem No 9
// A = width * height

// function calculateArea (a,b){
// let area = a * b;
// console.log( "Area Of Rectangle ----> " , area)
// }

// calculateArea(12,32)



// Problem No 10
// let user = prompt("Enter Any Palindrome Word!").toLowerCase();
// const sanitizedStr = user.toLowerCase().replace(/[^a-z0-9]/g, '');
// // console.log(sanitizedStr)

// let reverse = sanitizedStr.split("").reverse().join('');
// // console.log(reverse)

// if(sanitizedStr == reverse){
//     console.log("Your word is Palindrome")
// }else{
//     console.log(" Inavlid : Your word is Not Palindrome")
// }

// // Problem No 11
// function firstLetterCapital(){

// let string = "the quick brown fox";
// let change = string.split(" ");
// // console.log(change);
// for(let i =0; i <change.length; i++){
//   let upperCase = change[i][0].toUpperCase();
//   let remove = change[i].slice(1);
//   let updatedVal =  " " + upperCase + remove;
//   // console.log(updatedVal);
//   string += updatedVal
// }

// let newString = string.split(" ").slice(4).join(" ");
// console.log(newString);
// }

// firstLetterCapital()



// Problem No 12


// function longestWord (str){
//     let words = str.split(" ");
//     let longest = "";
//     // console.log(words);

//     for(let i= 0; i < words.length; i++){
//         if(longest.length < words[i].length)
//             // console.log(words)
//             longest = words[i];
//         // console.log(longest)

// } 
// return longest
// }

// let example = "Web Development Tutorial";
// let result = longestWord(example);
// console.log(result);



// Problem No 13
// function occ (str , letter){
// let score = 0;
// for(let i =0; i < str.length; i++){
//     if(str[i] === letter){
//         score++;
//         // console.log(score)
//     }

// }return score
// }

// console.log(occ("hasnaian" , "a"));

// Problem No 14

// function calcCf(radius , pi){

// let result = 2 * radius * pi;
// console.log("CircumFerence of a circle is : " , result)
// }
// calcCf(20 , 3.14)

// function calcArea (radius , pi){

//     let area = pi * radius * radius;
//     return area
// }

// console.log( "Area Of Circle is  : " , calcArea(20 , 3.14));


