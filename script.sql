DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS categories;

CREATE TABLE items (
	ItemName 	VARCHAR(128)	NOT NULL,
	Description VARCHAR(255),
	OwnerId 	VARCHAR(32)		NOT NULL,
	Exchange 	VARCHAR(255),
	Date 		date 			NOT NULL,
	Details 	VARCHAR(255)	NOT NULL,
	Category 	int(11)			NOT NULL,
	Location 	VARCHAR(64), 
	Id 			int(11) 		PRIMARY KEY	AUTO_INCREMENT
);

CREATE TABLE categories (
	id 		int(11)		PRIMARY KEY AUTO_INCREMENT,
	name 	VARCHAR(45)	NOT NULL	
);

CREATE TABLE members (
	Username		VARCHAR(32) 	NOT NULL 	PRIMARY KEY,
	Password     	VARCHAR(32)		NOT NULL,
	PasswordHint	VARCHAR(128)  
);