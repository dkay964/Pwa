import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [forexData, setForexData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual backend API or WebSocket
    fetch("https://your-api.com/forex/live")
      .then(res => res.json())
      .then(data => {
        setForexData(data);
        setLoading(false);
      })
      .catch(err => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="App">
      <h1>Real-Time Forex Scanner</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {forexData.map((pair, index) => (
            <li key={index}>
              <strong>{pair.symbol}</strong> — {pair.price} ({pair.trend})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
