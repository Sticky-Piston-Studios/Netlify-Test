"use client";

// src/components/TextFileForm.js


import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const response = await fetch('/.netlify/functions/createPost', {
      method: 'POST',
      body: JSON.stringify({ title, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      alert('File created successfully');
    } else {
      alert('Error creating file');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
         className='bg-white'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Text:</label>
        <textarea
             className='bg-white'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save as Text File</button>
    </form>
    </div>
  );
};

export default PostForm;
