import React, { useRef } from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from "uuid";


export const FormModal = ({heading, buttonName, addNoteToTable, note, updateNoteToTable}) => {

  const title = useRef();
  const description = useRef();
  const priority = useRef();
  const status = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clearForm =() =>{
    title.current.value = note? note.title : "";
    description.current.value = note? note.description : "";
    priority.current.value = note? note.priority : 3;
    status.current.value = note? note.status : "Pending"
  }

  const handleSubmit = () => {
    
    const formData = {
        title: title.current.value,
        description: description.current.value,
        priority: priority.current.value,
        status: status.current.value,
        updatedAt: new Date()
      };

      if(!note) {
        formData.id = uuid().slice(0,8)
        formData.createdAt = new Date()
      } else {
        formData.id = note.id;
        formData.createdAt = note.createdAt;
      }
      console.log(formData)
      
      if(note) {
        updateNoteToTable(formData)
      }else{
          addNoteToTable(formData)
      }
      clearForm()
      setShow(false)
      
  }
  return (
    <>
    <Button className='border' variant="outline-primary" onClick={handleShow}>
        {buttonName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form>
            <Form.Group className="mb-3" controlId="">
                <Form.Control ref={title} type="text" placeholder="title" defaultValue={note? note.title : ""} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
                <Form.Control ref={description} type="text" defaultValue={note? note.description : ""} placeholder="Description" />
            </Form.Group>

            <Form.Label>priority</Form.Label>
            <Form.Select ref={priority} defaultValue={note? note.priority : 3}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </Form.Select>

            <Form.Label>Status</Form.Label>
            
            <Form.Select ref={status} defaultValue={note? note.status : "Pending"}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
            
            </Form.Select>

            <Button variant='outline-danger' className='w-100 mt-4 mb-2 py-2' onClick={clearForm}>clear</Button>

            <Button onClick={() => handleSubmit()} className='w-100 my-0 py-2' variant="outline-success" type="button">
                Submit
            </Button>
        </Form>

        </Modal.Body>
        
      </Modal></>
  )
}
