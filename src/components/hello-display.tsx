"use client"

// src/components/HelloDisplay.js
import React, { useState } from 'react';

const HelloDisplay = () => {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const response = await fetch('/.netlify/functions/hello');
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <button onClick={fetchMessage}>Fetch Message</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default HelloDisplay;
