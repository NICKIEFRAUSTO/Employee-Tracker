// ---Requirements---
const db = require("./db");
const inquirer = require("inquirer");
require("console.table");

start();
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
      selected = answer.startPrompt;
      console.log(selected);

      switch (answer.choices) {
        case "View all employees":
          viewEmployees();
          break;

        case "Add an employee record":
          addemployee();
          break;

        case "Update an employee record":
          updateemployee();
          break;

        case "Remove an employee record":
          removeemployee();
          break;

        case "View the total budget per department":
          viewbudget();
          break;

        case "View the total budget per department":
          viewbudget();
          break;

        default:
          "View all employees";
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
