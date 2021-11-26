// server.js
const express = require('express');
const app = express();
const port = 3000;
const path=require("path");

const way=path.join(__dirname,"../public");
console.log(way);

app.use(express.static(way));

// Set up home route
app.get('/', (req, res) => {
  res.send('This is the homepage');
});
// Set up second page
app.get('/about', (req, res) => {
  res.send('This is the second page');
});


app.get('*', (req, res) => {
  res.send('This is the ERROR PAGE!');
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});