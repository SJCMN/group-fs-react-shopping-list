-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- db name
-- fs-react-shopping

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	item VARCHAR(80) NOT NULL,
	quantity FLOAT NOT NULL,
	unit VARCHAR(20),
	isPurchased BOOLEAN DEFAULT false
);


INSERT INTO list 
(item, quantity, unit)
VALUES
('bread', 1, 'loaf'),
('apples', 3, 'each'),
('pears', 5, 'each');
