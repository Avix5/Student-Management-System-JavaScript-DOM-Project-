let form = document.getElementById("studentForm");
let studentname= document.getElementById("studentName");
// let studentid= document.getElementById("studentId");
let studentid= document.getElementById("studentId");
let studentEmail= document.getElementById("studentEmail");
let studentcource= document.getElementById("studentCourse");
let btn=document.getElementById("submitBtn");
// let clearBtn=getElementById("clearBtn");



btn.addEventListener("click",function(e){
     e.preventDefault();
    // console.log(studentname.value,studentid.value,studentEmail.value,studentcource.value);
    let tbody=document.getElementById("studentTable");
    let tr= document.createElement("tr");
    tr.innerHTML=`
    <td>${studentname.value}</td>
    <td>${studentid.value}</td>
    <td>${studentEmail.value}</td>
    <td>${studentcource.value}</td>
    <td><button class="del">Delete</button></td>
    <td><button class="del">Edit</button></td>
    `
    tbody.appendChild(tr);
    form.reset();
})

