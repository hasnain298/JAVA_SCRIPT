// console.log("Js Is Running!");









// CLOSURES ====>
// EXAMPLE 1
// function outerFn(oo) {
//    let userName = "Muhammad Hasnain"    
//    console.log(userName);
   
//   function innerFn() {
//     console.log(oo);
    
//   }

//   innerFn()

// }

// outerFn("Muhammad Hamza")

// EXAMPLE 2
// function outerFn (x){
// return function(y){
// return x + y
// }
// }
// let add5 = outerFn(5);
// let add10 = outerFn(566);
// console.log(add5(15));
// console.log(add10(58));

// EXAMPLE  3
// function outerFn () {
//    const userName = "KhanSaab";
//    console.log(userName);
   

//     function innerFn() {
//    return "Ponka"
//     }

//     return innerFn()
// }

// console.log(outerFn());


// SHALLOW COPY ====>
// 1ST METHOD 
// let user = {
//     age : 17,
//     address : {
//         city: "Karachi",
//         country : "Pakistan"
//     }
// }

// let shallowCopy = {...user} 
// shallowCopy.age = 43
// shallowCopy.address.city = "KPK"
// console.log(shallowCopy);
// console.log(user);


// 2ND METHOD 

// let user2 = {
//     age : 89,
//     address : {
//         city : "Balochistan",
//         country : "Pakistan"
//     }
// }


// let shallowCopy2 = Object.assign({} , user2);
// shallowCopy2.age = 08
// shallowCopy2.address.city = "Punjab"
// console.log("Old User--->",user2);
// console.log("New User--->",shallowCopy2);


// DEEP COPY ===>
    // 1ST EXAMPLE
// let arr = ["Hasnain" , "Umair" , "Lala" , "KhanSaab" , "Ponka" , ["CHACHA VASTGUNA HUYYEEEN!"]];

// let deepCopy = structuredClone(arr);
// deepCopy[0] = "Orange"
// deepCopy[1] = "KhanSaab"
// deepCopy[5][0] = "Bhaya Chaat Dona-->"
// console.log("Array ===> " ,arr);
// console.log("DeepCopy ===> ",deepCopy);

// 2ND EXAMPLE
// let user2 = {
//     age : 19,
//     address : {
//         city : "Karachi",
//         country : "Pakistan"
//     }
// }

// let deepCopy2 = JSON.parse(JSON.stringify(user2));
// deepCopy2.age = 23
// deepCopy2.address.country = "Egypt"

// console.log("Old User ---" , user2);
// console.log("Deep Copy ---" , deepCopy2);




// OBJECT METHODS
// let obj = {
//     isAdmin : true,
//     userName : "Muhammad Hasnain",
//     age : 17,
//     batch : 20,
// }
// // obj.newProperty = 22;
// let modify = Object.seal(obj);
// console.log(modify);

// let modify2 = Object.freeze(obj)
// obj.newProperty = "Ponka"
// console.log(modify2);


// let modify3 = Object.entries(obj)
// console.log(modify3);

// let modify4 = Object.keys(obj)
// console.log(modify4);

// let modify5 = Object.values(obj);
// console.log(modify5);

// SET FUNCTION 
// let arr = [1,2,3,2,2,3,4,5,Boolean,undefined , 6,7,8,7,6,5,,44];
// let setValue = new Set(arr);
// console.log(setValue);

// let arr = ["KhanSaab" , "Ponka" , "Lala" , "Lala" , "Chachaaa" , "Meoow Ghup" , "Lala" , "Orange"]
// let setFn = [...new Set(arr)];
// console.log(setFn);

// let newVal = new Set(arr);
// console.log(newVal.size);
// console.log(newVal.add("Ponka Party"));
// console.log(newVal.delete("Ponka"));
// console.log(newVal.keys());
// console.log(newVal.values());
// console.log(newVal.clear());


// MAP FUNCTION 
// let obj = [["Pak" , "India"]]
// let newMap = new Map(obj);
// console.log(newMap.get("Pak"));
// console.log(newMap.set("Paper" , "Mathematics"));
// console.log(newMap.entries());
// console.log(newMap.has("Pak"));
// console.log(newMap.delete("Pak"));
// console.log(newMap.keys());
// console.log(newMap.values());
// console.log(newMap.size);



