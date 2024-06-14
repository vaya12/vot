// backend/src/index.js
const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const app = express();
const port = 5000;
const jwtSecret = process.env.JWT_SECRET;
const dbUrl = process.env.DATABASE_URL;

const pool = mysql.createPool({
  uri: dbUrl,
});

app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(400).send('Username and password required');
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(403).send('Invalid token');
      } else {
        res.json({ message: 'Protected data', user: decoded });
      }
    });
  } else {
    res.status(403).send('No token provided');
  }
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
