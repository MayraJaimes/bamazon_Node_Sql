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
        "View products for sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Product"
    ]
    })
    .then(function(answer) {
        switch (answer.action) {
            case "View products for sale":
            viewProducts();
            break;

            case "View Low Inventory":
            viewLowInventory();
            break;

            case "Add to Inventory":
            addToInventory();
            break;

            case "Add New Product":
            addNewProduct();
            break;
        }
    });
}



item_id INT AUTO_INCREMENT,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)



function viewProducts() {
    var query = "SELECT item_id,product_name,price,stock_quantity FROM bamazon";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(
        "Item ID: " +
        res[i].item_id +
        " || Product Name: " +
        res[i].product_name +
        " || Price: " +
        res[i].price
        " || Stock Quantity: " +
        res[i].stock_quantity
        );
      }
    });
}

function viewLowInventory() {
    var query = "SELECT item_id,product_name,stock_quantity FROM bamazon HAVING Sum(stock_quantity) < 5";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(
        "Item ID: " +
        res[i].item_id +
        " || Product Name: " +
        res[i].product_name +
        " || Stock Quantity: " +
        res[i].stock_quantity
        );
      }
    });
}

function addToInventory() {

    //display a prompt that will let the manager "add more" of any item currently in the store.
}

function addNewProduct() {
    //allow the manager to add a completely new product to the store.
}


