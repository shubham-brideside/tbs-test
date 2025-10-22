const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Debug endpoint
app.get('/debug', (req, res) => {
  const distPath = path.join(__dirname, 'dist');
  const files = fs.readdirSync(distPath);
  res.json({
    message: 'Debug endpoint working',
    distPath: distPath,
    files: files,
    port: process.env.PORT || 8080,
    nodeEnv: process.env.NODE_ENV
  });
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Serving files from: ${path.join(__dirname, 'dist')}`);
  console.log(`Debug endpoint available at: http://localhost:${port}/debug`);
});
