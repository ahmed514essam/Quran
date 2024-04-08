import React, { useState } from 'react';
import "./ContactUs.css";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        area: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const resetInputs = () => {
        setFormData({
            name: '',
            email: '',
            city: '',
            area: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: "ahmedessaam124@gmail.com",
                subject: `Message from ${formData.name} `,
                message: `<p>name : ${formData.name}</p>
                          <p>city : ${formData.city}</p>
                          <p>Email : ${formData.email}</p>
                          <p>message : ${formData.area}</p>`,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data));

        resetInputs();
    };

    return (
        <section className="sectioncontact">
            <h1 className="text-center text-light pb-5">Contact Us</h1>
            <p className="pb-5">We are pleased with your support or suggestions to improve the site, and therefore we have provided you with a form to express your opinion</p>

            <div className="contentAboutForm">
                <form onSubmit={handleSubmit}>
                    <div className="eachinput">
                        <label htmlFor="name">Name</label>
                        <input className="myname" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="eachinput">
                        <label htmlFor="email">Email</label>
                        <input className="myemail" type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="eachinput">
                        <label htmlFor="city">City</label>
                        <input className="mycity" type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="eachinpute">
                        <textarea className="area" name="area" value={formData.area} onChange={handleChange} placeholder="What are your suggestions?" required></textarea>
                    </div>
                    <div className="contentbtns">
                        <button type="reset" className="btnsreset" onClick={resetInputs}>Reset</button>
                        <button type="submit" className="btnsdone">Done</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
