"use client"

import React, { useState } from 'react';

const Test = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [test, setTest] = useState([]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://127.0.0.1:5000/api/test3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: inputValue }), // Send input value as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse JSON response
      setResponseData(data); // Set the received data
      const extracted = data.map( (item: any) => ({ text: item.node.text, score: item.score}))
      setTest(extracted)
    } catch (error: any) {
      setError(error.message); // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Post Request Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter value for q"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {responseData && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(test, null, 2)}</pre>
        </div>
      )}

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    </div>
  );
};

export default Test;
