# Bamazon

## Overview
In order to be able to use this app the user will have to install the different npm packages listed in my package.JSON file. These include: Inquirer, MySQL, and Console.Table.

There are three parts to this application each with different functionality depending on who the user is. Please see information below for more details:
    -Customer component
    -Manager component
    -Supervisor component

## Description

*Customer.js

This part of the application is able to take in orders from customers. First, when accessing this app the user will have all the items available in the store displayed to them.

The customer will then be prompted with two questions:
    * The first should ask them the ID of the product they would like to buy.
    * The second message should ask how many units of the product they would like to buy.
    
![customer.js screenshot](./images/customer1.jpg?raw=true "Customer.JS questions")    
Then, the customer will be given a message that includes if the order was processed and if so, the total amount for the order. The database will get updated with the new stock quantity along with a new amount for the total product's sales amount.

If the order did not get processed a message displayed will let them know it was not able to get fullfilled.

*Manager.js

In this part of the application the manager is able to pick from the following options:
    * View Products for Sale
    * View Low Inventory
    * Add to Inventory
    * Add New Product

If the manager selects `View Products for Sale`, the app list every available item
![manager.js screenshot](./images/manager1.jpg?raw=true "manager1.JS questions")

If the manager selects  `View Low Inventory`, the app list all items with an inventory count lower than five.
![manager.js screenshot](./images/manager2.jpg?raw=true "manager2.JS questions")

If the manager selects s `Add to Inventory`, the app displays a prompt that lets the manager "add more" of any item currently in the store. The stock number for this item will then be update to the database.
![manager.js screenshot](./images/manager3.jpg?raw=true "manager3.JS questions")

If the manager selects  `Add New Product`, it allows them to add a new product to the store. This item will then be added to the table.
![manager.js screenshot](./images/manager3.jpg?raw=true "manager4.JS questions")

*Supervisor.js

In this part of the application the supervisor is able to pick from the following options:
* View Product Sales by Department
* Create New Department

if the supervisor selects `View Product Sales by Department`, the app displays a summarized table in their terminal/bash window, which includes the department id and name, over_head_costs, products sales and total profit for each department. This is displayed in order from highest-grossing departments in the store to lowest.

The customer.js file was changed in order to be able to add to the total number of product sales with every transaction completed. This allows for this supervisor component of the application to calculate the total profits.
![supervisor.js screenshot](./images/supervisor1.jpg?raw=true "supervisor1.JS questions")

If the supervisor selects `Create New Department`, they are then prompted to enter the name of the new deparment and the over_head_costs. This information is then inserted into the "departments" table in the database.
![supervisor.js screenshot](./images/supervisor2.jpg?raw=true "supervisor2.JS questions")

## Technologies used:

* Node.js
* MySQL
