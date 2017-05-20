'use strict';

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  console.log(req.ip);
  res.json({
    ip: req.ip,
    os: /\(([^)]+)\)/.exec(req.get('user-agent'))[1],
    language: req.get('accept-language').split(',')[0]
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});