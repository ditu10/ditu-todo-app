import React, { useEffect, useState } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { ViewNotesTable } from '../Components/ViewNotesTable';

export const ShowNotes = () => {
    const [notes, setNotes] = useState(localStorage.getItem("notes")? JSON.parse(localStorage.getItem("notes")) : []);
    const [viewNotes, setViewNotes] = useState([...notes])

    useEffect(()=>{
        const handleKeyDown = (event) => {
            if (event.altKey && event.key === 's') {
              event.preventDefault(); // Prevent default behavior (e.g., browser search)
              const searchBar = document.getElementById('search');
              if (searchBar) {
                searchBar.focus();
              }
            }
          };

          const handleDKeyDown = (event) => {
            if (event.altKey && event.key === 'd') {
              event.preventDefault(); // Prevent default behavior (e.g., browser search)
           
              const confirm = window.confirm("Are you sure to delete notes from local storage?")
              if(confirm) {
                localStorage.setItem("notes", JSON.stringify([]))
                setNotes([]);
                setViewNotes([])
              }
            }
          };



          document.addEventListener('keydown', handleKeyDown);
          document.addEventListener('keydown', handleDKeyDown);
          return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keydown', handleDKeyDown);
          };
      
    },[])

  

    const deleteNote = (id) => {
        let newNotes = notes.filter( note => {
            if(note.id !== id){
                return note;
            }
        })
        setNotes(newNotes)
        setViewNotes(viewNotes.filter(note => {
            if(note.id !== id)
                return note;
        }))
        localStorage.setItem("notes", JSON.stringify([...newNotes]))
    }

    const updateNote = (id) => {
    }   

    const handleSearchBtn = (e) => {
        const searchVal = e.target.value;
        console.log(searchVal)
        let newViewNotes = notes.filter((note) => {
            if(note.title.toLowerCase().includes(searchVal.toLowerCase()) || note.description.toLowerCase().includes(searchVal.toLowerCase())) {
                return note
            }
        })
        setViewNotes(newViewNotes)
        
    }
    const addNoteToTable =(newNote) => {
        setNotes([...notes, newNote])
        setViewNotes([...viewNotes, newNote])
        let currentNotes = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
        currentNotes = [...currentNotes, newNote]
        localStorage.setItem("notes", JSON.stringify(currentNotes))

    }
    const updateNoteToTable = (updatedNote) =>{
        let currentNotes = [...notes]
        let newCurrentNotes = currentNotes.map(note => {
            if(note.id === updatedNote.id) {
                note = updatedNote;
            }
            return note;
        })
        setNotes([...newCurrentNotes])
        setViewNotes([...newCurrentNotes])
        localStorage.setItem("notes", JSON.stringify(currentNotes))

    }

    
  return (
    <>
        <MyNavbar/>
        <div className='mt-2'>
        <h2 className='text-center'>All Notes</h2>
        <div  className='container'>
            <input className='py-2 w-100 px-3 rounded' placeholder='search title or description' onChange={handleSearchBtn} name='search' id='search'/>
            
        </div>
        <ViewNotesTable updateNoteToTable={updateNoteToTable} addNoteToTable={addNoteToTable} notes={notes} setNotes={setNotes} setViewNotes={setViewNotes} viewNotes={viewNotes} updateNote={updateNote} deleteNote={deleteNote} />
        
        </div>
    </>
  )
}
