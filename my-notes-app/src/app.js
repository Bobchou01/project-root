const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const notes = require('./routes/notes');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());
app.use('/api/notes', notes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const cors = require('cors');
app.use(cors());
