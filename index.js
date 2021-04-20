// ---Requirements---
const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "EmpTracker_DB",
});


// ---Connect to mysql---
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
   start();
});


// ---Start Prompt ---
// ---use inquirer to prompt the user---
function start(){
  return inquirer.prompt([
    {
      name: "viewAddUpdateRemove",
      type: "list",
      message:
        "Welcome to the Employee Tracker, please make a selection from below.",
      choices: [
        "View employees",
        "Add a new employee",
        "Update an employee record",
        "Remove an employee",
        "View the total budget per department"
      ]
      console.log("success!")
    }


// --- use a switch statement for respone of selection--

//   ]).then(response =>{
// console.log(response)
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }
//   }

// };


// ---answer functions---
// viewEmployees()
// addEmployee()
// updateEmployee()
// removeEmployee()
// viewBudget()

