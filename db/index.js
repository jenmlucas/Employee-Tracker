const connect = require("./connect");

class DB {
    constructor(connect){
    this.connect= connect;
    };

createDepartment(department) {
    return this.connect.promise().query("INSERT INTO department (department_name) VALUES (?);", [department]);
  };

createRole(addRole, department, addSalary) {
    return this.connect.promise().query("INSERT INTO roles (job_title,department_role_id, salary_role) VALUES (?, ?, ?);" [addRole, department, addSalary]);
};

findAllDepartments() {
    return this.connect.promise().query("SELECT id, department_name FROM department;");
};

};

module.exports = new DB(connect); 