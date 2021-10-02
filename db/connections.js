const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "business",
    },
    console.log("Connected to business DB")
);

module.exports = db;