import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Model from './UpdateNote';
import { setSelectedTask } from '../../slice/noteSlice';

function NoteList() {
  const { notesList } = useSelector((state) => state.notes);
  const [modelShow, setModelShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const dispatch = useDispatch();

  // Function to format date
  const formatDate = (date) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options).toLowerCase();
  };

  const showUpdate = (task) => {
    setModelShow(true);
    dispatch(setSelectedTask(task));
  };

  useEffect(() => {
    const currentDate = new Date();
    setFormattedDate(formatDate(currentDate));
  }, []);

  return (
    <>
      <div className="note-list-container">
        {notesList &&
          notesList.map((note) => (
            <div
              key={note.id}
              className="note-item"
              onClick={() => showUpdate(note)}
            >
              <div className='model-container' style={{maxHeight:"160px", maxWidth:"300px",overflow:"hidden",}}>
              <h3 className='card-title'>{note.title}</h3>
              <div className="model" style={{height:"160px",width:"300px"}}>
              <p >{note.description}</p>
              <p className="note-date">
                Last Modified: {formatDate(note.modifiedDate)}
              </p>
              </div>
            </div>
            </div>
          ))}
      </div>

      {/* Conditionally render the Model */}
      {modelShow && <Model onHide={() => setModelShow(false)} />}
    </>
  );
}

export default NoteList;
