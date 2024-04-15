import React, { useEffect, useState } from 'react';

import styles from "./Register.module.css" ;
import { Link, useNavigate } from 'react-router-dom';
export default function RegisterTwo({ setDisplay }) {
    const navicate = useNavigate();
    const [userData, setUserData] = useState({});
    const [userPage, setUserPage] = useState(true);
    const [ done , setDone ] = useState('');
const [ meser , setMeser] = useState('');
    useEffect(() => {
        const getCoEmail = localStorage.getItem("Data");

        if (getCoEmail) {
            setUserData(JSON.parse(getCoEmail));
        }
    }, []);

   

    const back = () => {
        navicate("/account")
    }
const sendtr = (e) => {
    e.preventDefault();
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: `${userData.email}`,
                subject: "Your Code to Confirm Email",
                message: `<p>Code : 251026</p>`,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data));
        setUserPage(false);
    }
 
    const resend = (e) => {
       

        e.preventDefault();
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: `${userData.email}`,
                subject: "Your Code to Confirm Email",
                message: `<p>Code : 511202</p>`,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data));


    }
const sureEmail = () => {
    if (done == "251026" || done == "511202") {
        setDisplay(true);

    }else {
        setMeser("Email Or Password Incorrect")
    }
}
    return (
        <>
          {userPage ? (

            <section className={styles.sectionConfirm}>
                <div className={styles.divMainContent}>
                    <h3>You must confirm the email by sending the code to  <span>{userData.email}</span></h3>
              
                    <div className={styles.divBtnsR}>
                        <button onClick={sendtr}>Send</button>

<button onClick={back}>Back</button>
                       
                    </div>
                    </div>
                </section>

          ) : (



            <section className={styles.sectionConfirm}>
                <div className={styles.divMainContent}>
                    <h3>We have sent the code to   <span>{userData.email}</span></h3>
              <input
                type='text'
name="confirm"
value={done}
onChange={(e) => setDone(e.target.value)}
placeholder="Enter Code"
              />
              <p className="text-center text-danger">{meser}</p>
                    <div className={styles.divBtnsRe}>
                        <button onClick={sureEmail}>Confirm</button>

<Link className={styles.link} onClick={resend}>Resend</Link>
                       
                    </div>
                    </div>
                </section>


          )}
            



      </> 
    );
}
