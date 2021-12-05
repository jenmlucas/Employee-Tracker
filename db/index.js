const connect = require("./connect");

class DB {
    constructor(connect){
    this.connect= connect;
    };
createDepartment(department) {
    return this.connect.promise().query("INSERT INTO department SET department_name = ?", [department]);
  };
createRole() {
    return this.connect.promise().query("INSERT INTO roles SET job_title = ?, department_role_id = ?, salary_role = ?;" [addRole, department, addSalary]);
};
findAllDepartments() {
    return this.connect.promise().query("SELECT id, department_name FROM department;");
};

};

module.exports = new DB(connect); 