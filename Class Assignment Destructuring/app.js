console.log("Js Is Running!");

// 📌 Array Destructuring (7 Questions)


// Question 1

// Destructure the first and second values.

// ANSWER
// const fruits = ["Apple", "Banana", "Orange"];

// const [one,two] = fruits;
// console.log(one,two);


// Expected


// Apple

// Banana


// Question 2

// Skip the second element.

// ANSWER

// const colors = ["Red", "Green", "Blue"];
// const [one,,three] = colors;
// console.log(one,three);


// Output


// Red

// Blue


// Question 3

// Store the remaining values in another array.

// ANSWER
// const numbers = [10, 20, 30, 40, 50];
// const [one,...other] = numbers;
// console.log(one,other);

// Expected


// 10

// [20,30,40,50]


// Question 4

// Swap two variables using destructuring.

// ANSWER

// let a = 5;

// let b = 10;

//  [a,b] = [b,a]
//  console.log(a,b);
 
// Expected


// a = 10

// b = 5


// Question 5

// Give default values.

// ANSWER
// const names = ["Ali"];
// const [one, two = "Ahmed"] = names;
// console.log(one,two);

// Expected


// Ali

// Ahmed


// Question 6

// Nested array destructuring.

// ANSWER
// const data = ["HTML", ["CSS", "JavaScript"]];
// const [one,two] = data;
// const [three,four] = two;
// console.log(one,three,four);

// Expected


// HTML

// CSS

// JavaScript


// Question 7

// Destructure all values.


// ANSWER
// const marks = [80, 90, 95];
// const [zero,one,two] = marks;
// console.log(zero,one,two);


// Print all three.
// 📌 Object Destructuring (7 Questions)
// Question 8

// Destructure name and age.

// ANSWER

// const user = {

// name: "Hasan",

// age: 23,

// city: "Lahore"

// };

// const {name,age} = user;
// console.log(name,age);


// Expected


// Hasan

// 23


// Question 9

// Rename variables.


// ANSWER
// const student = {

// name: "Ayesha",

// classs: "10th"

// };

// const {name : studentName, classs: studentClasss} = student;
// console.log(studentName,studentClasss);
// ;



// Expected variables


// studentName

// studentClass


// Question 10

// Use default value.

// ANSWER

// const employee = {

// name: "Ahmed"

// };

// const {name,salary= 50000} = employee;

// console.log(name,salary);

// Expected


// Ahmed

// 50000


// Question 11

// Nested object destructuring.

// ANSWER

// const person = {

// name: "Ali",

// address: {

// city: "Karachi",

// country: "Pakistan"

// }

// };

// const {name,address} = person;
// const {city,country} = address;
// console.log(name,city,country);



// Expected


// Karachi

// Pakistan


// Question 12

// Destructure everything.

// ANSWER

// const product = {

// title: "Laptop",

// price: 80000,

// brand: "Dell"

// };

// const {title,price,brand} = product;
// console.log(title,price,brand);


// Print all values.


// Question 13

// Extract only email.



// const account = {

// username: "coder123",

// email: "coder@gmail.com",

// password: "12345"

// };

// const {email} = account;
// console.log(email);



// Question 14

// Combine object and array destructuring.

// ANSWER

// const company = {

// employees: ["Ali", "Ahmed", "Sara"]

// };
// const {employees} = company;
// const [one,two,three] = employees;
// console.log(one,two,three);



// Expected


// Ali

// Ahmed

// Sara


// 📌 Rest Operator (3 Questions)
// Question 15

// Collect remaining values.



// const numbers = [1,2,3,4,5];
// const [one,two,...others] = numbers;
// console.log(one,two,others);


// Expected


// 1

// 2

// [3,4,5]


// Question 16

// Collect remaining object properties.



// const user = {

// name: "Hasan",

// age: 22,

// city: "Lahore",

// country: "Pakistan"

// };

// const {name,...others} = user;
// console.log(name,others);


// Expected


// name

// remaining object


// Question 17

// Create a function using Rest Parameters.

// Example
// function sum (...numbers) {
// const [o,ob,obx,obc ] = numbers;
// console.log(o+ob+obx+obc);


// }
 

// sum(10,20,30,40);


// // Expected Output


// 100


// Hint:

// Use


// function sum(...numbers)


// 📌 Spread Operator (3 Questions)
// Question 18

// Merge two arrays.



// const frontend = ["HTML", "CSS"];

// const backend = ["Node", "MongoDB"];

// const arr = [...frontend,...backend];
// console.log(arr);
 
// Expected


// ["HTML","CSS","Node","MongoDB"]


// Question 19

// // Copy an array.



// const fruits = ["Apple","Banana","Orange"];

// const newArr = [...fruits]
// console.log(fruits,newArr);


// Create a new copy using the spread operator.
// Question 20

// // Merge two objects.



// const user = {

// name: "Hasan"

// };


// const details = {

// age: 22,

// city: "Lahore"

// };

// const newObj = {...user,...details}
// console.log(newObj);



// Expected



// {

// name: "Hasan",

// age: 22,

// city: "Lahore"

// }
