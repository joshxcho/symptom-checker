const express = require('express');
const bodyParser = require('body-parser');
const symptoms = require('../model/index');

const config = require('../config');

const app = express();

app.set('port', config.port);

app.use(bodyParser.json());

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

app.put('/symptom', (req, res) => {
  symptoms.updateFrequency(
    { name: req.body.name, 'diagnosis.name': req.body.diagnosis.name },
    { $inc: { 'diagnosis.$.frequency': 1 } },
    (err, data) => {
      if (err) {
        res.sendStatus(500).send(err);
      } else {
        res.json(data);
      }
    },
  );
});

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
