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
import AzkarMasa from "./Pages/Azkar/AzkarMasa/AzkarMasa";
import AzkarSala from "./Pages/Azkar/AzkarSala/AzkarSala";
import TalemElden from "./Pages/TalemElden/TalemElden";
import Abadat from "./Pages/TalemElden/TalemCompo/Abadat/Abadat";
import Mnasbat from "./Pages/TalemElden/TalemCompo/Mnasbat/Mnasbat";
import Akida from "./Pages/TalemElden/TalemCompo/Akida/Akida";
import QuranKarim from "./Pages/TalemElden/TalemCompo/QuranKarim/QuranKarim";
import Sona from "./Pages/TalemElden/TalemCompo/SonaNabwia/Sona";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProfilePage from "./Pages/Account/ProfilePage/ProfilePage";

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
<Route path="/azkarelmasaa" element={<AzkarMasa/>} />
<Route path="/azkarsalaa" element={<AzkarSala/>} />
<Route path="/taliameldi" element={<TalemElden/>} />
<Route path="/taliameldi/abadat" element={<Abadat/>} />
<Route path="/taliameldi/moasbat" element={<Mnasbat/>} />
<Route path="/taliameldi/akida" element={<Akida/>} />
<Route path="/taliameldi/qurakarim" element={<QuranKarim/>} />
<Route path="/taliameldi/sonanawia" element={<Sona/>} />
<Route path="/contactus" element={<ContactUs/>} />
<Route path="/account" element={<ProfilePage/>} />
  
  </Route>
 
      </Routes>
    </BrowserRouter>
    


  )
}

export default App
