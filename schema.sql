CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0),
            ("Item", "department", 00.00, 0);


* Table for the bamazonSupervisor.js component of application
CREATE TABLE departments (
    department_id INT AUTO_INCREMENT,
    department_name VARCHAR(40) NOT NULL,
    over_head_costs DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (department_id)
);