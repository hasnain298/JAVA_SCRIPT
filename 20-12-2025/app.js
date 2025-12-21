

// let a = document.getElementById("para")
// let b = document.getElementById("btn")



// function expand(){
//     if(b.innerText === "See Less"){
//         para.innerText = "MY NAME IS HASNAIN.";
//         btn.innerText = "See More"
//     }
//     else{
//         para.innerText = "MY NAME IS HASNAIN. I AM A FULL STACK DEVELOPER FROM PAKISTAN";
//         btn.innerText = "See Less"
//     }
// }


let para = document.getElementById("para")
let btn = document.getElementById("btn")

let expandPara = "MY NAME IS HASNAIN. I AM A FULL STACK DEVELOPER FROM PAKISTAN AND STUDENT OF SAYLANI."

function expand(){

if(btn.innerText === "See More"){
    para.innerText = expandPara;
    btn.innerText = "See Less"
}
else{
    para.innerText = "MY NAME IS HASNAIN.";
    btn.innerText = "See More"
}

}