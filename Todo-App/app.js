console.log("Js Is Running!")


let adduserInput = document.getElementById("userInput");
let addBtn  = document.getElementById("addBtn");
let todoList  = document.querySelector("ul")


// console.log(userInput)
// console.log(addBtn)
// console.log(todoList)



function addHandler(){
    // console.log("Mai chlaa--->", adduserInput.value)
   if(adduserInput.value.trim() == ""){
    console.log("by")
    return
    console.log("ok")
   }
   todoList.innerHTML += `
         <li>
        <span class="text">  ${adduserInput.value} </span>
          <div class="icons">
            <span><i <i onclick="deleteHandler(event)"   class="fa-solid fa-trash"></i></span>
            <span><i onclick="editHandler(event)" class="fa-solid fa-pen-to-square"></i></span>
          </div>
        </li> 
    `

adduserInput.value = "";
// todoList = ""
}

// function editHanler(){
// event.target.closest("li")
// }
function editHandler(event) {
    // 1. Find the <li> that was clicked
    let li = event.target.closest("li");
    // 2. Find the span containing the text
    let textSpan = li.querySelector(".text");
    
    // 3. Ask user for new text
    let newValue = prompt("Edit your task:", textSpan.innerText);
    console.log(newValue.trim())
    // 4. Update if they didn't press cancel
    if (newValue !== null && newValue.trim() !== "") {
        textSpan.innerText = newValue.trim();
    }
}



function deleteHandler (){
    event.target.closest("li").remove()
}


addEventListener("click" , addHandler)
// addHandler()