import React, { useState } from 'react';
import styles from  "./Register.module.css";

export default function Register() {


const [fname , setFname] = useState('');
const [lname , setLname] = useState('');
const [email , setEmail] = useState('');
const [pass , setPass] = useState('');
const [conpass , setConpass] = useState('');
const [age , setAge] = useState('');

  const handleConfirm = () => {




    
  }

  


  return (
    <section className={styles.sectionRegister}>
      <h1 className="text-center text-light">Sign Up</h1>
      <div className={styles.allDivsInputs}>
        <form>
          <div className={styles.RowInput}>
            <div className={styles.divEachIn}>
              <label htmlFor="fname">First Name</label>
              <input id="fname" type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div  className={styles.divEachIn}>
              <label htmlFor="lname">Last Name</label>
              <input id="lname" type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
            </div>
          </div>
          <div  className={styles.divEachIn}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"    name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
          </div>
          <div  className={styles.RowInput}>
            <div className={styles.divEachIn}>
              <label htmlFor="pass">Password</label>
              <input id="pass" type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div  className={styles.divEachIn}>
              <label htmlFor="copass">Confirm Password</label>
              <input id="copass" type="password" name="conpassword" value={conpass} onChange={(e) => setConpass(e.target.value)} />
            </div>
          </div>
          <div  className={styles.divEachIn}>
            <label htmlFor="age">Age</label>
            <input id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className={styles.trueLink}>
<button onClick={handleConfirm} className={styles.btncon}>Confirm</button>
<button className={styles.btnres}>Reset</button>

   </div>
        </form>
      </div>
    </section>
  );
}
