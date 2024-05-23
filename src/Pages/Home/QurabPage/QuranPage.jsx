import React, { useEffect, useState } from 'react';
import './quran.css';
import surahs from '../../../surahs.json';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export default function QuranPage() {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [filterItem, setFilterItem] = useState([]);
  const [filayahs, setFilayahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCategoryFilter = () => {
      try {
        const filteredSurah = surahs.data.surahs.filter(
          (surah) => surah.name
        );

        if (filteredSurah.length > 0) {
          setFilterItem(filteredSurah);
          setFilayahs(filteredSurah.flatMap(surah => surah.ayahs));
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
          setError(new Error('Surah not found'));
        }
      } catch (error) {
        console.error('Error fetching surah data:', error);
        setLoading(false);
        setError(new Error('Failed to fetch surah data'));
      }
    };

    handleCategoryFilter();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {filterItem.map(item => (
          <div className="col" key={item.number}>
            <Link to={`/${item.number}`} className="linkcontB">
              <div className="contetB text-light p-3">
                <div className="adasdasd rounded-5">
                  <p>{item.number}</p>
                </div>
                <span>{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
