import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ReadSora from "./Pages/ReadSora/ReadSora";
import Home from "./Pages/Home/Home";
import Root from "./Root";

import { BrowserRouter , Route , Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
  <Route path="/" element={<Home/>} />
  <Route path="/Mosaf" element={<ReadSora/>} />
  </Route>
      </Routes>
    </BrowserRouter>
    


  )
}

export default App
