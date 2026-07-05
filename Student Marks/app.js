console.log("Js Is Running!");

let check = document.getElementById("check");
const studentArr = [{
    studentName : `Muhammad Hasnain`,
    rollNo : `#446863`,
    semesters : {
        1: {
            math : 90,
            physics : 87,
            computer : 72,
            english : 85,
            urdu : 91,
            islamiat : 82
        },
        2 :{
            math : 87,
            physics : 84,
            computer : 79,
            english : 83,
            urdu : 71,
            islamiat : 42
        },
        3: {
            math : 60,
            physics : 77,
            computer : 32,
            english : 45,
            urdu : 51,
            islamiat : 62
        },

        4 : {
            math : 90,
            physics : 87,
            computer : 72,
            english : 85,
            urdu : 91,
            islamiat : 82
        },
        5: {
            math : 60,
            physics : 47,
            computer : 62,
            english : 25,
            urdu : 41,
            islamiat : 32
        }
    }
},{},{},{},{}]

const func = () => {
    const studentMarks = studentArr.map((studentArr,index) => {
    return `<div>
    <p>${studentArr}</p>
 </div>
 <div>
    <p>${studentArr}</p>
 </div>`
    })


    check.innerHTML = studentMarks
}

func()