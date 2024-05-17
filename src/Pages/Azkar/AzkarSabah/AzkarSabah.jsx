import React, { useEffect, useState } from 'react';
import "./AzkarSabah.css";
import axios from 'axios';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';

export default function AzkarSabah() {
  const [showazkars, setShowazkars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const getSabahApi = async () => {
      try {
        const res = await axios.get("https://ahegazy.github.io/muslimKit/json/azkar_sabah.json");
        const data = res.data.content;
        setShowazkars(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    getSabahApi();
  }, []); // Added an empty dependency array to run the effect only once after the initial render

  const orderData = () => {
    const orderedData = [...showazkars].sort((a, b) => {
      // Assuming 'bless' is a string representing a number, convert it to a number before comparison
      return parseInt(a.bless) - parseInt(b.bless);
    });
    setShowazkars(orderedData);
  };

  useEffect(() => {
    if (!loading && showazkars.length > 0) {
      orderData();
    }
  }, [loading, showazkars]); // Added showazkars as a dependency to re-order the data when it changes






  return (
    <>
    <section className="sectionAzkaryAll">
<h1>أذكار الصباح</h1>

    <div className="contentAllDiv">

   
      {showazkars.map((item, index) => (
        <div className="DivOneZekr"  key={index}>
        
        
          <p className="text-center pt-4">{item.zekr}</p>
          <p className="text-center">تقرأ   {item.repeat}  من المرات </p>
        </div>
      ))}
      </div>
    </section>
    <ScrollToTopButton />
    </>
  );
}
