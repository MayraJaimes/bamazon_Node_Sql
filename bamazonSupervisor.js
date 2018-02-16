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
          "View Low Inventory"]
      })
    .then(function(answer) {
      if (answer.action === "View Product Sales by Department") {
        viewProducts();
      }

      else {

      }
    });
}

function viewProducts() {
  var query = "SELECT department_id, department_name, over_head_costs, product_sales, over_head_costs - products_sales AS total_profit FROM products LEFT JOIN departments ON products.department_name = departments.department_name GROUP BY department_name";
  connection.query(query, function(err, res) {
      //SHOW table
  });
}