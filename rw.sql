SET NAMES UTF8;
DROP DATABASE IF EXISTS	rw;
CREATE DATABASE rw CHARSET=UTF8;
USE rw;
CREATE TABLE rw_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16),
	gender INT
);

CREATE TABLE rw_car_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fnanme VARCHAR(32)
);
INSERT INTO rw_car_family VALUES(1,"SUV");
INSERT INTO rw_car_family VALUES(2,"轿车");
INSERT INTO rw_car_family VALUES(3,"新能源");

CREATE TABLE rw_car(
	qid INT PRIMARY AUTO_INCREMENT,
	family_id INT,
	product_id INT,
	price DECIMAL(8,2)
);