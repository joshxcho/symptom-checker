const mongoose = require('mongoose');
const Symptom = require('./Symptom');

mongoose.connect('mongodb://localhost:27017/symptoms');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const selectAll = (callback) => {
  Symptom.find({}, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const updateFrequency = (filter, replacement) => {
  Symptom.updateOne(filter, replacement);
};

module.exports = { selectAll, updateFrequency };
