var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: ""
  });
  
connection.connect(function(err) {
if (err) throw err;
startQuestions();
});

function startQuestions() {

    inquirer
    .prompt([
      {
        type: "input",
        message: "View Product Sales by Department",
        name: "view_sales"
      },
      {
        type: "input",
        message: "Create New Department",
        name: "create_dept"
      }
    ])
    .then(function(answer) {
        answer.view_sales;
        answer.create_dept;

        //functions         
    });
}
