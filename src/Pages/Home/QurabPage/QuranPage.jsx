import React, { useEffect, useState } from 'react'

export default function QuranPage() {
const [soraname , setSoraame] = useState([]);

const getFromApi = async() => {

    const res = await fetch("http://api.alquran.cloud/v1/quran/en.asad")
    const data = await res.json()

setSoraame(data?.data || [])
console.log(data?.data || [])
}

useEffect(() => {

getFromApi()

},[])

// const getResultsFromAPI = async () => {
  

//     setResults(data?.query?.search || [])
// }




  return (
    <>
        <section>
            <h2>h</h2>

<div >


    <div className="container text-center bg-light">
  <div className="row g-3">
    <div className="col-4">
      <div className="p-3">u</div>
    </div>
 
  </div>
</div>





</div>




        </section>
    </>
  )
}
