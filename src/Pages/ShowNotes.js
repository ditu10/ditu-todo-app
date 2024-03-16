import React, { useState } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { ViewNotesTable } from '../Components/ViewNotesTable';

export const ShowNotes = () => {
    const [notes, setNotes] = useState(localStorage.getItem("notes")? JSON.parse(localStorage.getItem("notes")) : []);

    const deleteNote = (id) => {
        let newNotes = notes.filter( note => {
            if(note.id !== id){
                return note;
            }
        })
        setNotes(newNotes)
        localStorage.setItem("notes", JSON.stringify([...newNotes]))
    }
    const updateNote = (id) => {
        window.location.href=`/updateNote/${id}`
    }
    
  return (
    <>
        <MyNavbar/>
        <div className='mt-2'>
        <h2 className='text-center'>All Notes</h2>
        <ViewNotesTable notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
        
        </div>
    </>
  )
}
