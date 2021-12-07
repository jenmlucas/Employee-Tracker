
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Jennifer', 'Lucas', 2, 1), 
('Dylan', 'Lucas', 1, 2);
