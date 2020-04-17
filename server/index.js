require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/loaderio-536aa6f241c3ba0c9409d4050ec8e10f.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-536aa6f241c3ba0c9409d4050ec8e10f.txt'));
});

app.listen(port, () => console.log(`Proxy server running on port ${port}!`));
