import React, { useState } from 'react'
import "./ContactUs.css"
export default function ContactUs() {
const [ formData , setformData ] = useState({
    name: "",
    email: "",
    city: "",
    suggest: "" , 
});

const handelReset = () => {
    setformData({
        name: "",
        email: "",
        city: "",
        suggest: "" ,
    })
};
  return (
    <section className="sectioncontact">
<h1 className="text-center text-light pb-5"> Contact Us</h1>
<p className="pb-5">We are pleased with your support or suggestions to improve the site, and therefore we have provided you with a form to express your opinion</p>

<div className="contentAboutForm">
<form>

<div className="eachinput">
    <label for="name">Name</label>
    <input value={formData.name} type="text" id="name" />
</div>

<div className="eachinput">
    <label for="email"> Email</label>
    <input value={formData.email} type="email" id="email" required/>
</div>

<div className="eachinput">
    <label for="city">City</label>
    <input value={formData.city} type="text" id="city" />
</div>

<div className="eachinpute">
    
    <textarea value={formData.suggest} placeholder="What are your suggestions?"  required/>
</div>

<div className="contentbtns">
    <button onClick={handelReset} className="btnsreset">Reset</button>
<button className="btnsdone">Done</button>
</div>
</form>
</div>


    </section>
  )
}
