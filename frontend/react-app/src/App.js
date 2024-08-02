import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    
    fetch('/users')
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch('/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Robot Shop</h1>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>User {order.userId} ordered Product {order.productId}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
