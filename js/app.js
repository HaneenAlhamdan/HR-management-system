"Use strict";

var emploe = [ ] ;
function emploees(Employee_ID , Full_Name , Department , Level, Image ,Salary )
{
    this.Employee_ID= Employee_ID;
    this.Full_Name=Full_Name;
    this.Department= Department;
    this.Level= Level;
    this.Image=Image;
    this.Salary=0;
    emploe.push(this);


}

emploees.prototype.getSalary = function()
{
    let maximm;
    let minimm;

    if (this.Level == "Senior")
    {
        maximm=2000;
        minimm=1500;
    }
    else if(this.Level == "Mid-Senior")
    {
        maximm=1500;
        minimm=1000;   
    }
    else (this.Level == "Junior")
    {
        maximm=1000;
        minimm=500;   
    }
  let totalsal= gtrndinteger(minimm,maximm);
  this.Salary = totalsal - totalsal * 0.075 ;

}

function gtrndinteger (minimm,maximm){
    return Math.floor(Math.random() * (maximm- minimm +1)) + minimm ;
}


let Ghazi_Samer = new emploees (1000 ,"Ghazi Samer" , "Administration ", "Senior" ,"URL");
let Lana_Ali = new emploees (1001 ,"Lana Ali" , "Finance ", "Senior" ,"URL");
let Tamara_Ayoub = new emploees (1002 ,"Tamara Ayoub" , "Marketing ", "Senior" ,"URL");
let Safi_Walid = new emploees (1002 ,"Safi Walid" , "Administration ", "Mid-Senior" ,"URL");
let Omar_Zaid = new emploees (1004 ,"Omar Zaid" , "Development ", "Senior" ,"URL");
let Rana_Saleh = new emploees (1005 ,"Rana Saleh" , "Development ", "Junior" ,"URL");
let Hadi_Ahmad = new emploees (1006 ,"Hadi Ahmad" , "Finance ", "Mid-Senior" ,"URL");



 

 console .log(emploe);
 for(let x=0 ; x< emploe.length; x++)
 {
    emploees. prototype. render = function(){
        document.write(`<h4 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; "> Employee name :${this.Full_Name} --- Employee salary : ${this.Salary}</h4>`);
        };

     emploe[x].getSalary();
     emploe[x].render();
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
function clickhand(event){
    event.preventDefault()

    var Full_Name= event.target.full_Name.value;
    
   

    var Department= event.target.department.value;
   
    var Image_link= event.target.imag.value;
   
    

    var Level= event.target.level.value;

 var Salary= event.target.getSalary().value;

    let new_employee = new emploees (employee_id ,Full_Name ,Department, Level ,Image_link , getSalary());
   

    
   
   console.log(new_employee);
}
var form =document.getElementById('form')

form.addEventListener('submit', clickhand)


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

   

// }