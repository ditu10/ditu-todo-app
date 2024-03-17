import React from 'react'
import MyNavbar from '../Navbar/MyNavbar'

export const HomeIndex = () => {
    const deleteAllNotesFromLocalStorage = () => {
        const opinion = window.confirm("Are you sure to delete all the notes from Local storage?")
        if(opinion){
          localStorage.removeItem("notes")
        //   window.alert("All the Notes are removed from local storage.")
        }
        else{
          // window.alert("Your data is safe!")
        }
      }
  return (
    <div>
        <MyNavbar/>
        <h2 className='mt-3'>Welcome to the TODO App</h2>
        <button onClick={deleteAllNotesFromLocalStorage} className='mx-auto mt-0 rounded btn btn-outline-danger'>Clear All Notes</button>

    </div>
  )
}
