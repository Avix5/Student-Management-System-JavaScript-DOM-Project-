let form = document.getElementById("studentForm");
let studentname= document.getElementById("studentName");
// let studentid= document.getElementById("studentId");
let studentid= document.getElementById("studentId");
let studentEmail= document.getElementById("studentEmail");
let studentcource= document.getElementById("studentCourse");
let btn=document.getElementById("submitBtn");
// let clearBtn=getElementById("clearBtn");
let editRow=null;




btn.addEventListener("click",function(e){
     e.preventDefault();
        let tbody=document.getElementById("studentTable");
         if(editRow){
        editRow.children[0].innerText=studentname.value;
        editRow.children[1].innerText=studentid.value;
        editRow.children[2].innerText=studentEmail.value;
        editRow.children[3].innerText=studentcource.value;
        editRow = null;
        btn.innerText="Add student"
        
    }else{
            let tr= document.createElement("tr");
    tr.innerHTML=`
    <td>${studentname.value}</td>
    <td>${studentid.value}</td>
    <td>${studentEmail.value}</td>
    <td>${studentcource.value}</td>
    <td><button class="del">Delete</button></td>
    <td><button class="edit">Edit</button></td>
    `
    tbody.appendChild(tr);


    let editbtn= tr.querySelector(".edit");
    editbtn.addEventListener("click",function(e){
    e.preventDefault();
    console.log("clicked edit")

    studentname.value=tr.children[0].innerText;
    studentid.value = tr.children[1].innerText;
    studentEmail.value = tr.children[2].innerText;
    studentcource.value = tr.children[3].innerText;
    editRow=tr
    btn.innerText="Save Changes"
    
   

});
    }
    
    form.reset();
 

});



