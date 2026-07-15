console.log("Js Is Running!");

// let obj = {
//     id : 1,
//     name : "John Doe",
//     email : "johndoe@gmail.com",
//     password : "johndoe1234",
//     course : "Web Development",
//     age : 39,
//     gender : "male",

//     showName : function (kads,userName) {
//      console.log(this.name , kads,userName);
//      return "Muhammad Hasnain"
//     }
// }




// let obj2 = {
//     id : 2,
//     name : "Suffiyan Doe",
//     email : "suffiyandoe@gmail.com",
//     password : "suffiyan@1234",
//     course : "Web Development",
//     age : 19,
//     gender : "female"
// }

// // obj.showName.call(obj2 , "Belguium")
// // obj.showName.apply(obj2 , ["Ponka","sufiyandoe0291"])
// console.log(obj.showName.bind(obj2 , "Ponka","sufiyandoe0291")());




// Section 1 – Objects (1–5)

// Q1.

// JavaScript Object kya hota hai? Real-world example ke sath explain karein.

// Object simple ek non-primitive data type hai isme hum userdata store kartein hein or map karwakr UI main show karwaskte hain or isme hum nested se nested user info dal skte hain or ye key | value pair mein kaam karte hain




// Q2.

// Dot notation aur Bracket notation me kya difference hai?
// DOT NOtation or BRACKET Notation mein keyword ka difference hi or dot notation mein ap variable use nhi karskte or bracket notation main ap variable pr kaam karskte hain

// Dono tarikon se name access karke dikhayein.

// const user = {

// name: "Hasan",

// age: 22

// };
// // DOT NOTATION 
// let key  = "name";
// console.log(user[key]);
// console.log(user["name"]);
// // BRACKET NOTATION 
// console.log(user.name);




// Q3.

// Niche diye object ka output batayein.


// const student = {

// name: "Ali",

// age: 20

// };


// student.city = "Karachi";

// delete student.age;


// console.log(student);  OUTPUT name : "Ali" , city : "Karachi"



// Q4.

// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?
// Object.keys() simple humein keys return karengi or Object.values() humein values return karegi or Object.entries() humein key value pair mein array return karegi
// Example ke sath explain karein.



// Q5.

// Ek function likhein jo object ke andar total properties count kare.

// // Expected:
// function countProperties(obj) {
// let conArr = Object.keys(obj).length;

//     console.log(conArr);
    
// }

// countProperties({

// name:"Ali",

// age:20,

// city:"Lahore"

// })


// Output

// 3




// Section 2 – Arrays (6–10)

// Q6.

// Array aur Object me kya difference hai?

// Array means square bracket me ap kaam karskte hain or kisi bhi type ka data rakhskte hai or obj means curly braces jisme ap user ka data store karskte or UI pr show bhi karwaskte hai or agar nested ki baat ki jae ap dono me nested jaskte hai array main hum index number pr kaam karte hai or object main hum key value pair main kaam karte hain.


// Q7.

// Output predict karein.



// const arr = [10,20,30];


// arr.push(40);

// arr.pop();


// console.log(arr); // Output [10,20,30]



// Q8.

// Array ke first aur last element ko print karne ke 2 methods likhein.
// const arr = [10,20,30];
// first elements ke 2 method 
// console.log(arr[0]);
// for(let i= 0; i < 1; i++) console.log(arr[i]);
// console.log(arr.at(0));

//   last Element ke 2 method 
    // console.log(arr[arr.length -1]);
    // console.log(arr.at(-1));


    


// Q9.

// Ek function likhein jo array ka sum return kare.

// Example
// function sum (num) {
//     let total = 0;
//     for(let i =0; i< num.length; i++) {
//     total = total + num[i]        
 
// }
// return total
// }


// console.log(sum([10,20,30]));


// const fn = (nums) => {
// let total = 0;
// for(let i =0; i < nums.length; i++) {
//     total = total + nums[i]
// }
// return total
// }


// console.log(fn([10,20,30]));


// function sum (numbers) {
//      return numbers.reduce((init,final) =>   init + final,0)

// }

// console.log(sum([10,20,30]));

// // Output

// 60


// Q10.

// Ek array me duplicate values remove karein.



// let arr =  [1,2,2,3,4,4,5]

// let removeDuplicateValues = new Set(arr);
// console.log(removeDuplicateValues);


// Expected Output



// // [1,2,3,4,5]


// Section 3 – Destructuring (11–14)

// Q11.

// Destructuring kya hoti hai?
// Destructuring Array or obj dono me hoti hai or destructuring ka main kaam kisi bhi obj ya arr me se koi element nikalna 

// Array aur Object dono ki syntax likhein.

// Q12.

// Output predict karein.



// const colors = ["red","blue","green"];


// const [a,b,c] = colors;


