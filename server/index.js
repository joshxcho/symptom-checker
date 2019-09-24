const express = require('express');

const config = require('../config');

const app = express();

app.set('port', config.port);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.listen(app.get('port'), () => console.log(`Listening at ${app.get('port')}!`));
