const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const products = [
  { id: 1, name: 'Robot A', price: 100 },
  { id: 2, name: 'Robot B', price: 150 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
