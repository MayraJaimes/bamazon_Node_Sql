var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
  });
  
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
  var query = "SELECT department_id, department_name, over_head_costs, product_sales, over_head_costs - products_sales AS total_profit FROM departments LEFT JOIN products ON products.department_name = departments.department_name GROUP BY department_name";
  connection.query(query, function(err, res) {
      //SHOW table
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
      {
        department_name: answer.name, 
        over_head_cost: answer.cost 
      }, 
      function(err, res) {
          console.log(
              "You have added the department: " +
                answer.name +
                " to the store. With the over head cost of $" +
                answer.cost
            );        
          });
      startQuestions();
  });

}