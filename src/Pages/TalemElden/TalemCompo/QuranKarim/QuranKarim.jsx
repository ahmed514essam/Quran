import React from 'react'
import "./QuranKarim.css"
import { useTranslation } from 'react-i18next';
export default function QuranKarim() {
  const [ t , i18n ] = useTranslation();
  return (
    <section className="sectionAbadatAll">
    <div className="divhead">
      <h2>   {t('qt')}</h2>
      <p>

      {t('text16')}</p>    </div>

    <div className="divcontentPage">
      <div class="card ">
        <img
          src="/imges/qurankariem.jpg"
          className="cardimges card-img-top"
        />
        <div className="card-body">
          <h3> {t('quran')}</h3>
          <p className="card-text">
          {t('text17')}          </p>
        </div>
      </div>
    
     
      
   
     
    </div>
  </section>
  )
}
