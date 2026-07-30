console.log("Js Is Running!");


// Procedural Programming ===>

// we have to create background changer through Procedural Programming==>

// const backgroundChanger = () => {
//     let colors = ["red","green","blue","brown","yellow","black","orange","hotpink" , "purple" , "aqua" , "#443778"];
//     let random = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[random]

// }


// Obejct Orientated Programming ===>

// let obj = {
//     id : 10,
//     name : "Muhammad Hasnain",
//     email : "codermhasnain@gmail.com",
    
//      printName : function() {
//         console.log(this.name);
//         return "KhanSab"
//     },

//     working : function () {
//    console.log(this.name , "Working..");
   
//     }
// }

// obj.working()



// let userDate = new Date().toString();
// let check = userDate.slice(0,16)

// function User (name,age,email,date) {
//     this.name = name
//     this.age = age
//     this.email = email
//     this.date = date

//     this.studying = function () {
//         console.log(this.name , "Studying...");
//     }

//     this.sleeping = function () {
//         console.log(this.name , "Sleeping...");
        
//     }
    
// }



// function Student (name,age,email,password) {
//     this.name = name 
//     this.age = age 
//     this.email = email 
//     this.password = password 
// }

// //  function study (){
// //      console.log(this.name , "studying..");
    
// //  }

//  function sleeping (){
//     console.log(this.name , "sleeping..");
//  }

//  Student.prototype.sleeping = sleeping;
//  Student.prototype.study =  function  (p){
//      console.log(this.name , p, "studying..");
//      return "Chacha"
//  }


// let u1 = new Student("Muhammad Hasnain" , 17 , "codermhasnain@gmail.com" ,check )
// let u2 = new Student("Muhammad Haseeb" , 22 , "haseebkhanjadoon12347890@gmail.com" ,check )
// console.log(u1.study("Harry"));


// OOP ===>

// function Admin (name,email,id,admin) {
//     this.name = name
//     this.email = email
//     this.id = id 
//     this.admin = admin 


//     this.working = function () {
//         console.log(this.name , "Working...");
//         return "Agya Na Maza...!"
        
//     }

//     this.sleeping = function () {
//         console.log(this.name , "Sleeping...");
        
//     }
// }


// let a1 = new Admin("Mr Harry" , "codermhasnain@gmail.com" , 446863 , true);
// let a2 = new Admin("Mr Majnu" , "mrmajnu@gmail.com" , 441469 , true);
// console.log(a1);
// console.log(a2);

// function User (name,email,age) {
//     this.name = name 
//     this.email = email
//     this.age = age
// }

// function sleeping () {
// console.log("C");
// return 348290

// }

// User.prototype.working = function () {
//     console.log("JavaScript");
//     return 10291
// }

// User.prototype.sleeping = sleeping

// let u1 = new User("Muhammad Hasnain" , "codermhasnain@gmail.com" , 17);
// console.log(u1);




// class Admin{
// constructor (name,age,email) {
//     this.name = name 
//     this.age = age 
//     this.email = email 
// }

// }
// let a1 = new Admin("Muhammad Hasnain" , 17 , "codermhasnain@gmail.com");

// class User extends Admin {
//     constructor () {
//         super("jani" , 10 , "jani@gmail.com")
//         this.admin = true;
//     }
// }

// let u1 = new User("Mr Harry" , 17 , "codermhasnain@gmail.com");
// console.log(a1);
// console.log(u1);



// class User {
//     constructor (name, email) {
//         this.name = name,
//         this.email = email
//     }
// }


// let u1 = new User ("Abdullah" , "abdullah@gmail.com")

// console.log(u1);


// class Admin extends User {
//     constructor (){
//     super("saleem", "saleem@gmail.com")
//     this.admin = true
// }
// }

// let a1 = new Admin("jani", "jani@gmail.com")
// console.log(a1);





