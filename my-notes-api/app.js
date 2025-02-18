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

import React, { useEffect, useState } from 'react';
import { Header, Footer, NoteList, NoteForm } from './components';

const ec = {
  HARDWARE: 'hardwareType' // Примерна стойност за ec.HARDWARE
};

function App() {
  const [notes, setNotes] = useState([]);
  const [hardware, setHardware] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/api/notes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchData();
  }, []);

  // Пример за включване на проверка в контекст
  const someFunction = (N) => {
    console.log('N:', N);
    if (!N) {
      console.error('N is null or undefined');
      return;
    }
    console.log('N.type:', N.type);
    setHardware(N.type === ec.HARDWARE);
  };

  useEffect(() => {
    const initiaLN = { type: 'hardwareType' }
    someFunction({initiaLN}); // Викаме someFunction с валиден обект
  }, []);
  
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3001/api/notes');
      const data = await response.json();
  
      if (!data || data === null) {
        console.error('Fetched data is null');
        return;
      }
  
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }
  

  return (
    <div className="App">
      <Header />
      <NoteForm onAddNote={(newNote) => setNotes([...notes, newNote])} />
      <NoteList notes={notes} />
      <Footer />
    </div>
  );
}

export default App;
