console.log("Chal Gaya..");

let left  = document.getElementById("left-items");
let main = document.getElementById("main")
let searchBtn = document.getElementById("btn")
let input = document.getElementById("input")

// We have to make only one function for the entire  recipes showing in left bar;
// Functions 

const itemFn = (recipes) => {
    return `<div class="h-[140px] w-[100%]   mt-2 rounded-lg p-1 flex items-center justify-around bg-white cursor-pointer item" data-recipe-id="${recipes.id}">
    <div class="h-[90px] w-[90px] border border-white rounded-full">
        <img src=${recipes.image_url}
            alt="" class="h-full w-full  rounded-full">
    </div>
    <div class="h-[100px] w-[78%] border border-white p-3">
        <h2 class=" text-2xl font-bold italic">
            ${recipes.title.slice(0,40)}
        </h2>
        <p class=" w-full">${recipes.publisher}</p>
    </div>
</div>`
}


async function startApp() {
    let api = await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=burger");
    let result = await api.json();
    // console.log(result);

    const {data:{recipes}} = result;
    // console.log(recipes);
    
    const allHtmlForUi = recipes.map((recipe) => itemFn(recipe));

 left.innerHTML = allHtmlForUi.join(" ")
} 
startApp()


main.innerHTML = `<h1 class="text-center text-3xl text-gray-500 italic mt-4">Start Searching for a Recipe...</h1>`

const particularItem = async (element) => {
let id = element.dataset.recipeId
// console.log(id);

let apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
let result  = await apiRes.json();
// console.log(result);
const {data:{recipe}} = result;
// console.log(recipe);

main.innerHTML = ` <div class="h-[100px] w-[full]  flex flex-col items-center justify-center">
           <h1 class="text-2xl italic font-bold">
            ${recipe.title}
        </h1>
        <p class="text-lg italic"> ${ recipe.publisher}</p>
            </div>

            <!-- image  -->
             <div class="h-[350px]  w-full  flex items-center justify-center p-3">
            <div class="h-full   rounded-lg w-[40%] ">
        <img src="${recipe.image_url}" alt="" class="h-full w-full rounded-md">
            </div>
             </div>
             <!-- image end  -->
             <div class="h-[160px] w-full flex items-center justify-center gap-3" >
             <button class="h-[50px] w-[170px]  rounded-md bg-[#59359a] text-white cursor-pointer ">Cook-Time : ${recipe.cooking_time} min</button>
             <button class="h-[50px] w-[170px]  rounded-md bg-[#59359a] text-white cursor-pointer">Servings : ${recipe.servings} Person</button>
             <button class="h-[50px] w-[170px]  rounded-md bg-[#59359a] text-white cursor-pointer">Reviews : 6365</button>
             </div>`



}

const searchHandler =  async () => {
let searchValue = input.value;
// console.log(searchValue);
if(searchValue == ""){
    alert("Please Enter a Value!")
    return 
}
 let apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchValue}`)
    let result = await apiRes.json();
    // console.log(result);
    const {data : {recipes}} = result;
    
    const allHtmlForUi = recipes.map((recipe) => itemFn(recipe) )

   if(recipes.length > 0){
     left.innerHTML = allHtmlForUi.join(" ")
   }
   else{
    left.innerHTML = `<h1 class="m-5 italic text-xl font-bold"> No Match Items Found!</h1>`
   }
  
   
}
// console.log(searchBtn);


searchBtn.addEventListener("click" , () => searchHandler())
document.addEventListener("click" , (e) => {
    if(e.target.classList.contains("item")){
     particularItem(e.target)        
    }
})



