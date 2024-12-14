import React, { useState, useEffect } from 'react';
import AddNotes from './AddNotes';
import { useSelector } from 'react-redux';
import NoteList from './NoteList';

const NoteCard = () => {
  const { notesList } = useSelector((state) => state.notes);
  const [showAddNote, setShowAddNote] = useState(false); // State to toggle AddNotes visibility
  

  const toggleAddNote = () => {
    setShowAddNote((prevState) => !prevState); // Toggle the visibility state
  };


  return (
    <><div>
      {notesList.length ? <NoteList /> : null}


      {showAddNote && <AddNotes onHide={() => setShowAddNote(false)} />}
    </div><button className='addNote' onClick={toggleAddNote}>+</button></>
  );
};

export default NoteCard;
