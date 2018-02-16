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

  // function displayProducts () {
  //   first going to display function of all of the items available for sale (including; the ids, names, and prices of products for sale) 
  // }
  
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
        
    });
}
  
