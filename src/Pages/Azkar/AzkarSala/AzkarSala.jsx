import React, { useEffect, useState } from 'react'
import "./AzkarSala.css"
import axios from 'axios';
export default function AzkarSala() {

const [showsala , setShowsala] = useState([]);
const [error , setError] = useState(null);
const [loading , setLoading] = useState(true);

useEffect(() => {
const getSalaApi = async() => {
    try{
const res = await axios.get("https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json")
const data = res.data.content ;
setShowsala(data);
setLoading(false) 
}
    catch (error) {
        setError(error)
        setLoading(false)
    }
} 

getSalaApi()
},[])

  return (
    <section className="sectionAzkaryAller">
    <h1>أذكار بعد الصلاء</h1>
    
        <div className="contentAllDiver">
    
       
          {showsala.map((item, index) => (
            <div className="DivOneZekrer"  key={index}>
            
            
              <p className="text-center pt-4">{item.zekr}</p>
              <p className="text-center">تقرأ   {item.repeat}  من المرات </p>
            </div>
          ))}
          </div>
        </section>
  )
}
