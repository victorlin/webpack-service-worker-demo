const express = require("express");

const app = express();

app.use(express.static('dist'));

app.listen(3000, function () {
  console.log('hello from Express app');
  console.log('http://localhost:3000');
});
