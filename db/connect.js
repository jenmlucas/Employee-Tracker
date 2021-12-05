const mysql = require("mysql2");

const connect = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employees'
    }
);


module.exports = connect;