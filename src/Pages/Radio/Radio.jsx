import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Radio.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMicrophone } from '@fortawesome/free-solid-svg-icons';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
export default function Radio() {
  const [showradios, setShowradios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiRadio = async () => {
      try {
        const res = await axios.get("https://mp3quran.net/api/v3/radios");
        const data = res.data.radios;
      
        setShowradios(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getApiRadio();
  }, []);

  // Function to order the data
  const orderData = () => {
    const orderedData = [...showradios].sort((a, b) => a.name.localeCompare(b.name));
    setShowradios(orderedData);
  };

  // Call the orderData function to order the data
  useEffect(() => {
    if (!loading && showradios.length > 0) {
      orderData();
    }
  }, [loading]);

  return (<>
    <section className="sectionradios">
    <div className="container text-center">
      <h1 >اذاعة القرأن الكريم</h1>
   
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {showradios.map((item, index) => (
          <div className="col" key={index}>
            <Link to={item.url} className="linkcontB">
              <div className="contetB text-light p-3">
                <span className="namereaderradios">{item.name}</span>
                <span>  </span>
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section>
<ScrollToTopButton/>
    </>
  );
}
