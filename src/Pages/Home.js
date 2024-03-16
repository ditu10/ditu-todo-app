import React from 'react'

export const Home = () => {
  const deleteAllNotesFromLocalStorage = () => {
    const opinion = window.confirm("Are you sure to delete all the notes from Local storage?")
    if(opinion){
      localStorage.removeItem("notes")
      window.alert("All the Notes are removed from local storage.")
    }
    else{
      // window.alert("Your data is safe!")
    }
  }
  return (
    <div>
        <h2>This is Home page</h2>
        <button onClick={deleteAllNotesFromLocalStorage} className='mx-auto rounded btn btn-outline-danger'>Clear All Notes</button>
        
    </div>
  )
}
