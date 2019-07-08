SET NAMES UTF8;
DROP DATABASE IF EXISTS	rw;
CREATE DATABASE rw CHARSET=UTF8;
USE rw;
CREATE TABLE rw_user(
	uid INT PRIMARY KEY,
	uname VARCHAR(16),
	upwd VARCHAR(16),
	email VARCHAR(16),
	phone VARCHAR(11),
	verify VARCHAR(6)
);