"Use strict";


let divID = document.getElementById("tableDiv");
let table = document.createElement("table");



function createdTable() {
    divID.appendChild(table);
}


function tableHeader() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let th = document.createElement("th");
    th.textContent = "Department";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "# Employees";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Total salary";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Average salary";
    tr.appendChild(th);
}

function tableFrame() {
    let tr1 = document.createElement("tr");
    table.appendChild(tr1);
    let td = document.createElement("td");
    td.textContent = "Administration";
    tr1.appendChild(td);
    let td1 = document.createElement("td");
    td1.textContent = numEmployees("Administration");
    tr1.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = Total_salary("Administration");
    tr1.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = Total_salary("Administration") / numEmployees("Administration");
    tr1.appendChild(td3);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    let tr2 = document.createElement("tr");
    table.appendChild(tr2);
    td = document.createElement("td");
    td.textContent = "Marketing";
    tr2.appendChild(td);
    td1 = document.createElement("td");
    td1.textContent = numEmployees("Marketing");
    tr2.appendChild(td1);
    td2 = document.createElement("td");
    td2.textContent = Total_salary("Marketing");
    tr2.appendChild(td2);
    td3 = document.createElement("td");
    td3.textContent = Total_salary("Marketing") / numEmployees("Marketing");
    tr2.appendChild(td3);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    let tr3 = document.createElement("tr");
    table.appendChild(tr3);
    td = document.createElement("td");
    td.textContent = "Development";
    tr3.appendChild(td);
    td1 = document.createElement("td");
    td1.textContent = numEmployees("Development");
    tr3.appendChild(td1);
    td2 = document.createElement("td");
    td2.textContent = Total_salary("Development");
    tr3.appendChild(td2);
    td3 = document.createElement("td");
    td3.textContent = Total_salary("Development") / numEmployees("Development");
    tr3.appendChild(td3);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    let tr4 = document.createElement("tr");
    table.appendChild(tr4);
    td = document.createElement("td");
    td.textContent = "Finance";
    tr4.appendChild(td);
    td1 = document.createElement("td");
    td1.textContent = numEmployees("Finance");
    tr4.appendChild(td1);
    td2 = document.createElement("td");
    td2.textContent = Total_salary("Finance");
    tr4.appendChild(td2);
    td3 = document.createElement("td");
    td3.textContent = Total_salary("Finance") / numEmployees("Finance");
    tr4.appendChild(td3);


}


////////////////////////////////////////////////////////////////////////////////////////////////////////

function numEmployees(Department) {
    let numDep = 0;
    let emplo = localStorage.getItem("emploe");
    console.log(emplo);
    let employee = JSON.parse(emplo);
    switch (Department) {
        case "Administration":
            for (let X = 0; X < employee.length; X++) {
                if (employee[X].Department == Department) {
                    numDep++;
                }
            }
            break;
        case "Marketing":
            for (let X = 0; X < employee.length; X++) {
                if (employee[X].Department == Department) {
                    numDep++;
                }
            }
            break;
        case "Development":
            for (let X = 0; X < employee.length; X++) {
                if (employee[X].Department == Department) {
                    numDep++;
                }
            }
            break;
        case "Finance":
            for (let X = 0; X < employee.length; X++) {
                if (employee[X].Department == Department) {
                    numDep++;
                }
            }
            break;
        default: null;
            break;
    }
    return numDep;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Total_salary(Department) {
    let totalSalary=0;
    let emplo = localStorage.getItem("emploe");
    let employee = JSON.parse(emplo);
    switch (Department) {
        case "Administration":
            for (let X = 0; X < employee.length; X++) {
             if (employee[X].Department == Department) {
                 totalSalary+=employee[X].salary;
             }
            }
        break;
        case "Marketing":
            for (let X = 0; X < employee.length; X++) {
             if (employee[X].Department == Department) {
                 totalSalary+=employee[X].salary;
             }
            }
        break;
        case "Development":
            for (let X = 0; X < employee.length; X++) {
             if (employee[X].Department == Department) {
                 totalSalary+=employee[X].salary;
             }
            }
        break;
        case "Finance":
            for (let X = 0; X < employee.length; X++) {
             if (employee[X].Department == Department) {
                 totalSalary+=employee[X].salary;
             }
            }
        break;    
        default:null;
            break;
    }
    return totalSalary;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
function totalTable() {
    let lastRow =document.createElement("lastRow");
    lastRow.setAttribute("id","tableFooter");
    table.appendChild(lastRow);
    divID.appendChild(lastRow);
    let tr=document.createElement("tr");
    tr.setAttribute("id","styleTr");
    table.appendChild(tr);
    let th=document.createElement("th");
    th.textContent="Total";
    tr.appendChild(th);
    
    th=document.createElement("th");
    th.textContent=numEmployees();
    tr.appendChild(th);
    
    th=document.createElement("th");
    th.textContent=Total_salary();
    tr.appendChild(th);
    
    th=document.createElement("th");
    th.textContent=Total_salary()/numEmployees();
    tr.appendChild(th);
}
///////////////////////////////////////////////////////////////////////////
function totalNumDepartment() {
    let emplo = localStorage.getItem("emploe");
    let employee = JSON.parse(emplo);
    return employee.length;}
////////////////////////////////////
function totalSalaryDepartment() {
    let totalSalary=0;
    let emplo = localStorage.getItem("emploe");
    let employee = JSON.parse(emplo);
    for (let X = 0; X < employee.length; X++) {
        totalSalary+=employee[X].salary;
       }  
    return  totalSalary;
}




createdTable();
tableHeader();
tableFrame();
totalTable();
