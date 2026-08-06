// console.log("Js Is Running!");

// var a = "Hasnain";
// console.log(a);

// a = "Khan"
// console.log(a);


// var weight = 405;
// weight = weight +  90;
// console.log(weight);


// var originalNum = 9;
// var newNumber = originalNum + 9;
// console.log(newNumber);

// var name2 = "hasnain"
// console.log(name2);


// for(var i =0; i< 9; i++) {
//     setTimeout(() => {
//         console.log(i);
        
//     }, 1000);
// }


// var name = "Muhammad Hasnain"
// console.log(name);


// let firstName = "Muhammad";
// let lastName = "Hasnain";
// console.log(firstName + " " + lastName);


// let userName = prompt("Enter Your Name!");
// alert(userName)



// let age = 56;
// if(age != 56) console.log("You are good");
// else if(age < 93){
//     console.log("ok");
    
// }


// let arr = ["Hasnain" , "Umair" , "Lala" , "Ponka" , "Hasnain"];
//  let sort = arr.sort()
//  console.log(sort);
 

// let arr= [2,3,4,2,22,8,666,55,4,3,3,3,2]
// console.log(arr.sort());


// var dog = "Buddy";
// alert(dog)

let more = document.getElementById("more");
let productModal = document.getElementById("productModal");
let btnclose = document.getElementById("btnclose");

more.addEventListener("click" , () => {
productModal.style.display = "flex"
})

btnclose.addEventListener("click" , () => {
    productModal.style.display = "none"
})