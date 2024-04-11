import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Log.module.css"

export default function LogIn() {



const hadleChange = () => {

}

  return (
   <section>


<h1 className="text-center text-light"> Log In </h1>

<div className={style.allDivsInputs}>
<form>


<div className={style.divEachIn}>
    <label for="pas">Email</label>
    <input id="pas" type="email" onChange={hadleChange}/>
</div>

<div className={style.divEachIn}>
    <label for ="copas"> Password</label>
    <input id="copas" type="password" onChange={hadleChange}/>
</div>

<div className={style.trueLink}>

<button className={style.log}>Log In</button>

<Link className={style.lnk}> Forget Password </Link>

</div>

</form>
</div>


   </section>
  )
}
