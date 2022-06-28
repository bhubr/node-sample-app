const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
  const { name = 'World' } = req.query;
  res.send({ message: `Hello ${name}!` });
});

module.exports = app;
