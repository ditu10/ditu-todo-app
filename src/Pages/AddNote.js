import React from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import { AddNoteComponent } from '../Components/AddNoteComponent'

export const AddNote = () => {
  return (
    <>
        <MyNavbar/>
        <div className='mt-2'>
        <h2 className='text-center'>Add New Note</h2>
        <AddNoteComponent/>
        </div>
    </>
  )
}
