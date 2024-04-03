import React, { useState } from 'react'
import "./ContactUs.css"
export default function ContactUs() {

    const [ myname , setMyname ] = useState("");
    const [ myemail , setMyemail ] = useState("");
    const [ mycity , setMycity ] = useState("");
    const [ area , setArea ] = useState("");


  return (
    <section className="sectioncontact">
<h1 className="text-center text-light pb-5"> Contact Us</h1>
<p className="pb-5">We are pleased with your support or suggestions to improve the site, and therefore we have provided you with a form to express your opinion</p>

<div className="contentAboutForm">
<form>

<div className="eachinput">
    <label for="name">Name</label>
    <input value={myname} type="text" id="name" />
</div>

<div className="eachinput">
    <label for="email"> Email</label>
    <input value={myemail} type="email" id="email" required/>
</div>

<div className="eachinput">
    <label for="city">City</label>
    <input value={mycity} type="text" id="city" />
</div>

<div className="eachinpute">
    
    <textarea value={area}  placeholder="What are your suggestions?"  required/>
</div>

<div className="contentbtns">
    <button  className="btnsreset">Reset</button>
<button className="btnsdone">Done</button>
</div>
</form>
</div>


    </section>
  )
}
