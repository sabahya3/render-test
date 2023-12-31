const express = require('express');
const app = express();
const port = 3000||process.env.PORT;

// Define a route
app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
