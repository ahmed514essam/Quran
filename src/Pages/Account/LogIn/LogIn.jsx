import React from 'react'
import "./Log.css"
export default function LogIn() {



const hadleChange = () => {

}

  return (
   <section>


<h1 className="text-center text-light"> Log In </h1>

<div className="allDivsInputs">
<form>


<div className="divEachIn">
    <label for="pas">Email</label>
    <input id="pas" type="email" onChange={hadleChange}/>
</div>

<div className="divEachIn">
    <label for ="copas"> Password</label>
    <input id="copas" type="password" onChange={hadleChange}/>
</div>



</form>
</div>


   </section>
  )
}
