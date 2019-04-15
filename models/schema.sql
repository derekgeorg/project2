/* DROP DATABASE IF EXISTS stray_pets_db; */
CREATE DATABASE stray_pets_db;
USE stray_pets_db;

CREATE TABLE strays (
	`Animal ID` VARCHAR(255),
	`Found Location` VARCHAR(255),
	`At AAC` BOOLEAN DEFAULT FALSE,
	`Intake Date` VARCHAR(255),
	`Type` VARCHAR(255),
	`Looks Like` VARCHAR(255),
	`Color` VARCHAR(255),
	`Sex` VARCHAR(255),
	`Age` VARCHAR(255),
	`Image Link` VARCHAR(255)
);

SELECT * FROM strays;