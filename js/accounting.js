"Use strict";
// var submit= document.getElementById("submit");
// submit.addEventListener("click",displayinfo);

// var row=1;

// function displayinfo(){
//     var full_Name=getElementById("full_Name").value;
//     var Department=getElementById("Department").value;
//     var full_Name=getElementById("full_Name").value;
//     var full_Name=getElementById("full_Name").value;

// }



let divID = document.getElementById("tableDiv");
let table = document.createElement("table");



function createTable() {
    divID.appendChild(table);
}


function tableHeader() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let th = document.createElement("th");
    th.textContent = "Department Name";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "# Department";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Total salary";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Average salary of the department";
    tr.appendChild(th);
}

function tableBody() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td = document.createElement("td");
    td.textContent = "Administration";
    tr.appendChild(td);
    let td1 = document.createElement("td");
    td1.textContent = calculateNumberOfDepartment("Administration");
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = calculateTotalSalary("Administration");
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = calculateTotalSalary("Administration") / calculateNumberOfDepartment("Administration");
    tr.appendChild(td3);
}

    createTable();
    tableHeader();
    tableBody();
