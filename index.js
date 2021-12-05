const connect = require('./db/connect');
const { prompt } = require('inquirer');
const consoleTable = require('console.table');
const DB = require('./db/index')




connect.connect(err => {
    if (err) throw err;
    start();
});
//separate functions for each individual section
const start = () => {
    prompt([
        {
            type: "list",
            name: "options",
            message: "Please select an option?",
            choices: [{
                name: "View all employees",
                value: "View_employees"
            },
            {
                name: "View all departments",
                value: "View_departments",
            },
            {
                name: "View all roles",
                value: "View_roles"
            },
            {
                name: "Add a department",
                value: "Add_department"
            },
            {
                name: "Add a role",
                value: "Add_role"
            },
            {
                name: "Add an employee",
                value: "Add_ employee"
            },
            {
                name: "Update an employee role",
                value: "Update_role"
            },
            {
                name: "Quit",
                value: "quit"
            }
            ]
        }
    ])
        .then(res => {
            //switch case or tons of else if's 
            let options = res.options;
            switch (options) {
                case "View_employees":
                    viewEmployees();
                    break;

                case "View_departments":
                    viewDepartments();
                    break;

                case "View_roles":
                    viewRoles();
                    break;

                case "Add_department":
                    addDepartment();
                    break;

                case "Add_role":
                    addRole();
                    break;

                default: quit();
            }




        })
};

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;

    connect.query(sql, (err, res) => {
        if (res) {
            const table = consoleTable.getTable(res);
            console.log(table);
        } else {
            console.log("YOU MESSED UP DEPARTMENT");
        }
    })
};

const viewRoles = () => {
    const sql = `SELECT * FROM roles`;

    connect.query(sql, (err, res) => {
        if (res) {
            const table = consoleTable.getTable(res);
            console.log(table);
        } else {
            console.log("YOU MESSED UP ROLES");
        }
    })
};

const viewEmployees = () => {
    const sql = `SELECT * FROM employee`;

    connect.query(sql, (err, res) => {
        if (res) {
            const table = consoleTable.getTable(res);
            console.log(table);
        } else {
            console.log("YOU MESSED UP EMPLOYEE");
        }
    })
};

const addDepartment = () => {
    prompt(
        {
            type: "input",
            name: "addDepartment",
            message: "Please insert new department name."
        })
        .then(res => {
            let department = res.addDepartment;
            DB.createDepartment(department)
                .then(() => console.log(`added ${department}`))
        })
        .then(() => start());
};

const addRole = () => {
    DB.findAllDepartments()
        .then(([department]) => {
            const departmentOptions = department.map(({id, department_name}) => ({
                name: department_name, 
                value: id
            }));

            prompt(
                [
                    {
                        type: "input",
                        name: "addRole",
                        message: "Please insert new Role here."
                    },
                    {
                        type: "input",
                        name: "addSalary",
                        message: "Please add salary amount."
                    },
                    {
                        type: "list",
                        name: "department",
                        message: "Which department does the role belong too?",
                        choices: departmentOptions
                    }
                ])
                .then((answers) => {
                    DB.createRole(answers.addRole, answers.addSalary, answers.department)
                        .then(() => console.log(`added ${answers.addRole}, added ${answers.addSalary}, added ${answers.department}`))
                        .then(() => start());
                });
        });
};

const quit = () => {
    console.log("Goodbye");
    process.exit();
};



// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database