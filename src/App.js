import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [health, setHealth] = useState({});

  useEffect(() => {
    axios.get('http://10.0.4.10:3000/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));

    axios.get('http://10.0.4.10:3000/health')
      .then(res => setHealth(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend - DevOps Portfolio</h1>
      <h2>Backend Health:</h2>
      <pre>{JSON.stringify(health, null, 2)}</pre>
      <h2>Items:</h2>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
