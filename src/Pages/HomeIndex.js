import React from "react";
import MyNavbar from "../Navbar/MyNavbar";
import { NavLink, Navigate } from "react-router-dom";

export const HomeIndex = () => {
  const deleteAllNotesFromLocalStorage = () => {
    const opinion = window.confirm(
      "Are you sure to delete all the notes from Local storage?"
    );
    if (opinion) {
      localStorage.removeItem("notes");
    } else {
    }
  };
  return (
    <div>
      <MyNavbar />
      <h2 className="mt-3">Welcome to the TODO App</h2>
      <NavLink to={'/todos'}>
        <button className="mx-auto mt-0 rounded btn btn-outline-success me-2">
          Get Started
        </button>
      </NavLink>
      <button
        onClick={deleteAllNotesFromLocalStorage}
        className="mx-auto mt-0 rounded btn btn-outline-danger me-2"
      >
        Clear All Notes
      </button>
      
    </div>
  );
};
