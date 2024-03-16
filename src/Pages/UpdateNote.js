import React, { useState } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { AddNoteComponent } from '../Components/AddNoteComponent'
import { useParams } from 'react-router-dom'

export const UpdateNote = () => {
  const {id} = useParams();
  let notes = JSON.parse(localStorage.getItem("notes"));

  let note;
  for (const x of notes) {
    if (x.id === id){
        note = x;
    }
  }


  return (
    <>
        <MyNavbar/>
        <h2 className='text-center mt-3'>Update Note</h2>
        <AddNoteComponent isUpdate = {true} note={note}/>
    </>
  )
}
