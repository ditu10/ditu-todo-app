import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FormModal } from './FormModal';

export const ViewNotesTable = ({notes,viewNotes, deleteNote, addNoteToTable, setNotes, updateNoteToTable}) => {

console.log(viewNotes)
    return (
        <div className='container mt-3'>
        <FormModal addNoteToTable={addNoteToTable}  heading="Add New Note" buttonName="Add note"/>
        <Table className='mt-2' striped responsive bordered hover>
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
                viewNotes.map((note, key) => {
                    return (
                      <tr key={key}>
                        <td>{note.id}</td>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>{note.priority}</td>
                        <td>{note.status}</td>
                        <td>
                            <ButtonGroup>
                                {/* <button onClick={() => updateNote(note.id)} className=' my-0 btn btn-outline-primary' >Update </button> */}
                                {/* <NavLink className='text-decoration-none text-dark' to={'/updateNote/'+note.id}></NavLink> */}
                                  <FormModal updateNoteToTable={updateNoteToTable} note={note} heading="Update the Note" buttonName="Update"/>
                                  <Button  variant="danger" className='border my-0' onClick={() => deleteNote(note.id)}>Delete</Button>
                                {/* <button onClick={() => deleteNote(note.id)} className="my-0 btn btn-outline-danger">Delete</button> */}
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
