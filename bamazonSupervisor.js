var inquirer = require("inquirer");
var connection = require("./connection");
var cTable = require('console.table');
  
connection.connect(function(err) {
  if (err) throw err;
  startQuestions();
});

function startQuestions() {
  inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
        "View Product Sales by Department",
        "Create New Department"]
    })
  .then(function(answer) {
    if (answer.action === "View Product Sales by Department") {
      viewProducts();
    }
    else {
      newDepartment();
    }
  });
}

function viewProducts() {
  var query = "SELECT department_id, departments.department_name, over_head_costs, sum(product_sales), (sum(product_sales) - over_head_costs) AS total_profit FROM departments LEFT JOIN products ON departments.department_name = products.department_name GROUP BY departments.department_name, department_id ORDER BY total_profit DESC";

  connection.query(query, function(err, res) {  
    console.log("---");
    console.log("Ordered from highest grossing department to lowest");
    console.table(res);
    startQuestions();
  });
}

function newDepartment(){
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of the new department?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the over head cost of the new department?",
      name: "cost"
    }
  ])
  .then(function(answer) {

    var query = "INSERT INTO departments SET ?";
    connection.query(query, 
      [{department_name: answer.name, over_head_costs: answer.cost}], 
      function(err, res) {
        console.log("---");
        console.log("You have added the department: " + answer.name + " to the store. With the over head cost of $" + answer.cost);
        console.log("---");
        startQuestions();
      });
  });
}