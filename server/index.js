const express = require('express');
const fs = require('fs');

const config = require('../config');

const app = express();

app.set('port', config.port);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

const readJSONFile = (filename, callback) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch (exception) {
      callback(exception);
    }
  });
};

app.get('/api', (req, res) => {
  readJSONFile('symptoms.json', (err, json) => {
    if (err) {
      throw err;
    }
    res.send(json);
  });
});

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
