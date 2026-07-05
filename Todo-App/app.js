<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> a2758f347e892e9e577ea00cfd7018a17117d820
document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});
document.getElementById('clear-all-btn').addEventListener('click', clearAllTasks);

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    
    // Beautiful SweetAlert warning instead of silent return
    if (taskText === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Empty Task',
            text: 'Please type something before adding.',
            confirmButtonColor: '#007bff'
        });
        return;
    }

    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    // Single delete
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Beautiful SweetAlert Edit Prompt
    li.querySelector('.edit-btn').addEventListener('click', async function() {
        const textSpan = li.querySelector('.task-text');
        const currentText = textSpan.textContent;
        
        const { value: newText } = await Swal.fire({
            title: 'Modify your task',
            input: 'text',
            inputValue: currentText,
            showCancelButton: true,
            confirmButtonColor: '#007bff',
            cancelButtonColor: '#6c757d',
            inputValidator: (value) => {
                if (!value.trim()) {
                    return 'Task content cannot be empty!';
                }
            }
        });
        
        if (newText) {
            textSpan.textContent = newText.trim();
        }
    });
    
    ul.appendChild(li);
    input.value = '';
}

// Beautiful SweetAlert Delete Confirmation
function clearAllTasks() {
    const ul = document.getElementById('todo-list');
    
    if (ul.children.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'All Clean!',
            text: 'Your to-do list is already empty.',
            confirmButtonColor: '#6c757d'
        });
        return;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: "This will permanently delete all your tasks!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, delete all!'
    }).then((result) => {
        if (result.isConfirmed) {
            ul.innerHTML = '';
            Swal.fire({
                title: 'Deleted!',
                text: 'Your list has been cleared.',
                icon: 'success',
                confirmButtonColor: '#007bff'
            });
        }
    });
}
<<<<<<< HEAD
>>>>>>> a2758f3 (Class Assignment)
=======
>>>>>>> a2758f347e892e9e577ea00cfd7018a17117d820
