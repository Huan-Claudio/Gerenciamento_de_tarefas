const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Error creating user' });
    } else {
      res.send({ message: 'User  created successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});