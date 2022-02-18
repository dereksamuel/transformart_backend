-- To select an to create db

CREATE DATABASE transformart;
USE transformart;

-- To create tables

CREATE TABLE products_categories (
	categories_id INT NOT NULL, -- Is a foreign and primary key
	products_id INT NOT NULL -- Is a foreign and primary key
);

CREATE TABLE products(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	price FLOAT UNSIGNED NOT NULL,
	offer FLOAT UNSIGNED NOT NULL,
	description VARCHAR(1000) NOT NULL,
	srcImage TEXT NOT NULL,
	srcVideo TEXT NOT NULL,
	facebook_link TEXT,
	tweeter_link TEXT,
	instagram_link TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (category_id) REFERENCES products_categories(category_id) ON DELETE CASCADE
);

CREATE TABLE categories(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (product_id) REFERENCES products_categories(product_id) ON DELETE CASCADE
);

-- to insert data

INSERT INTO categories (name) VALUES ("Cuadros decorativos");

-- to update ALL data

UPDATE categories SET name="Decorative Pictures";

-- to update data

UPDATE categories SET name = "Decorative Pictures" WHERE id = 1;
