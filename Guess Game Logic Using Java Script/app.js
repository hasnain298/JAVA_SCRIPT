
let secretNumber = 7;
let userAnswer = prompt("Guess the Secret Number");
if (userAnswer == 7){
    alert("Bingo! Correct Answer");
}
else if (userAnswer > 1 && userAnswer < 6 ){
    alert("Very Close ,Try Again!")
}
else if(userAnswer > 7 && userAnswer <= 10){
    alert("Just Come Downwards You Get It!")
}
else{
    alert("Close Enough to secret Number");
}