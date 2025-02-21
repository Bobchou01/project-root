const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/', async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  await newNote.save();
  res.json(newNote);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

module.exports = router;
