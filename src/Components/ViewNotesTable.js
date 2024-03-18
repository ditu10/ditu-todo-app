import React, { useRef, useState } from 'react'
import { Button, ButtonGroup, FloatingLabel, Form, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FormModal } from './FormModal';
import { SortButton } from './SortButton';


export const ViewNotesTable = ({notes,viewNotes,setViewNotes, deleteNote, addNoteToTable, setNotes, updateNoteToTable}) => {
    const statusRef = useRef()
    const priorityRef = useRef()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const statusVal = {
      "Pending" : 1,
      "In Progress" : 2,
      "Completed" : 3,
      "Failed" : 4
    }

    const status = ["Pending", "In Progress", "Completed", "Failed"];
    const priority = [1,2,3,4,5];

    

    const handleSorting = (isAsc, fieldName) => {
      console.log(isAsc + "  " + fieldName)
      const sortProperty = fieldName;
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

    const filterNotes = (fieldName) =>{
      let val;
      let anotherVal;
      let anotherField;

      switch (fieldName) {
        case 'status': 
          val = statusRef.current.value
          anotherField = 'priority'
          anotherVal = priorityRef.current.value
          break
        case 'priority':
          val = priorityRef.current.value
          anotherField = 'status'
          anotherVal = statusRef.current.value
          break

        default:
          break
      }
      const temp = [...notes];

      if(val === 'all' && anotherVal === 'all'){
        setViewNotes(notes)
        
      }
      else if(val !== 'all' && anotherVal !== 'all') {
        const filteredNotes = temp.filter(note => {
          if(note[fieldName] === val && note[anotherField] === anotherVal) {
            return note;
          }
        })
        setViewNotes(filteredNotes)
      }
      else if(val === 'all' & anotherVal !== 'all') {
        const filteredNotes = temp.filter(note => {
          if(note[anotherField] === anotherVal) {
            return note;
          }
        })
        setViewNotes(filteredNotes)
      }
      else {
        const filteredNotes = temp.filter(note => {
          if(note[fieldName] === val) {
            return note;
          }
        })
        setViewNotes(filteredNotes)
      }
      

      
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
        
        <div className='d-flex gap-2'>
          <FloatingLabel controlId="status" label="Status">
              <Form.Select ref={statusRef}  onChange={() => filterNotes('status')}>
                <option value="all">All</option>
                  {
                  status.map(x => {
                    return (<option value={x}>{x}</option>)
                  })
                }
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="priority" label="Priority">
              <Form.Select ref={priorityRef} onChange={() => filterNotes('priority')}>
                <option value="all">All</option>
                  {
                priority.map(x => {
                    return (<option value={x}>{x}</option>)
                  })
                }
              </Form.Select>
            </FloatingLabel>

          <div>
            <button onClick={() => undoSorting()} className='me-2 btn btn-outline-secondary'>Undo Sorting</button>
            <button className='me-2 btn btn-outline-secondary' onClick={handleShow}> ShortCut Tips </button>
          </div>
          
          </div>
        </div>

        <Table className='mt-3' striped responsive bordered hover>
          <thead>
            <tr>
              <th>ID</th>

              <th> Title <SortButton handleSorting={handleSorting} fieldName="title" /> </th>
              <th >Description <SortButton handleSorting={handleSorting} fieldName="description" /> </th>
              <th>priority <SortButton handleSorting={handleSorting} fieldName="priority"/> </th>
              <th>Created At <SortButton handleSorting={handleSorting} fieldName="createdAt" /> </th>
              <th>Updated At <SortButton handleSorting={handleSorting} fieldName="updatedAt" /> </th>
              <th>Status <SortButton handleSorting={handleSorting} fieldName="status" /> </th>


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
