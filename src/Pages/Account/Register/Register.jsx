import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from  "./Register.module.css";
import RegisterTwo from './RegisterTwo';

export default function Register({ setDisplay }) {

const navicate = useNavigate();
const [fname , setFname] = useState('');
const [lname , setLname] = useState('');
const [email , setEmail] = useState('');
const [pass , setPass] = useState('');
const [conpass , setConpass] = useState('');
const [age , setAge] = useState('');

const [err , setErr] = useState('');
const [erre , setErre] = useState('');

const [alert , setAlert] = useState(false);

const [sup , setSup ] = useState(true);

  const handleConfirm = () => {

    if (fname != "" || lname != "" || email != "" || pass != "" || conpass != "" || age != ""  ) {


if (pass != conpass) {
setErre("They are not identical")
}
else {

  setSup(false)

}



    }
    else {
     setErr("You must fill in all fields in order to process the data")
    }

const userData = {
fname : fname ,
lname : lname ,
email : email ,
pass : pass ,
conpass : conpass ,
age : age
}

localStorage.setItem("Data" , JSON.stringify(userData));    


  }

const resetdata =()=> {
  setAge == "" ,
  setConpass == "" ,
  setEmail == "" ,
  setFname == "" ,
  setLname == "" ,
  setPass == ""
}

const falsealert = () => {
  setAlert(false)
}
  


  return (
    <>
      {sup ? (

        <>
    <section className={styles.sectionRegister}>
      <h1 className="text-center text-light">Sign Up</h1>
      <div className={styles.allDivsInputs}>
        <form >
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
          <p className="text-danger text-center">{erre}</p>
          <div  className={styles.divEachIn}>
            <label htmlFor="age">Age</label>
            <input id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className={styles.trueLink}>
<button type="submit" onClick={handleConfirm} className={styles.btncon}>Confirm</button>
<button onClick={resetdata} className={styles.btnres}>Reset</button>

   </div>

<p className="text-danger text-center">{err}</p>

        </form>
      </div>



    </section>
{alert ? (
  <div className={styles.overlay}>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>OH!</strong> You must fill in all fields in order to process the data
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={falsealert}></button>
</div>
</div>
): null }
    </>

      ) : 
      
      <RegisterTwo setDisplay={setDisplay}/>
      }
    </>
   
  );
}
