console.log("Js Is Running!");

let div = document.querySelector("#main")
let btn = document.querySelector("#btn")
const dataArr = [
    {
        name : "Hasnain",
        Faculty : "CS",
        age : 17,

    },
    {
        name : "Hasan",
        Faculty : "BBA",
        age : 22,
        
    },
    {
        name : "John Doe",
        Faculty : "MIT",
        age : 72,
        
    }
]
const showDataInUI = () => {
    const getDataThroughMap = dataArr.map((user,index) => {
  return `<div>
   <p> ${user.name}</p>
   <p> ${user.Faculty}</p>
   <p> ${user.age}</p>
   
   
    </div>`

    
})
div.innerHTML = getDataThroughMap.join(" ")
// console.log(getDataThroughMap)
}
btn.addEventListener("click" , showDataInUI)




// let dataArr = ["banana" , "mango" , "apple" , "cherry" ]
// const getDataThroughFilter = dataArr.filter((o) => {
//     console.log(o)
//     return o
    
// })

// console.log(getDataThroughFilter)







// let dataArr = [
//     {
//         firstName : "Muhammad",
//         lastName : "Hasnain",
//         Faculty : "CS",
//         Age : 17
//     },{
//        firstName : "Muhammad",
//         lastName : "Umair",
//         Faculty : "CS",
//         Age :27 
//     },{
//         firstName : "Muhammad",
//         lastName : "Haris",
//         Faculty : "CS",
//         Age : 14
//     }
// ]
// let div = document.querySelector("#main")
// const getDataThroughMap = dataArr.map((user,index) => {
//     return `<div>
//     <p>${user.firstName} ${user.lastName}</p>   
//     <p>${user.Faculty}</p>   
//     <p>${user.Age}</p>   
//     </div>`
// })
// div.innerHTML = getDataThroughMap
// console.log(getDataThroughMap)