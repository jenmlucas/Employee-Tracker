
INSERT INTO department (department_name)
VALUES 
('Deli'), 
('Bakery'), 
('Apparel');

INSERT INTO roles (title, department_id, salary)
VALUES 
('Deli Clerk', 1, 2.99), 
('Baker', 2, 1.99), 
('Garment Passer Outer', 3, 3.99); 

INSERT INTO employee (first_name, last_name, title department_name, salary, manager_id)
VALUES 
('Jennifer', 'Lucas','Baker', 'Bakery', 1.99, 1), 
('Dylan', 'Lucas', 'Deli', 'Deli Clerk', 2.99, 2);
