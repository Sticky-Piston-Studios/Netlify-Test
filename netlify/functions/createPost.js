// functions/createTextFile.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const { title, text } = JSON.parse(event.body);
    const filePath = path.join('/tmp', `${title}.txt`);

    fs.writeFileSync(filePath, text);

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
