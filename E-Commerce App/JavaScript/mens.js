console.log("Js Is Running!");

import { menProducts, womenProducts, kidsProducts, sweety } from "../DummyData/dummyData.js";
// console.log(menProducts);

// Variables
let menCard = document.getElementById("menCard")
let womenCard = document.getElementById("womenCard")
let kidCard = document.getElementById("kidCard")
let isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"))
let btnsParent = document.querySelector(".btns")
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let badge = document.getElementById("badge")
let searchBtn = document.getElementById("searchBtn")
let input = document.getElementById("input")


// Functions

function foo() {
  if (isUserLoggedIn) {
      btnsParent.innerHTML = `<button type="button" class="btn btn-outline-primary logoutBtn">Logout</button>`
    } else {
        window.location.href = "../index.html";
        return sweety("error" , "Error" , "Please Login!")
     
    }
}
foo()



const badgeHandler = () => {

  let returnReduce = cartArray.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0
  )
  //  console.log(returnReduce);

  badge.innerText = returnReduce;
}
badgeHandler()



const menFn = () => {
  // console.log(id);

  let menData = menProducts.map((item) => {
    return `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <p class="card-text">${item.price}</p>
      <button class=" btn btn-primary addToCartBtn" data-Product-id=${item.id}>Add To Cart</button>
    </div>
  </div>`
  })

  menCard.innerHTML = menData.join(" ")
}
menFn()




const logoutHandler = () => {
    localStorage.setItem("isUserLoggedIn", JSON.stringify(false));
    window.location.reload()
    setTimeout(() => {
      window.location.href = "/Pages/login.html"
  
    }, 1000)
  }
  


const addToCartHandler = (btn) => {
  // console.log("main chlaa" , btn);
  // console.log(btn.dataset);

  if (!isUserLoggedIn) {
    return sweety("error", "Error!", "Please SignUp/Login First...")
  }
  let prodId = Number(btn.dataset.productId);
  // console.log(prodId);

  let product = menProducts.find((item) => item.id == prodId) || womenProducts.find((item) => item.id == prodId) || kidsProducts.find((item) => item.id == prodId)
  // console.log(product);

  let returnVal = cartArray.find((item) => item.id == prodId)
  console.log(returnVal);



  if (returnVal) {
    returnVal.quantity += 1;
  } else {
    cartArray.push({
      ...product,
      quantity: 1
    })
  }


  localStorage.setItem("cart", JSON.stringify(cartArray));
  sweety("success", "Great!", "Added To Cart Successfully!")
  badgeHandler()
}
console.log(menCard);

const searchHanlder = (event) => {
event.preventDefault()
let searchVal = input.value; 

if(!searchVal){
return sweety("error" , "Error" , "Please Enter Something!")
}



let modify = menProducts.filter((item) => {
  if(item.title.toLowerCase().includes(searchVal.toLowerCase())){
   return item
     
  }
})

console.log(searchVal.toLowerCase());

console.log(modify);

const mapping = modify.map((o) => {
return `<div class="card" style="width: 18rem;">
<img src="${o.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${o.title}</h5>
  <p class="card-text">${o.description}</p>
  <button class=" btn btn-primary addToCartBtn" data-Product-id="${o.id}">Add To Cart</button>
</div>
</div>`
})


menCard.innerHTML = mapping.join(" ")
}


searchBtn.addEventListener("click" , () => {searchHanlder(event)})

document.addEventListener("click", (e) => {
    // console.log(e.target.classList.contains("logoutBtn"));
  
    if (e.target.classList.contains("logoutBtn")) {
      // console.log(("ohooo"));
      logoutHandler()
    }
    // }else{
    //   console.log("nhi mila");
  
    // }
  
    if (e.target.classList.contains("addToCartBtn")) {
      addToCartHandler(e.target)
    }
  
  })