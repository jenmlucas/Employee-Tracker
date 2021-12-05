DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    department_role_id INTEGER NOT NULL, 
    salary_role DECIMAL (10, 2) NOT NULL,
    FOREIGN KEY (department_role_id) REFERENCES department (id)
); 

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    employee_id INTEGER NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary DECIMAL (10, 2) NOT NULL, 
    manager_id INTEGER NULL,
    FOREIGN KEY (employee_id) REFERENCES roles(id)
);



