import {
    createBrowserRouter,
  } from "react-router-dom";
import React from 'react'
import App from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import { ShowNotes } from "./Pages/ShowNotes";
import { TrackTodo } from "./Pages/TrackTodo";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      errorElement: <ErrorPage/>,
    }, 
    {
        path: "/track_todo",
        element : <TrackTodo/>
    },
    
    {
      path: "/todos",
      element: <ShowNotes/>
    },
    
    
  ]);
  export default router;
 
      


  
