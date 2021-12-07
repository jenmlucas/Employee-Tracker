const connect = require("./connect");

class DB {
    constructor(connect) {
    this.connect= connect;
    };

createDepartment(department) {
    return this.connect.promise().query("INSERT INTO department (department_name) VALUES (?);", [department]);
  };

createRole(addRole, department, addSalary) {
    return this.connect.promise().query("INSERT INTO roles (title, department_id, salary) VALUES (?, ?, ?);", [addRole, department, addSalary]);
};

findAllDepartments() {
    return this.connect.promise().query("SELECT id, department_name FROM department ORDER BY id;");
};

createEmployee(firstName, lastName, roles) {
    return this.connect.promise().query("INSERT INTO employee (first_name, last_name, employee_id) VALUES (?, ?, ?);", [firstName, lastName, roles]);
};

findAllEmployee() {
    return this.connect.promise().query("SELECT id, first_name, last_name FROM employee ORDER BY id;");
};
};

module.exports = new DB(connect); 