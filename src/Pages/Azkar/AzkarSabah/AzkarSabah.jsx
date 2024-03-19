import React, { useEffect, useState } from 'react'
import "./AzkarSabah.css"
import axios from 'axios'


export default function AzkarSabah() {


    const [showazkars, setShowazkars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {

const getSabahApi = async () => {

try {
const res = await axios.get("https://ahegazy.github.io/muslimKit/json/azkar_sabah.json") ;
const data = res.data ;
console.log(data)
setShowazkars(data)
setLoading(false)
} catch {
setLoading(false);
setError(error);
}




}


getSabahApi()
})

  return (
    <div>




    </div>
  )
}
