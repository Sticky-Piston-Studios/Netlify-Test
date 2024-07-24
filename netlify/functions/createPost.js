// functions/createTextFile.js
const fs = require('fs');
const path = require('path');
import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";


exports.handler = async (event, context) => {


  
  try {
        const { title, text } = JSON.parse(event.body);
    const construction = getStore("construction");

    await construction.setJSON("Post_" + {title}, { title: {title}, text: {text} });
  

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File created successfully', filePath }),
    };
  } catch (error) {
    console.error('Error creating file:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error creating file' }),
    };
  }
};
