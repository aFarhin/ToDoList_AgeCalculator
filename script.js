
// TO DO LIST

let addbutton = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");
let input = document.getElementById("inputfield");
let deletes = document.getElementById("del");
let deletesAll = document.getElementById("delAll")

addbutton.addEventListener('click', function () {
    let para = document.createElement('button');
    para.innerText = input.value;
    para.style.background = 'pink'
    para.style.color = 'black'
    para.style.marginTop = '20px'
    container.appendChild(para);
    input.value = '';

    deletesAll.addEventListener('click', function () {
        container.removeChild(para);
    })

    para.addEventListener('click', function () {
        para.style.textDecoration = 'line-through';
        deletes.addEventListener('click', function () {
            container.removeChild(para);

        })
    })
})


//  AGE CALCULATOR


const dobInput = document.getElementById('dob');
const ageOutput = document.getElementById('age');
let btnClick = document.getElementById("btn")

dobInput.addEventListener('input', function () {
    const dob = new Date(dobInput.value);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    let month = now.getMonth() - dob.getMonth();
    let day = now.getDate() - dob.getDate();


    let leapYear = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);



    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (leapYear(dob.getFullYear())) {
        daysInMonth[1] = 29;
    } else {
        daysInMonth[1] = 28;
    }

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
        month = 12 + month;
    }

    if (day < 0) {
        month--;
        day = daysInMonth[dob.getMonth() - 1] - dob.getDate() + now.getDate();
    }
    btnClick.addEventListener('click', function () {
        ageOutput.innerText = `Age: ${age} years, ${month} months, and ${day} days`;
    })


});