// console.log(b); OUTPUT "blue"


// Q13.

// Output batayein.



// const user = {

// name:"Hasan",

// age:22

// };


// const {name, age} = user;


// console.log(age);  // Output 22


// Q14.

// Nested Object destructuring karein.



// const user = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };

// const {address} = user;
// console.log(address.city);
// const {address : {city}} = user;
// console.log(city);

// City ko destructuring se nikalein.

// Section 4 – Shallow Copy & Deep Copy (15–18)

// Q15.

// Shallow Copy aur Deep Copy me kya difference hai?
// Shallow Copy means first level copy isme ap simple baat ke ap nested  ko access nhi karskte or deep copy means ap access karskte hain mtlb shallow copy mein ap access karskte ho pr wo pore arr || obj ko kharab kardega joke deep copy nhi karega !

// Q16.

// Output predict karein.



// const user1 = {

// name:"Ali",

// address:{

// city:"Karachi"

// }

// };


// const user2 = user1;


// user2.address.city = "Lahore";


// console.log(user1.address.city); Lahore


// Q17.

// Spread operator se object copy karne par nested object me kya issue hota hai?
// Simple Jab bhi ap spread operator use karenge to shallow copy banegi jo nested object ya arr ko kharab kardegi

// Explain karein.

// Q18.

// JavaScript me Deep Copy banane ke 3 methods likhein.
// JSON.parse(JSON.stringify())
// structuredClone()

// Section 5 – Rest & Spread Operator (19–22)

// Q19.

// Rest Operator aur Spread Operator me kya difference hai?
// rest operator equal se phle or spread operator equal ke baad  iska simple difference pack or unpack karna 
// Q20.

// Output predict karein.


// const arr = [10,20,30];


// const newArr = [...arr,40];


// console.log(newArr); [10,20,30,40]


// Q21.

// Output batayein.



// function total(...numbers){

// console.log(numbers);

// }


// total(10,20,30,40); output [10,20,30,40]


// Q22.

// 2 Objects ko merge karein.



// const obj1 = {

// name:"Ali"

// };


// const obj2 = {

// age:20

// };

// const newObj = {...obj1 , ...obj2}
// console.log(newObj);


// Expected


// {

// name:"Ali",

// age:20

// }


// Section 6 – Array Higher Order Methods (23–26)


// Q23.

// map() aur forEach() me kya difference hai?
// map ap simple  modification ke liye use karte hain or for each iteration ke liye 
// Q24.

// filter() ka use karke sirf even numbers return karein.



// let arr = [1,2,3,4,5,6]
// let filtered = arr.filter((num) => num % 2 == 0)
// console.log(filtered);

// Expected

// [2,4,6]


// Q25.

// reduce() ka use karke array ka total sum nikalein.


// let arr = [10,20,30]

// let sum = arr.reduce((init,final) => init + final , 0 )
// console.log(sum);

// Expected

// 60


// Q26.

// find() aur filter() me kya difference hai?
// find apko sabse phla element find karke dega arr me or filter filteration karega
// Section 7 – call(), apply(), bind() (27–29)

// Q27.

// call(), apply(), aur bind() me difference explain karein.

// Q28.

// Output predict karein.


// const user = {

// name:"Hasan"

// };


// function greet(city){

// console.log(this.name, city);

// }


// greet.call(user,"Karachi"); output Hasan Karachi


// Q29.

// Output batayein.


// const user = {

// name:"Ali"

// };


// function sayHello(country){

// console.log(this.name, country);

// }


// const result = sayHello.bind(user);


// result("Pakistan"); output Ali Paksistan


// Final Mixed Question (30)
// Q30.

// Niche diye code ka exact output likhein aur har line explain karein.



// const user = {

// name: "Hasan",

// skills: ["HTML", "CSS"]

// };

// simple ek user ka object bnaya


// const copy = {

// ...user

// };

// phir copy ke array me use spread kardiya or shallow copy bnayi 

// copy.skills.push("JavaScript");
// arr me new element push kiya Javascript last mein add kiya

// console.log(user.skills);
//  iska output ["HTML","CSS","JavaScript"]
// console.log(copy.skills);
// iska output ["HTML","CSS","JavaScript"] same 

//     Is code me Shallow Copy hui hai ya Deep Copy?
// Shallow Copy  
//     Is problem ko Deep Copy se kaise solve karenge?
// apke pass abhi tak humne 2 method parhe deep copy ke or apne 3 poche the phla structuredClone() se or dosra JSON.parse(JSON.stringify()) se 3 method apne nhi btaya humein
//     Agar structuredClone() use karein to output me kya farq padega?
// output mein ye difference ayega ki deep copy banegi or purane obj mein kuch bhi nahi cahnge hoga or new obj me javascript add hojayega! Thats All Thanks!