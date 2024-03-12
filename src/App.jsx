import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import Home from "./Pages/Home/Home";
import Root from "./Root";

import { BrowserRouter , Route , Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import ShowSurha from "./Pages/Home/ShowSurha/ShowSurha";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
  <Route path="/" element={<Home/>} />
 
  </Route>
  <Route path="/surha" element={<ShowSurha/>} />
      </Routes>
    </BrowserRouter>
    


  )
}

export default App
