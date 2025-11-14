console.log("js chal rha hai!"); 

// let firstName = "Muhammad";
// let lastName = "Hasnain";
// let fullName = firstName.concat( " " + lastName);
// console.log(fullName);


// let a = "hyderabad"; //condition is to change hyder to islam
// console.log("Before Replacing--->" , a)
// console.log("After Replacing--->" , a.replace("hyder" , "Islam"))



// var message = "Ali and Sami are best friends. They play cricket and football together";
// console.log(message);
// console.log(message.replaceAll(/and/g , "&"));

// let a = "12";
// let b = Number(a);
// console.log(b);
// console.log(typeof b)


// let userQues = prompt("Enter Any Word You Want That You Want to Capatalize!");
// let b = userQues.toUpperCase();
// console.log(b)


 






































// let a = 34.92;
// console.log(a)
// let b = a.toString();
// console.log("Change Numbers to string and replace points ok!" ,b.replace("."  , ""));



// let arr = ["cookies" , "biscuits" , "applepie" , "chips" , "patties"];
// alert("Welcome To ABC Bakery")
// let user = prompt("Enter the The Things You want But in LowerCase OK!");
// let foundIndex = -1;
// for(let i = 0; i < arr.length; i++){
//     if(user === arr[i] ){
//         // console.log("Availible");
//         foundIndex = i;
//         // console.log(foundIndex)
//         break
//     }
// }
// if(foundIndex !== -1){
//     console.log(user + " is available at index " + foundIndex);
// }else{
//     console.log("Not Availible")
// }


// let uni = "Unversity of Karachi".split("");
// for(let i =0 ; i < uni.length; i++){
//     console.log(uni[i])
// }


// let country="Pakistan";
// console.log("The last character of the word is ==>",country[country.length - 1]);


// let country="Pakistan";
// console.log("The last character of the word is ==>",country[country.length - 1]);

//Problem 18
// let a = "My Name is hasnain";
// let count = 0;
// for(i = 0; i < a.length; i++){
//     if(a.slice(i , i+8) == "hasnain" || a.slice(i , i+8) == "Hasnain"){
//         console.log(a.slice(i , i+8))
//         count = count+ 1;
//     }
// }

// console.log(a);
// console.log(`This is , ${count}`)


// let country="Pakistan";
// console.log("The last character of the word is ==>",country[country.length - 1]);

//Problem 18
// let paragraph2="The quick brown fox jumps over the lazy dog";
// let count=0;
// for(let i=0; i<paragraph2.length; i++){
//    if(paragraph2.slice(i,i+3) == "the" || paragraph2.slice(i,i+3) == "The"){
//       console.log(paragraph2.slice(i,i+3));
//       count=count + 1;
//    }
// }
// console.log("Text ==>",paragraph2);
// console.log(`There are ${count} occurence of the word the`);

// let a = "Pakistan is the most beutiful country in the world!";
// let count2 = 0;
// for(let i =0; i < a.length; i++){
//    if(a.slice(i ,i+3)== "the" || a.slice(i, i+3 == "The")){
//       let new1 =  (a.slice(i , i+3));
//       console.log(new1)
//    }
// }
// console.log("Text==>" , a);
// console.log(`There are ${count} occurencies in this line of "the"`)


// CH25 END    


// CH 26 TO 30 STARTS HERE 

// let userNum = +prompt("Enter  Positive Decimals Numbers");
// console.log("Your Number", userNum);
// console.log("Round Off Number", Math.round(userNum));
// console.log("Floor Number",Math.floor(userNum))
// console.log("Ceil Number",Math.ceil(userNum))



// let userNum = +prompt("Enter Negative  Decimals Numbers");
// console.log("Your Number", userNum);
// console.log("Round Off Number", Math.round(userNum));
// console.log("Floor Number",Math.floor(userNum))
// console.log("Ceil Number",Math.ceil(userNum))


// let numA = -4;
// let numB = 5;

// let changeA = Math.abs(numA);
// let changeB = Math.abs(numB);

// console.log(changeA)
// console.log(changeB)














// let a = Math.random() * 100;
// console.log(a)


// let num = prompt("Enter Your Weight in Kilogram");
// let a = parseFloat(num);
// if(num){
//    console.log("Your Weight is ", a , "Kg")
// }else{
//    console.log("Please enter A Valid Age ok!")
// }





// let randomSecretNum = Math.random()*10;
// console.log(randomSecretNum)
// let userNum = prompt("Enter Secret Random Number Between 1 to 10");
// if(randomSecretNum == userNum){
//    console.log("Congratulations Bro ")
// }else{
//    console.log("Try Again!")
// }





