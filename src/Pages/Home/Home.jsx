import React from 'react';
import style from "./Home.module.css";
import "../../style.css"
import SearchInput from './SearchInput/SearchInput';
import QuranPage from './QurabPage/QuranPage';
import { useNavigate } from 'react-router-dom';

export default function Home() {
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
          <img src="/public/imges/download__1_-removebg-preview.png" alt="Quran" />
        </div>
        <br />
        <div className={style.btnsmain}>
          <button onClick={() => scrollToSection('sectionShowSurahs')}>القرأن الكريم</button>
          <button onClick={goToAzkary}>الأذكار</button>
          <button onClick={goToRadio}>الراديو</button>
          <button onClick={goToTalem}>تعليم</button>
        </div>
        {/* <SearchInput /> */}
      </section>
      <section id="sectionShowSurahs" className={style.sectioTwo}>
        <h2>أقرأ بأسم ربك الذي خلق</h2>
        <QuranPage />
      </section>
    </>
  );
}
