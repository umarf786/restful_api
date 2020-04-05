const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('People', PersonSchema);
