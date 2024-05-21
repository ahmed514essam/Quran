import React, { useEffect, useState } from 'react';
import './quran.css';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export default function QuranPage() {
  const [t, i18n] = useTranslation();
  const [soraname, setSoraame] = useState([]);
  const navigate = useNavigate();

  const getFromApi = async () => {
    try {
      const res = await fetch('http://api.alquran.cloud/v1/surah');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setSoraame(data?.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can handle the error here, e.g., display a message to the user
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {soraname.map(item => (
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
    </>
  );
}
