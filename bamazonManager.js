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
        res[i].price +
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
      startQuestions();
    });
}

function addToInventory() {
    viewProducts();
    inquirer
    .prompt([
        {
          type: "input",
          message: "What is the ID of the product that you would like to add more of?",
          name: "id"
        },
        {
          type: "input",
          message: "How many more units of the product would you like add?",
          name: "units"
        }
      ])
    .then(function(answer) {
      console.log(answer.id);
      console.log(answer.units);

      connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
        var newStockQuant = res[0].stock_quantity + answer.units;
        console.log(
          "You have added: " +
            answer.units +
            " units to the product: " +
            res[0].product_name +
            ". The new stock quantity is: " +
            newStockQuant + " units."
        );
        startQuestions();
      });
    });
}

function addNewProduct() {
    inquirer
    .prompt([
        {
          type: "input",
          message: "What is the name of the product that you would like to add?",
          name: "name"
        },
        {
          type: "input",
          message: "What deparment will this product be in?",
          name: "dept"
        },
        {
          type: "input",
          message: "What is the price of the product?",
          name: "price"
        },
        {
          type: "input",
          message: "How many more units of the product will there bed?",
          name: "units"
        }
      ])
    .then(function(answer) {
      var query = "INSERT INTO products SET ?";
      connection.query(query, 
        {
            product_name: answer.name, 
            department_name: answer.dept, 
            price: answer.price, 
            stock_quantity: answer.units
        }, 
        function(err, res) {
            console.log(
                "You have added the product: " +
                  answer.name +
                  " to the store. It will be located in the " +
                  answer.dept +
                  " department. The price will be $" +
                  answer.price +
                  " and there is going to be a stock quantity of " +
                  answer.units + " units."
              );        
            });
        startQuestions();
    });
};




