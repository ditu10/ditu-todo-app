import {
    createBrowserRouter,
  } from "react-router-dom";
import React from 'react'
import App from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import MyNavbar from "./Navbar/MyNavbar";
import { AddNote } from "./Pages/AddNote";
import { ShowNotes } from "./Pages/ShowNotes";
import { UpdateNote } from "./Pages/UpdateNote";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      errorElement: <ErrorPage/>,
    }, 
    {
        path: "/about",
        element : 
        <div className="App">
          <MyNavbar/>
          <h2>This is about page</h2>
        </div>
    },
    {
      path: "/addNote",
      element : <AddNote/>
    },
    {
      path: "/notes",
      element: <ShowNotes/>
    },
    {
      path: "/updateNote/:id",
      element: <UpdateNote/>
    }
    
  ]);
  export default router;
 
      


  
