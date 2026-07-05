console.log("Js Is Running!");

let input = document.getElementById("input")
let addbtn = document.getElementById("addbtn")
let todolist = document.getElementById("todo-list")

function addHandler() {
if(input.value.trim() === ""){
    console.log("Kahan Bhai");
    return alert("Please Enter a Task First")
    
}

let searchVal = input;
todolist.innerHTML += ` <li class="flex items-center justify-between italic mb-1 h-[30px] shadow p-2" >
<span class="text text-lg">${searchVal.value}</span>
<div class="flex gap-3">
  <span><i onclick="deleteHandler(event)" class="fa-solid fa-trash text-red-600" id="delete"></i></span>
  <span><i onclick="editHandler(event)" class="fa-solid fa-pen-to-square text-green-500" id="edit"></i></span>
</div>
</li> `

searchVal.value = " "
}

function editHandler(event) {
    let li = event.target.closest("li");
    console.log(li);
    let textSpan = li.querySelector(".text");
    console.log(textSpan);
    let newValue = prompt("Edit Value...." , textSpan.innerText);
    if(newValue.trim() !== " " || newValue !== null) {
        textSpan.innerText = newValue.trim()
    }
    
    
    
}


function deleteHandler (event) {
 let li = event.target.closest("li").remove()
 console.log(li);
 
}

addbtn.addEventListener("click" , addHandler)
// deletebtn.addEventListener("click" , deleteHandler)
