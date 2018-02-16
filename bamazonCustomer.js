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

        //Once order is placed, check if the store has enough quantity to meet the customer's request
          //Get the item information
          //Save item stock_quantity number in a variable
          
          //if(stock_quantity >= answer.units ){
          //   complete the order
          //      update database stock.quantity - answer.units
          //      multiply price * answer.units
          // }   
          
          // else {
          //   console.log("Insufficient quantity!");
          // }
        
    });
}
  

