console.log("Js Is Running!");
// let para = document.getElementById("para");
// let btn = document.getElementById("btn")
// function seemore(){
//     if(btn.innerText == "See More"){
//         para.innerText = "My Name Is Hasnain. I am a Full Stack Developer From Pakistan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum quia odio eligendi blanditiis possimus voluptatibus corrupti, ipsum ducimus rem quas cupiditate doloremque consectetur cumque natus omnis quisquam, placeat iure."
//         btn.innerText  = "See More"
//     }else{
//         para.innerText = "My Name Is Hasnain. I am a Full Stack Developer From Pakistan. "
//         btn.innerText = "See More"
//     }

// }

let para = document.getElementById("para");
let btn = document.getElementById("btn");
para.style.fontSize = "19px"
function seemore() {
  if (btn.innerText === "See More") {
    para.innerText = "My Name Is Hasnain. I am a Full Stack Developer From Pakistan. I Have Experience of only 3 Years.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    btn.innerText = "See Less";
  } else {
    para.innerText = "My Name Is Hasnain. I am a Full Stack Developer From Pakistan.";
    btn.innerText = "See More";
  }
}
