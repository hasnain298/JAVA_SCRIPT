console.log("Js Is Running!");

let hrs = document.getElementById("hrs");

let min = document.getElementById("min");

let sec= document.getElementById("sec");


setInterval(()=>{
    let cuurent  = new Date()

hrs.innerText = cuurent.getHours()
min.innerText = cuurent.getMinutes()
sec.innerText = cuurent.getSeconds()

    
},1000)

