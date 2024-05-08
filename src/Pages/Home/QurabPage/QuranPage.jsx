import React, { useEffect, useState } from 'react';
import "./quran.css";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export default function QuranPage() {
  const [t , i18n] = useTranslation();



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

  // const soranam = props.soraname.map(item => {
  //   if (i18n == 'ar'){
  //     return ({
  //       'id' : item.id ,
  //   'title' : item.title.ar , 
  //   'description' : Read.description.ar , 
  //     });
  //   }
  //   });


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
