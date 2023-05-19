const express = require('express');

const app = express();

app.get("/main", (req, res) => {
  res.json({ message: "Hello Node.js!"});
});

app.listen(3001, () => {
  console.log('Node.js server is listening on port 3001');
});

