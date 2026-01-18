console.log("Js Is Running!");

let input = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");
let todolist = document.getElementsByTagName("ul")[0]
// console.log(todolist)
let editItem = null;


const response = (icon,title,text) => {

Swal.fire({
  icon: icon,
  title: title,
  text: text,
});
}










function editHandler(e){
editItem = e.parentElement.parentElement.parentElement;
console.log(editItem)
input.value = editItem.textContent.trim()
// console.log(input.value)
}

function addHandler(){

    if(editItem){
   editItem.firstChild.textContent = input.value
   editItem = null;    
      return
     
    }

    if(input.value.trim() === ""){
        // alert("wah shampy wah")
        return response("error" , "Something Went Wrong!", "Please Enter a Value!")
    }

    todolist.innerHTML += ` <li>
        ${input.value}
    
    <div class="icons">
   <span><i onclick="deleteHandler(this)" class="fa-solid fa-trash"></i></span>
   <span><i onclick="editHandler(this)"  class="fa-solid fa-pen-to-square"></i></span>
    </div>
    </li>`

    input.value = ""

}
function deleteHandler(){
event.target.closest("li").remove()
}




function deleteAll(){
    // todolist.innerHTML.remove()
    // console.log(todolist.children)
    if(todolist.children.length == 0){
        response("error" , "There Is Nothing to Delete" , "Please Enter a Value")
    }

    for(let i =0; i < todolist.children.length; i++){
        // console.log(todolist.children[i].value)
        todolist.children[i].remove()
        
        i--
    }
}




//  let li = event.target.closest("li");
//  let text = li.querySelector(".text");


//  let newValue = prompt("Enter Your New Value To Change" , text.innerText);
// //  console.log(newValue.trim())

// if(newValue !== null && newValue.trim() !== ""){
//     text.innerText = newValue
// }