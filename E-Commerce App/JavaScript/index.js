console.log("Js Is Running!");

import { menProducts , womenProducts , kidsProducts} from "../DummyData/dummyData.js";
// console.log(menProducts);

// Variables
let menCard = document.getElementById("menCard")
let womenCard = document.getElementById("womenCard")
let kidCard = document.getElementById("kidCard")
let isUserLoggedIn = JSON.parse(localStorage.getItem("isUser"))
let btnsParent = document.querySelector(".btns")

if(isUserLoggedIn){
  btnsParent.innerHTML = `<button type="button" class="btn btn-outline-primary logoutBtn">Logout</button>`
}else{
  btnsParent.innerHTML = `<a href="./Pages/login.html   "><button type="button" class="btn btn-outline-primary">Login</button></a>
  <a href="./Pages/signup.html"><button type="button" class="btn btn-outline-primary">Sign Up</button></a>`
}


  
  
  
  
  // Functions



const menFn = () => {
    let menData = menProducts.map((item) => {
    return `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <p class="card-text">${item.price}</p>
      <button class=" btn btn-primary">Add To Cart</button>
    </div>
  </div>`
    })

    menCard.innerHTML = menData.join(" ")
}


const womenFn = () => {
    let womenData = womenProducts.map((item) => {
    return `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <p class="card-text">${item.price}</p>
      <button class=" btn btn-primary">Add To Cart</button>
    </div>
  </div>`
    })

    womenCard.innerHTML = womenData.join(" ")
}


const kidFn = () => {
  let kidData = kidsProducts.map((item) => {
  return `<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text">${item.price}</p>
    <button class=" btn btn-primary">Add To Cart</button>
  </div>
</div>`
  })

  kidCard.innerHTML = kidData.join(" ")
}

const startApp = () => {
  menFn()
  womenFn()
  kidFn()
}

startApp()


const logoutHandler = () => {
  localStorage.setItem("isUser" , JSON.stringify(false));
  window.location.reload()
  setTimeout(() => {
    window.location.href = "/Pages/login.html"

  },1000)
}

document.addEventListener("click" , (e) => {
  // console.log(e.target.classList.contains("logoutBtn"));
  
if(e.target.classList.contains("logoutBtn")) {
  // console.log(("ohooo"));
  logoutHandler()
}
// }else{
//   console.log("nhi mila");
  
// }
})