// let a = Math.random() * 6;
// let b = Math.round(a);
// console.log(b);



// let coin = (Math.random() *2) + 1;
// let abs = Math.round(coin);
// console.log(abs)
// if(abs == 1){
//    console.log("Tails")
// }else if(abs == 2){
//    console.log("Heads")
// }else{
//    console.log("Try Again!")
// }


// let para = "my name is hasan"

// let returnVal = para.split(" ")

// for(let i = 0 ; i < returnVal.length ; i++){
//     // console.log()
//     let upperCase = returnVal[i][0].toUpperCase()
//     let removeFirstChar = returnVal[i].slice(1)
//     let updatedValue = " " + upperCase  + removeFirstChar
//     // console.log(updatedValue)

//     para += updatedValue

// }

// let newPara =para.split(" ").slice(4).join(" ")
// console.log(newPara)



// let userName = "my name is hasnain";
// let returnValue = userName.split(" ");
// console.log(returnValue);

// for(let i =0; i < returnValue.length; i++){
// //    console.log(returnValue[i])
//    let upperCase = returnValue[i][0].toUpperCase()
// //    console.log(upperCase)
//    let remove = returnValue[i].slice(1);
// //    console.log(remove)
//    let updatedValue1 = " " + upperCase + remove;
// //    console.log(updatedValue1)

//    userName = userName + updatedValue1;

// }
// console.log(userName)
// let end = userName.split(" ").slice(4).join(" ")
// console.log(end);





// let pass = "133".toUpperCase();
// // let corr = false;
// let passNum = "no";

// if(pass[0] >= 0 && pass[0] <=9){
//     console.log("Password Not Start with a Number ")
// }


// if(pass.length < 6){
//     console.log("Password Must be 6 chracters long")
// }


// if(pass){
//     for(let i =0; i< pass.length; i++){
//         // console.log(pass[i])
//      if(pass.charCodeAt(i) >=65 && pass.charCodeAt(i) <= 90){
//         // console.log("correct")
//         passNum = "yes";
//      }

//     }
// }


// if(passNum = "yes"){
// for(let i =0; i < pass.length; i++){
//     if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){
//         // console.log(pass)

//     }
// }
// }


// let userPassword = "43443332".toUpperCase();
// let correctPass = false;
// let passNum = "no";
// let userCode = "";

// // 2nd condition 
// if(userPassword[0] >= 0 && userPassword[0] <= 9){
//     console.log("Password Not Start With an Number")
// }



// if(userPassword.length < 6){
//     console.log("Password must be 6 chracters long")
// }


// if(userPassword){
//     for(let i =0; i <userPassword.length; i++){
//         if(userPassword.charCodeAt(i) >= 65 && userPassword <= 90){
//             console.log("Correct")
//             passNum = "yes";

//         }
//     }
// }

// if(passNum = "yes"){
//     for(let i =0; i < userPassword.length; i++){
//         if(userPassword.charCodeAt(i) >= 48 && userPassword.charCodeAt(i) <= 57){
//             correctPass = true
//         }
//     }
// }

// if(correctPass){
//     console.log("Password is correct")

// }else if(passNum = "yes"){
//     console.log("Password must contain alphabets")
// }




// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// let userName = "Hasnain";
// let flag = false;

// for(let i =0; i <userName.length; i++){
//     if(userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64){
//         flag = true;
//         break;
//     }

// }
// if(flag){
//     console.log("Error : UserName Doesn't Contain Special Letters")
// }else{
//     console.log("Thank You UserName is Valid")
// }



// my own made code wiyhout seeing /

// let userPassword = "hasnain1243".toUpperCase();
// let flag = false;
// let correctPass = false;
// let userCode = "";
// passMaiNum = false;


// if(userPassword[0] >= 0 && userPassword[0] <= 9){
//     console.log("Password Not Start with Number")
// }


// if(userPassword.length < 6){
//     console.log("Password Must be 6 chracters long! ")


// }
// for(let i =0; i < userPassword.length; i++){
//     if(userPassword.charCodeAt(i) >= 65 && userPassword.charCodeAt(i) <= 90){
//         flag = true;
//         // userCode += userPassword.charCodeAt(i)
//         // console.log(userCode)
//     }
// }


// if(flag){
//     for(let i= 0; i < userPassword.length; i++){
//         if(userPassword.charCodeAt(i) >= 48 && userPassword.charCodeAt(i) <= 57){
//            correctPass = true;
//         passMaiNum = true;

//         }
//     }
// }

// if(correctPass){
//     console.log("Password Is Correct")
// }
// if(!passMaiNum){
//     console.log("Your Password Must Contain Alphabets and Numbers both")
// }
