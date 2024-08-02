const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
