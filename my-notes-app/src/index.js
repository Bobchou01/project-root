// Импортиране на всички компоненти
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import NoteList from './NoteList';
import NoteForm from './NoteForm';


// Експортиране на всички компоненти
export {
  Header,
  Footer,
  Note,
  NoteList,
  NoteForm,
};

import { Header, Footer, Note, NoteList, NoteForm } from './components';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
