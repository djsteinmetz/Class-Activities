-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('Win the lottery.');
INSERT INTO wishes (wish) VALUES ('Get a dog.');
INSERT INTO wishes (wish) VALUES ('Write a book.');

SELECT * FROM wishes