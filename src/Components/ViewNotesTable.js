import React, { useRef, useState } from 'react'
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FormModal } from './FormModal';


export const ViewNotesTable = ({notes,viewNotes,setViewNotes, deleteNote, addNoteToTable, setNotes, updateNoteToTable}) => {
const sorting = useRef();
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const statusVal = {
  "Pending" : 1,
  "In Progress" : 2,
  "Completed" : 3,
  "Failed" : 4
}


const sortAscending =(isAsc) =>{
  const sortProperty =sorting.current.value;
  let temp = [...viewNotes];
  
  if(sortProperty === 'status'){
    temp.sort((a,b) => {
      return isAsc? statusVal[a[sortProperty]] - statusVal[b[sortProperty]] :
               statusVal[b[sortProperty]] - statusVal[a[sortProperty]]
    })
  } else{
      temp.sort((a,b) => {
      return isAsc ? a[sortProperty].localeCompare(b[sortProperty]):
               b[sortProperty].localeCompare(a[sortProperty])
    })
  }
  
  console.log(temp)
  setViewNotes(temp)

}

const undoSorting = () => {
  setViewNotes(notes)
}

    return (
        <div className='container mt-3'>
          
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ShortCut Key</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <h5>ShortCut Key: </h5>
            <p>'Alt + d' = Delete all the notes from localStorage</p>
            <p>'Alt + s' = Focus on the search bar</p>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
          
        <div className='d-flex justify-content-between'>

        <FormModal addNoteToTable={addNoteToTable}  heading="Add New Note" buttonName="Add note"/>
        <div>
          <select className='py-1 me-2' ref={sorting} defaultValue="title">
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="priority">priority</option>
            <option value="createdAt">Created At</option>
            <option value="updatedAt">Updated At</option>
            <option value="status">Status</option>
          </select>

          <button onClick={() => sortAscending(true)} className='me-2'>ASC</button>
          <button onClick={() => sortAscending(false)} className='me-2'>DESC</button>
          <button onClick={() => undoSorting()} className='me-2'>Undo Sorting</button>
          <button className="" onClick={handleShow}>
              ShortCut Tips
          </button>
          
        </div>
        </div>
        <Table className='mt-2' striped responsive bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title
              
              </th>
              <th>Description</th>
              <th>priority</th>
              <th>Created At</th>
              <th>Updated At</th>
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
                        <td>{note.createdAt}</td>
                        <td>{note.updatedAt}</td>
                        <td>{note.status}</td>
                        <td>
                            <ButtonGroup>
                                  <FormModal updateNoteToTable={updateNoteToTable} note={note} heading="Update the Note" buttonName="Update"/>
                                  <Button  variant="outline-danger" className='border' onClick={() => deleteNote(note.id)}>Delete</Button>
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
