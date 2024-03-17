import React, { useState } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { ViewNotesTable } from '../Components/ViewNotesTable';

export const ShowNotes = () => {
    const [notes, setNotes] = useState(localStorage.getItem("notes")? JSON.parse(localStorage.getItem("notes")) : []);
    const [viewNotes, setViewNotes] = useState([...notes])
    // const [show, setShow] = useState(false);


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
        let currentNotes = JSON.parse(localStorage.getItem("notes"));
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
            <input placeholder='search title or description' onChange={handleSearchBtn} name='search' id='search'/>
            
        </div>
        <ViewNotesTable updateNoteToTable={updateNoteToTable} addNoteToTable={addNoteToTable} notes={notes} setNotes={setNotes} setViewNotes={setViewNotes} viewNotes={viewNotes} updateNote={updateNote} deleteNote={deleteNote} />
        
        </div>
    </>
  )
}
