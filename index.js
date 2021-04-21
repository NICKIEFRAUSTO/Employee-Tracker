// ---Requirements---
const db = require("./db");
const inquirer = require("inquirer");
const connection = require("./connection");
require("console.table");
connection.connect((err) => {
  if (err) throw err;
  start();
});
// ---Start Prompt ---
// ---use inquirer to prompt the user---
function start() {
  inquirer
    .prompt([
      {
        name: "initialPrompt",
        type: "list",
        message:
          "Welcome to the Employee Tracker, please make a selection from below.",
        choices: [
          "View all employees",
          "View all departments",
          "View all roles",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee",
          "Remove an employee",
          "View the total budget per department",
          "Exit",
        ],
      },
      // / --- use a switch statement for response of selection--
    ])
    .then((answer) => {
      selected = answer.initialPrompt;
      console.log(selected);

      switch (selected) {
        case "View all employees":
          viewEmployees();
          break;

        case "View all departments":
          viewDepartments();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update an employee":
          updateEmployee();
          break;

        case "Remove an employee":
          removeEmployee();
          break;

        case "View the total budget per department":
          viewBudget();
          break;

        case "Exit":
          connectionEnd();
          break;
      }
    });
}

// ---answer functions---
async function viewEmployees() {
  const employees = await db.findAllEmployees();
  console.table(employees);
  start();
}

async function viewDepartments() {
  const departments = await db.viewAllDepartments();
  console.table(departments);
  start();
}

async function viewRoles() {
  const roles = await db.viewAllRoles();
  console.table(roles);
  start();
}
async function addDepartment() {
  const dept = await db.addNewDepartment();
  console.table(dept);
  start();
}

async function addRole() {
  const role = await db.addNewRole();
  console.table(role);
  start();
}

async function addEmployee() {
  const employee = await db.addNewEmployee();
  console.table(employee);
  start();
}
// updateEmployee()
// removeEmployee()
// viewBudget()
