const dotenv = require('dotenv');
dotenv.config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    db_host: process.env.DB_HOST || 'localhost',
    db_port: process.env.DB_PORT || 3306,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME
}

module.exports = config;