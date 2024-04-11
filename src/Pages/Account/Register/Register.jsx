import React, { useState } from 'react';
import "./Register.css";

export default function Register() {





  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    conpassword: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  return (
    <section className="sectionRegister">
      <h1 className="text-center text-light">Sign Up</h1>
      <div className="allDivsInputs">
        <form>
          <div className="RowInput">
            <div className="divEachIn">
              <label htmlFor="fname">First Name</label>
              <input id="fname" type="text" name="fname" value={formData.fname} onChange={handleChange} />
            </div>
            <div className="divEachIn">
              <label htmlFor="lname">Last Name</label>
              <input id="lname" type="text" name="lname" value={formData.lname} onChange={handleChange} />
            </div>
          </div>
          <div className="divEachIn">
            <label htmlFor="email">Email</label>
            <input id="email" type="email"    name="email" value={formData.email} onChange={handleChange} />
        
          </div>
          <div className="RowInput">
            <div className="divEachIn">
              <label htmlFor="pass">Password</label>
              <input id="pass" type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="divEachIn">
              <label htmlFor="copass">Confirm Password</label>
              <input id="copass" type="password" name="conpassword" value={formData.conpassword} onChange={handleChange} />
            </div>
          </div>
          <div className="divEachIn">
            <label htmlFor="age">Age</label>
            <input id="age" name="age" value={formData.age} onChange={handleChange} />
          </div>
        </form>
      </div>
    </section>
  );
}
