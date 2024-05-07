import React, { useEffect, useState } from 'react';
import "./quran.css";

import { Link, useNavigate } from 'react-router-dom';

export default function QuranPage() {
  const [soraname, setSoraame] = useState([]);

  const getFromApi = async () => {
    const res = await fetch("http://api.alquran.cloud/v1/surah");
    const data = await res.json();

    setSoraame(data?.data || []);
    console.log(data.data);
  };

  useEffect(() => {
    getFromApi();
  }, []);

  const navigate = useNavigate();

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
