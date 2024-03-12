import React, { useState } from 'react'
import style from "./ShowSurha.module.css"
import { useParams } from 'react-router-dom'
export default function ShowSurha() {
  
  const { number } = useParams();
  

const [ showsurhas , setShowsurhas ] = useState({});





    return (
  
<section className={style.seconesurha}>

<h1>بسم الله الرحمن الرحيم </h1>
</section>



   
  )
}
