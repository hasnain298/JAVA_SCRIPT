console.log("Js Is Running!")


function fn(e){
    e.preventDefault()
    document.getElementById("display-name").innerText = "Name : " +  document.getElementById("in-name").value
    document.getElementById("display-email").innerText = "Email : " +  document.getElementById("in-email").value
    document.getElementById("display-number").innerText = "Phone Number : " +  document.getElementById("in-number").value
    document.getElementById("display-idCard").innerText = "Id : " +  document.getElementById("in-idCard").value

    let userImgInput = document.getElementById("in-img");
    let displayImg = document.getElementById("display-img");

    // 1. Check if a file was actually selected
    if (userImgInput && userImgInput.files && userImgInput.files[0]) {
        let reader = new FileReader();

        // 2. Define WHAT happens when the file is done reading
        reader.onload = function(event) {
            displayImg.src = event.target.result; // Use the result of the read
            displayImg.style.display = "block";
        };

        // 3. Start reading the file
        reader.readAsDataURL(userImgInput.files[0]);
    }

}


