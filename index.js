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
          "Add an employee record",
          "Update an employee record",
          "Remove an employee record",
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

        case "Add an employee record":
          addEmployee();
          break;

        case "Update an employee record":
          updateEmployee();
          break;

        case "Remove an employee record":
          removeEmployee();
          break;

        case "View the total budget per department":
          viewBudget();
          break;

        case "Exit":
          exit();
          break;

        default:
          viewemployee();
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

// addEmployee()
// updateEmployee()
// removeEmployee()
// viewBudget()
