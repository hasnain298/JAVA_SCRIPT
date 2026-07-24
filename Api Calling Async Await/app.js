console.log("Js Is Running!");
let cardParent = document.querySelector(".cardParent")
let all = document.getElementById("all")
let groceries = document.getElementById("groceries")
// fetch(`https://dummyjson.com/products?limit=194`).then((res)=>res.json()).then((result) => console.log(result))



// Functions ===>
const startApp = async () => {
    let api = await fetch(`https://dummyjson.com/products?limit=194`);
   let result = await  api.json()
  

 let data =   result.products.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
  return `<div class="card h-[390px] w-[300px]  shadow-lg rounded m-3 flex flex-col gap-3 ">
  <div class="h-[150px] w-full p-1">
    <img src=${images[0]} alt="" class="h-full w-full">
  </div>
  <hr>
  <div class="m-2">
<h2 class="text-xl font-bold italic">${title}</h2>
<p class="italic text-gray-700">Brand :  ${brand == undefined ?   "Anonymous" : brand}</p>
<p class="italic text-gray-700">Category :  ${category}</p>
<p class="italic text-gray-700"> Rating : ${rating}</p>
<p class="italic text-gray-700"> Price : ${price}</p>
<p class="italic text-gray-700">Description :  ${description.slice(0,30)}</p>

</div>
  </div>`
   })
   
   cardParent.innerHTML = data.join(" ")
}
cardParent.innerHTML = `<h1 class="text-3xl text-bold italic mt-45 ">Fetching Data...</h1>`
setTimeout(() => {
// startApp();
},2000)



const allHandler = async() => {
const api =  await fetch(`https://dummyjson.com/products?limit=194`)
const result = await api.json()
// console.log(result);
let data =   result.products.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
  return `<div class="card h-[390px] w-[300px]  shadow-lg rounded m-3 flex flex-col gap-3 ">
  <div class="h-[150px] w-full p-1">
    <img src=${images[0]} alt="" class="h-full w-full">
  </div>
  <hr>
  <div class="m-2">
<h2 class="text-xl font-bold italic">${title}</h2>
<p class="italic text-gray-700">Brand :  ${brand == undefined ?   "Anonymous" : brand}</p>
<p class="italic text-gray-700">Category :  ${category}</p>
<p class="italic text-gray-700"> Rating : ${rating}</p>
<p class="italic text-gray-700"> Price : ${price}</p>
<p class="italic text-gray-700">Description :  ${description.slice(0,30)}</p>

</div>
  </div>`
   })
   
   cardParent.innerHTML = data.join(" ")

}

const groceriesHandler = async (Category) => {
    console.log(Category);
    
const api = await fetch(`https://dummyjson.com/products`);
let result = await api.json();
let filterdItems = result.products.filter((item) => {
if(item.category.toLowerCase() === Category.toLowerCase()){
    return item 

    
}
})
let modify = filterdItems.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
// console.log(item);

return `<div class="card h-[390px] w-[300px]  shadow-lg rounded m-3 flex flex-col gap-3 ">
  <div class="h-[150px] w-full p-1">
    <img src=${images[0]} alt="" class="h-full w-full">
  </div>
  <hr>
  <div class="m-2">
<h2 class="text-xl font-bold italic">${title}</h2>
<p class="italic text-gray-700">Brand :  ${brand == undefined ?   "Anonymous" : brand}</p>
<p class="italic text-gray-700">Category :  ${category}</p>
<p class="italic text-gray-700"> Rating : ${rating}</p>
<p class="italic text-gray-700"> Price : ${price}</p>
<p class="italic text-gray-700">Description :  ${description.slice(0,30)}</p>

</div>
  </div>`

   
})
cardParent.innerHTML = modify.join(" ")
}


const furnitureHandler = async (Category) => {


const api = await fetch(`https://dummyjson.com/products`);
let result = await api.json();
let filterdItems = result.products.filter((item) => {
if(item.category.toLowerCase() === Category.toLowerCase()){
    return item 


}
})


let modify = filterdItems.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
// console.log(item);

return `<div class="card h-[390px] w-[300px]  shadow-lg rounded m-3 flex flex-col gap-3 ">
  <div class="h-[150px] w-full p-1">
    <img src=${images[0]} alt="" class="h-full w-full">
  </div>
  <hr>
  <div class="m-2">
<h2 class="text-xl font-bold italic">${title}</h2>
<p class="italic text-gray-700">Brand :  ${brand == undefined ?   "Anonymous" : brand}</p>
<p class="italic text-gray-700">Category :  ${category}</p>
<p class="italic text-gray-700"> Rating : ${rating}</p>
<p class="italic text-gray-700"> Price : ${price}</p>
<p class="italic text-gray-700">Description :  ${description.slice(0,30)}</p>

</div>
  </div>`

   
})
cardParent.innerHTML = modify.join(" ")
}

all.addEventListener("click" , allHandler)
groceries.addEventListener("click" , () => groceriesHandler("groceries"))
groceries.addEventListener("click" , () => furnitureHandler("furniture"))