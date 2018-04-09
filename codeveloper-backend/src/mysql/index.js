const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host:  process.env.DB_HOST,
    user: process.env.DB_ID,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});
  
connection.connect();

module.exports = connection;