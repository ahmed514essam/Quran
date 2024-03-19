import React, { useEffect, useState } from 'react'
import "./AzkarMasa.css"
import axios from 'axios';
export default function AzkarMasa() {

const [showmasa , setShowmasa] = useState([]);
const [loading , setLoading] = useState(true);
const [error ,setError] = useState(null);

useEffect(() => {

const getApiMasa = async() => {
try {
const res = await axios.get("https://ahegazy.github.io/muslimKit/json/azkar_massa.json");
const data = res.data.content ;
console.log(data)
setShowmasa(data)
setLoading(false)
}catch (error) {
setLoading(false)
    setError(error)
}


}

getApiMasa()

})

const orderDat = () => {
const orderedat =  

}

  return (
    <section>


    </section>
  )
}
