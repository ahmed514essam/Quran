import React, { useEffect, useState } from 'react';
import style from "./ShowSurha.module.css";
import surahs from "../../../surahs.json"
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
    const handleCategoryFilter = (surnumber) => {
      const filteredSurah = surahs.data.surahs.find((surah) => surah.number == surnumber);
      if (filteredSurah) {
        setFilterItem(filteredSurah);
        setFilayahs(filteredSurah.ayahs);
        setLoading(false);
        setError(null);
      } else {
        setLoading(false);
        setError(new Error('Surah not found'));
      }
    };

    handleCategoryFilter(number);
  }, [number]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
          <p>{translateRevelationType(filterItem.revelationType)}</p>
        </div>
      </nav>
      <h1 className={style.honebasmala}>بسم الله الرحمن الرحيم </h1>
      <div className={style.divdatasurha}>
        {filterItem.ayahs.map((ayah, index) => (
          <p className={style.contetOfAyahs} key={index}><span className={style.numberayahs}>{ayah.numberInSurah}</span> {ayah.text}  </p>
        ))}
      </div>
    </section>
  );
}
