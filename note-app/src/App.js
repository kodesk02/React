// import React from 'react';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const[notes , setNotes] = useState([
    {
    id:nanoid(),
    text: "This is my first note",
    date:"5/4/2022"
    },
    {
      id:nanoid(),
      text: "This is my second note",
      date:"6/4/2022"
      },
      {
        id:nanoid(),
        text: "This is my third note",
        date:"17/4/2022"
        },
        {
          id:nanoid(),
          text: "This is my new note",
          date:"28/4/2022"
          },
]);

const [searchText , setSearchText] = useState('');

// false (Boolean) is used since there are only two options either it is in dark mode or it is not in dark mode 
const [darkMode , setDarkMode ] = useState(false);

useEffect(() =>{
 const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
 
 );

 if(savedNotes){
   setNotes(savedNotes);
 }

}, []);

// saves the notes to local storage
useEffect(() =>{
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes) 
  );
}, [notes]);

const addNote = (text) =>{
  const date = new Date();
  const newNote ={
    id:nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  // To add new notes if add button is clicked 
  const newNotes = [...notes, newNote]
  setNotes(newNotes);
};


const deleteNote = (id) =>{
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}
 
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList
// To be able to connect what is searched for in the search bar to the notes
      notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
      )} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    </div>
    
    </div>
  )

};

export default App 