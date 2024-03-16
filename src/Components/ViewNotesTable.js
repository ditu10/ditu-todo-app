import React from 'react'
import { ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

export const ViewNotesTable = ({notes, deleteNote, updateNote}) => {

console.log(notes)
    return (
        <div className='container mt-3'>
        <Table striped responsive bordered hover>
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
                        <td>
                            <ButtonGroup>
                                <button onClick={() => updateNote(note.id)} className=' my-0 btn btn-outline-primary' >Update </button>
                                {/* <NavLink className='text-decoration-none text-dark' to={'/updateNote/'+note.id}></NavLink> */}
                                <button onClick={() => deleteNote(note.id)} className="my-0 btn btn-outline-danger">Delete</button>
                            </ButtonGroup>
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
