const config = require("../config/index");

const mysql = require('mysql2');
const connection = mysql.createConnection(
    {
        host: config.db_host,
        port: config.db_port,
        user: config.db_user,
        password: config.db_password,
        database: config.db_name
    }
);

console.log("Connected to database");

module.exports = connection;