
INSERT INTO department (department_name)
VALUES 
("Deli"), 
("Bakery"), 
("Apparel");

INSERT INTO roles (job_title, department_role_id, salary_role)
VALUES 
('Deli Clerk', 1, 2.99), 
('Baker', 2, 1.99), 
('Garment Passer Outer', 3, 3.99); 

INSERT INTO employee (first_name, last_name, employee_id, job_title, department, salary, manager_id)
VALUES 
('Jennifer', 'Lucas', 1, 'Baker', 'Bakery', 1.99, 1), 
('Dylan', 'Lucas', 2, 'Deli', 'Deli Clerk', 2.99, 2);