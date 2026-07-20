console.log("Js Is Running!");

import { menProducts , womenProducts , kidsProducts} from "../DummyData/dummyData.js";
console.log(menProducts);

// Variables
let menCard = document.getElementById("menCard")
let womenCard = document.getElementById("womenCard")
let kidCard = document.getElementById("kidCard")




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