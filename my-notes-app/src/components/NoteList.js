import React from 'react';
import Note from './Note';

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map(note => <Note key={note._id} title={note.title} content={note.content} />)
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
}

export default NoteList;
