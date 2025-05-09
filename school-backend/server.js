const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy user data
const users = [
  { username: 'student1', password: 'pass123', role: 'student' },
  { username: 'teacher1', password: 'pass456', role: 'teacher' },
  { username: 'admin1', password: 'pass789', role: 'admin' },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the School Management Backend!');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
