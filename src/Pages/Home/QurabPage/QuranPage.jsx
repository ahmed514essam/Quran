import React, { useEffect, useState } from 'react'
import "./quran.css" ;
export default function QuranPage() {
const [soraname , setSoraame] = useState([]);

const getFromApi = async() => {

    const res = await fetch("https://mp3quran.net/api/v3/suwar?language=er")
    const data = await res.json()

setSoraame(data?.suwar)
console.log(data?.suwar)
}

useEffect(() => {

getFromApi()

},[])




  return (
    
        
          
<div className="container text-center">
<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">


{soraname.map(item => (
  <div className="col" >
  <div className="contetB bg-dark text-light p-3">
  <span>{item.makkia ? <span>مكية </span> : <span>مدنية</span>}</span>
      <div >{item.name}</div>
    </div>
    </div>
))}


   
 
 
 







</div>




      </div> 
 
  )
}
