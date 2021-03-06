// --requirements
const mysql = require("mysql");
const util = require("util");

// ---Connect to mysql---
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "empTracker_DB",
});

connection.query = util.promisify(connection.query);

module.exports = connection;
