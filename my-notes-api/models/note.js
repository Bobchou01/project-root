const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const note = mongoose.model('Note', noteSchema);

module.exports = note;
