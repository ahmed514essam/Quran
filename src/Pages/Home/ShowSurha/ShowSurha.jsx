import React, { useEffect, useState } from 'react'
import style from "./ShowSurha.module.css"
import { useParams } from 'react-router-dom'
export default function ShowSurha() {
  
  const { number } = useParams();
  

const [ showsurhas , setShowsurhas ] = useState([]);

const [filterItem, setFilterItem] = useState({});
const getFromApi = async(number) => {

  const res = await fetch("https://api.alquran.cloud/v1/quran/quran-uthmani?fbclid=IwAR3eIwExTevgZklOA3-QknwpkO-1eQaPngrh97EmYYUV-8hW7_38lMcyvtM")
  const data = await res.json()

  const filtered = data.data.surahs.find((item) => item.number == number);
setFilterItem(filtered);
console.log(data?.data?.surahs || [])
}

useEffect(() => {

getFromApi(number);

},[number])







    return (
  
<section className={style.seconesurha}>

<nav className="w-75 m-auto m-sm-100 border-bottom border-secondary d-flex flex-row justify-content-around align-items-center">

<div className=" d-flex  justify-content-center  align-items-center rounded-pill">

<p> {filterItem.ayahs?.length} : <span className="text-secondary">عدد الايات</span></p>
</div>

<div>
<h6>{filterItem.name}</h6>
</div>

<div>
<p>{filterItem.
revelationType
}</p>
</div>



</nav>

<h1 className={style.honebasmala}>بسم الله الرحمن الرحيم </h1>

<div className={style.divdatasurha}>

<p>{filterItem.number}</p>

<p>{filterItem.ayahs?.text}</p>

</div>


</section>



   
  )
}
