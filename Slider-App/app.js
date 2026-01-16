console.log("Js Is Running!");


let dataArr = [{
    photo : `images-upload/image.jpg`,
    name : `Muhammad Hasnain`,
    jobTitle : `Senior Developer`,
    jobDesc : `A Web Developer builds and maintains websites and web applications, writing code (HTML, CSS, JavaScript) to create functional, user-friendly, and aesthetically pleasing online experiences, collaborating with designers, optimizing for speed/responsiveness across devices, and ensuring performance/security`
},{
    photo : `images-upload/image2.jpg`,
    name : `Muhammad Umair`,
    jobTitle : `Junior Developer`,
    jobDesc : `A Web Developer builds and maintains websites and web applications, writing code (HTML, CSS, JavaScript) to create functional, user-friendly, and aesthetically pleasing online experiences,devices, and ensuring performance/security`

},{
    photo : `images-upload/image3.jpg`,
    name : `Muhammad Anas`,
    jobTitle : `Fresher Student`,
    jobDesc : `A Web Developer builds and maintains websites and web applications, writing code (HTML, CSS, JavaScript) to create functional, user-friendly, and aesthetically pleasing online experiences, collaborating with designers, optimizing for speed/responsiveness across devices, and ensuring performance/security`
}]

let userImg = document.getElementById(`user-img`);
let userName = document.getElementById(`user-name`);
let userJob = document.getElementById(`user-job`);
let userDesc = document.getElementById(`user-desc`);
let btnLeft = document.getElementById(`btn-left`)
let btnRight = document.getElementById(`btn-right`)
let index = 0;


function setData(){
    userImg.src = dataArr[index].photo
    userName.innerText = dataArr[index].name
    userJob.innerText = dataArr[index].jobTitle
    userDesc.innerText = dataArr[index].jobDesc

}
setData()

function forward(){
    if(index == dataArr.length){
     index = 0;
    }
    setData();
    index++
}




function backward(){
if(index == 0){
    index = dataArr.length - 1
 
}
else{
     index--

}
 setData()  

}







btnLeft.addEventListener("click" ,backward )
btnRight.addEventListener(`click` , forward)















