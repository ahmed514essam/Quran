import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./Log.module.css";

export default function LogIn() {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUserData = localStorage.getItem('Data');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLoginee = () => {
    // Check if email and password are empty
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Check if email and password match the stored user data
    if (userData && email === userData.email && password === userData.password) {
      localStorage.setItem('email', email);
      // Redirect or show success message
    } else {
      setError('Email or Password incorrect');
    }
  };

  return (
    <section>
      <h1 className="text-center text-light">Log In</h1>
      <div className={style.allDivsInputs}>
        <form>
          <div className={style.divEachIn}>
            <label htmlFor="pas">Email</label>
            <input id="pas" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className={style.divEachIn}>
            <label htmlFor="copas">Password</label>
            <input id="copas" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className={style.trueLink}>
            <button onClick={handleLoginee} className={style.log}>Log In</button>
            <Link className={style.lnk}>Forget Password</Link>
          </div>
        </form>
        {error && <p className={style.errr}>{error}</p>}
      </div>
    </section>
  );
}
