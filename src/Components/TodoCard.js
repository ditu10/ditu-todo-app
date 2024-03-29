import React from "react";
import { FormModal } from "./FormModal";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

export const TodoCart = ({note, StatusColor, updateNoteToTable, deleteNote}) => {
  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div style={{}} className="card my-card h-100 text-bg-light">
        <div
          className={`card-header text-white d-flex justify-content-between ${
            StatusColor[note.status]
          }`}
        >
          <p className="fs-5 my-0"> {note.status} </p>
          <div>
            <FormModal
              updateNoteToTable={updateNoteToTable}
              note={note}
              heading="Update Todo"
              buttonName="Update"
            >
              <CiEdit className="fs-3 me-2" />
            </FormModal>
            <RiDeleteBin2Fill
              style={{ cursor: "pointer" }}
              onClick={() => deleteNote(note.id)}
              className="fs-3"
            />
          </div>
        </div>
        <div className="card-body d-flex justify-content-between flex-column">
          <div>
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text ">{note.description}</p>
          </div>
          <div className="mt-2">
            {/* <span className="text-secondary">Priority : </span> */}
            {Array.from({ length: note.priority }, (_, index) => {
              return <FaStar />;
            })}
          </div>
        </div>
        <div className="card-footer">
          {/* <p className="text-secondary m-0 p-0 ">Created: {note.createdAt}</p> */}
          <small className="text-secondary m-0 p-0 ">
            Last Modified: {note.updatedAt}
          </small>
        </div>
      </div>
    </div>
  );
};
