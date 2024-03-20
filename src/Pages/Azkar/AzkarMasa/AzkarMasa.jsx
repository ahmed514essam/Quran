import React, { useEffect, useState } from 'react'
import "./AzkarMasa.css"
import axios from 'axios';
export default function AzkarMasa() {

  const [showmasa, setShowmasa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const getSabahApi = async () => {
      try {
        const res = await axios.get("https://ahegazy.github.io/muslimKit/json/azkar_massa.json");
        const data = res.data.content;
        setShowmasa(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    getSabahApi();
  },[] ); 
 

  return (
    <section className="sectionAzkaryAlle">
    <h1>أذكار المساء</h1>
    
        <div className="contentAllDive">
    
       
          {showmasa.map((item, index) => (
            <div className="DivOneZekre"  key={index}>
            
            
              <p className="text-center pt-4">{item.zekr}</p>
              <p className="text-center">تقرأ   {item.repeat}  من المرات </p>
            </div>
          ))}
          </div>
        </section>
  )
}
