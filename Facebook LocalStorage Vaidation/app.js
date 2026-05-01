console.log("Js Is Running!");


let firstName = document.getElementById("fn");
let lastName = document.getElementById("ln");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let password = document.getElementById("password");
let email = document.getElementById("email");
let gender = document.getElementsByName("gender");
let handlerBtn = document.getElementById("btn-add")


let users = []

const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message,
  });
};

const func = () => {

  if (firstName.value.trim() == "" || lastName.value.trim() == "" || day.value.trim() == "" || month.value.trim() == "" || year.value.trim() == "" || password.value.trim() == "" || email.value.trim() == "") {
    console.log("ok")
    return sweety("error", "Something Went Wrong!", "Please Enter All Feilds")
  }


  if (password.value.length < 8) {
    return sweety("error", "Something Went Wrong!", "Password Must Be 8 Chracters Long!")
  }
  let userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    day: day.value,
    month: month.value,
    year: year.value,
    password: password.value,
    email: email.value,
    gender: gender.value





  }
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userObj.gender = gender[i].value
    }
  }


  localStorage.setItem("users", JSON.stringify(userObj)
  )



















  users.push(userObj);
  console.log(userObj);

  // sweety("success" , "Succesfully SignUp" , "Congratulations")
    sweety("success", "Signup Done", "Congratulations! signup successfully!")
  

    firstName.value = ""
lastName.value = ""
day.value = ""
month.value = ""
year.value = ""
password.value = ""
email.value = ""
gender.value = ""
  

    
}



  handlerBtn.addEventListener(`click` , func)




