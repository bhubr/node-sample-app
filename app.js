const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
  const { name = 'World' } = req.query;
  res.send({ message: `Hello ${name}!` });
});

app.get('/api/ip', (req, res) => {
  res.send({ message: `Your IP is ${req.ip}!` });
});

module.exports = app;
