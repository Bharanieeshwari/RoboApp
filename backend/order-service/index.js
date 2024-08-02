const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;

const orders = [
  { id: 1, userId: 1, productId: 1 },
  { id: 2, userId: 2, productId: 2 }
];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
