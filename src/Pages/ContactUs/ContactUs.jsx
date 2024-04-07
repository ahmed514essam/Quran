import React, { useState } from 'react'
import "./ContactUs.css"
export default function ContactUs() {

    const [ myname , setMyname ] = useState();
    const [ myemail , setMyemail ] = useState();
    const [ mycity , setMycity ] = useState();
    const [ area , setArea ] = useState();


    const contactForm = () => {

        e.preventDefault()
    
        const emailMessage = getEmailMessage({
    
           
    
            myname: myname,
            myemail: myemail,
            mycity: mycity ,
            area: area,
    
    
    
        })
  


    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "ahmedessaam124@gmail.com", 
            subject: "Message about Quran Project",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyname = ""
            setMyemail = ""
            setMycity = ""
            setArea = ""
        })
    }

        const getEmailMessage = ({ myname, myemail , mycity , area } = {}) => {
            return `
                <p>You have received a new message from your contact form website:</p>
                <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
                    <p style="margin: 0;">Name: ${myname}</p>
                    <p style="margin: 12px 0;">Email: ${myemail}</p>
                    <p style="margin: 12px 0;">City: ${mycity}</p>
                    <p style="margin: 0;">suggestion: ${area}</p>
                </div>
            `
        }


  return (
    <section className="sectioncontact">
<h1 className="text-center text-light pb-5"> Contact Us</h1>
<p className="pb-5">We are pleased with your support or suggestions to improve the site, and therefore we have provided you with a form to express your opinion</p>

<div className="contentAboutForm">
<form >

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
<button onClick={contactForm} className="btnsdone">Done</button>
</div>
</form>
</div>


    </section>
  )
}
