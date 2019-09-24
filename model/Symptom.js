const mongoose = require('mongoose');

const { Schema } = mongoose;

const SymptomSchema = new Schema({
  id: Number,
  name: String,
  diagnosis: [{ diagId: Number, name: String, frequency: Number }],
});

const Symptom = mongoose.model('Symptom', SymptomSchema);

module.exports = Symptom;
