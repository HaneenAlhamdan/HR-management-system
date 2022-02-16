"Use strict";

var emploe = [];
function Emploees(Full_Name, Department, Level, Image, Salary) {
    this.Employee_ID = 0;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    this.Salary = 0;
    emploe.push(this);


}

Emploees.prototype.getSalary = function () {
    let maximm;
    let minimm;

    if (this.Level == "Senior") {
        maximm = 2000;
        minimm = 1500;
    }
    else if (this.Level == "Mid-Senior") {
        maximm = 1500;
        minimm = 1000;
    }
    else (this.Level == "Junior")
    {
        maximm = 1000;
        minimm = 500;
    }
    console.log(maximm, minimm)
    let totalsal = gtrndinteger(minimm, maximm);
    this.Salary = totalsal - totalsal * 0.075;

}

function gtrndinteger(minimm, maximm) {
    return Math.floor(Math.random() * (maximm - minimm + 1)) + minimm;
}

////////////////////////////////////////////////////////////////////////
Emploees.prototype.generateUniqueID = function () {
    this.Employee_ID = 1000 + emploe.length;



}
Emploees.prototype.gg = function () {
    console.log(this.Full_Name);

}

//////////////////////////////////////////////////////////////////////////////
//   employee_id= function(start,range){
//     let getRandoom = Math.floor((Math.random() * range)+ start);
//     while( Employee_ID  > range){
//         getRandoom = Math.floor((Math.random() * range)+ start);
//     }
//     return getRandoom;

// };

// console.log(employee_id(1000,9000));

/////////////////////////////////////////////////////////////////////////////
let Ghazi_Samer = new Emploees("Ghazi Samer", "Administration ", "Senior", "URL");
Ghazi_Samer.generateUniqueID();
let Lana_Ali = new Emploees("Lana Ali", "Finance ", "Senior", "URL");
Lana_Ali.generateUniqueID();
let Tamara_Ayoub = new Emploees("Tamara Ayoub", "Marketing ", "Senior", "URL");
Tamara_Ayoub.generateUniqueID();
let Safi_Walid = new Emploees("Safi Walid", "Administration ", "Mid-Senior", "URL");
Safi_Walid.generateUniqueID();
let Omar_Zaid = new Emploees("Omar Zaid", "Development ", "Senior", "URL");
Omar_Zaid.generateUniqueID();
let Rana_Saleh = new Emploees("Rana Saleh", "Development ", "Junior", "URL");
Rana_Saleh.generateUniqueID();
let Hadi_Ahmad = new Emploees("Hadi Ahmad", "Finance ", "Mid-Senior", "URL");
Hadi_Ahmad.generateUniqueID();

Hadi_Ahmad.gg();



console.log(emploe);
Emploees.prototype.render = function () {


    this.getSalary();


    document.write(`<h4 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; ">Employee ID : ${this.Employee_ID} --- Employee name :${this.Full_Name} --- Employee salary : ${this.Salary}</h4>`);
};

for (let x = 0; x < emploe.length; x++) {
    console.log(emploe[x]);
    emploe[x].render();
    emploe[x].showCard();
    emploe[x].gg();

};

//////////////////////////////////////////////////////////////////////////////
//  let employee_id  = function(start,range){
//     let getRandoom = Math.floor((Math.random() * range)+ start);
//     while( employee_id  > range){
//         getRandoom = Math.floor((Math.random() * range)+ start);
//     }
//     return getRandoom;

// };

// console.log(employee_id(1000,9000));


////////////////////////////////////////////////////////////////////////////////////////
function clickhand(event) {
    event.preventDefault();

    var Full_Name = event.target.full_Name.value;
    var Department = event.target.department.value;
    var Image_link = event.target.imag.value;
    var Level = event.target.level.value;



    let new_employee = new emploees(Full_Name, Department, Level, Image_link);

    new_employee.generateUniqueID();
    new_employee.render();




    console.log(new_employee);
}
var form = document.getElementById('form');

form.addEventListener('submit', clickhand);


/////////////////////////////////////////////////////////////////////////////////////////


Emploees.prototype.showCard = function () {
    console.log("hello");
    // let divToShow =document.createElement("div");
    // divToShow.id="Show";
    // let imageE=document.createElement("img");
    //  imageE.setAttribute("src",this.Image);
    //  divToShow.appendChild(imageE); 
    // let title = document.createElement("h3");
    //  title.textContent="Name :"+this.Full_Name;
    //  divToShow.appendChild(title);
    //  let title1=document.createElement("h3");
    //  title1.textContent="ID :"+this.employeeID;
    //  divToShow.appendChild(title1);
    //  let title2=document.createElement("h3");
    //  title2.textContent="Department :"+this.Department;
    //  divToShow.appendChild(title2);
    //  let title3=document.createElement("h3");
    //  title3.textContent="level :"+this.Level;
    //  divToShow.appendChild(title3);


    //  formID.appendChild(divToShow);

}
/////////////////////////////////////////////////////////////////////////////////////////


// var submit=document.getElementById("submit");
// submit.addEventListener("click", displayDatails);

// var card=1;

// function displayDatails(){
//     var Full_Name= document.getElementById("Full_Name").value;
//     var department= document.getElementById("department").value;
//     var imag= document.getElementById("imag").value;
//     var level= document.getElementById("level").value;
//     // var Salary= document.getElementById("getSalary()").value;

//     document.getElementById('result').innerHTML=(`${Full_Name} + ${department} + ${imag} + ${level}`);

/////////////////////////////////////////////////////////////////////////////////////

