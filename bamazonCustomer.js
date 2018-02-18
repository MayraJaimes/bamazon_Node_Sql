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

  var query = "SELECT item_id,product_name,price FROM bamazon";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        "Item ID: " +
        res[i].item_id +
        " || Product Name: " +
        res[i].product_name +
        " || Price: " +
        res[i].price
      );
    }
  });

  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the ID of the product that you would like to buy?",
      name: "id"
    },
    {
      type: "input",
      message: "How many units of the product would you like to buy?",
      name: "units"
    }
  ])
  .then(function(answer) {
    answer.id;
    answer.units;

    var query_two = "SELECT price,stock_quantity FROM bamazon WHERE ?";
    connection.query(query_two, { item_id: answer.id }, function(err, res) {
        
      var productPrice = res[0].price;
      var productStockQuant = res[0].stock_quantity;

      if(productStockQuant >= answer.units){
        var newProductQuant = productStockQuant - answer.units;
        var totalPrice = productPrice * answer.units;
        var totalSales = res[0].product_sales + totalPrice;

        var query_three = "UPDATE products SET ? WHERE ?";
        connection.query(query_three, [{stock_quantity: newProductQuant},{item_id: answer.id}, {product_sales: totalSales}], function(err, res) {
          console.log ("Order completed your total comes out to: $" + totalPrice);
        });
      }   
      
      else {
        console.log("Insufficient quantity!");
      }
      startQuestions()
    });
  });
}