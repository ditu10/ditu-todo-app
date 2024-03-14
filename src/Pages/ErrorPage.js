import { useRouteError } from "react-router-dom";

import React from 'react'
import MyNavbar from "../Navbar/MyNavbar";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="App" id="error-page">
      <MyNavbar/>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
