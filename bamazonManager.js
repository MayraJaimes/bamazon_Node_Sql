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

function viewProducts() {
    //list every available item: the item IDs, names, prices, and quantities.
}

function viewLowInventory() {
    //list all items with an inventory count lower than five.
}

function addToInventory() {
    //display a prompt that will let the manager "add more" of any item currently in the store.
}

function addNewProduct() {
    //allow the manager to add a completely new product to the store.
}


