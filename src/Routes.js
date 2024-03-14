import {
    createBrowserRouter,
  } from "react-router-dom";
import React from 'react'
import App from "./App";
import { Navbar } from "react-bootstrap";
import { ErrorPage } from "./Pages/ErrorPage";
import MyNavbar from "./Navbar/MyNavbar";
import { AddNote } from "./Pages/AddNote";


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
    }
    
  ]);
  export default router;
 
      


  
