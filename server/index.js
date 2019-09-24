const express = require('express');
const symptoms = require('../model/index');

const config = require('../config');

const app = express();

app.set('port', config.port);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.get('/symptom', (req, res) => {
  symptoms.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500).send(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
