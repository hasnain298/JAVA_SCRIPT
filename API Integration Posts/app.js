console.log("Hello, World!");

let leftSidePosts= document.querySelector("#left")
let rightSideBar = document.getElementById("main")
let input = document.getElementById("input")
let searchBtn = document.getElementById("searchBtn")

// Functions ==>

async function allPosts() {
    let api = await fetch("https://dummyjson.com/posts");
    let result = await api.json();

    const {posts} = result;
    const showingPostsInUi = posts.map((post) => {
   return `
    <div class="h-[110px] w-full rounded-md bg-white italic jojo" data-post-id="${post.id}" id="pp">
    <h3 class="text-xl font-bold">
       ${post.title}
    </h3>
    <p>${post.body.slice(0,40)}</p>
    </div>`
    })

    leftSidePosts.innerHTML = `<h1 class="text-2xl text-[#0d6efd] fetch">Fetching Data...</h1>`
    setTimeout(() => {
        leftSidePosts.innerHTML = showingPostsInUi.join(" ")
    },1000)

}
allPosts()

 rightSideBar.innerHTML = `<h1 class=" h1h1 italic text-2xl font-bold  text-[#0d6efd] ">Start By Searching for a Post.. <br> <span class="font-medium ">Start Now</span></h1>`
const specificPost = async (elem) => {


let id = elem.dataset.postId
// console.log(id);
let apiRes = await fetch(`https://dummyjson.com/posts/${id}`);
let result = await apiRes.json()
console.log(result);
console.log(rightSideBar);



// setTimeout(() => {
    
rightSideBar.innerHTML = ` <div class="h-[100px] w-[100%]  text-3xl italic font-bold text-[#0d6efd] flex items-center justify-center check">
   <h1>${result.title}</h1>
   </div>
   <hr>
   <div class="h-[180px] w-[100%]  para italic text-lg  flex items-center justify-center ">
   <p>${result.body}</p>
   </div>
   <hr>
   <div class="h-[100px] w-[100%]  flex items-center justify-center gap-10">
    <button class="border w-[100px] h-[40px] rounded-md bg-[#0b5ed7] text-white "><i class="fa-solid fa-thumbs-up icon1"></i> : ${result.reactions.likes}</button>
    <button class="border w-[100px] h-[40px] rounded-md bg-[#0b5ed7] text-white"><i class="fa-solid fa-eye icon2"></i> : ${result.views}</button>
    <button class="border w-[100px] h-[40px] rounded-md bg-[#0b5ed7] text-white"><i class="fa-solid fa-tags icon3"></i> : ${result.tags[0]}</button>
   </div>`
// }, 500);
}

const inputHandler = async () => {
    let searchVal = input.value.toLowerCase();
    // console.log(searchVal);
    let api = await fetch(`https://dummyjson.com/posts/search?q=${searchVal}`);
    let result = await api.json()
    // console.log(result);
    const {posts} = result;
console.log(posts);
const filterData = posts.map((o) => {

    return  `<div class="h-[110px] w-full rounded-md bg-white italic jojo" data-post-id="${o.id}" id="pp">
    <h3 class="text-xl font-bold">
       ${o.title}
    </h3>
    <p>${o.body.slice(0,40)}</p>
    </div>`
    
})

leftSidePosts.innerHTML = filterData.join(" ")
   
     
}

searchBtn.addEventListener("click" ,() =>  inputHandler())

document.addEventListener("click" , (e) => {
if(e.target.classList.contains("jojo")){
    // console.log("ok");
    specificPost(e.target)
    
}
})


