// ---requirements---
const inquirer = require("inquirer");
const connection = require("./connection");
class DB {
  constructor(connection) {
    this.connection = connection;
  }
  // -------------------------------View functions-----------------------------------
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  viewAllDepartments() {
    return this.connection.query(
      "SELECT department.id, department.name FROM department;"
    );
  }

  viewAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, role.salary, role.department_id FROM role;"
    );
  }
  // --------------------------------------Add Functions--------------------------------------------
  addNewDepartment() {
    return inquirer
      .prompt([
        {
          name: "addDeptPrompt",
          type: "input",
          message: "Enter the name for the new department.",
        },
      ])
      .then((data) => {
        return this.connection.query("INSERT INTO department SET ?", {
          name: data.addDeptPrompt,
        });
      });
  }

  addNewRole() {
    return inquirer
      .prompt([
        {
          name: "addRoleTitle",
          type: "input",
          message: "Enter the title for the new role.",
        },

        {
          name: "addRoleSalary",
          type: "input",
          message: "Enter the salary for the new role.",
        },

        {
          name: "addRoleDept_id",
          type: "input",
          message: "Enter the Department ID for the new role.",
        },
      ])
      .then((data) => {
        return this.connection.query("INSERT INTO role SET ?", {
          title: data.addRoleTitle,
          salary: data.addRoleSalary,
          department_id: data.addRoleDept_id,
        });
      });
  }
}

module.exports = new DB(connection);
