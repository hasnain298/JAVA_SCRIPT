console.log("Js is running!");

// let rows = 3;
// let columns = 3;
// let dynamicMatrix = new Array (rows);

// for (let i = 0; i < rows; i++) {
//     dynamicMatrix[i] = new Array(columns).fill(4); // Fills inner array with 0
// }
// // dynamicMatrix is now [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
// console.log(dynamicMatrix);

// var row = 3;
// var col = 3;
// let dynamicMatrixs = new Array (row);

// for (let i = 0; i < row; i++){
//     dynamicMatrixs[i] = new Array(col).fill(1)
// }
// console.log(dynamicMatrixs);

// let rows = 3;
// let col = 3;
// let matrix = new Array(rows);
// for(i = 0; i < rows; i++){
// matrix[i] = new Array(col).fill(8);
// }
// console.log(matrix);


// let rows = 7;
// let columns = 3;
// let multi = new Array(rows);
// for(i = 0; i < rows; i++){
//     multi[i] = new Array(columns).fill(2);
// }
// console.log(multi)


// QNO1 Starts here 

// let multiDimensional = [
//     [],
//     [],
//     []
// ];


// multiDimensional = [
//     [1,0,1,0],
//     [2,0,2,0],
//     [3,0,3,0]
// ]
// console.log(multiDimensional);


// Qno1 ends here 

//     QNO2 STARTS HERE 

// let matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// console.log(matrix);


//     QNO2 ENDS HERE 



// QNO3 STARTS HERE 


// for(i = 1; i <=10; i++){
//     console.log(i)
// }


// QNO3 ENDS HERE 


// QNO4 STARTS HERE 

// let userTable = +prompt("Enter Your Number");
// let userLength = +prompt("Enter length of your Table");
// for (i =1; i <= userLength; i++){
//     console.log(userTable , "x" , i , "=" , userTable*i);
// }

// QNO4 ENDS HERE 


// QNO5 STARTS HERE 

// QNO5 ENDS HERE 





// QNO6 STARTS HERE 
// part "a"
// for (i = 1; i <=15; i++){
//     document.writeln(i)
// }

// part "b"
// for(i = 15; i > 0; i--){
//     document.writeln(i)
// }


// Qno6 Ends here  

// let counting = [];
// for (let i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// document.getElementById("counting").innerText = counting.join(", ");

// // b. Reverse counting: 10, 9, ..., 1
// let reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// document.getElementById("reverseCounting").innerText = reverseCounting.join(", ");

// // c. Even: 0, 2, ..., 20
// let even = [];
// for (let i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// document.getElementById("even").innerText = even.join(", ");

// // d. Odd: 1, 3, ..., 19
// let odd = [];
// for (let i = 1; i <= 19; i += 2) {
//     odd.push(i);
// }
// document.getElementById("odd").innerText = odd.join(", ");

// // e. Series: 2k, 4k, ..., 20k
// let seriesK = [];
// for (let i = 2; i <= 20; i += 2) {
//     seriesK.push(i + "k");
// }
// document.getElementById("seriesK").innerText = seriesK.join(", ")



// QNO7 STARTS HERE




// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var cityToCheck = prompt("")

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     } }

var A = ["Cake" , "Pastries" , "Pasta" , "Cookies" , "Biscuits"];
var user = prompt("");

for(var i = 0; i <=4; i++){
    if(user === A[i]){
        console.log("Yes")
    }
    // break;
}