console.log("Js Is Running!");


function fn(e){
    e.preventDefault();
document.getElementById("display-name").innerText =  "Name : " + document.getElementById("in-name").value
document.getElementById("display-email").innerText =  "Email : " + document.getElementById("in-email").value
document.getElementById("display-number").innerText =  "Number : " + document.getElementById("in-number").value
document.getElementById("display-card").innerText =  "Id : " + document.getElementById("in-idCard").value


// Handle-Img

let file  = document.getElementById("in-img").files[0];
if(file){
    let reader = new FileReader();  
    reader.onload = function(e) {
        let img = document.getElementById("display-img");
        img.src = e.target.result;
        img.style.display = "block"
    };
    reader.readAsDataURL(file)
}

}