

// user account list

let atmAccount = 50000;
let salary = 25000;
let greeting = alert("Hello User! \nWelcome to HBL ATM ");
let myOpinion = "yes";
let userAnswer = prompt("For What Pupose Do you Come For Money? \n yes or no?");
if (myOpinion == userAnswer) {
    console.log("Let's go!")
}
else {
    alert("So Why Do You Come?")
}
let PinCode = 787898;
let userPinCode = prompt("Enter Your Pin code");
if (PinCode == userPinCode) {
    let withdraw = prompt("Enter Your Withdraw!");
    console.log(withdraw);
    if (salary > withdraw) {
        salary = salary - withdraw;
        console.log("Your Balance After This Withdraw", salary)
    }
    if (salary < withdraw) {
        console.log("You Have Insufficiet Balance!");
        alert("Let's See Your ATM Account")
        let atmPin = prompt("Enter Your ATM Pin Code");
        if (atmPin == userPinCode) {
            alert("You Have 50,000Rs In Your ATM")

            let withdraw = prompt("Enter Your Withdraw Amount!")
            atmAccount = atmAccount - withdraw;
            console.log("Your Balance After This Withdraw", atmAccount);
            if (atmAccount > withdraw) {
                alert("Successfully Withdrawl!")
            }
            else if (salary < withdraw) {
                alert("You Have Insufficient Balance! Please Withdraw 50,000 or less Than 50,000 ok");
            }
        }
        else if (atmPin !== userPinCode) {
            alert("Incorrect Pincode!")

        }

    }

}
else if (PinCode !== userPinCode) {
    alert("Incorrect Pincode!")
}

