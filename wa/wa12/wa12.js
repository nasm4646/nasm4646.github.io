//Problem 1


let employeeData = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech" , "designation":"Manager" , "salary": 40000 , "raiseEligible": true},' +
'{ "firstName":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary": 18500 , "raiseEligible": true},' +
'{ "firstName":"Bill" , "department":"HR" , "designation":"Executive" , "salary": 21200 , "raiseEligible": false} ]}';


const employeeObject = JSON.parse(employeeData);

console.log("Problem 1");
console.log(employeeObject);

//Problem 2

let companyData = '{ "companyName":"Tech Stars" , "website":"www.techstars.site" , "employees": ' + JSON.stringify(employeeObject["employees"]) + '}';

const companyObject = JSON.parse(companyData);

console.log("Problem 2");
console.log(companyObject);

//Problem 3

let annaData = '{ "employees" : [' + '{ "firstName":"Anna" , "department":"Tech" , "designation":"Executive", "salary": 25600, "raiseEligible": false }]}';

const annaObject = JSON.parse(annaData);

employeeObject.employees.push(annaObject.employees[0]);
companyObject.employees.push(annaObject.employees[0]);

console.log("Problem 3");
console.log(companyObject.employees[3]);

//Problem 4

totalSalary = companyObject["employees"][0]["salary"] + companyObject["employees"][1]["salary"] + companyObject["employees"][2]["salary"] + companyObject["employees"][3]["salary"]

console.log("Problem 4");
console.log(totalSalary)

//Problem 5

function raise(companyObject) {
  let employees = companyObject.employees;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i]["raiseEligible"] === true) {
      employees[i].salary = employees[i].salary * 1.1, employees[i]["raiseEligible"] = false;
    }
  }
  return companyObject;
}

raise(companyObject);

console.log("Problem 5");
console.log("Example: Sam's salary used to be 40000. It is now:");
console.log(companyObject.employees[0]["salary"]);
console.log("Check out the rest of the salaries now:");
console.log(companyObject);

//Problem 6

function workFromHome(companyObject) {
  let employees = companyObject.employees;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i]["firstName"] === "Anna", employees[i]["firstName"] === "Sam") {
      employees[i].workFromHome = true;
    } else {
      employees[i].workFromHome = false;
    }
    }
    return companyObject;
}

workFromHome(companyObject);

console.log("Problem 6");
console.log("Example: the workFromHome value for Sam is:");
console.log(companyObject.employees[0]["workFromHome"]);
console.log("Check out the rest of the values now:");
console.log(companyObject);