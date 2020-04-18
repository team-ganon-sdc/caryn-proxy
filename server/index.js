require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const axios = require('axios');

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/loaderio-2e520f5da32d6bc70b878d37036247dc.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-2e520f5da32d6bc70b878d37036247dc.txt'));
});

app.post('/carousels', (req, res) => {
  axios.post('http://52.53.152.134:3003/carousels', req.body)
  .then(response => res.json(response.data))
  .catch(err => res.json(err));
});

app.listen(port, () => console.log(`proxy is running at ${port}`));
