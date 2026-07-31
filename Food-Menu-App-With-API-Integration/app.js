console.log("Chal Gaya..");

let left  = document.getElementById("left-items")

// We have to make only one function for the entire  recipes showing in left bar
// Functions 

const itemFn = (recipes) => {
    return `<div class="h-[140px] w-[100%]   mt-2 rounded-lg p-1 flex items-center justify-around bg-white cursor-pointer">
    <div class="h-[90px] w-[90px] border border-white rounded-full">
        <img src=${recipes.image_url}
            alt="" class="h-full w-full  rounded-full">
    </div>
    <div class="h-[100px] w-[78%] border border-white p-3">
        <h2 class=" text-2xl font-bold italic">
            ${recipes.title.slice(0,50)}
        </h2>
        <p class=" w-full">${recipes.publisher}</p>
    </div>
</div>`
}





async function startApp() {
    let api = await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=burger");
    let result = await api.json();
    console.log(result);

    const {data:{recipes}} = result;
    console.log(recipes);
    
    const allHtmlForUi = recipes.map((recipe) => itemFn(recipe));

 left.innerHTML = allHtmlForUi.join(" ")
} 
// startApp()
