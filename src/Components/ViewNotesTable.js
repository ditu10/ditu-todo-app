import React from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

export const ViewNotesTable = ({notes, deleteNote, updateNote}) => {
console.log(notes)
    return (
        <div className='container mt-3'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>priority</th>
              <th>Status</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {
                notes.map((note, key) => {
                    return (
                      <tr key={key}>
                        <td>{note.id}</td>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>{note.priority}</td>
                        <td>{note.status}</td>
                        <td className='d-flex my-0 mx-0 gap-2'>
                            <button className=' btn btn-outline-primary' onClick={() => updateNote(note.id)}>
                                Update
                            {/* <NavLink to={"/updateNote/"+note.id} className="">Update</NavLink> */}
                            </button>

                            <button onClick={() => deleteNote(note.id)} className="btn btn-outline-danger">Delete</button>
                        </td>
                      </tr> 
                    )
                    
                })
            }
            
          </tbody>
        </Table>
        </div>
      );
}
