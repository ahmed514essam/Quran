import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import Home from "./Pages/Home/Home";
import Root from "./Root";

import { BrowserRouter , Route , Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import ShowSurha from "./Pages/Home/ShowSurha/ShowSurha";
import Radio from "./Pages/Radio/Radio";
import Azkar from "./Pages/Azkar/Azkar";
import AzkarSabah from "./Pages/Azkar/AzkarSabah/AzkarSabah";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
  <Route path="/" element={<Home/>} />
  <Route path="/:number" element={<ShowSurha/>} />
  <Route path="/radio" element={<Radio/>} />
  <Route path="/Azkary" element={<Azkar/>} />
<Route path="/azkarelsabah" element={<AzkarSabah/>}/>

  
  </Route>
 
      </Routes>
    </BrowserRouter>
    


  )
}

export default App
