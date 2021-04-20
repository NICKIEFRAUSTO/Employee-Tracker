const mysql = require("mysql");

const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Emp_Tracker",
});

const start = () => {
  inquirer.prompt([
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
        "View the total budget per department",
      ],
    },
    console.log("success!"),
  ]);
};

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  start();
});
