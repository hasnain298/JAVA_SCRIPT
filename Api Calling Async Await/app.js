console.log("Js Is Running!");

// Variables ===>

let cardParent = document.querySelector(".cardParent")
let all = document.getElementById("all")
let groceries = document.getElementById("groceries")
let furniture = document.getElementById("Furniture");
let accessories = document.getElementById("Accessories")
let fragnances = document.querySelector("#fragnances")
let input = document.getElementById("input")
let btn = document.getElementById("btn")



// fetch(`https://dummyjson.com/products?limit=194`).then((res)=>res.json()).then((result) => console.log(result))



// Functions ===>
const startApp = async () => {
    let api = await fetch(`https://dummyjson.com/products?limit=194`);
   let result = await  api.json()
  

 let data =   result.products.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
  return `<div class="card h-[420px] w-[300px]  mt-10 m-3 flex flex-col gap-3 shadow-gray-800 shadow-md rounded-md ">
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
startApp();
},2000)



const allHandler = async() => {
const api =  await fetch(`https://dummyjson.com/products?limit=194`)
const result = await api.json()
// console.log(result);
let data =   result.products.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
  return `<div class="card h-[390px] w-[300px]  m-3 flex flex-col gap-3 shadow-gray-800 shadow-md rounded-md mt-10">
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
    // console.log(Category);
    
const api = await fetch(`https://dummyjson.com/products?limit=194`);
let result = await api.json();
let filterdItems = result.products.filter((item) => {
if(item.category.toLowerCase() === Category.toLowerCase()){
    return item 

    
}
})
let modify = filterdItems.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
// console.log(item);

return `<div class="card h-[390px] w-[300px]  shadow-gray-800 shadow-md rounded-md  m-3 flex flex-col gap-3 mt-10">
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


const api = await fetch(`https://dummyjson.com/products?limit=194`);
let result = await api.json();
let filterdItems = result.products.filter((item) => {
if(item.category.toLowerCase() === Category.toLowerCase()){
    return item 


}
})


let modify = filterdItems.map((item) => {
    const {title,brand,price,rating,description,images,category} = item;
// console.log(item);

return `<div class="card h-[390px] w-[300px] shadow-gray-800 shadow-md rounded-md m-3 flex flex-col gap-3 mt-10">
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

const accessoriesHandler = async(Category) => {
  const api = await fetch(`https://dummyjson.com/products?limit=194`);
  let result = await api.json();
  let filterdItems = result.products.filter((item) => {
  if(item.category.toLowerCase() === Category.toLowerCase()){
      return item 
  
  
  }
  })
  
  
  let modify = filterdItems.map((item) => {
      const {title,brand,price,rating,description,images,category} = item;
  // console.log(item);
  
  return `<div class="card h-[390px] w-[300px] shadow-gray-800 shadow-md rounded-md m-3 flex flex-col gap-3 mt-10">
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

const fragnancesHandler = async(Category) => {
  const api = await fetch(`https://dummyjson.com/products?limit=194`);
  let result = await api.json();
  let filterdItems = result.products.filter((item) => {
  if(item.category.toLowerCase() === Category.toLowerCase()){
      return item 
  }
  })
  
  
  let modify = filterdItems.map((item) => {
      const {title,brand,price,rating,description,images,category} = item;
  // console.log(item);
  
  return `<div class="card h-[390px] w-[300px] shadow-gray-800 shadow-md rounded-md m-3 flex flex-col gap-3 mt-10 ">
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

const searchHandler = async() => {
  const api = await fetch("https://dummyjson.com/products?limit=194");
  const result = await api.json();
  // console.log(result);
 const filter = result.products.filter((item) => {
  if(item.title.toLowerCase().includes(input.value.toLowerCase())){
    return item
    
  }
 })
 let modify = filter.map((item) => {
  const {title,brand,price,rating,description,images,category} = item;
// console.log(item);

return `<div class="card h-[390px] w-[300px] shadow-gray-800 shadow-md rounded-md m-3 flex flex-col gap-3 mt-10">
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
if(modify.length > 0){
  cardParent.innerHTML = modify.join(" ")
}else{
  cardParent.innerHTML = `<h1 class="text-2xl" italic text-center mt-25 >No Match Items Found</h1>`
}
}



// Event Listeners
all.addEventListener("click" , allHandler)
groceries.addEventListener("click" , () => groceriesHandler("groceries"))
furniture.addEventListener("click" , () => furnitureHandler("furniture"))
accessories.addEventListener("click" , () => accessoriesHandler("kitchen-accessories"))
fragnances.addEventListener("click", () => {fragnancesHandler("fragrances")});
input.addEventListener("input" , searchHandler)