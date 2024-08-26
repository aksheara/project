// database.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // or your database server
  user: 'your-username', // replace with your MySQL username
  password: 'your-password', // replace with your MySQL password
  database: 'your-database-name' // replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;

