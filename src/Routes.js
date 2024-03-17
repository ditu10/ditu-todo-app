import {
    createBrowserRouter,
  } from "react-router-dom";
import React from 'react'
import App from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import { ShowNotes } from "./Pages/ShowNotes";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      errorElement: <ErrorPage/>,
    }, 
    {
        path: "/about",
        element : <App/>
    },
    
    {
      path: "/notes",
      element: <ShowNotes/>
    },
    
    
  ]);
  export default router;
 
      


  
