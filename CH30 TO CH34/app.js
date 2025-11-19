console.log("Js is Running--->");


// Problem No 1
// let currentDateAndTime = new Date();
// console.log(currentDateAndTime)


// Problem No 2
// let months = ["January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// let currentMonth = new Date();
// alert(months[currentMonth.getMonth()]);


// Problem No 3
// let daysOfWeek = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// let currentDay = new Date();
// alert(daysOfWeek[currentDay.getDay()]);


// Problem No 4

// let daysOfWeek = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// let funDaysOfWeek = ["Sun" ,"Tue", "Sat"]; 
// flag = false;

// for(let i = 0; i < funDaysOfWeek.length; i++){
// // console.log(funDaysOfWeek[i])
// let currentDay = new Date().getDay();
// let expect = daysOfWeek[currentDay]
// // console.log(expect)

// if(funDaysOfWeek[i] === expect){
//     // console.log("It's a FunDay")
//     flag = true;

// }
// }
// if(flag){
//     console.log("Its a FunDay")
// }else{
//     console.log("Its Not FunDay")
// }


// Problem No 5
// let user = new Date();
// let answer = user.getDate();
// let flag = false;
// let daysLessThanFif = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i =0 ; i < daysLessThanFif.length; i++){
//     // console.log(daysLessThanFif[i])
//     if(answer == daysLessThanFif[i]){
//         flag = true;
//     }
// }
// if(flag){
//     console.log("First Fifteen Days Of Month");
// }
// else{
//     console.log("Last Days Of Month")
// }


// Problem No 6





// Problem No 7
// let current = new Date().getHours();
// // console.log(current)

// if(current <= 12){
//     console.log("It's AM")
// }else{
//     console.log("It's PM")

// }



















// Problem No 7
// let later = new Date("31 Dec 2020");
// console.log(later.toString())



// Problem No 8
// let pastRamzan = new Date("11 Mar 2024");
// let today = new Date();

// let diff = today.getTime() - pastRamzan.getTime();
// // console.log(diff);


// let mili = 1000 * 60 * 60 * 24;
// let answer = diff / mili;
// console.log( Math.round(answer) ,"Days Passed Since 1st Ramzan 2024!");




// Problem No 9
// let pastRamzan = new Date("11 Mar 2024");
// let currentRamzan = new Date("17 Feb 2025") 
// let diff =  currentRamzan.getTime() - pastRamzan.getTime();
// console.log(diff)


// let days = 1000 * 60 * 60 * 24;
// let answer = diff / days;
// console.log(answer.toString() , "Days Passed during This Ramzan and Past Ramzan")




// Problem No 10
// let startDate = new Date("01 Jan 2015");
// let endDate = new Date("05 Dec 2015");
// // console.log(endDate)


// let diff =   endDate.getTime() - startDate.getTime();
// // console.log(diff);


// let seconds = 1000;
// let answer = diff / seconds;
// console.log(answer)


// Problem No 11
// let currentDate = new Date();
// console.log("Original Date Object : " , currentDate.toString())

// let currentHours = currentDate.getHours();
// console.log("Current Hour" , currentHours);


// currentDate.setHours(currentHours -1);
// console.log(currentDate);


// let now = new Date();
// console.log(now);


// let currentHours = new Date().getHours();
// console.log(currentHours);

// now.setHours(currentHours - 1);
// console.log(now);





// Problem No 12
// let today = new Date();
// console.log( "Today Date and Time : " , today.toString());
 
// let fullYear = today.getFullYear();
// console.log(fullYear);


// today.setFullYear(fullYear - 100);
// console.log("Hundred Years Back Date and Time : " , today)





// Problem No 13
// let userAge = prompt("Enter Your Age");
// let age = parseInt(userAge);
// console.log("Your Age is : " , userAge)
// let current = new Date().getFullYear();
// console.log("Current Year" , current);


// let birthYear = current - age;
// console.log("Your Birth Year" , birthYear)



// Problem No 14

// console.log("K.E BILL EXAMPLE")

//  let months = ["January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// let customerName =  "Hasnain";
// console.log("Customer Name : " , customerName)
// let today = new Date();


// let currentMonth = months[today.getMonth()]
// console.log( "Current Month : " ,currentMonth);

// let numberOfUnits = 394;
// console.log("Number Of Units : " ,numberOfUnits)
// let chargesPerUnit = 14.95;
// console.log("Charges Per Unit : " , chargesPerUnit)
// let latePaymentAmountCharge = 0.05;
// console.log( "Late Payment Amount Charge : " , latePaymentAmountCharge);


// let amountPayableDuringDate = numberOfUnits * chargesPerUnit;
// console.log( "Net Amount Payable (within Due Date) : " ,Math.round(amountPayableDuringDate))

// let afterDueDate = latePaymentAmountCharge * amountPayableDuringDate;
// console.log("Late Amount SurCharge : " ,Math.round(afterDueDate) );


// let grossAmount = amountPayableDuringDate + afterDueDate;
// console.log("Gross Amount Payable (after Due Date) : " , Math.round(grossAmount));

// // Complete Assignment