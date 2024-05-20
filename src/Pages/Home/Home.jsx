import React from 'react';
import style from "./Home.module.css";
import "../../style.css"

import QuranPage from './QurabPage/QuranPage';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
export default function Home() {
const [ t , i18n ] = useTranslation();




  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
const goToAzkary= () => {
  navigate("/Azkary")
}
const goToRadio= () => {
  navigate("/radio")
}
const goToTalem= () => {
  navigate("/taliameldi")
}


  return (
    <>
      <section className={style.sectioOne}>
        <div className={style.qeran}>
        <img src="imges/download__1_-removebg-preview.png" className="img-fluid" alt="quran main page icon"></img>
        </div>
       
        <div className={style.btnsmain}>
          <button onClick={() => scrollToSection('sectionShowSurahs')}>{t('quran')} </button>
          <button onClick={goToAzkary}>{t('azkar')}</button>
          <button onClick={goToRadio}>{t('radio')}</button>
          <button onClick={goToTalem}>{t('talim')}</button>
        </div>
        
      </section>
      <section id="sectionShowSurahs" className={style.sectioTwo}>
        <h2>{t('title')}</h2>  
        <QuranPage />
      </section>


<section className={style.sectionTwoElHg}> 

<img src="imges/pexels-photo-4346403.jpeg" className="img-fluid" alt="islamic image"></img>


<p>
  {t('phg')}
</p>



</section>

<ScrollToTopButton/>
    </>
  );
}
