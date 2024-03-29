import React, { useEffect, useState } from 'react';
import style from "./ShowSurha.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Mapping object for translation
const revelationTypes = {
  'Meccan': 'مكية',
  'Medinan': 'مدنية'
};

export default function ShowSurha() {
  const { number } = useParams();

  const [filterItem, setFilterItem] = useState({});
  const [filayahs, setFilayahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFromApi = async () => {
      try {
        const res = await axios.get("https://api.alquran.cloud/v1/quran/quran-uthmani");
        const data = res.data.data;
        const filteredSurah = data.surahs.find((item) => item.number === parseInt(number));
        setFilterItem(filteredSurah);
        setFilayahs(filteredSurah.ayahs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getFromApi();
  }, [number]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Function to translate the revelation type to Arabic
  const translateRevelationType = (type) => {
    return revelationTypes[type] || type;
  };

  return (
    <section className={style.seconesurha}>
      <nav className="w-75 m-auto m-sm-100 border-bottom border-secondary d-flex flex-row justify-content-around align-items-center">
        <div className="d-flex justify-content-center align-items-center rounded-pill">
          <p>{filterItem.ayahs.length} : <span className="text-secondary">عدد الايات</span></p>
        </div>
        <div>
          <h6>{filterItem.name}</h6>
        </div>
        <div>
          {/* Translate the revelation type */}
          <p>{translateRevelationType(filterItem.revelationType)}</p>
        </div>
      </nav>
      <h1 className={style.honebasmala}>بسم الله الرحمن الرحيم </h1>
      <div className={style.divdatasurha}>
        {filayahs.map((ayah, index) => (
          <span className="d-block bg-danger pt-5" key={index}> {ayah.text}</span>
        
        ))}
      </div>
    </section>
  );
}
