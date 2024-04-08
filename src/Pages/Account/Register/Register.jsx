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

const [errEmail , setErrEmail] = useState();

let email = formData.email ;
// let email = formData.email ;
// let email = formData.email ;
// let email = formData.email ;
// let email = formData.email ;

  function getEmailErrors(email = "") {
    const errors = [], EMAIL_REGEX_PATTERN = /^[a-z]\w{2,}@\w{2,}\.\w{2,}$/
    if(email.trim().length === 0) {
        errors.push("Email can't be empty")
        setErrEmail("Nooo")
    }
    if(!EMAIL_REGEX_PATTERN.test(email)){
        errors.push("Email must be valid")
    }

    return errors ;
}
 

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
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <span>{errEmail}</span>
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
