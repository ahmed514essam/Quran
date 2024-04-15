import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Log.module.css"

export default function LogIn() {



  const [userData, setUserData]= useState(null);

  useEffect(()=> {
    const storedUserData = localStorage.getItem('Data');

  
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
}, [])
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');





const handleLogin = () => {
  
  if (email === userData.email && password === userData.password) {
   
    localStorage.setItem('isLoggedIn', true);
   
    localStorage.setItem('email', email);

    
    setDisplay(true)

  } else {
   
    setError('Email or Password incorrect');
  }
};


  return (
   <section>


<h1 className="text-center text-light"> Log In </h1>

<div className={style.allDivsInputs}>
<form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} >


<div className={style.divEachIn}>
    <label for="pas">Email</label>
    <input id="pas" type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
    <div className="valid-feedback">
      Looks good!
    </div>
</div>

<div className={style.divEachIn}>
    <label for ="copas"> Password</label>
    <input id="copas" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <div className="valid-feedback">
      Looks good!
    </div>
</div>

<div className={style.trueLink}>

<button type="submit" className={style.log}>Log In</button>

<Link className={style.lnk}> Forget Password </Link>

</div>

</form>
{error && <p>{error}</p>}
</div>


   </section>
  )
}
