// import React from 'react';
import { useState } from 'react';

const AddNote = ({handleAddNote}) => {
  const [noteText , setNoteText] = useState('');
  const charaterLimit = 250;

  const handleChange = (event) => {
    // prevents the number of words left to enter negative value if it exceeds the 250 words limit
    if(charaterLimit - event.target.value.length >= 0){
    setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
// making it impossible for an empty note like a note without text to be added 
    if(noteText.trim().length > 0) {
      handleAddNote(noteText)
// Lets the set input reset 
      setNoteText('');
    }
  };
 
  return (
    <div className="note new ">
      <textarea rows="8" cols="10"
       placeholder="Type to add a note..."
       value={noteText} 
       onChange={handleChange}
       ></textarea>
      <div className="note-footer">
        {/* shows the number of characters left in the note */}
        <small>{charaterLimit - noteText.length} words left</small>
        <button className='save' onClick={handleSaveClick}> 
            Add 
        </button>
      </div>
    </div>
  );
};

export default AddNote;