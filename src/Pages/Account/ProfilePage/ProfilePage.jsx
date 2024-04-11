import React, { useState } from 'react'
import "./ProfilePage.css"
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';

export default function ProfilePage() {

const [ page , setPage ] = useState(false);


const clicksubbtn = () => {
    setPage(false)
}
const clicksubbt = () => {
    setPage(true)
}





  return (
    <section className="mainSection">

{page ? (
    <>
   <Register/>
 
   <div className="haveAcc w-100 text-center">
   <Link onClick={clicksubbtn} className="linkHave"> Already have Account</Link>
   </div>
   </>
) : (
<>
<LogIn/>

<span className="crediv">
<Link onClick={clicksubbt} className="create">Create Account</Link>
</span>
</>
)}





    </section>
  )
}
