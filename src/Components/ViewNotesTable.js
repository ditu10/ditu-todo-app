import React, { useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  FloatingLabel,
  Form,
  Modal,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FormModal } from "./FormModal";
import { SortButton } from "./SortButton";
import { StatusColor } from "../helper/StatusColor";
import { TodoCart } from "./TodoCard";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Fill } from "react-icons/ri";

export const ViewNotesTable = ({
  notes,
  viewNotes,
  setViewNotes,
  deleteNote,
  addNoteToTable,
  setNotes,
  updateNoteToTable,
}) => {
  const statusRef = useRef();
  const priorityRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const statusVal = {
    Pending: 1,
    "In Progress": 2,
    Completed: 3,
    Failed: 4,
  };

  const status = ["Pending", "In Progress", "Completed", "Failed"];
  const priority = [1, 2, 3, 4, 5];

  const handleSorting = (isAsc, fieldName) => {
    console.log(isAsc + "  " + fieldName);
    const sortProperty = fieldName;
    let temp = [...viewNotes];

    if (sortProperty === "status") {
      temp.sort((a, b) => {
        return isAsc
          ? statusVal[a[sortProperty]] - statusVal[b[sortProperty]]
          : statusVal[b[sortProperty]] - statusVal[a[sortProperty]];
      });
    } else {
      temp.sort((a, b) => {
        return isAsc
          ? a[sortProperty].localeCompare(b[sortProperty])
          : b[sortProperty].localeCompare(a[sortProperty]);
      });
    }

    console.log(temp);
    setViewNotes(temp);
  };

  const filterNotes = (fieldName) => {
    let val;
    let anotherVal;
    let anotherField;

    switch (fieldName) {
      case "status":
        val = statusRef.current.value;
        anotherField = "priority";
        anotherVal = priorityRef.current.value;
        break;
      case "priority":
        val = priorityRef.current.value;
        anotherField = "status";
        anotherVal = statusRef.current.value;
        break;

      default:
        break;
    }
    const temp = [...notes];

    if (val === "all" && anotherVal === "all") {
      setViewNotes(notes);
    } else if (val !== "all" && anotherVal !== "all") {
      const filteredNotes = temp.filter((note) => {
        if (note[fieldName] === val && note[anotherField] === anotherVal) {
          return note;
        }
      });
      setViewNotes(filteredNotes);
    } else if ((val === "all") & (anotherVal !== "all")) {
      const filteredNotes = temp.filter((note) => {
        if (note[anotherField] === anotherVal) {
          return note;
        }
      });
      setViewNotes(filteredNotes);
    } else {
      const filteredNotes = temp.filter((note) => {
        if (note[fieldName] === val) {
          return note;
        }
      });
      setViewNotes(filteredNotes);
    }
  };

  const undoSorting = () => {
    setViewNotes(notes);
    statusRef.current.value = "all";
    priorityRef.current.value = "all";
  };

  return (
    <div className="container mt-3">
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

      <div className="d-flex justify-content-between">
        <FormModal
          addNoteToTable={addNoteToTable}
          heading="Add New Todo"
          buttonName="Add Todo"
        >
          <p className="border p-2 rounded btn btn-outline-primary">Add Todo</p>
        </FormModal>

        <div className="d-md-flex gap-2">
          <FloatingLabel className="mb-2" controlId="status" label="Status">
            <Form.Select ref={statusRef} onChange={() => filterNotes("status")}>
              <option value="all">All</option>
              {status.map((x) => {
                return <option value={x}>{x}</option>;
              })}
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel
            className=" mb-2"
            controlId="priority"
            label="Priority"
          >
            <Form.Select
              ref={priorityRef}
              onChange={() => filterNotes("priority")}
            >
              <option value="all">All</option>
              {priority.map((x) => {
                return <option value={x}>{x}</option>;
              })}
            </Form.Select>
          </FloatingLabel>

          <div className="d-lg-flex mb-2">
            <button
              onClick={() => undoSorting()}
              className="me-2 btn btn-outline-secondary"
            >
              Reset All
            </button>
            <button
              className="me-2 btn btn-outline-secondary"
              onClick={handleShow}
            >
              {" "}
              ShortCut Tips{" "}
            </button>
          </div>
        </div>
      </div>

      {/* table representation */}
      <h3 className="text-center">Table Format</h3>
      <section>
        <Table className="mt-3" striped responsive bordered hover>
          <thead>
            <tr>
              <th>
                <p>Title</p>
                <SortButton
                  handleSorting={handleSorting}
                  fieldName="title"
                />
              </th>
              <th>
                <p>Description</p>
                <SortButton
                  handleSorting={handleSorting}
                  fieldName="description"
                />{" "}
              </th>
              <th>
                <p>priority</p>
                <SortButton
                  handleSorting={handleSorting}
                  fieldName="priority"
                />{" "}
              </th>
              <th>
                <p>Created At</p>
                <SortButton
                  handleSorting={handleSorting}
                  fieldName="createdAt"
                />{" "}
              </th>
              <th>
                <p>Updated At</p>
                <SortButton
                  handleSorting={handleSorting}
                  fieldName="updatedAt"
                />
              </th>
              <th>
                <p>Status</p>
                <SortButton handleSorting={handleSorting} fieldName="status" />{" "}
              </th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {viewNotes.map((note, key) => {
              return (
                <tr key={key}>
                  <td>{note.title}</td>
                  <td>{note.description}</td>
                  <td>{note.priority}</td>
                  <td>{note.createdAt}</td>
                  <td>{note.updatedAt}</td>
                  <td>{note.status}</td>
                  <td>
                    <div className="d-flex">
                      <FormModal
                        updateNoteToTable={updateNoteToTable}
                        note={note}
                        heading="Update Todo"
                        buttonName="Update"
                      >
                        <CiEdit className="fs-3 me-2 text-success" />
                      </FormModal>
                      <div
                        className="text-danger"
                        onClick={() => deleteNote(note.id)}
                      >
                        <RiDeleteBin2Fill
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteNote(note.id)}
                          className="fs-3"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>

      <h3 className="text-center mt-5 mb-4">Card Format</h3>
      <section className="row mt-3">
        {viewNotes.map((note) => {
          return (
            <TodoCart
              note={note}
              StatusColor={StatusColor}
              updateNoteToTable={updateNoteToTable}
              deleteNote={deleteNote}
            />
          );
        })}
      </section>
    </div>
  );
};
